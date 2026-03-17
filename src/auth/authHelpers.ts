import { connectAccessTokenViaHub } from './connectAccessTokenViaHub';
import { getAccessToken, setAccessToken } from '../supabase/supabaseClient';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '../supabase/supabaseClient';
import { supabase } from '../supabase/supabaseClient';

const AUTH_STORAGE_PREFIX = 'forge.auth';
const SESSION_ACCESS_TOKEN_KEY = `${AUTH_STORAGE_PREFIX}.accessToken`;
const SESSION_EXPIRES_AT_KEY = `${AUTH_STORAGE_PREFIX}.expiresAt`;
const SESSION_TIER_KEY = `${AUTH_STORAGE_PREFIX}.tier`;
const LOCAL_EVER_CONNECTED_KEY = `${AUTH_STORAGE_PREFIX}.everConnected`;
const SESSION_AUTO_RETRY_KEY = `${AUTH_STORAGE_PREFIX}.autoRetryAttempted`;

export type UserTier = 'free' | 'premium';
export type AuthStatusSnapshot = {
  connected: boolean;
  tier: UserTier;
  premiumAuthorized: boolean;
};

let activeUserTier: UserTier = 'free';
const authStatusListeners = new Set<(status: AuthStatusSnapshot) => void>();

type ProfileEntitlementsRow = {
  tier?: unknown;
  max_attributes?: unknown;
  max_systems?: unknown;
  can_share?: unknown;
  patreon_status?: unknown;
  premium_expires_at?: unknown;
};

type AuthIdentity = {
  id: string;
  email: string | null;
};

const hasUnauthorizedText = (value: string): boolean => {
  const lower = value.toLowerCase();
  return lower.includes('401')
    || lower.includes('unauthorized')
    || lower.includes('jwt')
    || lower.includes('token');
};

const isUnauthorizedError = (error: unknown): boolean => {
  if (!error || typeof error !== 'object') {
    return false;
  }

  const candidate = error as Record<string, unknown>;

  if (typeof candidate.status === 'number' && candidate.status === 401) {
    return true;
  }

  if (typeof candidate.code === 'string' && hasUnauthorizedText(candidate.code)) {
    return true;
  }

  if (typeof candidate.message === 'string' && hasUnauthorizedText(candidate.message)) {
    return true;
  }

  if (typeof candidate.error === 'string' && hasUnauthorizedText(candidate.error)) {
    return true;
  }

  return false;
};

const getResponseError = (result: unknown): unknown => {
  if (!result || typeof result !== 'object') {
    return null;
  }

  const candidate = result as Record<string, unknown>;
  return candidate.error ?? null;
};

const parseExpiresAtMs = (value: unknown): number | null => {
  if (value === null || value === undefined || value === '') {
    return null;
  }

  const numeric = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(numeric)) {
    return null;
  }

  return numeric > 1_000_000_000_000 ? numeric : numeric * 1000;
};

const toUserTier = (value: unknown): UserTier => {
  if (typeof value !== 'string') {
    return 'free';
  }

  const normalized = value.trim().toLowerCase();

  if (normalized === 'free') {
    return 'free';
  }

  return normalized === 'premium' ? 'premium' : 'free';
};

const toNumericOrNull = (value: unknown): number | null => {
  const numeric = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(numeric) ? numeric : null;
};

const resolveTierFromEntitlements = (row: ProfileEntitlementsRow): UserTier => {
  const directTier = toUserTier(row.tier);
  if (directTier === 'premium') {
    return 'premium';
  }

  const status = typeof row.patreon_status === 'string' ? row.patreon_status.trim().toLowerCase() : '';
  if (status === 'active' || status === 'premium') {
    return 'premium';
  }

  if (row.can_share === true) {
    return 'premium';
  }

  const maxAttributes = toNumericOrNull(row.max_attributes);
  if (maxAttributes !== null && maxAttributes > 50) {
    return 'premium';
  }

  const maxSystems = toNumericOrNull(row.max_systems);
  if (maxSystems !== null && maxSystems > 2) {
    return 'premium';
  }

  if (typeof row.premium_expires_at === 'string' && row.premium_expires_at.trim().length > 0) {
    const expiresAt = Date.parse(row.premium_expires_at);
    if (Number.isFinite(expiresAt) && expiresAt > Date.now()) {
      return 'premium';
    }
  }

  return 'free';
};

const loadAuthIdentityFromToken = async (): Promise<AuthIdentity | null> => {
  const token = getAccessToken();
  if (!token) {
    return null;
  }

  try {
    const { data: userResult, error: userError } = await supabase.auth.getUser(token);
    if (!userError && userResult?.user?.id) {
      return {
        id: userResult.user.id,
        email: userResult.user.email?.trim().toLowerCase() ?? null,
      };
    }
  } catch {
  }

  try {
    const response = await window.fetch(`${SUPABASE_URL}/auth/v1/user`, {
      method: 'GET',
      headers: {
        apikey: SUPABASE_ANON_KEY,
        authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    const user = (await response.json()) as { id?: unknown; email?: unknown };
    if (typeof user.id !== 'string' || user.id.trim().length === 0) {
      return null;
    }

    return {
      id: user.id,
      email: typeof user.email === 'string' ? user.email.trim().toLowerCase() : null,
    };
  } catch {
    return null;
  }
};

const setUserTier = (tier: UserTier) => {
  activeUserTier = tier;
  sessionStorage.setItem(SESSION_TIER_KEY, tier);
  const snapshot: AuthStatusSnapshot = {
    connected: !!getAccessToken(),
    tier: activeUserTier,
    premiumAuthorized: !!getAccessToken() && activeUserTier === 'premium',
  };

  authStatusListeners.forEach((listener) => {
    try {
      listener(snapshot);
    } catch {
    }
  });
};

const restoreTierFromSessionStorage = () => {
  const storedTier = sessionStorage.getItem(SESSION_TIER_KEY);
  setUserTier(toUserTier(storedTier));
};

const loadUserTierFromProfile = async (): Promise<UserTier> => {
  const identity = await loadAuthIdentityFromToken();

  if (!identity) {
    return 'free';
  }

  const userId = identity.id;
  const userEmail = identity.email;

  const entitlementSelect = 'tier,max_attributes,max_systems,can_share,patreon_status,premium_expires_at';

  const { data: byAuthId } = await supabase
    .from('users')
    .select(entitlementSelect)
    .eq('auth_id', userId)
    .limit(1)
    .maybeSingle();

  if (byAuthId && typeof byAuthId === 'object') {
    return resolveTierFromEntitlements(byAuthId as ProfileEntitlementsRow);
  }

  const { data: byId } = await supabase
    .from('users')
    .select(entitlementSelect)
    .eq('id', userId)
    .limit(1)
    .maybeSingle();

  if (byId && typeof byId === 'object') {
    return resolveTierFromEntitlements(byId as ProfileEntitlementsRow);
  }

  if (userEmail) {
    const { data: byPatreonId } = await supabase
      .from('users')
      .select(entitlementSelect)
      .eq('patreon_id', userEmail)
      .limit(1)
      .maybeSingle();

    if (byPatreonId && typeof byPatreonId === 'object') {
      return resolveTierFromEntitlements(byPatreonId as ProfileEntitlementsRow);
    }
  }

  return 'free';
};

const refreshTierFromCurrentSession = async (): Promise<UserTier> => {
  try {
    const resolvedTier = await loadUserTierFromProfile();
    setUserTier(resolvedTier);
    return resolvedTier;
  } catch {
    setUserTier('free');
    return 'free';
  }
};

const persistConnectionSnapshot = (token: string, expiresAt: number | null) => {
  sessionStorage.setItem(SESSION_ACCESS_TOKEN_KEY, token);
  sessionStorage.setItem(SESSION_EXPIRES_AT_KEY, expiresAt === null ? '' : String(expiresAt));
  localStorage.setItem(LOCAL_EVER_CONNECTED_KEY, '1');
};

const clearConnectionSnapshot = () => {
  sessionStorage.removeItem(SESSION_ACCESS_TOKEN_KEY);
  sessionStorage.removeItem(SESSION_EXPIRES_AT_KEY);
  sessionStorage.removeItem(SESSION_TIER_KEY);
};

const hasEverConnected = (): boolean => {
  return localStorage.getItem(LOCAL_EVER_CONNECTED_KEY) === '1';
};

const restoreTokenFromSessionStorage = (): boolean => {
  const token = sessionStorage.getItem(SESSION_ACCESS_TOKEN_KEY);
  if (!token) {
    return false;
  }

  const expiresAtRaw = sessionStorage.getItem(SESSION_EXPIRES_AT_KEY);
  const expiresAtMs = parseExpiresAtMs(expiresAtRaw);

  if (expiresAtMs !== null && expiresAtMs <= Date.now()) {
    clearConnectionSnapshot();
    activeUserTier = 'free';
    return false;
  }

  setAccessToken(token);
  restoreTierFromSessionStorage();
  return true;
};

export const connectBattleSystem = async (): Promise<void> => {
  const result = await connectAccessTokenViaHub();
  persistConnectionSnapshot(result.accessToken, result.expiresAt);
  await refreshTierFromCurrentSession();
};

const isTokenValidWithSupabase = async (token: string): Promise<boolean> => {
  try {
    const response = await window.fetch(`${SUPABASE_URL}/auth/v1/user`, {
      method: 'GET',
      headers: {
        apikey: SUPABASE_ANON_KEY,
        authorization: `Bearer ${token}`,
      },
    });

    return response.ok;
  } catch {
    return false;
  }
};

export const validateCurrentConnection = async (): Promise<boolean> => {
  const token = getAccessToken();
  if (!token) {
    setUserTier('free');
    return false;
  }

  const valid = await isTokenValidWithSupabase(token);
  if (!valid) {
    clearConnection();
    return false;
  }

  await refreshTierFromCurrentSession();

  return true;
};

export const isConnected = (): boolean => {
  return !!getAccessToken();
};

export const getUserTier = (): UserTier => {
  return activeUserTier;
};

export const getAuthStatusSnapshot = (): AuthStatusSnapshot => {
  const connected = isConnected();
  const tier = getUserTier();
  return {
    connected,
    tier,
    premiumAuthorized: connected && tier === 'premium',
  };
};

export const subscribeAuthStatus = (listener: (status: AuthStatusSnapshot) => void): (() => void) => {
  authStatusListeners.add(listener);
  return () => {
    authStatusListeners.delete(listener);
  };
};

export const isPremiumAuthorized = (): boolean => {
  return isConnected() && activeUserTier === 'premium';
};

export const ensureConnected = async (): Promise<void> => {
  if (isConnected()) {
    return;
  }

  await connectBattleSystem();
};

export const clearConnection = () => {
  setAccessToken(null);
  setUserTier('free');
  clearConnectionSnapshot();
};

export const initializeAuthOnStartup = async (): Promise<void> => {
  if (isConnected()) {
    await validateCurrentConnection();
    if (isConnected()) {
      return;
    }
  }

  const restored = restoreTokenFromSessionStorage();
  if (restored) {
    const stillValid = await validateCurrentConnection();
    if (stillValid) {
      return;
    }
  }

  if (!hasEverConnected()) {
    return;
  }

  if (sessionStorage.getItem(SESSION_AUTO_RETRY_KEY) === '1') {
    return;
  }

  sessionStorage.setItem(SESSION_AUTO_RETRY_KEY, '1');

  try {
    await connectBattleSystem();
  } catch {
  }
};

export const hydrateAuthFromSession = async (): Promise<boolean> => {
  if (isConnected()) {
    return await validateCurrentConnection();
  }

  const restored = restoreTokenFromSessionStorage();
  if (!restored) {
    return false;
  }

  return await validateCurrentConnection();
};

export const withSupabaseAuthRetry = async <T>(operation: () => Promise<T>): Promise<T> => {
  try {
    const firstResult = await operation();
    const firstError = getResponseError(firstResult);

    if (!isUnauthorizedError(firstError)) {
      return firstResult;
    }
  } catch (error) {
    if (!isUnauthorizedError(error)) {
      throw error;
    }
  }

  clearConnection();
  await ensureConnected();

  const retryResult = await operation();
  const retryError = getResponseError(retryResult);

  if (isUnauthorizedError(retryError)) {
    throw retryError;
  }

  return retryResult;
};
