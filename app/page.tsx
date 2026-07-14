import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/content';
import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';

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
      <Section width="wide" paddingY="88px">
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: '72px',
            alignItems: 'center',
          }}
        >
          {/* Left column */}
          <div>
            <div style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '12px',
              letterSpacing: '0.16em',
              color: 'var(--accent)',
              marginBottom: '24px',
            }}>
              SALES · GTM · TALENT BUILDING
            </div>

            <h1
              className="hero-h1"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 600,
                fontSize: '64px',
                lineHeight: 1.04,
                letterSpacing: '-0.025em',
                margin: '0 0 28px',
                color: 'var(--ink)',
                whiteSpace: 'pre-line',
              }}
            >
              {`Student of Sales,\nin pursuit of mastery.`}
            </h1>

            <p style={{
              fontSize: '19px',
              lineHeight: 1.6,
              color: 'var(--body)',
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
              color: 'var(--muted)',
              marginBottom: '36px',
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 0 4px var(--accent-tint)',
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
                background: 'var(--ink)',
                color: 'var(--bg)',
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
                background: 'var(--bg)',
                color: 'var(--ink)',
                padding: '13px 24px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
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
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
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
      </Section>

      {/* ── SECTION 2: At My Best ── */}
      <Section tinted bordered="both" width="wide" paddingY="72px">
        <div style={{
          fontFamily: 'var(--font-jetbrains)',
          fontSize: '12px',
          letterSpacing: '0.16em',
          color: 'var(--muted)',
          marginBottom: '36px',
        }}>
          // AT MY BEST WHEN I&apos;M
        </div>

        <div
          className="pillars-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
        >
          {[
            { num: '01', title: 'In the field', desc: 'Executing complex deals from first call to close.' },
            { num: '02', title: 'Building hiring strategies', desc: 'Finding and developing top sales talent.' },
            { num: '03', title: 'Building sales systems', desc: 'Structured processes that enable teams to succeed.' },
          ].map(({ num, title, desc }) => (
            <Card key={num} style={{ padding: '26px 24px' }}>
              <div style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '13px',
                color: 'var(--accent)',
                marginBottom: '14px',
              }}>
                {num}
              </div>
              <div style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 600,
                fontSize: '21px',
                color: 'var(--ink)',
                marginBottom: '8px',
              }}>
                {title}
              </div>
              <p style={{
                fontSize: '15px',
                lineHeight: 1.55,
                color: 'var(--body)',
                margin: 0,
                fontFamily: 'var(--font-hanken)',
              }}>
                {desc}
              </p>
            </Card>
          ))}
        </div>

        <div style={{
          fontFamily: 'var(--font-jetbrains)',
          fontSize: '12px',
          color: 'var(--muted)',
          marginTop: '32px',
          letterSpacing: '0.04em',
        }}>
          Off the field — F1 &amp; Test Cricket.
        </div>
      </Section>

      {/* ── SECTION 3: Writings ── */}
      <Section width="wide" paddingY="88px">
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
            color: 'var(--ink)',
          }}>
            Writings
          </h2>
          <Link href="/insights" style={{
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '12px',
            letterSpacing: '0.06em',
            color: 'var(--accent)',
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
                borderTop: '1px solid var(--border)',
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
                  color: 'var(--muted)',
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
                  color: 'var(--accent)',
                  marginBottom: '7px',
                }}>
                  {CAT_LABEL[post.category] || post.category}
                </div>
                <div style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 500,
                  fontSize: '19px',
                  lineHeight: 1.3,
                  color: 'var(--ink)',
                }}>
                  {post.title}
                </div>
              </div>
              <span style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '16px',
                textAlign: 'right',
                color: 'var(--muted)',
              }}>
                →
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
