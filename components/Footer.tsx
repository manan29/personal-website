import { Container } from './Container';

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', width: '100%' }}>
      <Container>
        <div
          style={{
            padding: '32px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '12px',
            letterSpacing: '0.04em',
            color: 'var(--muted)',
          }}
        >
          <span>Manan Sachdeva © 2026</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="/insights" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Insights</a>
            <a href="/about" style={{ color: 'var(--muted)', textDecoration: 'none' }}>About</a>
            <a href="https://www.linkedin.com/in/manansachdeva/" target="_blank" rel="noopener" style={{ color: 'var(--muted)', textDecoration: 'none' }}>LinkedIn ↗</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
