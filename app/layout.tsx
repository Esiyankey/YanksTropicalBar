import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"], // important!
});


export const metadata: Metadata = {
  title: "Yanks Tropical Bar",
  description: "Experience the Ultimate in Event Catering and Mixology with Yanks Tropical Bar. From weddings to corporate events, we bring the tropical vibes and unforgettable flavors to your special occasions. Book us today and let us make your event truly unforgettable!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={poppins.variable}>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
