import React, { useState, useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import OBR, { buildText, isImage } from '@owlbear-rodeo/sdk';
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
import { toResolvedDiceNotation } from '../helpers/FormulaParser';
import { EffectsManagerModal, useEffectsManager } from './EffectsManager';
import { ElevationSpecialCell, EffectsSpecialCell } from './InitiativeSpecialCells';
import { requestBonesBroadcastRoll, requestRumbleBroadcastRoll } from '../helpers/DiceRollIntegration';

const ELEVATION_BADGE_FLAG = `${EXTENSION_ID}/elevation-badge`;
const ELEVATION_BADGE_OWNER = `${EXTENSION_ID}/elevation-badge-owner`;
const ELEVATION_METADATA_KEY = `${EXTENSION_ID}/elevation`;

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
  attributes: Record<string, unknown>;
  createdUserId?: string;
  ownerNameOutlineColor?: string;
}

interface ListReferenceEntry {
  id: string;
  name: string;
  description: string;
  inUse?: boolean;
}

interface ListReferenceModalState {
  unitId: string;
  bid: string;
}

interface RoleLike {
  role?: unknown;
}

interface ElevationBadgeImageLike {
  grid: {
    dpi: number;
    offset: {
      x: number;
      y: number;
    };
  };
  image: {
    width: number;
    height: number;
  };
  position: {
    x: number;
    y: number;
  };
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
const iconMap: Record<string, React.ComponentType> = {
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
  position: relative;
  padding: 8px;
  background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.5)};
  border-top: 2px solid ${props => props.theme.BORDER};
`;

const ControlCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
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

const ResetButton = styled(ControlButton)`
  position: absolute;
  right: 8px;
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

const InitiativeInput = styled.input<{ theme: ForgeTheme; $isRollable?: boolean }>`
  background: ${props => props.$isRollable ? rgbaFromHex(props.theme.OFFSET, 0.3) : 'rgba(0, 0, 0, 0.3)'};
  border: 1px solid ${props => props.$isRollable ? rgbaFromHex(props.theme.OFFSET, 0.8) : props.theme.BORDER};
  border-radius: 4px;
  color: ${props => props.theme.PRIMARY};
  padding: 2px 4px;
  font-size: 18px;
  font-weight: 700;
  width: 50px;
  text-align: center;
  backdrop-filter: blur(12px);
  cursor: ${props => props.$isRollable ? 'pointer' : 'text'};
  
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

const ValueInput = styled.input<{ $small?: boolean; $isRollable?: boolean; theme: ForgeTheme }>`
  background: ${props => props.$isRollable ? rgbaFromHex(props.theme.OFFSET, 0.3) : 'rgba(0, 0, 0, 0.4)'};
  border: 1px solid ${props => props.$isRollable ? rgbaFromHex(props.theme.OFFSET, 0.8) : props.theme.BORDER};
  border-radius: 4px;
  color: ${props => props.theme.PRIMARY};
  padding: 2px 4px;
  font-size: ${props => props.$small ? '12px' : '14px'};
  width: ${props => props.$small ? '40px' : '60px'};
  text-align: center;
  backdrop-filter: blur(12px);
  cursor: ${props => props.$isRollable ? 'pointer' : 'text'};
  
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

const OwnerModalSeparator = styled.div<{ theme: ForgeTheme }>`
  height: 1px;
  margin: 12px 0;
  background: ${props => rgbaFromHex(props.theme.BORDER, 0.7)};
`;

const BossModeSection = styled.div<{ theme: ForgeTheme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  background: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.35)};
`;

const BossModeLabel = styled.div<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`;

const BossModeHint = styled.div<{ theme: ForgeTheme }>`
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.75)};
  font-size: 11px;
`;

const BossModeButton = styled.button<{ theme: ForgeTheme; $active?: boolean }>`
  min-width: 110px;
  height: 32px;
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  color: ${props => props.theme.PRIMARY};
  background: ${props => props.$active
    ? rgbaFromHex(props.theme.OFFSET, 0.55)
    : rgbaFromHex(props.theme.BACKGROUND, 0.45)};
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;

  &:hover {
    background: ${props => props.$active
    ? rgbaFromHex(props.theme.OFFSET, 0.7)
    : rgbaFromHex(props.theme.OFFSET, 0.45)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const ListReferenceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListReferenceHint = styled.p<{ theme: ForgeTheme }>`
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.78)};
  margin: 0;
  font-size: 12px;
`;

const ListReferenceItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 320px;
  overflow-y: auto;
`;

const ListReferenceItem = styled.div<{ theme: ForgeTheme }>`
  background: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.35)};
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`;

const ListReferenceTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;

const ListReferenceUseCheckbox = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;
  pointer-events: none;
`;

const ListReferenceName = styled.div<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  font-size: 13px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.2;
`;

const ListReferenceDescription = styled.div<{ theme: ForgeTheme }>`
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.85)};
  font-size: 12px;
  font-style: italic;
  line-height: 1.25;
  white-space: pre-wrap;
`;

const ListReferenceInlineNotationRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
`;

const ListReferenceInlineNotationButton = styled.button<{ theme: ForgeTheme }>`
  border: 1px solid ${props => rgbaFromHex(props.theme.OFFSET, 0.7)};
  border-radius: 999px;
  background: ${props => rgbaFromHex(props.theme.OFFSET, 0.35)};
  color: ${props => props.theme.PRIMARY};
  font-size: 11px;
  padding: 2px 8px;
  cursor: pointer;

  &:hover {
    background: ${props => rgbaFromHex(props.theme.OFFSET, 0.55)};
  }
`;

const ListReferenceEmpty = styled.p<{ theme: ForgeTheme }>`
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.75)};
  margin: 0;
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
  const { listLayout, attributes, isLoading } = useSystemData();
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
  const [isUpdatingBossMode, setIsUpdatingBossMode] = useState(false);
  const [initiativeDrafts, setInitiativeDrafts] = useState<Record<string, string>>({});
  const [elevationDrafts, setElevationDrafts] = useState<Record<string, string>>({});
  const [listReferenceModal, setListReferenceModal] = useState<ListReferenceModalState | null>(null);
  const [rollableEditMode, setRollableEditMode] = useState<Record<string, boolean>>({});
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const longPressTimersRef = useRef<Record<string, number>>({});
  const suppressNextClickRef = useRef<Record<string, boolean>>({});
  const tableRef = useRef<HTMLTableElement>(null);
  const LONG_PRESS_MS = 500;

  // Control for setting the data to Room or to Scene
  const storageContainer = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;

  // Get settings
  const reverseInitiative = storageContainer[SettingsConstants.REVERSE_INITIATIVE] as boolean || false;
  const popcornInitiative = storageContainer[SettingsConstants.POPCORN_INITIATIVE] as boolean || false;
  const showRollerColumn = storageContainer[SettingsConstants.SHOW_ROLLER_COLUMN] as boolean || false;
  const showCardColumn = storageContainer[SettingsConstants.SHOW_CARD_ACCESS] as boolean || false;
  const enableRumble = storageContainer[SettingsConstants.ENABLE_RUMBLE] as boolean || false;
  const enableBones = storageContainer[SettingsConstants.ENABLE_BONES] as boolean || false;
  const diceRange = (storageContainer[SettingsConstants.DICE_RANGE] as string | undefined) || '';
  const showOwnerOnlyEdit = storageContainer[SettingsConstants.SHOW_OWNER_ONLY_EDIT] as boolean || false;
  const isCurrentUserGm = String((playerData as RoleLike | null | undefined)?.role || '').toUpperCase() === 'GM';

  const sendNotationRoll = async ({
    notation,
    actionName,
    tokenName,
    senderId,
    senderColor,
  }: {
    notation: string;
    actionName: string;
    tokenName: string;
    senderId: string;
    senderColor: string;
  }) => {
    if (!enableRumble && !enableBones) {
      LOGGER.log(notation);
      return;
    }

    try {
      if (enableRumble) {
        await requestRumbleBroadcastRoll({
          sender: tokenName,
          action: actionName,
          notation,
        });
        return;
      }

      await requestBonesBroadcastRoll({
        notation,
        actionName,
        senderName: tokenName,
        senderId,
        senderColor,
      });
    } catch (error) {
      LOGGER.error('Failed to send Bones roll from InitiativeList', notation, error);
      LOGGER.log(notation);
    }
  };

  const parseListReferenceEntries = (raw: unknown): ListReferenceEntry[] => {
    let source: unknown = raw;

    if (typeof source === 'string') {
      try {
        source = JSON.parse(source);
      } catch {
        return [];
      }
    }

    if (!Array.isArray(source)) {
      return [];
    }

    return source.map((entry, index) => {
      const value = entry && typeof entry === 'object' ? entry as Record<string, unknown> : {};
      const rawInUse = value.inUse;
      const parsedInUse = typeof rawInUse === 'boolean'
        ? rawInUse
        : (typeof rawInUse === 'string'
          ? ['true', '1', 'yes'].includes(rawInUse.trim().toLowerCase())
          : (typeof rawInUse === 'number' ? rawInUse === 1 : undefined));

      return {
        id: typeof value.id === 'string' && value.id ? value.id : `entry-${index}`,
        name: typeof value.name === 'string' ? value.name : '',
        description: typeof value.description === 'string' ? value.description : '',
        ...(parsedInUse !== undefined ? { inUse: parsedInUse } : {}),
      };
    });
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
        const isGmOwner = String((owner as RoleLike | null | undefined)?.role || '').toUpperCase() === 'GM';
        const ownerNameOutlineColor = isGmOwner ? undefined : withAlpha(owner?.color, 1.0);

        // Extract attributes using BIDs
        const attributes: Record<string, unknown> = {};
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
          createdUserId: item.createdUserId,
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

  const effectsManager = useEffectsManager({
    items,
    units: sortedUnits,
    setItems,
    playerData,
  });

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

  const getImageMinBounds = (unitItem: ElevationBadgeImageLike, sceneGridDpi: number) => {
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

  const resolveAttributeForBid = (bid: string) => {
    return attributes.find((attribute) => attribute.attr_bid === bid) || null;
  };

  const hasAttrFormula = (bid: string): boolean => {
    const attribute = resolveAttributeForBid(bid);
    return typeof attribute?.attr_func === 'string' && attribute.attr_func.trim().length > 0;
  };

  const buildBidNumericValueMapForUnit = (unit: Unit): Record<string, number> => {
    const map: Record<string, number> = {};

    for (const attribute of attributes) {
      const key = `${EXTENSION_ID}/${attribute.attr_bid}`;
      const rawValue = unit.attributes?.[key];
      if (rawValue === undefined || rawValue === null || rawValue === '') {
        continue;
      }

      const parsedValue = Number(rawValue);
      if (Number.isFinite(parsedValue)) {
        map[attribute.attr_bid] = parsedValue;
      }
    }

    return map;
  };

  const handleNotationClick = async (unit: Unit, bid: string) => {
    const attribute = resolveAttributeForBid(bid);
    const formula = attribute?.attr_func;
    if (typeof formula !== 'string' || formula.trim().length === 0) {
      return;
    }

    const conversion = toResolvedDiceNotation(formula, {
      bidValueMap: buildBidNumericValueMapForUnit(unit),
      onMissingBid: 'error',
    });

    if (!conversion.valid || !conversion.notation) {
      LOGGER.warn('Could not resolve notation for initiative list value-column', {
        unitId: unit.id,
        bid,
        error: conversion.error,
      });
      return;
    }

    const actionName = resolveAttributeForBid(bid)?.attr_name || bid;
    const owner = partyData.find((player) => player.id === unit.createdUserId);
    await sendNotationRoll({
      notation: conversion.notation,
      actionName,
      tokenName: unit.name,
      senderId: unit.createdUserId || playerData?.id || 'unknown',
      senderColor: owner?.color || playerData?.color || '#ffffff',
    });
  };

  useEffect(() => {
    return () => {
      Object.values(longPressTimersRef.current).forEach((timerId) => {
        window.clearTimeout(timerId);
      });
    };
  }, []);

  const getRollableFieldKey = (unitId: string, bid: string): string => `value-column:${unitId}:${bid}`;

  const isRollableEditing = (fieldKey: string): boolean => {
    return !!rollableEditMode[fieldKey];
  };

  const enableRollableEditMode = (fieldKey: string, input?: HTMLInputElement | null) => {
    setRollableEditMode((prev) => ({
      ...prev,
      [fieldKey]: true,
    }));

    window.setTimeout(() => {
      input?.focus();
      input?.select();
    }, 0);
  };

  const disableRollableEditMode = (fieldKey: string) => {
    setRollableEditMode((prev) => {
      const { [fieldKey]: _removed, ...rest } = prev;
      return rest;
    });
  };

  const startLongPressEditMode = (fieldKey: string, input: HTMLInputElement) => {
    const existingTimer = longPressTimersRef.current[fieldKey];
    if (existingTimer) {
      window.clearTimeout(existingTimer);
    }

    longPressTimersRef.current[fieldKey] = window.setTimeout(() => {
      suppressNextClickRef.current[fieldKey] = true;
      enableRollableEditMode(fieldKey, input);
      delete longPressTimersRef.current[fieldKey];
    }, LONG_PRESS_MS);
  };

  const cancelLongPressEditMode = (fieldKey: string) => {
    const existingTimer = longPressTimersRef.current[fieldKey];
    if (!existingTimer) {
      return;
    }

    window.clearTimeout(existingTimer);
    delete longPressTimersRef.current[fieldKey];
  };

  const shouldSuppressRollClick = (fieldKey: string): boolean => {
    if (!suppressNextClickRef.current[fieldKey]) {
      return false;
    }

    delete suppressNextClickRef.current[fieldKey];
    return true;
  };

  const canInteractWithUnit = (unit: Unit): boolean => {
    if (!showOwnerOnlyEdit) {
      return true;
    }

    if (isCurrentUserGm) {
      return true;
    }

    const currentPlayerId = playerData?.id;
    if (!currentPlayerId) {
      return false;
    }

    return unit.createdUserId === currentPlayerId;
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
      await effectsManager.processEffectsForTurnEvent('end', currentTurnId);
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
      await effectsManager.processEffectsForTurnEvent('start', sortedUnits[0].id);
    } else {
      // Move to next unit
      setCurrentTurnId(sortedUnits[nextIndex].id);
      await OBR.scene.setMetadata({
        [SettingsConstants.CURRENT_TURN]: sortedUnits[nextIndex].id
      });
      await effectsManager.processEffectsForTurnEvent('start', sortedUnits[nextIndex].id);
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
    await effectsManager.processEffectsForTurnEvent('start', unitId);
  };

  const handleEndTurn = async () => {
    if (!currentTurnId) return;

    await effectsManager.processEffectsForTurnEvent('end', currentTurnId);

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

  const handleResetEncounter = async (clearList: boolean) => {
    setIsResetting(true);

    try {
      if (clearList) {
        const onListIds = items
          .filter((item) => item.metadata?.[UnitConstants.ON_LIST] === true)
          .map((item) => item.id);

        if (onListIds.length > 0) {
          await OBR.scene.items.updateItems(onListIds, (itemsToUpdate) => {
            itemsToUpdate.forEach((itemToUpdate) => {
              if (itemToUpdate.metadata && UnitConstants.ON_LIST in itemToUpdate.metadata) {
                delete itemToUpdate.metadata[UnitConstants.ON_LIST];
              }
            });
          });

          const updatedItems = items.map((item) => {
            if (item.metadata?.[UnitConstants.ON_LIST] !== true) {
              return item;
            }

            const nextMetadata = { ...(item.metadata || {}) };
            delete nextMetadata[UnitConstants.ON_LIST];
            return {
              ...item,
              metadata: nextMetadata,
            };
          });

          setItems(updatedItems);
        }
      }

      const defaultTurnId = clearList ? null : (sortedUnits[0]?.id ?? null);
      setCurrentRound(1);
      setCurrentTurnId(defaultTurnId);
      setCompletedUnits(new Set());

      await OBR.scene.setMetadata({
        [SettingsConstants.CURRENT_TURN]: defaultTurnId,
        [SettingsConstants.CURRENT_ROUND]: 1,
      });

      setIsResetModalOpen(false);
    } catch (error) {
      LOGGER.error('Failed to reset encounter state', { clearList, error });
    } finally {
      setIsResetting(false);
    }
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

  const handleOpenCardPopover = async (elementId: string, unitId: string) => {
    try {
      const windowHeight = await OBR.viewport.getHeight();
      const modalBuffer = 100;
      const viewableHeight = windowHeight > 800 ? 700 : windowHeight - modalBuffer;

      await OBR.popover.open({
        id: OwlbearIds.CARDSID,
        url: `/pages/forgecard.html?unitid=${encodeURIComponent(unitId)}`,
        height: viewableHeight,
        width: 350,
        anchorElementId: elementId,
        hidePaper: true,
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
        const itemToUpdate = itemsToUpdate[0] as typeof itemsToUpdate[0] & { createdUserId?: string };
        itemToUpdate.createdUserId = playerId;
      });

      const updatedItems = items.map((item) =>
        item.id === ownerModalUnitId
          ? ({ ...item, createdUserId: playerId })
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

  const handleToggleBossMode = async () => {
    if (!ownerModalUnitId) {
      return;
    }

    const targetItem = items.find((item) => item.id === ownerModalUnitId);
    if (!targetItem) {
      setOwnerModalError('Token not found in scene cache.');
      return;
    }

    const isCurrentlyBoss = targetItem.metadata?.[UnitConstants.BOSS_MODE] === true;
    const nextBossState = !isCurrentlyBoss;

    if (nextBossState) {
      const existingBossCount = items.filter((item) => {
        return item.id !== ownerModalUnitId
          && item.metadata?.[UnitConstants.ON_LIST] === true
          && item.metadata?.[UnitConstants.BOSS_MODE] === true;
      }).length;

      if (existingBossCount >= 2) {
        setOwnerModalError('A maximum of 2 bosses can be enabled at once.');
        return;
      }
    }

    setIsUpdatingBossMode(true);
    setOwnerModalError(null);

    try {
      await OBR.scene.items.updateItems([ownerModalUnitId], (itemsToUpdate) => {
        const targetMetadata = { ...(itemsToUpdate[0].metadata || {}) };
        targetMetadata[UnitConstants.BOSS_MODE] = nextBossState;
        itemsToUpdate[0].metadata = targetMetadata;
      });

      const updatedItems = items.map((item) => {
        if (item.id !== ownerModalUnitId) {
          return item;
        }

        return {
          ...item,
          metadata: {
            ...(item.metadata || {}),
            [UnitConstants.BOSS_MODE]: nextBossState,
          },
        };
      });
      setItems(updatedItems);
    } catch (error) {
      LOGGER.error('Failed to toggle boss mode', ownerModalUnitId, error);
      setOwnerModalError('Unable to update boss mode for this token.');
    } finally {
      setIsUpdatingBossMode(false);
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

  const selectedOwnerIsBoss = selectedOwnerItem?.metadata?.[UnitConstants.BOSS_MODE] === true;

  const selectedListReferenceUnit = useMemo(
    () => (listReferenceModal ? sortedUnits.find((unit) => unit.id === listReferenceModal.unitId) || null : null),
    [listReferenceModal, sortedUnits]
  );

  const selectedListAttribute = useMemo(
    () => (listReferenceModal ? attributes.find((attr) => attr.attr_bid === listReferenceModal.bid) || null : null),
    [attributes, listReferenceModal]
  );

  const selectedListReferenceEntries = useMemo(() => {
    if (!listReferenceModal || !selectedListReferenceUnit) {
      return [];
    }

    const raw = selectedListReferenceUnit.attributes[`${EXTENSION_ID}/${listReferenceModal.bid}`];
    return parseListReferenceEntries(raw);
  }, [listReferenceModal, selectedListReferenceUnit]);

  const selectedListLooksLikeItemList = useMemo(
    () => selectedListReferenceEntries.some((entry) => typeof entry.inUse === 'boolean'),
    [selectedListReferenceEntries]
  );

  const selectedListBidValueMap = useMemo(() => {
    if (!selectedListReferenceUnit) {
      return {} as Record<string, number>;
    }

    const map: Record<string, number> = {};

    for (const attribute of attributes) {
      const key = `${EXTENSION_ID}/${attribute.attr_bid}`;
      const rawValue = selectedListReferenceUnit.attributes?.[key];
      if (rawValue === undefined || rawValue === null || rawValue === '') {
        continue;
      }

      const parsed = Number(rawValue);
      if (Number.isFinite(parsed)) {
        map[attribute.attr_bid] = parsed;
      }
    }

    return map;
  }, [selectedListReferenceUnit, attributes]);

  const parseListInlineNotationTokens = (text: string): string[] => {
    const tokens: string[] = [];
    const matches = text.matchAll(/\[([^\[\]]+)\]/g);

    for (const match of matches) {
      const formula = (match[1] || '').trim();
      if (!formula) {
        continue;
      }

      const conversion = toResolvedDiceNotation(formula, {
        bidValueMap: selectedListBidValueMap,
        onMissingBid: 'error',
      });

      if (!conversion.valid || !conversion.notation) {
        continue;
      }

      tokens.push(conversion.notation);
    }

    return tokens;
  };
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
    const canInteract = canInteractWithUnit(unit);

    switch (col.type) {
      case 'initiative':
        if (popcornInitiative) {
          // In popcorn mode, show completion indicator
          return (
            <InitiativeCell theme={theme}>
              <TurnIcon
                onClick={(e) => {
                  e.stopPropagation();
                  if (!canInteract) {
                    return;
                  }
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
        const initiativeFieldKey = `initiative:${unit.id}`;
        const isEditingInitiative = isRollableEditing(initiativeFieldKey);
        return (
          <InitiativeCell theme={theme}>
            <InitiativeInput
              theme={theme}
              $isRollable={canInteract && !isEditingInitiative}
              type="text"
              inputMode="decimal"
              value={initiativeDrafts[unit.id] ?? String(unit.initiative)}
              readOnly={!canInteract || !isEditingInitiative}
              onChange={!canInteract || !isEditingInitiative ? undefined : (e) => handleInitiativeDraftChange(unit.id, e.target.value)}
              onBlur={!canInteract || !isEditingInitiative ? undefined : (e) => {
                commitInitiativeInput(unit.id, e.target.value);
                disableRollableEditMode(initiativeFieldKey);
              }}
              onClick={() => {
                if (!canInteract) {
                  return;
                }
                if (isEditingInitiative) {
                  return;
                }

                if (shouldSuppressRollClick(initiativeFieldKey)) {
                  return;
                }

                handleRollInitiative(unit.id);
              }}
              onContextMenu={(event) => {
                if (!canInteract) {
                  return;
                }
                event.preventDefault();
                enableRollableEditMode(initiativeFieldKey, event.currentTarget);
              }}
              onTouchStart={(event) => {
                if (!canInteract) {
                  return;
                }
                if (isEditingInitiative) {
                  return;
                }
                startLongPressEditMode(initiativeFieldKey, event.currentTarget);
              }}
              onTouchEnd={() => {
                cancelLongPressEditMode(initiativeFieldKey);
              }}
              onTouchCancel={() => {
                cancelLongPressEditMode(initiativeFieldKey);
              }}
              onKeyDown={(e) => {
                if (!canInteract) {
                  return;
                }
                if (!isEditingInitiative && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  handleRollInitiative(unit.id);
                  return;
                }

                if (isEditingInitiative && e.key === 'Enter') {
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
            onContextMenu={canInteract ? (event) => handleUnitContextMenu(event, unit.id) : undefined}
          >
            {unit.name}
          </NameCell>
        );

      case 'roller':
        return (
          <RollerCell theme={theme}>
            <RollerButton
              theme={theme}
              disabled={!canInteract}
              onClick={(e) => {
                e.stopPropagation();
                if (!canInteract) {
                  return;
                }
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
              disabled={!canInteract}
              onClick={(e) => {
                e.stopPropagation();
                if (!canInteract) {
                  return;
                }
                void handleOpenCardPopover(e.currentTarget.id, unit.id);
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
              {col.styles?.bidList?.map((bid, idx) => {
                const isRollableInput = hasAttrFormula(bid);
                const fieldKey = getRollableFieldKey(unit.id, bid);
                const isEditingRollableInput = isRollableInput && isRollableEditing(fieldKey);
                const rawAttrValue = unit.attributes[`${EXTENSION_ID}/${bid}`];
                const valueInputValue = rawAttrValue === undefined || rawAttrValue === null || rawAttrValue === ''
                  ? '0'
                  : String(rawAttrValue);

                return (
                  <React.Fragment key={bid}>
                    {idx > 0 && <Divider theme={theme}>{col.styles?.dividers?.[idx - 1] || '/'}</Divider>}
                    <ValueInput
                      theme={theme}
                      $isRollable={canInteract && isRollableInput}
                      value={valueInputValue}
                      $small={col.styles?.bidList && col.styles.bidList.length > 2}
                      readOnly={!canInteract || (isRollableInput && !isEditingRollableInput)}
                      onChange={!canInteract || (isRollableInput && !isEditingRollableInput) ? undefined : (e) => {
                        const newValue = e.target.value;

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
                      onBlur={!canInteract || (isRollableInput && !isEditingRollableInput) ? undefined : (e) => {
                        commitValueColumnInput(unit.id, bid, e.target.value);
                        if (isRollableInput) {
                          disableRollableEditMode(fieldKey);
                        }
                      }}
                      onClick={isRollableInput ? () => {
                        if (!canInteract) {
                          return;
                        }
                        if (isEditingRollableInput) {
                          return;
                        }

                        if (shouldSuppressRollClick(fieldKey)) {
                          return;
                        }

                        void handleNotationClick(unit, bid);
                      } : undefined}
                      onContextMenu={isRollableInput ? (event) => {
                        if (!canInteract) {
                          return;
                        }
                        event.preventDefault();
                        enableRollableEditMode(fieldKey, event.currentTarget);
                      } : undefined}
                      onTouchStart={isRollableInput ? (event) => {
                        if (!canInteract) {
                          return;
                        }
                        if (isEditingRollableInput) {
                          return;
                        }
                        startLongPressEditMode(fieldKey, event.currentTarget);
                      } : undefined}
                      onTouchEnd={isRollableInput ? () => {
                        cancelLongPressEditMode(fieldKey);
                      } : undefined}
                      onTouchCancel={isRollableInput ? () => {
                        cancelLongPressEditMode(fieldKey);
                      } : undefined}
                      onKeyDown={(e) => {
                        if (!canInteract) {
                          return;
                        }
                        if (isRollableInput && !isEditingRollableInput && (e.key === 'Enter' || e.key === ' ')) {
                          e.preventDefault();
                          void handleNotationClick(unit, bid);
                          return;
                        }

                        if ((isEditingRollableInput || !isRollableInput) && e.key === 'Enter') {
                          e.preventDefault();
                          e.currentTarget.blur();
                        }
                      }}
                    />
                  </React.Fragment>
                );
              })}
            </ValueContainer>
          </DataCell>
        );

      case 'list-column':
        return (
          <DataCell theme={theme}>
            <ActionButton
              theme={theme}
              disabled={!canInteract}
              onClick={(event) => {
                event.stopPropagation();
                if (!canInteract) {
                  return;
                }
                const bidId = col.styles?.bidList?.[0];
                if (!bidId) {
                  return;
                }
                setListReferenceModal({
                  unitId: unit.id,
                  bid: bidId,
                });
              }}
              title="Open list reference"
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
                  disabled={!canInteract}
                  onChange={!canInteract ? undefined : (e) => {
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
            <ElevationSpecialCell
              theme={theme}
              unit={unit}
              canInteract={canInteract}
              elevationDraftValue={elevationDraftValue}
              onElevationDraftChange={handleElevationDraftChange}
              onCommitElevationChange={commitElevationChange}
            />
          );
        } else {
          // Effects
          const activeEffectsCount = effectsManager.getEffectsForUnit(unit.id).length;
          return (
            <EffectsSpecialCell
              theme={theme}
              canInteract={canInteract}
              icon={specialIcon || <Sun />}
              activeEffectsCount={activeEffectsCount}
              onOpen={() => effectsManager.handleOpenEffectsModal(unit.id)}
            />
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
        <ControlCenter>
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
        </ControlCenter>
        <ResetButton
          theme={theme}
          onClick={() => setIsResetModalOpen(true)}
          disabled={isResetting}
          title="Reset round/turn state"
        >
          Reset
        </ResetButton>
      </ControlWrapper>
      <PopupModal
        isOpen={!!ownerModalUnitId}
        title={selectedOwnerUnit ? `Unit: ${selectedOwnerUnit.name}` : 'Unit'}
        onClose={() => {
          if (isAssigningOwner || isUpdatingBossMode) return;
          setOwnerModalUnitId(null);
          setOwnerModalError(null);
        }}
        closeOnOverlayClick={!isAssigningOwner && !isUpdatingBossMode}
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
              disabled={isAssigningOwner || isUpdatingBossMode}
            >
              {player.name}
              {selectedOwnerItem?.createdUserId === player.id ? ' (current)' : ''}
            </OwnerPickerButton>
          ))}
        </OwnerPickerList>

        <OwnerModalSeparator theme={theme} />

        <BossModeSection theme={theme}>
          <div>
            <BossModeLabel theme={theme}>Boss Mode</BossModeLabel>
            <BossModeHint theme={theme}>Shows a large encounter HP bar in scene (max 2 bosses).</BossModeHint>
          </div>
          <BossModeButton
            theme={theme}
            $active={selectedOwnerIsBoss}
            disabled={isAssigningOwner || isUpdatingBossMode}
            onClick={() => {
              void handleToggleBossMode();
            }}
          >
            {isUpdatingBossMode ? 'Updating...' : selectedOwnerIsBoss ? 'Enabled' : 'Disabled'}
          </BossModeButton>
        </BossModeSection>
        {ownerModalError && <OwnerPickerError theme={theme}>{ownerModalError}</OwnerPickerError>}
      </PopupModal>

      <EffectsManagerModal manager={effectsManager} />

      <PopupModal
        isOpen={isResetModalOpen}
        title="Reset Encounter"
        onClose={() => {
          if (isResetting) return;
          setIsResetModalOpen(false);
        }}
        closeOnOverlayClick={!isResetting}
        maxWidth="460px"
      >
        <OwnerPickerHint theme={theme}>
          Choose how you want to reset initiative state.
        </OwnerPickerHint>
        <OwnerPickerList>
          <OwnerPickerButton
            theme={theme}
            onClick={() => {
              void handleResetEncounter(false);
            }}
            disabled={isResetting}
          >
            {isResetting ? 'Resetting...' : 'Reset Round'}
          </OwnerPickerButton>
          <OwnerPickerButton
            theme={theme}
            onClick={() => {
              void handleResetEncounter(true);
            }}
            disabled={isResetting}
          >
            {isResetting ? 'Resetting...' : 'Reset Round and Clear Initiative List'}
          </OwnerPickerButton>
        </OwnerPickerList>
      </PopupModal>

      <PopupModal
        isOpen={!!listReferenceModal}
        title={selectedListReferenceUnit
          ? `${selectedListAttribute?.attr_name || 'List'} for ${selectedListReferenceUnit.name}`
          : 'List Reference'}
        onClose={() => {
          setListReferenceModal(null);
        }}
        maxWidth="620px"
      >
        <ListReferenceSection>
          <ListReferenceHint theme={theme}>
          </ListReferenceHint>

          {selectedListReferenceEntries.length === 0 ? (
            <ListReferenceEmpty theme={theme}>No entries.</ListReferenceEmpty>
          ) : (
            <ListReferenceItems>
              {selectedListReferenceEntries.map((entry) => (
                <ListReferenceItem key={entry.id} theme={theme}>
                  <ListReferenceTitleRow>
                    {selectedListLooksLikeItemList ? (
                      <ListReferenceUseCheckbox type="checkbox" checked={!!entry.inUse} readOnly tabIndex={-1} />
                    ) : null}
                    <ListReferenceName theme={theme}>{entry.name || '(Unnamed)'}</ListReferenceName>
                  </ListReferenceTitleRow>
                  {entry.description ? (
                    <ListReferenceDescription theme={theme}>{entry.description}</ListReferenceDescription>
                  ) : null}
                  {(() => {
                    const inlineNotationTokens = parseListInlineNotationTokens(entry.description || '');

                    if (inlineNotationTokens.length === 0) {
                      return null;
                    }

                    return (
                      <ListReferenceInlineNotationRow>
                        {inlineNotationTokens.map((notation, index) => (
                          <ListReferenceInlineNotationButton
                            key={`${entry.id}-inline-notation-${index}`}
                            type="button"
                            theme={theme}
                            onClick={() => {
                              const listOwner = selectedListReferenceUnit?.createdUserId
                                ? partyData.find((player) => player.id === selectedListReferenceUnit.createdUserId)
                                : null;
                              void sendNotationRoll({
                                notation,
                                actionName: entry.name || selectedListAttribute?.attr_name || 'List Roll',
                                tokenName: selectedListReferenceUnit?.name || 'Unknown',
                                senderId: selectedListReferenceUnit?.createdUserId || playerData?.id || 'unknown',
                                senderColor: listOwner?.color || playerData?.color || '#ffffff',
                              });
                            }}
                            title={notation}
                          >
                            {notation}
                          </ListReferenceInlineNotationButton>
                        ))}
                      </ListReferenceInlineNotationRow>
                    );
                  })()}
                </ListReferenceItem>
              ))}
            </ListReferenceItems>
          )}
        </ListReferenceSection>
      </PopupModal>
    </ListContainer>
  );
};
