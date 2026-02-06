import LOGGER from '../helpers/Logger';
import { ToggleSwitch } from './SettingsStyles';
import { useForgeTheme } from '../helpers/ThemeContext';

interface ToggleControlProps {
  label: string;
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const ToggleControl = ({ label, isOn, onChange }: ToggleControlProps) => {
  const { theme } = useForgeTheme();
  
  return (
    <ToggleSwitch
      theme={theme}
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
