import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import IntroBanner from "@/src/components/Common/IntroBanner"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

  metadataBase: new URL("https://zentro-byasad.netlify.app"), 

  title: "Zentro | E-commerce",
  description: "Built with Next.js and Tailwind CSS",
  icons: {
    icon: "/icon.svg", 
  },
  openGraph: {
    title: "Zentro | E-commerce",
    description: "Shop the best deals on Zentro. Built by Asad Ullah.",
    url: "https://zentro-byasad.netlify.app",
    siteName: "Zentro",
    images: [
      {
        url: "/images/zentro.png", // Next.js will now auto-convert this to the full URL
        width: 1200,
        height: 630,
        alt: "Zentro Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <IntroBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}