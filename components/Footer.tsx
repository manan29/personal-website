import Link from 'next/link';

export function Footer() {
  return (
    <footer
      style={{
        padding: '24px 2rem',
        borderTop: '1px solid #E2E0D8',
        fontFamily: 'var(--font-ui)',
        fontSize: '12px',
        color: '#AAAAAA',
        maxWidth: '860px',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        <span>Manan Sachdeva © 2025</span>
        <span>·</span>
        <Link
          href="/blog/large-deal-learnings"
          style={{ color: '#AAAAAA', textDecoration: 'none' }}
          className="footer-link"
        >
          Blog
        </Link>
        <span>·</span>
        <Link
          href="/notes"
          style={{ color: '#AAAAAA', textDecoration: 'none' }}
          className="footer-link"
        >
          Notes
        </Link>
        <span>·</span>
        <Link
          href="/about"
          style={{ color: '#AAAAAA', textDecoration: 'none' }}
          className="footer-link"
        >
          About
        </Link>
      </div>
    </footer>
  );
}
