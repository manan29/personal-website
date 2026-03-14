import Link from 'next/link';
import { getHiringBySlug, getAllHiring } from '@/lib/content';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const hiring = getAllHiring();
  return hiring.map((post) => ({
    slug: post.slug,
  }));
}

export default function HiringPostPage({ params }: { params: { slug: string } }) {
  const post = getHiringBySlug(params.slug);

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
    <main style={{ maxWidth: '680px', margin: '0 auto', padding: '60px 24px' }}>
      {/* Back link */}
      <Link
        href="/hiring"
        style={{
          fontFamily: 'var(--font-ui)',
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
              fontFamily: 'var(--font-ui)',
              fontSize: '10px',
              fontWeight: '500',
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
              fontFamily: 'var(--font-ui)',
              fontSize: '12px',
              color: 'var(--faint)',
            }}
          >
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '22px',
            fontWeight: '700',
            marginBottom: '12px',
          }}
        >
          {post.title}
        </h1>

        {/* Summary */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
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
          fontFamily: 'var(--font-body)',
          fontSize: '15.5px',
          lineHeight: '1.85',
          color: 'var(--text)',
          marginTop: '24px',
          whiteSpace: 'pre-wrap',
        }}
      >
        {renderBody(post.body)}
      </div>
    </main>
  );
}
