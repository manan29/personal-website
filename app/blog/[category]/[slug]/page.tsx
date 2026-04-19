import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/content';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

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
      <div className="blog-post-inner" style={{ maxWidth: '680px', margin: '0 auto', padding: '60px 24px' }}>
        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '28px',
            fontWeight: '700',
            lineHeight: '1.3',
            marginBottom: '16px',
            color: '#1A1A1A',
          }}
        >
          {post.title}
        </h1>

        {/* Meta Line */}
        <div
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '12px',
            color: '#AAAAAA',
            marginBottom: '32px',
          }}
        >
          {post.date} · {post.tag} · {readingTime} min read
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
            fontFamily: 'var(--font-lato)',
            fontSize: '17px',
            lineHeight: '1.8',
            color: '#4A4744',
            fontStyle: 'italic',
            paddingBottom: '28px',
            borderBottom: '1px solid #E2E0D8',
            marginBottom: '36px',
          }}
        >
          {post.summary}
        </div>

        {/* Content */}
        <article
          style={{
            fontFamily: 'var(--font-lato)',
            fontSize: '16.5px',
            lineHeight: '1.9',
            color: '#2D2D2D',
          }}
        >
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '19px',
                    fontWeight: '700',
                    color: '#1A1A1A',
                    marginTop: '48px',
                    marginBottom: '16px',
                    paddingBottom: '8px',
                    borderBottom: '1px solid #E2E0D8',
                  }}
                >
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1A1A1A',
                    marginTop: '32px',
                    marginBottom: '12px',
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
                        fontFamily: 'var(--font-ui)',
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#1A1A1A',
                        background: '#FEF3E7',
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
                        color: '#4A4744',
                        borderLeft: '3px solid #C2550A',
                        paddingLeft: '20px',
                        margin: '32px 0',
                        marginBottom: '22px',
                      }}
                    >
                      {children}
                    </p>
                  );
                }

                return (
                  <p
                    style={{
                      fontFamily: 'var(--font-lato)',
                      fontSize: '16.5px',
                      lineHeight: '1.9',
                      color: '#2D2D2D',
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
                    fontFamily: 'var(--font-lato)',
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#2D2D2D',
                    marginBottom: '8px',
                  }}
                >
                  {children}
                </li>
              ),
              strong: ({ children }) => (
                <strong
                  style={{
                    color: '#1A1A1A',
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
      </div>
    </main>
  );
}
