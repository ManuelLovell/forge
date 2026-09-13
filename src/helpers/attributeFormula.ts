import type { SystemAttribute } from '../interfaces/SystemResponse';

type RuntimeAttributeLike = SystemAttribute & {
  func?: string | null;
  meta?: SystemAttribute['attr_meta'];
};

export const getAttributeMeta = (
  attribute: RuntimeAttributeLike | null | undefined
): SystemAttribute['attr_meta'] => {
  return attribute?.attr_meta ?? attribute?.meta ?? {};
};

export const getEffectiveAttributeFormula = (
  attribute: RuntimeAttributeLike | null | undefined
): string => {
  const directFormula = attribute?.attr_func ?? attribute?.func ?? '';
  if (typeof directFormula === 'string' && directFormula.trim().length > 0) {
    return directFormula.trim();
  }

  const derivedFormula = getAttributeMeta(attribute)?.derived?.formula;
  if (typeof derivedFormula === 'string' && derivedFormula.trim().length > 0) {
    return derivedFormula.trim();
  }

  return '';
};

export const hasDiceNotation = (formula: string | null | undefined): boolean => {
  const normalized = (formula ?? '').trim();
  if (!normalized) {
    return false;
  }

  return /\d+d\d+(?:[kd][hl]\d+|!)?/i.test(normalized);
};

export const hasEffectiveAttributeFormula = (
  attribute: RuntimeAttributeLike | null | undefined
): boolean => {
  return getEffectiveAttributeFormula(attribute).length > 0;
};

export const isRollableFormula = (
  attribute: RuntimeAttributeLike | null | undefined
): boolean => {
  return hasDiceNotation(getEffectiveAttributeFormula(attribute));
};
