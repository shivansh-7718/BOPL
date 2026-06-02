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
  title: "Biocyte Organics | Advancing Healthcare Through Innovation",
  description: "Biocyte Organics Pvt. Ltd. is an Indian pharmaceutical enterprise delivering high-efficiency medicinal capsules, syrups, and medical devices. Accredited under ISO 9001:2015 and WHO-GMP guidelines.",
  keywords: "Biocyte Organics, pharmaceutical company, oxygen concentrator, nebulizer, WHO-GMP, ISO 9001:2015, Kanpur, Lucknow",
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
        {children}
        <ChatAssistant />
      </body>
    </html>
  );
}

