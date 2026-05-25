'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function TopNav() {
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setInsightsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false);
    setInsightsOpen(false);
  }, [pathname]);

  return (
    <>
      <style>{`
        .topnav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: #F5F4EF;
          border-bottom: 1px solid #E2E0D8;
          font-family: var(--font-ui);
        }
        .topnav-inner {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .topnav-logo {
          font-size: 15px;
          font-weight: 600;
          color: #3730A3;
          text-decoration: none;
        }
        .topnav-links {
          display: flex;
          align-items: center;
          gap: 0;
          list-style: none;
        }
        .topnav-link {
          font-size: 13px;
          font-weight: 500;
          color: #6B6B6B;
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 4px;
          transition: color 0.15s ease;
        }
        .topnav-link:hover {
          color: #1A1A1A;
        }
        .insights-wrapper {
          position: relative;
        }
        .insights-btn {
          font-size: 13px;
          font-weight: 500;
          color: #6B6B6B;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px 12px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color 0.15s ease;
          font-family: var(--font-ui);
        }
        .insights-btn:hover,
        .insights-btn.active {
          color: #1A1A1A;
        }
        .insights-btn.active {
          color: #3730A3;
        }
        .insights-chevron {
          transition: transform 0.15s ease;
          width: 12px;
          height: 12px;
          opacity: 0.6;
        }
        .insights-chevron.open {
          transform: rotate(180deg);
        }
        .insights-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: #FFFFFF;
          border: 1px solid #E2E0D8;
          border-radius: 6px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          min-width: 200px;
          padding: 6px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .insights-item {
          font-size: 13px;
          font-weight: 500;
          color: #2D2D2D;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 4px;
          display: block;
          transition: background 0.1s ease;
        }
        .insights-item:hover {
          background: #F5F4EF;
          color: #3730A3;
        }
        .insights-item-sub {
          font-size: 11px;
          color: #AAAAAA;
          display: block;
          margin-top: 1px;
        }
        /* Mobile hamburger */
        .topnav-hamburger {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
        }
        .topnav-hamburger span {
          display: block;
          width: 20px;
          height: 2px;
          background: #2D2D2D;
          border-radius: 1px;
          transition: all 0.2s ease;
        }
        .mobile-menu {
          display: none;
          background: #F5F4EF;
          border-bottom: 1px solid #E2E0D8;
          padding: 12px 2rem 16px;
          flex-direction: column;
          gap: 2px;
        }
        .mobile-menu.open {
          display: flex;
        }
        .mobile-link {
          font-size: 14px;
          font-weight: 500;
          color: #2D2D2D;
          text-decoration: none;
          padding: 10px 0;
          border-bottom: 1px solid rgba(226, 224, 216, 0.4);
        }
        .mobile-link:last-child {
          border-bottom: none;
        }
        .mobile-link.active {
          color: #3730A3;
        }
        .mobile-submenu-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #AAAAAA;
          padding: 8px 0 4px;
        }
        @media (max-width: 640px) {
          .topnav-links {
            display: none;
          }
          .topnav-hamburger {
            display: flex;
          }
        }
      `}</style>

      <nav className="topnav">
        <div className="topnav-inner">
          <Link href="/" className="topnav-logo">Manan Sachdeva</Link>

          {/* Desktop links */}
          <ul className="topnav-links">
            <li>
              <Link href="/" className="topnav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="topnav-link">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/about#experience" className="topnav-link">
                Experience
              </Link>
            </li>
            <li className="insights-wrapper" ref={dropdownRef}>
              <button
                className="insights-btn"
                onClick={() => setInsightsOpen(o => !o)}
                aria-expanded={insightsOpen}
              >
                Insights
                <svg className={`insights-chevron${insightsOpen ? ' open' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {insightsOpen && (
                <div className="insights-dropdown">
                  <Link href="/blog/large-deal-learnings" className="insights-item">
                    Complex Deals
                    <span className="insights-item-sub">Large deal stories &amp; learnings</span>
                  </Link>
                  <Link href="/blog/hiring-top-talent" className="insights-item">
                    Hiring &amp; Talent
                    <span className="insights-item-sub">How to find and develop top talent</span>
                  </Link>
                  <Link href="/blog/sales-systems" className="insights-item">
                    Sales Systems
                    <span className="insights-item-sub">Processes that enable teams to win</span>
                  </Link>
                </div>
              )}
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="topnav-hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span style={mobileOpen ? { transform: 'rotate(45deg) translate(4px, 4px)' } : {}} />
            <span style={mobileOpen ? { opacity: 0 } : {}} />
            <span style={mobileOpen ? { transform: 'rotate(-45deg) translate(4px, -4px)' } : {}} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <Link href="/" className="mobile-link">Home</Link>
        <Link href="/about" className="mobile-link">About Me</Link>
        <Link href="/about#experience" className="mobile-link">Experience</Link>
        <div className="mobile-submenu-label">Insights</div>
        <Link href="/blog/large-deal-learnings" className="mobile-link">Complex Deals</Link>
        <Link href="/blog/hiring-top-talent" className="mobile-link">Hiring &amp; Talent</Link>
        <Link href="/blog/sales-systems" className="mobile-link">Sales Systems</Link>
      </div>
    </>
  );
}
