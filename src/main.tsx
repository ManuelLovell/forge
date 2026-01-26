import React from "react";
import ReactDOM from "react-dom/client";
import { PluginGate } from "./components/PluginGateComponent";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PluginGate>
      <App></App>
    </PluginGate>
  </React.StrictMode>
);