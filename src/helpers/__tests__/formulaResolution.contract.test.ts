import { describe, expect, it } from 'vitest';
import { toResolvedDiceNotation } from '../FormulaParser';
import { buildCompleteValueMaps } from '../DerivedValueResolution';
import { getEffectiveAttributeFormula } from '../attributeFormula';
import type { SystemAttribute } from '../../interfaces/SystemResponse';

type AttrLike = SystemAttribute & {
  bid?: string;
  abbr?: string;
  func?: string | null;
  name?: string;
  type?: 'text' | 'numb' | 'list' | 'bool' | 'enum' | 'derived' | 'resource';
  group?: string;
  meta?: SystemAttribute['attr_meta'];
};

const attr = (overrides: Partial<AttrLike>): AttrLike => ({
  attr_bid: 'A',
  attr_abbr: 'A',
  attr_func: null,
  attr_name: 'A',
  attr_type: 'numb',
  attr_group: 'core',
  attr_meta: {},
  ...overrides,
});

const getBid = (attribute: AttrLike) => String(attribute.attr_bid ?? attribute.bid ?? '').trim();
const getType = (attribute: AttrLike) => String(attribute.attr_type ?? attribute.type ?? '').trim().toLowerCase();
const getName = (attribute: AttrLike) => String(attribute.attr_name ?? attribute.name ?? '').trim();
const getAbbr = (attribute: AttrLike) => String(attribute.attr_abbr ?? attribute.abbr ?? '').trim();

describe('formula resolution contracts', () => {
  it('resolves dice plus BID references', () => {
    const result = toResolvedDiceNotation('1d4 + @STR', {
      bidValueMap: { STR: 3 },
      onMissingBid: 'error',
    });

    expect(result.valid).toBe(true);
    expect(result.notation).toBe('1d4+3');
  });

  it('resolves name references with normalization', () => {
    const result = toResolvedDiceNotation('1d20 + #DexterityModifier', {
      nameValueMap: { 'Dexterity Modifier': 4 },
      onMissingBid: 'error',
    });

    expect(result.valid).toBe(true);
    expect(result.notation).toBe('1d20+4');
  });

  it('resolves formulas with numeric functions and mixed references', () => {
    const result = toResolvedDiceNotation('max(@STR,#DEX)+1d6', {
      bidValueMap: { STR: 2 },
      nameValueMap: { DEX: 5 },
      onMissingBid: 'error',
    });

    expect(result.valid).toBe(true);
    expect(result.notation).toBe('5+1d6');
  });

  it('fails when required references are missing', () => {
    const result = toResolvedDiceNotation('1d20 + @MISSING', {
      bidValueMap: {},
      onMissingBid: 'error',
    });

    expect(result.valid).toBe(false);
    expect(result.error).toContain('@MISSING');
  });

  it('builds derived maps including attr_func and meta-derived formulas', () => {
    const attributes: AttrLike[] = [
      attr({ attr_bid: 'STR', attr_name: 'Strength', attr_abbr: 'STR', attr_type: 'numb' }),
      attr({ attr_bid: 'DEX', attr_name: 'Dexterity', attr_abbr: 'DEX', attr_type: 'numb' }),
      attr({ attr_bid: 'MOD', attr_name: 'Modifier', attr_abbr: 'MOD', attr_type: 'derived', attr_func: 'floor((@STR-10)/2)' }),
      attr({
        attr_bid: 'ATK',
        attr_name: 'Attack Bonus',
        attr_abbr: 'ATK',
        attr_type: 'derived',
        attr_func: null,
        attr_meta: { derived: { formula: '@MOD + @DEX' } },
      }),
    ];

    const values: Record<string, unknown> = {
      STR: 16,
      DEX: 2,
    };

    const maps = buildCompleteValueMaps(
      attributes,
      (bid) => values[bid],
      getBid,
      getType,
      getEffectiveAttributeFormula,
      getName,
      getAbbr,
    );

    expect(maps.bidValueMap.MOD).toBe(3);
    expect(maps.bidValueMap.ATK).toBe(5);
    expect(maps.nameValueMap['Attack Bonus']).toBe(5);
  });

  it('supports nested derived dependencies in dependency order', () => {
    const attributes: AttrLike[] = [
      attr({ attr_bid: 'A', attr_name: 'A', attr_abbr: 'A', attr_type: 'numb' }),
      attr({ attr_bid: 'B', attr_name: 'B', attr_abbr: 'B', attr_type: 'derived', attr_func: '@A + 2' }),
      attr({ attr_bid: 'C', attr_name: 'C', attr_abbr: 'C', attr_type: 'derived', attr_func: '@B + 3' }),
    ];

    const values: Record<string, unknown> = { A: 5 };

    const maps = buildCompleteValueMaps(
      attributes,
      (bid) => values[bid],
      getBid,
      getType,
      getEffectiveAttributeFormula,
      getName,
      getAbbr,
    );

    expect(maps.bidValueMap.B).toBe(7);
    expect(maps.bidValueMap.C).toBe(10);
  });

  it('does not materialize derived values when notation still contains dice', () => {
    const attributes: AttrLike[] = [
      attr({ attr_bid: 'STR', attr_name: 'Strength', attr_abbr: 'STR', attr_type: 'numb' }),
      attr({ attr_bid: 'DMG', attr_name: 'Damage', attr_abbr: 'DMG', attr_type: 'derived', attr_func: '1d6 + @STR' }),
      attr({ attr_bid: 'TOTAL', attr_name: 'Total', attr_abbr: 'TOTAL', attr_type: 'derived', attr_func: '@DMG + 1' }),
    ];

    const values: Record<string, unknown> = { STR: 4 };

    const maps = buildCompleteValueMaps(
      attributes,
      (bid) => values[bid],
      getBid,
      getType,
      getEffectiveAttributeFormula,
      getName,
      getAbbr,
    );

    expect(maps.bidValueMap.DMG).toBeUndefined();
    expect(maps.bidValueMap.TOTAL).toBeUndefined();
  });
});
