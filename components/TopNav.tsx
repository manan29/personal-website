import Link from 'next/link';

export function TopNav() {
  return (
    <>
      <style>{`
        .topnav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: #FFFFFF;
          border-bottom: 1px solid #E5E3DC;
          font-family: var(--font-ui);
        }
        /* Desktop: single row, brand left, links centered */
        .topnav-desktop {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 52px;
          display: flex;
          align-items: center;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-links-centered {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 24px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .topnav-link {
          font-size: 13px;
          font-weight: 500;
          color: #6B6B6B;
          text-decoration: none;
          padding: 6px 8px;
          border-radius: 4px;
          white-space: nowrap;
        }
        .topnav-link:hover { color: #1A1A1A; }

        /* Mobile: two rows */
        @media (max-width: 768px) {
          .topnav-desktop { display: none; }
          .nav-brand-row {
            display: flex;
            align-items: center;
            padding: 10px 16px;
            border-bottom: 1px solid #E5E3DC;
          }
          .nav-links-row {
            display: flex;
            justify-content: center;
            gap: 16px;
            padding: 8px 16px;
            list-style: none;
            margin: 0;
          }
          .nav-links-row .topnav-link { font-size: 12px; }
        }
        @media (min-width: 769px) {
          .nav-brand-row { display: none; }
          .nav-links-row { display: none; }
        }
      `}</style>

      <nav className="topnav">
        {/* ── Desktop layout (single row) ── */}
        <div className="topnav-desktop">
          <a href="/" className="nav-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photo.png" alt="Manan" style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontSize: 14, fontWeight: 600, color: '#3730A3' }}>Manan</span>
          </a>
          <ul className="nav-links-centered">
            <li><Link href="/about" className="topnav-link">About Me</Link></li>
            <li><Link href="/about#experience" className="topnav-link">Experience</Link></li>
            <li><Link href="/insights" className="topnav-link">Insights</Link></li>
          </ul>
        </div>

        {/* ── Mobile layout (two rows) ── */}
        <div className="nav-brand-row">
          <a href="/" className="nav-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photo.png" alt="Manan" style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontSize: 14, fontWeight: 600, color: '#3730A3' }}>Manan</span>
          </a>
        </div>
        <ul className="nav-links-row">
          <li><Link href="/about" className="topnav-link">About Me</Link></li>
          <li><Link href="/about#experience" className="topnav-link">Experience</Link></li>
          <li><Link href="/insights" className="topnav-link">Insights</Link></li>
        </ul>
      </nav>
    </>
  );
}
