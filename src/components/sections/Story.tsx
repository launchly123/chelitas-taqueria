import Image from "next/image";
import { business, tourism } from "@/lib/business";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Family-owned section.
 *
 * Everything here is either the business's own words (their vendor profile) or
 * the tourism board's words, quoted and attributed. There is no founder name,
 * no founding year, no generational story and no recipe origin — none of that
 * is on the public record, and inventing it on a real family's website would
 * be indefensible. If the owner supplies the real story it belongs here.
 */
export function Story() {
  return (
    <section
      id="story"
      className="relative scroll-mt-20 overflow-hidden bg-masa-2 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-masa-3">
              <Image
                src="/images/tacos-tray.jpg"
                alt="Three tacos — steak, ground beef and chicken — topped with guacamole and onion, served on a metal tray on a wooden table."
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={100}>
            <p className="eyebrow text-chili">Our Story</p>
            <h2 className="mt-5 text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.95]">
              Family owned, and it shows.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-ink-mute">
              Chelita&rsquo;s is a family-owned Mexican food business in Fresno.
              That&rsquo;s not a tagline someone wrote for them &mdash;
              it&rsquo;s how they describe themselves, and how the county
              tourism board describes them too.
            </p>

            <figure className="mt-9 border-l-2 border-chili pl-6">
              <blockquote className="font-[family-name:var(--font-display)] text-2xl italic leading-snug text-espresso sm:text-[1.75rem]">
                &ldquo;{business.selfDescription}&rdquo;
              </blockquote>
              <figcaption className="mt-4 font-[family-name:var(--font-mono)] text-[0.625rem] uppercase tracking-[0.16em] text-ink-mute">
                Chelita&rsquo;s Taqueria, in their own words
              </figcaption>
            </figure>

            <p className="mt-9 text-lg leading-relaxed text-ink-mute">
              A truck means the kitchen comes to you &mdash; a hospital shift, a
              street fair, a corner lot at lunchtime. It also means the
              people cooking are the people whose name is on the side.
            </p>

            <p className="mt-8 font-[family-name:var(--font-mono)] text-[0.6875rem] uppercase leading-relaxed tracking-[0.14em] text-ink-mute">
              Listed by{" "}
              <a
                href={tourism.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-espresso underline underline-offset-4 transition-colors hover:text-chili"
              >
                {tourism.name}
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
