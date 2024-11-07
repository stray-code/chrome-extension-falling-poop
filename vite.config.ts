import { defineConfig } from 'vite';
import { crx, defineManifest } from '@crxjs/vite-plugin';

const manifest = defineManifest({
  manifest_version: 3,
  name: 'うんち落下',
  description: 'サイトにうんちを落下させます。',
  version: '1.0.2',
  icons: {
    '16': 'img/icon16.png',
    '48': 'img/icon48.png',
    '128': 'img/icon128.png',
  },
  action: {
    default_icon: 'img/icon16.png',
  },
  content_scripts: [
    {
      js: ['src/content/main.ts'],
      matches: ['http://*/*', 'https://*/*'],
    },
  ],
  background: {
    service_worker: 'src/background.ts',
    type: 'module',
  },
  permissions: ['contextMenus'],
});

export default defineConfig({
  plugins: [crx({ manifest })],
});
