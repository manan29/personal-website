import Link from 'next/link';
import { getBlogPostsByCategory } from '@/lib/content';

export default function HiringTopTalentPage() {
  const posts = getBlogPostsByCategory('hiring-top-talent');

  return (
    <main>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '60px 24px' }}>
        <h1
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '32px',
          }}
        >
          Hiring Top Talent
        </h1>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.category}/${post.slug}`}
              style={{
                display: 'block',
                padding: '16px 0',
                borderBottom: '1px solid var(--border)',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div style={{ marginBottom: '8px' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '16px',
                    fontWeight: '600',
                    marginBottom: '4px',
                  }}
                >
                  {post.title}
                </h2>
                <span
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '12px',
                    color: 'var(--faint)',
                  }}
                >
                  {post.date}
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
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
      </div>
    </main>
  );
}
