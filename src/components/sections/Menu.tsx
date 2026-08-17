import Image from "next/image";
import { menu } from "@/lib/menu";
import { status, social } from "@/lib/business";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The menu, built as a menu BOARD rather than a price grid — oversized
 * numerals, category names at display size, items set quietly beneath.
 *
 * No prices appear anywhere. The item list comes from older third-party
 * listings and has not been confirmed by the business, which the notice at the
 * foot says plainly rather than burying. See src/lib/menu.ts.
 */
export function Menu() {
  return (
    <section
      id="menu"
      className="on-espresso relative scroll-mt-20 overflow-hidden bg-espresso py-24 text-masa sm:py-32"
    >
      <div
        aria-hidden
        className="grain-layer pointer-events-none absolute inset-0 opacity-[0.04]"
      />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8">
        <Reveal className="max-w-[52rem]">
          <p className="eyebrow text-chili-300">The Menu</p>
          <h2 className="mt-5 text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.95] text-masa">
            What&rsquo;s on the board
          </h2>
        </Reveal>

        <div className="mt-16 sm:mt-20">
          {menu.map((category, i) => (
            <div key={category.name}>
              <Reveal className="border-t border-masa/15 py-10 sm:py-14">
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-5">
                    <div className="flex items-baseline gap-5">
                      <span className="font-[family-name:var(--font-mono)] text-[0.75rem] tracking-[0.1em] text-chili-300">
                        {category.index}
                      </span>
                      <h3 className="text-[clamp(2rem,5vw,3.25rem)] leading-none text-masa">
                        {category.name}
                      </h3>
                    </div>
                    <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-cream-mute">
                      {category.blurb}
                    </p>
                  </div>

                  <ul className="grid grid-cols-1 gap-x-10 gap-y-3 self-center sm:grid-cols-2 lg:col-span-7">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline justify-between gap-4 border-b border-masa/10 pb-3 text-lg text-masa/90"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* A full-bleed plate between the second and third categories,
                  so the list never runs long enough to feel like a spreadsheet. */}
              {i === 1 && (
                <Reveal className="relative -mx-5 my-4 sm:-mx-8">
                  <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[21/9]">
                    <Image
                      src="/images/taqueria-plate.jpg"
                      alt="A plate of three tacos with rice, refried beans, radish and lime on a turquoise plate."
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              )}
            </div>
          ))}
          <div className="border-t border-masa/15" />
        </div>

        {!status.menuConfirmed && (
          <Reveal className="mt-14 max-w-[62ch] border-l-2 border-chili pl-6">
            <p className="font-[family-name:var(--font-mono)] text-[0.6875rem] uppercase tracking-[0.16em] text-chili-300">
              Before you order
            </p>
            <p className="mt-3 text-base leading-relaxed text-cream-mute">
              This list is drawn from previously published menus and
              hasn&rsquo;t been confirmed as current, so prices aren&rsquo;t
              shown. Check{" "}
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-masa underline underline-offset-4 transition-colors hover:text-chili-300"
              >
                Instagram
              </a>{" "}
              or call ahead for what&rsquo;s being served today.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
