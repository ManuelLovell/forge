import React from "react";
import ReactDOM from "react-dom/client";
import { PluginGate } from "./components/PluginGateComponent";
import { CacheSync } from './helpers/CacheManager';
import { ThemeProvider } from './helpers/ThemeContext';
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PluginGate>
      <CacheSync>
        <ThemeProvider>
          <App></App>
        </ThemeProvider>
      </CacheSync>
    </PluginGate>
  </React.StrictMode>
);