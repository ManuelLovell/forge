import React from "react";
import ReactDOM from "react-dom/client";
import { PluginGate } from "./components/PluginGateComponent";
import { CacheSync } from './helpers/CacheManager';
import { ThemeProvider } from './helpers/ThemeContext';
import App from "./App";
import { SetupContextMenu } from "./components/ContextMenuComponent";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PluginGate>
      <CacheSync>
        <SetupContextMenu>
          <ThemeProvider>
            <App></App>
          </ThemeProvider>
        </SetupContextMenu>
      </CacheSync>
    </PluginGate>
  </React.StrictMode>
);