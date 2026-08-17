import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";

/**
 * Cinematic opening. Full-bleed food photography, the wordmark stated once in
 * full, then the promise. Everything above the fold is a claim we can stand
 * behind: family-owned, Fresno, Mexican food, a truck that moves.
 */
export function Hero() {
  return (
    <section className="on-espresso relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-espresso">
      <Image
        src="/images/hero-asada-tacos.jpg"
        alt="Three carne asada tacos on corn tortillas, topped with chopped onion and cilantro, on a stoneware plate."
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Legibility scrim. Heavier at the foot where the type sits. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/45 to-espresso/15"
      />
      <div
        aria-hidden
        className="grain-layer pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
      />

      <div className="relative mx-auto w-full max-w-[86rem] px-5 pb-16 pt-32 sm:px-8 sm:pb-20">
        <p className="eyebrow text-masa/70">
          {business.city}, {business.stateLong}
        </p>

        <p className="mt-6 font-[family-name:var(--font-display)] text-[1.75rem] font-semibold italic leading-none text-masa sm:text-[2.25rem]">
          Chelita&rsquo;s Taqueria
        </p>

        <h1 className="mt-4 max-w-[13ch] text-[clamp(3rem,11vw,7.5rem)] font-semibold leading-[0.88] text-masa">
          Tacos worth finding.
        </h1>

        <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-masa/85 sm:text-xl">
          A family-owned taco truck serving Mexican food around Fresno. Follow
          it, and it&rsquo;s worth the drive.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/#menu"
            className="inline-flex min-h-[52px] items-center justify-center bg-chili px-8 font-[family-name:var(--font-mono)] text-[0.75rem] uppercase tracking-[0.16em] text-white transition-colors hover:bg-chili-700"
          >
            View Menu
          </Link>
          <Link
            href="/#find-us"
            className="inline-flex min-h-[52px] items-center justify-center border border-masa/35 px-8 font-[family-name:var(--font-mono)] text-[0.75rem] uppercase tracking-[0.16em] text-masa transition-colors hover:border-masa hover:bg-masa hover:text-espresso"
          >
            Find the Truck
          </Link>
        </div>
      </div>

      {/* Editorial caption — a small deliberate detail, not decoration. */}
      <p className="relative mx-auto w-full max-w-[86rem] border-t border-masa/15 px-5 py-4 font-[family-name:var(--font-mono)] text-[0.625rem] uppercase tracking-[0.18em] text-masa/45 sm:px-8">
        Family owned &middot; Mexican food &middot; Fresno, CA
      </p>
    </section>
  );
}
