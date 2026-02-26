import './styles/App.css'
import { useSceneStore } from './helpers/BSCache';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import OBR from '@owlbear-rodeo/sdk';
import { Navigation, type PageType } from './components/NavigationComponent';
import { AppContainer, ContentArea } from './components/NavigationStyles';
import { SettingsPage } from './components/SettingsPage';
import { ChatLogPage } from './components/ChatLogPage';
import { SystemPage } from './components/SystemPage';
import { InitiativeList } from './components/InitiativeList';
import { PartyPage } from './components/PartyPage';
import { HpBarEffectManager } from './components/HpBarEffectManager';
import { DeathEffectManager } from './components/DeathEffectManager';
import { EffectsTokenVisualManager } from './components/EffectsTokenVisualManager';
import { BossHpViewportEffectManager } from './components/BossHpViewportEffectManager';
import { TurnEffectManager } from './components/TurnEffectManager';
import { useForgeTheme } from './helpers/ThemeContext';
import { useAppInitialization } from './helpers/useAppInitialization';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e2232;
  color: #ffffff;
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: #9d99ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;

function App() {
  const { sceneReady, cacheReady, playerData } = useSceneStore();
  const { isInitialized } = useAppInitialization();
  const { theme } = useForgeTheme();
  const [currentPage, setCurrentPage] = useState<PageType>('ForgeMain');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isCurrentUserGm = String(playerData?.role || '').toUpperCase() === 'GM';

  const renderPage = () => {
    switch (currentPage) {
      case 'ForgeMain':
        return (
          <InitiativeList key="main" />
        );
      case 'Settings':
        return isCurrentUserGm
          ? <SettingsPage key="settings" />
          : <InitiativeList key="main" />;
      case 'Party':
        return (
          <PartyPage key="party" />
        );
      case 'System':
        return isCurrentUserGm
          ? <SystemPage key="system" />
          : <InitiativeList key="main" />;
      case 'ChatLog':
        return (
          <ChatLogPage key="chatlog" />
        );
    }
  };

  const navigateTo = (page: PageType) => {
    if (!isCurrentUserGm && (page === 'Settings' || page === 'System')) {
      setCurrentPage('ForgeMain');
      setIsMenuOpen(false);
      return;
    }

    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  // Reset width when navigating away from ForgeMain
  useEffect(() => {
    if (currentPage !== 'ForgeMain') {
      OBR.action.setWidth(350);
    }
  }, [currentPage]);

  return (
    <>
      <GlobalStyles theme={theme} />
      {!sceneReady || !cacheReady || !isInitialized ? (
        <LoadingContainer>
          <LoadingSpinner />
          <LoadingText>
            {!sceneReady ? 'Connecting to scene...' : 
             !cacheReady ? 'Loading cache...' : 
             !isInitialized ? 'Initializing system...' : 
             'Loading...'}
          </LoadingText>
        </LoadingContainer>
      ) : (
        <AppContainer>
          <HpBarEffectManager />
          <DeathEffectManager />
          <EffectsTokenVisualManager />
          <BossHpViewportEffectManager />
          <TurnEffectManager />
          <ContentArea theme={theme} $backgroundUrl={theme.BACKGROUND_URL}>
            <AnimatePresence mode="wait">
              {renderPage()}
            </AnimatePresence>
          </ContentArea>

          <Navigation
            isOpen={isMenuOpen}
            currentPage={currentPage}
            onToggle={() => setIsMenuOpen(!isMenuOpen)}
            onNavigate={navigateTo}
          />
        </AppContainer>
      )}
    </>
  )
}

export default App
