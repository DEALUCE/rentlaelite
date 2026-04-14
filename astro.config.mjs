import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rentlaelite.theissakgroup.workers.dev',
  integrations: [tailwind()],
  output: 'static',
});
