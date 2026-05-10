import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Anchor,
  Aperture,
  Award,
  BatteryCharging,
  Book,
  Calendar,
  Clock,
  CloudLightning,
  Drama,
  Carrot,
  Bone,
  Compass,
  DollarSign,
  Feather,
  Eye,
  Heart,
  Moon,
  Music,
  Shield,
  Star,
  Sun,
  Target,
  Users,
  Wind,
  Zap,
  Sword,
  Swords,
  Axe,
  BowArrow,
  Coins,
  Wand,
  Flower,
  Skull,
  Castle,
  Cross,
  TestTubeDiagonal,
  Squirrel,
  Snowflake,
  Shell,
  Pickaxe,
  HeartPlus,
  HeartCrack,
  Fan,
  Plus,
  X,
  type LucideIcon,
} from 'lucide-react';
import OBR, { type Item } from '@owlbear-rodeo/sdk';
import { DATA_STORED_IN_ROOM, OwlbearIds } from '../helpers/Constants';
import { sendCentralDiceRoll } from '../helpers/DiceRollIntegration';
import { toResolvedDiceNotation } from '../helpers/FormulaParser';
import { buildCompleteValueMaps } from '../helpers/DerivedValueResolution';
import LOGGER from '../helpers/Logger';
import { rgbaFromHex } from '../helpers/ThemeConstants';
import { deserializeCardLayout } from '../helpers/deserializeCardLayout';
import { UnitConstants } from '../interfaces/MetadataKeys';
import type { CardLayoutComponent, SystemAttribute } from '../interfaces/SystemResponse';
import defaultGameSystem from '../assets/defaultgamesystem.json';

export interface CardLayoutTheme {
  primary: string;
  offset: string;
  background: string;
  border: string;
}

const getRollableInputTextShadow = (theme: CardLayoutTheme): string => {
  return `
    0 1px 1px ${rgbaFromHex(theme.background, 0.95)},
    0 0 2px ${rgbaFromHex(theme.background, 0.85)}
  `;
};

interface RendererProps {
  systemTheme: CardLayoutTheme;
  backgroundUrl?: string;
  cardLayout: CardLayoutComponent[];
  attributes: SystemAttribute[];
  unitItem: Item;
  onUpdateMetadata: (updates: Record<string, unknown>) => Promise<void>;
}

type ActionListEntry = {
  id: string;
  name: string;
  description: string;
};

type ItemListEntry = {
  id: string;
  name: string;
  description: string;
  inUse: boolean;
};

type InlineNotationToken = {
  raw: string;
  notation: string;
};

type FieldContextMenuState = {
  draftKey: string;
  attribute: RuntimeAttributeLike;
  input: HTMLInputElement | null;
  isRollable: boolean;
};

type InlineNotationContextMenuState = {
  notation: string;
  actionName: string;
  title: string;
};

type RuntimeAttributeLike = SystemAttribute & {
  id?: unknown;
  bid?: string;
  abbr?: string;
  func?: string | null;
  name?: string;
  type?: string;
  group?: string;
  meta?: SystemAttribute['attr_meta'];
};

const CardShell = styled.div<{ $theme: CardLayoutTheme; $backgroundUrl?: string }>`
  width: 100%;
  max-width: 350px;
  height: 700px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 0 2px 40px;
  max-height: calc(100vh - 50px);
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  position: relative;
`;

const Layer = styled.div`
  position: relative;
  z-index: 1;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`;

const BaseCell = styled.div<{ $full?: boolean; $theme: CardLayoutTheme }>`
  width: ${props => (props.$full ? '100%' : '170px')};
  min-height: 12    px;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`;

const UnitNameCell = styled(BaseCell)`
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  height: calc(2 * 1.1em);
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100% !important;
`;

const UnitNameInput = styled.input<{ $theme: CardLayoutTheme }>`
  width: 100%;
  border: none;
  background: transparent;
  color: ${props => props.$theme.primary};
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  padding: 0;
  margin: 0;

  &:focus {
    outline: none;
  }
`;

const Label = styled.div<{
  $theme: CardLayoutTheme;
  $fontSize: string;
  $stretch?: boolean;
  $align?: string;
  $weight?: number;
  $fontStyle?: 'normal' | 'italic';
}>`
  color: ${props => props.$theme.offset};
  font-size: ${props => props.$fontSize};
  font-weight: ${props => props.$weight ?? 400};
  font-style: ${props => props.$fontStyle ?? 'normal'};
  letter-spacing: ${props => (props.$stretch ? '0.08em' : 'normal')};
  text-align: ${props => props.$align || 'left'};
`;

const ColumnLabel = styled(Label)`
  color: ${props => props.$theme.primary};
  width: 100%;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ValueText = styled.div<{ $theme: CardLayoutTheme; $fontSize: string; $weight: number; $stretch?: boolean; $align?: string }>`
  color: ${props => props.$theme.primary};
  font-size: ${props => props.$fontSize};
  font-weight: ${props => props.$weight};
  letter-spacing: ${props => (props.$stretch ? '0.08em' : 'normal')};
  text-align: ${props => props.$align || 'left'};
`;

const DisabledInput = styled.input<{ $theme: CardLayoutTheme; $fontSize: string; $align?: string; $isRollable?: boolean }>`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${props => props.$isRollable ? rgbaFromHex(props.$theme.offset, 0.8) : props.$theme.border};
  background: ${props => props.$isRollable
    ? rgbaFromHex(props.$theme.offset, 0.5)
    : rgbaFromHex(props.$theme.background, 0.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${props => rgbaFromHex(props.$theme.primary, 0.9)};
  text-shadow: ${props => props.$isRollable ? getRollableInputTextShadow(props.$theme) : 'none'};
  box-shadow: ${props => props.$isRollable
    ? `inset 0 0 0 1px ${rgbaFromHex(props.$theme.background, 0.28)}, 0 0 0 1px ${rgbaFromHex(props.$theme.offset, 0.18)}`
    : 'none'};
  box-sizing: border-box;
  font-size: ${props => props.$fontSize};
  text-align: ${props => props.$align || 'left'};
  cursor: ${props => props.$isRollable ? 'pointer' : 'text'};

  &:focus {
    outline: none;
    border-color: ${props => props.$theme.offset};
    box-shadow: ${props => props.$isRollable
    ? `0 0 0 2px ${rgbaFromHex(props.$theme.offset, 0.35)}, inset 0 0 0 1px ${rgbaFromHex(props.$theme.background, 0.35)}`
    : 'none'};
  }

  &::placeholder {
    color: ${props => rgbaFromHex(props.$theme.primary, 0.65)};
  }
`;

const TextValueSlot = styled.div<{ $full?: boolean }>`
  width: ${props => (props.$full ? '100%' : '170px')};
  height: 40px;
  box-sizing: border-box;
`;

const TextValueRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
`;

const TextValueLabel = styled.span<{
  $theme: CardLayoutTheme;
  $fontSize: string;
  $stretch?: boolean;
  $weight: number;
  $fontStyle: 'normal' | 'italic';
}>`
  color: ${props => props.$theme.offset};
  font-size: ${props => props.$fontSize};
  font-weight: ${props => props.$weight};
  font-style: ${props => props.$fontStyle};
  letter-spacing: ${props => (props.$stretch ? '0.08em' : 'normal')};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  margin-right: 4px;
  align-self: center;
`;

const TextValueInput = styled.input<{
  $theme: CardLayoutTheme;
  $fontSize: string;
  $align?: string;
  $weight: number;
  $fontStyle: 'normal' | 'italic';
  $stretch?: boolean;
  $isRollable?: boolean;
}>`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${props => props.$isRollable ? rgbaFromHex(props.$theme.offset, 0.8) : props.$theme.border};
  background: ${props => props.$isRollable
    ? rgbaFromHex(props.$theme.offset, 0.5)
    : rgbaFromHex(props.$theme.background, 0.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${props => rgbaFromHex(props.$theme.primary, 0.9)};
  text-shadow: ${props => props.$isRollable ? getRollableInputTextShadow(props.$theme) : 'none'};
  box-shadow: ${props => props.$isRollable
    ? `inset 0 0 0 1px ${rgbaFromHex(props.$theme.background, 0.28)}, 0 0 0 1px ${rgbaFromHex(props.$theme.offset, 0.18)}`
    : 'none'};
  padding: 0 8px;
  box-sizing: border-box;
  font-size: ${props => props.$fontSize};
  font-weight: ${props => props.$weight};
  font-style: ${props => props.$fontStyle};
  letter-spacing: ${props => (props.$stretch ? '0.08em' : 'normal')};
  text-align: ${props => props.$align || 'center'};
  line-height: 1;
  align-self: center;
  cursor: ${props => props.$isRollable ? 'pointer' : 'text'};

  &:focus {
    outline: none;
    border-color: ${props => props.$theme.offset};
    box-shadow: ${props => props.$isRollable
    ? `0 0 0 2px ${rgbaFromHex(props.$theme.offset, 0.35)}, inset 0 0 0 1px ${rgbaFromHex(props.$theme.background, 0.35)}`
    : 'none'};
  }

  &::placeholder {
    color: ${props => rgbaFromHex(props.$theme.primary, 0.65)};
  }
`;

const ValueSelect = styled.select<{
  $theme: CardLayoutTheme;
  $fontSize: string;
  $align?: string;
  $weight: number;
  $fontStyle: 'normal' | 'italic';
  $stretch?: boolean;
}>`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${props => rgbaFromHex(props.$theme.primary, 0.9)};
  padding: 0 8px;
  box-sizing: border-box;
  font-size: ${props => props.$fontSize};
  font-weight: ${props => props.$weight};
  font-style: ${props => props.$fontStyle};
  letter-spacing: ${props => (props.$stretch ? '0.08em' : 'normal')};
  text-align: ${props => props.$align || 'center'};
  text-align-last: ${props => props.$align || 'center'};
  line-height: 1;
  align-self: center;

  &:focus {
    outline: none;
    border-color: ${props => props.$theme.offset};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`;

const ReadOnlyValue = styled.div<{
  $theme: CardLayoutTheme;
  $fontSize: string;
  $align?: string;
  $weight: number;
  $fontStyle: 'normal' | 'italic';
  $stretch?: boolean;
}>`
  width: 100%;
  min-height: 28px;
  border-radius: 4px;
  border: 1px dashed ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.52)};
  color: ${props => rgbaFromHex(props.$theme.primary, 0.92)};
  padding: 4px 8px;
  box-sizing: border-box;
  font-size: ${props => props.$fontSize};
  font-weight: ${props => props.$weight};
  font-style: ${props => props.$fontStyle};
  letter-spacing: ${props => (props.$stretch ? '0.08em' : 'normal')};
  text-align: ${props => props.$align || 'center'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DerivedReadOnlyValue = styled(ReadOnlyValue)<{
  $theme: CardLayoutTheme;
}>`
  border-style: solid;
  background: ${props => rgbaFromHex(props.$theme.primary, 0.75)};
  color: ${props => rgbaFromHex(props.$theme.offset, 0.96)};
  box-shadow: ${props => `0 4px 14px ${rgbaFromHex(props.$theme.background, 0.65)}`};
  text-shadow: ${props => `1px 1px 0 ${rgbaFromHex(props.$theme.background, 0.95)}`};
  font-weight: 700;
  font-style: italic;
`;

const ResourceValueRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ResourceDivider = styled.span<{ $theme: CardLayoutTheme }>`
  color: ${props => rgbaFromHex(props.$theme.primary, 0.92)};
  flex-shrink: 0;
`;

const ResourcePipWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const ResourcePip = styled.button<{ $theme: CardLayoutTheme; $filled: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid ${props => props.$theme.border};
  background: ${props => props.$filled ? props.$theme.primary : 'transparent'};
  flex-shrink: 0;
  padding: 0;
  cursor: pointer;

  &:disabled {
    cursor: default;
    opacity: 0.65;
  }
`;

const HorizontalGroup = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const ColumnTrack = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ColumnInputTrack = styled.div`
  flex: 1;
  min-width: 0;
`;

const Spacer = styled.div<{ $full?: boolean }>`
  width: ${props => (props.$full ? '100%' : '170px')};
  min-height: 18px;
`;

const DefaultDivider = styled.div<{ $theme: CardLayoutTheme }>`
  width: 100%;
  height: 5px;
  background: ${props => `linear-gradient(10deg, ${props.$theme.border || 'white'}, rgba(255,255,255,0))`};
`;

const ImageBlock = styled.div<{ $theme: CardLayoutTheme; $heightPx: number }>`
  width: 100%;
  height: ${props => `${props.$heightPx}px`};
  border-radius: 8px;
  border: 1px solid ${props => rgbaFromHex(props.$theme.border, 0.9)};
  background: ${props => rgbaFromHex(props.$theme.background, 0.42)};
  overflow: hidden;
  box-sizing: border-box;
`;

const ImageElement = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ImagePlaceholder = styled.div<{ $theme: CardLayoutTheme }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  color: ${props => rgbaFromHex(props.$theme.offset, 0.95)};
  padding: 6px;
  box-sizing: border-box;
`;

const DashDivider = styled.div<{ $theme: CardLayoutTheme }>`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${props => props.$theme.border || 'rgba(255,255,255,0.5)'};
`;

const ShadowDivider = styled.div<{ $theme: CardLayoutTheme }>`
  width: 100%;
  height: 10px;
  background: ${props => `linear-gradient(to bottom, ${props.$theme.border || 'rgba(255,255,255,0.2)'}, transparent)`};
`;

const RidgeDivider = styled.div<{ $theme: CardLayoutTheme }>`
  width: 100%;
  height: 2px;
  background: ${props => props.$theme.border || '#222'};
  box-shadow: ${props => `inset 0 1px 0 ${props.$theme.border || '#444'}, 0 1px 0 #000`};
`;

const ZigZagDivider = styled.div<{ $theme: CardLayoutTheme }>`
  width: 100%;
  height: 6px;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-image: ${props => {
    const strokeColor = encodeURIComponent(props.$theme.border || '#ffffff');
    return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' viewBox='0 0 24 6' preserveAspectRatio='none'%3E%3Cpolyline points='0,6 6,0 12,6 18,0 24,6' fill='none' stroke='${strokeColor}' stroke-width='1.5'/%3E%3C/svg%3E")`;
  }};
`;

const PulseDivider = styled.div<{ $theme: CardLayoutTheme }>`
  width: 100%;
  height: 4px;
  background: ${props => props.$theme.border || 'white'};
  animation: flicker 1.2s infinite alternate;

  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 1; }
  }
`;

const ListBlock = styled.div<{ $theme: CardLayoutTheme }>`
  width: 100%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  box-sizing: border-box;
`;

const ListHeader = styled.div<{ $theme: CardLayoutTheme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => rgbaFromHex(props.$theme.border, 0.85)};
  padding-bottom: 4px;
  margin-bottom: 4px;
`;

const ListTitle = styled.div<{ $theme: CardLayoutTheme }>`
  color: ${props => props.$theme.offset};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const HeaderIconButton = styled.button<{ $theme: CardLayoutTheme }>`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${props => props.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ListEntry = styled.div`
  margin-bottom: 8px;
`;

const ItemTitleRow = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`;

const ItemCheckboxSlot = styled.div`
  width: 20px;
  display: flex;
  justify-content: center;
`;

const ItemTitleCenter = styled.div<{ $theme: CardLayoutTheme }>`
  flex: 1;
  text-align: center;
  color: ${props => props.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`;

const DeleteIconWrap = styled.button<{ $theme: CardLayoutTheme }>`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${props => props.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ListNameInput = styled.input<{ $theme: CardLayoutTheme }>`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${props => props.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
  font-style: italic;
  font-weight: 700;
`;

const ListDescriptionInput = styled.textarea<{ $theme: CardLayoutTheme }>`
  width: 100%;
  min-height: 44px;
  border-radius: 4px;
  border: 1px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.78)};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: ${props => props.$theme.primary};
  padding: 6px 8px;
  box-sizing: border-box;
  font-style: italic;
  font-size: 13px;
  line-height: 1.15;
  resize: none;
  overflow: hidden;
`;

const InlineNotationRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`;

const InlineNotationButton = styled.button<{ $theme: CardLayoutTheme }>`
  height: 22px;
  min-width: 0;
  max-width: 100%;
  border-radius: 4px;
  border: 1px solid ${props => rgbaFromHex(props.$theme.offset, 0.8)};
  background: ${props => rgbaFromHex(props.$theme.offset, 0.5)};
  color: ${props => rgbaFromHex(props.$theme.primary, 0.95)};
  padding: 0 6px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RollableMenuActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RollableModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 9999;
`;

const RollableModalContainer = styled.div<{ $theme: CardLayoutTheme }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(420px, calc(100vw - 24px));
  border-radius: 10px;
  border: 2px solid ${props => rgbaFromHex(props.$theme.border, 0.9)};
  background: ${props => rgbaFromHex(props.$theme.background, 0.95)};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.45);
  padding: 14px;
  box-sizing: border-box;
  z-index: 10000;
`;

const RollableModalTitle = styled.h3<{ $theme: CardLayoutTheme }>`
  margin: 0 0 12px;
  color: ${props => rgbaFromHex(props.$theme.primary, 0.98)};
  font-size: 16px;
`;

const RollableModalTitleRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
`;

const RollableModalBid = styled.span<{ $theme: CardLayoutTheme }>`
  color: ${props => rgbaFromHex(props.$theme.offset, 0.95)};
  font-size: 13px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
`;

const RollableMenuButton = styled.button<{ $theme: CardLayoutTheme }>`
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${props => rgbaFromHex(props.$theme.border, 0.9)};
  background: ${props => rgbaFromHex(props.$theme.background, 0.82)};
  color: ${props => rgbaFromHex(props.$theme.primary, 0.95)};
  padding: 8px 10px;
  box-sizing: border-box;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: ${props => rgbaFromHex(props.$theme.offset, 0.38)};
  }
`;

const ActionNameRow = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`;

const ActionNameInputWrap = styled.div`
  flex: 1;
`;

const ItemUseCheckbox = styled.input<{ $theme: CardLayoutTheme }>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${props => props.$theme.border};
  cursor: pointer;
  background: ${props => rgbaFromHex(props.$theme.background, 0.55)};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  vertical-align: middle;
  background-image: none;

  &:checked {
    background-color: ${props => props.$theme.primary};
    border-color: ${props => props.$theme.border};
    background-image: none !important;
    background-size: initial;
    background-position: initial;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
    box-shadow: ${props => `0 0 0 2px ${rgbaFromHex(props.$theme.primary, 0.6)}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`;

const TextCheckboxRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  gap: 8px;
`;

const TextCheckboxLabel = styled.span<{
  $theme: CardLayoutTheme;
  $fontSize: string;
  $stretch?: boolean;
  $weight: number;
  $fontStyle: 'normal' | 'italic';
}>`
  color: ${props => props.$theme.offset || defaultGameSystem.theme_offset};
  font-size: ${props => props.$fontSize};
  font-weight: ${props => props.$weight};
  font-style: ${props => props.$fontStyle};
  letter-spacing: ${props => (props.$stretch ? '0.08em' : 'normal')};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const TextCheckboxInputs = styled.div<{ $fullWidth: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: space-evenly;
  width: ${props => (props.$fullWidth ? '100%' : 'auto')};
`;

const CheckboxInput = styled.input<{ $theme: CardLayoutTheme }>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.55)};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  cursor: pointer;
  background-image: none;

  &:checked {
    background-color: ${props => props.$theme.primary};
    border-color: ${props => props.$theme.border};
    background-image: none !important;
    background-size: initial;
    background-position: initial;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
    box-shadow: ${props => `0 0 0 2px ${rgbaFromHex(props.$theme.primary, 0.6)}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`;

const StyledToggle = styled.button<{ $theme: CardLayoutTheme; $active: boolean }>`
  width: 26px;
  height: 24px;
  min-width: 26px;
  min-height: 24px;
  max-width: 26px;
  max-height: 24px;
  flex: 0 0 24px;
  border-radius: 6px;
  background: ${props => props.$theme.background};
  border: 1px solid ${props => props.$theme.border};
  box-sizing: border-box;
  padding: 0;
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  cursor: pointer;
`;

const StyledToggleBar = styled.div<{ $theme: CardLayoutTheme; $active: boolean }>`
  position: absolute;
  left: 0;
  width: 100%;
  height: 16px;
  box-sizing: border-box;
  border-radius: 6px;
  background: ${props => props.$theme.primary};
  border: 1px solid ${props => props.$theme.border};
  top: 0;
  transform: translateY(${props => props.$active ? '-1px' : '6px'});
  transition: transform 200ms;
`;

const sizeMapTitle = { sm: '14px', md: '16px', lg: '18px' };
const sizeMapTextValue = { sm: '14px', md: '16px', lg: '18px' };
const sizeMapColumn = { sm: '14px', md: '16px', lg: '18px' };
const sizeMapTextValueRow = { sm: '14px', md: '16px', lg: '18px' };
const IMAGE_ROW_UNIT_HEIGHT = 40;

const ICON_COMPONENTS: Record<string, LucideIcon> = {
  anchor: Anchor,
  aperture: Aperture,
  award: Award,
  'battery-charging': BatteryCharging,
  book: Book,
  calendar: Calendar,
  clock: Clock,
  'cloud-lightning': CloudLightning,
  compass: Compass,
  'dollar-sign': DollarSign,
  feather: Feather,
  eye: Eye,
  heart: Heart,
  moon: Moon,
  music: Music,
  shield: Shield,
  star: Star,
  sun: Sun,
  target: Target,
  users: Users,
  wind: Wind,
  zap: Zap,
  drama: Drama,
  carrot: Carrot,
  bone: Bone,
  sword: Sword,
  swords: Swords,
  axe: Axe,
  'bow-arrow': BowArrow,
  coins: Coins,
  wand: Wand,
  flower: Flower,
  skull: Skull,
  castle: Castle,
  cross: Cross,
  'test-tube-diagonal': TestTubeDiagonal,
  squirrel: Squirrel,
  snowflake: Snowflake,
  shell: Shell,
  pickaxe: Pickaxe,
  'heart-plus': HeartPlus,
  'heart-crack': HeartCrack,
  fan: Fan,
};

const clampInt = (value: unknown, min: number, max: number, fallback: number): number => {
  const numeric = typeof value === 'number'
    ? value
    : (typeof value === 'string' ? Number(value) : NaN);

  if (!Number.isFinite(numeric)) {
    return fallback;
  }

  const rounded = Math.trunc(numeric);
  return Math.max(min, Math.min(max, rounded));
};

const resolveTextAlign = (value: unknown, fallback: 'left' | 'center' | 'right' = 'center'): 'left' | 'center' | 'right' => {
  if (typeof value !== 'string') {
    return fallback;
  }

  const normalized = value.trim().toLowerCase();
  if (normalized === 'left' || normalized === 'center' || normalized === 'right') {
    return normalized;
  }

  return fallback;
};

const getAttributeBid = (attribute: RuntimeAttributeLike | null | undefined): string => {
  return String(attribute?.attr_bid ?? attribute?.bid ?? '').trim();
};

const getAttributeAbbr = (attribute: RuntimeAttributeLike | null | undefined): string => {
  return String(attribute?.attr_abbr ?? attribute?.abbr ?? '').trim();
};

const getAttributeName = (attribute: RuntimeAttributeLike | null | undefined): string => {
  return String(attribute?.attr_name ?? attribute?.name ?? '').trim();
};

const getAttributeType = (attribute: RuntimeAttributeLike | null | undefined): string => {
  return String(attribute?.attr_type ?? attribute?.type ?? '').trim().toLowerCase();
};

const getAttributeFormula = (attribute: RuntimeAttributeLike | null | undefined): string => {
  const formula = attribute?.attr_func ?? attribute?.func ?? '';
  return typeof formula === 'string' ? formula.trim() : '';
};

const getAttributeMeta = (attribute: RuntimeAttributeLike | null | undefined): SystemAttribute['attr_meta'] => {
  return attribute?.attr_meta ?? attribute?.meta ?? {};
};

const resolveAttribute = (attributes: SystemAttribute[], idOrBid?: string): RuntimeAttributeLike | null => {
  if (!idOrBid) {
    return null;
  }

  return (attributes.find((attr) => {
    const normalized = attr as RuntimeAttributeLike;
    const byBid = getAttributeBid(normalized) === idOrBid;
    const byId = String(normalized.id ?? '') === String(idOrBid);
    return byBid || byId;
  }) as RuntimeAttributeLike | undefined) || null;
};

const getLabelFromAttribute = (attribute: RuntimeAttributeLike | null, mode?: string): string => {
  if (!attribute) {
    return '';
  }

  if (mode === 'abbr') {
    return getAttributeAbbr(attribute);
  }

  if (mode === 'name' || !mode || mode === 'text') {
    return getAttributeName(attribute);
  }

  return '';
};

const hasLabelContent = (attribute: RuntimeAttributeLike | null, mode?: string): boolean => {
  if (mode === 'icon') {
    return true;
  }

  return getLabelFromAttribute(attribute, mode).length > 0;
};

const renderLabelContent = (
  attribute: RuntimeAttributeLike | null,
  mode?: string,
  iconType?: string,
  iconSize = 16
): React.ReactNode => {
  if (mode === 'icon') {
    const IconComponent = ICON_COMPONENTS[String(iconType || '').trim().toLowerCase()] || Star;
    return <IconComponent size={iconSize} aria-hidden="true" />;
  }

  return getLabelFromAttribute(attribute, mode);
};

const validBidList = (attributes: SystemAttribute[], bids?: string[]) => {
  if (!Array.isArray(bids)) {
    return [] as string[];
  }

  return bids.filter((bid) => !!resolveAttribute(attributes, bid));
};

const boolBidList = (attributes: SystemAttribute[], bids?: string[]) => {
  return validBidList(attributes, bids).filter((bid) => {
    const attribute = resolveAttribute(attributes, bid);
    return getAttributeType(attribute) === 'bool';
  });
};

const resolveListTitle = (attributes: SystemAttribute[], rawId?: string): string => {
  const attribute = resolveAttribute(attributes, rawId);
  if (!attribute || getAttributeType(attribute) !== 'list') {
    return 'List Attribute';
  }

  return getAttributeName(attribute);
};

export const CardLayoutRenderer: React.FC<RendererProps> = ({
  systemTheme,
  backgroundUrl,
  cardLayout,
  attributes,
  unitItem,
  onUpdateMetadata,
}) => {
  const [draftValues, setDraftValues] = useState<Record<string, string>>({});
  const [rollableEditMode, setRollableEditMode] = useState<Record<string, boolean>>({});
  const [fieldContextMenu, setFieldContextMenu] = useState<FieldContextMenuState | null>(null);
  const [inlineNotationContextMenu, setInlineNotationContextMenu] = useState<InlineNotationContextMenuState | null>(null);
  const longPressTimersRef = useRef<Record<string, number>>({});
  const suppressNextClickRef = useRef<Record<string, boolean>>({});
  const LONG_PRESS_MS = 500;
  const { rows } = useMemo(() => deserializeCardLayout(cardLayout), [cardLayout]);
  const unitName = useMemo(() => {
    const metadataName = unitItem.metadata?.[UnitConstants.UNIT_NAME];
    if (typeof metadataName === 'string' && metadataName.trim()) {
      return metadataName;
    }

    const textName = (unitItem as Item & { text?: { plainText?: string } }).text?.plainText;
    if (typeof textName === 'string' && textName.trim()) {
      return textName;
    }

    if (typeof unitItem.name === 'string' && unitItem.name.trim()) {
      return unitItem.name;
    }

    return 'Unknown';
  }, [unitItem]);
  const [unitNameDraft, setUnitNameDraft] = useState(unitName);

  useEffect(() => {
    setUnitNameDraft(unitName);
  }, [unitName]);

  const saveUnitName = async () => {
    const trimmed = unitNameDraft.trim();
    const fallback = unitName.trim() || 'Unknown';
    const nextName = trimmed || fallback;

    setUnitNameDraft(nextName);

    if (nextName === unitName) {
      return;
    }

    await onUpdateMetadata({
      [UnitConstants.UNIT_NAME]: nextName,
    });
  };

  const getMetadataKeyForBid = (bid: string): string => `${OwlbearIds.EXTENSIONID}/${bid}`;

  const getMetadataStringValue = (bid: string): string => {
    const raw = unitItem.metadata?.[getMetadataKeyForBid(bid)];

    if (raw === undefined || raw === null) {
      return '';
    }

    if (typeof raw === 'string') {
      return raw;
    }

    if (typeof raw === 'number' || typeof raw === 'boolean') {
      return String(raw);
    }

    return '';
  };

  const getMetadataBoolValue = (bid: string): boolean => {
    const raw = unitItem.metadata?.[getMetadataKeyForBid(bid)];

    if (typeof raw === 'boolean') {
      return raw;
    }

    if (typeof raw === 'number') {
      return raw !== 0;
    }

    if (typeof raw === 'string') {
      const lowered = raw.trim().toLowerCase();
      return lowered === 'true' || lowered === '1' || lowered === 'yes' || lowered === 'on';
    }

    return false;
  };

  const getDraftOrValue = (draftKey: string, bid: string): string => {
    return draftValues[draftKey] ?? getMetadataStringValue(bid);
  };

  const hasAttrFormula = (attribute: RuntimeAttributeLike | null): boolean => {
    return getAttributeFormula(attribute).length > 0;
  };

  const { bidValueMap: bidNumericValueMap, nameValueMap: nameNumericValueMap } = useMemo(() => {
    return buildCompleteValueMaps(
      attributes,
      (bid: string) => getMetadataStringValue(bid).trim(),
      getAttributeBid,
      getAttributeType,
      getAttributeFormula,
      getAttributeName,
      getAttributeAbbr
    );
  }, [attributes, unitItem.metadata]);

  const buildResolvedNotation = (attribute: RuntimeAttributeLike | null): string | null => {
    const formula = getAttributeFormula(attribute);
    if (!formula) {
      return null;
    }

    const conversion = toResolvedDiceNotation(formula, {
      bidValueMap: bidNumericValueMap,
      nameValueMap: nameNumericValueMap,
      onMissingBid: 'error',
    });

    if (!conversion.valid || !conversion.notation) {
      LOGGER.warn(`[FORGE] Could not convert attr_func for ${getAttributeBid(attribute) || 'unknown'}: ${conversion.error || 'Unknown conversion error'}`);
      return null;
    }

    return conversion.notation;
  };

  const sendNotationRoll = async (notation: string, actionName: string) => {
    try {
      const metadata = DATA_STORED_IN_ROOM
        ? await OBR.room.getMetadata()
        : await OBR.scene.getMetadata();
      const players = await OBR.party.getPlayers();
      const owner = players.find((player) => player.id === unitItem.createdUserId);
      const fallbackSenderId = await OBR.player.getId();
      const fallbackSenderColor = await OBR.player.getColor();
      await sendCentralDiceRoll({
        notation,
        actionName,
        senderName: unitName,
        senderId: unitItem.createdUserId || fallbackSenderId || unitItem.id,
        senderColor: owner?.color || fallbackSenderColor || '#ffffff',
      }, metadata);
    } catch (error) {
      LOGGER.error('Failed to send dice roll from CardLayoutRenderer', notation, error);
      LOGGER.log(notation);
    }
  };

  const handleNotationClick = async (attribute: RuntimeAttributeLike | null) => {
    if (!attribute) {
      return;
    }

    const notation = buildResolvedNotation(attribute);
    if (!notation) {
      return;
    }

    await sendNotationRoll(notation, getAttributeName(attribute) || getAttributeBid(attribute) || 'Roll');
  };

  const getMetadataRawValue = (bid: string): unknown => {
    return unitItem.metadata?.[getMetadataKeyForBid(bid)];
  };

  const readResourceValue = (bid: string, attribute: RuntimeAttributeLike | null) => {
    const raw = getMetadataRawValue(bid);
    const value = raw && typeof raw === 'object' && !Array.isArray(raw)
      ? raw as Record<string, unknown>
      : null;
    const resourceMeta = getAttributeMeta(attribute)?.resource;
    return {
      current: value ? Number(value.current ?? resourceMeta?.defaultCurrent ?? 0) : Number(resourceMeta?.defaultCurrent ?? 0),
      max: value ? Number(value.max ?? resourceMeta?.defaultMax ?? 0) : Number(resourceMeta?.defaultMax ?? 0),
    };
  };

  const updateAttributeRawValue = async (bid: string, value: unknown) => {
    await onUpdateMetadata({
      [getMetadataKeyForBid(bid)]: value,
    });
  };

  const resolveDerivedDisplayValue = (attribute: RuntimeAttributeLike | null): string => {
    const formulaFromMeta = getAttributeMeta(attribute)?.derived?.formula;
    const formula = typeof formulaFromMeta === 'string' && formulaFromMeta.trim().length > 0
      ? formulaFromMeta.trim()
      : getAttributeFormula(attribute);

    if (!formula) {
      return '-';
    }

    const conversion = toResolvedDiceNotation(formula, {
      bidValueMap: bidNumericValueMap,
      nameValueMap: nameNumericValueMap,
      onMissingBid: 'error',
    });

    if (!conversion.valid || !conversion.notation) {
      return '-';
    }

    const notation = conversion.notation.trim();
    const parsedNumeric = Number(notation);
    if (!Number.isFinite(parsedNumeric)) {
      return notation || '-';
    }

    const precisionRaw = Number(getAttributeMeta(attribute)?.derived?.precision);
    const precision = Number.isFinite(precisionRaw) ? Math.max(0, Math.min(Math.trunc(precisionRaw), 8)) : 0;
    const displayMode = getAttributeMeta(attribute)?.derived?.displayMode;
    const numericDisplay = precision > 0 ? parsedNumeric.toFixed(precision) : String(parsedNumeric);

    if (displayMode === 'percent') {
      return `${numericDisplay}%`;
    }

    return numericDisplay;
  };

  const ADVANTAGE_DICE_PATTERN = /(\d+)d(\d+)([kd][hl]\d+|!)?/ig;

  const resolveAdvantageDisadvantageNotation = (
    notation: string,
    mode: 'advantage' | 'disadvantage'
  ): string | null => {
    const matches = Array.from(notation.matchAll(ADVANTAGE_DICE_PATTERN));
    if (matches.length !== 1) {
      return null;
    }

    const match = matches[0];
    const fullMatch = match[0] || '';
    const rawCount = match[1] || '';
    const sides = match[2] || '';
    const modifier = match[3] || '';
    const matchIndex = match.index;

    if (!fullMatch || !rawCount || !sides || typeof matchIndex !== 'number') {
      return null;
    }

    const diceCount = Number(rawCount);
    if (!Number.isFinite(diceCount) || diceCount !== 1 || modifier) {
      return null;
    }

    const replacement = `2d${sides}${mode === 'advantage' ? 'kh1' : 'kl1'}`;
    return `${notation.slice(0, matchIndex)}${replacement}${notation.slice(matchIndex + fullMatch.length)}`;
  };

  useEffect(() => {
    return () => {
      Object.values(longPressTimersRef.current).forEach((timerId) => {
        window.clearTimeout(timerId);
      });
    };
  }, []);

  const isRollableEditing = (draftKey: string): boolean => {
    return !!rollableEditMode[draftKey];
  };

  const openFieldContextMenu = (
    draftKey: string,
    attribute: SystemAttribute | null,
    input: HTMLInputElement | null,
    isRollable: boolean
  ) => {
    if (!attribute) {
      return;
    }

    setFieldContextMenu({
      draftKey,
      attribute,
      input,
      isRollable,
    });
  };

  const closeFieldContextMenu = () => {
    setFieldContextMenu(null);
  };

  const openInlineNotationContextMenu = (state: InlineNotationContextMenuState) => {
    setInlineNotationContextMenu(state);
  };

  const closeInlineNotationContextMenu = () => {
    setInlineNotationContextMenu(null);
  };

  useEffect(() => {
    if (!fieldContextMenu && !inlineNotationContextMenu) {
      return;
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFieldContextMenu(null);
        setInlineNotationContextMenu(null);
      }
    };

    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [fieldContextMenu, inlineNotationContextMenu]);

  const handleInlineNotationClickWithMode = async (
    mode: 'normal' | 'advantage' | 'disadvantage'
  ) => {
    if (!inlineNotationContextMenu) {
      return;
    }

    const notation = mode === 'normal'
      ? inlineNotationContextMenu.notation
      : resolveAdvantageDisadvantageNotation(inlineNotationContextMenu.notation, mode);

    if (!notation) {
      return;
    }

    const modeSuffix = mode === 'normal' ? '' : mode === 'advantage' ? ' (Advantage)' : ' (Disadvantage)';
    await sendNotationRoll(notation, `${inlineNotationContextMenu.actionName}${modeSuffix}`);
  };

  const enableRollableEditMode = (draftKey: string, input?: HTMLInputElement | null) => {
    setRollableEditMode((prev) => ({
      ...prev,
      [draftKey]: true,
    }));

    window.setTimeout(() => {
      input?.focus();
      input?.select();
    }, 0);
  };

  const disableRollableEditMode = (draftKey: string) => {
    setRollableEditMode((prev) => {
      const { [draftKey]: _removed, ...rest } = prev;
      return rest;
    });
  };

  const startLongPressEditMode = (draftKey: string, input: HTMLInputElement) => {
    const existingTimer = longPressTimersRef.current[draftKey];
    if (existingTimer) {
      window.clearTimeout(existingTimer);
    }

    longPressTimersRef.current[draftKey] = window.setTimeout(() => {
      suppressNextClickRef.current[draftKey] = true;
      enableRollableEditMode(draftKey, input);
      delete longPressTimersRef.current[draftKey];
    }, LONG_PRESS_MS);
  };

  const cancelLongPressEditMode = (draftKey: string) => {
    const existingTimer = longPressTimersRef.current[draftKey];
    if (!existingTimer) {
      return;
    }

    window.clearTimeout(existingTimer);
    delete longPressTimersRef.current[draftKey];
  };

  const shouldSuppressRollClick = (draftKey: string): boolean => {
    if (!suppressNextClickRef.current[draftKey]) {
      return false;
    }

    delete suppressNextClickRef.current[draftKey];
    return true;
  };

  const updateAttributeValue = async (bid: string, value: string) => {
    await onUpdateMetadata({
      [getMetadataKeyForBid(bid)]: value,
    });
  };

  const updateAttributeBoolValue = async (bid: string, value: boolean) => {
    await onUpdateMetadata({
      [getMetadataKeyForBid(bid)]: value,
    });
  };

  const readActionList = (bid: string): ActionListEntry[] => {
    const raw = unitItem.metadata?.[getMetadataKeyForBid(bid)];
    if (!Array.isArray(raw)) {
      return [];
    }

    return raw.map((entry) => {
      const value = (entry && typeof entry === 'object') ? entry as Record<string, unknown> : {};
      return {
        id: typeof value.id === 'string' && value.id ? value.id : crypto.randomUUID(),
        name: typeof value.name === 'string' ? value.name : '',
        description: typeof value.description === 'string' ? value.description : '',
      };
    });
  };

  const readItemList = (bid: string): ItemListEntry[] => {
    const raw = unitItem.metadata?.[getMetadataKeyForBid(bid)];
    if (!Array.isArray(raw)) {
      return [];
    }

    return raw.map((entry) => {
      const value = (entry && typeof entry === 'object') ? entry as Record<string, unknown> : {};
      return {
        id: typeof value.id === 'string' && value.id ? value.id : crypto.randomUUID(),
        name: typeof value.name === 'string' ? value.name : '',
        description: typeof value.description === 'string' ? value.description : '',
        inUse: !!value.inUse,
      };
    });
  };

  const emitListDebugLog = (event: string, payload: Record<string, unknown>) => {
    LOGGER.log(event, payload);
  };

  const autoSizeTextarea = (element: HTMLTextAreaElement | null) => {
    if (!element) {
      return;
    }

    element.style.height = '0px';
    element.style.height = `${Math.max(element.scrollHeight, 44)}px`;
  };

  const parseInlineNotationTokens = (text: string): InlineNotationToken[] => {
    const tokens: InlineNotationToken[] = [];
    const matches = text.matchAll(/\[([^\[\]]+)\]/g);

    for (const match of matches) {
      const raw = match[0];
      const formula = (match[1] || '').trim();
      if (!formula) {
        continue;
      }

      const conversion = toResolvedDiceNotation(formula, {
        bidValueMap: bidNumericValueMap,
        nameValueMap: nameNumericValueMap,
        onMissingBid: 'error',
      });

      if (!conversion.valid || !conversion.notation) {
        continue;
      }

      tokens.push({ raw, notation: conversion.notation });
    }

    return tokens;
  };

  const updateListValue = async (
    bid: string,
    value: ActionListEntry[] | ItemListEntry[],
    context: {
      listType: 'action' | 'item';
      reason: 'add' | 'delete' | 'blur-save' | 'toggle-save';
      entryId?: string;
      field?: 'name' | 'description' | 'inUse';
    }
  ) => {
    emitListDebugLog('List metadata update', {
      listType: context.listType,
      bid,
      reason: context.reason,
      entryId: context.entryId,
      field: context.field,
      entryCount: value.length,
      timestamp: Date.now(),
    });

    await onUpdateMetadata({
      [getMetadataKeyForBid(bid)]: value,
    });
  };

  const renderDivider = (design?: string) => {
    if (design === 'dash' || design === 'dashed') {
      return <DashDivider $theme={systemTheme} />;
    }

    if (design === 'shadow') {
      return <ShadowDivider $theme={systemTheme} />;
    }

    if (design === 'ridge') {
      return <RidgeDivider $theme={systemTheme} />;
    }

    if (design === 'zigzag') {
      return <ZigZagDivider $theme={systemTheme} />;
    }

    if (design === 'pulse') {
      return <PulseDivider $theme={systemTheme} />;
    }

    return <DefaultDivider $theme={systemTheme} />;
  };

  const renderComponent = (component: CardLayoutComponent) => {
    const rawType = component.type as string;
    const type = (() => {
      if (rawType === 'derived-value' || rawType === 'enum-value' || rawType === 'resource') {
        return 'text-value';
      }

      if (rawType === 'column-derived') {
        return 'column-value';
      }

      return rawType;
    })();
    const style = component.styles || {};
    const attr = resolveAttribute(attributes, style.attributeId);
    const textAlign = resolveTextAlign(style.textAlign ?? style.align, 'center');
    const stretch = style.stretch === true;

    if (type === 'line-break') {
      return (
        <BaseCell key={component.id} $theme={systemTheme} $full>
          {renderDivider(style.styleDesign)}
        </BaseCell>
      );
    }

    if (type === 'line-spacer') {
      return <Spacer key={component.id} $full={component.fullsize} />;
    }

    if (type === 'image') {
      const imageUrl = typeof style.imageUrl === 'string' ? style.imageUrl.trim() : '';
      const resolvedCols = clampInt(style.imageCols, 1, 2, component.fullsize ? 2 : 1);
      const resolvedRows = clampInt(style.imageRows, 1, 6, 1);
      const isFullWidth = resolvedCols === 2;
      const heightPx = IMAGE_ROW_UNIT_HEIGHT * resolvedRows;

      return (
        <BaseCell key={component.id} $theme={systemTheme} $full={isFullWidth}>
          <ImageBlock $theme={systemTheme} $heightPx={heightPx}>
            {imageUrl ? (
              <ImageElement src={imageUrl} alt="Card component" loading="lazy" />
            ) : (
              <ImagePlaceholder $theme={systemTheme}>No image selected</ImagePlaceholder>
            )}
          </ImageBlock>
        </BaseCell>
      );
    }

    if (type === 'text') {
      const fontSize = sizeMapTitle[(style.fontSize as keyof typeof sizeMapTitle) || 'md'];
      const hasTitle = hasLabelContent(attr, style.labelMode);
      const title = hasTitle ? renderLabelContent(attr, style.labelMode, style.labelIcon, 18) : 'Title Header';
      const contextDraftKey = `text:${component.id}:${getAttributeBid(attr) || 'none'}`;

      return (
        <BaseCell
          key={component.id}
          $theme={systemTheme}
          $full={component.fullsize}
          onContextMenu={attr ? (event) => {
            event.preventDefault();
            openFieldContextMenu(contextDraftKey, attr, null, false);
          } : undefined}
        >
          <ValueText
            $theme={systemTheme}
            $fontSize={fontSize}
            $weight={700}
            $stretch={stretch}
            $align={textAlign}
          >
            {title}
          </ValueText>
        </BaseCell>
      );
    }

    if (type === 'text-value') {
      const fontSize = sizeMapTextValueRow[(style.fontSize as keyof typeof sizeMapTextValueRow) || 'md'];
      const hasLabel = hasLabelContent(attr, style.labelMode);
      const labelContent = renderLabelContent(attr, style.labelMode, style.labelIcon, 18);
      const labelPosition = style.labelPosition === 'right' ? 'right' : 'left';
      const textValueAlign = resolveTextAlign(style.textAlign ?? style.align, 'center');
      const fontWeight = style.fontWeight === 'bold' ? 700 : 400;
      const fontStyle = style.fontStyle === 'italic' ? 'italic' : 'normal';
      const bid = getAttributeBid(attr);
      const attrType = getAttributeType(attr);
      const isRollableInput = hasAttrFormula(attr);
      const draftKey = `text-value:${component.id}:${bid || 'none'}`;
      const isEditingRollableInput = isRollableInput && isRollableEditing(draftKey);
      let inputElement: React.ReactNode;
      if (attrType === 'derived') {
        const formula = getAttributeMeta(attr)?.derived?.formula || getAttributeFormula(attr) || 'Derived formula';
        inputElement = (
          <DerivedReadOnlyValue
            $theme={systemTheme}
            $fontSize={fontSize}
            $align={textValueAlign}
            $weight={fontWeight}
            $fontStyle={fontStyle}
            $stretch={stretch}
            title={`Formula: ${formula}`}
            onContextMenu={attr ? (event) => {
              event.preventDefault();
              openFieldContextMenu(draftKey, attr, null, false);
            } : undefined}
          >
            {resolveDerivedDisplayValue(attr)}
          </DerivedReadOnlyValue>
        );
      } else if (attrType === 'enum') {
        const enumOptions = Array.isArray(getAttributeMeta(attr)?.enum?.options)
          ? (getAttributeMeta(attr)?.enum?.options || []).map((option) => String(option || '').trim()).filter((option) => option.length > 0)
          : [];
        const selectedValue = enumOptions.includes(bid ? getMetadataStringValue(bid).trim() : '')
          ? getMetadataStringValue(bid).trim()
          : (enumOptions[0] || '');
        inputElement = (
          <ValueSelect
            $theme={systemTheme}
            $fontSize={fontSize}
            $align={textValueAlign}
            $weight={fontWeight}
            $fontStyle={fontStyle}
            $stretch={stretch}
            value={selectedValue}
            disabled={!bid}
            onContextMenu={attr ? (event) => {
              event.preventDefault();
              openFieldContextMenu(draftKey, attr, null, false);
            } : undefined}
            onChange={bid ? async (event) => {
              await updateAttributeRawValue(bid, event.target.value);
            } : undefined}
          >
            {enumOptions.length === 0 ? <option value="">No options</option> : enumOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </ValueSelect>
        );
      } else if (attrType === 'resource') {
        const resourceMeta = getAttributeMeta(attr)?.resource;
        const showPips = !!resourceMeta?.showPips;
        const resourceValue = bid ? readResourceValue(bid, attr) : { current: 0, max: 0 };
        const pipCapSource = Number(resourceMeta?.pipCap ?? resourceValue.max ?? 0);
        const pipCap = Number.isFinite(pipCapSource) ? Math.max(0, Math.min(Math.round(pipCapSource), 15)) : 0;

        if (showPips && pipCap > 0) {
          inputElement = (
            <ResourcePipWrap
              onContextMenu={attr ? (event) => {
                event.preventDefault();
                openFieldContextMenu(draftKey, attr, null, false);
              } : undefined}
            >
              {Array.from({ length: pipCap }).map((_, index) => (
                <ResourcePip
                  key={`text-resource-pip-${index}`}
                  $theme={systemTheme}
                  $filled={index < Math.max(0, Math.min(resourceValue.current, pipCap))}
                  type="button"
                  disabled={!bid}
                  onClick={!bid ? undefined : async () => {
                    const currentClamped = Math.max(0, Math.min(resourceValue.current, pipCap));
                    const nextCurrent = (index + 1 === currentClamped) ? index : index + 1;
                    await updateAttributeRawValue(bid, {
                      current: nextCurrent,
                      max: resourceValue.max,
                    });
                  }}
                />
              ))}
            </ResourcePipWrap>
          );
        } else if (showPips) {
          inputElement = (
            <ReadOnlyValue
              $theme={systemTheme}
              $fontSize={fontSize}
              $align={textValueAlign}
              $weight={fontWeight}
              $fontStyle={fontStyle}
              $stretch={stretch}
            >
              -
            </ReadOnlyValue>
          );
        } else {
          const currentDraftKey = `${draftKey}:current`;
          const maxDraftKey = `${draftKey}:max`;
          inputElement = (
            <ResourceValueRow>
              <TextValueInput
                $theme={systemTheme}
                $fontSize={fontSize}
                $align="center"
                $weight={fontWeight}
                $fontStyle={fontStyle}
                $stretch={stretch}
                type="text"
                value={draftValues[currentDraftKey] ?? String(resourceValue.current)}
                onChange={(event) => {
                  const nextValue = event.target.value;
                  setDraftValues((prev) => ({ ...prev, [currentDraftKey]: nextValue }));
                }}
                onBlur={async (event) => {
                  if (!bid) return;
                  const nextCurrent = Number(event.target.value);
                  const resolvedCurrent = Number.isFinite(nextCurrent) ? nextCurrent : resourceValue.current;
                  await updateAttributeRawValue(bid, { current: resolvedCurrent, max: resourceValue.max });
                  setDraftValues((prev) => {
                    const { [currentDraftKey]: _removed, ...rest } = prev;
                    return rest;
                  });
                }}
                placeholder="0"
              />
              <ResourceDivider $theme={systemTheme}>/</ResourceDivider>
              <TextValueInput
                $theme={systemTheme}
                $fontSize={fontSize}
                $align="center"
                $weight={fontWeight}
                $fontStyle={fontStyle}
                $stretch={stretch}
                type="text"
                value={draftValues[maxDraftKey] ?? String(resourceValue.max)}
                onChange={(event) => {
                  const nextValue = event.target.value;
                  setDraftValues((prev) => ({ ...prev, [maxDraftKey]: nextValue }));
                }}
                onBlur={async (event) => {
                  if (!bid) return;
                  const nextMax = Number(event.target.value);
                  const resolvedMax = Number.isFinite(nextMax) ? nextMax : resourceValue.max;
                  await updateAttributeRawValue(bid, { current: resourceValue.current, max: resolvedMax });
                  setDraftValues((prev) => {
                    const { [maxDraftKey]: _removed, ...rest } = prev;
                    return rest;
                  });
                }}
                placeholder="0"
              />
            </ResourceValueRow>
          );
        }
      } else {
        inputElement = (
          <TextValueInput
            $theme={systemTheme}
            $fontSize={fontSize}
            $align={textValueAlign}
            $weight={fontWeight}
            $fontStyle={fontStyle}
            $stretch={stretch}
            $isRollable={isRollableInput}
            type="text"
            readOnly={isRollableInput && !isEditingRollableInput}
            value={bid ? getDraftOrValue(draftKey, bid) : ''}
            onChange={isRollableInput && !isEditingRollableInput ? undefined : (event) => {
              if (!bid) return;
              const nextValue = event.target.value;
              setDraftValues((prev) => ({
                ...prev,
                [draftKey]: nextValue,
              }));
            }}
            onBlur={isRollableInput && !isEditingRollableInput ? undefined : async (event) => {
              if (!bid) return;
              const nextValue = event.target.value;
              await updateAttributeValue(bid, nextValue);
              setDraftValues((prev) => {
                const { [draftKey]: _removed, ...rest } = prev;
                return rest;
              });
              if (isRollableInput) {
                disableRollableEditMode(draftKey);
              }
            }}
            onClick={isRollableInput ? () => {
              if (isEditingRollableInput) {
                return;
              }

              if (shouldSuppressRollClick(draftKey)) {
                return;
              }

              void handleNotationClick(attr);
            } : undefined}
            onContextMenu={attr ? (event) => {
              event.preventDefault();
              openFieldContextMenu(draftKey, attr, event.currentTarget, isRollableInput);
            } : undefined}
            onTouchStart={isRollableInput ? (event) => {
              if (isEditingRollableInput) {
                return;
              }
              startLongPressEditMode(draftKey, event.currentTarget);
            } : undefined}
            onTouchEnd={isRollableInput ? () => {
              cancelLongPressEditMode(draftKey);
            } : undefined}
            onTouchCancel={isRollableInput ? () => {
              cancelLongPressEditMode(draftKey);
            } : undefined}
            onKeyDown={(event) => {
              if (isRollableInput && !isEditingRollableInput && (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault();
                void handleNotationClick(attr);
                return;
              }

              if ((isEditingRollableInput || !isRollableInput) && event.key === 'Enter') {
                event.preventDefault();
                event.currentTarget.blur();
              }
            }}
            placeholder="..."
          />
        );
      }
      const labelElement = hasLabel ? (
        <TextValueLabel
          $theme={systemTheme}
          $fontSize={fontSize}
          $stretch={stretch}
          $weight={fontWeight}
          $fontStyle={fontStyle}
        >
          {labelContent}
        </TextValueLabel>
      ) : null;

      return (
        <TextValueSlot key={component.id} $full={component.fullsize}>
          <TextValueRow>
            {labelPosition === 'left' ? labelElement : null}
            {inputElement}
            {labelPosition === 'right' ? labelElement : null}
          </TextValueRow>
        </TextValueSlot>
      );
    }

    if (type === 'text-checkbox') {
      const fontSize = sizeMapTextValue[(style.fontSize as keyof typeof sizeMapTextValue) || 'md'];
      const maxCount = component.fullsize ? 6 : 3;
      const count = Math.max(1, Math.min(maxCount, Number(style.checkboxCount || 1)));
      const normalizedBoolBids = [...boolBidList(attributes, style.bidList)].slice(0, count);
      while (normalizedBoolBids.length < count) {
        normalizedBoolBids.push('');
      }
      const labelAttribute = resolveAttribute(attributes, normalizedBoolBids[0] || style.attributeId);
      const hasLabel = hasLabelContent(labelAttribute, style.labelMode);
      const labelContent = renderLabelContent(labelAttribute, style.labelMode, style.labelIcon, 16);
      const isSlider = style.inputType === 'slider';
      const labelPosition = style.labelPosition === 'right' ? 'right' : 'left';
      const fontWeight = style.fontWeight === 'bold' ? 700 : 400;
      const fontStyle = style.fontStyle === 'italic' ? 'italic' : 'normal';
      const labelElement = hasLabel ? (
        <TextCheckboxLabel
          $theme={systemTheme}
          $fontSize={fontSize}
          $stretch={stretch}
          $weight={fontWeight}
          $fontStyle={fontStyle}
        >
          {labelContent}
        </TextCheckboxLabel>
      ) : null;

      return (
        <BaseCell key={component.id} $theme={systemTheme} $full={component.fullsize}>
          <TextCheckboxRow>
            {labelPosition === 'left' ? labelElement : null}
            <TextCheckboxInputs $fullWidth={!labelElement}>
            {Array.from({ length: count }).map((_, index) => {
              const bid = normalizedBoolBids[index] || '';
              const isActive = bid ? getMetadataBoolValue(bid) : false;
              const checkboxAttribute = bid ? resolveAttribute(attributes, bid) : null;
              const contextDraftKey = `text-checkbox:${component.id}:${bid || `index-${index}`}`;

              return isSlider
                ? (
                  <StyledToggle
                    key={`slider-${index}`}
                    type="button"
                    $theme={systemTheme}
                    $active={isActive}
                    disabled={!bid}
                    onClick={!bid ? undefined : () => {
                      void updateAttributeBoolValue(bid, !isActive);
                    }}
                    onContextMenu={!checkboxAttribute ? undefined : (event) => {
                      event.preventDefault();
                      openFieldContextMenu(contextDraftKey, checkboxAttribute, null, false);
                    }}
                  >
                    <StyledToggleBar $theme={systemTheme} $active={isActive} />
                  </StyledToggle>
                )
                : (
                  <CheckboxInput
                    key={`checkbox-${index}`}
                    $theme={systemTheme}
                    type="checkbox"
                    disabled={!bid}
                    checked={isActive}
                    onChange={!bid ? undefined : (event) => {
                      void updateAttributeBoolValue(bid, event.target.checked);
                    }}
                    onContextMenu={!checkboxAttribute ? undefined : (event) => {
                      event.preventDefault();
                      openFieldContextMenu(contextDraftKey, checkboxAttribute, null, false);
                    }}
                  />
                );
            })}
            </TextCheckboxInputs>
            {labelPosition === 'right' ? labelElement : null}
          </TextCheckboxRow>
        </BaseCell>
      );
    }

    if (type === 'column-text') {
      const fontSize = sizeMapColumn[(style.fontSize as keyof typeof sizeMapColumn) || 'md'];
      const bids = validBidList(attributes, style.bidList);
      const columnWeight = style.fontWeight === 'bold' ? 700 : 400;
      const columnFontStyle = style.fontStyle === 'italic' ? 'italic' : 'normal';
      if (bids.length === 0) {
        return null;
      }

      return (
        <BaseCell key={component.id} $theme={systemTheme} $full={component.fullsize}>
          <HorizontalGroup>
            {bids.map((bid) => {
              const columnAttr = resolveAttribute(attributes, bid);
              const labelMode = style.labelMode || 'name';
              const hasColumnLabel = hasLabelContent(columnAttr, labelMode);
              const columnLabel = renderLabelContent(columnAttr, labelMode, style.labelIcon, 16);
              if (!hasColumnLabel) {
                return null;
              }
              return (
                <ColumnTrack key={bid}>
                  <ColumnLabel
                    $theme={systemTheme}
                    $fontSize={fontSize}
                    $stretch={stretch}
                    $align="center"
                    $weight={columnWeight}
                    $fontStyle={columnFontStyle}
                    onContextMenu={columnAttr ? (event) => {
                      event.preventDefault();
                      openFieldContextMenu(`column-text:${component.id}:${bid}`, columnAttr, null, false);
                    } : undefined}
                  >
                    {columnLabel}
                  </ColumnLabel>
                </ColumnTrack>
              );
            })}
          </HorizontalGroup>
        </BaseCell>
      );
    }

    if (type === 'column-value') {
      const fontSize = sizeMapColumn[(style.fontSize as keyof typeof sizeMapColumn) || 'md'];
      const bids = validBidList(attributes, style.bidList);
      const fontWeight = style.fontWeight === 'bold' ? 700 : 400;
      const fontStyle = style.fontStyle === 'italic' ? 'italic' : 'normal';
      if (bids.length === 0) {
        return null;
      }

      return (
        <BaseCell key={component.id} $theme={systemTheme} $full={component.fullsize}>
          <HorizontalGroup>
            {bids.map((bid) => {
              const columnAttr = resolveAttribute(attributes, bid);
              const attrType = getAttributeType(columnAttr);
              const isRollableInput = hasAttrFormula(columnAttr);
              const draftKey = `column-value:${component.id}:${bid}`;
              const isEditingRollableInput = isRollableInput && isRollableEditing(draftKey);
              let content: React.ReactNode;

              if (attrType === 'derived') {
                const formula = getAttributeMeta(columnAttr)?.derived?.formula || getAttributeFormula(columnAttr) || 'Derived formula';
                content = (
                  <DerivedReadOnlyValue
                    $theme={systemTheme}
                    $fontSize={fontSize}
                    $align="center"
                    $weight={fontWeight}
                    $fontStyle={fontStyle}
                    $stretch={stretch}
                    title={`Formula: ${formula}`}
                    onContextMenu={columnAttr ? (event) => {
                      event.preventDefault();
                      openFieldContextMenu(draftKey, columnAttr, null, false);
                    } : undefined}
                  >
                    {resolveDerivedDisplayValue(columnAttr)}
                  </DerivedReadOnlyValue>
                );
              } else if (attrType === 'enum') {
                const enumOptions = Array.isArray(getAttributeMeta(columnAttr)?.enum?.options)
                  ? (getAttributeMeta(columnAttr)?.enum?.options || []).map((option) => String(option || '').trim()).filter((option) => option.length > 0)
                  : [];
                const currentValue = getMetadataStringValue(bid).trim();
                const selectedValue = enumOptions.includes(currentValue) ? currentValue : (enumOptions[0] || '');
                content = (
                  <ValueSelect
                    $theme={systemTheme}
                    $fontSize={fontSize}
                    $align="center"
                    $weight={fontWeight}
                    $fontStyle={fontStyle}
                    $stretch={stretch}
                    value={selectedValue}
                    onContextMenu={columnAttr ? (event) => {
                      event.preventDefault();
                      openFieldContextMenu(draftKey, columnAttr, null, false);
                    } : undefined}
                    onChange={async (event) => {
                      await updateAttributeRawValue(bid, event.target.value);
                    }}
                  >
                    {enumOptions.length === 0 ? <option value="">No options</option> : enumOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </ValueSelect>
                );
              } else if (attrType === 'resource') {
                const resourceMeta = getAttributeMeta(columnAttr)?.resource;
                const showPips = !!resourceMeta?.showPips;
                const resourceValue = readResourceValue(bid, columnAttr);
                const pipCapSource = Number(resourceMeta?.pipCap ?? resourceValue.max ?? 0);
                const pipCap = Number.isFinite(pipCapSource) ? Math.max(0, Math.min(Math.round(pipCapSource), 15)) : 0;

                if (showPips && pipCap > 0) {
                  content = (
                    <ResourcePipWrap
                      onContextMenu={columnAttr ? (event) => {
                        event.preventDefault();
                        openFieldContextMenu(draftKey, columnAttr, null, false);
                      } : undefined}
                    >
                      {Array.from({ length: pipCap }).map((_, index) => (
                        <ResourcePip
                          key={`column-resource-pip-${bid}-${index}`}
                          $theme={systemTheme}
                          $filled={index < Math.max(0, Math.min(resourceValue.current, pipCap))}
                          type="button"
                          onClick={async () => {
                            const currentClamped = Math.max(0, Math.min(resourceValue.current, pipCap));
                            const nextCurrent = (index + 1 === currentClamped) ? index : index + 1;
                            await updateAttributeRawValue(bid, {
                              current: nextCurrent,
                              max: resourceValue.max,
                            });
                          }}
                        />
                      ))}
                    </ResourcePipWrap>
                  );
                } else if (showPips) {
                  content = (
                    <ReadOnlyValue
                      $theme={systemTheme}
                      $fontSize={fontSize}
                      $align="center"
                      $weight={fontWeight}
                      $fontStyle={fontStyle}
                      $stretch={stretch}
                    >
                      -
                    </ReadOnlyValue>
                  );
                } else {
                  const currentDraftKey = `${draftKey}:current`;
                  const maxDraftKey = `${draftKey}:max`;
                  content = (
                    <ResourceValueRow>
                      <DisabledInput
                        $theme={systemTheme}
                        $fontSize={fontSize}
                        $align="center"
                        value={draftValues[currentDraftKey] ?? String(resourceValue.current)}
                        onChange={(event) => {
                          const nextValue = event.target.value;
                          setDraftValues((prev) => ({ ...prev, [currentDraftKey]: nextValue }));
                        }}
                        onBlur={async (event) => {
                          const nextCurrent = Number(event.target.value);
                          const resolvedCurrent = Number.isFinite(nextCurrent) ? nextCurrent : resourceValue.current;
                          await updateAttributeRawValue(bid, { current: resolvedCurrent, max: resourceValue.max });
                          setDraftValues((prev) => {
                            const { [currentDraftKey]: _removed, ...rest } = prev;
                            return rest;
                          });
                        }}
                      />
                      <ResourceDivider $theme={systemTheme}>/</ResourceDivider>
                      <DisabledInput
                        $theme={systemTheme}
                        $fontSize={fontSize}
                        $align="center"
                        value={draftValues[maxDraftKey] ?? String(resourceValue.max)}
                        onChange={(event) => {
                          const nextValue = event.target.value;
                          setDraftValues((prev) => ({ ...prev, [maxDraftKey]: nextValue }));
                        }}
                        onBlur={async (event) => {
                          const nextMax = Number(event.target.value);
                          const resolvedMax = Number.isFinite(nextMax) ? nextMax : resourceValue.max;
                          await updateAttributeRawValue(bid, { current: resourceValue.current, max: resolvedMax });
                          setDraftValues((prev) => {
                            const { [maxDraftKey]: _removed, ...rest } = prev;
                            return rest;
                          });
                        }}
                      />
                    </ResourceValueRow>
                  );
                }
              } else {
                content = (
                  <DisabledInput
                    $theme={systemTheme}
                    $fontSize={fontSize}
                    $align="center"
                    $isRollable={isRollableInput}
                    readOnly={isRollableInput && !isEditingRollableInput}
                    value={getDraftOrValue(draftKey, bid)}
                    onChange={isRollableInput && !isEditingRollableInput ? undefined : (event) => {
                      const nextValue = event.target.value;
                      setDraftValues((prev) => ({
                        ...prev,
                        [draftKey]: nextValue,
                      }));
                    }}
                    onBlur={isRollableInput && !isEditingRollableInput ? undefined : async (event) => {
                      const nextValue = event.target.value;
                      await updateAttributeValue(bid, nextValue);
                      setDraftValues((prev) => {
                        const { [draftKey]: _removed, ...rest } = prev;
                        return rest;
                      });
                      if (isRollableInput) {
                        disableRollableEditMode(draftKey);
                      }
                    }}
                    onClick={isRollableInput ? () => {
                      if (isEditingRollableInput) {
                        return;
                      }

                      if (shouldSuppressRollClick(draftKey)) {
                        return;
                      }

                      void handleNotationClick(columnAttr);
                    } : undefined}
                    onContextMenu={columnAttr ? (event) => {
                      event.preventDefault();
                      openFieldContextMenu(draftKey, columnAttr, event.currentTarget, isRollableInput);
                    } : undefined}
                    onTouchStart={isRollableInput ? (event) => {
                      if (isEditingRollableInput) {
                        return;
                      }
                      startLongPressEditMode(draftKey, event.currentTarget);
                    } : undefined}
                    onTouchEnd={isRollableInput ? () => {
                      cancelLongPressEditMode(draftKey);
                    } : undefined}
                    onTouchCancel={isRollableInput ? () => {
                      cancelLongPressEditMode(draftKey);
                    } : undefined}
                    onKeyDown={(event) => {
                      if (isRollableInput && !isEditingRollableInput && (event.key === 'Enter' || event.key === ' ')) {
                        event.preventDefault();
                        void handleNotationClick(columnAttr);
                        return;
                      }

                      if ((isEditingRollableInput || !isRollableInput) && event.key === 'Enter') {
                        event.preventDefault();
                        event.currentTarget.blur();
                      }
                    }}
                    placeholder="..."
                  />
                );
              }
              return (
                <ColumnInputTrack key={bid}>
                  {content}
                </ColumnInputTrack>
              );
            })}
          </HorizontalGroup>
        </BaseCell>
      );
    }

    if (type === 'action-list') {
      const listAttr = resolveAttribute(attributes, style.attributeId || style.bidList?.[0]);
      const listBid = getAttributeBid(listAttr);
      const listTitle = resolveListTitle(attributes, style.attributeId || style.bidList?.[0]);
      const actionEntries = listBid ? readActionList(listBid) : [];

      return (
        <BaseCell key={component.id} $theme={systemTheme} $full={component.fullsize}>
          <ListBlock $theme={systemTheme}>
            <ListHeader $theme={systemTheme}>
              <ListTitle
                $theme={systemTheme}
                onContextMenu={listAttr ? (event) => {
                  event.preventDefault();
                  openFieldContextMenu(`action-list:${component.id}:${listBid || 'none'}`, listAttr, null, false);
                } : undefined}
              >
                {listTitle}
              </ListTitle>
              <HeaderIconButton
                type="button"
                $theme={systemTheme}
                aria-label="Add Action"
                onClick={async () => {
                  if (!listBid) return;
                  const nextEntries: ActionListEntry[] = [
                    ...actionEntries,
                    { id: crypto.randomUUID(), name: '', description: '' },
                  ];
                  await updateListValue(listBid, nextEntries, { listType: 'action', reason: 'add' });
                }}
              >
                <Plus size={14} />
              </HeaderIconButton>
            </ListHeader>

            {actionEntries.map((entry, index) => (
              <ListEntry key={entry.id || `${component.id}-action-${index}`}>
                <ActionNameRow>
                  <ActionNameInputWrap>
                    <ListNameInput
                      $theme={systemTheme}
                      type="text"
                      defaultValue={entry.name}
                      placeholder="Action Name"
                      onBlur={async (event) => {
                        if (!listBid) return;
                        const nextValue = event.target.value;
                        const nextEntries = actionEntries.map((current) =>
                          current.id === entry.id ? { ...current, name: nextValue } : current
                        );
                        await updateListValue(listBid, nextEntries, {
                          listType: 'action',
                          reason: 'blur-save',
                          entryId: entry.id,
                          field: 'name',
                        });
                      }}
                    />
                  </ActionNameInputWrap>
                  <DeleteIconWrap
                    type="button"
                    $theme={systemTheme}
                    aria-label="Delete Action"
                    onClick={async () => {
                      if (!listBid) return;
                      const nextEntries = actionEntries.filter((current) => current.id !== entry.id);
                      await updateListValue(listBid, nextEntries, {
                        listType: 'action',
                        reason: 'delete',
                        entryId: entry.id,
                      });
                    }}
                  >
                    <X size={14} />
                  </DeleteIconWrap>
                </ActionNameRow>
                {(() => {
                  const inlineNotationTokens = parseInlineNotationTokens(entry.description);

                  return (
                    <>
                      <ListDescriptionInput
                        $theme={systemTheme}
                        defaultValue={entry.description}
                        ref={autoSizeTextarea}
                        placeholder="Action Description"
                        onInput={(event) => {
                          autoSizeTextarea(event.currentTarget);
                        }}
                        onBlur={async (event) => {
                          if (!listBid) return;
                          const nextValue = event.target.value;
                          const nextEntries = actionEntries.map((current) =>
                            current.id === entry.id ? { ...current, description: nextValue } : current
                          );
                          await updateListValue(listBid, nextEntries, {
                            listType: 'action',
                            reason: 'blur-save',
                            entryId: entry.id,
                            field: 'description',
                          });
                        }}
                      />
                      {inlineNotationTokens.length > 0 ? (
                        <InlineNotationRow>
                          {inlineNotationTokens.map((token, tokenIndex) => (
                            <InlineNotationButton
                              key={`${entry.id}-action-inline-${tokenIndex}`}
                              type="button"
                              $theme={systemTheme}
                              onClick={() => {
                                void sendNotationRoll(token.notation, entry.name || 'Action');
                              }}
                              onContextMenu={(event) => {
                                event.preventDefault();
                                openInlineNotationContextMenu({
                                  notation: token.notation,
                                  actionName: entry.name || 'Action',
                                  title: entry.name || 'Action Roll',
                                });
                              }}
                              title={token.notation}
                            >
                              {token.notation}
                            </InlineNotationButton>
                          ))}
                        </InlineNotationRow>
                      ) : null}
                    </>
                  );
                })()}
              </ListEntry>
            ))}
          </ListBlock>
        </BaseCell>
      );
    }

    if (type === 'item-list') {
      const listAttr = resolveAttribute(attributes, style.attributeId || style.bidList?.[0]);
      const listBid = getAttributeBid(listAttr);
      const listTitle = resolveListTitle(attributes, style.attributeId || style.bidList?.[0]);
      const itemEntries = listBid ? readItemList(listBid) : [];

      return (
        <BaseCell key={component.id} $theme={systemTheme} $full={component.fullsize}>
          <ListBlock $theme={systemTheme}>
            <ListHeader $theme={systemTheme}>
              <ListTitle
                $theme={systemTheme}
                onContextMenu={listAttr ? (event) => {
                  event.preventDefault();
                  openFieldContextMenu(`item-list:${component.id}:${listBid || 'none'}`, listAttr, null, false);
                } : undefined}
              >
                {listTitle}
              </ListTitle>
              <HeaderIconButton
                type="button"
                $theme={systemTheme}
                aria-label="Add Item"
                onClick={async () => {
                  if (!listBid) return;
                  const nextEntries: ItemListEntry[] = [
                    ...itemEntries,
                    { id: crypto.randomUUID(), name: '', description: '', inUse: false },
                  ];
                  await updateListValue(listBid, nextEntries, { listType: 'item', reason: 'add' });
                }}
              >
                <Plus size={14} />
              </HeaderIconButton>
            </ListHeader>

            {itemEntries.map((entry, index) => (
              <ListEntry key={entry.id || `${component.id}-item-${index}`}>
                <ItemTitleRow>
                  <ItemCheckboxSlot>
                        <ItemUseCheckbox
                          $theme={systemTheme}
                          type="checkbox"
                          defaultChecked={entry.inUse}
                          onBlur={async (event) => {
                            if (!listBid) return;
                            const nextValue = event.target.checked;
                            const nextEntries = itemEntries.map((current) =>
                              current.id === entry.id ? { ...current, inUse: nextValue } : current
                            );
                            await updateListValue(listBid, nextEntries, {
                              listType: 'item',
                              reason: 'toggle-save',
                              entryId: entry.id,
                              field: 'inUse',
                            });
                          }}
                        />
                  </ItemCheckboxSlot>
                  <ItemTitleCenter $theme={systemTheme}>
                        <ListNameInput
                          $theme={systemTheme}
                          type="text"
                          defaultValue={entry.name}
                          placeholder="Item Name"
                          onBlur={async (event) => {
                            if (!listBid) return;
                            const nextValue = event.target.value;
                            const nextEntries = itemEntries.map((current) =>
                              current.id === entry.id ? { ...current, name: nextValue } : current
                            );
                            await updateListValue(listBid, nextEntries, {
                              listType: 'item',
                              reason: 'blur-save',
                              entryId: entry.id,
                              field: 'name',
                            });
                          }}
                        />
                  </ItemTitleCenter>
                  <DeleteIconWrap
                    type="button"
                    $theme={systemTheme}
                    aria-label="Delete Item"
                    onClick={async () => {
                      if (!listBid) return;
                      const nextEntries = itemEntries.filter((current) => current.id !== entry.id);
                      await updateListValue(listBid, nextEntries, {
                        listType: 'item',
                        reason: 'delete',
                        entryId: entry.id,
                      });
                    }}
                  >
                    <X size={14} />
                  </DeleteIconWrap>
                </ItemTitleRow>
                {(() => {
                  const inlineNotationTokens = parseInlineNotationTokens(entry.description);

                  return (
                    <>
                      <ListDescriptionInput
                        $theme={systemTheme}
                        defaultValue={entry.description}
                        ref={autoSizeTextarea}
                        placeholder="Item Description"
                        onInput={(event) => {
                          autoSizeTextarea(event.currentTarget);
                        }}
                        onBlur={async (event) => {
                          if (!listBid) return;
                          const nextValue = event.target.value;
                          const nextEntries = itemEntries.map((current) =>
                            current.id === entry.id ? { ...current, description: nextValue } : current
                          );
                          await updateListValue(listBid, nextEntries, {
                            listType: 'item',
                            reason: 'blur-save',
                            entryId: entry.id,
                            field: 'description',
                          });
                        }}
                      />
                      {inlineNotationTokens.length > 0 ? (
                        <InlineNotationRow>
                          {inlineNotationTokens.map((token, tokenIndex) => (
                            <InlineNotationButton
                              key={`${entry.id}-item-inline-${tokenIndex}`}
                              type="button"
                              $theme={systemTheme}
                              onClick={() => {
                                void sendNotationRoll(token.notation, entry.name || 'Item');
                              }}
                              onContextMenu={(event) => {
                                event.preventDefault();
                                openInlineNotationContextMenu({
                                  notation: token.notation,
                                  actionName: entry.name || 'Item',
                                  title: entry.name || 'Item Roll',
                                });
                              }}
                              title={token.notation}
                            >
                              {token.notation}
                            </InlineNotationButton>
                          ))}
                        </InlineNotationRow>
                      ) : null}
                    </>
                  );
                })()}
              </ListEntry>
            ))}
          </ListBlock>
        </BaseCell>
      );
    }

    return null;
  };

  return (
    <>
      <CardShell $theme={systemTheme} $backgroundUrl={backgroundUrl}>
        <Layer>
        <Row>
          <UnitNameCell $theme={systemTheme}>
            <UnitNameInput
              $theme={systemTheme}
              value={unitNameDraft}
              onChange={(event) => {
                setUnitNameDraft(event.target.value);
              }}
              onBlur={() => {
                void saveUnitName();
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  event.currentTarget.blur();
                }
              }}
              aria-label="Unit Name"
            />
          </UnitNameCell>
        </Row>

        {rows.map((row) => (
          <Row key={`row-${row.row}`}>
            {row.items.map((component) => renderComponent(component))}
          </Row>
        ))}
        </Layer>
      </CardShell>

      {fieldContextMenu ? (
        <>
          <RollableModalOverlay onClick={closeFieldContextMenu} />
          <RollableModalContainer $theme={systemTheme} onClick={(event) => event.stopPropagation()}>
            <RollableModalTitleRow>
              <RollableModalTitle $theme={systemTheme}>
                {getAttributeName(fieldContextMenu.attribute) || 'Attribute'}
              </RollableModalTitle>
              <RollableModalBid $theme={systemTheme}>
                [{getAttributeBid(fieldContextMenu.attribute)}]
              </RollableModalBid>
            </RollableModalTitleRow>
            <RollableMenuActions>
              {fieldContextMenu.isRollable ? (
                <RollableMenuButton
                  type="button"
                  $theme={systemTheme}
                  onClick={() => {
                    closeFieldContextMenu();
                    enableRollableEditMode(fieldContextMenu.draftKey, fieldContextMenu.input);
                  }}
                >
                  Edit value
                </RollableMenuButton>
              ) : null}

              {(() => {
                if (!fieldContextMenu.isRollable) {
                  return null;
                }

                const baseNotation = buildResolvedNotation(fieldContextMenu.attribute);
                if (!baseNotation) {
                  return null;
                }

                const advantageNotation = resolveAdvantageDisadvantageNotation(baseNotation, 'advantage');
                const disadvantageNotation = resolveAdvantageDisadvantageNotation(baseNotation, 'disadvantage');
                if (!advantageNotation || !disadvantageNotation) {
                  return null;
                }

                return (
                  <>
                    <RollableMenuButton
                      type="button"
                      $theme={systemTheme}
                      onClick={() => {
                        closeFieldContextMenu();
                        void sendNotationRoll(
                          advantageNotation,
                          `${getAttributeName(fieldContextMenu.attribute) || getAttributeBid(fieldContextMenu.attribute) || 'Roll'} (Advantage)`
                        );
                      }}
                    >
                      Roll with Advantage
                    </RollableMenuButton>
                    <RollableMenuButton
                      type="button"
                      $theme={systemTheme}
                      onClick={() => {
                        closeFieldContextMenu();
                        void sendNotationRoll(
                          disadvantageNotation,
                          `${getAttributeName(fieldContextMenu.attribute) || getAttributeBid(fieldContextMenu.attribute) || 'Roll'} (Disadvantage)`
                        );
                      }}
                    >
                      Roll with Disadvantage
                    </RollableMenuButton>
                  </>
                );
              })()}
            </RollableMenuActions>
          </RollableModalContainer>
        </>
      ) : null}

      {inlineNotationContextMenu ? (
        <>
          <RollableModalOverlay onClick={closeInlineNotationContextMenu} />
          <RollableModalContainer $theme={systemTheme} onClick={(event) => event.stopPropagation()}>
            <RollableModalTitleRow>
              <RollableModalTitle $theme={systemTheme}>{inlineNotationContextMenu.title}</RollableModalTitle>
              <RollableModalBid $theme={systemTheme}>[{inlineNotationContextMenu.notation}]</RollableModalBid>
            </RollableModalTitleRow>
            <RollableMenuActions>
              {(() => {
                const advantageNotation = resolveAdvantageDisadvantageNotation(inlineNotationContextMenu.notation, 'advantage');
                const disadvantageNotation = resolveAdvantageDisadvantageNotation(inlineNotationContextMenu.notation, 'disadvantage');

                if (!advantageNotation || !disadvantageNotation) {
                  return null;
                }

                return (
                  <>
                    <RollableMenuButton
                      type="button"
                      $theme={systemTheme}
                      onClick={() => {
                        closeInlineNotationContextMenu();
                        void handleInlineNotationClickWithMode('advantage');
                      }}
                    >
                      Roll with Advantage
                    </RollableMenuButton>
                    <RollableMenuButton
                      type="button"
                      $theme={systemTheme}
                      onClick={() => {
                        closeInlineNotationContextMenu();
                        void handleInlineNotationClickWithMode('disadvantage');
                      }}
                    >
                      Roll with Disadvantage
                    </RollableMenuButton>
                  </>
                );
              })()}
            </RollableMenuActions>
          </RollableModalContainer>
        </>
      ) : null}
    </>
  );
};
