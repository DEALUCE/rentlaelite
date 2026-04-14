import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rentlaelite.pages.dev',
  integrations: [tailwind()],
  output: 'static',
});
