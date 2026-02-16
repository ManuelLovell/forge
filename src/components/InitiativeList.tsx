import React, { useState, useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import OBR, { buildEffect, buildText, isImage } from '@owlbear-rodeo/sdk';
import { useSystemData } from '../helpers/useSystemData';
import { useForgeTheme } from '../helpers/ThemeContext';
import { useSceneStore } from '../helpers/BSCache';
import { EXTENSION_ID } from '../helpers/MockData';
import { SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';
import { ListLayoutComponent } from '../interfaces/SystemResponse';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';
import {
  Heart, Shield, Sun, Award, Target, Users, Star,
  Zap, Clock, Eye, Layers, BookOpen, ArrowRightCircle, CheckCircle, Circle, Music, Feather, FileText
} from 'lucide-react';
import { DATA_STORED_IN_ROOM, OwlbearIds } from '../helpers/Constants';
import LOGGER from '../helpers/Logger';
import { HexToRgba } from '../helpers/HexToRGB';
import { ViewportFunctions } from '../helpers/ViewPortUtility';
import { PopupModal } from './PopupModal';
import { GRID_SELECTION_EFFECT } from '../assets/gridSelectionEffect';

const TURN_EFFECT_ID = `${EXTENSION_ID}/current-turn-effect`;
const ELEVATION_BADGE_FLAG = `${EXTENSION_ID}/elevation-badge`;
const ELEVATION_BADGE_OWNER = `${EXTENSION_ID}/elevation-badge-owner`;
const ELEVATION_METADATA_KEY = `${EXTENSION_ID}/elevation`;
const EFFECTS_METADATA_KEY = `${EXTENSION_ID}/effects`;
const EFFECTS_NOTIFICATION_CHANNEL = `${EXTENSION_ID}/effects-expired`;

type EffectDurationType = 'turns' | 'rounds';
type EffectEndTiming = 'start' | 'end';

interface TrackedEffect {
  id: string;
  name: string;
  remaining: number;
  durationType: EffectDurationType;
  endTiming: EffectEndTiming;
  createdByName: string;
  createdById?: string;
}

// Internal state model
interface ListColumn {
  id: string;
  type: string;
  name?: string;
  useIcon?: boolean;
  iconType?: string;
  description?: string;
  styles?: {
    bidList?: string[];
    dividers?: string[];
    labelIcon?: string;
    labelMode?: 'blank' | 'name' | 'abbr' | 'icon';
    labelName?: string;
    description?: string;
    styleDesign?: 'default' | 'dashed' | 'shadow' | 'zigzag' | 'ridge' | 'pulse';
    specialType?: 'effects' | 'elevation';
  };
}

interface Unit {
  id: string;
  initiative: number;
  name: string;
  elevation: number;
  attributes: Record<string, any>;
  ownerNameOutlineColor?: string;
}

const withAlpha = (color: string | undefined, alpha: number): string | undefined => {
  if (!color) return undefined;

  if (color.startsWith('#')) {
    return HexToRgba(color, alpha);
  }

  const rgbaMatch = color.match(/^rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\)$/i);
  if (rgbaMatch) {
    const [, r, g, b] = rgbaMatch;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const rgbMatch = color.match(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/i);
  if (rgbMatch) {
    const [, r, g, b] = rgbMatch;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return color;
};

// Icon mapping
const iconMap: Record<string, React.FC<any>> = {
  heart: Heart,
  shield: Shield,
  sun: Sun,
  award: Award,
  target: Target,
  users: Users,
  star: Star,
  zap: Zap,
  clock: Clock,
  eye: Eye,
  layers: Layers,
  music: Music,
  feather: Feather,
  book: BookOpen,
};

// Styled components
const ListContainer = styled.div`
  padding: 2px;
  width: 100%;
`;

const ListTitle = styled.h1<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`;

const TableWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
`;

const ControlWrapper = styled.div<{ theme: ForgeTheme }>`
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 8px;
  background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.5)};
  border-top: 2px solid ${props => props.theme.BORDER};
`;

const ControlButton = styled.button<{ theme: ForgeTheme; disabled?: boolean }>`
  background: ${props => props.disabled ? rgbaFromHex(props.theme.BORDER, 0.3) : rgbaFromHex(props.theme.OFFSET, 0.5)};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  color: ${props => props.theme.PRIMARY};
  padding: 4px 4px;
  width: 80px;
  font-size: 14px;
  font-weight: 600;
  font-variant: small-caps;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  opacity: ${props => props.disabled ? 0.5 : 1};
  
  &:hover {
    background: ${props => props.disabled ? rgbaFromHex(props.theme.BORDER, 0.3) : props.theme.OFFSET};
  }
  
  &:active {
    transform: ${props => props.disabled ? 'none' : 'scale(0.95)'};
  }
`;

const RoundDisplay = styled.div<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  min-width: 80px;
  text-align: center;
`;

const Table = styled.table<{ theme: ForgeTheme }>`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
`;

const TableHead = styled.thead<{ theme: ForgeTheme }>`
  background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.35)};
`;

const HeaderRow = styled.tr``;

const HeaderCell = styled.th<{ theme: ForgeTheme }>`
  color: ${props => props.theme.OFFSET};
  padding-bottom: 6px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  font-variant: small-caps;
  border-bottom: 2px solid ${props => props.theme.BORDER};
  
  svg {
    width: 20px;
    height: 20px;
    display: inline-block;
  }
`;

const TableBody = styled.tbody``;

const DataRow = styled.tr<{ $isCurrentTurn?: boolean; theme?: ForgeTheme }>`
  ${props => props.$isCurrentTurn && props.theme && `
    background: linear-gradient(to left, ${rgbaFromHex(props.theme.OFFSET, 0.4)} 0%, transparent 100%);
  `}
  cursor: context-menu;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &:not(:last-child) td {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const DataCell = styled.td<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`;

const InitiativeCell = styled(DataCell) <{ theme: ForgeTheme }>`
  font-weight: 700;
  font-size: 18px;
  color: ${props => props.theme.OFFSET};
  min-width: 60px;
`;

const RollerCell = styled(DataCell)<{ theme: ForgeTheme }>`
  min-width: 48px;
`;

const RollerButton = styled.button<{ theme: ForgeTheme }>`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.BORDER};
  background: rgba(0, 0, 0, 0.3);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${props => props.theme.OFFSET};
  }
`;

const RollerIcon = styled.img`
  width: 18px;
  height: 18px;
  pointer-events: none;
`;

const TurnIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const InitiativeInput = styled.input<{ theme: ForgeTheme }>`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 4px;
  color: ${props => props.theme.OFFSET};
  padding: 2px 4px;
  font-size: 18px;
  font-weight: 700;
  width: 50px;
  text-align: center;
  backdrop-filter: blur(12px);
  
  /* Remove spinner controls */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.OFFSET};
  }
`;

const NameCell = styled(DataCell) <{ theme: ForgeTheme; $outlineColor?: string }>`
  text-align: left;
  font-weight: 500;
  min-width: 120px;
  max-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  text-shadow: ${props =>
    props.$outlineColor
      ? `
        1px 1px 2px black,
        2px 2px 2px ${props.$outlineColor},
        4px 4px 4px ${props.$outlineColor}
      `
      : 'none'};
`;

const ValueInput = styled.input<{ $small?: boolean; theme: ForgeTheme }>`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 4px;
  color: ${props => props.theme.PRIMARY};
  padding: 2px 4px;
  font-size: ${props => props.$small ? '12px' : '14px'};
  width: ${props => props.$small ? '40px' : '60px'};
  text-align: center;
  backdrop-filter: blur(12px);
  
  /* Remove spinner controls */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.OFFSET};
  }
`;

const Divider = styled.span<{ theme: ForgeTheme }>`
  margin: 0 2px;
  color: ${props => props.theme.OFFSET};
  font-weight: 500;
`;

const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const ActionButton = styled.button<{ theme: ForgeTheme; $active?: boolean }>`
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

const EffectsButtonWrap = styled.div`
  position: relative;
  display: inline-flex;
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

const EffectsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const EffectsFormRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 8px;
  align-items: flex-end;
`;

const EffectsField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
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
  min-width: 150px;

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

const EffectsButton = styled.button<{ theme: ForgeTheme }>`
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 4px;
  height: 38px;
  color: ${props => props.theme.PRIMARY};
  padding: 6px 10px;
  cursor: pointer;
  font-size: 13px;

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

const CheckboxInput = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin: 0 4px;
`;

const DividerCell = styled(DataCell) <{ $style?: string; theme: ForgeTheme }>`
  width: 24px;
  padding: 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background: ${props => {
    switch (props.$style) {
      case 'dashed': return `repeating-linear-gradient(to bottom, ${props.theme.BORDER} 0, ${props.theme.BORDER} 5px, transparent 5px, transparent 10px)`;
      case 'shadow': return 'none';
      case 'zigzag': return 'none';
      case 'ridge': return 'none';
      case 'pulse': return props.theme.OFFSET;
      default: return props.theme.BORDER;
    }
  }};
    ${props => props.$style === 'shadow' && `box-shadow: 0 0 10px ${props.theme.OFFSET};`}
    ${props => props.$style === 'pulse' && `animation: pulse 2s ease-in-out infinite;`}
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
`;

const OwnerPickerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 280px;
  overflow-y: auto;
`;

const OwnerPickerButton = styled.button<{ theme: ForgeTheme; $isCurrent?: boolean }>`
  width: 100%;
  text-align: left;
  background: ${props => props.$isCurrent ? rgbaFromHex(props.theme.OFFSET, 0.45) : rgbaFromHex(props.theme.BACKGROUND, 0.35)};
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  color: ${props => props.theme.PRIMARY};
  padding: 8px 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => rgbaFromHex(props.theme.OFFSET, 0.55)};
  }
`;

const OwnerPickerHint = styled.p<{ theme: ForgeTheme }>`
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.8)};
  margin: 0 0 12px 0;
  font-size: 13px;
`;

const OwnerPickerError = styled.p<{ theme: ForgeTheme }>`
  color: #ff6b6b;
  margin: 10px 0 0 0;
  font-size: 13px;
`;

// Deserialization function
const deserializeListLayout = (
  layout: ListLayoutComponent[],
  showRollerColumn: boolean,
  showCardColumn: boolean
): ListColumn[] => {
  const defaultColumns: ListColumn[] = [
    { id: crypto.randomUUID(), type: 'initiative' },
    ...(showRollerColumn ? [{ id: 'roller-column', type: 'roller' }] : []),
    { id: crypto.randomUUID(), type: 'name' }
  ];

  const cardColumn: ListColumn[] = showCardColumn
    ? [{ id: 'card-column', type: 'card-column' }]
    : [];

  if (!layout || layout.length === 0) {
    return [...defaultColumns, ...cardColumn];
  }

  // Sort by col property
  const sorted = [...layout].sort((a, b) => a.col - b.col);

  // Map to internal structure
  const additionalColumns = sorted.map(col => ({
    id: col.id,
    type: col.type,
    name: col.styles?.labelName,
    useIcon: col.styles?.labelMode === 'icon',
    iconType: col.styles?.labelIcon,
    description: col.styles?.description,
    styles: col.styles,
  }));

  return [...defaultColumns, ...additionalColumns, ...cardColumn];
};

export const InitiativeList: React.FC = () => {
  const { theme } = useForgeTheme();
  const { listLayout, isLoading } = useSystemData();
  const roomMetadata = useSceneStore((state) => state.roomMetadata);
  const sceneMetadata = useSceneStore((state) => state.sceneMetadata);
  const items = useSceneStore((state) => state.items);
  const partyData = useSceneStore((state) => state.partyData);
  const playerData = useSceneStore((state) => state.playerData);
  const gridDpi = useSceneStore((state) => state.gridDpi);
  const setItems = useSceneStore((state) => state.setItems);
  const [units, setUnits] = useState<Unit[]>([]);
  const [listColumns, setListColumns] = useState<ListColumn[]>([]);
  const [currentTurnId, setCurrentTurnId] = useState<string | null>(null);
  const [currentRound, setCurrentRound] = useState<number>(1);
  const [completedUnits, setCompletedUnits] = useState<Set<string>>(new Set());
  const [ownerModalUnitId, setOwnerModalUnitId] = useState<string | null>(null);
  const [ownerModalError, setOwnerModalError] = useState<string | null>(null);
  const [isAssigningOwner, setIsAssigningOwner] = useState(false);
  const [initiativeDrafts, setInitiativeDrafts] = useState<Record<string, string>>({});
  const [elevationDrafts, setElevationDrafts] = useState<Record<string, string>>({});
  const [effectsModalUnitId, setEffectsModalUnitId] = useState<string | null>(null);
  const [effectNameInput, setEffectNameInput] = useState('');
  const [effectDurationInput, setEffectDurationInput] = useState('1');
  const [effectDurationType, setEffectDurationType] = useState<EffectDurationType>('rounds');
  const [effectEndTiming, setEffectEndTiming] = useState<EffectEndTiming>('start');
  const [effectsModalError, setEffectsModalError] = useState<string | null>(null);
  const tableRef = useRef<HTMLTableElement>(null);

  // Control for setting the data to Room or to Scene
  const storageContainer = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;

  // Get settings
  const reverseInitiative = storageContainer[SettingsConstants.REVERSE_INITIATIVE] as boolean || false;
  const popcornInitiative = storageContainer[SettingsConstants.POPCORN_INITIATIVE] as boolean || false;
  const showRollerColumn = storageContainer[SettingsConstants.SHOW_ROLLER_COLUMN] as boolean || false;
  const showCardColumn = storageContainer[SettingsConstants.SHOW_CARD_ACCESS] as boolean || false;
  const diceRange = (storageContainer[SettingsConstants.DICE_RANGE] as string | undefined) || '';
  const showTurnEffect = storageContainer[SettingsConstants.SHOW_TURN_EFFECT] as boolean || false;

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

      if (!name || !remaining) {
        return acc;
      }

      acc.push({
        id: typeof effect.id === 'string' && effect.id ? effect.id : crypto.randomUUID(),
        name,
        remaining,
        durationType,
        endTiming,
        createdByName: typeof effect.createdByName === 'string' && effect.createdByName
          ? effect.createdByName
          : 'Unknown',
        createdById: typeof effect.createdById === 'string' ? effect.createdById : undefined,
      });

      return acc;
    }, []);
  };

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

      const metadata = { ...item.metadata };
      if (cleanedEffects.length > 0) {
        metadata[EFFECTS_METADATA_KEY] = cleanedEffects;
      } else {
        delete (metadata as any)[EFFECTS_METADATA_KEY];
      }

      return {
        ...item,
        metadata,
      };
    });
    setItems(updatedItems);

    await OBR.scene.items.updateItems([unitId], (itemsToUpdate) => {
      const metadata = { ...itemsToUpdate[0].metadata };
      if (cleanedEffects.length > 0) {
        metadata[EFFECTS_METADATA_KEY] = cleanedEffects;
      } else {
        delete (metadata as any)[EFFECTS_METADATA_KEY];
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
    const isGm = String((playerData as any)?.role || '').toUpperCase() === 'GM';
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

  // Transform items from cache into Unit format
  useEffect(() => {
    const transformedUnits: Unit[] = items
      .filter(item => {
        // Only include items that are added to the list
        return item.metadata?.[UnitConstants.ON_LIST] === true;
      })
      .map(item => {
        const initiative = item.metadata?.[UnitConstants.INITIATIVE] as number || 0;
        const name = item.metadata[UnitConstants.UNIT_NAME] as string || item.name || 'Unknown';
        const elevation = item.metadata?.[ELEVATION_METADATA_KEY] as number || 0;
        const owner = partyData.find((player) => player.id === item.createdUserId);
        const isGmOwner = String((owner as any)?.role || '').toUpperCase() === 'GM';
        const ownerNameOutlineColor = isGmOwner ? undefined : withAlpha(owner?.color, 1.0);

        // Extract attributes using BIDs
        const attributes: Record<string, any> = {};
        Object.keys(item.metadata || {}).forEach(key => {
          // Only include keys that start with our extension ID
          if (key.startsWith(EXTENSION_ID)) {
            // Store with the full key (including extension ID prefix)
            attributes[key] = item.metadata?.[key];
          }
        });

        return {
          id: item.id,
          initiative,
          name,
          elevation,
          attributes,
          ownerNameOutlineColor,
        };
      });

    setUnits(transformedUnits);
  }, [items, partyData]);

  // Sort units by initiative and then alphabetically by name (only in normal mode)
  const sortedUnits = useMemo(() => {
    if (popcornInitiative) {
      // In popcorn mode, just sort alphabetically by name
      return [...units].sort((a, b) => a.name.localeCompare(b.name));
    }

    return [...units].sort((a, b) => {
      // First, sort by initiative
      if (a.initiative !== b.initiative) {
        // If reverse initiative is on, sort ascending (lowest first)
        // Otherwise, sort descending (highest first)
        return reverseInitiative
          ? a.initiative - b.initiative
          : b.initiative - a.initiative;
      }
      // If initiative is the same, sort alphabetically by name
      return a.name.localeCompare(b.name);
    });
  }, [units, reverseInitiative, popcornInitiative]);

  const availablePlayers = useMemo(() => {
    const playersById = new Map<string, typeof partyData[number]>();
    partyData.forEach((player) => {
      playersById.set(player.id, player);
    });

    if (playerData && !playersById.has(playerData.id)) {
      playersById.set(playerData.id, playerData);
    }

    return Array.from(playersById.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [partyData, playerData]);

  // Handler for updating initiative in local state only
  const handleInitiativeChange = (unitId: string, newInitiative: string) => {
    const initiativeValue = parseInt(newInitiative) || 0;
    setUnits(prevUnits =>
      prevUnits.map(unit =>
        unit.id === unitId ? { ...unit, initiative: initiativeValue } : unit
      )
    );
  };

  // Handler for committing initiative to cache and OBR
  const commitInitiativeChange = (unitId: string, initiativeValue: number) => {
    // Update in cache/metadata
    const updatedItems = items.map(item => {
      if (item.id === unitId) {
        return {
          ...item,
          metadata: {
            ...item.metadata,
            [UnitConstants.INITIATIVE]: initiativeValue
          }
        };
      }
      return item;
    });
    setItems(updatedItems);

    // Update in OBR scene items
    OBR.scene.items.updateItems([unitId], (items) => {
      items[0].metadata[UnitConstants.INITIATIVE] = initiativeValue;
    });
  };

  const getDiceSides = (range: string): number => {
    const trimmed = (range || '').trim();
    const matched = trimmed.match(/(\d+)/);
    const parsed = matched ? parseInt(matched[1], 10) : NaN;
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 20;
  };

  const clampNumber = (value: number, min?: number, max?: number): number => {
    if (typeof min === 'number') {
      value = Math.max(min, value);
    }
    if (typeof max === 'number') {
      value = Math.min(max, value);
    }
    return value;
  };

  const resolveNumericInput = (
    rawValue: string,
    currentValue: number,
    options?: { min?: number; max?: number }
  ): number => {
    const trimmed = rawValue.trim();
    const { min, max } = options || {};

    if (trimmed.length === 0) {
      return clampNumber(0, min, max);
    }

    const relativeMatch = trimmed.match(/^([+\-*/])\s*(-?\d+(?:\.\d+)?)$/);
    const infixMatch = trimmed.match(/^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/);

    let result: number | null = null;

    if (relativeMatch) {
      const operator = relativeMatch[1];
      const operand = parseFloat(relativeMatch[2]);

      switch (operator) {
        case '+':
          result = currentValue + operand;
          break;
        case '-':
          result = currentValue - operand;
          break;
        case '*':
          result = currentValue * operand;
          break;
        case '/':
          result = operand === 0 ? currentValue : currentValue / operand;
          break;
      }
    } else if (infixMatch) {
      const left = parseFloat(infixMatch[1]);
      const operator = infixMatch[2];
      const right = parseFloat(infixMatch[3]);

      switch (operator) {
        case '+':
          result = left + right;
          break;
        case '-':
          result = left - right;
          break;
        case '*':
          result = left * right;
          break;
        case '/':
          result = right === 0 ? left : left / right;
          break;
      }
    } else {
      const absolute = parseFloat(trimmed);
      if (!Number.isNaN(absolute)) {
        result = absolute;
      }
    }

    if (result === null || !Number.isFinite(result)) {
      return clampNumber(currentValue, min, max);
    }

    return clampNumber(Math.trunc(result), min, max);
  };

  const handleRollInitiative = (unitId: string) => {
    const sides = getDiceSides(diceRange);
    const rolledValue = Math.floor(Math.random() * sides) + 1;
    handleInitiativeChange(unitId, String(rolledValue));
    commitInitiativeChange(unitId, rolledValue);
  };

  const handleInitiativeDraftChange = (unitId: string, newValue: string) => {
    setInitiativeDrafts((prev) => ({
      ...prev,
      [unitId]: newValue,
    }));
  };

  const commitInitiativeInput = (unitId: string, rawValue: string) => {
    const currentValue = units.find((unit) => unit.id === unitId)?.initiative ?? 0;
    const nextValue = resolveNumericInput(rawValue, currentValue);

    setInitiativeDrafts((prev) => {
      const { [unitId]: _removed, ...rest } = prev;
      return rest;
    });

    setUnits((prevUnits) =>
      prevUnits.map((unit) =>
        unit.id === unitId ? { ...unit, initiative: nextValue } : unit
      )
    );

    commitInitiativeChange(unitId, nextValue);
  };

  const getElevationBadgeId = (unitId: string): string => `ELE${unitId.slice(3)}`;

  const getImageMinBounds = (unitItem: any, sceneGridDpi: number) => {
    const dpiScale = sceneGridDpi / unitItem.grid.dpi;
    const width = unitItem.image.width * dpiScale;
    const height = unitItem.image.height * dpiScale;
    const offsetX = (unitItem.grid.offset.x / unitItem.image.width) * width;
    const offsetY = (unitItem.grid.offset.y / unitItem.image.height) * height;

    return {
      minX: unitItem.position.x - offsetX,
      minY: unitItem.position.y - offsetY,
    };
  };

  const syncElevationBadge = async (unitId: string, elevationValue: number) => {
    const badgeId = getElevationBadgeId(unitId);

    try {
      await OBR.scene.items.deleteItems([badgeId]);
    } catch {
    }

    if (elevationValue === 0) {
      return;
    }

    const unitItem = items.find((item) => item.id === unitId);
    if (!unitItem || !isImage(unitItem)) {
      return;
    }

    const bounds = getImageMinBounds(unitItem, gridDpi);
    const indicator = elevationValue > 0 ? '🡹' : '🡻';
    const elevationLabel = `${indicator}${Math.abs(elevationValue)}`;

    const badge = buildText()
      .id(badgeId)
      .name('Elevation Badge')
      .plainText(elevationLabel)
      .textType('PLAIN')
      .fontWeight(900)
      .fillOpacity(0.95)
      .fillColor('white')
      .strokeWidth(8)
      .strokeColor('black')
      .strokeOpacity(1)
      .fontSize(36)
      .fontFamily('Segoe UI')
      .textAlign('CENTER')
      .position({ x: bounds.minX - 40, y: bounds.minY })
      .metadata({
        [ELEVATION_BADGE_FLAG]: true,
        [ELEVATION_BADGE_OWNER]: unitId,
      })
      .attachedTo(unitId)
      .visible(unitItem.visible)
      .locked(true)
      .disableHit(true)
      .disableAttachmentBehavior(['ROTATION', 'SCALE'])
      .layer('TEXT')
      .build();

    try {
      await OBR.scene.items.addItems([badge]);
    } catch (error) {
      LOGGER.error('Failed to add elevation badge', unitId, error);
    }
  };

  const handleElevationDraftChange = (unitId: string, newValue: string) => {
    setElevationDrafts((prev) => ({
      ...prev,
      [unitId]: newValue,
    }));
  };

  const resolveAbsoluteNumericInput = (
    rawValue: string,
    currentValue: number,
    options?: { min?: number; max?: number }
  ): number => {
    const trimmed = rawValue.trim();
    const { min, max } = options || {};

    if (!trimmed) {
      return clampNumber(0, min, max);
    }

    const parsed = parseFloat(trimmed);
    if (!Number.isFinite(parsed)) {
      return clampNumber(currentValue, min, max);
    }

    return clampNumber(Math.trunc(parsed), min, max);
  };

  const commitElevationChange = (unitId: string, elevationValueRaw: string) => {
    const currentValue = units.find((unit) => unit.id === unitId)?.elevation ?? 0;
    const elevationValue = resolveAbsoluteNumericInput(elevationValueRaw, currentValue, { min: -999, max: 999 });

    setElevationDrafts((prev) => {
      const { [unitId]: _removed, ...rest } = prev;
      return rest;
    });

    setUnits((prevUnits) =>
      prevUnits.map((unit) =>
        unit.id === unitId ? { ...unit, elevation: elevationValue } : unit
      )
    );

    const updatedItems = items.map((item) => {
      if (item.id === unitId) {
        return {
          ...item,
          metadata: {
            ...item.metadata,
            [ELEVATION_METADATA_KEY]: elevationValue,
          },
        };
      }
      return item;
    });
    setItems(updatedItems);

    OBR.scene.items.updateItems([unitId], (items) => {
      items[0].metadata[ELEVATION_METADATA_KEY] = elevationValue;
    });

    void syncElevationBadge(unitId, elevationValue);
  };

  const maybeResolveNumericAttributeInput = (rawValue: string, currentValue: unknown): string => {
    const trimmed = rawValue.trim();
    if (!trimmed) {
      return rawValue;
    }

    const isRelativeExpression = /^([+\-*/])\s*-?\d+(?:\.\d+)?$/.test(trimmed);
    const isInfixExpression = /^-?\d+(?:\.\d+)?\s*[+\-*/]\s*-?\d+(?:\.\d+)?$/.test(trimmed);
    const isAbsoluteNumber = /^-?\d+(?:\.\d+)?$/.test(trimmed);

    if (!isRelativeExpression && !isInfixExpression && !isAbsoluteNumber) {
      return rawValue;
    }

    const parsedCurrent = typeof currentValue === 'number' ? currentValue : parseFloat(String(currentValue));
    const baseValue = Number.isFinite(parsedCurrent) ? parsedCurrent : 0;
    return String(resolveNumericInput(trimmed, baseValue));
  };

  const commitValueColumnInput = (unitId: string, bid: string, rawValue: string) => {
    const key = `${EXTENSION_ID}/${bid}`;
    const currentValue = units.find((unit) => unit.id === unitId)?.attributes?.[key];
    const committedValue = maybeResolveNumericAttributeInput(rawValue, currentValue);

    setUnits(prevUnits =>
      prevUnits.map(u =>
        u.id === unitId
          ? {
            ...u,
            attributes: {
              ...u.attributes,
              [key]: committedValue
            }
          }
          : u
      )
    );

    const updatedItems = items.map(item => {
      if (item.id === unitId) {
        return {
          ...item,
          metadata: {
            ...item.metadata,
            [key]: committedValue
          }
        };
      }
      return item;
    });
    setItems(updatedItems);

    OBR.scene.items.updateItems([unitId], (items) => {
      items[0].metadata[key] = committedValue;
    });
  };

  // Deserialize list layout on mount or when listLayout changes
  useEffect(() => {
    if (!isLoading) {
      const columns = deserializeListLayout(listLayout, showRollerColumn, showCardColumn);
      setListColumns(columns);
    }
  }, [listLayout, isLoading, showRollerColumn, showCardColumn]);

  // Load current turn and round from metadata
  useEffect(() => {
    const savedTurnId = sceneMetadata[SettingsConstants.CURRENT_TURN] as string | undefined;
    const savedRound = sceneMetadata[SettingsConstants.CURRENT_ROUND] as number | undefined;

    if (savedTurnId) {
      setCurrentTurnId(savedTurnId);
    } else if (sortedUnits.length > 0) {
      // Initialize with first unit if no saved turn
      setCurrentTurnId(sortedUnits[0].id);
    }

    if (savedRound) {
      setCurrentRound(savedRound);
    }
  }, [sceneMetadata, sortedUnits]);

  // Handlers for turn navigation
  const handleNext = async () => {
    if (sortedUnits.length === 0) return;

    if (currentTurnId) {
      await processEffectsForTurnEvent('end', currentTurnId);
    }

    const currentIndex = sortedUnits.findIndex(u => u.id === currentTurnId);
    const nextIndex = currentIndex + 1;

    if (nextIndex >= sortedUnits.length) {
      // End of list, go back to top and increment round
      const newRound = currentRound + 1;
      setCurrentRound(newRound);
      setCurrentTurnId(sortedUnits[0].id);
      await OBR.scene.setMetadata({
        [SettingsConstants.CURRENT_TURN]: sortedUnits[0].id,
        [SettingsConstants.CURRENT_ROUND]: newRound
      });
      await processEffectsForTurnEvent('start', sortedUnits[0].id);
    } else {
      // Move to next unit
      setCurrentTurnId(sortedUnits[nextIndex].id);
      await OBR.scene.setMetadata({
        [SettingsConstants.CURRENT_TURN]: sortedUnits[nextIndex].id
      });
      await processEffectsForTurnEvent('start', sortedUnits[nextIndex].id);
    }
  };

  const handlePrevious = async () => {
    if (sortedUnits.length === 0) return;

    const currentIndex = sortedUnits.findIndex(u => u.id === currentTurnId);
    const prevIndex = currentIndex - 1;

    if (prevIndex < 0) {
      // Beginning of list, go to end and decrement round
      const newRound = Math.max(1, currentRound - 1);
      setCurrentRound(newRound);
      setCurrentTurnId(sortedUnits[sortedUnits.length - 1].id);
      await OBR.scene.setMetadata({
        [SettingsConstants.CURRENT_TURN]: sortedUnits[sortedUnits.length - 1].id,
        [SettingsConstants.CURRENT_ROUND]: newRound
      });
    } else {
      // Move to previous unit
      setCurrentTurnId(sortedUnits[prevIndex].id);
      await OBR.scene.setMetadata({
        [SettingsConstants.CURRENT_TURN]: sortedUnits[prevIndex].id
      });
    }
  };

  // Popcorn Initiative handlers
  const handleUnitClick = async (unitId: string) => {
    if (!popcornInitiative) return;
    if (completedUnits.has(unitId)) return; // Can't select already completed units

    setCurrentTurnId(unitId);
    await OBR.scene.setMetadata({
      [SettingsConstants.CURRENT_TURN]: unitId
    });
    await processEffectsForTurnEvent('start', unitId);
  };

  const handleEndTurn = async () => {
    if (!currentTurnId) return;

    await processEffectsForTurnEvent('end', currentTurnId);

    setCompletedUnits(prev => new Set([...prev, currentTurnId]));

    // Check if all units have gone
    if (completedUnits.size + 1 >= sortedUnits.length) {
      // All done, but don't auto-advance - let user click New Round
    }
  };

  const handleNewRound = async () => {
    const newRound = currentRound + 1;
    setCurrentRound(newRound);
    setCompletedUnits(new Set());
    setCurrentTurnId(null);

    await OBR.scene.setMetadata({
      [SettingsConstants.CURRENT_TURN]: null,
      [SettingsConstants.CURRENT_ROUND]: newRound
    });
  };

  const handleUnitNameDoubleClick = async (unitId: string) => {
    const clickedItem = items.find((item) => item.id === unitId);
    if (!clickedItem) {
      return;
    }

    try {
      await ViewportFunctions.CenterViewportOnImage(clickedItem);
    } catch (error) {
      LOGGER.error('Failed to center viewport on unit', unitId, error);
    }
  };

  const handleOpenCardPopover = async (elementId: string) => {
    try {
      const windowHeight = await OBR.viewport.getHeight();
      const modalBuffer = 100;
      const viewableHeight = windowHeight > 800 ? 700 : windowHeight - modalBuffer;

      await OBR.popover.open({
        id: OwlbearIds.CARDSID,
        url: `/pages/forgecard.html`,
        height: viewableHeight,
        width: 400,
        anchorElementId: elementId,
        hidePaper: false,
        disableClickAway: true
      });
    } catch (error) {
      LOGGER.error('Failed to open cards popover', error);
    }
  };

  const handleUnitContextMenu = (event: React.MouseEvent, unitId: string) => {
    event.preventDefault();
    event.stopPropagation();
    setOwnerModalError(null);
    setOwnerModalUnitId(unitId);
  };

  const handleAssignOwner = async (playerId: string) => {
    if (!ownerModalUnitId) {
      return;
    }

    const targetItem = items.find((item) => item.id === ownerModalUnitId);
    if (!targetItem) {
      setOwnerModalError('Token not found in scene cache.');
      return;
    }

    setIsAssigningOwner(true);
    setOwnerModalError(null);

    try {
      await OBR.scene.items.updateItems([ownerModalUnitId], (itemsToUpdate) => {
        (itemsToUpdate[0] as any).createdUserId = playerId;
      });

      const updatedItems = items.map((item) =>
        item.id === ownerModalUnitId
          ? ({ ...item, createdUserId: playerId } as any)
          : item
      );
      setItems(updatedItems);
      setOwnerModalUnitId(null);
    } catch (error) {
      LOGGER.error('Failed to reassign token owner', ownerModalUnitId, playerId, error);
      setOwnerModalError('Unable to assign token owner. Ensure you have permission to edit this token.');
    } finally {
      setIsAssigningOwner(false);
    }
  };

  const selectedOwnerUnit = useMemo(
    () => (ownerModalUnitId ? sortedUnits.find((unit) => unit.id === ownerModalUnitId) || null : null),
    [ownerModalUnitId, sortedUnits]
  );

  const selectedOwnerItem = useMemo(
    () => (ownerModalUnitId ? items.find((item) => item.id === ownerModalUnitId) || null : null),
    [ownerModalUnitId, items]
  );

  const selectedEffectsUnit = useMemo(
    () => (effectsModalUnitId ? sortedUnits.find((unit) => unit.id === effectsModalUnitId) || null : null),
    [effectsModalUnitId, sortedUnits]
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
    setEffectsModalUnitId(unitId);
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
      createdByName: sourceTokenName,
      createdById: effectsModalUnitId,
    };

    await updateUnitEffects(effectsModalUnitId, [...effects, newEffect]);
    setEffectsModalError(null);
    setEffectNameInput('');
    setEffectDurationInput('1');
  };

  const handleDeleteEffect = async (unitId: string, effectId: string) => {
    const effects = getEffectsForUnit(unitId).filter((effect) => effect.id !== effectId);
    await updateUnitEffects(unitId, effects);
  };

  useEffect(() => {
    const unsubscribe = OBR.broadcast.onMessage(EFFECTS_NOTIFICATION_CHANNEL, async (event) => {
      const rawMessage = (event.data as any)?.message;
      if (typeof rawMessage !== 'string' || !rawMessage.trim()) {
        return;
      }

      await OBR.notification.show(rawMessage, 'WARNING');
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const syncTurnEffect = async () => {
      if (!showTurnEffect || !currentTurnId) {
        try {
          await OBR.scene.local.deleteItems([TURN_EFFECT_ID]);
        } catch {
        }
        return;
      }

      const currentTurnItem = items.find((item) => item.id === currentTurnId);
      if (!currentTurnItem) {
        try {
          await OBR.scene.local.deleteItems([TURN_EFFECT_ID]);
        } catch {
        }
        return;
      }

      if (isCancelled) {
        return;
      }

      try {
        await OBR.scene.local.updateItems([TURN_EFFECT_ID], (localItems) => {
          const turnEffect = localItems[0] as any;
          if (!turnEffect) {
            return;
          }

          turnEffect.attachedTo = currentTurnId;
        });

        LOGGER.log('Updating turn effect attachment for current turn');
        return;
      } catch {
      }

      if (isCancelled) {
        return;
      }

      try {
        const effect = buildEffect()
          .id(TURN_EFFECT_ID)
          .name('Current Turn Effect')
          .effectType('ATTACHMENT')
          .attachedTo(currentTurnId)
          .locked(true)
          .disableHit(true)
          .sksl(GRID_SELECTION_EFFECT)
          .build();

        LOGGER.log('Adding turn effect to scene for current turn');
        await OBR.scene.local.addItems([effect]);
      } catch (error) {
        LOGGER.error('Failed to sync current turn effect', error);
      }
    };

    syncTurnEffect();

    return () => {
      isCancelled = true;
    };
  }, [showTurnEffect, currentTurnId]);

  useEffect(() => {
    return () => {
        LOGGER.log('Removing turn effect to scene for current turn');
      OBR.scene.local.deleteItems([TURN_EFFECT_ID]).catch(() => {
      });
    };
  }, []);

  // Adjust window width based on table width
  useEffect(() => {
    if (tableRef.current && listColumns.length > 0) {
      // Wait a bit for the table to fully render
      LOGGER.debug('Adjusting window width based on table size');
      setTimeout(() => {
        if (tableRef.current) {
          const tableWidth = tableRef.current.offsetWidth;
          const totalWidth = tableWidth + 4; // MAGIC NUMBER ALERT: This is the difference in spacing/padding around the table
          const finalWidth = Math.min(totalWidth, 800); // Set width, but cap at a reasonable maximum
          OBR.action.setWidth(finalWidth);
          LOGGER.log('Adjusted window width to ' + finalWidth);
        }
      }, 100);
    }
  }, [tableRef.current?.offsetWidth]);

  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    const IconComponent = iconMap[iconName.toLowerCase()];
    return IconComponent ? <IconComponent /> : null;
  };

  const renderHeader = (col: ListColumn) => {
    if (col.type === 'initiative') return <Users />;
    if (col.type === 'roller') return null;
    if (col.type === 'name') return 'Name';
    if (col.type === 'card-column') return <FileText />;
    if (col.type === 'divider-column') return null;

    if (col.useIcon && col.iconType) {
      return getIcon(col.iconType);
    }

    return col.name || col.type;
  };

  const renderCell = (col: ListColumn, unit: Unit) => {
    switch (col.type) {
      case 'initiative':
        if (popcornInitiative) {
          // In popcorn mode, show completion indicator
          return (
            <InitiativeCell theme={theme}>
              <TurnIcon
                onClick={(e) => {
                  e.stopPropagation();
                  if (completedUnits.has(unit.id)) {
                    // Already completed, do nothing
                    return;
                  }
                  if (unit.id === currentTurnId) {
                    // Current unit clicked - end their turn
                    handleEndTurn();
                  } else {
                    // Different unit clicked - select them
                    handleUnitClick(unit.id);
                  }
                }}
              >
                {completedUnits.has(unit.id) ? (
                  <CheckCircle color={theme.OFFSET} />
                ) : unit.id === currentTurnId ? (
                  <ArrowRightCircle color={theme.PRIMARY} />
                ) : (
                  <Circle color={theme.BORDER} />
                )}
              </TurnIcon>
            </InitiativeCell>
          );
        }
        // Normal mode: show initiative input
        return (
          <InitiativeCell theme={theme}>
            <InitiativeInput
              theme={theme}
              type="text"
              inputMode="decimal"
              value={initiativeDrafts[unit.id] ?? String(unit.initiative)}
              onChange={(e) => handleInitiativeDraftChange(unit.id, e.target.value)}
              onBlur={(e) => commitInitiativeInput(unit.id, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  e.currentTarget.blur();
                }
              }}
            />
          </InitiativeCell>
        );

      case 'name':
        return (
          <NameCell
            theme={theme}
            title="Right-click to assign owner"
            $outlineColor={unit.ownerNameOutlineColor}
            onDoubleClick={() => handleUnitNameDoubleClick(unit.id)}
          >
            {unit.name}
          </NameCell>
        );

      case 'roller':
        return (
          <RollerCell theme={theme}>
            <RollerButton
              theme={theme}
              onClick={(e) => {
                e.stopPropagation();
                handleRollInitiative(unit.id);
              }}
              title={`Roll initiative (1-${getDiceSides(diceRange)})`}
            >
              <RollerIcon src="/dice.svg" alt="Roll" />
            </RollerButton>
          </RollerCell>
        );

      case 'card-column':
        return (
          <DataCell theme={theme}>
            <ActionButton
              id={`card-access-${unit.id}`}
              theme={theme}
              onClick={(e) => {
                e.stopPropagation();
                void handleOpenCardPopover(e.currentTarget.id);
              }}
              title={`Open card for ${unit.name}`}
            >
              <ArrowRightCircle />
            </ActionButton>
          </DataCell>
        );

      case 'value-column':
        return (
          <DataCell theme={theme}>
            <ValueContainer>
              {col.styles?.bidList?.map((bid, idx) => (
                <React.Fragment key={bid}>
                  {idx > 0 && <Divider theme={theme}>{col.styles?.dividers?.[idx - 1] || '/'}</Divider>}
                  <ValueInput
                    theme={theme}
                    value={unit.attributes[`${EXTENSION_ID}/${bid}`] || '0'}
                    $small={col.styles?.bidList && col.styles.bidList.length > 2}
                    onChange={(e) => {
                      const newValue = e.target.value;

                      // Update local state only
                      setUnits(prevUnits =>
                        prevUnits.map(u =>
                          u.id === unit.id
                            ? {
                              ...u,
                              attributes: {
                                ...u.attributes,
                                [`${EXTENSION_ID}/${bid}`]: newValue
                              }
                            }
                            : u
                        )
                      );
                    }}
                    onBlur={(e) => {
                      commitValueColumnInput(unit.id, bid, e.target.value);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        e.currentTarget.blur();
                      }
                    }}
                  />
                </React.Fragment>
              ))}
            </ValueContainer>
          </DataCell>
        );

      case 'list-column':
        return (
          <DataCell theme={theme}>
            <ActionButton
              theme={theme}
              onClick={() => {
                // TODO: Open list modal
                const bidId = col.styles?.bidList?.[0];
                console.log('Open list for', unit.name, bidId, unit.attributes[`${EXTENSION_ID}/${bidId}`]);
              }}
            >
              <BookOpen />
            </ActionButton>
          </DataCell>
        );

      case 'checkbox-column':
        return (
          <DataCell theme={theme}>
            <ValueContainer>
              {col.styles?.bidList?.map(bid => (
                <CheckboxInput
                  key={bid}
                  type="checkbox"
                  checked={!!unit.attributes[`${EXTENSION_ID}/${bid}`]}
                  onChange={(e) => {
                    const newValue = e.target.checked;

                    // Update local state
                    setUnits(prevUnits =>
                      prevUnits.map(u =>
                        u.id === unit.id
                          ? {
                            ...u,
                            attributes: {
                              ...u.attributes,
                              [`${EXTENSION_ID}/${bid}`]: newValue
                            }
                          }
                          : u
                      )
                    );

                    // Update cache
                    const updatedItems = items.map(item => {
                      if (item.id === unit.id) {
                        return {
                          ...item,
                          metadata: {
                            ...item.metadata,
                            [`${EXTENSION_ID}/${bid}`]: newValue
                          }
                        };
                      }
                      return item;
                    });
                    setItems(updatedItems);

                    // Update in OBR scene items
                    OBR.scene.items.updateItems([unit.id], (items) => {
                      items[0].metadata[`${EXTENSION_ID}/${bid}`] = newValue;
                    });
                  }}
                />
              ))}
            </ValueContainer>
          </DataCell>
        );

      case 'special-column':
        const specialIcon = getIcon(col.iconType);
        if (col.styles?.specialType === 'elevation') {
          const elevationDraftValue = elevationDrafts[unit.id];
          return (
            <DataCell theme={theme}>
              <ValueInput
                theme={theme}
                type="text"
                inputMode="decimal"
                min={-999}
                max={999}
                step={1}
                value={elevationDraftValue ?? String(unit.elevation ?? 0)}
                onChange={(e) => handleElevationDraftChange(unit.id, e.target.value)}
                onBlur={(e) => commitElevationChange(unit.id, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    e.currentTarget.blur();
                  }
                }}
              />
            </DataCell>
          );
        } else {
          // Effects
          const activeEffectsCount = getEffectsForUnit(unit.id).length;
          const hasActiveEffects = activeEffectsCount > 0;
          return (
            <DataCell theme={theme}>
              <EffectsButtonWrap>
                <ActionButton
                  theme={theme}
                  $active={hasActiveEffects}
                  onClick={() => {
                    handleOpenEffectsModal(unit.id);
                  }}
                >
                  {specialIcon || <Sun />}
                </ActionButton>
                {activeEffectsCount > 0 && (
                  <EffectsCountBadge theme={theme}>
                    {activeEffectsCount > 99 ? '99+' : activeEffectsCount}
                  </EffectsCountBadge>
                )}
              </EffectsButtonWrap>
            </DataCell>
          );
        }

      case 'divider-column':
        return <DividerCell theme={theme} $style={col.styles?.styleDesign} />;

      default:
        return <DataCell theme={theme}>-</DataCell>;
    }
  };

  if (isLoading) {
    return (
      <ListContainer>
        <ListTitle theme={theme}>Loading...</ListTitle>
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      <TableWrapper>
        <Table ref={tableRef} theme={theme}>
          <TableHead theme={theme}>
            <HeaderRow>
              {listColumns.map(col => (
                <HeaderCell key={col.id} theme={theme}>
                  {renderHeader(col)}
                </HeaderCell>
              ))}
            </HeaderRow>
          </TableHead>
          <TableBody>
            {sortedUnits.map(unit => (
              <DataRow
                key={unit.id}
                $isCurrentTurn={unit.id === currentTurnId}
                theme={theme}
                onContextMenu={(event) => handleUnitContextMenu(event, unit.id)}
              >
                {listColumns.map(col => (
                  <React.Fragment key={col.id}>
                    {renderCell(col, unit)}
                  </React.Fragment>
                ))}
              </DataRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
      <ControlWrapper theme={theme}>
        {popcornInitiative ? (
          // Popcorn Initiative controls
          <>
            <ControlButton
              theme={theme}
              onClick={handleEndTurn}
              disabled={!currentTurnId || completedUnits.has(currentTurnId)}
            >
              End Turn
            </ControlButton>
            <RoundDisplay theme={theme}>
              Round: {currentRound}
            </RoundDisplay>
            <ControlButton
              theme={theme}
              onClick={handleNewRound}
              disabled={completedUnits.size < sortedUnits.length}
            >
              Next
            </ControlButton>
          </>
        ) : (
          // Normal Initiative controls
          <>
            <ControlButton theme={theme} onClick={handlePrevious}>
              Previous
            </ControlButton>
            <RoundDisplay theme={theme}>
              Round: {currentRound}
            </RoundDisplay>
            <ControlButton theme={theme} onClick={handleNext}>
              Next
            </ControlButton>
          </>
        )}
      </ControlWrapper>
      <PopupModal
        isOpen={!!ownerModalUnitId}
        title={selectedOwnerUnit ? `Unit: ${selectedOwnerUnit.name}` : 'Unit'}
        onClose={() => {
          if (isAssigningOwner) return;
          setOwnerModalUnitId(null);
          setOwnerModalError(null);
        }}
        closeOnOverlayClick={!isAssigningOwner}
        maxWidth="520px"
      >
        <OwnerPickerHint theme={theme}>
          Select a player to become the owner.
        </OwnerPickerHint>
        <OwnerPickerList>
          {availablePlayers.map((player) => (
            <OwnerPickerButton
              key={player.id}
              theme={theme}
              $isCurrent={selectedOwnerItem?.createdUserId === player.id}
              onClick={() => handleAssignOwner(player.id)}
              disabled={isAssigningOwner}
            >
              {player.name}
              {selectedOwnerItem?.createdUserId === player.id ? ' (current)' : ''}
            </OwnerPickerButton>
          ))}
        </OwnerPickerList>
        {ownerModalError && <OwnerPickerError theme={theme}>{ownerModalError}</OwnerPickerError>}
      </PopupModal>

      <PopupModal
        isOpen={!!effectsModalUnitId}
        title={selectedEffectsUnit ? `Effects: ${selectedEffectsUnit.name}` : 'Effects'}
        onClose={() => {
          setEffectsModalUnitId(null);
          setEffectsModalError(null);
        }}
        maxWidth="620px"
      >
        <EffectsSection>
          <EffectsFormRow>
            <EffectsField>
              <EffectsFieldLabel theme={theme}>Effect</EffectsFieldLabel>
              <EffectsInput
                theme={theme}
                type="text"
                placeholder="Name"
                value={effectNameInput}
                onChange={(e) => setEffectNameInput(e.target.value)}
              />
            </EffectsField>
            <EffectsField>
              <EffectsFieldLabel theme={theme}>Duration</EffectsFieldLabel>
              <EffectsInput
                theme={theme}
                type="number"
                min={1}
                value={effectDurationInput}
                onChange={(e) => setEffectDurationInput(e.target.value)}
                style={{ minWidth: '64px', width: '74px' }}
              />
            </EffectsField>
            <EffectsField>
              <EffectsFieldLabel theme={theme}>Unit</EffectsFieldLabel>
              <EffectsSelect
                theme={theme}
                value={effectDurationType}
                onChange={(e) => setEffectDurationType(e.target.value as EffectDurationType)}
              >
                <option value="turns">Turns</option>
                <option value="rounds">Rounds</option>
              </EffectsSelect>
            </EffectsField>
            <EffectsField>
              <EffectsFieldLabel theme={theme}>Ends at</EffectsFieldLabel>
              <EffectsSelect
                theme={theme}
                value={effectEndTiming}
                onChange={(e) => setEffectEndTiming(e.target.value as EffectEndTiming)}
              >
                <option value="start">Start of turn</option>
                <option value="end">End of turn</option>
              </EffectsSelect>
            </EffectsField>
            <EffectsButton theme={theme} onClick={handleAddEffect}>Add</EffectsButton>
          </EffectsFormRow>

          {effectsModalError && <EffectsError theme={theme}>{effectsModalError}</EffectsError>}

          {activeEffectsForSelectedUnit.length === 0 ? (
            <EffectsEmpty theme={theme}>No active effects.</EffectsEmpty>
          ) : (
            <EffectsList>
              {activeEffectsForSelectedUnit.map((effect) => (
                <EffectItemRow key={effect.id} theme={theme}>
                  <div>
                    <EffectName theme={theme}>{effect.name}</EffectName>
                    <EffectItemMeta theme={theme}>
                      {effect.remaining} {effect.durationType} • ends at {effect.endTiming === 'start' ? 'start of turn' : 'end of turn'} • by {effect.createdByName}
                    </EffectItemMeta>
                  </div>
                  <EffectsButton
                    theme={theme}
                    onClick={() => {
                      if (effectsModalUnitId) {
                        void handleDeleteEffect(effectsModalUnitId, effect.id);
                      }
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
    </ListContainer>
  );
};
