import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import OBR from '@owlbear-rodeo/sdk';
import { supabase } from '../supabase/supabaseClient';
import { SystemResponse, SystemAttribute, CardLayoutComponent, ListLayoutComponent } from '../interfaces/SystemResponse';
import { useForgeTheme } from '../helpers/ThemeContext';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';
import { PageContainer, PageTitle, Card, Button, Input } from './SharedStyledComponents';
import { OwlbearIds } from '../helpers/Constants';
import defaultGameSystem from '../assets/defaultgamesystem.json';
import LOGGER from '../helpers/Logger';

const EXTENSION_ID = OwlbearIds.EXTENSIONID;

// Storage keys for system data
export const SystemKeys = {
  CURRENT_THEME: `${EXTENSION_ID}/CurrentTheme`,
  CURRENT_CARD: `${EXTENSION_ID}/CurrentCard`,
  CURRENT_LIST: `${EXTENSION_ID}/CurrentList`,
  CURRENT_ATTR: `${EXTENSION_ID}/CurrentAttr`,
  SYSTEM_NAME: `${EXTENSION_ID}/SystemName`,
  IMPORT_DATE: `${EXTENSION_ID}/ImportDate`,
} as const;

interface ThemeData {
  primary: string;
  offset: string;
  background: string;
  border: string;
  background_url: string;
}

const InputGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const SystemInfo = styled.div<{ theme: ForgeTheme }>`
  background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.3)};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
`;

const SystemName = styled.h2<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  background-color: ${props => props.theme.OFFSET};
  padding: 12px 15px;
  border-radius: 6px;
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: 600;
`;

const ImportDate = styled.p<{ theme: ForgeTheme }>`
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.8)};
  font-size: 14px;
  margin: 0 0 15px 0;
  font-style: italic;
`;

const SwatchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 15px;
`;

const ColorSwatch = styled.div<{ color: string; theme: ForgeTheme }>`
  background-color: ${props => props.color};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  color: ${props => props.theme.PRIMARY};
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
`;

const SwatchLabel = styled.div<{ theme: ForgeTheme }>`
  text-align: center;
  font-size: 12px;
  color: ${props => props.theme.PRIMARY};
  margin-top: 5px;
`;

const ErrorMessage = styled.div<{ theme: ForgeTheme }>`
  background-color: ${() => rgbaFromHex('#FF0000', 0.2)};
  border: 2px solid #FF0000;
  border-radius: 6px;
  padding: 15px;
  color: ${props => props.theme.PRIMARY};
  margin: 15px 0;
`;

const SuccessMessage = styled.div<{ theme: ForgeTheme }>`
  background-color: ${() => rgbaFromHex('#00FF00', 0.2)};
  border: 2px solid #00FF00;
  border-radius: 6px;
  padding: 15px;
  color: ${props => props.theme.PRIMARY};
  margin: 15px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const SystemPage = () => {
  const { theme, updateThemeFromSystem } = useForgeTheme();
  const [shareId, setShareId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  // Current system info - loaded from OBR metadata
  const [currentSystemName, setCurrentSystemName] = useState<string>('');
  const [currentImportDate, setCurrentImportDate] = useState<string | null>(null);
  const [currentTheme, setCurrentTheme] = useState<ThemeData | null>(null);

  // Load current system info from OBR metadata on mount
  useEffect(() => {
    loadCurrentSystem();
    
    // Subscribe to metadata changes to reflect updates
    const unsubscribe = OBR.scene.onMetadataChange((metadata) => {
      const themeMeta = metadata[SystemKeys.CURRENT_THEME] as ThemeData | undefined;
      const systemName = metadata[SystemKeys.SYSTEM_NAME] as string || defaultGameSystem.name;
      const importDate = metadata[SystemKeys.IMPORT_DATE] as string || null;
      
      if (themeMeta) {
        setCurrentTheme(themeMeta);
        setCurrentSystemName(systemName);
        setCurrentImportDate(importDate);
      }
    });
    
    return () => unsubscribe();
  }, []);

  const loadCurrentSystem = async () => {
    try {
      const metadata = await OBR.scene.getMetadata();
      
      const themeMeta = metadata[SystemKeys.CURRENT_THEME] as ThemeData | undefined;
      const systemName = metadata[SystemKeys.SYSTEM_NAME] as string || defaultGameSystem.name;
      const importDate = metadata[SystemKeys.IMPORT_DATE] as string || null;
      
      setCurrentSystemName(systemName);
      setCurrentImportDate(importDate);
      setCurrentTheme(themeMeta || null);
      
    } catch (err) {
      LOGGER.error('Error loading system:', err);
    }
  };

  const fetchAndSaveSystem = async () => {
    if (!shareId.trim()) {
      setError('Please enter a share_id');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { data, error: fetchError } = await supabase
        .from('v_bs_system_with_attributes')
        .select('*')
        .eq('share_id', shareId)
        .maybeSingle();
      
      if (fetchError) throw fetchError;
      
      if (!data) {
        throw new Error('No system found with that share_id');
      }

      const systemData = data as SystemResponse;
      
      // Prepare theme data
      const themeData: ThemeData = {
        primary: systemData.theme_primary,
        offset: systemData.theme_offset,
        background: systemData.theme_background,
        border: systemData.theme_border,
        background_url: systemData.background_url,
      };
      
      // Save to OBR scene metadata
      await OBR.scene.setMetadata({
        [SystemKeys.CURRENT_THEME]: themeData,
        [SystemKeys.CURRENT_CARD]: systemData.card_layout,
        [SystemKeys.CURRENT_LIST]: systemData.list_layout,
        [SystemKeys.CURRENT_ATTR]: systemData.attributes,
        [SystemKeys.SYSTEM_NAME]: systemData.name,
        [SystemKeys.IMPORT_DATE]: new Date().toISOString(),
      });
      
      // Update local state
      setCurrentSystemName(systemData.name);
      setCurrentImportDate(new Date().toISOString());
      setCurrentTheme(themeData);
      
      // Apply new theme
      updateThemeFromSystem(
        themeData.primary,
        themeData.offset,
        themeData.background,
        themeData.border,
        themeData.background_url
      );
      
      setSuccess(`System "${systemData.name}" loaded successfully!`);
      setShareId('');
      
      LOGGER.log('System loaded:', systemData.name);
      
    } catch (err: any) {
      LOGGER.error('Error fetching system:', err);
      setError(err.message || 'An error occurred while fetching the system');
    } finally {
      setLoading(false);
    }
  };

  const resetToDefault = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      const defaultTheme: ThemeData = {
        primary: defaultGameSystem.theme_primary,
        offset: defaultGameSystem.theme_offset,
        background: defaultGameSystem.theme_background,
        border: defaultGameSystem.theme_border,
        background_url: defaultGameSystem.background_url,
      };
      
      // Store default system in OBR
      await OBR.scene.setMetadata({
        [SystemKeys.CURRENT_THEME]: defaultTheme,
        [SystemKeys.CURRENT_CARD]: defaultGameSystem.card_layout,
        [SystemKeys.CURRENT_LIST]: defaultGameSystem.list_layout,
        [SystemKeys.CURRENT_ATTR]: defaultGameSystem.attributes,
        [SystemKeys.SYSTEM_NAME]: defaultGameSystem.name,
        [SystemKeys.IMPORT_DATE]: null,
      });
      
      // Update local state
      setCurrentSystemName(defaultGameSystem.name);
      setCurrentImportDate(null);
      setCurrentTheme(defaultTheme);
      
      // Apply theme
      updateThemeFromSystem(
        defaultTheme.primary,
        defaultTheme.offset,
        defaultTheme.background,
        defaultTheme.border,
        defaultTheme.background_url
      );
      
      setSuccess('Reset to default system successfully!');
    } catch (err: any) {
      setError('Failed to reset to default system');
      LOGGER.error('Error resetting to default:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <motion.div
      key="system"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PageContainer theme={theme}>
        <PageTitle theme={theme}>System Configuration</PageTitle>
        
        {/* Current System Display */}
        <Card theme={theme}>
          <SystemName theme={theme}>{currentSystemName}</SystemName>
          
          {currentImportDate ? (
            <ImportDate theme={theme}>
              Imported: {formatDate(currentImportDate)}
            </ImportDate>
          ) : (
            <ImportDate theme={theme}>
              Using Default System
            </ImportDate>
          )}
          
          {currentTheme && (
            <>
              <SwatchContainer>
                <div>
                  <ColorSwatch color={currentTheme.primary} theme={theme}>
                    {currentTheme.primary}
                  </ColorSwatch>
                  <SwatchLabel theme={theme}>PRIMARY</SwatchLabel>
                </div>
                <div>
                  <ColorSwatch color={currentTheme.offset} theme={theme}>
                    {currentTheme.offset}
                  </ColorSwatch>
                  <SwatchLabel theme={theme}>OFFSET</SwatchLabel>
                </div>
                <div>
                  <ColorSwatch color={currentTheme.background} theme={theme}>
                    {currentTheme.background}
                  </ColorSwatch>
                  <SwatchLabel theme={theme}>BG</SwatchLabel>
                </div>
                <div>
                  <ColorSwatch color={currentTheme.border} theme={theme}>
                    {currentTheme.border}
                  </ColorSwatch>
                  <SwatchLabel theme={theme}>BORDER</SwatchLabel>
                </div>
              </SwatchContainer>
            </>
          )}
        </Card>

        {/* Import New System */}
        <Card theme={theme}>
          <SystemInfo theme={theme}>
            <h3 style={{ color: theme.PRIMARY, marginTop: 0 }}>Import New System</h3>
            <p style={{ color: rgbaFromHex(theme.PRIMARY, 0.8), fontSize: '14px' }}>
              Enter a share_id to download and activate a new game system configuration.
            </p>
            
            <InputGroup>
              <Input
                theme={theme}
                type="text"
                value={shareId}
                onChange={(e) => setShareId(e.target.value)}
                placeholder="Enter share_id..."
                disabled={loading}
                onKeyPress={(e) => e.key === 'Enter' && fetchAndSaveSystem()}
              />
              <Button
                theme={theme}
                onClick={fetchAndSaveSystem}
                disabled={loading || !shareId.trim()}
              >
                {loading ? 'Loading...' : 'Import System'}
              </Button>
            </InputGroup>

            <ButtonGroup>
              <Button
                theme={theme}
                variant="secondary"
                onClick={resetToDefault}
                disabled={loading}
              >
                Reset to Default
              </Button>
            </ButtonGroup>
          </SystemInfo>

          {error && (
            <ErrorMessage theme={theme}>
              <strong>Error:</strong> {error}
            </ErrorMessage>
          )}

          {success && (
            <SuccessMessage theme={theme}>
              <strong>Success:</strong> {success}
            </SuccessMessage>
          )}
        </Card>
      </PageContainer>
    </motion.div>
  );
};
