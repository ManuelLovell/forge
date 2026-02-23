import OBR from '@owlbear-rodeo/sdk';
import { DATA_STORED_IN_ROOM } from './Constants';
import { SettingsConstants } from '../interfaces/MetadataKeys';

const DISCORD_WEBHOOK_REGEX = /^https:\/\/(discord\.com|discordapp\.com)\/api\/webhooks?\/.+/i;

export const isValidDiscordWebhookUrl = (value: string): boolean => {
  if (typeof value !== 'string') {
    return false;
  }

  return DISCORD_WEBHOOK_REGEX.test(value.trim());
};

export const sendDiscordWebhookMessage = async (
  message: string,
  optionalUser?: string,
): Promise<void> => {
  if (!OBR.isAvailable || typeof message !== 'string' || message.trim().length === 0) {
    return;
  }

  const [sceneMetadata, roomMetadata, playerName] = await Promise.all([
    OBR.scene.getMetadata(),
    OBR.room.getMetadata(),
    OBR.player.getName(),
  ]);

  const storageContainer = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
  const discordEnabled = storageContainer[SettingsConstants.ENABLE_DISCORD_LOGGING] as boolean | undefined;
  const rawWebhookUrl = storageContainer[SettingsConstants.DISCORD_URL] as string | undefined;

  if (discordEnabled !== true || typeof rawWebhookUrl !== 'string') {
    return;
  }

  const webhookUrl = rawWebhookUrl.trim();
  if (!isValidDiscordWebhookUrl(webhookUrl)) {
    return;
  }

  const user = (optionalUser || playerName || 'Unknown').trim();
  const payload = {
    username: `Forge : ${user}`,
    avatar_url: 'https://battle-system.com/owlbear/forge-docs/logo.png',
    content: message,
  };

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch {
    // Swallow network errors; chat flow should not fail due to webhook issues.
  }
};
