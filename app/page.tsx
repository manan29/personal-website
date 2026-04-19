import Link from 'next/link';
import { getBlogPostsByCategory, getAllBooks } from '@/lib/content';
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
  color: '#C2550A',
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
  color: '#C2550A',
  border: '1px solid #F5DDD0',
  background: '#FEF3E7',
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
  const books = getAllBooks().slice(0, 3);

  return (
    <main style={{ maxWidth: '680px' }}>
      {/* Greeting */}
      <h1
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '28px',
          fontWeight: '700',
          color: '#1A1A1A',
          letterSpacing: '-0.02em',
          marginBottom: '12px',
        }}
      >
        Hey, I&apos;m Manan.
      </h1>

      {/* Intro */}
      <div style={{ marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #E2E0D8' }}>
        <p style={pStyle}>
          I write about sales - right from thinking through a{' '}
          <span style={{ color: '#A32D2D', fontWeight: 500 }}>complex deal cycle</span>
          {' '}to identifying and{' '}
          <span style={{ color: '#A32D2D', fontWeight: 500 }}>coaching sales talent</span>.
        </p>
        <p style={pStyle}>
          An{' '}
          <span style={{ color: '#A32D2D', fontWeight: 500 }}>operator</span>
          {' '}at heart. Early-stage SaaS is where I do my best work.
        </p>
        <p style={pStyle}>
          Off the field, I follow{' '}
          <span style={{ color: '#A32D2D', fontWeight: 500 }}>F1</span>
          {' '}and{' '}
          <span style={{ color: '#A32D2D', fontWeight: 500 }}>Test Cricket</span>.
        </p>
        <p style={{ ...pStyle, marginBottom: 0 }}>
          Know more about me,{' '}
          <Link href="/about" style={{ color: '#A32D2D', fontWeight: 600, textDecoration: 'underline' }}>HERE</Link>
        </p>
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

      {/* Reading List Section */}
      <section style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
          <h2 style={sectionHeadingStyle}>Reading List</h2>
          <Link href="/reading-list" style={seeAllStyle}>See all</Link>
        </div>
        <div>
          {books.map((book) => (
            <div key={book.slug} style={postRowStyle}>
              <span style={postTitleStyle}>
                {book.title}{' '}
                <span style={{ color: '#AAAAAA', fontWeight: 400 }}>— {book.author}</span>
              </span>
              <div style={postMetaStyle}>
                <span style={tagPillStyle}>{book.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
