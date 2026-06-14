'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const NAV_HEIGHT = 56;

export function TopNav() {
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setInsightsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close all menus on navigation
  useEffect(() => {
    setIsMenuOpen(false);
    setInsightsOpen(false);
  }, [pathname]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <style>{`
        .topnav-links { display: flex; align-items: center; gap: 0; list-style: none; }
        .topnav-hamburger { display: none; }
        @media (max-width: 640px) {
          .topnav-links { display: none; }
          .topnav-hamburger { display: flex; }
        }
      `}</style>

      {/* Backdrop — captures taps outside menu to close it */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          style={{
            position: 'fixed',
            top: NAV_HEIGHT,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.2)',
            zIndex: 48,
          }}
        />
      )}

      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: '#FFFFFF',
        borderBottom: '1px solid #E5E3DC',
        fontFamily: 'var(--font-ui)',
      }}>
        <div style={{
          maxWidth: 860,
          margin: '0 auto',
          padding: '0 2rem',
          height: NAV_HEIGHT,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Link href="/" style={{ fontSize: 15, fontWeight: 600, color: '#3730A3', textDecoration: 'none' }}>
            Manan Sachdeva
          </Link>

          {/* Desktop links */}
          <ul className="topnav-links">
            <li>
              <Link href="/" style={{ fontSize: 13, fontWeight: 500, color: '#6B6B6B', textDecoration: 'none', padding: '6px 12px', borderRadius: 4, display: 'block' }}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" style={{ fontSize: 13, fontWeight: 500, color: '#6B6B6B', textDecoration: 'none', padding: '6px 12px', borderRadius: 4, display: 'block' }}>
                About Me
              </Link>
            </li>
            <li>
              <Link href="/about#experience" style={{ fontSize: 13, fontWeight: 500, color: '#6B6B6B', textDecoration: 'none', padding: '6px 12px', borderRadius: 4, display: 'block' }}>
                Experience
              </Link>
            </li>
            <li style={{ position: 'relative' }} ref={dropdownRef}>
              <button
                onClick={() => setInsightsOpen(o => !o)}
                aria-expanded={insightsOpen}
                style={{
                  fontSize: 13, fontWeight: 500, color: '#6B6B6B',
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '6px 12px', borderRadius: 4,
                  display: 'flex', alignItems: 'center', gap: 4,
                  fontFamily: 'var(--font-ui)',
                }}
              >
                Insights
                <svg
                  viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"
                  style={{ width: 12, height: 12, opacity: 0.6, transition: 'transform 0.15s', transform: insightsOpen ? 'rotate(180deg)' : 'none' }}
                >
                  <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {insightsOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                  background: '#FFFFFF', border: '1px solid #E2E0D8', borderRadius: 6,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)', minWidth: 200, padding: 6,
                  display: 'flex', flexDirection: 'column', gap: 2, zIndex: 51,
                }}>
                  <Link href="/blog/large-deal-learnings" style={{ fontSize: 13, fontWeight: 500, color: '#2D2D2D', textDecoration: 'none', padding: '8px 12px', borderRadius: 4, display: 'block' }}>
                    Complex Deals
                    <span style={{ fontSize: 11, color: '#AAAAAA', display: 'block', marginTop: 1 }}>Large deal stories &amp; learnings</span>
                  </Link>
                  <Link href="/blog/hiring-top-talent" style={{ fontSize: 13, fontWeight: 500, color: '#2D2D2D', textDecoration: 'none', padding: '8px 12px', borderRadius: 4, display: 'block' }}>
                    Hiring &amp; Talent
                    <span style={{ fontSize: 11, color: '#AAAAAA', display: 'block', marginTop: 1 }}>How to find and develop top talent</span>
                  </Link>
                  <Link href="/blog/sales-systems" style={{ fontSize: 13, fontWeight: 500, color: '#2D2D2D', textDecoration: 'none', padding: '8px 12px', borderRadius: 4, display: 'block' }}>
                    Sales Systems
                    <span style={{ fontSize: 11, color: '#AAAAAA', display: 'block', marginTop: 1 }}>Processes that enable teams to win</span>
                  </Link>
                </div>
              )}
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="topnav-hamburger"
            onClick={() => setIsMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 10,
              minHeight: 44,
              minWidth: 44,
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <span style={{ display: 'block', width: 20, height: 2, background: '#2D2D2D', borderRadius: 1, transition: 'all 0.2s', transform: isMenuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ display: 'block', width: 20, height: 2, background: '#2D2D2D', borderRadius: 1, transition: 'all 0.2s', opacity: isMenuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 20, height: 2, background: '#2D2D2D', borderRadius: 1, transition: 'all 0.2s', transform: isMenuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile dropdown — position fixed so scroll doesn't affect it */}
        {isMenuOpen && (
          <div style={{
            position: 'fixed',
            top: NAV_HEIGHT,
            left: 0,
            right: 0,
            background: '#FFFFFF',
            zIndex: 49,
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            maxHeight: `calc(100vh - ${NAV_HEIGHT}px)`,
            overflowY: 'auto',
          }}>
            {([
              { href: '/', label: 'Home' },
              { href: '/about#experience', label: 'Experience', accent: true },
              { href: '/about', label: 'About Me' },
            ] as { href: string; label: string; accent?: boolean }[]).map(({ href, label, accent }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '14px 20px',
                  fontSize: 16,
                  fontWeight: accent ? 600 : 500,
                  color: accent ? '#3730A3' : '#2D2D2D',
                  textDecoration: 'none',
                  borderBottom: '1px solid #F3F2EE',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                {label}
              </Link>
            ))}
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#AAAAAA', padding: '10px 20px 4px' }}>
              Insights
            </div>
            {([
              { href: '/blog/large-deal-learnings', label: 'Complex Deals' },
              { href: '/blog/hiring-top-talent', label: 'Hiring & Talent' },
              { href: '/blog/sales-systems', label: 'Sales Systems' },
            ]).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '14px 20px',
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#2D2D2D',
                  textDecoration: 'none',
                  borderBottom: '1px solid #F3F2EE',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/in/manansachdeva/"
              target="_blank"
              rel="noopener"
              onClick={closeMenu}
              style={{
                display: 'block',
                width: '100%',
                padding: '14px 20px',
                fontSize: 16,
                fontWeight: 500,
                color: '#2D2D2D',
                textDecoration: 'none',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              LinkedIn ↗
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
