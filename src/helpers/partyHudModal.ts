import OBR from '@owlbear-rodeo/sdk';
import { OwlbearIds } from './Constants';

export const PARTY_HUD_MODAL_ID = `${OwlbearIds.EXTENSIONID}-partyhud`;

export const openPartyHudModal = async () => {
  await OBR.modal.open({
    id: PARTY_HUD_MODAL_ID,
    url: '/pages/forgeparty.html',
    fullScreen: true,
    hideBackdrop: true,
    hidePaper: true,
    disablePointerEvents: true
  });
};

export const closePartyHudModal = async () => {
  await OBR.modal.close(PARTY_HUD_MODAL_ID);
};