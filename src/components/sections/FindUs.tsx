import { business, status, knownLocations, social } from "@/lib/business";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Location section — the hardest part of this site to do honestly.
 *
 * Public listings give FOUR different addresses and at least four different
 * sets of hours, and two of them mark the long-standing Fulton Street address
 * closed. So this section:
 *
 *   • states no opening hours at all
 *   • sends nobody to a specific address as though it were today's
 *   • lists every address on record WITH its source, as history
 *   • makes the phone number and the social feed the primary actions,
 *     because those are the two things that actually still work
 *
 * "Get directions" deliberately opens a Google Maps SEARCH for the business
 * rather than a pinned address: the search resolves to whatever Google
 * currently knows, so it can never send someone to a closed lot on our say-so.
 *
 * When the owner confirms the real address and hours, put them in business.ts
 * and flip `status.locationsConfirmed` / `status.hoursConfirmed`.
 */

const mapsSearch =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Chelita's Taqueria Fresno CA");

const mapsEmbed =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Chelita's Taqueria Fresno CA") +
  "&output=embed";

export function FindUs() {
  return (
    <section
      id="find-us"
      className="relative scroll-mt-20 overflow-hidden bg-masa-2 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-chili">Find Us</p>
            <h2 className="mt-5 text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.95]">
              Find the truck.
            </h2>
            <p className="mt-7 max-w-[44ch] text-lg leading-relaxed text-ink-mute">
              It moves. That&rsquo;s the point of a truck &mdash; and it&rsquo;s
              why the social feed, not this page, is the place to check
              where it is today.
            </p>

            {/* Phone: the one contact detail every source agrees on. */}
            <div className="mt-10 border-t border-espresso/15 pt-8">
              <p className="font-[family-name:var(--font-mono)] text-[0.625rem] uppercase tracking-[0.18em] text-ink-mute">
                Call the truck
              </p>
              <a
                href={business.phoneHref}
                className="mt-3 inline-block font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,2.75rem)] leading-none text-espresso transition-colors hover:text-chili"
              >
                {business.phone}
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={mapsSearch}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center bg-chili px-8 font-[family-name:var(--font-mono)] text-[0.75rem] uppercase tracking-[0.16em] text-white transition-colors hover:bg-chili-700"
              >
                Get Directions
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center border border-espresso/25 px-8 font-[family-name:var(--font-mono)] text-[0.75rem] uppercase tracking-[0.16em] text-espresso transition-colors hover:border-espresso hover:bg-espresso hover:text-masa"
              >
                Today&rsquo;s Location
              </a>
            </div>

            {!status.hoursConfirmed && (
              <p className="mt-8 max-w-[46ch] border-l-2 border-chili pl-5 text-base leading-relaxed text-ink-mute">
                Hours aren&rsquo;t listed here because the published ones
                disagree with each other. Call or check Instagram before making
                the trip &mdash; it saves a wasted drive.
              </p>
            )}
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden border border-espresso/15 bg-masa-3 sm:aspect-[16/10]">
                <iframe
                  src={mapsEmbed}
                  title="Map showing Chelita's Taqueria in Fresno, California"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </Reveal>

            <Reveal className="mt-10" delay={100}>
              <h3 className="font-[family-name:var(--font-mono)] text-[0.625rem] uppercase tracking-[0.18em] text-ink-mute">
                Where it has been seen
              </h3>

              <ul className="mt-5">
                {knownLocations.map((location) => (
                  <li
                    key={location.label}
                    className="border-t border-espresso/15 py-5"
                  >
                    <p className="font-[family-name:var(--font-display)] text-xl text-espresso">
                      {location.label}
                    </p>
                    <p className="mt-1.5 text-base text-ink-mute">
                      {location.address}
                    </p>
                    <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-ink-mute">
                      {location.note}
                    </p>
                    <p className="mt-2 font-[family-name:var(--font-mono)] text-[0.5625rem] uppercase tracking-[0.16em] text-ink-mute/80">
                      Source: {location.source} &middot; not confirmed by the
                      business
                    </p>
                  </li>
                ))}
                <li className="border-t border-espresso/15" />
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
