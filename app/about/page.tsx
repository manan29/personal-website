export default function AboutPage() {
  const currentlyItems = [
    { label: 'Role', value: 'Sales & GTM at Signeasy' },
    { label: 'Location', value: 'Bengaluru, India' },
    { label: 'Focus', value: 'Enterprise deals, discovery, qualification' },
    { label: 'Learning', value: 'How to build repeatable sales systems' },
  ];

  return (
    <main style={{ maxWidth: '680px', margin: '0 auto', padding: '60px 24px' }}>
      <h1
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '24px',
          fontWeight: '700',
          marginBottom: '32px',
        }}
      >
        About
      </h1>

      {/* Bio Paragraphs */}
      <div style={{ marginBottom: '48px' }}>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16.5px',
            lineHeight: '1.9',
            marginBottom: '24px',
          }}
        >
          I've spent the last few years in sales and go-to-market roles at Signeasy, working mostly
          with mid-market and enterprise customers. I like the puzzle of revenue work — figuring out
          why a deal stalls, how to qualify harder, when to walk away.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16.5px',
            lineHeight: '1.9',
            marginBottom: '24px',
          }}
        >
          Most of what I've learned came from doing it wrong first. Chasing unqualified pipeline.
          Building proposals for people who couldn't buy. Assuming interest meant intent. This site
          is where I write down the corrections.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16.5px',
            lineHeight: '1.9',
            marginBottom: '24px',
          }}
        >
          I believe in process over intuition, specificity over generalization, and writing things
          down so they compound. Sales is pattern recognition. The faster you name the patterns, the
          faster you improve.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16.5px',
            lineHeight: '1.9',
            marginBottom: '24px',
          }}
        >
          If you're in a similar role and something here is useful, that's the point. If you want to
          discuss a specific problem or approach, reach out on LinkedIn.
        </p>
      </div>

      {/* Currently Section */}
      <section style={{ marginBottom: '48px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '18px',
            fontWeight: '700',
            marginBottom: '16px',
          }}
        >
          Currently
        </h2>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {currentlyItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 0',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: 'var(--muted)',
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--text)',
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Find Me Section */}
      <section>
        <h2
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '18px',
            fontWeight: '700',
            marginBottom: '16px',
          }}
        >
          Find me
        </h2>

        <a
          href="https://www.linkedin.com/in/manansachdeva/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover"
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '14px',
            color: 'var(--muted)',
            textDecoration: 'underline',
          }}
        >
          LinkedIn
        </a>
      </section>
    </main>
  );
}
