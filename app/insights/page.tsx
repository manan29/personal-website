import { getAllBlogPosts } from '@/lib/content';
import InsightsClient from './InsightsClient';
import { Container } from '@/components/Container';

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const posts = getAllBlogPosts();
  const { category } = await searchParams;

  return (
    <Container width="default" style={{ padding: '88px 40px 96px' }} className="page-container">
      <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', letterSpacing: '0.16em', color: 'var(--accent)', marginBottom: '20px' }}>
        INSIGHTS
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
        Deals, hiring, and the systems that make revenue orgs work — written from inside the work.
      </p>
      <InsightsClient posts={posts} initialCategory={category} />
    </Container>
  );
}
