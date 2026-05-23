import { EXTENSION_ID, MOCK_BIDS } from './MockData';
import { SettingsConstants } from '../interfaces/MetadataKeys';
import { SystemAttribute } from '../interfaces/SystemResponse';
import { buildCompleteValueMaps } from './DerivedValueResolution';

export type HpValuePart = 'current' | 'max';

type ItemMetadata = Record<string, unknown> | undefined;

const isResourceValue = (value: unknown): value is Record<string, unknown> => {
  return !!value && typeof value === 'object' && !Array.isArray(value);
};

const isHpNameAttribute = (attribute: SystemAttribute) => {
  const abbr = (attribute.attr_abbr || '').toUpperCase();
  const name = (attribute.attr_name || '').toLowerCase();
  return abbr === 'HP' || name === 'hit points';
};

const isMaxHpNameAttribute = (attribute: SystemAttribute) => {
  const abbr = (attribute.attr_abbr || '').toUpperCase();
  const name = (attribute.attr_name || '').toLowerCase();
  return abbr === 'MHP' || name === 'max hit points';
};

export const parseNumeric = (value: unknown): number | null => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
};

export const getAttributeByBid = (attributes: SystemAttribute[], bid: string) => {
  return attributes.find((attribute) => attribute.attr_bid === bid) || null;
};

export const isResourceAttribute = (attribute: SystemAttribute | null | undefined) => {
  return String(attribute?.attr_type || '').toLowerCase() === 'resource';
};

export const isDerivedAttribute = (attribute: SystemAttribute | null | undefined) => {
  return String(attribute?.attr_type || '').toLowerCase() === 'derived';
};

export const getHpBidKeys = (attributes: SystemAttribute[]) => {
  const currentHp = attributes.find(isHpNameAttribute) || null;
  const maxHp = attributes.find(isMaxHpNameAttribute) || null;
  const hpResource = currentHp && isResourceAttribute(currentHp)
    ? currentHp
    : (attributes.find((attribute) => isHpNameAttribute(attribute) && isResourceAttribute(attribute)) || null);

  return {
    currentHpBid: currentHp?.attr_bid || hpResource?.attr_bid || MOCK_BIDS.CURRENT_HP,
    maxHpBid: maxHp?.attr_bid || hpResource?.attr_bid || MOCK_BIDS.MAX_HP,
  };
};

export const getConfiguredHpBidKeys = (
  storage: Record<string, unknown>,
  attributes: SystemAttribute[]
) => {
  const inferred = getHpBidKeys(attributes);
  const configuredCurrent = storage[SettingsConstants.HP_CURRENT_BID] as string | undefined;
  const configuredMax = storage[SettingsConstants.HP_MAX_BID] as string | undefined;
  const attributeBids = new Set(attributes.map((attribute) => attribute.attr_bid));

  return {
    currentHpBid: configuredCurrent && attributeBids.has(configuredCurrent)
      ? configuredCurrent
      : inferred.currentHpBid,
    maxHpBid: configuredMax && attributeBids.has(configuredMax)
      ? configuredMax
      : inferred.maxHpBid,
  };
};

export const getHpMetadataKey = (bid: string) => `${EXTENSION_ID}/${bid}`;

const getNumericMetadataValue = (
  metadata: ItemMetadata,
  bid: string,
  attributes: SystemAttribute[],
  part: HpValuePart,
) => {
  const raw = metadata?.[getHpMetadataKey(bid)];
  const attribute = getAttributeByBid(attributes, bid);

  if (isResourceAttribute(attribute) && isResourceValue(raw)) {
    return parseNumeric(raw[part]);
  }

  return parseNumeric(raw);
};

export const getHpValueFromMetadata = (
  metadata: ItemMetadata,
  bid: string,
  attributes: SystemAttribute[],
  part: HpValuePart
) => {
  const attribute = getAttributeByBid(attributes, bid);

  if (isDerivedAttribute(attribute)) {
    const { bidValueMap } = buildCompleteValueMaps(
      attributes,
      (attributeBid) => getNumericMetadataValue(metadata, attributeBid, attributes, part),
      (attr) => attr.attr_bid,
      (attr) => String(attr.attr_type || '').toLowerCase(),
      (attr) => attr.attr_meta?.derived?.formula || attr.attr_func || '',
      (attr) => attr.attr_name || '',
      (attr) => attr.attr_abbr || '',
    );

    return typeof bidValueMap[bid] === 'number' ? bidValueMap[bid] : null;
  }

  return getNumericMetadataValue(metadata, bid, attributes, part);
};

export const buildHpMetadataValue = (
  existingRaw: unknown,
  attribute: SystemAttribute | null,
  part: HpValuePart,
  nextValue: number,
  fallbackOtherValue: number | null = null
) => {
  if (isResourceAttribute(attribute) || isResourceValue(existingRaw)) {
    const resourceValue = isResourceValue(existingRaw) ? existingRaw : {};
    const otherPart: HpValuePart = part === 'current' ? 'max' : 'current';
    const otherValue = parseNumeric(resourceValue[otherPart]);

    return {
      current: part === 'current' ? nextValue : (otherValue ?? fallbackOtherValue ?? 0),
      max: part === 'max' ? nextValue : (otherValue ?? fallbackOtherValue ?? 0),
    };
  }

  return String(nextValue);
};