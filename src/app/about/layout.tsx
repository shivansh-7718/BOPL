import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "BIOCYTE Organics Private Limited (BOPL) is one of India's largest mid-sized privately held pharmaceutical companies, headquartered in Kanpur, Uttar Pradesh since 2002.",
  openGraph: {
    title: "About Biocyte Organics",
    description:
      "One of India's largest mid-sized privately held pharmaceutical companies, headquartered in Kanpur, Uttar Pradesh since 2002.",
    url: "https://biocyteorganics.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
