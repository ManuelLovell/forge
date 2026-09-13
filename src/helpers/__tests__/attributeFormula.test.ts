import { describe, expect, it } from 'vitest';
import {
  getEffectiveAttributeFormula,
  hasDiceNotation,
  hasEffectiveAttributeFormula,
  isRollableFormula,
} from '../attributeFormula';
import type { SystemAttribute } from '../../interfaces/SystemResponse';

type AttrLike = SystemAttribute & { func?: string | null; meta?: SystemAttribute['attr_meta'] };

const buildAttribute = (overrides: Partial<AttrLike> = {}): AttrLike => ({
  attr_bid: 'STR',
  attr_abbr: 'STR',
  attr_func: null,
  attr_name: 'Strength',
  attr_type: 'derived',
  attr_group: 'core',
  attr_meta: {},
  ...overrides,
});

describe('attributeFormula', () => {
  it('returns trimmed attr_func when present', () => {
    const attribute = buildAttribute({ attr_func: ' 1d20 + @DEX ' });
    expect(getEffectiveAttributeFormula(attribute)).toBe('1d20 + @DEX');
  });

  it('falls back to derived meta formula when attr_func is missing', () => {
    const attribute = buildAttribute({
      attr_func: null,
      attr_meta: { derived: { formula: ' 1d20 + #Dex ' } },
    });

    expect(getEffectiveAttributeFormula(attribute)).toBe('1d20 + #Dex');
    expect(hasEffectiveAttributeFormula(attribute)).toBe(true);
  });

  it('prefers attr_func over derived meta formula when both are present', () => {
    const attribute = buildAttribute({
      attr_func: '2d6+1',
      attr_meta: { derived: { formula: '1d20+99' } },
    });

    expect(getEffectiveAttributeFormula(attribute)).toBe('2d6+1');
  });

  it('returns empty string for missing formulas', () => {
    const attribute = buildAttribute({
      attr_func: '   ',
      attr_meta: { derived: { formula: '   ' } },
    });

    expect(getEffectiveAttributeFormula(attribute)).toBe('');
    expect(hasEffectiveAttributeFormula(attribute)).toBe(false);
  });

  it('detects dice notation in formulas', () => {
    expect(hasDiceNotation('1d20 + @DEX')).toBe(true);
    expect(hasDiceNotation('2d6kh1 + 3')).toBe(true);
    expect(hasDiceNotation('ceil(@LVL / 4) + 1')).toBe(false);
    expect(hasDiceNotation('')).toBe(false);
  });

  it('only treats formulas with dice notation as rollable', () => {
    const attribute = buildAttribute({ attr_func: 'ceil(@LVL / 4) + 1' });
    expect(isRollableFormula(attribute)).toBe(false);

    const rollable = buildAttribute({ attr_func: '1d20 + @DEX + 2' });
    expect(isRollableFormula(rollable)).toBe(true);
  });
});
