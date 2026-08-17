import Link from "next/link";
import { business, social } from "@/lib/business";
import { MenuIcon, PhoneIcon, PinIcon, InstagramIcon } from "./icons";

/**
 * Sticky mobile bar. Someone standing downtown deciding where to eat needs
 * four things within thumb reach: the menu, the phone, where it is, and the
 * feed that says where it is today. No ordering action — online ordering has
 * not been verified to exist, so there is nowhere honest to send them.
 */
const actions = [
  { label: "Menu", href: "/#menu", Icon: MenuIcon, external: false },
  { label: "Call", href: business.phoneHref, Icon: PhoneIcon, external: true },
  { label: "Find", href: "/#find-us", Icon: PinIcon, external: false },
  {
    label: "Follow",
    href: social.instagram,
    Icon: InstagramIcon,
    external: true,
  },
];

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-masa/10 bg-espresso/97 backdrop-blur-md lg:hidden">
      <nav aria-label="Quick actions" className="mx-auto grid max-w-lg grid-cols-4">
        {actions.map(({ label, href, Icon, external }) =>
          external ? (
            <a
              key={label}
              href={href}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex min-h-[60px] flex-col items-center justify-center gap-1.5 text-masa/85 transition-colors hover:text-masa"
            >
              <Icon className="h-[18px] w-[18px]" />
              <span className="font-[family-name:var(--font-mono)] text-[0.5625rem] uppercase tracking-[0.14em]">
                {label}
              </span>
            </a>
          ) : (
            <Link
              key={label}
              href={href}
              className="flex min-h-[60px] flex-col items-center justify-center gap-1.5 text-masa/85 transition-colors hover:text-masa"
            >
              <Icon className="h-[18px] w-[18px]" />
              <span className="font-[family-name:var(--font-mono)] text-[0.5625rem] uppercase tracking-[0.14em]">
                {label}
              </span>
            </Link>
          ),
        )}
      </nav>
    </div>
  );
}
