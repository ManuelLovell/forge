import { useForgeTheme } from '../helpers/ThemeContext';
import styled from 'styled-components';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';
import { Settings, Users, Layout, HelpCircle } from 'lucide-react';

const DemoTitle = styled.h2<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  background-color: ${props => props.theme.OFFSET};
  padding: 10px;
  border-radius: 6px;
  margin: 0 0 20px 0;
`;

const Section = styled.div`
  margin: 30px 0;
`;

const SectionLabel = styled.h3<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  margin-bottom: 15px;
  font-size: 18px;
`;

const TextBlurb = styled.p<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  line-height: 1.6;
  margin: 15px 0;
`;

const StyledButton = styled.button<{ theme: ForgeTheme }>`
  background-color: ${props => rgbaFromHex(props.theme.OFFSET, 0.75)};
  color: ${props => props.theme.PRIMARY};
  border: 2px solid ${props => props.theme.BORDER};
  padding: 10px 20px;
  margin: 5px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => rgbaFromHex(props.theme.OFFSET, 0.9)};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const StyledInput = styled.input<{ theme: ForgeTheme }>`
  background-color: rgba(0, 0, 0, 0.5);
  color: ${props => props.theme.PRIMARY};
  border: 2px solid ${props => props.theme.BORDER};
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 14px;
  width: 100%;
  max-width: 300px;
  
  &::placeholder {
    color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const IconGroup = styled.div<{ theme: ForgeTheme }>`
  display: flex;
  gap: 15px;
  align-items: center;
  
  svg {
    color: ${props => props.theme.PRIMARY};
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      color: ${props => props.theme.OFFSET};
      transform: scale(1.1);
    }
  }
`;

const Table = styled.table<{ theme: ForgeTheme }>`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  overflow: hidden;
`;

const TableHeader = styled.thead<{ theme: ForgeTheme }>`
  background-color: ${props => props.theme.OFFSET};
  color: ${props => props.theme.PRIMARY};
`;

const TableRow = styled.tr<{ theme: ForgeTheme }>`
  border-bottom: 1px solid ${props => props.theme.BORDER};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${props => rgbaFromHex(props.theme.OFFSET, 0.2)};
  }
`;

const TableCell = styled.td<{ theme: ForgeTheme }>`
  padding: 12px;
  color: ${props => props.theme.PRIMARY};
  border-right: 1px solid ${props => props.theme.BORDER};
  
  &:last-child {
    border-right: none;
  }
`;

const TableHeaderCell = styled.th<{ theme: ForgeTheme }>`
  padding: 12px;
  text-align: left;
  font-weight: 600;
  border-right: 1px solid ${props => props.theme.BORDER};
  
  &:last-child {
    border-right: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/**
 * Theme Demo Component
 * Comprehensive showcase of themed UI components
 */
export const ThemeDemo = () => {
    const { theme, updateThemeFromSystem } = useForgeTheme();

    const resetToTestColors = () => {
        updateThemeFromSystem('#FF0000', '#00FF00', '#0000FF', '#FFFF00', undefined);
    };

    const setDarkTheme = () => {
        updateThemeFromSystem('#FFFFFF', '#9d99ff', '#1e2232', '#999999', undefined);
    };

    const setLightTheme = () => {
        updateThemeFromSystem('#000000', '#e0e7ff', '#ffffff', '#cccccc', undefined);
    };

    return (
        <>
            <DemoTitle theme={theme}>Theme System Demo</DemoTitle>

            {/* Button Controls */}
            <Section>
                <SectionLabel theme={theme}>Button Controls</SectionLabel>
                <ButtonGroup>
                    <StyledButton theme={theme} onClick={resetToTestColors}>
                        Test Colors (Bright)
                    </StyledButton>
                    <StyledButton theme={theme} onClick={setDarkTheme}>
                        Dark Theme
                    </StyledButton>
                    <StyledButton theme={theme} onClick={setLightTheme}>
                        Light Theme
                    </StyledButton>
                </ButtonGroup>
            </Section>

            {/* Text Inputs */}
            <Section>
                <SectionLabel theme={theme}>Text Input Controls</SectionLabel>
                <InputGroup>
                    <StyledInput
                        theme={theme}
                        type="text"
                        placeholder="Enter character name..."
                    />
                    <StyledInput
                        theme={theme}
                        type="number"
                        placeholder="Enter HP value..."
                    />
                    <StyledInput
                        theme={theme}
                        type="text"
                        placeholder="Enter dice formula (e.g., 2d6+3)..."
                    />
                </InputGroup>
            </Section>

            {/* Icons */}
            <Section>
                <SectionLabel theme={theme}>Feather Icons</SectionLabel>
                <IconGroup theme={theme}>
                    <Settings size={24} />
                    <Users size={24} />
                    <Layout size={24} />
                    <HelpCircle size={24} />
                    <TextBlurb theme={theme} style={{ margin: 0 }}>
                        Icons use PRIMARY color and change to OFFSET on hover
                    </TextBlurb>
                </IconGroup>
            </Section>

            {/* Table/List */}
            <Section>
                <SectionLabel theme={theme}>Data Table</SectionLabel>
                <Table theme={theme}>
                    <TableHeader theme={theme}>
                        <tr>
                            <TableHeaderCell theme={theme}>Character</TableHeaderCell>
                            <TableHeaderCell theme={theme}>Class</TableHeaderCell>
                            <TableHeaderCell theme={theme}>HP</TableHeaderCell>
                            <TableHeaderCell theme={theme}>Initiative</TableHeaderCell>
                        </tr>
                    </TableHeader>
                    <tbody>
                        <TableRow theme={theme}>
                            <TableCell theme={theme}>Aragorn</TableCell>
                            <TableCell theme={theme}>Ranger</TableCell>
                            <TableCell theme={theme}>45/60</TableCell>
                            <TableCell theme={theme}>18</TableCell>
                        </TableRow>
                        <TableRow theme={theme}>
                            <TableCell theme={theme}>Gandalf</TableCell>
                            <TableCell theme={theme}>Wizard</TableCell>
                            <TableCell theme={theme}>32/40</TableCell>
                            <TableCell theme={theme}>15</TableCell>
                        </TableRow>
                        <TableRow theme={theme}>
                            <TableCell theme={theme}>Legolas</TableCell>
                            <TableCell theme={theme}>Ranger</TableCell>
                            <TableCell theme={theme}>50/50</TableCell>
                            <TableCell theme={theme}>22</TableCell>
                        </TableRow>
                        <TableRow theme={theme}>
                            <TableCell theme={theme}>Gimli</TableCell>
                            <TableCell theme={theme}>Fighter</TableCell>
                            <TableCell theme={theme}>65/70</TableCell>
                            <TableCell theme={theme}>12</TableCell>
                        </TableRow>
                    </tbody>
                </Table>
            </Section>
        </>
    );
};