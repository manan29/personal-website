"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Avatar } from './Avatar';

const INSIGHTS_CATEGORIES = [
  { id: 'large-deal-learnings', label: 'Large Deal Learnings' },
  { id: 'hiring-top-talent', label: 'Hiring & Talent' },
  { id: 'sales-systems', label: 'Sales Systems' },
];

export function TopNav() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const insightsActive = pathname === '/insights';

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
        {[
          { href: '/about', label: 'More About Me' },
          { href: '/experience', label: 'Experience' },
        ].map(({ href, label }) => {
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

        {/* Insights dropdown */}
        <div
          ref={dropdownRef}
          style={{ position: 'relative' }}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            style={{
              fontFamily: 'var(--font-work-sans)',
              fontWeight: 500,
              fontSize: '14px',
              color: insightsActive || dropdownOpen ? 'var(--accent)' : 'var(--body)',
              borderBottom: insightsActive ? '2px solid var(--accent)' : '2px solid transparent',
              paddingBottom: '2px',
              background: 'none',
              border: 'none',
              borderBottomWidth: '2px',
              borderBottomStyle: 'solid',
              borderBottomColor: insightsActive ? 'var(--accent)' : 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: 0,
            }}
          >
            Insights
            <span style={{ fontSize: '10px', transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}>▾</span>
          </button>

          {dropdownOpen && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 14px)',
              right: 0,
              minWidth: '220px',
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              boxShadow: '0 12px 32px rgba(20,20,15,0.08)',
              padding: '8px',
              zIndex: 50,
            }}>
              <Link
                href="/insights"
                onClick={() => setDropdownOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-work-sans)',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                }}
                className="nav-dropdown-item"
              >
                All insights
              </Link>
              {INSIGHTS_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/insights?category=${cat.id}`}
                  onClick={() => setDropdownOpen(false)}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-work-sans)',
                    fontSize: '13px',
                    color: 'var(--body)',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                  }}
                  className="nav-dropdown-item"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <style jsx global>{`
        .nav-dropdown-item:hover {
          background: var(--accent-tint) !important;
          color: var(--accent) !important;
        }
      `}</style>
    </header>
  );
}
