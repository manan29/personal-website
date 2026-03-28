import Link from 'next/link';
import { getBlogPostsByCategory, getAllBooks } from '@/lib/content';

export default function HomePage() {
  const complexDeals = getBlogPostsByCategory('large-deal-learnings').slice(0, 3);
  const hiringPosts = getBlogPostsByCategory('hiring-top-talent').slice(0, 2);
  const books = getAllBooks().slice(0, 3);

  return (
    <main>
      {/* Intro */}
      <p
        style={{
          fontFamily: 'var(--font-lato)',
          fontSize: '17px',
          lineHeight: '1.9',
          color: '#2D2D2D',
          maxWidth: '580px',
          marginBottom: '48px',
          paddingBottom: '36px',
          borderBottom: '1px solid #E2E0D8',
        }}
      >
        I'm Manan, a sales guy who writes. I grew up in Delhi, represented my school at various
        levels at different sports, and from that moment on, I hated to lose.
      </p>

      {/* Credentials Strip */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: '#E2E0D8',
          border: '1px solid #E2E0D8',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '52px',
        }}
      >
        {/* Column 1 - Trained on */}
        <div style={{ background: '#F5F4EF', padding: '18px 16px' }}>
          <div
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '9px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#C2550A',
              marginBottom: '10px',
            }}
          >
            Trained on
          </div>
          {['Sandler', 'MEDDIC', 'Challenger Sale', 'SPIN'].map((method) => (
            <div
              key={method}
              style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                marginBottom: '6px',
              }}
            >
              <div
                style={{
                  width: '3px',
                  height: '3px',
                  borderRadius: '50%',
                  background: '#C2550A',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#1A1A1A',
                }}
              >
                {method}
              </span>
            </div>
          ))}
        </div>

        {/* Column 2 - Markets */}
        <div style={{ background: '#F5F4EF', padding: '18px 16px' }}>
          <div
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '9px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#C2550A',
              marginBottom: '10px',
            }}
          >
            Markets
          </div>
          {['India', 'United States', 'UK', 'Israel'].map((market) => (
            <div
              key={market}
              style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                marginBottom: '6px',
              }}
            >
              <div
                style={{
                  width: '3px',
                  height: '3px',
                  borderRadius: '50%',
                  background: '#C4BFBA',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#1A1A1A',
                }}
              >
                {market}
              </span>
            </div>
          ))}
          <div
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '10px',
              color: '#AAAAAA',
              marginTop: '8px',
              lineHeight: '1.5',
            }}
          >
            Cultural nuances across enterprise buying
          </div>
        </div>

        {/* Column 3 - Tools */}
        <div style={{ background: '#F5F4EF', padding: '18px 16px' }}>
          <div
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '9px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#C2550A',
              marginBottom: '10px',
            }}
          >
            Tools
          </div>
          {['HubSpot', 'Clay', 'Apollo', 'Salesforce'].map((tool) => (
            <div
              key={tool}
              style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                marginBottom: '6px',
              }}
            >
              <div
                style={{
                  width: '3px',
                  height: '3px',
                  borderRadius: '50%',
                  background: '#C4BFBA',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#1A1A1A',
                }}
              >
                {tool}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Complex Deals Section */}
      <section style={{ marginBottom: '52px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '14px',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#AAAAAA',
            }}
          >
            Complex Deals
          </h2>
          <Link
            href="/blog/large-deal-learnings"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '13px',
              color: '#C2550A',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            }}
          >
            See all
          </Link>
        </div>

        <div>
          {complexDeals.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.category}/${post.slug}`}
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
                {post.title}
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
                  {post.tag}
                </span>
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Hiring & Talent Section */}
      <section style={{ marginBottom: '52px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '14px',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#AAAAAA',
            }}
          >
            Hiring & Talent
          </h2>
          <Link
            href="/blog/hiring-top-talent"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '13px',
              color: '#C2550A',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            }}
          >
            See all
          </Link>
        </div>

        <div>
          {hiringPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.category}/${post.slug}`}
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
                {post.title}
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
                  {post.tag}
                </span>
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Reading List Section */}
      <section style={{ marginBottom: '52px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '14px',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#AAAAAA',
            }}
          >
            Reading List
          </h2>
          <Link
            href="/reading-list"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '13px',
              color: '#C2550A',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            }}
          >
            See all
          </Link>
        </div>

        <div>
          {books.map((book) => (
            <div
              key={book.slug}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderBottom: '1px solid #E2E0D8',
                gap: '12px',
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
                {book.title} —{' '}
                <span style={{ color: '#AAAAAA' }}>{book.author}</span>
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
                  {book.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
