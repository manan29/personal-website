import Link from 'next/link';
import { getAllNotes } from '@/lib/content';

export default function NotesPage() {
  const notes = getAllNotes();

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
              padding: '10px 0',
              borderBottom: '1px solid #E2E0D8',
              gap: '12px',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-lato)',
                fontSize: '15.5px',
                color: '#1A1A1A',
                fontWeight: '400',
              }}
            >
              {note.title}
            </span>
            <div
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '11.5px',
                color: '#AAAAAA',
                flexShrink: 0,
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
              }}
            >
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
                {note.tag}
              </span>
              <span>{note.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
