import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/content';
import { experience } from '@/lib/experienceData';
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

function yearRange(dates: string): string {
  const years = dates.match(/\d{4}/g) || [];
  const hasPresent = /present/i.test(dates);
  if (years.length === 0) return dates;
  if (hasPresent) return `${years[0]} – Present`;
  if (years.length === 1) return years[0];
  return `${years[0]} – ${years[years.length - 1]}`;
}

// One-paragraph "how I got here" summaries, grounded in lib/experienceData.ts.
const STORY_COPY: Record<string, { headline: string; body: string }> = {
  Signeasy: {
    headline: 'Building the sales and success motion',
    body: "Joined Signeasy to build out its Sales and Customer Success function, implementing a structured sales process, hiring the team's founding BDR, and closing the company's first major enterprise deal with a bank. Promoted to lead the function after turning a one-person team into a four-person one.",
  },
  'Hevo Data': {
    headline: 'The 0→1 journey: $1M to $10M',
    body: "Joined Hevo as an early sales hire and wore every hat that came with it, from building the first Mid-Market team outside the US to standing up the account-management function and the hiring engine behind it, as the business grew from $1M to $10M in ARR.",
  },
  'o9 Solutions': {
    headline: 'First BD hire, outside the US',
    body: "o9's first Business Development hire outside the US, who built the outbound engine from the ground up, took qualified pipeline from a standing start to multiple millions a quarter, and was promoted from individual contributor to Team Lead along the way.",
  },
  Wipro: {
    headline: 'First demand-gen hire, Retail & Consumer',
    body: 'Joined as the first demand-generation hire for the Retail and Consumer vertical, building enterprise pipeline through campaigns and events, and recruiting the outbound agency partners that ran alongside it.',
  },
};

export default function HomePage() {
  const allPosts = getAllBlogPosts();

  return (
    <main>
      {/* ── SECTION 1: Hero ── */}
      <Section width="default" paddingY="96px">
        <div style={{ maxWidth: '620px', margin: '0 auto', textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 600,
              fontSize: '52px',
              lineHeight: 1.15,
              letterSpacing: '-0.015em',
              margin: '0 0 22px',
              color: 'var(--ink)',
            }}
          >
            Hi, I&apos;m Manan.
          </h1>

          <p style={{
            fontSize: '18px',
            lineHeight: 1.6,
            color: 'var(--body)',
            margin: '0 auto',
            maxWidth: '46ch',
            fontFamily: 'var(--font-hanken)',
          }}>
            I write about selling software, recruiting great talent, and the judgment and persistence both demand, plus human psychology more broadly. Mostly what works, and what doesn&apos;t.
          </p>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '26px',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '13px',
            color: 'var(--muted)',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--accent)',
              flexShrink: 0,
              display: 'inline-block',
            }} />
            Currently scaling SignEasy&apos;s CLM product
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/insights" style={{
              fontFamily: 'var(--font-work-sans)',
              fontWeight: 500,
              fontSize: '15px',
              background: 'var(--ink)',
              color: 'var(--bg)',
              padding: '13px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              display: 'inline-block',
            }}>
              Read Field Notes →
            </Link>
            <Link href="/about" style={{
              fontFamily: 'var(--font-work-sans)',
              fontWeight: 500,
              fontSize: '15px',
              background: 'var(--bg)',
              color: 'var(--ink)',
              padding: '13px 24px',
              borderRadius: '6px',
              border: '1px solid var(--border)',
              textDecoration: 'none',
              display: 'inline-block',
            }}>
              About me
            </Link>
          </div>
        </div>
      </Section>

      {/* ── SECTION 2: The Story ── */}
      <Section width="default" bordered="top" paddingY="80px">
        <div style={{
          fontFamily: 'var(--font-work-sans)',
          fontWeight: 600,
          fontSize: '12px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
        }}>
          The Story
        </div>

        <h2 style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontWeight: 600,
          fontSize: '32px',
          letterSpacing: '-0.015em',
          margin: '14px 0 0',
          color: 'var(--ink)',
        }}>
          How I got here.
        </h2>

        <div style={{ marginTop: '32px', maxWidth: '680px' }}>
          {experience.map((company) => {
            const copy = STORY_COPY[company.name];
            if (!copy) return null;
            return (
              <div key={company.name} style={{ padding: '24px 0', borderBottom: '1px solid var(--border)' }}>
                <div
                  className="story-row"
                  style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px' }}
                >
                  <div style={{
                    fontFamily: 'var(--font-jetbrains)',
                    fontSize: '12px',
                    letterSpacing: '0.06em',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                  }}>
                    {company.name}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-jetbrains)',
                    fontSize: '11px',
                    color: 'var(--muted)',
                    flexShrink: 0,
                  }}>
                    {yearRange(company.dates)}
                  </div>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 600,
                  fontSize: '21px',
                  margin: '8px 0 6px',
                  color: 'var(--ink)',
                }}>
                  {copy.headline}
                </h3>
                <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--body)', fontFamily: 'var(--font-hanken)' }}>
                  {copy.body}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── SECTION 3: At My Best ── */}
      <Section tinted bordered="both" width="wide" paddingY="72px">
        <div style={{
          fontFamily: 'var(--font-jetbrains)',
          fontSize: '12px',
          letterSpacing: '0.16em',
          color: 'var(--muted)',
          marginBottom: '36px',
        }}>
          {'// AT MY BEST WHEN I\u2019M'}
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
          Off the field: F1 and Test Cricket.
        </div>
      </Section>

      {/* ── SECTION 4: Writings ── */}
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
            See all field notes →
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
