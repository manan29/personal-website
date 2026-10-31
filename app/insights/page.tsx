import { getAllBlogPosts } from '@/lib/content';
import InsightsClient from './InsightsClient';
import { Container } from '@/components/Container';
import Link from 'next/link';

const CAT_LABEL: Record<string, string> = {
  'large-deal-learnings': 'Large Deal Learnings',
  'hiring-top-talent': 'Hiring & Talent',
  'sales-systems': 'Sales Systems',
};

function formatPostDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }
  } catch {}
  return dateStr;
}

function estimateReadTime(post: { summary?: string }): string {
  const words = (post.summary || '').split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / 200) * 4);
  return `${mins} min read`;
}

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const posts = getAllBlogPosts();
  const { category } = await searchParams;
  const featured = posts[0];

  return (
    <Container width="default" style={{ padding: '88px 40px 96px' }} className="page-container">
      <div style={{ fontFamily: 'var(--font-work-sans)', fontWeight: 600, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '20px' }}>
        Field Notes
      </div>
      <h1 style={{
        fontFamily: 'var(--font-space-grotesk)',
        fontWeight: 600,
        fontSize: '44px',
        letterSpacing: '-0.025em',
        margin: '0 0 14px',
        color: 'var(--ink)',
      }}>
        Notes from the field.
      </h1>
      <p style={{
        fontSize: '18px',
        color: 'var(--muted)',
        maxWidth: '52ch',
        margin: '0 0 36px',
        fontFamily: 'var(--font-hanken)',
        lineHeight: 1.5,
      }}>
        Deals, hiring, and the systems that make revenue orgs work, written from inside the work.
      </p>

      {featured && (
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            fontFamily: 'var(--font-work-sans)',
            fontWeight: 600,
            fontSize: '12px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '12px',
          }}>
            Start here
          </div>
          <Link href={`/blog/${featured.category}/${featured.slug}`} style={{ display: 'block' }}>
            <h3 style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 600,
              fontSize: '23px',
              margin: 0,
              color: 'var(--ink)',
              lineHeight: 1.3,
            }}>
              {featured.title}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '7px', fontSize: '13px', color: 'var(--muted)' }}>
              <span style={{ fontFamily: 'var(--font-jetbrains)' }}>{formatPostDate(featured.date)}</span>
              <span style={{ color: 'var(--border)' }}>·</span>
              <span style={{ color: 'var(--accent)' }}>{CAT_LABEL[featured.category] || featured.category}</span>
              <span style={{ color: 'var(--border)' }}>·</span>
              <span style={{ fontFamily: 'var(--font-jetbrains)' }}>{estimateReadTime(featured)}</span>
            </div>
          </Link>
        </div>
      )}

      <div style={{
        fontFamily: 'var(--font-work-sans)',
        fontWeight: 600,
        fontSize: '12px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--muted)',
        borderTop: '1px solid var(--border)',
        paddingTop: '28px',
        marginBottom: '8px',
      }}>
        Everything
      </div>

      <InsightsClient posts={posts} initialCategory={category} />
    </Container>
  );
}
