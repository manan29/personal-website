'use client';

import { useState } from 'react';
import type { Deal } from '@/lib/content';

const filters = ['All', 'Win', 'Loss', 'Enterprise', 'Mid-Market', 'SMB'];

export function DealsClient({ deals }: { deals: Deal[] }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredDeals = deals.filter((deal) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Win' || activeFilter === 'Loss') {
      return deal.outcome === activeFilter.toLowerCase();
    }
    return deal.tag === activeFilter;
  });

  return (
    <>
      {/* Filters */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' }}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '13px',
              fontWeight: '500',
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid var(--border)',
              background: activeFilter === filter ? 'var(--accent)' : 'transparent',
              color: activeFilter === filter ? 'white' : 'var(--text)',
              cursor: 'pointer',
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Deals */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {filteredDeals.map((deal) => (
          <article key={deal.slug}>
            {/* Header */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', alignItems: 'center' }}>
              {/* Outcome badge */}
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '10px',
                  fontWeight: '600',
                  padding: '3px 10px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  background: deal.outcome === 'win' ? '#F0FDF4' : '#FFF1F1',
                  color: deal.outcome === 'win' ? '#166534' : '#991B1B',
                }}
              >
                {deal.outcome}
              </span>

              {/* Tag chip */}
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '10px',
                  fontWeight: '500',
                  padding: '3px 10px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  border: `1px solid var(--border)`,
                  color: 'var(--muted)',
                }}
              >
                {deal.tag}
              </span>

              {/* Date */}
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '12px',
                  color: 'var(--faint)',
                  marginLeft: 'auto',
                }}
              >
                {deal.date}
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '17px',
                fontWeight: '700',
                marginBottom: '8px',
              }}
            >
              {deal.title}
            </h2>

            {/* Body */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15.5px',
                lineHeight: '1.85',
                color: 'var(--text)',
              }}
            >
              {deal.body}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}
