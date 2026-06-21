import { getAllBlogPosts } from '@/lib/content';
import InsightsClient from './InsightsClient';

export default function InsightsPage() {
  const posts = getAllBlogPosts();

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: 26, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>Insights</h1>
      <p style={{ fontSize: 15, color: '#6B7280', marginBottom: 24 }}>
        Writing on complex deals, hiring, and sales systems.
      </p>
      <InsightsClient posts={posts} />
    </div>
  );
}
