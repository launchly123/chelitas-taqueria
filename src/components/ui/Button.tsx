import Link from "next/link";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 min-h-[48px] px-7 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200";

const variants = {
  chili: "bg-chili text-white hover:bg-chili-700",
  outlineDark:
    "border border-espresso/25 text-espresso hover:border-espresso hover:bg-espresso hover:text-masa",
  outlineLight:
    "border border-masa/35 text-masa hover:border-masa hover:bg-masa hover:text-espresso",
} as const;

export function Button({
  href,
  children,
  variant = "chili",
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
}) {
  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
