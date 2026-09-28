// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // The live host. Vercel serves www as primary and 308-redirects the
  // apex to it, so canonical, og:url and og:image must name www — a
  // canonical pointing at a redirect is the thing this is avoiding.
  // If the apex is ever made primary in Vercel's domain settings,
  // change this in the same commit or the two disagree.
  site: 'https://www.projectvikas.org',
  // The dev overlay sits on top of the footer and shows up in
  // review screenshots. Nothing depends on it.
  devToolbar: { enabled: false },
});
