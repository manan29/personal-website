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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { category, slug } = await params;
  const post = getBlogPostBySlug(category, slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '60px 24px' }}>
        {/* Header */}
        <header style={{ marginBottom: '48px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '28px',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '16px',
            }}
          >
            {post.title}
          </h1>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
            }}
          >
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
              {post.tag}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '12px',
                color: 'var(--faint)',
              }}
            >
              {post.date}
            </span>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              lineHeight: '1.6',
              color: 'var(--muted)',
            }}
          >
            {post.summary}
          </p>
        </header>

        {/* Content */}
        <article
          style={{
            fontFamily: 'var(--font-body)',
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
                    fontSize: '20px',
                    fontWeight: '700',
                    marginTop: '32px',
                    marginBottom: '16px',
                  }}
                >
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '18px',
                    fontWeight: '600',
                    marginTop: '24px',
                    marginBottom: '12px',
                  }}
                >
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p style={{ marginBottom: '18px' }}>{children}</p>
              ),
              ul: ({ children }) => (
                <ul
                  style={{
                    marginBottom: '18px',
                    paddingLeft: '24px',
                    listStyleType: 'disc',
                  }}
                >
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li style={{ marginBottom: '8px' }}>{children}</li>
              ),
              strong: ({ children }) => (
                <strong style={{ fontWeight: '700' }}>{children}</strong>
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
