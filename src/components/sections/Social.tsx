import { social } from "@/lib/business";
import { Reveal } from "@/components/ui/Reveal";
import { InstagramIcon, FacebookIcon } from "@/components/icons";

/**
 * Social is genuinely load-bearing for this business — the tourism board's own
 * listing tells people to follow the socials to find the truck, so these are
 * the most useful links on the page.
 *
 * The gallery below renders `socialGallery`, which is EMPTY. It is not filled
 * with stock food photography: tiles in a "follow us" grid read as the
 * business's own posts, and dressing stock images up as Chelita's Instagram
 * would be a lie told in pictures. Drop real post images into the array and
 * the grid appears.
 */

type SocialPost = {
  src: string;
  alt: string;
  href: string;
};

const socialGallery: readonly SocialPost[] = [];

export function Social() {
  return (
    <section className="on-espresso relative overflow-hidden bg-espresso py-24 text-masa sm:py-32">
      <div
        aria-hidden
        className="grain-layer pointer-events-none absolute inset-0 opacity-[0.04]"
      />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8">
        <Reveal className="max-w-[52rem]">
          <p className="eyebrow text-chili-300">Follow Chelita&rsquo;s</p>
          <h2 className="mt-5 text-[clamp(2.75rem,8vw,6rem)] leading-[0.9] text-masa">
            {social.handle}
          </h2>
          <p className="mt-8 max-w-[48ch] text-lg leading-relaxed text-cream-mute">
            Where the truck is parked, what&rsquo;s on today, when it&rsquo;s
            out at an event &mdash; it all goes to Instagram and Facebook
            first.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 bg-masa px-8 font-[family-name:var(--font-mono)] text-[0.75rem] uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-chili hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 border border-masa/35 px-8 font-[family-name:var(--font-mono)] text-[0.75rem] uppercase tracking-[0.16em] text-masa transition-colors hover:border-masa hover:bg-masa hover:text-espresso"
            >
              <FacebookIcon className="h-4 w-4" />
              Facebook
            </a>
          </div>
        </Reveal>

        {socialGallery.length > 0 && (
          <div className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-4">
            {socialGallery.map((post) => (
              <a
                key={post.src}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden bg-espresso-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.src}
                  alt={post.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
