import { describe, expect, it } from 'vitest';
import type { SystemAttribute } from '../../interfaces/SystemResponse';
import { toResolvedDiceNotation } from '../FormulaParser';
import { buildCompleteValueMaps } from '../DerivedValueResolution';
import { getEffectiveAttributeFormula } from '../attributeFormula';

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

const resolveRollNotation = (
  attributes: AttrLike[],
  metadataValues: Record<string, unknown>,
  targetBid: string
) => {
  const maps = buildCompleteValueMaps(
    attributes,
    (bid) => metadataValues[bid],
    getBid,
    getType,
    getEffectiveAttributeFormula,
    getName,
    getAbbr,
  );

  const target = attributes.find((a) => getBid(a) === targetBid) ?? null;
  const formula = getEffectiveAttributeFormula(target);

  return toResolvedDiceNotation(formula, {
    bidValueMap: maps.bidValueMap,
    nameValueMap: maps.nameValueMap,
    onMissingBid: 'error',
  });
};

describe('rollable meta formula matrix', () => {
  it('number input formula resolves when referencing a select/enum attribute', () => {
    const attributes: AttrLike[] = [
      attr({ attr_bid: 'BASE', attr_name: 'Base', attr_abbr: 'B', attr_type: 'numb' }),
      attr({ attr_bid: 'SEL', attr_name: 'Tier Select', attr_abbr: 'SEL', attr_type: 'enum' }),
      attr({ attr_bid: 'ATK', attr_name: 'Attack Roll', attr_abbr: 'ATK', attr_type: 'numb', attr_func: '1d20 + @SEL' }),
    ];

    const result = resolveRollNotation(attributes, {
      BASE: 5,
      SEL: '3',
    }, 'ATK');

    expect(result.valid).toBe(true);
    expect(result.notation).toBe('1d20+3');
  });

  it('number input formula resolves when referencing select plus derived attributes', () => {
    const attributes: AttrLike[] = [
      attr({ attr_bid: 'BASE', attr_name: 'Base', attr_abbr: 'B', attr_type: 'numb' }),
      attr({ attr_bid: 'SEL', attr_name: 'Tier Select', attr_abbr: 'SEL', attr_type: 'enum' }),
      attr({ attr_bid: 'DER', attr_name: 'Derived Bonus', attr_abbr: 'DER', attr_type: 'derived', attr_meta: { derived: { formula: '@BASE + @SEL' } } }),
      attr({ attr_bid: 'ATK', attr_name: 'Attack Roll', attr_abbr: 'ATK', attr_type: 'numb', attr_func: '1d20 + @SEL + @DER' }),
    ];

    const result = resolveRollNotation(attributes, {
      BASE: 5,
      SEL: '2',
    }, 'ATK');

    expect(result.valid).toBe(true);
    expect(result.notation).toBe('1d20+2+7');
  });

  it('methodically resolves cross-attribute references for all rollable target types', () => {
    const sharedAttributes: AttrLike[] = [
      attr({ attr_bid: 'NUM', attr_name: 'Number Source', attr_abbr: 'NUM', attr_type: 'numb' }),
      attr({ attr_bid: 'SEL', attr_name: 'Select Source', attr_abbr: 'SEL', attr_type: 'enum' }),
      attr({ attr_bid: 'FLAG', attr_name: 'Flag Source', attr_abbr: 'FLAG', attr_type: 'bool' }),
      attr({ attr_bid: 'RES', attr_name: 'Resource Source', attr_abbr: 'RES', attr_type: 'resource' }),
      attr({ attr_bid: 'DER', attr_name: 'Derived Source', attr_abbr: 'DER', attr_type: 'derived', attr_meta: { derived: { formula: '@NUM + @SEL + @RES + @FLAG' } } }),
      attr({ attr_bid: 'ROLL_NUMB', attr_name: 'Roll Number', attr_abbr: 'RN', attr_type: 'numb', attr_func: '1d20 + @NUM + @SEL + @FLAG + @RES + @DER' }),
      attr({ attr_bid: 'ROLL_RES', attr_name: 'Roll Resource', attr_abbr: 'RR', attr_type: 'resource', attr_func: '1d20 + @NUM + @SEL + @FLAG + @RES + @DER' }),
      attr({ attr_bid: 'ROLL_DER', attr_name: 'Roll Derived', attr_abbr: 'RD', attr_type: 'derived', attr_meta: { derived: { formula: '1d20 + @NUM + @SEL + @FLAG + @RES + @DER' } } }),
    ];

    const metadataValues = {
      NUM: 6,
      SEL: '2',
      FLAG: true,
      RES: { current: 5, max: 9 },
    };

    const rollTargets = ['ROLL_NUMB', 'ROLL_RES', 'ROLL_DER'];

    for (const bid of rollTargets) {
      const result = resolveRollNotation(sharedAttributes, metadataValues, bid);
      expect(result.valid).toBe(true);
      expect(result.notation).toContain('1d20');
      expect(result.notation).not.toContain('@');
      expect(result.notation).not.toContain('#');
    }
  });

  it('supports name references sourced from select and derived values', () => {
    const attributes: AttrLike[] = [
      attr({ attr_bid: 'SEL', attr_name: 'Tier Select', attr_abbr: 'TS', attr_type: 'enum' }),
      attr({ attr_bid: 'BASE', attr_name: 'Base', attr_abbr: 'B', attr_type: 'numb' }),
      attr({ attr_bid: 'DER', attr_name: 'Derived Bonus', attr_abbr: 'DB', attr_type: 'derived', attr_meta: { derived: { formula: '@BASE + @SEL' } } }),
      attr({ attr_bid: 'ROLL', attr_name: 'Roll', attr_abbr: 'R', attr_type: 'numb', attr_func: '1d20 + #TierSelect + #DerivedBonus' }),
    ];

    const result = resolveRollNotation(attributes, {
      SEL: '4',
      BASE: 1,
    }, 'ROLL');

    expect(result.valid).toBe(true);
    expect(result.notation).toBe('1d20+4+5');
  });
});
