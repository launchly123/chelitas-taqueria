"use client";

import * as React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { cn } from "@/lib/cn";

const nav = [
  { label: "Menu", href: "/#menu" },
  { label: "Our Story", href: "/#story" },
  { label: "Find Us", href: "/#find-us" },
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet on Escape, and lock the page behind it.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "bg-espresso/95 backdrop-blur-md"
          : "bg-gradient-to-b from-espresso/70 to-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[86rem] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="text-masa transition-opacity hover:opacity-80"
          aria-label="Chelita's Taqueria — home"
        >
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-9 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-[family-name:var(--font-mono)] text-[0.6875rem] uppercase tracking-[0.18em] text-masa/80 transition-colors hover:text-masa"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#menu"
            className="inline-flex min-h-[42px] items-center bg-chili px-6 font-[family-name:var(--font-mono)] text-[0.6875rem] uppercase tracking-[0.18em] text-white transition-colors hover:bg-chili-700"
          >
            View Menu
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center text-masa lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-3.5 w-6">
            <span
              className={cn(
                "absolute left-0 block h-px w-6 bg-current transition-transform duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-px w-6 bg-current transition-transform duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-masa/10 bg-espresso lg:hidden"
      >
        <nav className="px-5 py-4 sm:px-8" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[52px] items-center border-b border-masa/10 font-[family-name:var(--font-display)] text-2xl text-masa"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#menu"
            onClick={() => setOpen(false)}
            className="mt-5 flex min-h-[52px] items-center justify-center bg-chili font-[family-name:var(--font-mono)] text-[0.75rem] uppercase tracking-[0.18em] text-white"
          >
            View Menu
          </Link>
        </nav>
      </div>
    </header>
  );
}
