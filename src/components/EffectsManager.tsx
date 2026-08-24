import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import OBR from '@owlbear-rodeo/sdk';
import { StepBack, Sun, X } from 'lucide-react';
import { EXTENSION_ID } from '../helpers/MockData';
import { OwlbearIds } from '../helpers/Constants';
import { UnitConstants } from '../interfaces/MetadataKeys';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';
import LOGGER from '../helpers/Logger';
import { PopupModal } from './PopupModal';
import { useForgeTheme } from '../helpers/ThemeContext';
import { useTranslation } from '../i18n/Translation';
import { useSceneStore } from '../helpers/BSCache';

export const EFFECTS_METADATA_KEY = `${EXTENSION_ID}/effects`;
const EFFECTS_NOTIFICATION_CHANNEL = `${EXTENSION_ID}/effects-expired`;

export type EffectDurationType = 'turns' | 'rounds';
export type EffectEndTiming = 'start' | 'end';
export type TrackedEffectType = 'neutral' | 'buff' | 'debuff';

interface RuntimeEffectPresetOption {
  id: string;
  name: string;
  type: TrackedEffectType;
  duration: number;
  durationType: EffectDurationType;
  endTiming: EffectEndTiming;
}

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

interface MarkedTransmitData {
  TokenId: string;
  LabelName: string;
  Show?: boolean;
}

const EffectsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const EffectsModalCloseButton = styled.button<{ theme: ForgeTheme }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 4px;
  right: 0px;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background: transparent;
  color: ${props => props.theme.PRIMARY};
  cursor: pointer;

  &:focus,
  &:focus-visible,
  &:active {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    color: ${props => props.theme.OFFSET};
  }
`;

const EffectsRowSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
`;

const EffectsField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
`;

const EffectsFieldLabel = styled.label<{ theme: ForgeTheme }>`
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.75)};
  font-size: 10px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  align-content: center;
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

const EffectsButton = styled.button<{ theme: ForgeTheme }>`
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 8px;
  height: 32px;
  color: ${props => props.theme.PRIMARY};
  padding: 4px;
  cursor: pointer;
  font-size: 13px;
  width: 100%;
  justify-items: center;

  &:hover {
    outline: none;
    border-color: ${props => props.theme.OFFSET};
  }
`;

const DeleteButton = styled.button<{ theme: ForgeTheme }>`
  background: ${props => rgbaFromHex(props.theme.OFFSET, 0.25)};
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 8px;
  height: 38px;
  color: ${props => props.theme.PRIMARY};
  padding: 6px;
  cursor: pointer;
  font-size: 13px;
  width: 38px;

  &:hover {
    background: ${props => rgbaFromHex(props.theme.OFFSET, 0.75)};
  }
`;

const EffectsQuickSetGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const EffectsQuickSetButton = styled.button<{ theme: ForgeTheme; $active?: boolean }>`
  background: ${props => props.$active ? rgbaFromHex(props.theme.OFFSET, 0.8) : 'rgba(0,0,0,0.35)'};
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 8px;
  color: ${props => props.theme.PRIMARY};
  padding: 6px 10px;
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  width: 100%;

  &:hover {
    border-color: ${props => props.theme.OFFSET};
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

const parseTrackedEffects = (rawValue: unknown, unknownSourceLabel = 'Unknown'): TrackedEffect[] => {
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
        : unknownSourceLabel,
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
  const { t } = useTranslation();
  const runtimeSystemData = useSceneStore((state) => state.systemData);
  const [effectsModalUnitId, setEffectsModalUnitId] = useState<string | null>(null);
  const [isSpeedyMode, setIsSpeedyMode] = useState(false);
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
      map.set(item.id, parseTrackedEffects(item.metadata?.[EFFECTS_METADATA_KEY], t('effectsManager.unknownSource')));
    });
    return map;
  }, [items, t]);

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

  const notifyMarkedEffectUpdate = async (payload: MarkedTransmitData[]) => {
    if (payload.length === 0) {
      return;
    }

    try {
      await OBR.broadcast.sendMessage(OwlbearIds.MARKCONNECT, payload, { destination: 'LOCAL' });
    } catch (error) {
      LOGGER.error('Failed to broadcast marked effect update', error);
    }
  };

  const processEffectsForTurnEvent = async (eventTiming: EffectEndTiming, unitId: string) => {
    const isGm = String(playerData?.role || '').toUpperCase() === 'GM';
    if (!isGm) {
      return;
    }

    const updates: Array<{ unitId: string; effects: TrackedEffect[] }> = [];
    const notifications: string[] = [];
    const markedExpiredPayload: MarkedTransmitData[] = [];

    items.forEach((item) => {
      if (item.metadata?.[UnitConstants.ON_LIST] !== true) {
        return;
      }

      const effects = parseTrackedEffects(item.metadata?.[EFFECTS_METADATA_KEY], t('effectsManager.unknownSource'));
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
          notifications.push(t('effectsManager.expiredNotification', {
            unit: item.name || t('effectsManager.unitFallback'),
            effect: effect.name,
          }));
          markedExpiredPayload.push({ LabelName: effect.name, TokenId: item.id, Show: false });
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

    await notifyMarkedEffectUpdate(markedExpiredPayload);

    if (notifications.length > 0) {
      for (const message of notifications) {
        await notifyEffectExpired(message);
      }
    }
  };

  const effectPresetOptions = useMemo<RuntimeEffectPresetOption[]>(() => {
    return (runtimeSystemData?.effectPresets ?? []).map((preset): RuntimeEffectPresetOption => {
      const durationType: EffectDurationType = preset.durationType === 'turns' ? 'turns' : 'rounds';
      const endTiming: EffectEndTiming = preset.endTiming === 'end' ? 'end' : 'start';

      return {
        id: preset.id,
        name: preset.name.trim(),
        type: preset.type === 'buff' || preset.type === 'debuff' || preset.type === 'neutral'
          ? preset.type
          : getPresetTypeForName(preset.name),
        duration: Number.isFinite(Number(preset.duration)) && Number(preset.duration) > 0
          ? Math.max(1, Math.trunc(Number(preset.duration)))
          : 1,
        durationType,
        endTiming,
      };
    }).filter((preset) => preset.name.length > 0).slice(0, 30);
  }, [runtimeSystemData]);

  const selectedEffectsUnit = useMemo(
    () => (effectsModalUnitId ? units.find((unit) => unit.id === effectsModalUnitId) || null : null),
    [effectsModalUnitId, units]
  );

  const activeEffectsForSelectedUnit = useMemo(
    () => (effectsModalUnitId ? getEffectsForUnit(effectsModalUnitId) : []),
    [effectsModalUnitId, effectsByUnitId]
  );

  const getPresetTypeForName = (presetName: string): TrackedEffectType => {
    const normalized = presetName.toLowerCase();
    const buffHints = ['buff', 'blessed', 'haste', 'rage', 'inspiration', 'shield', 'fortified', 'quickened', 'resistance'];
    const debuffHints = ['debuff', 'poison', 'restrain', 'blinded', 'charmed', 'frightened', 'paralyzed', 'stunned', 'slow', 'exhausted', 'burning', 'bleeding', 'dazed'];
    if (buffHints.some((hint) => normalized.includes(hint))) return 'buff';
    if (debuffHints.some((hint) => normalized.includes(hint))) return 'debuff';
    return 'neutral';
  };

  const handleOpenEffectsModal = (unitId: string) => {
    setEffectsModalError(null);
    setIsSpeedyMode(false);
    setEffectNameInput('');
    setEffectDurationInput('1');
    setEffectDurationType('rounds');
    setEffectEndTiming('start');
    setEffectType('neutral');
    setEffectTargetIds([unitId]);
    setEffectsModalUnitId(unitId);
  };

  const handleOpenQuickSetModal = (unitId: string) => {
    setEffectsModalError(null);
    setIsSpeedyMode(true);
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
    setIsSpeedyMode(false);
    setEffectsModalError(null);
  };

  const handleAddEffect = async () => {
    if (!effectsModalUnitId) {
      return;
    }

    const trimmedName = effectNameInput.trim();
    const durationValue = parseInt(effectDurationInput, 10);

    if (!trimmedName) {
      setEffectsModalError(t('effectsManager.error.enterName'));
      return;
    }

    if (!Number.isFinite(durationValue) || durationValue <= 0) {
      setEffectsModalError(t('effectsManager.error.durationPositive'));
      return;
    }

    const validTargetIds = Array.from(new Set(effectTargetIds.filter((targetId) => units.some((unit) => unit.id === targetId))));
    if (validTargetIds.length === 0) {
      setEffectsModalError(t('effectsManager.error.selectTarget'));
      return;
    }

    const effects = getEffectsForUnit(effectsModalUnitId);
    const sourceTokenName = selectedEffectsUnit?.name
      || items.find((item) => item.id === effectsModalUnitId)?.name
      || t('effectsManager.unknownSource');

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
    await notifyMarkedEffectUpdate([{ LabelName: newEffect.name, TokenId: effectsModalUnitId, Show: true }]);
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

    const currentEffects = getEffectsForUnit(effectsModalUnitId);
    const deletedEffect = currentEffects.find((effect) => effect.id === effectId);
    const effects = currentEffects.filter((effect) => effect.id !== effectId);
    await updateUnitEffects(effectsModalUnitId, effects);

    if (deletedEffect) {
      await notifyMarkedEffectUpdate([{ LabelName: deletedEffect.name, TokenId: effectsModalUnitId, Show: false }]);
    }
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
    effectPresetOptions,
    isSpeedyMode,
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
    handleOpenQuickSetModal,
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
  const { t } = useTranslation();
  const [guidedStep, setGuidedStep] = useState<'type' | 'name' | 'duration' | 'by' | 'ends' | 'targets'>('type');
  const [speedyStep, setSpeedyStep] = useState<'type' | 'preset' | 'targets'>('type');
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    if (!manager.effectsModalUnitId) {
      return;
    }

    setGuidedStep('type');
    setSpeedyStep('type');
    setLocalError(null);
  }, [manager.effectsModalUnitId, manager.isSpeedyMode]);

  const getEffectTypeLabel = (effectType: TrackedEffectType) => {
    if (effectType === 'buff') {
      return t('effectsManager.type.buff');
    }
    if (effectType === 'debuff') {
      return t('effectsManager.type.debuff');
    }
    return t('effectsManager.type.neutral');
  };

  const getDurationTypeLabel = (durationType: EffectDurationType) => {
    if (durationType === 'turns') {
      return t('effectsManager.durationType.turns');
    }

    return t('effectsManager.durationType.rounds');
  };

  const getEndTimingLabel = (endTiming: EffectEndTiming) => {
    if (endTiming === 'start') {
      return t('effectsManager.endTiming.start');
    }

    return t('effectsManager.endTiming.end');
  };

  const filteredSpeedyPresets = useMemo(
    () => manager.effectPresetOptions.filter((preset) => preset.type === manager.effectType),
    [manager.effectPresetOptions, manager.effectType],
  );

  const toggleTargetId = (targetId: string) => {
    const exists = manager.effectTargetIds.includes(targetId);
    if (exists) {
      manager.setEffectTargetIds(manager.effectTargetIds.filter((id) => id !== targetId));
      return;
    }

    manager.setEffectTargetIds([...manager.effectTargetIds, targetId]);
  };

  const setTypeAndAdvance = (type: TrackedEffectType) => {
    manager.setEffectType(type);
    setLocalError(null);
    if (manager.isSpeedyMode) {
      setSpeedyStep('preset');
      return;
    }
    setGuidedStep('name');
  };

  const submitGuidedName = () => {
    const nextName = manager.effectNameInput.trim();
    if (!nextName) {
      setLocalError(t('effectsManager.error.enterName'));
      return;
    }

    manager.setEffectNameInput(nextName);
    setLocalError(null);
    setGuidedStep('duration');
  };

  const submitGuidedDuration = () => {
    const parsed = Number.parseInt(manager.effectDurationInput, 10);
    if (!Number.isFinite(parsed) || parsed <= 0) {
      setLocalError(t('effectsManager.error.durationPositive'));
      return;
    }

    manager.setEffectDurationInput(String(parsed));
    setLocalError(null);
    setGuidedStep('by');
  };

  const submitTargets = async () => {
    setLocalError(null);
    await manager.handleAddEffect();
    if (manager.isSpeedyMode) {
      setSpeedyStep('type');
    } else {
      setGuidedStep('type');
    }
    manager.handleCloseEffectsModal();
  };

  const applySpeedyPreset = (preset: RuntimeEffectPresetOption) => {
    const trimmedName = preset.name.trim();
    if (!trimmedName) {
      return;
    }

    manager.setEffectNameInput(trimmedName);
    manager.setEffectDurationInput(String(preset.duration));
    manager.setEffectDurationType(preset.durationType);
    manager.setEffectEndTiming(preset.endTiming);
    manager.setEffectType(preset.type);
    if (manager.effectsModalUnitId) {
      manager.setEffectTargetIds([manager.effectsModalUnitId]);
    }
    setLocalError(null);
    setSpeedyStep('targets');
  };

  const canStepBackward = manager.isSpeedyMode
    ? speedyStep !== 'type'
    : guidedStep !== 'type';

  const handleStepBackward = () => {
    setLocalError(null);

    if (manager.isSpeedyMode) {
      if (speedyStep === 'targets') {
        setSpeedyStep('preset');
        return;
      }
      if (speedyStep === 'preset') {
        setSpeedyStep('type');
      }
      return;
    }

    if (guidedStep === 'targets') {
      setGuidedStep('ends');
      return;
    }
    if (guidedStep === 'ends') {
      setGuidedStep('by');
      return;
    }
    if (guidedStep === 'by') {
      setGuidedStep('duration');
      return;
    }
    if (guidedStep === 'duration') {
      setGuidedStep('name');
      return;
    }
    if (guidedStep === 'name') {
      setGuidedStep('type');
    }
  };

  return (
    <PopupModal
      isOpen={!!manager.effectsModalUnitId}
      title={manager.selectedEffectsUnit
        ? t('effectsManager.titleWithUnit', { unit: manager.selectedEffectsUnit.name })
        : t('effectsManager.title')}
      onClose={manager.handleCloseEffectsModal}
      minWidth="200px"
      maxWidth="240px"
    >
      <EffectsSection>
        <EffectsModalCloseButton
          type="button"
          theme={theme}
          aria-label="Close effects modal"
          onClick={manager.handleCloseEffectsModal}
        >
          <X size={20} />
        </EffectsModalCloseButton>

        <EffectsRowSection>
          <EffectsButton
            type="button"
            theme={theme}
            onClick={handleStepBackward}
            disabled={!canStepBackward}
            aria-label="Previous step"
          >
            <StepBack size={24} />
          </EffectsButton>
          <EffectsFieldLabel theme={theme}>{manager.isSpeedyMode ? 'Presets' : 'Builder'}</EffectsFieldLabel>
        </EffectsRowSection>

        {(manager.isSpeedyMode ? speedyStep === 'type' : guidedStep === 'type') && (
          <EffectsField>
            <EffectsFieldLabel theme={theme}>{t('effectsManager.field.type')}</EffectsFieldLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <EffectsQuickSetButton theme={theme} onClick={() => setTypeAndAdvance('buff')}>{t('effectsManager.type.buff')}</EffectsQuickSetButton>
              <EffectsQuickSetButton theme={theme} onClick={() => setTypeAndAdvance('neutral')}>{t('effectsManager.type.neutral')}</EffectsQuickSetButton>
              <EffectsQuickSetButton theme={theme} onClick={() => setTypeAndAdvance('debuff')}>{t('effectsManager.type.debuff')}</EffectsQuickSetButton>
            </div>
          </EffectsField>
        )}

        {!manager.isSpeedyMode && guidedStep === 'name' && (
          <EffectsField>
            <EffectsFieldLabel theme={theme}>{t('effectsManager.field.effect')}</EffectsFieldLabel>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <EffectsInput
                theme={theme}
                type="text"
                placeholder={t('effectsManager.placeholder.name')}
                value={manager.effectNameInput}
                onChange={(e) => manager.setEffectNameInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    submitGuidedName();
                  }
                }}
              />
              <EffectsButton theme={theme} onClick={submitGuidedName}>Next</EffectsButton>
            </div>
          </EffectsField>
        )}

        {!manager.isSpeedyMode && guidedStep === 'duration' && (
          <EffectsField>
            <EffectsFieldLabel theme={theme}>{t('effectsManager.field.duration')}</EffectsFieldLabel>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', marginBottom: '4px' }}>
              {[1, 5, 10].map((presetValue) => (
                <EffectsQuickSetButton
                  key={`dur-${presetValue}`}
                  theme={theme}
                  onClick={() => {
                    manager.setEffectDurationInput(String(presetValue));
                    setLocalError(null);
                    setGuidedStep('by');
                  }}
                >
                  {presetValue}
                </EffectsQuickSetButton>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <EffectsInput
                theme={theme}
                type="number"
                min={1}
                value={manager.effectDurationInput}
                onChange={(e) => manager.setEffectDurationInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    submitGuidedDuration();
                  }
                }}
              />
              <EffectsButton theme={theme} onClick={submitGuidedDuration}>Next</EffectsButton>
            </div>
          </EffectsField>
        )}

        {!manager.isSpeedyMode && guidedStep === 'by' && (
          <EffectsField>
            <EffectsFieldLabel theme={theme}>{t('effectsManager.field.durationBy')}</EffectsFieldLabel>
            <EffectsQuickSetGrid>
              <EffectsQuickSetButton
                theme={theme}
                onClick={() => {
                  manager.setEffectDurationType('rounds');
                  setLocalError(null);
                  setGuidedStep('ends');
                }}
              >
                {t('effectsManager.durationType.rounds')}
              </EffectsQuickSetButton>
              <EffectsQuickSetButton
                theme={theme}
                onClick={() => {
                  manager.setEffectDurationType('turns');
                  setLocalError(null);
                  setGuidedStep('ends');
                }}
              >
                {t('effectsManager.durationType.turns')}
              </EffectsQuickSetButton>
            </EffectsQuickSetGrid>
          </EffectsField>
        )}

        {!manager.isSpeedyMode && guidedStep === 'ends' && (
          <EffectsField>
            <EffectsFieldLabel theme={theme}>{t('effectsManager.field.endsAt')}</EffectsFieldLabel>
            <EffectsQuickSetGrid>
              <EffectsQuickSetButton
                theme={theme}
                onClick={() => {
                  manager.setEffectEndTiming('start');
                  setLocalError(null);
                  setGuidedStep('targets');
                }}
              >
                {t('effectsManager.endTiming.start')}
              </EffectsQuickSetButton>
              <EffectsQuickSetButton
                theme={theme}
                onClick={() => {
                  manager.setEffectEndTiming('end');
                  setLocalError(null);
                  setGuidedStep('targets');
                }}
              >
                {t('effectsManager.endTiming.end')}
              </EffectsQuickSetButton>
            </EffectsQuickSetGrid>
          </EffectsField>
        )}

        {manager.isSpeedyMode && speedyStep === 'preset' && (
          <EffectsField>
            <EffectsFieldLabel theme={theme}>{t('effectsManager.field.effect')}</EffectsFieldLabel>
            {filteredSpeedyPresets.length === 0 ? (
              <EffectsEmpty theme={theme}>No presets configured for this type.</EffectsEmpty>
            ) : (
              <EffectsQuickSetGrid>
                {filteredSpeedyPresets.map((preset) => (
                  <EffectsQuickSetButton key={preset.id} theme={theme} onClick={() => applySpeedyPreset(preset)}>
                    {preset.name}
                  </EffectsQuickSetButton>
                ))}
              </EffectsQuickSetGrid>
            )}
          </EffectsField>
        )}

        {((!manager.isSpeedyMode && guidedStep === 'targets') || (manager.isSpeedyMode && speedyStep === 'targets')) && (
          <>
            <EffectsField>
              <EffectsFieldLabel theme={theme}>{t('effectsManager.field.targets')}</EffectsFieldLabel>
              <EffectsQuickSetGrid>
                {manager.units.map((unit) => (
                  <EffectsQuickSetButton
                    key={unit.id}
                    theme={theme}
                    $active={manager.effectTargetIds.includes(unit.id)}
                    onClick={() => toggleTargetId(unit.id)}
                  >
                    {unit.name}
                  </EffectsQuickSetButton>
                ))}
              </EffectsQuickSetGrid>
            </EffectsField>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <EffectsButton theme={theme} onClick={() => { void submitTargets(); }}>Apply Effect</EffectsButton>
            </div>
          </>
        )}

        {(localError || manager.effectsModalError) && (
          <EffectsError theme={theme}>{localError || manager.effectsModalError}</EffectsError>
        )}

        {manager.activeEffectsForSelectedUnit.length === 0 ? (
          <EffectsEmpty theme={theme}>{t('effectsManager.empty')}</EffectsEmpty>
        ) : (
          <EffectsList>
            {manager.activeEffectsForSelectedUnit.map((effect) => (
              <EffectItemRow key={effect.id} theme={theme}>
                <div>
                  <EffectName theme={theme}>{effect.name}</EffectName>
                  <EffectItemMeta theme={theme}>
                    {t('effectsManager.meta.summary', {
                      type: getEffectTypeLabel(effect.effectType),
                      remaining: effect.remaining,
                      durationType: getDurationTypeLabel(effect.durationType),
                      endTiming: getEndTimingLabel(effect.endTiming),
                      source: effect.createdByName,
                    })}
                  </EffectItemMeta>
                </div>
                <DeleteButton
                  theme={theme}
                  onClick={() => {
                    void manager.handleDeleteEffect(effect.id);
                  }}
                >
                  <X size={24} />
                </DeleteButton>
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
  onContextMenu?: () => void;
  icon?: React.ReactNode;
}

export const EffectsTriggerCell: React.FC<EffectsTriggerCellProps> = ({
  activeEffectsCount,
  canInteract,
  onOpen,
  onContextMenu,
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
        onContextMenu={(event) => {
          if (!canInteract) {
            return;
          }
          event.preventDefault();
          if (onContextMenu) {
            onContextMenu();
          }
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