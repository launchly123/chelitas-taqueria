# Agency Console (CMS) integration

This site is wired to Philip's Agency Console at
<https://cms-omega-seven.vercel.app> so the owner can edit their own copy.

## How it works

```
GET https://cms-omega-seven.vercel.app/api/public/overrides/<slug>?page=home
-> {"overrides": {"t0": "...", "i2": "https://..."}, "updated_at": "..."}
```

Public, CORS-open, cached ~30s, so published edits appear within about half a
minute. `src/components/CmsOverrides.tsx` fetches this on mount and replays the
edits.

**Edits are keyed by document position, not by id.** The console walks
`document.body.getElementsByTagName("*")` in order, numbering every text leaf
`t0, t1, …` and every image `i0, i1, …`. Our traversal must stay a line-for-line
match of the console's tagger or edits land on the wrong elements.

> ⚠️ **Any structural change to the page shifts every later key** and silently
> re-points already-published edits. After adding, removing or reordering a
> section, re-check the owner's saved edits in the console.

## Environment variables

Set in Vercel:

| Var | Value |
|---|---|
| `NEXT_PUBLIC_CMS_URL` | `https://cms-omega-seven.vercel.app` |
| `NEXT_PUBLIC_CMS_SLUG` | `chelitas-taqueria` |
| `NEXT_PUBLIC_CMS_PAGE` | `home` |

If `NEXT_PUBLIC_CMS_URL` or `_SLUG` is unset the component does nothing and the
hardcoded content stands on its own. A CMS that is down never breaks the site.

## The iframe history guard

`src/app/layout.tsx` carries a `beforeInteractive` script that swallows a
specific `SecurityError` from `history.pushState`/`replaceState` when the page
is embedded.

The console loads the site in an iframe served from **its own** origin with an
injected `<base href>` pointing back here. Next's App Router calls
`history.replaceState()` with a relative URL during hydration; the browser
resolves it through `<base>` (our origin) but validates against the document's
real origin (the console's). The mismatch throws, killing hydration before the
console's postMessage handshake — the editor then times out on *"This page
couldn't load"*.

**This is not optional**, and it affects every Next.js App Router site on this
console.

## What the console CANNOT edit

Tell the client before they go looking:

- Anything inside `a` or `button` — so the nav, the phone button and every CTA
  are locked. The `SKIP` list is
  `header,nav,a,button,script,style,svg,select,textarea,input,form,iframe`.
- Any element that has child elements. A heading split into styled spans is not
  a leaf. **A `<br>` counts as a child element.**
- `<dt>` / `<dd>` — not in the tag list at all. This site uses `h3 + p` for
  headed blocks specifically so the console can reach them. **Do not "fix"
  those back into description lists.**
- `<title>`, meta description, and the JSON-LD structured data.

### NAP and hours are locked on purpose

Address, phone and hours live in `src/lib/business.ts`, which also feeds the
`Restaurant` JSON-LD. If they were editable on screen the visible text would
silently desync from what Google reads. Changing them is a code change — that
is the intended behaviour, not a limitation to work around.

## Registration

The console has no self-serve "add site". Registering takes two Supabase rows —
one in `websites`, one in `pages` — written with the service-role key pulled
from the `cms` Vercel project. `domain` must be a **bare host** (no protocol, no
trailing slash).

Diagnose from outside with the public endpoint:

| Response | Meaning |
|---|---|
| no `updated_at` key | no `websites` row — not registered |
| `"updated_at": null` | registered but **no `pages` row** → "No pages yet" |
| `"updated_at": "<ts>"` | healthy |
