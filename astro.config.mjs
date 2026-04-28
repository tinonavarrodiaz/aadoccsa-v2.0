// @ts-check
import { defineConfig } from 'astro/config';
import { qrcode } from 'vite-plugin-qrcode';
import removeConsole from 'vite-plugin-remove-console';
import mkcert from 'vite-plugin-mkcert';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aadoccsa.com.mx',
  vite: {
    plugins: [qrcode(), removeConsole(), mkcert()],
  },

  integrations: [react(), sitemap()],
});
