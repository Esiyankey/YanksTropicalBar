import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

import { Playfair_Display, Inter } from "next/font/google";

/* Display face — headlines only */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

/* Text face — body copy, UI, forms */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yanks Tropical Bar",
  description: "Juices and Catering Services for Events",
  icons: {
    icon: "/favicon-16x16.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
