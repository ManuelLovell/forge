import type { TranslationKey } from '../i18n/translations/en';

type Translate = (key: TranslationKey, variables?: Record<string, string | number | boolean | null | undefined>) => string;

export const getSettingsTooltips = (t: Translate) => ({
  reverseInitiative: t('settings.tooltips.reverseInitiative'),
  popcornInitiative: t('settings.tooltips.popcornInitiative'),
  initiativeDie: t('settings.tooltips.initiativeDie'),
  initiativeModifierAttr: t('settings.tooltips.initiativeModifierAttr'),
  initiativeModifierMath: t('settings.tooltips.initiativeModifierMath'),
  showCardColumn: t('settings.tooltips.showCardColumn'),
  showPlayerView: t('settings.tooltips.showPlayerView'),
  showNonPartyUnits: t('settings.tooltips.showNonPartyUnits'),
  showHpNumbersOnList: t('settings.tooltips.showHpNumbersOnList'),
  ownerOnlyEdit: t('settings.tooltips.ownerOnlyEdit'),
  showAdjustHpContextMenu: t('settings.tooltips.showAdjustHpContextMenu'),
  showViewUnitContextMenuForPlayers: t('settings.tooltips.showViewUnitContextMenuForPlayers'),
  showHpBarsOnTokens: t('settings.tooltips.showHpBarsOnTokens'),
  hpOrientation: t('settings.tooltips.hpOrientation'),
  showHpNumbersOnTokens: t('settings.tooltips.showHpNumbersOnTokens'),
  showDeathEffect: t('settings.tooltips.showDeathEffect'),
  showNamesOnTokens: t('settings.tooltips.showNamesOnTokens'),
  showTurnEffect: t('settings.tooltips.showTurnEffect'),
  useDescriptiveNames: t('settings.tooltips.useDescriptiveNames'),
  enableRumble: t('settings.tooltips.enableRumble'),
  enableBones: t('settings.tooltips.enableBones'),
  enableDicePlus: t('settings.tooltips.enableDicePlus'),
  enableTextBasedRolls: t('settings.tooltips.enableTextBasedRolls'),
  enableObrNotification: t('settings.tooltips.enableObrNotification'),
  showResultsToAll: t('settings.tooltips.showResultsToAll'),
  enableDiscordLogging: t('settings.tooltips.enableDiscordLogging'),
  discordUrl: t('settings.tooltips.discordUrl'),
  enableConsoleLog: t('settings.tooltips.enableConsoleLog'),
} as const);
