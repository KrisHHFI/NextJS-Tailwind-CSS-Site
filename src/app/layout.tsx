import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import '../../src/app/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Tailwind CSS Site",
  description: "Made by Kris Pepper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
