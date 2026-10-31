"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Avatar } from './Avatar';

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Field Notes' },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 40px',
      background: 'rgba(250,250,248,0.86)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      flexWrap: 'wrap',
      gap: '10px',
    }}>
      {/* Left: photo + name (home) */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        <Avatar size={34} />
        <span style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontWeight: 600,
          fontSize: '17px',
          letterSpacing: '-0.01em',
          color: 'var(--ink)',
        }}>Manan Sachdeva</span>
      </Link>

      {/* Right: nav links */}
      <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        {NAV_LINKS.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                fontSize: '14px',
                color: active ? 'var(--accent)' : 'var(--body)',
                borderBottom: active ? '2px solid var(--accent)' : '2px solid transparent',
                paddingBottom: '2px',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
