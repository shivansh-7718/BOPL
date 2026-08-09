import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Biocyte Organics' range of pharmaceutical products including tablets, syrups, respiratory devices, oxygen concentrators, and CPAP/BiPAP machines.",
  openGraph: {
    title: "Products | Biocyte Organics",
    description:
      "Pharmaceutical products including tablets, syrups, respiratory devices, oxygen concentrators, and CPAP/BiPAP machines.",
    url: "https://biocyteorganics.com/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
