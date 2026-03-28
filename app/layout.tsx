import type { Metadata } from "next";
import { Lato, Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

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
  title: "Manan Sachdeva",
  description: "Sales · GTM · Talent Building",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Sidebar />
        <div className="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
