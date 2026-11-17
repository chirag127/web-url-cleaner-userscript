# URL Cleaner

> Strips tracking parameters such as utm_*, fbclid, gclid and igshid from the address bar and from URLs you copy, so the links you paste do not carry an audience profile with them.

[![version](https://img.shields.io/badge/version-0.1.0-blue)](./web-url-cleaner-userscript.user.js)
[![license](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

**[Install in ScriptCat](https://raw.githubusercontent.com/chirag127/web-url-cleaner-userscript/main/web-url-cleaner-userscript.user.js)** · [Landing page](https://gh.oriz.in/web-url-cleaner-userscript/) · [Source](./web-url-cleaner-userscript.user.js) · [Issues](https://github.com/chirag127/web-url-cleaner-userscript/issues)

## What it does

Strips tracking parameters such as utm_*, fbclid, gclid and igshid from the address bar and from URLs you copy, so the links you paste do not carry an audience profile with them.

- **Cleans the address bar on load** — Rewrites the current URL with history.replaceState, so the tracking parameters disappear without a reload and without losing the page state.
- **Cleans copied links** — Hooks copy and cut in the capture phase, so a selected URL is rewritten before the page's own clipboard handler sees it.
- **Covers the usual offenders** — Drops utm_*, fbclid, gclid, dclid, msclkid, twclid, mc_eid, igshid, li_fat_id, HubSpot and Marketo parameters, and similar campaign tags.

## Options

Open **Settings…** in the ScriptCat menu for this script. Every option lives in that one panel.

| Option | Default | What it changes |
| --- | --- | --- |
| `Clean address bar` | On | Rewrite the current tab's URL when tracking parameters are present. |
| `Clean copied URLs` | On | Rewrite a selected URL on copy or cut before it reaches the clipboard. |


## Install

1. Install the current ScriptCat release (MV3) from [scriptcat.org](https://scriptcat.org/) and pin it to the toolbar.
2. Press **[Install in ScriptCat](https://raw.githubusercontent.com/chirag127/web-url-cleaner-userscript/main/web-url-cleaner-userscript.user.js)** and confirm the install screen.
3. Open the target site. To change behaviour, use **Settings…** in the ScriptCat menu.

The full walkthrough, including Tampermonkey and Violentmonkey, is in the
[install guide](https://github.com/chirag127/userscript-install-guide).

## Updates

`@updateURL` and `@downloadURL` point at `https://raw.githubusercontent.com/chirag127/web-url-cleaner-userscript/main/web-url-cleaner-userscript.user.js`. If you fork this repository,
change both to your fork or the installed copy will keep following upstream.

## Scope

Runs on: `*://*/*`.
Permissions: `GM_registerMenuCommand`, `GM_getValue`, `GM_setValue`.

## License

MIT — see [LICENSE](./LICENSE).
