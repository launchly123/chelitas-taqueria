import Link from "next/link";
import { business, social, status } from "@/lib/business";
import { Logo } from "./Logo";
import { InstagramIcon, FacebookIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-espresso border-t border-masa/10 bg-espresso pb-28 pt-16 text-masa lg:pb-16">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-[30ch] text-sm leading-relaxed text-cream-mute">
              {business.descriptor} serving Mexican food around {business.city},{" "}
              {business.state}.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-[family-name:var(--font-mono)] text-[0.625rem] uppercase tracking-[0.18em] text-cream-mute">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/#menu"
                  className="inline-flex min-h-[44px] items-center text-sm text-masa/85 transition-colors hover:text-masa"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/#story"
                  className="inline-flex min-h-[44px] items-center text-sm text-masa/85 transition-colors hover:text-masa"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/#find-us"
                  className="inline-flex min-h-[44px] items-center text-sm text-masa/85 transition-colors hover:text-masa"
                >
                  Find Us
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="font-[family-name:var(--font-mono)] text-[0.625rem] uppercase tracking-[0.18em] text-cream-mute">
              Contact
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={business.phoneHref}
                  className="inline-flex min-h-[44px] items-center text-sm text-masa/85 transition-colors hover:text-masa"
                >
                  {business.phone}
                </a>
              </li>
              <li>
                <span className="text-sm text-cream-mute">
                  {business.city}, {business.state}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-[family-name:var(--font-mono)] text-[0.625rem] uppercase tracking-[0.18em] text-cream-mute">
              Follow
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-masa/25 text-masa transition-colors hover:border-masa hover:bg-masa hover:text-espresso"
                aria-label="Chelita's Taqueria on Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-masa/25 text-masa transition-colors hover:border-masa hover:bg-masa hover:text-espresso"
                aria-label="Chelita's Taqueria on Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-5 font-[family-name:var(--font-mono)] text-[0.625rem] uppercase tracking-[0.16em] text-cream-mute">
              {social.handle}
            </p>
          </div>
        </div>

        {(!status.operatingConfirmed || !status.hoursConfirmed) && (
          <p className="mt-14 max-w-[70ch] border-t border-masa/10 pt-8 text-xs leading-relaxed text-cream-mute">
            Hours, current location and menu are not published on this site
            because the available public listings contradict one another. Please
            call {business.phone} or check Instagram to confirm before
            travelling.
          </p>
        )}

        <div className="mt-10 flex flex-col gap-3 border-t border-masa/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[family-name:var(--font-mono)] text-[0.625rem] uppercase tracking-[0.16em] text-cream-mute">
            &copy; {year} {business.name}
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[0.625rem] uppercase tracking-[0.16em] text-cream-mute">
            36.7378&deg; N, 119.7871&deg; W
          </p>
        </div>
      </div>
    </footer>
  );
}
