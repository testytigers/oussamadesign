// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://oussamadesign.github.io',
  integrations: [
    /* Emits sitemap-index.xml + sitemap-0.xml, with an <xhtml:link rel="alternate">
       per locale on every URL so Google pairs /x with /fr/x instead of reading
       them as duplicates. New routes are picked up automatically. */
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', fr: 'fr' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
