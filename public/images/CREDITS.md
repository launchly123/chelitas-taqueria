# Photography credits and status

**None of these are photographs of Chelita's Taqueria.** Every image below is
licensed stock standing in for the real thing. They were chosen to match the
warm, close, slightly imperfect look the brand calls for, but they are
placeholders and the site is built so that swapping them is a one-file change.

| File | Used in | Source |
|---|---|---|
| `hero-asada-tacos.jpg` | Hero | Pexels 7613561 |
| `hands-taco-plate.jpg` | The Food | Pexels 26842781 |
| `salsas-clay-bowls.jpg` | The Food | Pexels 5737247 |
| `tacos-tray.jpg` | Our Story | Pexels 36498703 |
| `taqueria-plate.jpg` | Menu interstitial | Pexels 2092507 |

Pexels' licence permits commercial use with no attribution required, so these
are safe to ship. They are still stock.

## Why there are no real photos here yet

Philip has the owner's permission to use Chelita's real pictures, but the
photos themselves were not obtainable in this build:

- **Instagram** (`@chelitastaqueria`, ~1,980 followers) is where the real food
  photography lives. Instagram serves only a logged-out shell to scripted
  requests — the post images require an authenticated session, so they could
  not be downloaded here.
- **Yelp** has 62 photos on the listing but returns HTTP 403 to scripted
  requests.
- **RestaurantGuru** did expose four genuine images. All four were rejected on
  sight: one is a good breakfast-burrito shot but has RestaurantGuru's cartoon
  logo watermarked into the corner, one is a half-eaten plate, one is unrelated
  wall decor, and one is a placeholder avatar. They are also customer-uploaded,
  so the copyright belongs to the reviewer rather than to the business.

## To swap in the real photos

1. Get the original files from the owner — ideally straight off the phone
   rather than re-downloaded from Instagram, so they are full resolution and
   unambiguously theirs to license.
2. Drop them in this folder using the **same filenames** as the table above.
3. Nothing else needs to change. If a new image has a very different aspect
   ratio, check the `aspect-[…]` class on the corresponding component.

### What to ask the owner to shoot

The site is designed around these, in priority order:

1. **The truck itself** — exterior, ideally with the name visible. There is no
   truck photograph on the site at all right now, and deliberately so: a stock
   photo of somebody else's branded food truck would actively misrepresent the
   business, so the "find the truck" idea is carried by typography instead.
2. **Tacos, close and warm** — the hero image is the single most important one.
3. **Hands serving** — food being passed across the counter.
4. **The family / the people cooking.** The whole premise is that this is
   family-owned; right now no person connected to the business appears anywhere.
5. **Salsa, tortillas, the grill** — texture shots.
