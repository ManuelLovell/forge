import type { Item } from '@owlbear-rodeo/sdk';
import { SettingsConstants } from '../interfaces/MetadataKeys';
import type { SystemAttribute } from '../interfaces/SystemResponse';
import { getAttributeByBid, getHpValueFromMetadata } from './hpAttributeMapping';
import { EXTENSION_ID } from './MockData';

const clamp = (value: number, min: number, max: number): number => Math.max(min, Math.min(max, value));

export const TOKEN_BADGE_SHAPE_FLAG = `${EXTENSION_ID}/token-badge-shape`;
export const TOKEN_BADGE_SHAPE_OWNER = `${EXTENSION_ID}/token-badge-shape-owner`;
export const TOKEN_BADGE_SHAPE_SLOT = `${EXTENSION_ID}/token-badge-shape-slot`;
export const TOKEN_BADGE_TEXT_FLAG = `${EXTENSION_ID}/token-badge-text`;
export const TOKEN_BADGE_TEXT_OWNER = `${EXTENSION_ID}/token-badge-text-owner`;
export const TOKEN_BADGE_TEXT_SLOT = `${EXTENSION_ID}/token-badge-text-slot`;

export type TokenBadgeShape = 'circle' | 'square' | 'diamond' | 'hex' | 'shield';

export interface TokenBadgeConfig {
  slot: 1 | 2;
  shape: TokenBadgeShape;
  color: string;
  attribute: string;
}

export interface DesiredTokenBadgeShape {
  unitId: string;
  position: { x: number; y: number };
  points: { x: number; y: number }[];
  color: string;
  strokeWidth: number;
  visible: boolean;
  slot: 1 | 2;
}

const TOKEN_BADGE_CURVE_POINT_MAP: Record<TokenBadgeShape, Array<{ x: number; y: number }>> = {
  square: [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 0, y: 1 },
  ],
  diamond: [
    { x: 0.5, y: 0 },
    { x: 1, y: 0.5 },
    { x: 0.5, y: 1 },
    { x: 0, y: 0.5 },
  ],
  hex: [
    { x: 0.25, y: 0 },
    { x: 0.75, y: 0 },
    { x: 1, y: 0.5 },
    { x: 0.75, y: 1 },
    { x: 0.25, y: 1 },
    { x: 0, y: 0.5 },
  ],
  shield: [
    { x: 0.14, y: 0.06 },
    { x: 0.86, y: 0.06 },
    { x: 0.92, y: 0.26 },
    { x: 0.86, y: 0.58 },
    { x: 0.67, y: 0.84 },
    { x: 0.5, y: 1 },
    { x: 0.33, y: 0.84 },
    { x: 0.14, y: 0.58 },
    { x: 0.08, y: 0.26 },
  ],
  circle: Array.from({ length: 20 }, (_, index) => {
    const angle = (Math.PI * 2 * index) / 20;
    return {
      x: 0.5 + (Math.cos(angle) * 0.5),
      y: 0.5 + (Math.sin(angle) * 0.5),
    };
  }),
};

export interface DesiredTokenBadgeText {
  unitId: string;
  position: { x: number; y: number };
  width: number;
  height: number;
  text: string;
  fontSize: number;
  visible: boolean;
  slot: 1 | 2;
}

export type HpOverlayOrientation = 'top' | 'bottom' | 'left' | 'right';

interface ImageBoundsItem {
  id: string;
  visible: boolean;
  metadata: Item['metadata'];
  scale: {
    x: number;
    y: number;
  };
  grid: {
    dpi: number;
    offset: { x: number; y: number };
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

const isTokenBadgeShape = (value: unknown): value is TokenBadgeShape => (
  value === 'circle' || value === 'square' || value === 'diamond' || value === 'hex' || value === 'shield'
);

const normalizeHexColor = (value: unknown, fallback: string): string => {
  if (typeof value !== 'string') {
    return fallback;
  }

  const trimmed = value.trim();
  return /^#[0-9a-fA-F]{6}$/.test(trimmed) ? trimmed : fallback;
};

const getImageBounds = (unitItem: ImageBoundsItem, sceneGridDpi: number) => {
  const dpiScale = sceneGridDpi / unitItem.grid.dpi;
  const scaleX = Math.abs(unitItem.scale.x || 1);
  const scaleY = Math.abs(unitItem.scale.y || 1);
  const width = unitItem.image.width * dpiScale * scaleX;
  const height = unitItem.image.height * dpiScale * scaleY;
  const offsetX = (unitItem.grid.offset.x / unitItem.image.width) * width;
  const offsetY = (unitItem.grid.offset.y / unitItem.image.height) * height;
  const minX = unitItem.position.x - offsetX;
  const minY = unitItem.position.y - offsetY;

  return {
    minX,
    minY,
    width,
    height,
  };
};

const getHpBarRect = (
  unitItem: ImageBoundsItem,
  sceneGridDpi: number,
  orientation: HpOverlayOrientation,
) => {
  const bounds = getImageBounds(unitItem, sceneGridDpi);
  const isVertical = orientation === 'left' || orientation === 'right';
  const center = orientation === 'top'
    ? { x: 0.5, y: 0.18 }
    : orientation === 'bottom'
      ? { x: 0.5, y: 0.82 }
      : orientation === 'left'
        ? { x: 0.18, y: 0.5 }
        : { x: 0.82, y: 0.5 };

  const halfSize = isVertical
    ? { x: 0.05, y: 0.3 }
    : { x: 0.3, y: 0.05 };

  return {
    minX: bounds.minX + ((center.x - halfSize.x) * bounds.width),
    maxX: bounds.minX + ((center.x + halfSize.x) * bounds.width),
    minY: bounds.minY + ((center.y - halfSize.y) * bounds.height),
    maxY: bounds.minY + ((center.y + halfSize.y) * bounds.height),
    width: bounds.width,
    height: bounds.height,
  };
};

const getTokenBadgeBaseSize = (
  unitItem: ImageBoundsItem,
  sceneGridDpi: number,
) => {
  const bounds = getImageBounds(unitItem, sceneGridDpi);
  return clamp(Math.round(Math.min(bounds.width, bounds.height) * 0.2), 24, 48);
};

const getTokenBadgePlacement = (
  unitItem: ImageBoundsItem,
  sceneGridDpi: number,
  orientation: HpOverlayOrientation,
  stackIndex: number,
  badgeSize: number,
  offsetForHpNumbers: boolean,
) => {
  const hpBarRect = getHpBarRect(unitItem, sceneGridDpi, orientation);
  const gap = clamp(Math.round(badgeSize * 0.12), 4, 10);
  const columnX = hpBarRect.maxX - (badgeSize * 0.5);
  const verticalNumberOffset = offsetForHpNumbers && (orientation === 'left' || orientation === 'right')
    ? 70
    : 0;
    
  const horizontalNumberOffset = offsetForHpNumbers && (orientation === 'left' || orientation === 'right')
    ? 35
    : 0;

  let topLeftPosition: { x: number; y: number };

  switch (orientation) {
    case 'top':
      topLeftPosition = {
        x: columnX,
        y: hpBarRect.maxY + gap + (stackIndex * (badgeSize + gap)),
      };
      break;
    case 'left':
      topLeftPosition = {
        x: hpBarRect.maxX - horizontalNumberOffset + gap,
        y: hpBarRect.minY + verticalNumberOffset + (stackIndex * (badgeSize + gap)),
      };
      break;
    case 'right':
      topLeftPosition = {
        x: hpBarRect.minX - badgeSize + horizontalNumberOffset - gap,
        y: hpBarRect.minY + verticalNumberOffset + (stackIndex * (badgeSize + gap)),
      };
      break;
    case 'bottom':
    default:
      topLeftPosition = {
        x: columnX,
        y: hpBarRect.minY - badgeSize - gap - (stackIndex * (badgeSize + gap)),
      };
      break;
  }

  return {
    width: badgeSize,
    height: badgeSize,
    topLeftPosition,
  };
};

const getTokenBadgeVisualSize = (baseSize: number, shape: TokenBadgeShape) => {
  switch (shape) {
    case 'square':
    case 'diamond':
    case 'circle':
    case 'hex':
    case 'shield':
      return Math.max(baseSize - 4, 20);
    default:
      return baseSize;
  }
};

const getTokenBadgeCurvePoints = (
  width: number,
  height: number,
  shape: TokenBadgeShape,
) => {
  return TOKEN_BADGE_CURVE_POINT_MAP[shape].map((point) => ({
    x: point.x * width,
    y: point.y * height,
  }));
};

const getTokenBadgeTextPosition = (
  topLeftPosition: { x: number; y: number },
  _width: number,
  _height: number,
  _shape: TokenBadgeShape,
) => {
  return {
    x: topLeftPosition.x,
    y: topLeftPosition.y,
  };
};

const getTokenBadgeValue = (
  unit: Pick<Item, 'metadata'>,
  bid: string,
  attributes: SystemAttribute[],
): string | null => {
  const attribute = getAttributeByBid(attributes, bid);
  if (!attribute) {
    return null;
  }

  const numericValue = getHpValueFromMetadata(unit.metadata, bid, attributes, 'current');
  if (numericValue === null) {
    return null;
  }

  return `${Math.trunc(numericValue)}`;
};

export const getTokenBadgeConfigs = (storage: Record<string, unknown>): TokenBadgeConfig[] => {
  const configs: TokenBadgeConfig[] = [
    {
      slot: 1,
      shape: isTokenBadgeShape(storage[SettingsConstants.TOKEN_BADGE_ONE_SHAPE])
        ? storage[SettingsConstants.TOKEN_BADGE_ONE_SHAPE] as TokenBadgeShape
        : 'circle',
      color: normalizeHexColor(storage[SettingsConstants.TOKEN_BADGE_ONE_COLOR], '#f5c542'),
      attribute: typeof storage[SettingsConstants.TOKEN_BADGE_ONE_ATTRIBUTE] === 'string'
        ? (storage[SettingsConstants.TOKEN_BADGE_ONE_ATTRIBUTE] as string).trim()
        : '',
    },
    {
      slot: 2,
      shape: isTokenBadgeShape(storage[SettingsConstants.TOKEN_BADGE_TWO_SHAPE])
        ? storage[SettingsConstants.TOKEN_BADGE_TWO_SHAPE] as TokenBadgeShape
        : 'circle',
      color: normalizeHexColor(storage[SettingsConstants.TOKEN_BADGE_TWO_COLOR], '#5bb5ff'),
      attribute: typeof storage[SettingsConstants.TOKEN_BADGE_TWO_ATTRIBUTE] === 'string'
        ? (storage[SettingsConstants.TOKEN_BADGE_TWO_ATTRIBUTE] as string).trim()
        : '',
    },
  ];

  return configs.filter((config) => config.attribute.length > 0);
};

export const getTokenBadgeShapeId = (unitId: string, slot: 1 | 2) => `TBS${slot}${unitId.slice(3)}`;

export const getTokenBadgeTextId = (unitId: string, slot: 1 | 2) => `TBT${slot}${unitId.slice(3)}`;

export const buildDesiredTokenBadgesForUnit = (
  unit: ImageBoundsItem,
  sceneGridDpi: number,
  orientation: HpOverlayOrientation,
  showHpNumbers: boolean,
  attributes: SystemAttribute[],
  tokenBadgeConfigs: TokenBadgeConfig[],
) => {
  const desiredShapes: DesiredTokenBadgeShape[] = [];
  const desiredTexts: DesiredTokenBadgeText[] = [];

  const activeBadges = tokenBadgeConfigs
    .map((config) => {
      const text = getTokenBadgeValue(unit, config.attribute, attributes);
      if (text === null) {
        return null;
      }

      return {
        ...config,
        text,
      };
    })
    .filter((config): config is TokenBadgeConfig & { text: string } => config !== null);

  activeBadges.forEach((badge, stackIndex) => {
    const baseSize = getTokenBadgeBaseSize(unit, sceneGridDpi);
    const visualSize = getTokenBadgeVisualSize(baseSize, badge.shape);
    const placement = getTokenBadgePlacement(unit, sceneGridDpi, orientation, stackIndex, visualSize, showHpNumbers);
    const curvePoints = getTokenBadgeCurvePoints(
      visualSize,
      visualSize,
      badge.shape,
    );
    const textPosition = getTokenBadgeTextPosition(
      placement.topLeftPosition,
      visualSize,
      visualSize,
      badge.shape,
    );
    const fontSize = clamp(
      Math.round(visualSize * (badge.text.length >= 3 ? 0.5 : 0.6)),
      12,
      24,
    );

    desiredShapes.push({
      unitId: unit.id,
      position: placement.topLeftPosition,
      points: curvePoints,
      color: badge.color,
      strokeWidth: 3,
      visible: unit.visible,
      slot: badge.slot,
    });

    desiredTexts.push({
      unitId: unit.id,
      position: textPosition,
      width: visualSize,
      height: visualSize,
      text: badge.text,
      fontSize,
      visible: unit.visible,
      slot: badge.slot,
    });
  });

  return {
    desiredShapes,
    desiredTexts,
  };
};