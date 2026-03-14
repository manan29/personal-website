import Link from 'next/link';
import { getAllDeals, getAllPlaybooks, getAllBooks } from '@/lib/content';

export default function HomePage() {
  const deals = getAllDeals().slice(0, 3);
  const playbooks = getAllPlaybooks().slice(0, 2);
  const books = getAllBooks().slice(0, 3);

  return (
    <main style={{ maxWidth: '680px', margin: '0 auto', padding: '60px 24px' }}>
      {/* Hero Section */}
      <section style={{ marginBottom: '60px' }}>
        {/* Avatar */}
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #C2550A, #F97316)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px',
          }}
        >
          <span style={{ color: 'white', fontSize: '32px', fontWeight: '700' }}>M</span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '20px',
            fontWeight: '700',
            marginBottom: '4px',
          }}
        >
          Manan Shah
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '11.5px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--accent)',
            marginBottom: '24px',
          }}
        >
          Sales · GTM · Bengaluru
        </p>

        {/* One-liner */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16.5px',
            lineHeight: '1.85',
            marginBottom: '16px',
          }}
        >
          I think strategically, execute relentlessly — and write down what I learn.
        </p>

        {/* Bio */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15.5px',
            color: 'var(--muted)',
            lineHeight: '1.7',
            marginBottom: '16px',
          }}
        >
          Multiple revenue roles across sales and GTM at Signeasy. This site is where I put the
          patterns, playbooks, and lessons that don't fit in a LinkedIn post.
        </p>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/manansachdeva/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover"
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '13px',
            color: 'var(--muted)',
            textDecoration: 'underline',
          }}
        >
          LinkedIn
        </a>
      </section>

      {/* Recent Deal Learnings */}
      <section style={{ marginBottom: '48px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '16px',
          }}
        >
          <h2 style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', fontWeight: '600' }}>
            Recent Deal Learnings
          </h2>
          <Link
            href="/deal-learnings"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '13px',
              color: 'var(--muted)',
            }}
          >
            All entries →
          </Link>
        </div>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {deals.map((deal) => (
            <div
              key={deal.slug}
              style={{
                padding: '12px 0',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              {/* Outcome badge */}
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '10px',
                  fontWeight: '600',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  background: deal.outcome === 'win' ? '#F0FDF4' : '#FFF1F1',
                  color: deal.outcome === 'win' ? '#166534' : '#991B1B',
                }}
              >
                {deal.outcome}
              </span>

              {/* Tag */}
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '10px',
                  fontWeight: '500',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  border: '1px solid var(--border)',
                  color: 'var(--muted)',
                }}
              >
                {deal.tag}
              </span>

              {/* Title */}
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14.5px',
                  flex: 1,
                }}
              >
                {deal.title}
              </span>

              {/* Date */}
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '12px',
                  color: 'var(--faint)',
                }}
              >
                {deal.date}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Playbooks */}
      <section style={{ marginBottom: '48px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '16px',
          }}
        >
          <h2 style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', fontWeight: '600' }}>
            Playbooks
          </h2>
          <Link
            href="/playbooks"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '13px',
              color: 'var(--muted)',
            }}
          >
            All playbooks →
          </Link>
        </div>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {playbooks.map((playbook) => (
            <Link
              key={playbook.slug}
              href={`/playbooks/${playbook.slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 0',
                borderBottom: '1px solid var(--border)',
                textDecoration: 'none',
                color: 'inherit',
                flexWrap: 'wrap',
              }}
            >
              {/* Tag */}
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '10px',
                  fontWeight: '500',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  border: '1px solid var(--border)',
                  color: 'var(--muted)',
                }}
              >
                {playbook.tag}
              </span>

              {/* Title */}
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14.5px',
                  flex: 1,
                }}
              >
                {playbook.title}
              </span>

              {/* Date */}
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '12px',
                  color: 'var(--faint)',
                }}
              >
                {playbook.date}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Books */}
      <section>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '16px',
          }}
        >
          <h2 style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', fontWeight: '600' }}>
            Books
          </h2>
          <Link
            href="/books"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '13px',
              color: 'var(--muted)',
            }}
          >
            Full list →
          </Link>
        </div>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {books.map((book) => (
            <div
              key={book.slug}
              style={{
                padding: '12px 0',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              {/* Tag */}
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '10px',
                  fontWeight: '500',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  border: '1px solid var(--border)',
                  color: 'var(--muted)',
                }}
              >
                {book.tag}
              </span>

              {/* Title */}
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14.5px',
                  flex: 1,
                }}
              >
                {book.title}
              </span>

              {/* Author */}
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '12px',
                  color: 'var(--faint)',
                }}
              >
                {book.author}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
