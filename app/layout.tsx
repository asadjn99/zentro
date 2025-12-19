import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/src/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zentro - Exclusive E-Commerce",
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

        <Header />
        
        <main className="min-h-screen">
            {children}
        </main>
        
        {/* <Footer /> We will add this later */}
      </body>
    </html>
  );
}