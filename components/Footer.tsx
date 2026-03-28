import Link from 'next/link';

export function Footer() {
  return (
    <footer
      style={{
        marginLeft: '220px',
        padding: '24px 52px',
        borderTop: '1px solid #E2E0D8',
        fontFamily: 'var(--font-ui)',
        fontSize: '12px',
        color: '#AAAAAA',
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
          href="/reading-list"
          style={{ color: '#AAAAAA', textDecoration: 'none' }}
          className="footer-link"
        >
          Reading List
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
