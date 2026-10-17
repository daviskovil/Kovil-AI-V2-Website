# Platform page tooling

Generators used to build and maintain the `/platforms/<slug>` pages.

- `platform-gen.js` + `specs-*.js`: generate a platform page (component, route with JSON-LD, OG image)
  from a compact spec. Run from the repo root:
  `node scripts/platform-pages/platform-gen.js scripts/platform-pages/specs-devinfra.js`.
  It OVERWRITES the page files for the slugs in the spec, so only run it for NEW platforms
  (the seven hand-rewritten pages were edited after generation). After generating, wire the slug into
  `src/app/sitemap.ts`, `src/data/platforms.ts` (`href`) and `src/data/site-directory.ts`.
  Keep titles <= 60 chars including the layout suffix and descriptions <= 160.
- `process-logos.py`: trims/normalizes real platform logos from a source folder into
  `public/platform-logos/` and regenerates `src/data/platform-logos.ts`. SRC/ROOT are machine-specific.
- `../gen_sitemap_lastmod.py`: regenerates real sitemap lastmod dates from git history.
  Run it after meaningful content changes, then commit `src/data/sitemap-lastmod.ts`.
