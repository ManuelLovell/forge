import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import PartyHudPopoverPage from './components/PartyHudPopoverPage';
import { PluginGate } from './components/PluginGateComponent';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PluginGate>
      <PartyHudPopoverPage />
    </PluginGate>
  </React.StrictMode>
);