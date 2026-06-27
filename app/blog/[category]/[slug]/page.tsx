import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/content';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

const CAT_LABEL: Record<string, string> = {
  'large-deal-learnings': 'Large Deal Learnings',
  'hiring-top-talent': 'Hiring & Talent',
  'sales-systems': 'Sales Systems',
};

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

// Calculate reading time (assuming 200 words per minute)
function calculateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

// Check if paragraph contains only bold text
function isStandaloneBold(children: any): boolean {
  if (!children) return false;
  if (Array.isArray(children)) {
    return children.every(child =>
      (typeof child === 'object' && child.type === 'strong') ||
      (typeof child === 'string' && child.trim() === '')
    );
  }
  return false;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { category, slug } = await params;
  const post = getBlogPostBySlug(category, slug);

  if (!post) {
    notFound();
  }

  const readingTime = calculateReadingTime(post.body);

  return (
    <main>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '72px 40px 96px' }}>
        {/* Back link */}
        <Link href="/insights" style={{
          fontFamily: 'var(--font-jetbrains)',
          fontSize: '12px',
          letterSpacing: '0.06em',
          color: '#2563eb',
          display: 'inline-block',
          marginBottom: '40px',
          textDecoration: 'none',
        }}>
          ← All insights
        </Link>

        {/* Meta row */}
        <div style={{
          display: 'flex',
          gap: '14px',
          alignItems: 'center',
          marginBottom: '20px',
          fontFamily: 'var(--font-jetbrains)',
          fontSize: '11px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#94a3b8',
        }}>
          <span style={{ color: '#2563eb' }}>{CAT_LABEL[category] || post.tag}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{readingTime} min read</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontWeight: 600,
            fontSize: '38px',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            margin: '0 0 28px',
            color: '#0f172a',
          }}
        >
          {post.title}
        </h1>

        {/* Author byline */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          paddingBottom: '32px',
          marginBottom: '32px',
          borderBottom: '1px solid #e8edf3',
        }}>
          <Image src="/photo.png" alt="Manan Sachdeva" width={38} height={38} style={{ borderRadius: '50%', objectFit: 'cover' }} />
          <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: '#64748b' }}>
            Manan Sachdeva
          </span>
        </div>

        {/* Hero Image */}
        {post.hero && (
          <img
            src={post.hero}
            alt={`${post.title} — timeline, challenges, learnings`}
            style={{width:'100%', borderRadius:'8px', marginBottom:'36px', marginTop:'20px'}}
          />
        )}

        {/* Summary / Intro */}
        <div
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '17px',
            lineHeight: '1.8',
            color: '#334155',
            fontStyle: 'italic',
            paddingBottom: '28px',
            borderBottom: '1px solid #e8edf3',
            marginBottom: '36px',
          }}
        >
          {post.summary}
        </div>

        {/* Content */}
        <article
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '19px',
            lineHeight: '1.75',
            color: '#334155',
          }}
        >
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 600,
                    fontSize: '23px',
                    letterSpacing: '-0.01em',
                    color: '#0f172a',
                    margin: '40px 0 14px',
                  }}
                >
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 600,
                    fontSize: '19px',
                    letterSpacing: '-0.01em',
                    color: '#0f172a',
                    margin: '40px 0 14px',
                  }}
                >
                  {children}
                </h3>
              ),
              p: ({ children }) => {
                // Check if this is a standalone bold line
                if (isStandaloneBold(children)) {
                  return (
                    <div
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#0f172a',
                        background: '#eff4ff',
                        padding: '16px 20px',
                        borderRadius: '6px',
                        margin: '32px 0',
                        display: 'block',
                      }}
                    >
                      {children}
                    </div>
                  );
                }

                // Check if paragraph starts with em (italic) - treat as pullquote
                const hasItalic = Array.isArray(children) &&
                  children.some(child => typeof child === 'object' && child.type === 'em');

                if (hasItalic) {
                  return (
                    <p
                      style={{
                        fontStyle: 'italic',
                        color: '#475569',
                        borderLeft: '3px solid #2563eb',
                        paddingLeft: '20px',
                        margin: '32px 0',
                        marginBottom: '22px',
                        fontFamily: 'var(--font-hanken)',
                        fontSize: '19px',
                        lineHeight: '1.75',
                      }}
                    >
                      {children}
                    </p>
                  );
                }

                return (
                  <p
                    style={{
                      fontFamily: 'var(--font-hanken)',
                      fontSize: '19px',
                      lineHeight: '1.75',
                      color: '#334155',
                      marginBottom: '22px',
                    }}
                  >
                    {children}
                  </p>
                );
              },
              ul: ({ children }) => (
                <ul
                  style={{
                    marginLeft: '0',
                    paddingLeft: '20px',
                    marginBottom: '22px',
                    listStyleType: 'disc',
                  }}
                  className="custom-bullet-list"
                >
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol
                  style={{
                    marginLeft: '0',
                    paddingLeft: '20px',
                    marginBottom: '22px',
                  }}
                  className="custom-numbered-list"
                >
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '18px',
                    lineHeight: '1.75',
                    color: '#334155',
                    marginBottom: '8px',
                  }}
                >
                  {children}
                </li>
              ),
              strong: ({ children }) => (
                <strong
                  style={{
                    color: '#0f172a',
                    fontWeight: '700',
                  }}
                >
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em style={{ fontStyle: 'italic' }}>{children}</em>
              ),
            }}
          >
            {post.body}
          </ReactMarkdown>
        </article>

        {/* Back link bottom */}
        <div style={{ paddingTop: '32px', marginTop: '56px', borderTop: '1px solid #e8edf3' }}>
          <Link href="/insights" style={{
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '12px',
            color: '#2563eb',
            textDecoration: 'none',
            letterSpacing: '0.06em',
          }}>
            ← Back to all insights
          </Link>
        </div>
      </div>
    </main>
  );
}
