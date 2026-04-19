'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export function Sidebar() {
  const pathname = usePathname();
  const [imageError, setImageError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  const sidebarContent = (
    <>
      {/* Photo */}
      <div style={{ marginBottom: '16px' }}>
        {imageError ? (
          <div
            style={{
              width: '96px',
              height: '96px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #C2550A, #F97316)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: 'white', fontSize: '40px', fontWeight: '700' }}>M</span>
          </div>
        ) : (
          <Image
            src="/photo.jpg"
            alt="Manan Sachdeva"
            width={96}
            height={96}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
            onError={() => setImageError(true)}
            priority
          />
        )}
      </div>

      {/* Name as Home Link */}
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '16px',
          fontWeight: '700',
          color: '#C2550A',
          marginBottom: '4px',
          textDecoration: 'none',
          display: 'block',
          transition: 'opacity 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.8';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
      >
        Manan Sachdeva
      </Link>

      {/* Tagline */}
      <div
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '11px',
          color: '#C2550A',
          fontWeight: '600',
          letterSpacing: '0.08em',
          marginBottom: '14px',
        }}
      >
        Sales · GTM · Talent Building
      </div>

      {/* Short Bio */}
      <p
        style={{
          fontFamily: 'var(--font-lato)',
          fontSize: '13.5px',
          color: '#6B6B6B',
          lineHeight: '1.7',
          marginBottom: '18px',
        }}
      >
        Building sales orgs from 0 to 1. Previously o9 Solutions, Hevo Data. Now Signeasy.
      </p>

      {/* About Me Button */}
      <Link
        href="/about"
        style={{
          display: 'inline-block',
          fontFamily: 'var(--font-ui)',
          fontSize: '13px',
          fontWeight: '600',
          color: '#C2550A',
          border: '1px solid #E2E0D8',
          padding: '6px 14px',
          borderRadius: '4px',
          textDecoration: 'none',
          marginBottom: '32px',
          transition: 'border-color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#C2550A';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#E2E0D8';
        }}
      >
        About me →
      </Link>

      {/* Nav Links */}
      <nav style={{ marginBottom: '24px' }}>
        <div
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '10px',
            fontWeight: '700',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#AAAAAA',
            marginBottom: '10px',
          }}
        >
          Blog
        </div>
        <Link
          href="/blog/large-deal-learnings"
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '14px',
            fontWeight: isActive('/blog/large-deal-learnings') ? '600' : '500',
            color: isActive('/blog/large-deal-learnings') ? '#C2550A' : '#1A1A1A',
            display: 'block',
            padding: '4px 0',
            textDecoration: 'none',
          }}
          className="sidebar-link"
        >
          Complex Deals
        </Link>
        <Link
          href="/blog/hiring-top-talent"
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '14px',
            fontWeight: isActive('/blog/hiring-top-talent') ? '600' : '500',
            color: isActive('/blog/hiring-top-talent') ? '#C2550A' : '#1A1A1A',
            display: 'block',
            padding: '4px 0',
            textDecoration: 'none',
          }}
          className="sidebar-link"
        >
          Hiring & Talent
        </Link>
        <Link
          href="/blog/sales-systems"
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '14px',
            fontWeight: isActive('/blog/sales-systems') ? '600' : '500',
            color: isActive('/blog/sales-systems') ? '#C2550A' : '#1A1A1A',
            display: 'block',
            padding: '4px 0',
            textDecoration: 'none',
          }}
          className="sidebar-link"
        >
          Sales Systems
        </Link>
        <Link
          href="/reading-list"
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '14px',
            fontWeight: isActive('/reading-list') ? '600' : '500',
            color: isActive('/reading-list') ? '#C2550A' : '#1A1A1A',
            display: 'block',
            padding: '4px 0',
            textDecoration: 'none',
          }}
          className="sidebar-link"
        >
          Reading List
        </Link>
      </nav>

      {/* Social Links */}
      <div
        style={{
          marginTop: 'auto',
          paddingTop: '20px',
          borderTop: '1px solid #E2E0D8',
        }}
      >
        <a
          href="https://www.linkedin.com/in/manansachdeva/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '12px',
            color: '#AAAAAA',
            display: 'block',
            marginBottom: '6px',
            textDecoration: 'none',
          }}
          className="sidebar-link"
        >
          LinkedIn ↗
        </a>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="sidebar-desktop"
        style={{
          position: 'fixed',
          width: '220px',
          height: '100vh',
          background: '#F5F4EF',
          borderRight: '1px solid #E2E0D8',
          padding: '32px 20px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Top Bar */}
      <div
        className="mobile-topbar"
        style={{
          display: 'none',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: '#F5F4EF',
          borderBottom: '1px solid #E2E0D8',
          padding: '12px 20px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '14px',
            fontWeight: '700',
            color: '#1A1A1A',
          }}
        >
          Manan Sachdeva
        </span>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#1A1A1A',
            padding: 0,
          }}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="mobile-overlay"
            style={{
              display: 'none',
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 99,
            }}
            onClick={() => setMobileMenuOpen(false)}
          />
          <aside
            className="mobile-sidebar"
            style={{
              display: 'none',
              position: 'fixed',
              right: 0,
              top: 0,
              width: '280px',
              height: '100vh',
              background: '#F5F4EF',
              borderLeft: '1px solid #E2E0D8',
              padding: '32px 20px',
              overflowY: 'auto',
              zIndex: 100,
              flexDirection: 'column',
            }}
          >
            {sidebarContent}
          </aside>
        </>
      )}

      <style jsx global>{`
        .sidebar-link:hover {
          color: #C2550A !important;
        }

        @media (max-width: 768px) {
          .sidebar-desktop {
            display: none !important;
          }
          .mobile-topbar {
            display: flex !important;
          }
          .mobile-overlay {
            display: block !important;
          }
          .mobile-sidebar {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
