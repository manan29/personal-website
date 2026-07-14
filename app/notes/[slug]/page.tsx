import { getNoteBySlug, getAllNotes } from '@/lib/content';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Container } from '@/components/Container';

interface NotePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const notes = getAllNotes();
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <Container width="narrow" style={{ padding: '72px 40px 96px' }}>
      {/* Title */}
      <h1
        style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontSize: '30px',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          lineHeight: '1.3',
          marginBottom: '12px',
          color: 'var(--ink)',
        }}
      >
        {note.title}
      </h1>

      {/* Meta Line */}
      <div
        style={{
          fontFamily: 'var(--font-jetbrains)',
          fontSize: '12px',
          color: 'var(--muted)',
          marginBottom: '32px',
        }}
      >
        {note.date} · {note.tag}
      </div>

      {/* Content */}
      <article
        style={{
          fontFamily: 'var(--font-hanken)',
          fontSize: '16.5px',
          lineHeight: '1.9',
          color: 'var(--body)',
        }}
      >
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '16.5px',
                  lineHeight: '1.9',
                  color: 'var(--body)',
                  marginBottom: '22px',
                }}
              >
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong
                style={{
                  color: 'var(--ink)',
                  fontWeight: 700,
                }}
              >
                {children}
              </strong>
            ),
            em: ({ children }) => <em style={{ fontStyle: 'italic' }}>{children}</em>,
          }}
        >
          {note.body}
        </ReactMarkdown>
      </article>
    </Container>
  );
}
