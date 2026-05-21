/**
 * Mapper utility to convert Clash! creature data to Forge! collection format
 * Maps Clash IUnitInfo schema to Forge UnitCollectionRecord with BID-based metadata
 */

import { UnitCollectionRecord } from '../helpers/unitCollectionDb';
import { buildHpMetadataValue, getHpMetadataKey } from '../helpers/hpAttributeMapping';
import type { SystemAttribute } from '../interfaces/SystemResponse';

/**
 * Clash IUnitInfo schema (flattened structure)
 */
interface ClashUnitInfo {
  id?: string;
  unitName?: string;
  dataSlug?: string;
  unitType?: string;
  unitSize?: string;
  alignment?: string;
  challengeRating?: number;
  experiencePoints?: number;
  unitDesc?: string;
  legendaryDescription?: string;
  
  // Ability scores
  strScore?: number;
  dexScore?: number;
  conScore?: number;
  intScore?: number;
  wisScore?: number;
  chaScore?: number;
  
  // Saving throws
  strSave?: number;
  dexSave?: number;
  conSave?: number;
  intSave?: number;
  wisSave?: number;
  chaSave?: number;
  
  // HP and AC
  currentHp?: number;
  maxHP?: number;
  armorClass?: number;
  
  // Movement speeds
  speedWalk?: number;
  speedSwim?: number;
  speedBurrow?: number;
  speedClimb?: number;
  speedFly?: number;
  
  // Combat stats
  initiative?: number;
  hitDice?: string;
  
  // Skills (individual fields)
  [key: string]: any;
  
  // Actions (multiple types)
  standardActions?: ClashActionEntity[];
  bonusActions?: ClashActionEntity[];
  legendaryActions?: ClashActionEntity[];
  specialAbilities?: ClashActionEntity[];
  reactions?: ClashActionEntity[];
  spellActions?: ClashActionEntity[];
  
  // Other
  languages?: string;
  senses?: string;
  spellList?: string[];
  
  // Resistances/immunities
  damageVulnerabilities?: string;
  damageImmunities?: string;
  damageResistances?: string;
  conditionImmunities?: string;
}

interface ClashActionEntity {
  name?: string;
  desc?: string;
  description?: string;
  attack_bonus?: string | number;
  damage_dice?: string;
  damage_bonus?: string | number;
  [key: string]: any;
}

interface ForgeActionEntity {
  name: string;
  description?: string;
  attack_bonus?: number;
  damage_dice?: string;
  damage_bonus?: number;
  [key: string]: any;
}

interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

interface ClashMigrationOptions {
  hp?: {
    currentHpBid: string;
    maxHpBid: string;
    attributes: SystemAttribute[];
  };
}

/**
 * Migrate a single Clash creature to Forge collection format
 */
export function migrateClashToForge(clashData: unknown, options?: ClashMigrationOptions): UnitCollectionRecord | null {
  if (!clashData || typeof clashData !== 'object') {
    return null;
  }

  const clash = clashData as ClashUnitInfo;

  // Validate minimum required fields
  if (!clash.unitName || typeof clash.unitName !== 'string') {
    return null;
  }

  const forgeRecord: UnitCollectionRecord = {
    id: clash.id || generateId(),
    name: clash.unitName,
    author: clash.dataSlug || 'Imported from Clash',
    favorite: false,
    metadata: {},
    updatedAt: Date.now(),
  };

  const metadata = forgeRecord.metadata as Record<string, unknown>;
  const PREFIX = 'com.battle-system.forge';
  const hpConfig = options?.hp;
  const hpAttributesByBid = new Map((hpConfig?.attributes || []).map((attribute) => [attribute.attr_bid, attribute]));
  const clashMaxHp = typeof clash.maxHP === 'number' ? clash.maxHP : null;
  const clashCurrentHp = typeof clash.currentHp === 'number'
    ? clash.currentHp
    : clashMaxHp;

  // Map basic attributes
  if (hpConfig && clashMaxHp !== null) {
    const resolvedCurrentHp = clashCurrentHp ?? clashMaxHp;
    const currentKey = getHpMetadataKey(hpConfig.currentHpBid);
    const maxKey = getHpMetadataKey(hpConfig.maxHpBid);
    const currentAttribute = hpAttributesByBid.get(hpConfig.currentHpBid) || null;
    const maxAttribute = hpAttributesByBid.get(hpConfig.maxHpBid) || null;

    metadata[currentKey] = buildHpMetadataValue(
      metadata[currentKey],
      currentAttribute,
      'current',
      resolvedCurrentHp,
      clashMaxHp,
    );

    metadata[maxKey] = buildHpMetadataValue(
      metadata[maxKey],
      maxAttribute,
      'max',
      clashMaxHp,
      resolvedCurrentHp,
    );
  } else {
    if (clashCurrentHp !== null) {
      metadata[`${PREFIX}/Z005`] = clashCurrentHp;
    }

    if (clashMaxHp !== null) {
      metadata[`${PREFIX}/Z006`] = clashMaxHp;
    }
  }

  if (clash.armorClass !== undefined && clash.armorClass !== null) {
    metadata[`${PREFIX}/Z007`] = clash.armorClass;
  }

  // Map ability scores (Z017-Z022)
  const abilityScoreMap: Record<string, string> = {
    strScore: 'Z017',
    dexScore: 'Z018',
    conScore: 'Z019',
    intScore: 'Z020',
    wisScore: 'Z021',
    chaScore: 'Z022',
  };

  Object.entries(abilityScoreMap).forEach(([clashKey, bid]) => {
    if (clash[clashKey] !== undefined && clash[clashKey] !== null) {
      metadata[`${PREFIX}/${bid}`] = clash[clashKey];
    }
  });

  // Map saving throws (Z023-Z028)
  const savingThrowMap: Record<string, string> = {
    strSave: 'Z023',
    dexSave: 'Z024',
    conSave: 'Z025',
    intSave: 'Z026',
    wisSave: 'Z027',
    chaSave: 'Z028',
  };

  Object.entries(savingThrowMap).forEach(([clashKey, bid]) => {
    if (clash[clashKey] !== undefined && clash[clashKey] !== null) {
      metadata[`${PREFIX}/${bid}`] = clash[clashKey];
    }
  });

  // Map movement speeds (Z008-Z012)
  const speedMap: Record<string, string> = {
    speedWalk: 'Z008',
    speedSwim: 'Z009',
    speedBurrow: 'Z010',
    speedClimb: 'Z011',
    speedFly: 'Z012',
  };

  Object.entries(speedMap).forEach(([clashKey, bid]) => {
    if (clash[clashKey] !== undefined && clash[clashKey] !== null) {
      metadata[`${PREFIX}/${bid}`] = clash[clashKey];
    }
  });

  // Map other basic attributes
  const basicAttributeMap: Record<string, string> = {
    unitSize: 'Z002',
    unitType: 'Z004',
    alignment: 'Z003',
    languages: 'Z015',
    senses: 'Z013',
    challengeRating: 'Z016',
    damageVulnerabilities: 'Z030',
    damageResistances: 'Z031',
    damageImmunities: 'Z032',
    conditionImmunities: 'Z033',
  };

  Object.entries(basicAttributeMap).forEach(([clashKey, bid]) => {
    if (clash[clashKey] !== undefined && clash[clashKey] !== null) {
      metadata[`${PREFIX}/${bid}`] = clash[clashKey];
    }
  });

  // Combine all actions into Z035 with type tags
  const combinedActions = combineAndTagActions(clash);
  if (combinedActions.length > 0) {
    metadata[`${PREFIX}/Z035`] = combinedActions;
  }

  // Map special abilities to Z034 if they exist
  if (clash.specialAbilities && Array.isArray(clash.specialAbilities)) {
    metadata[`${PREFIX}/Z034`] = clash.specialAbilities;
  }

  // Store unmapped fields in custom metadata for preservation
  if (clash.unitDesc) {
    metadata[`${PREFIX}/_clash_unitDesc`] = clash.unitDesc;
  }
  if (clash.legendaryDescription) {
    metadata[`${PREFIX}/_clash_legendaryDescription`] = clash.legendaryDescription;
  }
  if (clash.hitDice) {
    metadata[`${PREFIX}/_clash_hitDice`] = clash.hitDice;
  }
  if (clash.experiencePoints) {
    metadata[`${PREFIX}/_clash_experiencePoints`] = clash.experiencePoints;
  }

  return forgeRecord;
}

/**
 * Combine all action types into Z035 with type tags and grouping
 * Groups: Standard Actions → Bonus Actions → Reactions → Legendary Actions → Spells
 */
function combineAndTagActions(clash: ClashUnitInfo): ForgeActionEntity[] {
  const combined: ForgeActionEntity[] = [];

  // Standard actions
  if (clash.standardActions && Array.isArray(clash.standardActions)) {
    clash.standardActions.forEach((action) => {
      const normalized = normalizeAction(action, '[Action]');
      if (normalized) combined.push(normalized);
    });
  }

  // Bonus actions
  if (clash.bonusActions && Array.isArray(clash.bonusActions)) {
    clash.bonusActions.forEach((action) => {
      const normalized = normalizeAction(action, '[Bonus]');
      if (normalized) combined.push(normalized);
    });
  }

  // Reactions
  if (clash.reactions && Array.isArray(clash.reactions)) {
    clash.reactions.forEach((action) => {
      const normalized = normalizeAction(action, '[Reaction]');
      if (normalized) combined.push(normalized);
    });
  }

  // Legendary actions
  if (clash.legendaryActions && Array.isArray(clash.legendaryActions)) {
    clash.legendaryActions.forEach((action) => {
      const normalized = normalizeAction(action, '[Legendary]');
      if (normalized) combined.push(normalized);
    });
  }

  // Spell actions
  if (clash.spellActions && Array.isArray(clash.spellActions)) {
    clash.spellActions.forEach((action) => {
      const normalized = normalizeAction(action, '[Spell]');
      if (normalized) combined.push(normalized);
    });
  }

  // Add spellList as separate spell entries if not already covered
  if (clash.spellList && Array.isArray(clash.spellList)) {
    clash.spellList.forEach((spellName) => {
      if (typeof spellName === 'string' && spellName.trim()) {
        combined.push({
          name: `[Spell] ${spellName}`,
          description: spellName,
        });
      }
    });
  }

  return combined;
}

/**
 * Normalize a single action entity
 */
function normalizeAction(action: ClashActionEntity, typeTag: string): ForgeActionEntity | null {
  if (!action || typeof action !== 'object') {
    return null;
  }

  const name = (action.name || '').trim();
  if (!name) {
    return null;
  }

  const normalized: ForgeActionEntity = {
    name: `${typeTag} ${name}`,
    description: normalizeRollNotation(action.description || action.desc || ''),
  };

  // Parse attack bonus
  if (action.attack_bonus !== undefined && action.attack_bonus !== null) {
    const parsed = parseBonus(action.attack_bonus);
    if (parsed !== null) {
      normalized.attack_bonus = parsed;
    }
  }

  // Preserve damage info
  if (action.damage_dice) {
    normalized.damage_dice = String(action.damage_dice);
  }

  if (action.damage_bonus !== undefined && action.damage_bonus !== null) {
    const parsed = parseBonus(action.damage_bonus);
    if (parsed !== null) {
      normalized.damage_bonus = parsed;
    }
  }

  // Preserve other fields
  Object.keys(action).forEach((key) => {
    if (!['name', 'desc', 'description', 'attack_bonus', 'damage_dice', 'damage_bonus'].includes(key)) {
      normalized[key] = action[key];
    }
  });

  return normalized;
}

/**
 * Parse a bonus value from string format ("+5") to number
 */
function parseBonus(value: unknown): number | null {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    const parsed = parseInt(trimmed, 10);
    if (!isNaN(parsed)) {
      return parsed;
    }
  }

  return null;
}

/**
 * Convert Clash roll notation to Forge bracket notation in action text.
 * Examples:
 * - "+2 to hit" -> "[1d20+2] to hit"
 * - "(1d6)" -> "[1d6]"
 */
function normalizeRollNotation(text: string): string {
  if (!text) {
    return '';
  }

  // Convert " +2 to hit" / "-1 to hit" to " [1d20+2] to hit"
  let normalized = text.replace(
    /(^|\s)([+-]\s*\d+)\s+to\s+hit\b/gi,
    (_match, leading, bonus) => {
      const compactBonus = String(bonus).replace(/\s+/g, '');
      return `${leading}[1d20${compactBonus}] to hit`;
    },
  );

  // Convert dice in parentheses, e.g. "(1d6)" or "(2d8 + 3)" to brackets.
  normalized = normalized.replace(
    /\(\s*((?:\d+\s*)?d\s*\d+(?:\s*[+-]\s*\d+)?)\s*\)/gi,
    (_match, diceExpr) => {
      const compactDice = String(diceExpr).replace(/\s+/g, '');
      return `[${compactDice}]`;
    },
  );

  return normalized;
}

/**
 * Generate a unique ID for a creature
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Validate Clash data structure
 */
export function validateClashData(data: unknown): ValidationResult {
  const result: ValidationResult = {
    valid: true,
    errors: [],
    warnings: [],
  };

  if (!data || typeof data !== 'object') {
    result.valid = false;
    result.errors.push('Data must be a valid object');
    return result;
  }

  const clash = data as ClashUnitInfo;

  // Check required fields
  if (!clash.unitName || typeof clash.unitName !== 'string') {
    result.valid = false;
    result.errors.push('Missing required field: unitName');
  }

  // Validate numeric fields
  const numericFields = [
    'strScore', 'dexScore', 'conScore', 'intScore', 'wisScore', 'chaScore',
    'strSave', 'dexSave', 'conSave', 'intSave', 'wisSave', 'chaSave',
    'currentHp', 'maxHP', 'armorClass', 'challengeRating', 'experiencePoints',
    'speedWalk', 'speedSwim', 'speedBurrow', 'speedClimb', 'speedFly',
  ];

  numericFields.forEach((field) => {
    if (clash[field] !== undefined && typeof clash[field] !== 'number') {
      result.warnings.push(`Field "${field}" should be numeric but got: ${typeof clash[field]}`);
    }
  });

  // Validate array fields
  const arrayFields = ['standardActions', 'bonusActions', 'legendaryActions', 'reactions', 'spellActions', 'spellList', 'specialAbilities'];

  arrayFields.forEach((field) => {
    if (clash[field] !== undefined && !Array.isArray(clash[field])) {
      result.warnings.push(`Field "${field}" should be an array but got: ${typeof clash[field]}`);
    }
  });

  return result;
}

/**
 * Generate a migration preview for display in UI
 */
export function generateMigrationPreview(clash: ClashUnitInfo) {
  const actionCount = (clash.standardActions?.length || 0)
    + (clash.bonusActions?.length || 0)
    + (clash.legendaryActions?.length || 0)
    + (clash.reactions?.length || 0)
    + (clash.spellActions?.length || 0);

  const abilityCount = clash.specialAbilities?.length || 0;

  return {
    name: clash.unitName || 'Unknown',
    author: clash.dataSlug || 'Imported from Clash',
    hp: `${clash.currentHp || 0}/${clash.maxHP || 0}`,
    ac: clash.armorClass || 'N/A',
    type: clash.unitType || 'Unknown',
    size: clash.unitSize || 'N/A',
    cr: clash.challengeRating || 'N/A',
    actions: actionCount,
    abilities: abilityCount,
  };
}

/**
 * Migrate multiple Clash creatures from JSON array
 */
export function migrateClashCollectionFromJson(
  jsonData: unknown[],
  options?: ClashMigrationOptions,
): {
  records: UnitCollectionRecord[];
  skipped: number;
  errors: string[];
} {
  const records: UnitCollectionRecord[] = [];
  const errors: string[] = [];
  let skipped = 0;

  if (!Array.isArray(jsonData)) {
    errors.push('JSON data must be an array');
    return { records, skipped, errors };
  }

  jsonData.forEach((item, index) => {
    const validation = validateClashData(item);

    if (!validation.valid) {
      skipped += 1;
      errors.push(`Item ${index}: ${validation.errors.join(', ')}`);
      return;
    }

    const migrated = migrateClashToForge(item, options);
    if (migrated) {
      records.push(migrated);
    } else {
      skipped += 1;
      errors.push(`Item ${index}: Failed to migrate creature`);
    }
  });

  return { records, skipped, errors };
}
