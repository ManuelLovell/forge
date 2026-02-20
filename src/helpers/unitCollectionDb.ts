import Dexie, { type Table } from 'dexie';
import { OwlbearIds } from './Constants';
import { UnitConstants } from '../interfaces/MetadataKeys';

export interface UnitCollectionRecord {
  id: string;
  name: string;
  metadata: Record<string, unknown>;
  author: string;
  favorite: boolean;
  updatedAt: number;
}

export interface UnitCollectionImportSummary {
  created: number;
  updated: number;
  skipped: number;
}

const DB_NAME = 'forgeCollection';
const TABLE_NAME = 'units';
const EXTENSION_PREFIX = `${OwlbearIds.EXTENSIONID}/`;

class ForgeCollectionDb extends Dexie {
  units!: Table<UnitCollectionRecord, string>;

  constructor() {
    super(DB_NAME);
    this.version(1).stores({
      [TABLE_NAME]: 'id,[name+author],name,author,favorite,updatedAt',
    });
  }
}

const db = new ForgeCollectionDb();

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export const filterExtensionMetadata = (metadata: Record<string, unknown>): Record<string, unknown> => {
  const filtered: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(metadata)) {
    if (key.startsWith(EXTENSION_PREFIX)) {
      filtered[key] = value;
    }
  }

  return filtered;
};

const normalizeInputString = (value: unknown): string | null => {
  if (typeof value !== 'string') {
    return null;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
};

const getUnitNameFromMetadata = (metadata: Record<string, unknown>): string | null => {
  return normalizeInputString(metadata[UnitConstants.UNIT_NAME]);
};

const getSafeId = (): string => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
};

export const upsertUnitFromMetadata = async (
  metadata: Record<string, unknown>,
  author: string,
  favoriteOverride?: boolean,
): Promise<'created' | 'updated'> => {
  const normalizedAuthor = normalizeInputString(author);
  if (!normalizedAuthor) {
    throw new Error('Author is required to save a unit configuration.');
  }

  const extensionMetadata = filterExtensionMetadata(metadata);
  const unitName = getUnitNameFromMetadata(extensionMetadata);
  if (!unitName) {
    throw new Error('Unit metadata is missing a valid unit name.');
  }

  const existing = await db.units.where('[name+author]').equals([unitName, normalizedAuthor]).first();
  const now = Date.now();

  if (existing) {
    await db.units.put({
      ...existing,
      name: unitName,
      author: normalizedAuthor,
      metadata: extensionMetadata,
      favorite: typeof favoriteOverride === 'boolean'
        ? favoriteOverride
        : (typeof existing.favorite === 'boolean' ? existing.favorite : false),
      updatedAt: now,
    });
    return 'updated';
  }

  await db.units.add({
    id: getSafeId(),
    name: unitName,
    author: normalizedAuthor,
    metadata: extensionMetadata,
    favorite: typeof favoriteOverride === 'boolean' ? favoriteOverride : false,
    updatedAt: now,
  });

  return 'created';
};

export const getAllUnitCollectionRecords = async (): Promise<UnitCollectionRecord[]> => {
  return db.units.orderBy('name').toArray();
};

export const findUnitCollectionByName = async (name: string): Promise<UnitCollectionRecord[]> => {
  const normalizedName = normalizeInputString(name);
  if (!normalizedName) {
    return [];
  }

  return db.units.where('name').equals(normalizedName).toArray();
};

export const deleteUnitCollectionRecord = async (id: string): Promise<void> => {
  await db.units.delete(id);
};

const tryConvertImportRecord = (
  record: unknown,
): { name: string; author: string; metadata: Record<string, unknown>; favorite: boolean } | null => {
  if (!isRecord(record)) {
    return null;
  }

  const author = normalizeInputString(record.author);
  const metadata = isRecord(record.metadata) ? filterExtensionMetadata(record.metadata) : null;
  const providedName = normalizeInputString(record.name);
  const metadataName = metadata ? getUnitNameFromMetadata(metadata) : null;
  const name = providedName ?? metadataName;
  const favorite = typeof record.favorite === 'boolean' ? record.favorite : false;

  if (!author || !metadata || !name) {
    return null;
  }

  metadata[UnitConstants.UNIT_NAME] = name;

  return {
    name,
    author,
    metadata,
    favorite,
  };
};

export const bulkImportUnitCollection = async (records: unknown[]): Promise<UnitCollectionImportSummary> => {
  const summary: UnitCollectionImportSummary = {
    created: 0,
    updated: 0,
    skipped: 0,
  };

  for (const record of records) {
    const converted = tryConvertImportRecord(record);
    if (!converted) {
      summary.skipped += 1;
      continue;
    }

    const existing = await db.units.where('[name+author]').equals([converted.name, converted.author]).first();
    const now = Date.now();

    if (existing) {
      await db.units.put({
        ...existing,
        name: converted.name,
        author: converted.author,
        metadata: converted.metadata,
        favorite: converted.favorite,
        updatedAt: now,
      });
      summary.updated += 1;
      continue;
    }

    await db.units.add({
      id: getSafeId(),
      name: converted.name,
      author: converted.author,
      metadata: converted.metadata,
      favorite: converted.favorite,
      updatedAt: now,
    });

    summary.created += 1;
  }

  return summary;
};

export const exportUnitCollection = async (): Promise<UnitCollectionRecord[]> => {
  return getAllUnitCollectionRecords();
};
