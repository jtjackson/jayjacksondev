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
    sitemap()
  ],
  output: 'static'
});
