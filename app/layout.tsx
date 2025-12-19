import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import IntroBanner from "@/src/components/Common/IntroBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zentro - E-Commerce",
  description: "Shop the best deals at Zentro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        < IntroBanner />

        <Header />
        
        <main className="min-h-screen">
            {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}