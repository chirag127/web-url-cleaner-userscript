# AGENTS.md — web-url-cleaner-userscript

Guidance for AI coding agents working in this repository.

## What this repository is

One userscript, one job: `web-url-cleaner-userscript.user.js`. It is a submodule of the collection at
`repos/own/public/userscripts/` in `c:\ws`.

## Rules that apply here

1. **Do not add a second `.user.js` file.** One repository, one script. A second script is a new repository.
2. **Keep the filename stable.** `web-url-cleaner-userscript.user.js` is the install and update URL. Renaming it breaks every installed copy.
3. **Keep `@version` increasing.** ScriptCat compares versions; an unchanged version is never re-downloaded.
4. **Point `@updateURL` and `@downloadURL` at this repository's raw `main` URL.** Never at the hub or another repo.
5. **Exactly one menu entry, `Settings…`.** Actions belong on the page or inside that panel, not in the menu.
6. **Guard against typing.** Any key handler must ignore events from `input`, `textarea`, `select`, and contenteditable elements.
7. **No dependency, no build step, no network calls** beyond the site the script targets.
8. **Verify on a live page** before claiming a change works. `node --check` proves syntax only.
9. **Update this repository's page and README when behaviour changes.** The site content is `site/src/data/script.json`.

## Layout

```
web-url-cleaner-userscript.user.js                 the script
README.md               install link, options, scope
site/                   Astro landing page, deployed by GitHub Actions
.github/workflows/      Pages deployment
```

## Definition of done

Implemented, lint-clean, exercised on a real page, installed version matching the file on disk,
committed and pushed, and the remainder stated honestly if anything was not exercised.
