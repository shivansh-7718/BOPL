// import type { Metadata } from "next";
// import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
// import "./globals.css";

// const jakarta = Plus_Jakarta_Sans({ 
//   subsets: ["latin"],
//   variable: "--font-jakarta",
// });

// const outfit = Outfit({
//   subsets: ["latin"],
//   variable: "--font-outfit",
// });

// export const metadata: Metadata = {
//   title: "Biocyte Organics | Advancing Healthcare Through Innovation",
//   description: "Biocyte Organics Pvt. Ltd. is an Indian pharmaceutical enterprise delivering high-efficiency medicinal capsules, syrups, and medical devices. Accredited under ISO 9001:2015 guidelines.",
//   keywords: "Biocyte Organics, pharmaceutical company, oxygen concentrator, nebulizer, ISO 9001:2015, Kanpur, Lucknow",
// };

// import ChatAssistant from "@/components/ChatAssistant";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={`${jakarta.variable} ${outfit.variable} font-sans antialiased`}>
//         {children}
//         <ChatAssistant />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biocyteorganics.com"),
  title: {
    default: "Biocyte Organics | Advancing Healthcare Through Innovation",
    template: "%s | Biocyte Organics",
  },
  description:
    "Biocyte Organics Pvt. Ltd. is an Indian pharmaceutical enterprise delivering high-efficiency medicinal capsules, syrups, and medical devices. Accredited under ISO 9001:2015 guidelines.",
  keywords: [
    "Biocyte Organics",
    "pharmaceutical company Kanpur",
    "oxygen concentrator",
    "nebulizer",
    "CPAP BiPAP",
    "ISO 9001:2015 pharma",
    "PCD pharma franchise Kanpur",
    "respiratory devices India",
  ],
  authors: [{ name: "Biocyte Organics Pvt. Ltd." }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://biocyteorganics.com",
    siteName: "Biocyte Organics",
    title: "Biocyte Organics | Advancing Healthcare Through Innovation",
    description:
      "Indian pharmaceutical enterprise delivering high-efficiency medicinal capsules, syrups, and medical devices. ISO 9001:2015 accredited.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Biocyte Organics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biocyte Organics | Advancing Healthcare Through Innovation",
    description:
      "Indian pharmaceutical enterprise delivering high-efficiency medicinal capsules, syrups, and medical devices.",
    images: ["/logo.png"],
  },
};

import ChatAssistant from "@/components/ChatAssistant";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${outfit.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Biocyte Organics Private Limited",
              alternateName: "BOPL",
              url: "https://biocyteorganics.com",
              logo: "https://biocyteorganics.com/logo.png",
              description:
                "BIOCYTE Organics Private Limited (BOPL) is one of India's largest mid-sized privately held pharmaceutical companies, headquartered in Kanpur, Uttar Pradesh, marketing medicinal capsules, syrups, and respiratory medical devices.",
              foundingDate: "2002-11-21",
              address: {
                "@type": "PostalAddress",
                streetAddress: "House No. 5, Meerpur Cantt",
                addressLocality: "Kanpur",
                addressRegion: "Uttar Pradesh",
                postalCode: "208004",
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9919002065",
                  contactType: "customer service",
                  email: "info@biocyteorganics.com",
                  areaServed: "IN",
                },
              ],
            }),
          }}
        />
        {children}
        <ChatAssistant />
      </body>
    </html>
  );
}

