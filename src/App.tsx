import './styles/App.css'
import { useSceneStore } from './helpers/BSCache';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation, type PageType } from './components/NavigationComponent';
import { AppContainer, ContentArea } from './components/NavigationStyles';
import { SettingsPage } from './components/SettingsPage';
import { ChatLogPage } from './components/ChatLogPage';
import { SystemPage } from './components/SystemPage';

function App() {
  const { sceneReady, cacheReady } = useSceneStore();
  const [currentPage, setCurrentPage] = useState<PageType>('ForgeMain');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'ForgeMain':
        return (
          <motion.div
            key="main"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="p-4"
          >
            <h1>Forge Main</h1>
            <p>Loaded!</p>
          </motion.div>
        );
      case 'Settings':
        return (
          <SettingsPage key="settings" />
        );
      case 'Party':
        return (
          <motion.div
            key="party"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="p-4"
          >
            <h1>Party</h1>
            <p>Manage your party here.</p>
          </motion.div>
        );
      case 'System':
        return (
          <SystemPage key="system" />
        );
      case 'ChatLog':
        return (
          <ChatLogPage key="chatlog" />
        );
    }
  };

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      {!sceneReady || !cacheReady ? (
        <div>Loading cache systems...</div>
      ) : (
        <AppContainer>
          <ContentArea>
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
