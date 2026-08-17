# Before this goes live as Chelita's real website

**Status: premium redesign concept. It does not claim the business is open.**

Public records for Chelita's Taqueria contradict each other badly. This site is
built to be honest about that rather than to guess. Everything below needs a
yes/no from the owner before the site should be promoted as the business's
live web presence.

---

## The conflict, in full

Researched 17 Aug 2026.

| Source | Address | Hours | Status |
|---|---|---|---|
| Yelp | 1237 Fulton St | — | **CLOSED** (page updated June 2026) |
| RestaurantGuru | 1237 Fulton St | Mon–Fri 8:30–14:00 | **Permanently closed** |
| Visit Fresno County | 1237 Fulton St | — | Active "Family Owned Taco Truck!" |
| NetWaiter | 1237 Fulton St | Mon–Fri 8:00–17:30 | Listed as live |
| Leisure Dock | **517 W McKinley Ave** | — | Listed Jan 2026 |
| Instagram bio | **2021 N Fresno St**, CRMC, Tesoro Viejo | 10–15 / 11–14 / 17–20 | Last post seen June 2025 |

Four different addresses. At least four different sets of hours. Two sources
calling the flagship address closed while the county tourism board still
promotes it.

**The one thing every source agrees on is the phone number: (559) 800-0022.**

The most likely reading — not confirmed — is that the Fulton Street storefront
closed and the business continued as a roaming truck. That is why the site is
built around finding the truck rather than around a fixed address. But the
Instagram feed has been quiet since June 2025, so even "the truck is currently
operating" is not something this site asserts.

---

## Questions for the owner

Tick these off, then update `src/lib/business.ts`.

- [ ] **Is the business currently operating?**
- [ ] **What is the current address**, or is it truck-only with a rotation?
- [ ] If it rotates — what is the current weekly schedule?
- [ ] **Is 1237 Fulton St finished for good?** (Two sites say permanently closed. If so it should probably come off the "where it has been seen" list entirely.)
- [ ] **Is (559) 800-0022 still the right number?**
- [ ] **Current hours?**
- [ ] **Current menu** — is the item list in `src/lib/menu.ts` still accurate?
- [ ] **Current prices** — the site shows none. Should it?
- [ ] Takeout? Delivery? Online ordering — and if so, through whom?
- [ ] **Which social accounts are live?** There are at least three Facebook URLs floating around for this business; the site links to `facebook.com/chelitastaqueriafresno`. Confirm that's the right one.
- [ ] Is the Instagram account still being posted to?
- [ ] Any real reviews they want quoted, with permission?
- [ ] **Real photographs** — see `public/images/CREDITS.md`.

---

## How to switch the site from "concept" to "live business page"

Everything is driven by one object in `src/lib/business.ts`:

```ts
export const status = {
  operatingConfirmed: false,
  locationsConfirmed: false,
  hoursConfirmed:     false,
  menuConfirmed:      false,
  orderingConfirmed:  false,
};
```

Flipping a flag to `true` removes the corresponding "we can't confirm this"
disclosure from the page. **Do not flip any of them until the underlying fact is
actually confirmed** — the disclosures are the only thing currently keeping the
site honest.

Then:

1. Put the confirmed address/hours into `business.ts`.
2. Add `openingHoursSpecification` and `streetAddress` to
   `src/components/StructuredData.tsx` — they are deliberately omitted now.
3. If online ordering is confirmed, add the "Order Now" CTA. There is no
   ordering button anywhere on the site today because there is nowhere honest
   to send people.

## Things that were deliberately NOT done

Each of these is a decision, not an oversight:

- **No opening hours anywhere**, including in the structured data.
- **No prices.** Old prices are worse than none, invented prices are worse still.
- **No star rating / `aggregateRating`.** Google says 4.4, Yelp 4.4, Facebook
  3.2. None is verifiable, and Google ignores review markup a business hosts
  about itself anyway.
- **No testimonial quotes.** Only 3 of ~34 public reviews are actually visible,
  and they are mixed — one is literally "Is closed". Publishing only the
  positive one would be a misleading sample. The section shows aggregated
  review *themes* instead and links out.
- **No founding year, founder names, or family story.** None of it is on the
  public record.
- **No "featured in" logo wall.** One real listing (Visit Fresno County),
  linked so it can be checked.
- **No photo of a taco truck.** A stock photo of another business's branded
  truck would be a lie told in pictures.
- **"Get Directions" opens a Google Maps *search*,** not a pinned address, so
  it always resolves to whatever Google currently knows and can never send
  someone to a closed lot on our say-so.
