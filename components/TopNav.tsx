import Link from 'next/link';

export function TopNav() {
  return (
    <>
      <style>{`
        .topnav-inner {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 52px;
          display: flex;
          align-items: center;
        }
        .topnav-links {
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
        @media (max-width: 600px) {
          .topnav-inner {
            flex-wrap: wrap;
            height: auto;
            min-height: 48px;
            padding: 8px 1rem;
            gap: 4px;
          }
          .topnav-links {
            position: static;
            transform: none;
            gap: 8px;
            flex: 0 0 100%;
            justify-content: center;
            padding-bottom: 6px;
          }
          .topnav-link { font-size: 13px; padding: 4px 8px; }
        }
      `}</style>
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: '#FFFFFF',
        borderBottom: '1px solid #E5E3DC',
        fontFamily: 'var(--font-ui)',
      }}>
        <div className="topnav-inner">
          {/* Brand — links home */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photo.png" alt="Manan" style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontSize: 14, fontWeight: 600, color: '#3730A3' }}>Manan</span>
          </a>

          {/* Centered nav links */}
          <ul className="topnav-links">
            <li><Link href="/about" className="topnav-link">About Me</Link></li>
            <li><Link href="/about#experience" className="topnav-link">Experience</Link></li>
            <li><Link href="/insights" className="topnav-link">Insights</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
