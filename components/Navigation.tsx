'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const blogCategories = [
  { href: '/blog/large-deal-learnings', label: 'Large Deal Learnings' },
  { href: '/blog/hiring-top-talent', label: 'Hiring Top Talent' },
  { href: '/blog/sales-systems', label: 'Sales Systems' },
];

const navLinks = [
  { href: '/playbooks', label: 'Playbooks' },
  { href: '/books', label: 'Books' },
  { href: '/about', label: 'About' },
];

export function Navigation() {
  const pathname = usePathname();
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50" style={{
      height: '48px',
      background: 'rgba(245, 244, 239, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link
          href="/"
          className="font-bold"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--text)' }}
        >
          Manan
        </Link>

        <div className="flex items-center gap-8">
          {/* Blog Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setBlogDropdownOpen(true)}
            onMouseLeave={() => setBlogDropdownOpen(false)}
          >
            <button
              className="text-sm"
              style={{
                fontFamily: 'var(--font-ui)',
                color: pathname.startsWith('/blog') ? 'var(--accent)' : 'var(--text)',
                textDecoration: pathname.startsWith('/blog') ? 'underline' : 'none',
                textUnderlineOffset: pathname.startsWith('/blog') ? '4px' : 'initial',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              Blog
            </button>

            {blogDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '8px',
                  background: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  padding: '8px 0',
                  minWidth: '200px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  zIndex: 100,
                }}
              >
                {blogCategories.map((category) => {
                  const isActive = pathname === category.href || pathname.startsWith(category.href + '/');

                  return (
                    <Link
                      key={category.href}
                      href={category.href}
                      style={{
                        display: 'block',
                        padding: '8px 16px',
                        fontFamily: 'var(--font-ui)',
                        fontSize: '13px',
                        color: isActive ? 'var(--accent)' : 'var(--text)',
                        textDecoration: 'none',
                        transition: 'background 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      {category.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Other nav links */}
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
