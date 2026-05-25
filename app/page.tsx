import Link from 'next/link';
import Image from 'next/image';
import { getBlogPostsByCategory } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manan Sachdeva - Sales · GTM · Talent Building',
};

const pStyle: React.CSSProperties = {
  fontFamily: 'system-ui, -apple-system, sans-serif',
  fontSize: '17px',
  lineHeight: '1.7',
  color: '#2D2D2D',
  marginBottom: '10px',
};

const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-ui)',
  fontSize: '11px',
  fontWeight: '600',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#AAAAAA',
};

const seeAllStyle: React.CSSProperties = {
  fontFamily: 'var(--font-ui)',
  fontSize: '12px',
  color: '#3730A3',
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
};

const postRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 0',
  borderBottom: '1px solid rgba(226, 224, 216, 0.5)',
  gap: '12px',
  textDecoration: 'none',
  color: 'inherit',
};

const postTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-lato)',
  fontSize: '15px',
  color: '#1A1A1A',
  fontWeight: '500',
};

const postMetaStyle: React.CSSProperties = {
  flexShrink: 0,
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
};

const tagPillStyle: React.CSSProperties = {
  fontFamily: 'var(--font-ui)',
  fontSize: '10px',
  fontWeight: '700',
  letterSpacing: '0.07em',
  textTransform: 'uppercase',
  color: '#3730A3',
  border: '1px solid #C7D2FE',
  background: '#EEF2FF',
  borderRadius: '3px',
  padding: '2px 8px',
};

const dateStyle: React.CSSProperties = {
  fontFamily: 'var(--font-ui)',
  fontSize: '11px',
  color: '#888',
};

export default function HomePage() {
  const complexDeals = getBlogPostsByCategory('large-deal-learnings').slice(0, 3);
  const hiringPosts = getBlogPostsByCategory('hiring-top-talent').slice(0, 2);
  const buildingTalentPosts = getBlogPostsByCategory('building-top-talent').slice(0, 2);

  return (
    <main>
      {/* Two-column intro */}
      <div className="home-intro">
        {/* Left: profile photo + info */}
        <div className="home-profile-col">
          <Image
            src="/photo.png"
            alt="Manan Sachdeva"
            width={160}
            height={200}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            priority
          />
          <span style={{ fontSize: '16px', fontWeight: 600, color: '#3730A3', marginTop: '12px', display: 'block' }}>
            Manan Sachdeva
          </span>
          <span style={{ fontSize: '12px', color: '#3730A3', marginTop: '4px', display: 'block' }}>
            Sales · GTM · Talent Building
          </span>
          <span style={{ fontSize: '12px', color: '#6B7280', marginTop: '8px', lineHeight: '1.6', display: 'block' }}>
            Scaling Signeasy&apos;s CLM Product. Prev - Hevo Data, o9 Solutions
          </span>
          <Link
            href="/about"
            style={{
              display: 'inline-block',
              marginTop: '16px',
              border: '1px solid #3730A3',
              color: '#3730A3',
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '12px',
              background: 'transparent',
              textDecoration: 'none',
            }}
          >
            About me →
          </Link>
        </div>

        {/* Right: intro text */}
        <div className="home-intro-col">
          <h1
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '28px',
              fontWeight: '600',
              color: '#1A1A1A',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            Hey, I&apos;m Manan - Welcome.
          </h1>

          <p style={{ ...pStyle, marginBottom: '0.75rem' }}>
            I am an operator for 10+ years, working closely with CEOs and Founders to build revenue functions at growing SaaS companies.
          </p>
          <p style={{ ...pStyle, marginBottom: '0.75rem' }}>
            I enjoy being at the intersection of technology and selling. From selling Supply Chain Planning solutions to Fortune 500 companies, to building and hiring sales teams at early-stage SaaS startups in India - I thrive on the challenge to create something.
          </p>
          <p style={{ ...pStyle, marginBottom: '0.75rem' }}>
            The range of experience has given me a unique ability to connect the dots - making me adaptable and resilient, solving problems creatively and executing faster than others.
          </p>

          <p style={{ fontSize: '15px', fontWeight: '500', color: '#6B6B6B', marginBottom: '0.75rem', letterSpacing: '0.01em', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            I am at my best when I am:
          </p>

          {[
            { title: 'In the field', sub: 'Executing complex deals from first call to close.' },
            { title: 'Building hiring strategies', sub: 'Finding and developing top sales talent.' },
            { title: 'Building sales systems', sub: 'Structured processes that enable teams to succeed.' },
          ].map(({ title, sub }) => (
            <div key={title} style={{ borderLeft: '3px solid #3730A3', paddingLeft: '1.25rem', marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '15px', fontWeight: '500', color: '#3730A3', marginBottom: '2px' }}>{title}</div>
              <p style={{ fontSize: '14px', color: '#6B6B6B', lineHeight: '1.6', margin: 0 }}>{sub}</p>
            </div>
          ))}

          <p style={{ ...pStyle, color: '#6B6B6B', marginBottom: '0.75rem' }}>
            Off the field, I follow F1 and Test Cricket.
          </p>
          <p style={{ ...pStyle, marginBottom: 0 }}>
            Know more about me,{' '}
            <Link href="/about" style={{ color: '#3730A3', fontWeight: 600, textDecoration: 'underline' }}>HERE</Link>
          </p>
        </div>
      </div>

      {/* Complex Deals Section */}
      <section style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
          <h2 style={sectionHeadingStyle}>Complex Deals</h2>
          <Link href="/blog/large-deal-learnings" style={seeAllStyle}>See all</Link>
        </div>
        <div>
          {complexDeals.map((post) => (
            <Link key={post.slug} href={`/blog/${post.category}/${post.slug}`} style={postRowStyle}>
              <span style={postTitleStyle}>{post.title}</span>
              <div style={postMetaStyle}>
                <span style={tagPillStyle}>{post.tag}</span>
                <span style={dateStyle}>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Hiring & Talent Section */}
      <section style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
          <h2 style={sectionHeadingStyle}>Hiring &amp; Talent</h2>
          <Link href="/blog/hiring-top-talent" style={seeAllStyle}>See all</Link>
        </div>
        <div>
          {hiringPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.category}/${post.slug}`} style={postRowStyle}>
              <span style={postTitleStyle}>{post.title}</span>
              <div style={postMetaStyle}>
                <span style={tagPillStyle}>{post.tag}</span>
                <span style={dateStyle}>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Building Top Talent Section */}
      <section style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
          <h2 style={sectionHeadingStyle}>Building Top Talent</h2>
          <Link href="/blog/category/building-top-talent" style={seeAllStyle}>See all</Link>
        </div>
        <div>
          {buildingTalentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.category}/${post.slug}`} style={postRowStyle}>
              <span style={postTitleStyle}>{post.title}</span>
              <div style={postMetaStyle}>
                <span style={tagPillStyle}>{post.tag}</span>
                <span style={dateStyle}>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Experiments with AI Section */}
      <section style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
          <h2 style={sectionHeadingStyle}>Experiments with AI</h2>
          <Link href="/blog/category/experiments-with-ai" style={seeAllStyle}>See all</Link>
        </div>
      </section>

    </main>
  );
}
