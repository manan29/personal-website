import { getAllBlogPosts } from '@/lib/content';
import InsightsClient from './InsightsClient';

export default function InsightsPage() {
  const posts = getAllBlogPosts();

  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', padding: '88px 40px 96px' }} className="page-container">
      <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', letterSpacing: '0.16em', color: '#2563eb', marginBottom: '20px' }}>
        // INSIGHTS
      </div>
      <h1 style={{
        fontFamily: 'var(--font-space-grotesk)',
        fontWeight: 600,
        fontSize: '44px',
        letterSpacing: '-0.025em',
        margin: '0 0 14px',
        color: '#0f172a',
      }}>
        Notes from the field.
      </h1>
      <p style={{
        fontSize: '18px',
        color: '#64748b',
        maxWidth: '52ch',
        margin: '0 0 36px',
        fontFamily: 'var(--font-hanken)',
        lineHeight: 1.5,
      }}>
        Deals, hiring, and the systems that make revenue orgs work — written from inside the work.
      </p>
      <InsightsClient posts={posts} />
    </div>
  );
}
