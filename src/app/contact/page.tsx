import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";
import JsonLd from "@/components/JsonLd";
import { pageGraph } from "@/lib/siteConfig";

const title = "Contact Arfan Ahmed — Full Stack Web Developer";
const description =
  "Get in touch with Arfan Ahmed, Full Stack Web Developer. Send a message about your project, collaboration, or a full-stack, MERN, Next.js or React development role.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title,
    description,
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Arfan Ahmed — Full Stack Web Developer",
      },
    ],
  },
  twitter: { title, description },
};

const graph = pageGraph({
  type: "ContactPage",
  path: "/contact",
  name: title,
  description,
  aboutPerson: true,
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={graph} />
      <ContactClient />
    </>
  );
}
