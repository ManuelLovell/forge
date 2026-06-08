import { OwlbearIds } from './Constants';

const EXTENSION_ID = OwlbearIds.EXTENSIONID;

export const SystemKeys = {
  SYSTEM_NAME: `${EXTENSION_ID}/SystemName`,
  IMPORT_DATE: `${EXTENSION_ID}/ImportDate`,
  SNAPSHOT_PUBLIC_ID: `${EXTENSION_ID}/SnapshotPublicId`,
} as const;