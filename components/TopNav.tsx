"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
      padding: '18px 40px',
      background: 'rgba(255,255,255,0.82)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e8edf3',
      flexWrap: 'wrap',
      gap: '10px',
    }}>
      {/* Left: wordmark */}
      <Link href="/" style={{ display: 'flex', alignItems: 'baseline', gap: '10px', textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontWeight: 600,
          fontSize: '18px',
          letterSpacing: '-0.01em',
          color: '#0f172a',
        }}>Manan Sachdeva</span>
        <span style={{
          fontFamily: 'var(--font-jetbrains)',
          fontSize: '11px',
          letterSpacing: '0.08em',
          color: '#94a3b8',
        }}>/ SALES · GTM</span>
      </Link>

      {/* Right: nav links */}
      <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        {[
          { href: '/about', label: 'About Me' },
          { href: '/about#experience', label: 'Experience' },
          { href: '/insights', label: 'Insights' },
        ].map(({ href, label }) => {
          const active = href === '/insights'
            ? pathname === '/insights'
            : href.startsWith('/about')
            ? pathname === '/about' || pathname.startsWith('/about')
            : pathname === href;
          return (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                fontSize: '14px',
                color: active ? '#2563eb' : '#475569',
                borderBottom: active ? '2px solid #2563eb' : '2px solid transparent',
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
