import Link from 'next/link';
import { getAllHiring } from '@/lib/content';
import { Container } from '@/components/Container';

export default function HiringPage() {
  const hiringPosts = getAllHiring();

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
        Hiring
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {hiringPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/hiring/${post.slug}`}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              paddingBottom: '24px',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', alignItems: 'center' }}>
              {/* Tag chip */}
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '10px',
                  fontWeight: 500,
                  padding: '3px 10px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  border: '1px solid var(--border)',
                  color: 'var(--muted)',
                }}
              >
                {post.tag}
              </span>

              {/* Date */}
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

            {/* Title */}
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '19px',
                fontWeight: 600,
                color: 'var(--ink)',
                marginBottom: '6px',
              }}
            >
              {post.title}
            </h2>

            {/* Summary */}
            <p
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '15px',
                lineHeight: '1.7',
                color: 'var(--muted)',
                marginBottom: '8px',
              }}
            >
              {post.summary}
            </p>

            {/* Arrow */}
            <span style={{ color: 'var(--accent)', fontSize: '14px' }}>→</span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
