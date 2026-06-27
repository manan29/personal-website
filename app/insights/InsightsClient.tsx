'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/content';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'large-deal-learnings', label: 'Large Deal Learnings' },
  { id: 'hiring-top-talent', label: 'Hiring' },
  { id: 'sales-systems', label: 'Sales Systems' },
];

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

function estimateReadTime(post: BlogPost): string {
  // approximate — use summary length as proxy if no body available
  const words = ((post as any).body || post.summary || '').split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min`;
}

export default function InsightsClient({ posts }: { posts: BlogPost[] }) {
  const [selected, setSelected] = useState('all');

  const filtered = selected === 'all' ? posts : posts.filter(p => p.category === selected);

  return (
    <>
      {/* Filter chips */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
        {FILTERS.map(f => {
          const active = selected === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setSelected(f.id)}
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                fontSize: '14px',
                padding: '8px 18px',
                borderRadius: '999px',
                cursor: 'pointer',
                border: `1px solid ${active ? '#2563eb' : '#e2e8f0'}`,
                background: active ? '#eff4ff' : 'white',
                color: active ? '#2563eb' : '#475569',
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Article rows */}
      <div>
        {filtered.map(post => (
          <Link
            key={`${post.category}/${post.slug}`}
            href={`/blog/${post.category}/${post.slug}`}
            className="article-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr 90px 24px',
              gap: '24px',
              alignItems: 'center',
              padding: '26px 8px',
              borderTop: '1px solid #e8edf3',
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
            }}
          >
            <span
              className="article-date"
              style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '12px',
                color: '#94a3b8',
              }}
            >
              {formatPostDate(post.date)}
            </span>
            <div>
              <div style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#2563eb',
                marginBottom: '7px',
              }}>
                {CAT_LABEL[post.category] || post.category}
              </div>
              <div style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 500,
                fontSize: '19px',
                lineHeight: 1.3,
                color: '#0f172a',
              }}>
                {post.title}
              </div>
            </div>
            <span style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '11px',
              color: '#94a3b8',
              textAlign: 'right',
            }}>
              {estimateReadTime(post)}
            </span>
            <span style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '16px',
              textAlign: 'right',
              color: '#94a3b8',
            }}>
              →
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
