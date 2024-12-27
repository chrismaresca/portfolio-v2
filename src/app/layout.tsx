// Next Imports
import type { Metadata } from "next";

// Fonts
import { Geist, Geist_Mono } from "next/font/google";

// Global Styles
import "./globals.css";
import { getBrandMetadata } from "@/data/getMetadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const brandId = process.env.BRAND_ID;

  if (!brandId) {
    throw new Error("BRAND_ID is not defined. Please define it as an environment variable.");
  }

  const brandMetadata = await getBrandMetadata(brandId);


  return brandMetadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark bg-background font-mono`}>{children}</body>
    </html>
  );
}
