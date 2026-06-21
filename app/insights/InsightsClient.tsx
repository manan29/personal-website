'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/content';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'large-deal-learnings', label: 'Complex Deals' },
  { id: 'hiring-top-talent', label: 'Hiring & Talent' },
  { id: 'sales-systems', label: 'Sales Systems' },
];

const CAT_LABEL: Record<string, string> = {
  'large-deal-learnings': 'Complex Deals',
  'hiring-top-talent': 'Hiring & Talent',
  'sales-systems': 'Sales Systems',
};

export default function InsightsClient({ posts }: { posts: BlogPost[] }) {
  const [selected, setSelected] = useState('all');

  const filtered = selected === 'all' ? posts : posts.filter(p => p.category === selected);

  return (
    <>
      <style>{`
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 24px;
        }
        @media (max-width: 768px) {
          .insights-grid { grid-template-columns: 1fr; }
        }
        .insights-card {
          border: 1px solid #E5E3DC;
          border-radius: 8px;
          padding: 16px;
          text-decoration: none;
          color: inherit;
          display: block;
          transition: border-color 0.15s;
        }
        .insights-card:hover { border-color: #C7D2FE; }
      `}</style>

      {/* Filter pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {FILTERS.map(f => {
          const active = selected === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setSelected(f.id)}
              style={{
                padding: '8px 16px',
                borderRadius: 100,
                border: '1px solid #3730A3',
                background: active ? '#3730A3' : 'transparent',
                color: active ? '#FFFFFF' : '#3730A3',
                fontSize: 14,
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: 'var(--font-ui)',
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Post grid */}
      <div className="insights-grid">
        {filtered.map(post => (
          <Link
            key={`${post.category}/${post.slug}`}
            href={`/blog/${post.category}/${post.slug}`}
            className="insights-card"
          >
            <span style={{
              display: 'inline-block',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#3730A3',
              background: '#EEF2FF',
              padding: '2px 8px',
              borderRadius: 100,
              marginBottom: 8,
            }}>
              {CAT_LABEL[post.category] || post.category}
            </span>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#1A1A1A', lineHeight: 1.4 }}>
              {post.title}
            </div>
            {post.summary && (
              <div style={{ fontSize: 13, color: '#6B7280', marginTop: 6, lineHeight: 1.5 }}>
                {post.summary}
              </div>
            )}
            <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 8 }}>{post.date}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
