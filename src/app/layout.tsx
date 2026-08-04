import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Act Right Security (ARS) | Your Security Partner",
  description:
    "Act Right Security (ARS) is a premier licensed security company offering armed & unarmed security guards, mobile patrol, event security, executive protection, and risk management across Manchester, NH, and nationwide.",
  keywords: [
    "Act Right Security",
    "ARS Security",
    "Security Guards Manchester NH",
    "Armed Security Services",
    "Unarmed Security Services",
    "Mobile Security Patrol",
    "Event Security",
    "Executive Protection",
  ],
  icons: {
    icon: "/image/logo-black.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#06080c] text-white min-h-screen flex flex-col font-sans selection:bg-[#00ff01] selection:text-black">
        <Header />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
