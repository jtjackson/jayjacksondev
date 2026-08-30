import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jayjackson.dev',
  integrations: [
    tailwind(),
    vue(),
    mdx(),
    // /home is a redirect stub to `/`; keep it out of the sitemap.
    sitemap({ filter: (page) => !page.endsWith('/home/') && !page.endsWith('/home') })
  ],
  output: 'static'
});
