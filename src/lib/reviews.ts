/**
 * Customer reviews.
 *
 * THIS ARRAY IS DELIBERATELY EMPTY. Do not fill it with anything the business
 * did not supply or that cannot be linked to a real, public review.
 *
 * Why it is empty rather than populated from the public listings:
 *
 * Only three of Chelita's ~34 public reviews are actually exposed on the
 * aggregator pages, and they are a mixed set — one complains about wait times,
 * one is a bare "Is closed", and one is a generic positive. Publishing only
 * the positive one on the business's own website would be cherry-picking a
 * misleading sample from a body of reviews the visitor cannot see. Ratings
 * also disagree across platforms (Google 4.4 · Yelp 4.4 · Facebook 3.2), so no
 * aggregate is defensible either.
 *
 * The Reviews section therefore shows verified recurring THEMES (what
 * reviewers repeatedly mention, published as keywords by the aggregator) and
 * links out so visitors can read the real thing and judge for themselves.
 *
 * When the owner supplies real, attributable reviews — or points at a live
 * Google listing whose reviews can be quoted with a name and date — add them
 * here and the section will render them automatically.
 */

export type Review = {
  quote: string;
  author: string;
  /** Where a visitor can go and read this exact review. */
  sourceLabel: string;
  sourceUrl?: string;
  date: string;
};

export const reviews: readonly Review[] = [];
