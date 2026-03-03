import { setAccessToken } from '../supabase/supabaseClient';

const AUTH_HUB_ORIGIN = 'https://www.battle-system.com';
const AUTH_BRIDGE_PATH = '/auth/bridge';
const AUTH_MESSAGE_TYPE = 'BATTLE_SYSTEM_ACCESS_TOKEN';
const POPUP_NAME = 'battle-system-auth-hub';
const POPUP_FEATURES = 'popup=yes,width=520,height=720,resizable=yes,scrollbars=yes,noopener=false,noreferrer=false';
const CONNECT_TIMEOUT_MS = 120000;

interface AccessTokenHubMessage {
  type: string;
  state: string;
  access_token: string;
  expires_at: number | null;
}

export interface ConnectAccessTokenResult {
  accessToken: string;
  expiresAt: number | null;
}

const isHubMessage = (value: unknown): value is AccessTokenHubMessage => {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return typeof candidate.type === 'string'
    && typeof candidate.state === 'string'
    && typeof candidate.access_token === 'string'
    && (typeof candidate.expires_at === 'number' || candidate.expires_at === null);
};

const randomState = (): string => {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
};

export const connectAccessTokenViaHub = async (): Promise<ConnectAccessTokenResult> => {
  const state = randomState();
  const url = new URL(`${AUTH_HUB_ORIGIN}${AUTH_BRIDGE_PATH}`);
  url.searchParams.set('return_origin', window.location.origin);
  url.searchParams.set('state', state);

  const popup = window.open(url.toString(), POPUP_NAME, POPUP_FEATURES);
  if (!popup) {
    throw new Error('Auth popup blocked. Please allow popups and try again.');
  }

  return new Promise<ConnectAccessTokenResult>((resolve, reject) => {
    let settled = false;
    let closeCheckTimer: number | null = null;
    let timeoutTimer: number | null = null;

    const cleanup = () => {
      window.removeEventListener('message', onMessage);
      if (closeCheckTimer !== null) {
        window.clearInterval(closeCheckTimer);
      }
      if (timeoutTimer !== null) {
        window.clearTimeout(timeoutTimer);
      }

      try {
        if (!popup.closed) {
          popup.close();
        }
      } catch {
      }
    };

    const settle = (handler: () => void) => {
      if (settled) {
        return;
      }

      settled = true;
      cleanup();
      handler();
    };

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== AUTH_HUB_ORIGIN) {
        return;
      }

      if (!isHubMessage(event.data)) {
        return;
      }

      const payload = event.data;

      if (payload.type !== AUTH_MESSAGE_TYPE) {
        return;
      }

      if (payload.state !== state) {
        return;
      }

      if (!payload.access_token || (payload.expires_at !== null && !Number.isFinite(payload.expires_at))) {
        settle(() => reject(new Error('Invalid access token payload from auth hub.')));
        return;
      }

      setAccessToken(payload.access_token);

      settle(() => {
        resolve({
          accessToken: payload.access_token,
          expiresAt: typeof payload.expires_at === 'number' ? payload.expires_at : null,
        });
      });
    };

    window.addEventListener('message', onMessage);

    closeCheckTimer = window.setInterval(() => {
      if (popup.closed) {
        settle(() => reject(new Error('Auth popup closed before authentication completed.')));
      }
    }, 250);

    timeoutTimer = window.setTimeout(() => {
      settle(() => reject(new Error('Authentication timed out. Please try again.')));
    }, CONNECT_TIMEOUT_MS);
  });
};
