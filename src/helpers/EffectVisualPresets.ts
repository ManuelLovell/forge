import { BUFF_EFFECT_ONE } from '../assets/buffEffectOne';
import { DEBUFF_EFFECT_ONE } from '../assets/debuffEffectOne';

export type BuffVisualPreset = 'buff_effect_one';
export type DebuffVisualPreset = 'debuff_effect_one';

export const DEFAULT_BUFF_VISUAL_PRESET: BuffVisualPreset = 'buff_effect_one';
export const DEFAULT_DEBUFF_VISUAL_PRESET: DebuffVisualPreset = 'debuff_effect_one';

export const BUFF_VISUAL_PRESET_OPTIONS: Array<{ value: BuffVisualPreset; label: string }> = [
  { value: 'buff_effect_one', label: 'Buff Effect One' },
];

export const DEBUFF_VISUAL_PRESET_OPTIONS: Array<{ value: DebuffVisualPreset; label: string }> = [
  { value: 'debuff_effect_one', label: 'Debuff Effect One' },
];

export const isBuffVisualPreset = (value: unknown): value is BuffVisualPreset => {
  return BUFF_VISUAL_PRESET_OPTIONS.some((option) => option.value === value);
};

export const isDebuffVisualPreset = (value: unknown): value is DebuffVisualPreset => {
  return DEBUFF_VISUAL_PRESET_OPTIONS.some((option) => option.value === value);
};

export const getBuffShaderForPreset = (preset: BuffVisualPreset): string => {
  switch (preset) {
    case 'buff_effect_one':
    default:
      return BUFF_EFFECT_ONE;
  }
};

export const getDebuffShaderForPreset = (preset: DebuffVisualPreset): string => {
  switch (preset) {
    case 'debuff_effect_one':
    default:
      return DEBUFF_EFFECT_ONE;
  }
};
