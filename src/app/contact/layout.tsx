import { Metadata } from "next";
import { JsonLd } from "@/components/shared/seo/json-ld";
import { getBreadcrumbSchema, getContactPageSchema } from "@/components/shared/seo/person-schema";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sahib Ibadov. Available for iOS and frontend collaborations, freelance work and inquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    siteName: "Sahib Ibadov Portfolio",
    locale: "en_US",
    title: "Contact Sahib Ibadov",
    description:
      "Reach out to Sahib Ibadov for iOS and frontend collaborations, freelance work and inquiries.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sahib Ibadov — iOS & Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sahib Ibadov",
    description:
      "Reach out to Sahib Ibadov for iOS and frontend collaborations, freelance work and inquiries.",
    images: ["/twitter-image"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={getContactPageSchema()} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      {children}
    </>
  );
}
