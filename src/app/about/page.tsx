import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";
import JsonLd from "@/components/JsonLd";
import { pageGraph } from "@/lib/siteConfig";

const title = "About Arfan Ahmed — Full Stack Web Developer";
const description =
  "Learn about Arfan Ahmed, a Full Stack Web Developer: professional experience, MERN stack and Next.js expertise, technical skills, and education at Patuakhali Science and Technology University.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arfan Ahmed — Full Stack Web Developer",
      },
    ],
  },
  twitter: { title, description },
};

const graph = pageGraph({
  type: "AboutPage",
  path: "/about",
  name: title,
  description,
  aboutPerson: true,
  crumbs: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={graph} />
      <AboutClient />
    </>
  );
}
