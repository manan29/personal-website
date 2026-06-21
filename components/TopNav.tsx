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
        .topnav-container {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 52px;
          display: flex;
          align-items: center;
          flex-direction: row;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-links-list {
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

        @media (max-width: 768px) {
          .topnav-container {
            flex-direction: column;
            align-items: center;
            height: auto;
            padding: 10px 16px 8px;
            gap: 8px;
            max-width: none;
          }
          .nav-links-list {
            position: static;
            transform: none;
            gap: 16px;
          }
          .topnav-link { font-size: 13px; }
        }
      `}</style>

      <nav className="topnav">
        <div className="topnav-container">
          <a href="/" className="nav-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photo.png" alt="Manan" style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontSize: 14, fontWeight: 600, color: '#3730A3' }}>Manan</span>
          </a>
          <ul className="nav-links-list">
            <li><Link href="/about" className="topnav-link">About Me</Link></li>
            <li><Link href="/about#experience" className="topnav-link">Experience</Link></li>
            <li><Link href="/insights" className="topnav-link">Insights</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
