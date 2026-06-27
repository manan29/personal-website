import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manan Sachdeva - Sales · GTM · Talent Building',
};

function formatPostDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }
  } catch {}
  return dateStr;
}

const CAT_LABEL: Record<string, string> = {
  'large-deal-learnings': 'Large Deal Learnings',
  'hiring-top-talent': 'Hiring & Talent',
  'sales-systems': 'Sales Systems',
};

export default function HomePage() {
  const allPosts = getAllBlogPosts();

  return (
    <main>
      {/* ── SECTION 1: Hero ── */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '96px 40px 72px' }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.45fr 0.85fr',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Left column */}
          <div>
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '12px',
              letterSpacing: '0.16em',
              color: '#2563eb',
              marginBottom: '24px',
            }}>
              SALES · GTM · TALENT BUILDING
            </div>

            <h1
              className="hero-h1"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 600,
                fontSize: '62px',
                lineHeight: 1.04,
                letterSpacing: '-0.025em',
                margin: '0 0 28px',
                color: '#0f172a',
                whiteSpace: 'pre-line',
              }}
            >
              {`Student of Sales,\nin pursuit of mastery.`}
            </h1>

            <p style={{
              fontSize: '19px',
              lineHeight: 1.6,
              color: '#475569',
              maxWidth: '46ch',
              margin: '0 0 32px',
              fontFamily: 'var(--font-hanken)',
            }}>
              Operator with 10+ years in multiple GTM roles, working closely with CEOs and founders to build revenue functions at growing tech companies.
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '12px',
              letterSpacing: '0.04em',
              color: '#64748b',
              marginBottom: '36px',
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#2563eb',
                boxShadow: '0 0 0 4px rgba(37,99,235,0.14)',
                flexShrink: 0,
                display: 'inline-block',
              }} />
              CURRENTLY — Scaling SignEasy&apos;s CLM product
            </div>

            <div style={{ display: 'flex', gap: '14px' }}>
              <Link href="/insights" style={{
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                fontSize: '15px',
                letterSpacing: '0.01em',
                background: '#0f172a',
                color: 'white',
                padding: '13px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-block',
              }}>
                Read the insights →
              </Link>
              <Link href="/about" style={{
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                fontSize: '15px',
                letterSpacing: '0.01em',
                background: 'white',
                color: '#0f172a',
                padding: '13px 24px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                textDecoration: 'none',
                display: 'inline-block',
              }}>
                About me
              </Link>
            </div>
          </div>

          {/* Right column: photo */}
          <div
            className="hero-photo"
            style={{
              aspectRatio: '4/5',
              borderRadius: '14px',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid #e2e8f0',
            }}
          >
            <Image
              src="/photo.png"
              alt="Manan Sachdeva"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>

      {/* ── SECTION 2: At My Best ── */}
      <div style={{ borderTop: '1px solid #e8edf3', borderBottom: '1px solid #e8edf3', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '64px 40px' }}>
          <div style={{
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '12px',
            letterSpacing: '0.16em',
            color: '#94a3b8',
            marginBottom: '36px',
          }}>
            // AT MY BEST WHEN I&apos;M
          </div>

          <div
            className="pillars-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '36px' }}
          >
            {[
              { num: '01', title: 'In the field', desc: 'Executing complex deals from first call to close.' },
              { num: '02', title: 'Building hiring strategies', desc: 'Finding and developing top sales talent.' },
              { num: '03', title: 'Building sales systems', desc: 'Structured processes that enable teams to succeed.' },
            ].map(({ num, title, desc }) => (
              <div key={num} style={{ borderTop: '2px solid #0f172a', paddingTop: '18px' }}>
                <div style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '13px',
                  color: '#2563eb',
                  marginBottom: '14px',
                }}>
                  {num}
                </div>
                <div style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 600,
                  fontSize: '21px',
                  color: '#0f172a',
                  marginBottom: '8px',
                }}>
                  {title}
                </div>
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.55,
                  color: '#475569',
                  margin: 0,
                  fontFamily: 'var(--font-hanken)',
                }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '12px',
            color: '#94a3b8',
            marginTop: '40px',
            letterSpacing: '0.04em',
          }}>
            Off the field — F1 &amp; Test Cricket.
          </div>
        </div>
      </div>

      {/* ── SECTION 3: Writings ── */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '80px 40px 96px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: '8px',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontWeight: 600,
            fontSize: '30px',
            letterSpacing: '-0.02em',
            margin: 0,
            color: '#0f172a',
          }}>
            Writings
          </h2>
          <Link href="/insights" style={{
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '12px',
            letterSpacing: '0.06em',
            color: '#2563eb',
            textDecoration: 'none',
          }}>
            See all →
          </Link>
        </div>

        <div>
          {allPosts.map((post) => (
            <Link
              key={`${post.category}/${post.slug}`}
              href={`/blog/${post.category}/${post.slug}`}
              className="article-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr 24px',
                gap: '24px',
                alignItems: 'center',
                padding: '24px 8px',
                borderTop: '1px solid #e8edf3',
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer',
              }}
            >
              <span
                className="article-date"
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '12px',
                  color: '#94a3b8',
                }}
              >
                {formatPostDate(post.date)}
              </span>
              <div>
                <div style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#2563eb',
                  marginBottom: '7px',
                }}>
                  {CAT_LABEL[post.category] || post.category}
                </div>
                <div style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 500,
                  fontSize: '19px',
                  lineHeight: 1.3,
                  color: '#0f172a',
                }}>
                  {post.title}
                </div>
              </div>
              <span style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '16px',
                textAlign: 'right',
                color: '#94a3b8',
              }}>
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
