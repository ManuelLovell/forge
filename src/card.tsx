import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from './helpers/ThemeContext';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
          <ThemeProvider>
            TEST
          </ThemeProvider>
  </React.StrictMode>
);