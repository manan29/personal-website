import Link from 'next/link';
import { getBlogPostsByCategory, getAllBooks } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manan Sachdeva - Sales · GTM · Talent Building',
};

export default function HomePage() {
  const complexDeals = getBlogPostsByCategory('large-deal-learnings').slice(0, 3);
  const hiringPosts = getBlogPostsByCategory('hiring-top-talent').slice(0, 2);
  const buildingTalentPosts = getBlogPostsByCategory('building-top-talent').slice(0, 2);
  const books = getAllBooks().slice(0, 3);

  return (
    <main>
      {/* Greeting */}
      <h1
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '28px',
          fontWeight: '700',
          color: '#1A1A1A',
          letterSpacing: '-0.02em',
          marginBottom: '20px',
        }}
      >
        Hey, I&apos;m Manan.
      </h1>

      {/* Intro */}
      <div style={{ marginBottom: '48px', paddingBottom: '36px', borderBottom: '1px solid #E2E0D8' }}>
        <p style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '18px', lineHeight: '1.9', color: '#2D2D2D', marginBottom: '20px' }}>
          I use this space to write mostly about various aspects of sales, right from thinking about a{' '}
          <span style={{ color: '#A32D2D', fontWeight: 500 }}>complex deal cycle</span>
          {' '}to identifying and{' '}
          <span style={{ color: '#A32D2D', fontWeight: 500 }}>coaching sales talent</span>.
        </p>
        <p style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '18px', lineHeight: '1.9', color: '#2D2D2D', marginBottom: '20px' }}>
          I am an{' '}
          <span style={{ color: '#A32D2D', fontWeight: 500 }}>operator</span>
          {' '}at heart, who found my place by taking on challenging roles at early-stage SaaS startups.
        </p>
        <p style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '18px', lineHeight: '1.9', color: '#2D2D2D', marginBottom: '20px' }}>
          Personally, I like following{' '}
          <span style={{ color: '#A32D2D', fontWeight: 500 }}>F1</span>
          {' '}and{' '}
          <span style={{ color: '#A32D2D', fontWeight: 500 }}>Test Cricket</span>
          {' '}as the only competitive sports.
        </p>
        <p style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '18px', lineHeight: '1.9', color: '#2D2D2D', marginBottom: '20px' }}>
          Know more about me,{' '}
          <Link href="/about" style={{ color: '#A32D2D', fontWeight: 600, textDecoration: 'underline' }}>HERE</Link>
        </p>
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

      {/* Building Top Talent Section */}
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
            Building Top Talent
          </h2>
          <Link
            href="/blog/category/building-top-talent"
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
          {buildingTalentPosts.map((post) => (
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

      {/* Experiments with AI Section */}
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
            Experiments with AI
          </h2>
          <Link
            href="/blog/category/experiments-with-ai"
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
                {book.title} -{' '}
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
