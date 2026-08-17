"use client";

import * as React from "react";

/**
 * Applies text/image edits made in the Launchly Agency Console to this page.
 *
 * The console's visual editor loads this site's real HTML in an iframe and
 * keys every editable node by its position in document order — text leaves
 * become "t0", "t1", … and images become "i0", "i1", …. It stores the edits
 * against those keys, and this component replays them on the live site.
 *
 * The traversal below is deliberately a line-for-line match of the tagger in
 * the console (app/api/client/sites/[slug]/preview-html/route.ts). If the two
 * ever drift, every override lands on the wrong element, so treat them as one
 * unit: change both or neither.
 *
 * ⚠️ Keys are positional, not stable identifiers. Adding, removing, or
 * reordering any text node or image on this page shifts every key after it and
 * silently re-points existing edits at the wrong elements. After a structural
 * change, the owner's saved edits must be re-checked in the console.
 *
 * ⚠️ NAP and hours are NOT reachable from here on purpose — they live in
 * src/lib/business.ts, which also feeds the JSON-LD. Editing an address on
 * screen without updating the structured data would desync what customers see
 * from what Google reads.
 */

const SKIP =
  "header,nav,a,button,script,style,svg,select,textarea,input,form,iframe";

const TEXT_TAGS =
  /^(H1|H2|H3|H4|H5|H6|P|LI|BLOCKQUOTE|FIGCAPTION|TD|TH|SPAN|DIV|LABEL|EM|STRONG|SMALL|B|I)$/;

function isTextLeaf(el: Element): boolean {
  if (el.childElementCount !== 0) return false;
  if (!(el.textContent || "").trim()) return false;
  if (el.closest(SKIP)) return false;
  return TEXT_TAGS.test(el.tagName);
}

function applyOverrides(overrides: Record<string, string>) {
  const all = document.body.getElementsByTagName("*");
  let ti = 0;
  let ii = 0;

  for (let i = 0; i < all.length; i++) {
    const el = all[i];
    if (el.tagName === "IMG") {
      if (el.closest("header,nav")) continue;
      const key = "i" + ii++;
      const value = overrides[key];
      if (value) (el as HTMLImageElement).src = value;
    } else if (isTextLeaf(el)) {
      const key = "t" + ti++;
      const value = overrides[key];
      if (value != null) el.textContent = value;
    }
  }
}

export function CmsOverrides() {
  React.useEffect(() => {
    const base = process.env.NEXT_PUBLIC_CMS_URL;
    const slug = process.env.NEXT_PUBLIC_CMS_SLUG;
    // Not configured means "no CMS" — the hardcoded content stands on its own.
    if (!base || !slug) return;

    let cancelled = false;
    const controller = new AbortController();

    // Must match the page's slug in the console. Naming the page "Home" there
    // slugifies to "home", which is why that is the default. Omitting the
    // ?page= parameter entirely is a silent misconfiguration.
    const page = process.env.NEXT_PUBLIC_CMS_PAGE || "home";

    fetch(
      `${base}/api/public/overrides/${slug}?page=${encodeURIComponent(page)}`,
      { signal: controller.signal },
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { overrides?: Record<string, string> } | null) => {
        if (cancelled || !data?.overrides) return;
        if (Object.keys(data.overrides).length === 0) return;
        applyOverrides(data.overrides);
      })
      // A CMS that is down, slow, or misconfigured must never break the site.
      .catch(() => {});

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  return null;
}
