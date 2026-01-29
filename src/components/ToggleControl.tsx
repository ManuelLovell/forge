import LOGGER from '../helpers/Logger';
import { ToggleSwitch } from './SettingsStyles';

interface ToggleControlProps {
  label: string;
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const ToggleControl = ({ label, isOn, onChange }: ToggleControlProps) => {
  return (
    <ToggleSwitch
      $isOn={isOn}
      onClick={() => {
        const newValue = !isOn;
        LOGGER.log(`${label}: ${newValue}`);
        onChange(newValue);
      }}
      role="switch"
      aria-checked={isOn}
      aria-label={label}
    />
  );
};
