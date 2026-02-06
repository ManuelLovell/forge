import styled from 'styled-components';
import tw from 'twin.macro';
import LOGGER from '../helpers/Logger';
import { useForgeTheme } from '../helpers/ThemeContext';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';

const ToggleSwitch = styled.button<{ $isOn: boolean; theme: ForgeTheme }>`
  ${tw`relative inline-flex h-6 w-12 items-center rounded-full transition-colors`}
  background-color: ${props => props.$isOn 
    ? rgbaFromHex(props.theme.OFFSET, 0.8)
    : rgbaFromHex(props.theme.BORDER, 0.3)};
  border: 2px solid ${props => props.theme.BORDER};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => rgbaFromHex(props.theme.OFFSET, 0.3)};
  }
  
  &::after {
    content: '';
    ${tw`inline-block h-4 w-4 transform rounded-full transition-transform`}
    background-color: ${props => props.theme.PRIMARY};
    ${props => props.$isOn ? 'transform: translateX(1.375rem);' : 'transform: translateX(0.25rem);'}
  }
`;

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
