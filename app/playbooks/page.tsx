import Link from 'next/link';
import { getAllPlaybooks } from '@/lib/content';
import { Container } from '@/components/Container';

export default function PlaybooksPage() {
  const playbooks = getAllPlaybooks();

  return (
    <Container width="narrow" style={{ padding: '72px 40px 96px' }}>
      <h1
        style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontSize: '32px',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          color: 'var(--ink)',
          marginBottom: '32px',
        }}
      >
        Playbooks
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {playbooks.map((playbook) => (
          <Link
            key={playbook.slug}
            href={`/playbooks/${playbook.slug}`}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              paddingBottom: '24px',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', alignItems: 'center' }}>
              {/* Tag chip */}
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '10px',
                  fontWeight: 500,
                  padding: '3px 10px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  border: '1px solid var(--border)',
                  color: 'var(--muted)',
                }}
              >
                {playbook.tag}
              </span>

              {/* Date */}
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '12px',
                  color: 'var(--muted)',
                }}
              >
                {playbook.date}
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '19px',
                fontWeight: 600,
                color: 'var(--ink)',
                marginBottom: '6px',
              }}
            >
              {playbook.title}
            </h2>

            {/* Summary */}
            <p
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '15px',
                lineHeight: '1.7',
                color: 'var(--muted)',
                marginBottom: '8px',
              }}
            >
              {playbook.summary}
            </p>

            {/* Arrow */}
            <span style={{ color: 'var(--accent)', fontSize: '14px' }}>→</span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
