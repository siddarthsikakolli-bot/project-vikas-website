// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // TEMPORARY: pointed at the Vercel domain so canonical, og:url and
  // og:image all resolve to where the site actually lives. Switch back
  // to 'https://projectvikas.org' once DNS points at Vercel — leaving
  // it on the real domain now means share previews 404.
  site: 'https://project-vikas-website.vercel.app',
  // The dev overlay sits on top of the footer and shows up in
  // review screenshots. Nothing depends on it.
  devToolbar: { enabled: false },
});
