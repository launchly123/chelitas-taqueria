import { reviews } from "@/lib/reviews";
import { reviewThemes, social } from "@/lib/business";
import { Reveal } from "@/components/ui/Reveal";

/**
 * What reviewers actually say — themes, not invented testimonials.
 *
 * `reviews` is empty by design (see src/lib/reviews.ts). If it is ever
 * populated with real, attributable reviews this section renders them instead
 * of the themes block. Nothing here is fabricated and there is no star rating,
 * because the platforms disagree and none of the numbers is checkable.
 *
 * Headed blocks use h3 + p rather than a <dl>: description lists are invisible
 * to the Agency Console's editor, which would quietly lock this copy.
 */

const points = [
  {
    title: "The meat",
    body: "Asado, grilled beef, stewed steak — the words that come up again and again in reviews are all about what came off the grill.",
  },
  {
    title: "Tacos first",
    body: "Tacos are the single most mentioned thing on the menu. If it's a first visit, that's the answer.",
  },
  {
    title: "Salsa matters",
    body: "Salsa gets named often enough to be worth saying out loud. Ask for both and pick a side.",
  },
  {
    title: "Family run",
    body: "A small operation where the people cooking own the place. That's the business's own description, not a marketing line.",
  },
];

export function Reviews() {
  return (
    <section className="relative overflow-hidden bg-masa py-24 sm:py-32">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <Reveal className="max-w-[46rem]">
          <p className="eyebrow text-chili">Why people come back</p>
          <h2 className="mt-5 text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.95]">
            The same words, over and over.
          </h2>
        </Reveal>

        {reviews.length > 0 ? (
          <div className="mt-16 grid gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <Reveal key={review.quote} as="figure" className="flex flex-col">
                <blockquote className="font-[family-name:var(--font-display)] text-xl italic leading-snug text-espresso">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 font-[family-name:var(--font-mono)] text-[0.625rem] uppercase tracking-[0.16em] text-ink-mute">
                  {review.author} &middot; {review.sourceLabel} &middot;{" "}
                  {review.date}
                </figcaption>
              </Reveal>
            ))}
          </div>
        ) : (
          <>
            {/* The themes themselves, set as a piece of typography. */}
            <Reveal className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mt-16">
              {reviewThemes.map((theme) => (
                <span
                  key={theme}
                  className="border border-espresso/15 px-4 py-2 font-[family-name:var(--font-mono)] text-[0.6875rem] uppercase tracking-[0.14em] text-ink-mute"
                >
                  {theme}
                </span>
              ))}
            </Reveal>
            <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-ink-mute">
              These are the terms that recur most across Chelita&rsquo;s public
              reviews, as published by the listing aggregators &mdash; not a
              selection made here.
            </p>

            <div className="mt-16 grid gap-x-10 gap-y-12 sm:mt-20 sm:grid-cols-2">
              {points.map((point, i) => (
                <Reveal key={point.title} delay={i * 70}>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-espresso">
                    {point.title}
                  </h3>
                  <p className="mt-3 max-w-[46ch] text-base leading-relaxed text-ink-mute">
                    {point.body}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16 max-w-[62ch] border-l-2 border-espresso/20 pl-6">
              <p className="text-base leading-relaxed text-ink-mute">
                We don&rsquo;t publish customer quotes here. Chelita&rsquo;s has
                real reviews across Google, Yelp and Facebook, and reading them
                in full is a fairer picture than any few lines we could pull
                out. Find them, and the latest from the truck, on{" "}
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-espresso underline underline-offset-4 transition-colors hover:text-chili"
                >
                  Instagram
                </a>
                .
              </p>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
