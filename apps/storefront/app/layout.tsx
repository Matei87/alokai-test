import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBarTop from "../components/layout/NavBarTop";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alokai Next.js",
  description: "Alokai Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBarTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
