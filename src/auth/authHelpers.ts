import { connectAccessTokenViaHub } from './connectAccessTokenViaHub';
import { getAccessToken, setAccessToken } from '../supabase/supabaseClient';

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

export const isConnected = (): boolean => {
  return !!getAccessToken();
};

export const ensureConnected = async (): Promise<void> => {
  if (isConnected()) {
    return;
  }

  await connectAccessTokenViaHub();
};

export const clearConnection = () => {
  setAccessToken(null);
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
