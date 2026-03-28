export default function AboutPage() {
  const currentlyItems = [
    { label: 'Role', value: 'Sales & GTM at Signeasy' },
    { label: 'Location', value: 'Bengaluru, India' },
    { label: 'Focus', value: 'Enterprise deals, discovery, qualification' },
    { label: 'Learning', value: 'How to build repeatable sales systems' },
  ];

  return (
    <main>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '60px 24px' }}>
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
          </div>
    </main>
  );
}
