import OBR, { buildEffect } from '@owlbear-rodeo/sdk';
import { getBuffShaderForPreset, getDebuffShaderForPreset } from './EffectVisualPresets';

export const flashRollResolutionEffect = async (itemId: string, delta: number): Promise<void> => {
  const shader = delta >= 0
    ? getBuffShaderForPreset('buff_effect_two')
    : getDebuffShaderForPreset('debuff_effect_two');
  const effectId = `rrfx-${itemId}-${crypto.randomUUID()}`;

  const effect = buildEffect()
    .id(effectId)
    .name('Roll Resolution Effect')
    .effectType('ATTACHMENT')
    .layer('ATTACHMENT')
    .attachedTo(itemId)
    .locked(true)
    .disableHit(true)
    .disableAttachmentBehavior(['ROTATION', 'SCALE'])
    .sksl(shader)
    .build();

  try {
    await OBR.scene.local.addItems([effect]);
    await new Promise((resolve) => {
      window.setTimeout(resolve, 1000);
    });
    await OBR.scene.local.deleteItems([effectId]);
  } catch {
  }
};