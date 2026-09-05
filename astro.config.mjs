// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://projectvikas.org',
  // The dev overlay sits on top of the footer and shows up in
  // review screenshots. Nothing depends on it.
  devToolbar: { enabled: false },
});
