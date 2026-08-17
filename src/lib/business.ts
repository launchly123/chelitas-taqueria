/**
 * Chelita's Taqueria — single source of truth for business facts.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * READ THIS BEFORE EDITING. The verification state of this business is the
 * single most important thing about this file.
 * ─────────────────────────────────────────────────────────────────────────
 *
 * Third-party listings for Chelita's CONTRADICT EACH OTHER. As of Aug 2026:
 *
 *   • Yelp          — "CLOSED" at 1237 Fulton St (updated June 2026)
 *   • RestaurantGuru— "Permanently closed", 1237 Fulton St
 *   • Visit Fresno  — still lists 1237 Fulton St, describes an ACTIVE
 *     County          "Family Owned Taco Truck"
 *   • Instagram bio — a roaming schedule at completely different locations
 *     (@chelitastaqueria) (N Fresno St / CRMC / Tesoro Viejo); most recent
 *     post seen was June 2025
 *   • Leisure Dock  — a fourth address: 517 W McKinley Ave
 *
 * FOUR different addresses and at least four different sets of hours. The one
 * thing every source agrees on is the phone number and that it is a
 * family-owned Mexican taco truck in Fresno.
 *
 * Therefore this site DOES NOT claim the business is open, closed, at a
 * particular address, or serving particular hours. Everything uncertain lives
 * behind `verified: false` and renders with an explicit "confirm before you
 * go" treatment. `status` below drives that behaviour site-wide.
 *
 * TO TAKE THIS SITE LIVE AS A REAL BUSINESS PAGE: confirm the open items in
 * VERIFY.md with the owner, fill in the real values here, and flip
 * `status.locationsConfirmed` / `status.hoursConfirmed` to true. Nothing else
 * needs to change — the components read from this file.
 */

export const business = {
  name: "Chelita's Taqueria",
  shortName: "Chelita's",

  /** Verified: identical across Visit Fresno County, Yelp, RestaurantGuru,
   *  NetWaiter and Leisure Dock. The most reliable fact we have. */
  phone: "(559) 800-0022",
  phoneHref: "tel:+15598000022",

  city: "Fresno",
  state: "CA",
  stateLong: "California",

  /** Verified, verbatim from the Visit Fresno County listing. */
  descriptor: "Family Owned Taco Truck",

  /** Verified: their own vendor profile on Marketspread. */
  selfDescription:
    "We are a family owned food truck who sells authentic Mexican food!",

  cuisine: "Mexican",
} as const;

/**
 * Drives every "is this claim safe to show?" decision in the UI.
 * Flip these to true only once the owner has confirmed the underlying facts.
 */
export const status = {
  /** Is the business currently trading? Genuinely unknown — sources conflict. */
  operatingConfirmed: false,
  /** Which address(es) are current? Four candidates, none confirmed. */
  locationsConfirmed: false,
  /** Opening hours. At least four conflicting sets on record. */
  hoursConfirmed: false,
  /** Current menu and prices. Only old third-party listings exist. */
  menuConfirmed: false,
  /** Takeout / delivery / online ordering. Listings disagree. */
  orderingConfirmed: false,
} as const;

/**
 * Every location Chelita's has been publicly associated with, each tagged with
 * where the claim came from. NOTHING here is presented as "come here now".
 * The UI renders these as a history of where the truck has been seen, with the
 * social feed as the live source of truth.
 */
export const knownLocations = [
  {
    label: "Downtown — Fulton Street",
    address: "1237 Fulton St, Fresno, CA 93721",
    note: "The long-standing listed address. Yelp and RestaurantGuru now mark this location closed.",
    source: "Visit Fresno County / Yelp / RestaurantGuru",
    verified: false,
  },
  {
    label: "North Fresno Street",
    address: "2021 N Fresno St, Fresno, CA",
    note: "Listed on the truck's own Instagram bio as a weekday stop.",
    source: "Instagram @chelitastaqueria",
    verified: false,
  },
  {
    label: "Community Regional Medical Center",
    address: "Fresno, CA",
    note: "A midday weekday stop on the truck's published rotation.",
    source: "Instagram @chelitastaqueria",
    verified: false,
  },
  {
    label: "Tesoro Viejo",
    address: "Madera County, CA",
    note: "An evening stop on the truck's published rotation.",
    source: "Instagram @chelitastaqueria",
    verified: false,
  },
] as const;

/** Verified: these accounts exist and carry the business's name. */
export const social = {
  handle: "@ChelitasTaqueria",
  instagram: "https://www.instagram.com/chelitastaqueria/",
  facebook: "https://www.facebook.com/chelitastaqueriafresno/",
} as const;

/** Verified: a live listing on the county tourism board's site. */
export const tourism = {
  name: "Visit Fresno County",
  url: "https://www.visitfresnocounty.org/listing/chelitas-taqueria/944/",
  quote: "Family Owned Taco Truck!",
} as const;

/**
 * Verified: Chelita's is a registered vendor with this Fresno food-truck event
 * organiser (their Marketspread vendor profile lists it).
 */
export const events = {
  name: "559 Street Feasts",
  note: "Listed as a vendor with the Fresno food-truck event organiser.",
} as const;

/**
 * What reviewers actually and repeatedly mention. These are aggregated review
 * KEYWORDS published by RestaurantGuru — not invented quotes, and not
 * cherry-picked. No testimonial on this site is fabricated; see
 * `src/lib/reviews.ts`.
 */
export const reviewThemes = [
  "tacos",
  "asado",
  "grilled beef",
  "stewed steak",
  "roasted meat",
  "burritos",
  "salsa",
] as const;

/**
 * Ratings differ by platform and none is independently checkable, so the site
 * shows NO aggregate rating and the structured data omits `aggregateRating`
 * entirely. Recorded here only so nobody "helpfully" adds one later.
 *   Google 4.4 (36) · Yelp 4.4 (22) · Facebook 3.2 (24)
 */
export const ratingsAreNotPublished = true;

/**
 * Canonical origin. Falls back to the Vercel production URL so canonical/OG
 * tags never point at a domain the client does not own yet.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://chelitas-taqueria.vercel.app";
