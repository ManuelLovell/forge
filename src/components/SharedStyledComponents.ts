import styled from 'styled-components';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';

/**
 * Shared styled components that can be reused across the application
 * All components use the theme system for consistent styling
 */

export const PageContainer = styled.div<{ theme: ForgeTheme }>`
  padding: 20px;
  color: ${props => props.theme.PRIMARY};
  min-height: 100vh;
`;

export const PageTitle = styled.h1<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  background-color: ${props => props.theme.OFFSET};
  padding: 4px;
  border-radius: 6px;
  border: 2px solid ${props => props.theme.BORDER};
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`;

export const Card = styled.div<{ theme: ForgeTheme }>`
  background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.3)};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 15px 0;
`;

export const CardHeader = styled.div<{ theme: ForgeTheme }>`
  background-color: ${props => props.theme.OFFSET};
  color: ${props => props.theme.PRIMARY};
  padding: 12px 15px;
  border-radius: 6px 6px 0 0;
  margin: -20px -20px 15px -20px;
  font-weight: 600;
  font-size: 18px;
`;

export const Button = styled.button<{ theme: ForgeTheme; variant?: 'primary' | 'secondary' }>`
  background-color: ${props => rgbaFromHex(props.theme.OFFSET, props.variant === 'secondary' ? 0.5 : 0.75)};
  color: ${props => props.theme.PRIMARY};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => rgbaFromHex(props.theme.OFFSET, 0.9)};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Input = styled.input<{ theme: ForgeTheme }>`
  background-color: rgba(0, 0, 0, 0.5);
  color: ${props => props.theme.PRIMARY};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  padding: 10px 15px;
  font-size: 14px;
  width: 100%;
  
  &::placeholder {
    color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const TextArea = styled.textarea<{ theme: ForgeTheme }>`
  background-color: rgba(0, 0, 0, 0.5);
  color: ${props => props.theme.PRIMARY};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  padding: 10px 15px;
  font-size: 14px;
  width: 100%;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  
  &::placeholder {
    color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const Select = styled.select<{ theme: ForgeTheme }>`
  background-color: rgba(0, 0, 0, 0.5);
  color: ${props => props.theme.PRIMARY};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
  
  option {
    background-color: ${props => props.theme.BACKGROUND};
    color: ${props => props.theme.PRIMARY};
  }
`;

export const Label = styled.label<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
`;

export const Divider = styled.hr<{ theme: ForgeTheme }>`
  border: none;
  border-top: 2px solid ${props => props.theme.BORDER};
  margin: 20px 0;
`;

export const Text = styled.p<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  line-height: 1.6;
  margin: 10px 0;
`;

export const Badge = styled.span<{ theme: ForgeTheme }>`
  background-color: ${props => rgbaFromHex(props.theme.OFFSET, 0.75)};
  color: ${props => props.theme.PRIMARY};
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 12px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
`;

export const List = styled.ul<{ theme: ForgeTheme }>`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li<{ theme: ForgeTheme }>`
  padding: 12px 15px;
  border-bottom: 1px solid ${props => props.theme.BORDER};
  color: ${props => props.theme.PRIMARY};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${props => rgbaFromHex(props.theme.OFFSET, 0.2)};
  }
`;
