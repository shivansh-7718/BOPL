import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Biocyte Organics for institutional business inquiries, product supplies, or distributor franchise partnerships. Kanpur, Uttar Pradesh, India.",
  openGraph: {
    title: "Contact Biocyte Organics",
    description:
      "Reach our corporate desk for institutional business inquiries, product supplies, or distributor franchise partnerships.",
    url: "https://biocyteorganics.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
