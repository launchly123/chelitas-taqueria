"use client";

import * as React from "react";

/**
 * Flips [data-reveal] elements to [data-reveal="in"] as they scroll into view.
 *
 * The concealed state only exists when <html> carries `.js-reveal`, which the
 * inline gate in layout.tsx adds before first paint and only when the reveal
 * can actually run (tab visible, motion not reduced). This observer therefore
 * never has to "rescue" content — if it never runs, nothing was hidden.
 *
 * The backstop below is deliberately conditional on nothing having revealed
 * yet: an unconditional reveal-all also fires on healthy loads and would
 * flatten the entire scroll animation.
 */
export function RevealObserver() {
  React.useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (nodes.length === 0) return;

    if (!document.documentElement.classList.contains("js-reveal")) {
      // Never concealed — nothing to do.
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay || 0);
          window.setTimeout(() => {
            el.setAttribute("data-reveal", "in");
          }, delay);
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    for (const node of nodes) observer.observe(node);

    // If, after a beat, the observer has revealed nothing at all, something
    // went wrong (layout thrash, an odd viewport) — show everything.
    const backstop = window.setTimeout(() => {
      const anyRevealed = nodes.some(
        (n) => n.getAttribute("data-reveal") === "in",
      );
      if (!anyRevealed) {
        for (const n of nodes) n.setAttribute("data-reveal", "in");
      }
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(backstop);
    };
  }, []);

  return null;
}
