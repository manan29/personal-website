import { getAllBooks } from '@/lib/content';
import { BooksClient } from '@/components/BooksClient';

export default function BooksPage() {
  const books = getAllBooks();

  return (
    <main>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '60px 24px' }}>
      <h1
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '24px',
          fontWeight: '700',
          marginBottom: '24px',
        }}
      >
        Books
      </h1>

      <BooksClient books={books} />
          </div>
    </main>
  );
}
