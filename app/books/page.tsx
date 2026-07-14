import { getAllBooks } from '@/lib/content';
import { BooksClient } from '@/components/BooksClient';
import { Container } from '@/components/Container';

export default function BooksPage() {
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
        Books
      </h1>

      <BooksClient books={books} />
    </Container>
  );
}
