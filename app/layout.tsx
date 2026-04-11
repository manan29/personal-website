import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "manan.me",
  description: "Sales leader writing about GTM, deals, hiring, and building revenue orgs.",
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: "manan.me",
    description: "Sales leader writing about GTM, deals, hiring, and building revenue orgs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Sidebar />
        <div className="main-content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
