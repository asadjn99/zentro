import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import IntroBanner from "@/src/components/Common/IntroBanner"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zentro | E-commerce",
  description: "Built with Next.js and Tailwind CSS",
  icons: {
    icon: "/icon.svg",
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