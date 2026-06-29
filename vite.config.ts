import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import fs from 'fs'

const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'));
let appVersion = packageJson.version;

try {
  const manifestJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'public/manifest.json'), 'utf-8'));
  if (manifestJson.version) {
    appVersion = String(manifestJson.version);
  }
} catch {
  // Keep package.json version fallback when manifest is unavailable.
}

// https://vite.dev/config/
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
        ],
      },
    }),
  ],
  server: { cors: true },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "pages/index.html"),
        card: path.resolve(__dirname, "pages/forgecard.html"),
        context: path.resolve(__dirname, "pages/forgecontext.html"),
        party: path.resolve(__dirname, "pages/forgeparty.html"),
        rollresolution: path.resolve(__dirname, "pages/rollresolution.html"),
      }
    }
  }
})
