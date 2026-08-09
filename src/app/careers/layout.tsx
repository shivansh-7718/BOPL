import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities at Biocyte Organics, a leading pharmaceutical company in Kanpur. Join our talent pool for roles in pharma sales, R&D, and corporate operations.",
  openGraph: {
    title: "Careers at Biocyte Organics",
    description:
      "Join our talent pool for roles in pharma sales, R&D, and corporate operations at Biocyte Organics, Kanpur.",
    url: "https://biocyteorganics.com/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
