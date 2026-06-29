import './styles/App.css'
import { useSceneStore } from './helpers/BSCache';
import { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import OBR from '@owlbear-rodeo/sdk';
import { Navigation, type PageType } from './components/NavigationComponent';
import { AppContainer, ContentArea } from './components/NavigationStyles';
import { HpBarEffectManager } from './components/HpBarEffectManager';
import { DeathEffectManager } from './components/DeathEffectManager';
import { EffectsTokenVisualManager } from './components/EffectsTokenVisualManager';
import { BossHpViewportEffectManager } from './components/BossHpViewportEffectManager';
import { TurnEffectManager } from './components/TurnEffectManager';
import { GmNameLabelManager } from './components/GmNameLabelManager';
import { RollResolutionManager } from './components/RollResolutionManager';
import { useForgeTheme } from './helpers/ThemeContext';
import { useAppInitialization } from './helpers/useAppInitialization';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';
import { DATA_STORED_IN_ROOM, OwlbearIds } from './helpers/Constants';
import { SettingsConstants, getPerPlayerSettingKey } from './interfaces/MetadataKeys';
import { applySharedAuthSnapshot, getSharedAuthSnapshot, initializeAuthOnStartup, isConnected } from './auth/authHelpers';
import { closePartyHudModal, openPartyHudModal } from './helpers/partyHudModal';
import { useTranslation } from './i18n/Translation';
import { TrackForgeEvent } from './helpers/forgeMetrics';
import { initializeForgeMetricsQueue } from './helpers/forgeMetricsQueue';

type AuthSyncMessage = {
  type: 'BS_AUTH_REQUEST' | 'BS_AUTH_STATE';
  source: string;
  snapshot?: {
    connected: boolean;
    accessToken: string | null;
    expiresAt: number | null;
  };
};

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

const PageLoadingState = styled.div`
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SettingsPage = lazy(async () => ({ default: (await import('./components/SettingsPage')).SettingsPage }));
const ChatLogPage = lazy(async () => ({ default: (await import('./components/ChatLogPage')).ChatLogPage }));
const SystemPage = lazy(async () => ({ default: (await import('./components/SystemPage')).SystemPage }));
const InitiativeList = lazy(async () => ({ default: (await import('./components/InitiativeList')).InitiativeList }));
const PartyPage = lazy(async () => ({ default: (await import('./components/PartyPage')).PartyPage }));

function App() {
  const { sceneReady, cacheReady, playerData, roomMetadata, sceneMetadata } = useSceneStore();
  const { isInitialized } = useAppInitialization();
  const { theme } = useForgeTheme();
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState<PageType>('ForgeMain');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isPartyHudModalOpenRef = useRef(false);
  const isCurrentUserGm = String(playerData?.role || '').toUpperCase() === 'GM';
  const storageContainer = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
  const currentPlayerId = playerData?.id;
  const partyHudOpenKey = getPerPlayerSettingKey(SettingsConstants.PARTY_HUD_OPEN, currentPlayerId);
  const hudOpenRaw = storageContainer[partyHudOpenKey] ?? storageContainer[SettingsConstants.PARTY_HUD_OPEN];
  const isPartyHudOpen = hudOpenRaw === true;
  const showPlayerView = storageContainer[SettingsConstants.SHOW_PLAYER_VIEW] as boolean || false;
  const canAccessInitiativeList = isCurrentUserGm || showPlayerView;
  const isAppReady = sceneReady && cacheReady && isInitialized;

  const renderPage = () => {
    switch (currentPage) {
      case 'ForgeMain':
        return canAccessInitiativeList
          ? <InitiativeList key="main" />
          : <PartyPage key="party" />;
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

    return null;
  };

  const navigateTo = (page: PageType) => {
    if (!canAccessInitiativeList && page === 'ForgeMain') {
      setCurrentPage('Party');
      setIsMenuOpen(false);
      return;
    }

    if (!isCurrentUserGm && (page === 'Settings' || page === 'System')) {
      setCurrentPage('ForgeMain');
      setIsMenuOpen(false);
      return;
    }

    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isAppReady) {
      return;
    }

    const stopMetricsQueue = initializeForgeMetricsQueue();

    return () => {
      stopMetricsQueue();
    };
  }, [isAppReady]);

  useEffect(() => {
    if (!isAppReady) {
      return;
    }

    void TrackForgeEvent({
      eventName: 'app_opened',
      eventCategory: 'app',
      playerId: playerData?.id ?? null,
      success: true,
      metadata: {
        role: playerData?.role ?? null,
      },
    });
  }, [isAppReady, playerData?.id, playerData?.role]);

  useEffect(() => {
    if (!isAppReady) {
      return;
    }

    const initialize = async () => {
      await initializeAuthOnStartup();

      if (isConnected()) {
        await OBR.broadcast.sendMessage(
          OwlbearIds.AUTHSYNCCHANNEL,
          {
            type: 'BS_AUTH_STATE',
            source: OwlbearIds.EXTENSIONID,
            snapshot: getSharedAuthSnapshot(),
          } as AuthSyncMessage,
          { destination: 'LOCAL' },
        );
      }
    };

    void initialize();
  }, [isAppReady]);

  useEffect(() => {
    if (!isAppReady) {
      return;
    }

    const unsubscribe = OBR.broadcast.onMessage(OwlbearIds.AUTHSYNCCHANNEL, (event) => {
      const message = event.data as AuthSyncMessage;

      if (!message || typeof message !== 'object' || message.source === OwlbearIds.EXTENSIONID) {
        return;
      }

      if (message.type === 'BS_AUTH_REQUEST') {
        if (!isConnected()) {
          return;
        }

        void OBR.broadcast.sendMessage(
          OwlbearIds.AUTHSYNCCHANNEL,
          {
            type: 'BS_AUTH_STATE',
            source: OwlbearIds.EXTENSIONID,
            snapshot: getSharedAuthSnapshot(),
          } as AuthSyncMessage,
          { destination: 'LOCAL' },
        );
        return;
      }

      if (message.type !== 'BS_AUTH_STATE' || isConnected() || !message.snapshot) {
        return;
      }

      void applySharedAuthSnapshot(message.snapshot);
    });

    void OBR.broadcast.sendMessage(
      OwlbearIds.AUTHSYNCCHANNEL,
      { type: 'BS_AUTH_REQUEST', source: OwlbearIds.EXTENSIONID } as AuthSyncMessage,
      { destination: 'LOCAL' },
    );

    return () => {
      unsubscribe();
    };
  }, [isAppReady]);

  useEffect(() => {
    if (!isAppReady) {
      return;
    }

    let mounted = true;

    const syncPartyHudModalState = async () => {
      if (isPartyHudOpen && !isPartyHudModalOpenRef.current) {
        await openPartyHudModal();

        if (mounted) {
          isPartyHudModalOpenRef.current = true;
        }
        return;
      }

      if (!isPartyHudOpen && isPartyHudModalOpenRef.current) {
        await closePartyHudModal();
        if (mounted) {
          isPartyHudModalOpenRef.current = false;
        }
      }
    };

    void syncPartyHudModalState();

    return () => {
      mounted = false;
    };
  }, [isAppReady, isPartyHudOpen]);

  useEffect(() => {
    if (!isAppReady) {
      return;
    }

    if (!canAccessInitiativeList && currentPage === 'ForgeMain') {
      setCurrentPage('Party');
    }
  }, [isAppReady, canAccessInitiativeList, currentPage]);

  // Reset width when navigating away from ForgeMain
  useEffect(() => {
    if (currentPage !== 'ForgeMain') {
      OBR.action.setWidth(360);
    }
  }, [currentPage]);

  return (
    <>
      <GlobalStyles theme={theme} />
      {!sceneReady || !cacheReady || !isInitialized ? (
        <LoadingContainer>
          <LoadingSpinner />
          <LoadingText>
            {!sceneReady ? t('app.connectingScene') : 
             !cacheReady ? t('app.loadingCache') : 
             !isInitialized ? t('app.initializingSystem') : 
             t('app.loadingFallback')}
          </LoadingText>
        </LoadingContainer>
      ) : (
        <AppContainer>
          <HpBarEffectManager />
          <DeathEffectManager />
          <EffectsTokenVisualManager />
          <BossHpViewportEffectManager />
          <TurnEffectManager />
          <GmNameLabelManager />
          <RollResolutionManager />
          <ContentArea theme={theme} $backgroundUrl={theme.BACKGROUND_URL}>
            <Suspense fallback={<PageLoadingState><LoadingSpinner /></PageLoadingState>}>
              <AnimatePresence mode="wait">
                {renderPage()}
              </AnimatePresence>
            </Suspense>
          </ContentArea>

          <Navigation
            isOpen={isMenuOpen}
            currentPage={currentPage}
            onToggle={() => setIsMenuOpen(!isMenuOpen)}
            onNavigate={navigateTo}
            canAccessInitiativeList={canAccessInitiativeList}
          />
        </AppContainer>
      )}
    </>
  )
}

export default App
