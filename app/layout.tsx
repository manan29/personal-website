import type { Metadata } from "next";
import { Space_Grotesk, Hanken_Grotesk, Work_Sans, JetBrains_Mono } from 'next/font/google'
import "./globals.css";
import { TopNav } from "@/components/TopNav";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-space-grotesk'
})
const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'], weight: ['400','500','600'], variable: '--font-hanken'
})
const workSans = Work_Sans({
  subsets: ['latin'], weight: ['400','500','600'], variable: '--font-work-sans'
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'], weight: ['400','500','600'], variable: '--font-jetbrains'
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
    <html lang="en" className={`${spaceGrotesk.variable} ${hankenGrotesk.variable} ${workSans.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <TopNav />
        {children}
        <footer style={{
          borderTop: '1px solid #e8edf3',
          padding: '36px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-jetbrains)',
          fontSize: '12px',
          letterSpacing: '0.04em',
          color: '#94a3b8',
        }}>
          <span>Manan Sachdeva © 2025</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="/insights" style={{ color: '#94a3b8', textDecoration: 'none' }}>Insights</a>
            <a href="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About</a>
            <a href="https://www.linkedin.com/in/manansachdeva/" target="_blank" rel="noopener" style={{ color: '#94a3b8', textDecoration: 'none' }}>LinkedIn ↗</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
