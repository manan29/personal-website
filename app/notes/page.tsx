import Link from 'next/link';
import { getAllNotes } from '@/lib/content';
import type { Metadata } from 'next';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Notes — Manan Sachdeva',
};

export default function NotesPage() {
  const notes = getAllNotes();

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
        Notes
      </h1>

      <div>
        {notes.map((note) => (
          <Link
            key={note.slug}
            href={`/notes/${note.slug}`}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '14px 0',
              borderBottom: '1px solid var(--border)',
              gap: '12px',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '15.5px',
                color: 'var(--ink)',
                fontWeight: 400,
              }}
            >
              {note.title}
            </span>
            <div
              style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '11.5px',
                color: 'var(--muted)',
                flexShrink: 0,
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
              }}
            >
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
                {note.tag}
              </span>
              <span>{note.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
