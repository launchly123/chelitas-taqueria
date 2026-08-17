# Chelita's Taqueria

Website concept for Chelita's Taqueria — a family-owned Mexican taco truck in
Fresno, California. Built by Launchly.

> **Read [VERIFY.md](./VERIFY.md) first.** Public listings for this business
> contradict each other, including on whether it is currently trading. The site
> is deliberately built as a redesign concept that makes no claim about
> operating status, address, hours, or prices. There is a checklist there for
> turning it into a live business page once the owner confirms the facts.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Where things live

| Path | What |
|---|---|
| `src/lib/business.ts` | **Single source of truth** for name, phone, locations, social, and the `status` flags that gate every unverified claim |
| `src/lib/menu.ts` | Menu categories and items (unconfirmed, no prices) |
| `src/lib/reviews.ts` | Deliberately empty — see the comment for why |
| `src/components/sections/` | One file per page section |
| `src/components/StructuredData.tsx` | Restaurant JSON-LD, confirmed fields only |
| `src/components/CmsOverrides.tsx` | Agency Console integration — see [CMS.md](./CMS.md) |
| `public/images/CREDITS.md` | Every photo is stock; what to replace and how |

## Design decisions worth keeping

- **Warm and earthy, never a Cinco de Mayo flyer.** Masa cream and espresso
  carry the page; terracotta and olive support; chili red is an accent only and
  is never used as a large surface. No flags, sombreros, cartoon peppers or
  fake "authentic" badges.
- **Fraunces / Archivo / IBM Plex Mono.** A warm optical serif for display, a
  grotesk for reading, a mono for the small uppercase labels and coordinates.
- **The food is the only decoration.** Photography does the emotional work.
- **The concept is "find the truck", not "visit our restaurant"** — because the
  roaming truck is the part of this business that is actually verifiable.
- **Scroll reveals can never hide content.** The concealed state is opt-in via a
  `.js-reveal` class set before paint, and only when the animation can finish
  (tab visible, motion allowed). A background tab or a no-JS load renders the
  page fully visible. This exact bug once shipped a blank page to production on
  another Launchly site.

## Accessibility

Semantic landmarks, one `h1`, ordered headings, skip link, visible focus rings
(lightened on dark surfaces), 44px minimum tap targets, alt text on every
image, `prefers-reduced-motion` respected, and no information carried by colour
alone. Verified: no horizontal overflow at any width.
