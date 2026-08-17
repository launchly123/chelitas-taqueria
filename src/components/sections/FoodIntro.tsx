import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The appetite section. Photography does the arguing; the copy stays short and
 * makes no claim about recipes, technique or family history that we cannot
 * support. Images overlap the section edges so the page reads as an editorial
 * spread rather than a stack of cards.
 */
export function FoodIntro() {
  return (
    <section className="relative overflow-hidden bg-masa py-24 sm:py-32">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-chili">The Food</p>
            <h2 className="mt-5 text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.95]">
              Simple food. Serious flavor.
            </h2>
            <p className="mt-7 max-w-[42ch] text-lg leading-relaxed text-ink-mute">
              Tortillas, meat off the grill, onion, cilantro, salsa. Nothing
              hiding behind a garnish. It&rsquo;s the kind of food that
              doesn&rsquo;t need a description to sell it &mdash; you smell it
              from the sidewalk and that&rsquo;s the whole pitch.
            </p>
            <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-ink-mute">
              Reviewers keep coming back to the same handful of words: tacos,
              asado, grilled beef, salsa. Take that as the menu recommendation.
            </p>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <Reveal className="col-span-1 mt-0 sm:mt-14" delay={80}>
                <figure>
                  <div className="relative aspect-[3/4] overflow-hidden bg-masa-2">
                    <Image
                      src="/images/hands-taco-plate.jpg"
                      alt="Two hands holding a red plate with a chorizo taco topped with guacamole, onion and cilantro."
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 font-[family-name:var(--font-mono)] text-[0.625rem] uppercase tracking-[0.16em] text-ink-mute">
                    Handed over the counter
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal className="col-span-1" delay={160}>
                <figure>
                  <div className="relative aspect-[3/4] overflow-hidden bg-masa-2">
                    <Image
                      src="/images/salsas-clay-bowls.jpg"
                      alt="Salsa roja and salsa verde in clay bowls on dark wood, surrounded by fresh chiles and nopales."
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 font-[family-name:var(--font-mono)] text-[0.625rem] uppercase tracking-[0.16em] text-ink-mute">
                    Red or green
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
