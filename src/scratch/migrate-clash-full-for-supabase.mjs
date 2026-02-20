import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const sourcePath = path.join(ROOT, 'src', 'scratch', 'ClashCollection.txt');
const outputJsonPath = path.join(ROOT, 'src', 'scratch', 'ClashCollection-full-bs_forge_creatures.json');
const outputCsvPath = path.join(ROOT, 'src', 'scratch', 'ClashCollection-full-bs_forge_creatures.csv');

const EXT = 'com.battle-system.forge';

const toNumber = (value, fallback = 0) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const abilityMod = (score) => Math.floor((toNumber(score) - 10) / 2);

const proficiencyFromCr = (crRaw) => {
  const cr = toNumber(crRaw, 0);
  if (cr >= 29) return 9;
  if (cr >= 25) return 8;
  if (cr >= 21) return 7;
  if (cr >= 17) return 6;
  if (cr >= 13) return 5;
  if (cr >= 9) return 4;
  if (cr >= 5) return 3;
  return 2;
};

const normalizeText = (value) => {
  if (value === null || value === undefined) return '';
  const raw = String(value).trim();
  if (!raw || /^false$/i.test(raw) || /^null$/i.test(raw)) return '';

  return raw
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/([A-Za-z])\?([A-Za-z])/g, "$1'$2")
    .replace(/(\d)\?(\d)/g, '$1-$2')
    .replace(/\uFFFD/g, "'");
};

const normalizeDiceExpression = (value) => (
  value
    .replace(/\s+/g, '')
    .replace(/−/g, '-')
    .trim()
);

const chipifyActionDescription = (value) => {
  const normalized = normalizeText(value);
  if (!normalized) {
    return normalized;
  }

  return normalized
    .replace(/([+-]\d+)\s+to hit\b/gi, (_match, modifier) => `[1d20${modifier}] to hit`)
    .replace(/\b\d+\s*\((\s*\d+d\d+(?:\s*[+-]\s*(?:\d+d\d+|\d+))*)\)/gi, (_match, dice) => `[${normalizeDiceExpression(dice)}]`)
    .replace(/\((\s*\d+d\d+(?:\s*[+-]\s*(?:\d+d\d+|\d+))*)\)/gi, (_match, dice) => `[${normalizeDiceExpression(dice)}]`)
    .replace(/(?<!\[)\b(\d*d\d+(?:\s*[+-]\s*\d+)?)\b(?!\])/gi, (_match, dice) => `[${normalizeDiceExpression(dice)}]`);
};

const mapActionEntries = (entries, prefix, unitId, label) => {
  if (!Array.isArray(entries) || entries.length === 0) return [];

  return entries
    .map((entry, index) => {
      const name = normalizeText(entry?.name);
      const description = chipifyActionDescription(entry?.description ?? entry?.desc);
      if (!name && !description) return null;

      return {
        id: `${unitId}-${label}-${String(index + 1).padStart(3, '0')}`,
        name: `${prefix} ${name || 'Unnamed'}`,
        description,
      };
    })
    .filter(Boolean);
};

const mapAbilityEntries = (entries, unitId) => {
  if (!Array.isArray(entries) || entries.length === 0) return [];

  return entries
    .map((entry, index) => {
      const name = normalizeText(entry?.name);
      const description = chipifyActionDescription(entry?.description ?? entry?.desc);
      if (!name && !description) return null;

      return {
        id: `${unitId}-abl-${String(index + 1).padStart(3, '0')}`,
        name: name || 'Unnamed',
        description,
      };
    })
    .filter(Boolean);
};

const mapSave = (rawSave, baseScore) => {
  const normalized = normalizeText(rawSave);
  if (normalized === '') return abilityMod(baseScore);
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : abilityMod(baseScore);
};

const toRow = (unit) => {
  const str = toNumber(unit.strScore);
  const dex = toNumber(unit.dexScore);
  const con = toNumber(unit.conScore);
  const intStat = toNumber(unit.intScore);
  const wis = toNumber(unit.wisScore);
  const cha = toNumber(unit.chaScore);

  const actions = [
    ...mapActionEntries(unit.standardActions, '[Standard]', unit.id, 'std'),
    ...mapActionEntries(unit.bonusActions, '[Bonus]', unit.id, 'bon'),
    ...mapActionEntries(unit.reactions, '[Reaction]', unit.id, 'rea'),
    ...mapActionEntries(unit.legendaryActions, '[Legendary]', unit.id, 'leg'),
    ...mapActionEntries(unit.spellActions, '[Spell]', unit.id, 'spl'),
  ];

  const abilities = mapAbilityEntries(unit.specialAbilities, unit.id);

  const metadata = {
    [`${EXT}/name`]: normalizeText(unit.unitName),
    [`${EXT}/Z002`]: normalizeText(unit.unitSize),
    [`${EXT}/Z004`]: normalizeText(unit.unitType),
    [`${EXT}/Z003`]: normalizeText(unit.alignment),
    [`${EXT}/Z007`]: toNumber(unit.armorClass),
    [`${EXT}/Z005`]: toNumber(unit.maxHP),
    [`${EXT}/Z006`]: toNumber(unit.maxHP),
    [`${EXT}/Z017`]: str,
    [`${EXT}/Z018`]: dex,
    [`${EXT}/Z019`]: con,
    [`${EXT}/Z020`]: intStat,
    [`${EXT}/Z021`]: wis,
    [`${EXT}/Z022`]: cha,
    [`${EXT}/Z023`]: mapSave(unit.strSave, str),
    [`${EXT}/Z024`]: mapSave(unit.dexSave, dex),
    [`${EXT}/Z025`]: mapSave(unit.conSave, con),
    [`${EXT}/Z026`]: mapSave(unit.intSave, intStat),
    [`${EXT}/Z027`]: mapSave(unit.wisSave, wis),
    [`${EXT}/Z028`]: mapSave(unit.chaSave, cha),
    [`${EXT}/Z008`]: toNumber(unit.speedWalk),
    [`${EXT}/Z009`]: toNumber(unit.speedSwim),
    [`${EXT}/Z010`]: toNumber(unit.speedBurrow),
    [`${EXT}/Z011`]: toNumber(unit.speedClimb),
    [`${EXT}/Z012`]: toNumber(unit.speedFly),
    [`${EXT}/Z013`]: normalizeText(unit.senses),
    [`${EXT}/Z014`]: normalizeText(unit.skills),
    [`${EXT}/Z015`]: normalizeText(unit.languages),
    [`${EXT}/Z016`]: toNumber(unit.challengeRating),
    [`${EXT}/Z029`]: proficiencyFromCr(unit.challengeRating),
    [`${EXT}/Z030`]: normalizeText(unit.damageVulnerabilities),
    [`${EXT}/Z031`]: normalizeText(unit.damageResistances),
    [`${EXT}/Z032`]: normalizeText(unit.damageImmunities),
    [`${EXT}/Z033`]: normalizeText(unit.conditionImmunities),
    ...(abilities.length > 0 ? { [`${EXT}/Z034`]: abilities } : {}),
    ...(actions.length > 0 ? { [`${EXT}/Z035`]: actions } : {}),
  };

  return {
    external_id: String(unit.id),
    system_slug: 'dnd5e',
    name: normalizeText(unit.unitName),
    author: normalizeText(unit.dataSlug) || 'unknown',
    favorite: false,
    metadata,
    is_active: true,
  };
};

const csvEscape = (value) => {
  const stringValue = String(value ?? '');
  const escaped = stringValue.replace(/"/g, '""');
  return `"${escaped}"`;
};

const sourceRaw = fs.readFileSync(sourcePath, 'utf8');
const sourceData = JSON.parse(sourceRaw);
const rows = Array.isArray(sourceData) ? sourceData.map(toRow) : [];

fs.writeFileSync(outputJsonPath, JSON.stringify(rows, null, 2));

const csvHeader = [
  'external_id',
  'system_slug',
  'name',
  'author',
  'favorite',
  'metadata',
  'is_active',
];

const csvLines = [csvHeader.join(',')];
for (const row of rows) {
  csvLines.push([
    csvEscape(row.external_id),
    csvEscape(row.system_slug),
    csvEscape(row.name),
    csvEscape(row.author),
    csvEscape(row.favorite),
    csvEscape(JSON.stringify(row.metadata)),
    csvEscape(row.is_active),
  ].join(','));
}

fs.writeFileSync(outputCsvPath, csvLines.join('\n'));

console.log(`Wrote ${rows.length} rows:`);
console.log(`- ${outputJsonPath}`);
console.log(`- ${outputCsvPath}`);
