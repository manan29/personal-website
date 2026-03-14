'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/deal-learnings', label: 'Deal Learnings' },
  { href: '/playbooks', label: 'Playbooks' },
  { href: '/hiring', label: 'Hiring' },
  { href: '/books', label: 'Books' },
  { href: '/about', label: 'About' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50" style={{
      height: '48px',
      background: 'rgba(245, 244, 239, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
        <Link
          href="/"
          className="font-bold"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--text)' }}
        >
          Manan Shah
        </Link>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');

            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm"
                style={{
                  fontFamily: 'var(--font-ui)',
                  color: isActive ? 'var(--accent)' : 'var(--text)',
                  textDecoration: isActive ? 'underline' : 'none',
                  textUnderlineOffset: isActive ? '4px' : 'initial',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
