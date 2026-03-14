'use client';

import { useState } from 'react';
import type { Book } from '@/lib/content';

export function BooksClient({ books }: { books: Book[] }) {
  const [activeFilter, setActiveFilter] = useState('All');

  // Get unique tags
  const tags = ['All', ...Array.from(new Set(books.map((book) => book.tag)))];

  const filteredBooks =
    activeFilter === 'All' ? books : books.filter((book) => book.tag === activeFilter);

  return (
    <>
      {/* Filters */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '13px',
              fontWeight: '500',
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid var(--border)',
              background: activeFilter === tag ? 'var(--accent)' : 'transparent',
              color: activeFilter === tag ? 'white' : 'var(--text)',
              cursor: 'pointer',
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Books */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {filteredBooks.map((book) => (
          <article
            key={book.slug}
            style={{
              paddingBottom: '24px',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: '8px' }}>
              {/* Title */}
              <h2
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '16px',
                  fontWeight: '700',
                  marginBottom: '2px',
                }}
              >
                {book.title}
              </h2>

              {/* Author */}
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '13px',
                  color: 'var(--faint)',
                  marginBottom: '8px',
                }}
              >
                {book.author}
              </p>

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
                  display: 'inline-block',
                  marginBottom: '8px',
                }}
              >
                {book.tag}
              </span>
            </div>

            {/* Body / Why */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                lineHeight: '1.7',
                color: 'var(--text)',
              }}
            >
              {book.why}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}
