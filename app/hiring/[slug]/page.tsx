import Link from 'next/link';
import { getHiringBySlug, getAllHiring } from '@/lib/content';
import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';

export async function generateStaticParams() {
  const hiring = getAllHiring();
  return hiring.map((post) => ({
    slug: post.slug,
  }));
}

export default async function HiringPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getHiringBySlug(slug);

  if (!post) {
    notFound();
  }

  // Simple markdown processing for **bold**
  const renderBody = (body: string) => {
    const parts = body.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <Container width="narrow" style={{ padding: '72px 40px 96px' }}>
      {/* Back link */}
      <Link
        href="/hiring"
        style={{
          fontFamily: 'var(--font-work-sans)',
          fontSize: '14px',
          color: 'var(--muted)',
          textDecoration: 'none',
          marginBottom: '24px',
          display: 'inline-block',
        }}
      >
        ← Back to Hiring
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '16px' }}>
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
        <h1
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '30px',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            marginBottom: '12px',
          }}
        >
          {post.title}
        </h1>

        {/* Summary */}
        <p
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '15px',
            lineHeight: '1.7',
            color: 'var(--muted)',
            paddingBottom: '16px',
            borderBottom: '1px solid var(--border)',
          }}
        >
          {post.summary}
        </p>
      </div>

      {/* Body */}
      <div
        style={{
          fontFamily: 'var(--font-hanken)',
          fontSize: '15.5px',
          lineHeight: '1.85',
          color: 'var(--body)',
          marginTop: '24px',
          whiteSpace: 'pre-wrap',
        }}
      >
        {renderBody(post.body)}
      </div>
    </Container>
  );
}
