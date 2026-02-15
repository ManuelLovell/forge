import { OwlbearIds } from '../helpers/Constants';

/**
 * Settings Keys Constants
 * Central constants for all application settings
 * Following the pattern: ${EXTENSION_ID}/keyname
 * For space, try to limit char length to 8 or fewer
 */

const EXTENSION_ID = OwlbearIds.EXTENSIONID;
export class MenuConstants {
}

export class UnitConstants {
  static ON_LIST = `${EXTENSION_ID}/on-list`;
  static IN_PARTY = `${EXTENSION_ID}/in-party`;
  static FABRICATED = `${EXTENSION_ID}/fabd`;
  static UNIT_NAME = `${EXTENSION_ID}/name`;
  static INITIATIVE = `${EXTENSION_ID}/init`;
}

export class SettingsConstants {
  // List Controls
  static SHOW_ROLLER_COLUMN = `${EXTENSION_ID}/rollclmn`;
  static REVERSE_INITIATIVE = `${EXTENSION_ID}/revinit`;
  static POPCORN_INITIATIVE = `${EXTENSION_ID}/popinit`;
  static DICE_RANGE = `${EXTENSION_ID}/dicernge`;
  static SHOW_CARD_ACCESS = `${EXTENSION_ID}/cardshow`;

  // Initiative Tracking
  static CURRENT_TURN = `${EXTENSION_ID}/currturn`;
  static CURRENT_ROUND = `${EXTENSION_ID}/currround`;

  // Player Controls
  static SHOW_PLAYER_VIEW = `${EXTENSION_ID}/playview`;
  static SHOW_NON_PARTY_UNITS = `${EXTENSION_ID}/npcview`;
  static SHOW_HP_COLOR_INDICATOR = `${EXTENSION_ID}/hpcolors`;

  // Game Controls
  static SHOW_HP_BARS = `${EXTENSION_ID}/showhpbar`;
  static HP_BAR_ORIENTATION = `${EXTENSION_ID}/hporient`;
  static SHOW_HP_NUMBERS = `${EXTENSION_ID}/showhpnum`;
  static SHOW_NAMES = `${EXTENSION_ID}/showname`;
  static SHOW_TURN_EFFECT = `${EXTENSION_ID}/showturn`;
  static USE_DESCRIPTIVE_DUPLICATES = `${EXTENSION_ID}/usedescd`;

  // Dice Controls
  static ENABLE_RUMBLE = `${EXTENSION_ID}/enabrumb`;
  static ENABLE_BONES = `${EXTENSION_ID}/enabbone`;
  static ENABLE_DICE_PLUS = `${EXTENSION_ID}/enabdice`;
  static ENABLE_OBR_NOTIFICATION = `${EXTENSION_ID}/obrnotif`;
  static SHOW_NOTIFICATION_TO_ALL = `${EXTENSION_ID}/shownote`;
  static ENABLE_DISCORD_LOGGING = `${EXTENSION_ID}/enabdisc`;
  static DISCORD_URL = `${EXTENSION_ID}/discurl`;
}
