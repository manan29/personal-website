import { getAllBooks } from '@/lib/content';

export default function ReadingListPage() {
  const books = getAllBooks();

  return (
    <main>
      <h1
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '24px',
          fontWeight: '700',
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
              borderBottom: '1px solid #E2E0D8',
            }}
          >
            {/* Title and Author */}
            <div style={{ marginBottom: '8px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#1A1A1A',
                  display: 'inline',
                }}
              >
                {book.title}
              </h2>
              <span
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '16px',
                  color: '#AAAAAA',
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
                  fontFamily: 'var(--font-ui)',
                  fontSize: '9.5px',
                  fontWeight: '700',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: '#C2550A',
                  border: '1px solid #F5DDD0',
                  background: '#FEF3E7',
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
                fontFamily: 'var(--font-lato)',
                fontSize: '14px',
                lineHeight: '1.7',
                color: '#6B6B6B',
              }}
            >
              {book.why}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
