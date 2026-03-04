import { UnitConstants } from '../interfaces/MetadataKeys';
import { isConnected, withSupabaseAuthRetry } from '../auth/authHelpers';
import { supabase } from '../supabase/supabaseClient';
import { filterExtensionMetadata, type UnitCollectionRecord } from './unitCollectionDb';

const USER_TABLE_NAME = 'bs_forge_user_collection';
const SHARED_TABLE_NAME = 'bs_forge_creatures';

type SupabaseUserCollectionRow = {
  id: string;
  name: string;
  author: string;
  favorite: boolean | null;
  metadata: Record<string, unknown> | null;
  updated_at: string | null;
};

type SupabaseSharedCollectionRow = {
  external_id: string;
  name: string;
  author: string;
  favorite: boolean | null;
  metadata: Record<string, unknown> | null;
  is_active: boolean | null;
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

const toTimestamp = (value: string | null): number => {
  if (!value) {
    return 0;
  }

  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const toUnitCollectionRecord = (row: SupabaseUserCollectionRow): UnitCollectionRecord | null => {
  if (!row || typeof row.name !== 'string' || typeof row.author !== 'string') {
    return null;
  }

  const metadata = row.metadata && typeof row.metadata === 'object' && !Array.isArray(row.metadata)
    ? filterExtensionMetadata(row.metadata)
    : null;

  if (!metadata) {
    return null;
  }

  return {
    id: row.id,
    name: row.name,
    author: row.author,
    favorite: row.favorite === true,
    metadata,
    updatedAt: toTimestamp(row.updated_at),
  };
};

export const searchRemoteUnitCollection = async (query: string): Promise<UnitCollectionRecord[]> => {
  const trimmed = query.trim();
  if (!trimmed || !isConnected()) {
    return [];
  }

  const response = await withSupabaseAuthRetry(async () => {
    return supabase
      .from(USER_TABLE_NAME)
      .select('id,name,author,favorite,metadata,updated_at')
      .or(`name.ilike.%${trimmed}%,author.ilike.%${trimmed}%`)
      .order('name', { ascending: true })
      .limit(250);
  });

  if (response.error) {
    throw response.error;
  }

  const rows = (response.data ?? []) as SupabaseUserCollectionRow[];
  return rows
    .map(toUnitCollectionRecord)
    .filter((record): record is UnitCollectionRecord => !!record);
};

export const findRemoteUnitCollectionByNames = async (names: string[]): Promise<UnitCollectionRecord[]> => {
  if (!isConnected()) {
    return [];
  }

  const normalizedNames = Array.from(new Set(
    names
      .map((name) => name.trim())
      .filter((name) => name.length > 0),
  ));

  if (normalizedNames.length === 0) {
    return [];
  }

  const response = await withSupabaseAuthRetry(async () => {
    return supabase
      .from(USER_TABLE_NAME)
      .select('id,name,author,favorite,metadata,updated_at')
      .in('name', normalizedNames)
      .limit(250);
  });

  if (response.error) {
    throw response.error;
  }

  const rows = (response.data ?? []) as SupabaseUserCollectionRow[];
  return rows
    .map(toUnitCollectionRecord)
    .filter((record): record is UnitCollectionRecord => !!record);
};

export const upsertRemoteUnitFromMetadata = async (
  metadata: Record<string, unknown>,
  author: string,
  favoriteOverride?: boolean,
): Promise<'created' | 'updated'> => {
  if (!isConnected()) {
    throw new Error('User is not connected.');
  }

  const normalizedAuthor = normalizeInputString(author);
  if (!normalizedAuthor) {
    throw new Error('Author is required to save a unit configuration.');
  }

  const extensionMetadata = filterExtensionMetadata(metadata);
  const unitName = getUnitNameFromMetadata(extensionMetadata);
  if (!unitName) {
    throw new Error('Unit metadata is missing a valid unit name.');
  }

  const existingResponse = await withSupabaseAuthRetry(async () => {
    return supabase
      .from(USER_TABLE_NAME)
      .select('id,favorite')
      .eq('name', unitName)
      .eq('author', normalizedAuthor)
      .order('updated_at', { ascending: false })
      .limit(1)
      .maybeSingle();
  });

  if (existingResponse.error) {
    throw existingResponse.error;
  }

  const existing = existingResponse.data as { id: string; favorite: boolean | null } | null;

  if (existing?.id) {
    const updateResponse = await withSupabaseAuthRetry(async () => {
      return supabase
        .from(USER_TABLE_NAME)
        .update({
          name: unitName,
          author: normalizedAuthor,
          metadata: extensionMetadata,
          favorite: typeof favoriteOverride === 'boolean'
            ? favoriteOverride
            : (typeof existing.favorite === 'boolean' ? existing.favorite : false),
        })
        .eq('id', existing.id)
        .select('id')
        .single();
    });

    if (updateResponse.error) {
      throw updateResponse.error;
    }

    return 'updated';
  }

  const insertResponse = await withSupabaseAuthRetry(async () => {
    return supabase
      .from(USER_TABLE_NAME)
      .insert({
        name: unitName,
        author: normalizedAuthor,
        metadata: extensionMetadata,
        favorite: typeof favoriteOverride === 'boolean' ? favoriteOverride : false,
      })
      .select('id')
      .single();
  });

  if (insertResponse.error) {
    throw insertResponse.error;
  }

  return 'created';
};

export const deleteRemoteUnitCollectionRecord = async (id: string): Promise<void> => {
  if (!isConnected()) {
    throw new Error('User is not connected.');
  }

  const response = await withSupabaseAuthRetry(async () => {
    return supabase
      .from(USER_TABLE_NAME)
      .delete()
      .eq('id', id);
  });

  if (response.error) {
    throw response.error;
  }
};

export const searchSharedUnitCollection = async (query: string): Promise<UnitCollectionRecord[]> => {
  const trimmed = query.trim();
  if (!trimmed) {
    return [];
  }

  const { data, error } = await supabase
    .from(SHARED_TABLE_NAME)
    .select('external_id,name,author,favorite,metadata,is_active')
    .eq('is_active', true)
    .or(`name.ilike.%${trimmed}%,author.ilike.%${trimmed}%`)
    .limit(250);

  if (error) {
    throw error;
  }

  const rows = (data ?? []) as SupabaseSharedCollectionRow[];
  return rows
    .filter((row) => row && typeof row.name === 'string' && typeof row.author === 'string')
    .map((row) => ({
      id: row.external_id,
      name: row.name,
      author: row.author,
      favorite: row.favorite === true,
      metadata: (row.metadata && typeof row.metadata === 'object' && !Array.isArray(row.metadata))
        ? filterExtensionMetadata(row.metadata)
        : {},
      updatedAt: 0,
    }));
};

export const findSharedUnitCollectionByNames = async (names: string[]): Promise<UnitCollectionRecord[]> => {
  const normalizedNames = Array.from(new Set(
    names
      .map((name) => name.trim())
      .filter((name) => name.length > 0),
  ));

  if (normalizedNames.length === 0) {
    return [];
  }

  const { data, error } = await supabase
    .from(SHARED_TABLE_NAME)
    .select('external_id,name,author,favorite,metadata,is_active')
    .eq('is_active', true)
    .in('name', normalizedNames)
    .limit(250);

  if (error) {
    throw error;
  }

  const rows = (data ?? []) as SupabaseSharedCollectionRow[];
  return rows
    .filter((row) => row && typeof row.name === 'string' && typeof row.author === 'string')
    .map((row) => ({
      id: row.external_id,
      name: row.name,
      author: row.author,
      favorite: row.favorite === true,
      metadata: (row.metadata && typeof row.metadata === 'object' && !Array.isArray(row.metadata))
        ? filterExtensionMetadata(row.metadata)
        : {},
      updatedAt: 0,
    }));
};
