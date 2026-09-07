import { toResolvedDiceNotation, validateDiceFormula } from './FormulaParser';
import type { ResolvedReferenceValue } from './FormulaParser';
import type { SystemAttribute } from '../interfaces/SystemResponse';

// Runtime representation of attributes that may come from various sources
type RuntimeAttributeLike = SystemAttribute & {
  bid?: string;
  abbr?: string;
  func?: string | null;
  name?: string;
  type?: 'text' | 'numb' | 'list' | 'bool' | 'enum' | 'derived' | 'resource';
  group?: string;
  meta?: SystemAttribute['attr_meta'];
};

/**
 * Build a complete numeric value map that includes both base attributes and derived values.
 * Derived values are calculated in dependency order, allowing derived values to reference
 * other derived values.
 *
 * @param attributes - List of system attributes (mix of base and derived)
 * @param valueGetter - Function to get the current value for a given BID (e.g., from unit.attributes)
 * @param getAttributeBid - Function to extract BID from an attribute
 * @param getAttributeType - Function to extract type from an attribute
 * @param getAttributeFormula - Function to extract formula from an attribute
 * @param getAttributeName - Function to extract name from an attribute
 * @param getAttributeAbbr - Function to extract abbreviation from an attribute
 * @returns Object with bidValueMap and nameValueMap that include derived values
 */
export interface DerivedValueMaps {
  bidValueMap: Record<string, ResolvedReferenceValue>;
  nameValueMap: Record<string, ResolvedReferenceValue>;
}

const toNumericValue = (rawValue: unknown): number | undefined => {
  if (rawValue === undefined || rawValue === null) {
    return undefined;
  }

  if (typeof rawValue === 'number') {
    return Number.isFinite(rawValue) ? rawValue : undefined;
  }

  if (typeof rawValue === 'boolean') {
    return rawValue ? 1 : 0;
  }

  if (typeof rawValue === 'string') {
    const trimmed = rawValue.trim();
    if (!trimmed) {
      return undefined;
    }

    const parsed = Number(trimmed);
    return Number.isFinite(parsed) ? parsed : undefined;
  }

  if (typeof rawValue === 'object' && !Array.isArray(rawValue)) {
    const valueObj = rawValue as Record<string, unknown>;
    const current = Number(valueObj.current);
    if (Number.isFinite(current)) {
      return current;
    }

    const value = Number(valueObj.value);
    if (Number.isFinite(value)) {
      return value;
    }

    const max = Number(valueObj.max);
    if (Number.isFinite(max)) {
      return max;
    }
  }

  return undefined;
};

export function buildCompleteValueMaps(
  attributes: RuntimeAttributeLike[],
  valueGetter: (bid: string) => any,
  getAttributeBid: (attr: RuntimeAttributeLike) => string,
  getAttributeType: (attr: RuntimeAttributeLike) => string,
  getAttributeFormula: (attr: RuntimeAttributeLike) => string,
  getAttributeName: (attr: RuntimeAttributeLike) => string,
  getAttributeAbbr: (attr: RuntimeAttributeLike) => string
): DerivedValueMaps {
  const bidValueMap: Record<string, ResolvedReferenceValue> = {};
  const nameValueMap: Record<string, ResolvedReferenceValue> = {};

  // Phase 1: Add all base attribute values
  for (const attribute of attributes) {
    const bid = getAttributeBid(attribute);
    if (!bid) continue;

    const attrType = getAttributeType(attribute);
    // Skip derived attributes in the first phase
    if (attrType === 'derived') continue;

    const rawValue = valueGetter(bid);
    if (rawValue === undefined || rawValue === null) continue;

    const rawString = typeof rawValue === 'string' ? rawValue.trim() : '';
    let resolvedBaseValue: ResolvedReferenceValue | null = null;

    const parsedValue = toNumericValue(rawValue);
    if (Number.isFinite(parsedValue)) {
      resolvedBaseValue = parsedValue;
    } else if (rawString) {
      const formulaValidation = validateDiceFormula(rawString);
      if (formulaValidation.valid) {
        resolvedBaseValue = rawString;
      }
    }

    if (resolvedBaseValue === null) continue;

    bidValueMap[bid] = resolvedBaseValue;

    const name = getAttributeName(attribute);
    if (name) {
      nameValueMap[name] = resolvedBaseValue;
    }

    const abbr = getAttributeAbbr(attribute);
    if (abbr) {
      nameValueMap[abbr] = resolvedBaseValue;
    }
  }

  // Phase 2: Calculate and add derived values
  // We need to iterate until no new derived values are added (to handle dependencies)
  const derivedAttributes = attributes.filter(
    (attr) => getAttributeType(attr) === 'derived'
  );

  let previousMapSize = 0;
  let iterations = 0;
  const maxIterations = derivedAttributes.length + 5; // Prevent infinite loops

  while (previousMapSize !== Object.keys(bidValueMap).length && iterations < maxIterations) {
    previousMapSize = Object.keys(bidValueMap).length;
    iterations++;

    for (const attribute of derivedAttributes) {
      const bid = getAttributeBid(attribute);
      if (!bid) continue;

      // Skip if already calculated
      if (bid in bidValueMap) continue;

      const formula = getAttributeFormula(attribute);
      if (!formula) continue;

      // Try to resolve the formula with current available values
      const resolution = toResolvedDiceNotation(formula, {
        bidValueMap,
        nameValueMap,
        onMissingBid: 'error',
      });

      // Only add if resolution was successful
      if (!resolution.valid || !resolution.notation) {
        continue; // Will try again in next iteration when dependencies are resolved
      }

      const notation = resolution.notation.trim();
      const numericValue = Number(notation);

      // Only add if the result is a pure number (no dice notation remaining)
      if (Number.isFinite(numericValue)) {
        bidValueMap[bid] = numericValue;

        const name = getAttributeName(attribute);
        if (name) {
          nameValueMap[name] = numericValue;
        }

        const abbr = getAttributeAbbr(attribute);
        if (abbr) {
          nameValueMap[abbr] = numericValue;
        }
      }
    }
  }

  return { bidValueMap, nameValueMap };
}
