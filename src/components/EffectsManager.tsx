import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import OBR from '@owlbear-rodeo/sdk';
import { Sun } from 'lucide-react';
import { EXTENSION_ID } from '../helpers/MockData';
import { UnitConstants } from '../interfaces/MetadataKeys';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';
import LOGGER from '../helpers/Logger';
import { PopupModal } from './PopupModal';
import { useForgeTheme } from '../helpers/ThemeContext';

export const EFFECTS_METADATA_KEY = `${EXTENSION_ID}/effects`;
const EFFECTS_NOTIFICATION_CHANNEL = `${EXTENSION_ID}/effects-expired`;

export type EffectDurationType = 'turns' | 'rounds';
export type EffectEndTiming = 'start' | 'end';
export type TrackedEffectType = 'neutral' | 'buff' | 'debuff';

export interface TrackedEffect {
  id: string;
  name: string;
  remaining: number;
  durationType: EffectDurationType;
  endTiming: EffectEndTiming;
  effectType: TrackedEffectType;
  targets: string[];
  createdByName: string;
  createdById?: string;
}

interface EffectsUnit {
  id: string;
  name: string;
}

interface SceneItemLike {
  id: string;
  name?: string;
  metadata?: Record<string, unknown>;
}

interface PlayerLike {
  role?: string;
}

const EffectsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const EffectsFormRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const EffectsFormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`;

const EffectsField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
`;

const EffectsButtonCell = styled.div`
  flex: 0 0 120px;
  min-width: 120px;
  display: flex;
  align-items: flex-end;
`;

const EffectsFieldLabel = styled.label<{ theme: ForgeTheme }>`
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.75)};
  font-size: 10px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

const EffectsInput = styled.input<{ theme: ForgeTheme }>`
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 4px;
  color: ${props => props.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 13px;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.OFFSET};
  }
`;

const EffectsSelect = styled.select<{ theme: ForgeTheme }>`
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 4px;
  color: ${props => props.theme.PRIMARY};
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: 6px 8px;
  height: 38px;
  font-size: 13px;
  cursor: pointer;
  appearance: auto;
  -webkit-appearance: menulist;
  -moz-appearance: menulist;
  padding-right: 22px;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.OFFSET};
  }
`;

const EffectsMultiSelect = styled(EffectsSelect)`
  min-width: 180px;
  height: 96px;
  padding-right: 8px;
`;

const EffectsButton = styled.button<{ theme: ForgeTheme }>`
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 4px;
  height: 38px;
  color: ${props => props.theme.PRIMARY};
  padding: 6px 10px;
  cursor: pointer;
  font-size: 13px;
  width: auto;

  &:hover {
    background: ${props => rgbaFromHex(props.theme.OFFSET, 0.5)};
  }
`;

const EffectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 240px;
  overflow-y: auto;
`;

const EffectItemRow = styled.div<{ theme: ForgeTheme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.35)};
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`;

const EffectItemMeta = styled.div<{ theme: ForgeTheme }>`
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.8)};
  font-size: 12px;
`;

const EffectName = styled.div<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`;

const EffectsEmpty = styled.p<{ theme: ForgeTheme }>`
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.75)};
  margin: 0;
  font-size: 13px;
`;

const EffectsError = styled.p<{ theme: ForgeTheme }>`
  color: #ff6b6b;
  margin: 0;
  font-size: 12px;
`;

const EffectsButtonWrap = styled.div`
  position: relative;
  display: inline-flex;
`;

const EffectsTriggerButton = styled.button<{ theme: ForgeTheme; $active?: boolean }>`
  background: ${props => props.$active ? rgbaFromHex(props.theme.OFFSET, 0.65) : 'rgba(0, 0, 0, 0.3)'};
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 4px;
  color: ${props => props.$active ? props.theme.PRIMARY : props.theme.OFFSET};
  padding: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${props => props.theme.OFFSET};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const EffectsCountBadge = styled.span<{ theme: ForgeTheme }>`
  position: absolute;
  top: -7px;
  right: -7px;
  min-width: 16px;
  height: 16px;
  border-radius: 999px;
  background: ${props => props.theme.PRIMARY};
  color: ${props => props.theme.BACKGROUND};
  border: 1px solid ${props => props.theme.BORDER};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  padding: 0 3px;
`;

const parseTrackedEffects = (rawValue: unknown): TrackedEffect[] => {
  if (!Array.isArray(rawValue)) {
    return [];
  }

  return rawValue.reduce<TrackedEffect[]>((acc, value) => {
    if (!value || typeof value !== 'object') {
      return acc;
    }

    const effect = value as Partial<TrackedEffect>;
    const name = typeof effect.name === 'string' ? effect.name.trim() : '';
    const remainingRaw = Number(effect.remaining);
    const remaining = Number.isFinite(remainingRaw) ? Math.max(0, Math.trunc(remainingRaw)) : 0;
    const durationType: EffectDurationType = effect.durationType === 'turns' ? 'turns' : 'rounds';
    const endTiming: EffectEndTiming = effect.endTiming === 'end' ? 'end' : 'start';
    const effectType: TrackedEffectType = effect.effectType === 'buff'
      ? 'buff'
      : effect.effectType === 'debuff'
        ? 'debuff'
        : 'neutral';
    const targets = Array.isArray(effect.targets)
      ? Array.from(new Set(effect.targets.filter((targetId): targetId is string => typeof targetId === 'string' && targetId.length > 0)))
      : [];

    if (!name || !remaining) {
      return acc;
    }

    acc.push({
      id: typeof effect.id === 'string' && effect.id ? effect.id : crypto.randomUUID(),
      name,
      remaining,
      durationType,
      endTiming,
      effectType,
      targets,
      createdByName: typeof effect.createdByName === 'string' && effect.createdByName
        ? effect.createdByName
        : 'Unknown',
      createdById: typeof effect.createdById === 'string' ? effect.createdById : undefined,
    });

    return acc;
  }, []);
};

interface UseEffectsManagerParamsGeneric<TItem extends SceneItemLike> {
  items: TItem[];
  units: EffectsUnit[];
  setItems(items: TItem[]): void;
  playerData: PlayerLike | null | undefined;
}

export const useEffectsManager = <TItem extends SceneItemLike>({
  items,
  units,
  setItems,
  playerData,
}: UseEffectsManagerParamsGeneric<TItem>) => {
  const [effectsModalUnitId, setEffectsModalUnitId] = useState<string | null>(null);
  const [effectNameInput, setEffectNameInput] = useState('');
  const [effectDurationInput, setEffectDurationInput] = useState('1');
  const [effectDurationType, setEffectDurationType] = useState<EffectDurationType>('rounds');
  const [effectEndTiming, setEffectEndTiming] = useState<EffectEndTiming>('start');
  const [effectType, setEffectType] = useState<TrackedEffectType>('neutral');
  const [effectTargetIds, setEffectTargetIds] = useState<string[]>([]);
  const [effectsModalError, setEffectsModalError] = useState<string | null>(null);

  const effectsByUnitId = useMemo(() => {
    const map = new Map<string, TrackedEffect[]>();
    items.forEach((item) => {
      if (item.metadata?.[UnitConstants.ON_LIST] !== true) {
        return;
      }
      map.set(item.id, parseTrackedEffects(item.metadata?.[EFFECTS_METADATA_KEY]));
    });
    return map;
  }, [items]);

  const getEffectsForUnit = (unitId: string): TrackedEffect[] => effectsByUnitId.get(unitId) || [];

  const updateUnitEffects = async (unitId: string, effects: TrackedEffect[]) => {
    const cleanedEffects = effects.filter((effect) => effect.remaining > 0);

    const updatedItems = items.map((item) => {
      if (item.id !== unitId) {
        return item;
      }

      const metadata: Record<string, unknown> = { ...(item.metadata || {}) };
      if (cleanedEffects.length > 0) {
        metadata[EFFECTS_METADATA_KEY] = cleanedEffects;
      } else {
        delete metadata[EFFECTS_METADATA_KEY];
      }

      return {
        ...item,
        metadata,
      };
    });
    setItems(updatedItems);

    await OBR.scene.items.updateItems([unitId], (itemsToUpdate) => {
      const metadata: Record<string, unknown> = { ...(itemsToUpdate[0].metadata || {}) };
      if (cleanedEffects.length > 0) {
        metadata[EFFECTS_METADATA_KEY] = cleanedEffects;
      } else {
        delete metadata[EFFECTS_METADATA_KEY];
      }
      itemsToUpdate[0].metadata = metadata;
    });
  };

  const notifyEffectExpired = async (message: string) => {
    try {
      await OBR.broadcast.sendMessage(EFFECTS_NOTIFICATION_CHANNEL, { message }, { destination: 'ALL' });
    } catch (error) {
      LOGGER.error('Failed to broadcast expired effect message', error);
      await OBR.notification.show(message, 'WARNING');
    }
  };

  const processEffectsForTurnEvent = async (eventTiming: EffectEndTiming, unitId: string) => {
    const isGm = String(playerData?.role || '').toUpperCase() === 'GM';
    if (!isGm) {
      return;
    }

    const updates: Array<{ unitId: string; effects: TrackedEffect[] }> = [];
    const notifications: string[] = [];

    items.forEach((item) => {
      if (item.metadata?.[UnitConstants.ON_LIST] !== true) {
        return;
      }

      const effects = parseTrackedEffects(item.metadata?.[EFFECTS_METADATA_KEY]);
      if (effects.length === 0) {
        return;
      }

      let changed = false;
      const nextEffects: TrackedEffect[] = [];

      effects.forEach((effect) => {
        const shouldTick = effect.endTiming === eventTiming
          && (effect.durationType === 'turns' || item.id === unitId);

        if (!shouldTick) {
          nextEffects.push(effect);
          return;
        }

        const nextRemaining = effect.remaining - 1;
        changed = true;

        if (nextRemaining <= 0) {
          notifications.push(`${item.name || 'Unit'}: ${effect.name} expired`);
          return;
        }

        nextEffects.push({
          ...effect,
          remaining: nextRemaining,
        });
      });

      if (changed) {
        updates.push({ unitId: item.id, effects: nextEffects });
      }
    });

    for (const update of updates) {
      await updateUnitEffects(update.unitId, update.effects);
    }

    if (notifications.length > 0) {
      for (const message of notifications) {
        await notifyEffectExpired(message);
      }
    }
  };

  const selectedEffectsUnit = useMemo(
    () => (effectsModalUnitId ? units.find((unit) => unit.id === effectsModalUnitId) || null : null),
    [effectsModalUnitId, units]
  );

  const activeEffectsForSelectedUnit = useMemo(
    () => (effectsModalUnitId ? getEffectsForUnit(effectsModalUnitId) : []),
    [effectsModalUnitId, effectsByUnitId]
  );

  const handleOpenEffectsModal = (unitId: string) => {
    setEffectsModalError(null);
    setEffectNameInput('');
    setEffectDurationInput('1');
    setEffectDurationType('rounds');
    setEffectEndTiming('start');
    setEffectType('neutral');
    setEffectTargetIds([unitId]);
    setEffectsModalUnitId(unitId);
  };

  const handleCloseEffectsModal = () => {
    setEffectsModalUnitId(null);
    setEffectsModalError(null);
  };

  const handleAddEffect = async () => {
    if (!effectsModalUnitId) {
      return;
    }

    const trimmedName = effectNameInput.trim();
    const durationValue = parseInt(effectDurationInput, 10);

    if (!trimmedName) {
      setEffectsModalError('Enter an effect name.');
      return;
    }

    if (!Number.isFinite(durationValue) || durationValue <= 0) {
      setEffectsModalError('Duration must be a positive number.');
      return;
    }

    const validTargetIds = Array.from(new Set(effectTargetIds.filter((targetId) => units.some((unit) => unit.id === targetId))));
    if (validTargetIds.length === 0) {
      setEffectsModalError('Select at least one target.');
      return;
    }

    const effects = getEffectsForUnit(effectsModalUnitId);
    const sourceTokenName = selectedEffectsUnit?.name
      || items.find((item) => item.id === effectsModalUnitId)?.name
      || 'Unknown';

    const newEffect: TrackedEffect = {
      id: crypto.randomUUID(),
      name: trimmedName,
      remaining: durationValue,
      durationType: effectDurationType,
      endTiming: effectEndTiming,
      effectType,
      targets: validTargetIds,
      createdByName: sourceTokenName,
      createdById: effectsModalUnitId,
    };

    await updateUnitEffects(effectsModalUnitId, [...effects, newEffect]);
    setEffectsModalError(null);
    setEffectNameInput('');
    setEffectDurationInput('1');
    setEffectType('neutral');
    setEffectTargetIds([effectsModalUnitId]);
  };

  const handleTargetSelectionChange = (nextTargetIds: string[]) => {
    setEffectTargetIds(Array.from(new Set(nextTargetIds)));
  };

  const handleDeleteEffect = async (effectId: string) => {
    if (!effectsModalUnitId) {
      return;
    }

    const effects = getEffectsForUnit(effectsModalUnitId).filter((effect) => effect.id !== effectId);
    await updateUnitEffects(effectsModalUnitId, effects);
  };

  useEffect(() => {
    const unsubscribe = OBR.broadcast.onMessage(EFFECTS_NOTIFICATION_CHANNEL, async (event) => {
      const rawMessage = (event.data as { message?: unknown } | undefined)?.message;
      if (typeof rawMessage !== 'string' || !rawMessage.trim()) {
        return;
      }

      await OBR.notification.show(rawMessage, 'WARNING');
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    effectsModalUnitId,
    selectedEffectsUnit,
    activeEffectsForSelectedUnit,
    effectNameInput,
    setEffectNameInput,
    effectDurationInput,
    setEffectDurationInput,
    effectDurationType,
    setEffectDurationType,
    effectEndTiming,
    setEffectEndTiming,
    effectType,
    setEffectType,
    effectTargetIds,
    setEffectTargetIds: handleTargetSelectionChange,
    effectsModalError,
    units,
    getEffectsForUnit,
    handleOpenEffectsModal,
    handleCloseEffectsModal,
    handleAddEffect,
    handleDeleteEffect,
    processEffectsForTurnEvent,
  };
};

interface EffectsManagerModalProps {
  manager: ReturnType<typeof useEffectsManager>;
}

export const EffectsManagerModal: React.FC<EffectsManagerModalProps> = ({ manager }) => {
  const { theme } = useForgeTheme();
  const targetsById = useMemo(() => {
    const map = new Map<string, string>();
    manager.units.forEach((unit) => {
      map.set(unit.id, unit.name);
    });
    return map;
  }, [manager.units]);

  const getEffectTypeLabel = (effectType: TrackedEffectType) => {
    if (effectType === 'buff') {
      return 'Buff';
    }
    if (effectType === 'debuff') {
      return 'Debuff';
    }
    return 'Neutral';
  };

  const getTargetsLabel = (targets: string[]) => {
    if (targets.length === 0) {
      return 'No targets';
    }

    const names = targets
      .map((targetId) => targetsById.get(targetId))
      .filter((name): name is string => typeof name === 'string' && name.length > 0);

    if (names.length === 0) {
      return `${targets.length} target${targets.length === 1 ? '' : 's'}`;
    }

    if (names.length <= 2) {
      return names.join(', ');
    }

    return `${names.slice(0, 2).join(', ')} +${names.length - 2}`;
  };

  return (
    <PopupModal
      isOpen={!!manager.effectsModalUnitId}
      title={manager.selectedEffectsUnit ? `Effects: ${manager.selectedEffectsUnit.name}` : 'Effects'}
      onClose={manager.handleCloseEffectsModal}
      minWidth="520px"
      maxWidth="600px"
    >
      <EffectsSection>
        <EffectsFormRows>
          <EffectsFormRow>
            <EffectsField style={{ flex: '0 0 120px' }}>
              <EffectsFieldLabel theme={theme}>Effect</EffectsFieldLabel>
              <EffectsInput
                theme={theme}
                type="text"
                placeholder="Name"
                value={manager.effectNameInput}
                onChange={(e) => manager.setEffectNameInput(e.target.value)}
              />
            </EffectsField>
            <EffectsField style={{ flex: '0 0 140px' }}>
              <EffectsFieldLabel theme={theme}>Duration</EffectsFieldLabel>
              <EffectsInput
                theme={theme}
                type="number"
                min={1}
                value={manager.effectDurationInput}
                onChange={(e) => manager.setEffectDurationInput(e.target.value)}
              />
            </EffectsField>
            <EffectsField style={{ flex: '0 0 120px' }}>
              <EffectsFieldLabel theme={theme}>By</EffectsFieldLabel>
              <EffectsSelect
                theme={theme}
                value={manager.effectDurationType}
                onChange={(e) => manager.setEffectDurationType(e.target.value as EffectDurationType)}
              >
                <option value="turns">Turns</option>
                <option value="rounds">Rounds</option>
              </EffectsSelect>
            </EffectsField>
          </EffectsFormRow>

          <EffectsFormRow>
            <EffectsField style={{ flex: '0 0 120px' }}>
              <EffectsFieldLabel theme={theme}>Type</EffectsFieldLabel>
              <EffectsSelect
                theme={theme}
                value={manager.effectType}
                onChange={(e) => manager.setEffectType(e.target.value as TrackedEffectType)}
              >
                <option value="neutral">Neutral</option>
                <option value="buff">Buff</option>
                <option value="debuff">Debuff</option>
              </EffectsSelect>
            </EffectsField>
            <EffectsField style={{ flex: '0 0 140px' }}>
              <EffectsFieldLabel theme={theme}>Ends at</EffectsFieldLabel>
              <EffectsSelect
                theme={theme}
                value={manager.effectEndTiming}
                onChange={(e) => manager.setEffectEndTiming(e.target.value as EffectEndTiming)}
              >
                <option value="start">Start of turn</option>
                <option value="end">End of turn</option>
              </EffectsSelect>
            </EffectsField>
            <EffectsButtonCell>
              <EffectsButton theme={theme} onClick={manager.handleAddEffect} style={{ width: '100%' }}>Add</EffectsButton>
            </EffectsButtonCell>
          </EffectsFormRow>
        </EffectsFormRows>

        <EffectsField>
          <EffectsFieldLabel theme={theme}>Targets</EffectsFieldLabel>
          <EffectsMultiSelect
            theme={theme}
            multiple
            value={manager.effectTargetIds}
            onChange={(e) => {
              const values = Array.from(e.target.selectedOptions).map((option) => option.value);
              manager.setEffectTargetIds(values);
            }}
          >
            {manager.units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.name}
              </option>
            ))}
          </EffectsMultiSelect>
        </EffectsField>

        {manager.effectsModalError && <EffectsError theme={theme}>{manager.effectsModalError}</EffectsError>}

        {manager.activeEffectsForSelectedUnit.length === 0 ? (
          <EffectsEmpty theme={theme}>No active effects.</EffectsEmpty>
        ) : (
          <EffectsList>
            {manager.activeEffectsForSelectedUnit.map((effect) => (
              <EffectItemRow key={effect.id} theme={theme}>
                <div>
                  <EffectName theme={theme}>{effect.name}</EffectName>
                  <EffectItemMeta theme={theme}>
                    {getEffectTypeLabel(effect.effectType)} • {effect.remaining} {effect.durationType} • ends at {effect.endTiming === 'start' ? 'start of turn' : 'end of turn'} • by {effect.createdByName}
                  </EffectItemMeta>
                  <EffectItemMeta theme={theme}>
                    Targets: {getTargetsLabel(effect.targets)}
                  </EffectItemMeta>
                </div>
                <EffectsButton
                  theme={theme}
                  onClick={() => {
                    void manager.handleDeleteEffect(effect.id);
                  }}
                >
                  Delete
                </EffectsButton>
              </EffectItemRow>
            ))}
          </EffectsList>
        )}
      </EffectsSection>
    </PopupModal>
  );
};

interface EffectsTriggerCellProps {
  activeEffectsCount: number;
  canInteract: boolean;
  onOpen: () => void;
  icon?: React.ReactNode;
}

export const EffectsTriggerCell: React.FC<EffectsTriggerCellProps> = ({
  activeEffectsCount,
  canInteract,
  onOpen,
  icon,
}) => {
  const { theme } = useForgeTheme();
  const hasActiveEffects = activeEffectsCount > 0;

  return (
    <EffectsButtonWrap>
      <EffectsTriggerButton
        theme={theme}
        $active={hasActiveEffects}
        disabled={!canInteract}
        onClick={() => {
          if (!canInteract) {
            return;
          }
          onOpen();
        }}
      >
        {icon || <Sun />}
      </EffectsTriggerButton>
      {activeEffectsCount > 0 && (
        <EffectsCountBadge theme={theme}>
          {activeEffectsCount > 99 ? '99+' : activeEffectsCount}
        </EffectsCountBadge>
      )}
    </EffectsButtonWrap>
  );
};