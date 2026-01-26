import './styles/App.css'
import { useSceneStore } from './helpers/BSCache';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type PageType = 'ForgeMain' | 'Settings' | 'Party' | 'ChatLog';

function App() {
  const { sceneReady, cacheReady } = useSceneStore();
  const [currentPage, setCurrentPage] = useState<PageType>('ForgeMain');

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

  return (
    <>
      {!sceneReady || !cacheReady ? (
        <div>Loading cache systems...</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <div style={{ flex: 1, overflow: 'auto' }}>
            <AnimatePresence mode="wait">
              {renderPage()}
            </AnimatePresence>
          </div>
          <footer style={{
            height: '40px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderTop: '1px solid #ccc',
            backgroundColor: '#f5f5f5'
          }}>
            <button
              onClick={() => setCurrentPage('ForgeMain')}
              style={{
                flex: 1,
                height: '100%',
                border: 'none',
                background: currentPage === 'ForgeMain' ? '#ddd' : 'transparent',
                cursor: 'pointer',
                fontWeight: currentPage === 'ForgeMain' ? 'bold' : 'normal'
              }}
            >
              Main
            </button>
            <button
              onClick={() => setCurrentPage('Settings')}
              style={{
                flex: 1,
                height: '100%',
                border: 'none',
                background: currentPage === 'Settings' ? '#ddd' : 'transparent',
                cursor: 'pointer',
                fontWeight: currentPage === 'Settings' ? 'bold' : 'normal'
              }}
            >
              Settings
            </button>
            <button
              onClick={() => setCurrentPage('Party')}
              style={{
                flex: 1,
                height: '100%',
                border: 'none',
                background: currentPage === 'Party' ? '#ddd' : 'transparent',
                cursor: 'pointer',
                fontWeight: currentPage === 'Party' ? 'bold' : 'normal'
              }}
            >
              Party
            </button>
            <button
              onClick={() => setCurrentPage('ChatLog')}
              style={{
                flex: 1,
                height: '100%',
                border: 'none',
                background: currentPage === 'ChatLog' ? '#ddd' : 'transparent',
                cursor: 'pointer',
                fontWeight: currentPage === 'ChatLog' ? 'bold' : 'normal'
              }}
            >
              Chat
            </button>
          </footer>
        </div>
      )}
    </>
  )
}

export default App
