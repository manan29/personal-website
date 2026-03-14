import type { Metadata } from "next";
import { Lato, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: "--font-lato",
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Manan Shah",
  description: "Sales · GTM · Bengaluru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${inter.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
