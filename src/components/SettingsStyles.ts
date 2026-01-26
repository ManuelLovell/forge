import tw from 'twin.macro';
import styled from 'styled-components';

export const SettingsContainer = tw.div`
  p-6 max-w-4xl mx-auto
`;

export const SettingsTitle = tw.h1`
  text-2xl font-bold mb-6
`;

export const SettingsSection = tw.div`
  mb-8 rounded-lg shadow-sm border-gray-300
`;

export const SectionTitle = tw.h2`
  text-xl font-semibold mb-4 border-b border-gray-300 pb-2
`;

export const ControlRow = tw.div`
  flex items-center justify-between py-1 last:border-b-0
`;

export const ControlLabel = tw.label`
  text-base cursor-pointer flex-1 text-left
`;

export const SubControlRow = tw.div`
  flex items-center gap-3 ml-4
`;

export const SubControlLabel = tw.label`
  text-sm
`;

export const TextInput = tw.input`
  border border-gray-300 rounded px-3 py-1 text-sm bg-gray-900/50
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
`;

export const ToggleSwitch = styled.button<{ $isOn: boolean }>`
  ${tw`relative inline-flex h-6 w-12 items-center rounded-full transition-colors`}
  ${props => props.$isOn ? tw`bg-gray-800 outline-none ring-2 ring-primary-100 ring-offset-1` : tw`bg-gray-400`}
  
  &:focus {
    ${tw`outline-none ring-2 ring-primary-300 ring-offset-2`}
  }
  
  &::after {
    content: '';
    ${tw`inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
    ${props => props.$isOn ? 'transform: translateX(1.375rem);' : 'transform: translateX(0.25rem);'}
  }
`;

export const Button = tw.button`
  px-4 py-2 border bg-gray-900/50 text-white rounded
  transition-colors cursor-pointer text-sm font-medium
`;

export const ButtonGroup = tw.div`
  flex gap-3 mt-2 justify-center
`;
