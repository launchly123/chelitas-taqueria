import { tourism, events } from "@/lib/business";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Local identity + the one piece of real third-party validation we have.
 *
 * One genuine listing, linked so it can be checked, beats a wall of invented
 * "as featured in" badges. There is no logo wall here on purpose.
 */
export function Fresno() {
  return (
    <section className="on-espresso relative overflow-hidden bg-espresso py-24 text-masa sm:py-32">
      <div
        aria-hidden
        className="grain-layer pointer-events-none absolute inset-0 opacity-[0.04]"
      />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8">
        <Reveal className="max-w-[46rem]">
          <p className="eyebrow text-chili-300">Fresno, California</p>
          <h2 className="mt-5 text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.95] text-masa">
            Made for Fresno.
          </h2>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-cream-mute">
            Chelita&rsquo;s belongs to the part of Fresno&rsquo;s food scene
            that runs on word of mouth &mdash; downtown lots, hospital lunch
            rushes, street food events. Not the kind of place a guidebook sends
            you. The kind a local does.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-masa/15 sm:mt-20 sm:grid-cols-2">
          <Reveal className="bg-espresso p-8 sm:p-10">
            <p className="font-[family-name:var(--font-mono)] text-[0.625rem] uppercase tracking-[0.18em] text-cream-mute">
              Listed by
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-masa sm:text-[1.75rem]">
              {tourism.name}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-cream-mute">
              The county tourism board lists Chelita&rsquo;s under food trucks
              and describes it, word for word, as a{" "}
              <span className="text-masa">
                &ldquo;{tourism.quote}&rdquo;
              </span>
            </p>
            <a
              href={tourism.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[44px] items-center font-[family-name:var(--font-mono)] text-[0.6875rem] uppercase tracking-[0.16em] text-chili-300 underline underline-offset-4 transition-colors hover:text-masa"
            >
              View the listing
            </a>
          </Reveal>

          <Reveal className="bg-espresso p-8 sm:p-10" delay={100}>
            <p className="font-[family-name:var(--font-mono)] text-[0.625rem] uppercase tracking-[0.18em] text-cream-mute">
              Out at events
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-masa sm:text-[1.75rem]">
              {events.name}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-cream-mute">
              {events.note} Street food events are where a truck like this one
              gets found by people who weren&rsquo;t looking for it.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
