import tw from 'twin.macro';
import styled from 'styled-components';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';

// Settings-specific components
// For general shared components (PageContainer, PageTitle, Card, etc.), 
// use SharedStyledComponents.ts
// These components are specific to the Settings page layout

export const SectionTitle = styled.h2<{ theme: ForgeTheme }>`
  ${tw`text-xl font-semibold mb-4 pb-2`}
  color: ${props => props.theme.PRIMARY};
  border-bottom: 2px solid ${props => props.theme.BORDER};
`;

export const ControlRow = styled.div<{ theme: ForgeTheme }>`
  ${tw`flex items-center justify-between py-1 last:border-b-0`}
  color: ${props => props.theme.PRIMARY};
`;

export const ControlLabel = styled.label<{ theme: ForgeTheme }>`
  ${tw`text-base cursor-pointer flex-1 text-left`}
  color: ${props => props.theme.PRIMARY};
`;

export const SubControlRow = styled.div<{ theme: ForgeTheme }>`
  ${tw`flex items-center gap-3 ml-4`}
  color: ${props => props.theme.PRIMARY};
`;

export const SubControlLabel = styled.label<{ theme: ForgeTheme }>`
  ${tw`text-sm`}
  color: ${props => props.theme.PRIMARY};
`;

export const SmallInput = styled.input<{ theme: ForgeTheme }>`
  ${tw`rounded px-3 py-1 text-sm`}
  background-color: rgba(0, 0, 0, 0.5);
  color: ${props => props.theme.PRIMARY};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  
  &::placeholder {
    color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const ToggleSwitch = styled.button<{ $isOn: boolean; theme: ForgeTheme }>`
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

export const ButtonGroup = tw.div`
  flex gap-3 mt-2 justify-center
`;
