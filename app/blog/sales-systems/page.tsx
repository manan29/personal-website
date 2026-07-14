import Link from 'next/link';
import { getBlogPostsByCategory } from '@/lib/content';
import type { Metadata } from 'next';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Sales Systems — Manan Sachdeva',
};

export default function SalesSystemsPage() {
  const posts = getBlogPostsByCategory('sales-systems');

  return (
    <Container width="narrow" style={{ padding: '72px 40px 96px' }}>
      <h1
        style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontSize: '32px',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          color: 'var(--ink)',
          marginBottom: '32px',
        }}
      >
        Sales Systems
      </h1>

      <div style={{ borderTop: '1px solid var(--border)' }}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.category}/${post.slug}`}
            style={{
              display: 'block',
              padding: '20px 0',
              borderBottom: '1px solid var(--border)',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div style={{ marginBottom: '8px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  marginBottom: '4px',
                }}
              >
                {post.title}
              </h2>
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '12px',
                  color: 'var(--muted)',
                }}
              >
                {post.date}
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '14px',
                lineHeight: '1.6',
                color: 'var(--muted)',
              }}
            >
              {post.summary}
            </p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
