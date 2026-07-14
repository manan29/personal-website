import { getAllBooks } from '@/lib/content';
import type { Metadata } from 'next';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Reading List — Manan Sachdeva',
};

export default function ReadingListPage() {
  const books = getAllBooks();

  return (
    <Container width="narrow" style={{ padding: '72px 40px 96px' }}>
      <h1
        style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontSize: '32px',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          color: 'var(--ink)',
          marginBottom: '32px',
        }}
      >
        Reading List
      </h1>

      <div>
        {books.map((book) => (
          <div
            key={book.slug}
            style={{
              padding: '16px 0',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {/* Title and Author */}
            <div style={{ marginBottom: '8px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  display: 'inline',
                }}
              >
                {book.title}
              </h2>
              <span
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '16px',
                  color: 'var(--muted)',
                  marginLeft: '6px',
                }}
              >
                — {book.author}
              </span>
            </div>

            {/* Tag */}
            <div style={{ marginBottom: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '9.5px',
                  fontWeight: 700,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  border: '1px solid var(--border)',
                  background: 'var(--accent-tint)',
                  borderRadius: '3px',
                  padding: '1px 6px',
                }}
              >
                {book.tag}
              </span>
            </div>

            {/* Why paragraph */}
            <p
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '14px',
                lineHeight: '1.7',
                color: 'var(--muted)',
              }}
            >
              {book.why}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
