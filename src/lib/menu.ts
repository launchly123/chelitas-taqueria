/**
 * Menu structure.
 *
 * ⚠️ THESE ITEMS COME FROM OLDER THIRD-PARTY MENU LISTINGS, NOT FROM THE
 * BUSINESS. They have not been confirmed as current. Deliberately:
 *
 *   • NO PRICES. Old prices are worse than no prices, and inventing prices on
 *     a real business's website is not acceptable.
 *   • NO "customer favourite" / "most popular" flags. Nothing in the public
 *     record supports ranking one item over another, so nothing is ranked.
 *   • NO invented descriptions of recipes, family history, or preparation.
 *     Where a line of copy appears below it describes the category in general
 *     terms that are true of any taqueria, not a claim about Chelita's.
 *
 * `status.menuConfirmed` in business.ts gates the on-page disclosure. Once the
 * owner confirms the real menu, replace these arrays and flip that flag.
 */

export type MenuCategory = {
  /** Oversized display numeral used in the layout. */
  index: string;
  name: string;
  /** Generic, non-claim-making framing copy. */
  blurb: string;
  items: readonly string[];
};

export const menu: readonly MenuCategory[] = [
  {
    index: "01",
    name: "Tacos",
    blurb: "Corn tortilla, meat, onion, cilantro. The whole point.",
    items: [
      "Asada",
      "Adobada",
      "Lengua",
      "Cabeza",
      "Tripa",
      "Pollo Adobado",
      "Pescado",
      "Camarón",
    ],
  },
  {
    index: "02",
    name: "Burritos",
    blurb: "Flour tortilla, wrapped tight, meant to be eaten with two hands.",
    items: ["Regular Burrito", "Supreme Burrito", "Wet Burrito", "Chimichanga"],
  },
  {
    index: "03",
    name: "Antojitos",
    blurb: "The smaller things. Order two, share none.",
    items: ["Quesadillas", "Sopes", "Tortas"],
  },
  {
    index: "04",
    name: "Platillos",
    blurb: "Sit-down plates. Rice, beans, tortillas on the side.",
    items: [
      "Bistek Ranchero",
      "Enchiladas",
      "Fajitas",
      "Chile Verde",
      "Chiles Rellenos",
      "Birria",
      "Menudo",
    ],
  },
];
