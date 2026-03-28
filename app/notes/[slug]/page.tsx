import { getNoteBySlug, getAllNotes } from '@/lib/content';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

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
    <main>
      {/* Title */}
      <h1
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '24px',
          fontWeight: '700',
          lineHeight: '1.3',
          marginBottom: '12px',
          color: '#1A1A1A',
        }}
      >
        {note.title}
      </h1>

      {/* Meta Line */}
      <div
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '12px',
          color: '#AAAAAA',
          marginBottom: '32px',
        }}
      >
        {note.date} · {note.tag}
      </div>

      {/* Content */}
      <article
        style={{
          fontFamily: 'var(--font-lato)',
          fontSize: '16.5px',
          lineHeight: '1.9',
          color: '#2D2D2D',
        }}
      >
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '16.5px',
                  lineHeight: '1.9',
                  color: '#2D2D2D',
                  marginBottom: '22px',
                }}
              >
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong
                style={{
                  color: '#1A1A1A',
                  fontWeight: '700',
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
    </main>
  );
}
