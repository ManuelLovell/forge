import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import CardPopoverPage from './components/CardPopoverPage.tsx';
import { PluginGate } from './components/PluginGateComponent.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PluginGate>
      <CardPopoverPage />
    </PluginGate>
  </React.StrictMode>
);