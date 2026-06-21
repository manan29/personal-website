import Link from 'next/link';

export function TopNav() {
  return (
    <>
      <style>{`
        .topnav-inner {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
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
        .topnav-link:hover {
          color: #1A1A1A;
        }
        @media (max-width: 768px) {
          .topnav-inner {
            padding: 0 1rem;
            gap: 12px;
            height: auto;
            min-height: 48px;
          }
          .topnav-link {
            font-size: 13px;
          }
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
          <Link href="/about" className="topnav-link">About Me</Link>
          <Link href="/about#experience" className="topnav-link">Experience</Link>
          <Link href="/insights" className="topnav-link">Insights</Link>
        </div>
      </nav>
    </>
  );
}
