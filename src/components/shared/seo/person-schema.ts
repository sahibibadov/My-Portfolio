import socials from "@/data/socials.json";

const SITE_URL = "https://sahibibadov.com";
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const sameAs = socials
  .filter((s) => /^https?:\/\//i.test(s.href))
  .map((s) => s.href);

const absoluteUrl = (path: string) =>
  path === "/" ? SITE_URL : `${SITE_URL}${path}`;

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Sahib Ibadov",
    alternateName: "Ibadov Sahib",
    url: SITE_URL,
    image: `${SITE_URL}/images/user.png`,
    jobTitle: "iOS & Frontend Developer",
    description:
      "iOS Developer (Swift, SwiftUI, UIKit) and Frontend Developer (Next.js, React, TypeScript) based in Azerbaijan.",
    worksFor: {
      "@type": "Organization",
      name: "Bank Respublica",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "AZ",
      addressLocality: "Masalli",
    },
    nationality: "Azerbaijani",
    knowsAbout: [
      "iOS Development",
      "Swift",
      "SwiftUI",
      "UIKit",
      "Frontend Development",
      "Next.js",
      "React",
      "TypeScript",
    ],
    sameAs,
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: "Sahib Ibadov Portfolio",
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
  };
}

export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/about#profile`,
    url: `${SITE_URL}/about`,
    name: "About Sahib Ibadov",
    mainEntity: { "@id": PERSON_ID },
  };
}

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#contact`,
    url: `${SITE_URL}/contact`,
    name: "Contact Sahib Ibadov",
    mainEntity: { "@id": PERSON_ID },
  };
}

export function getBreadcrumbSchema(
  trail: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
