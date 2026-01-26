import './styles/App.css'
import { useSceneStore } from './helpers/BSCache';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation, type PageType } from './components/NavigationComponent';
import { AppContainer, ContentArea } from './components/NavigationStyles';

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
          <motion.div
            key="settings"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="p-4"
          >
            <h1>Settings</h1>
            <p>Configure your forge settings here.</p>
          </motion.div>
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
      case 'ChatLog':
        return (
          <motion.div
            key="chatlog"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="p-4"
          >
            <h1>Chat Log</h1>
            <p>View your chat history here.</p>
          </motion.div>
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
