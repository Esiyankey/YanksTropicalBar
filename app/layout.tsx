import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"], 
  style: ["normal", "italic"],
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
    <html lang="en" className={playfair.variable}>
      <body className={`${playfair.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
