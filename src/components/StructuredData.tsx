import { business, social, siteUrl } from "@/lib/business";

/**
 * Restaurant / FoodEstablishment structured data.
 *
 * ONLY CONFIRMED FIELDS. Deliberately absent, and none of these should be
 * added without the owner confirming the underlying fact first:
 *
 *   openingHours / openingHoursSpecification — four conflicting sets on record
 *   streetAddress                            — four conflicting addresses
 *   priceRange                               — no current pricing is known
 *   aggregateRating                          — platforms disagree (4.4/4.4/3.2)
 *                                              and self-hosted review markup is
 *                                              ignored by Google anyway
 *   hasMenu                                  — no verified menu URL exists
 *   acceptsReservations / delivery / takeout — listings contradict each other
 *
 * `addressLocality` and `addressRegion` are included because Fresno, CA is not
 * in dispute anywhere. Structured data lives here rather than in the visible
 * DOM, so note that the Agency Console CANNOT edit it — changing the phone
 * number on screen would silently desync it from what Google reads. Keep NAP
 * in business.ts, which feeds both.
 */
export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: business.name,
    description:
      "Family-owned Mexican taco truck serving tacos, burritos and antojitos around Fresno, California.",
    url: siteUrl,
    telephone: "+1-559-800-0022",
    servesCuisine: "Mexican",
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressRegion: business.state,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Fresno",
    },
    sameAs: [social.instagram, social.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
