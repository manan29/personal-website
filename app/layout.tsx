import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Source_Serif_4 } from 'next/font/google'
import "./globals.css";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-inter'
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'], weight: ['400','500','600'], variable: '--font-jetbrains'
})
const sourceSerif = Source_Serif_4({
  subsets: ['latin'], weight: ['500','600','700'], style: ['normal','italic'], variable: '--font-source-serif'
})

export const metadata: Metadata = {
  title: "manan.me",
  description: "Sales leader writing about GTM, deals, hiring, and building revenue orgs.",
  icons: {
    icon: '/favicon-32.png',
    apple: '/apple-icon.png',
  },
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${sourceSerif.variable}`}>
      <body className="antialiased">
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
