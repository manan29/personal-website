'use client';

import { useState, Fragment } from 'react';
import { useRouter } from 'next/navigation';
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
  const words = (post.body || post.summary || '').split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min`;
}

export default function InsightsClient({ posts, initialCategory }: { posts: BlogPost[]; initialCategory?: string }) {
  const router = useRouter();
  const validIds = FILTERS.map((f) => f.id);
  const [selected, setSelected] = useState(
    initialCategory && validIds.includes(initialCategory) ? initialCategory : 'all'
  );

  const filtered = selected === 'all' ? posts : posts.filter((p) => p.category === selected);

  function selectFilter(id: string) {
    setSelected(id);
    router.replace(id === 'all' ? '/insights' : `/insights?category=${id}`, { scroll: false });
  }

  return (
    <>
      {/* Filter list */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap', alignItems: 'center', fontSize: '13px', fontFamily: 'var(--font-work-sans)' }}>
        {FILTERS.map((f, i) => {
          const active = selected === f.id;
          return (
            <Fragment key={f.id}>
              {i > 0 && <span style={{ color: 'var(--border)' }}>·</span>}
              <button
                onClick={() => selectFilter(f.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                  fontWeight: active ? 600 : 400,
                  color: active ? 'var(--ink)' : 'var(--muted)',
                }}
              >
                {f.label}
              </button>
            </Fragment>
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
              borderTop: '1px solid var(--border)',
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
                color: 'var(--muted)',
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
                color: 'var(--accent)',
                marginBottom: '7px',
              }}>
                {CAT_LABEL[post.category] || post.category}
              </div>
              <div style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 500,
                fontSize: '19px',
                lineHeight: 1.3,
                color: 'var(--ink)',
              }}>
                {post.title}
              </div>
            </div>
            <span style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '11px',
              color: 'var(--muted)',
              textAlign: 'right',
            }}>
              {estimateReadTime(post)}
            </span>
            <span style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '16px',
              textAlign: 'right',
              color: 'var(--muted)',
            }}>
              →
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
