import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/rollresolution.css';
import { PluginGate } from './components/PluginGateComponent';
import { RollResolutionPopoverPage } from './components/RollResolutionPopoverPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PluginGate>
      <RollResolutionPopoverPage />
    </PluginGate>
  </React.StrictMode>
);