import { connectAccessTokenViaHub } from './connectAccessTokenViaHub';
import { getAccessToken, setAccessToken } from '../supabase/supabaseClient';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '../supabase/supabaseClient';

const AUTH_STORAGE_PREFIX = 'forge.auth';
const SESSION_ACCESS_TOKEN_KEY = `${AUTH_STORAGE_PREFIX}.accessToken`;
const SESSION_EXPIRES_AT_KEY = `${AUTH_STORAGE_PREFIX}.expiresAt`;
const LOCAL_EVER_CONNECTED_KEY = `${AUTH_STORAGE_PREFIX}.everConnected`;
const SESSION_AUTO_RETRY_KEY = `${AUTH_STORAGE_PREFIX}.autoRetryAttempted`;

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

const persistConnectionSnapshot = (token: string, expiresAt: number | null) => {
  sessionStorage.setItem(SESSION_ACCESS_TOKEN_KEY, token);
  sessionStorage.setItem(SESSION_EXPIRES_AT_KEY, expiresAt === null ? '' : String(expiresAt));
  localStorage.setItem(LOCAL_EVER_CONNECTED_KEY, '1');
};

const clearConnectionSnapshot = () => {
  sessionStorage.removeItem(SESSION_ACCESS_TOKEN_KEY);
  sessionStorage.removeItem(SESSION_EXPIRES_AT_KEY);
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
    return false;
  }

  setAccessToken(token);
  return true;
};

export const connectBattleSystem = async (): Promise<void> => {
  const result = await connectAccessTokenViaHub();
  persistConnectionSnapshot(result.accessToken, result.expiresAt);
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
    return false;
  }

  const valid = await isTokenValidWithSupabase(token);
  if (!valid) {
    clearConnection();
    return false;
  }

  return true;
};

export const isConnected = (): boolean => {
  return !!getAccessToken();
};

export const ensureConnected = async (): Promise<void> => {
  if (isConnected()) {
    return;
  }

  await connectBattleSystem();
};

export const clearConnection = () => {
  setAccessToken(null);
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
