import { experience, notableWins, tools } from '@/lib/experienceData'
import { calculateCompanyDuration } from '@/lib/calculateDuration'
import DownloadResumeButton from '@/components/DownloadResumeButtonWrapper'
import { Container } from '@/components/Container'
import { SectionLabel } from '@/components/SectionLabel'
import { Card } from '@/components/Card'

export default function Experience() {
  return (
    <Container width="narrow" style={{ padding: '88px 40px 96px' }} className="page-container">
      <main>

      <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', letterSpacing: '0.16em', color: 'var(--accent)', marginBottom: '24px' }}>
        // EXPERIENCE
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 20,
        flexWrap: 'wrap',
        marginBottom: 40,
        paddingBottom: 40,
        borderBottom: '1px solid var(--border)',
      }}>
        <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '42px', lineHeight: 1.12, letterSpacing: '-0.02em', margin: 0, color: 'var(--ink)', maxWidth: '18ch' }}>
          Career history, results, and the tools I use.
        </h1>
        <DownloadResumeButton />
      </div>

      <div style={{ marginBottom: 40, display: 'flex', flexDirection: 'column', gap: 0 }}>
        {experience.map((company) => (
          <CompanyBlock
            key={company.name}
            name={company.name}
            dates={company.dates}
            companyDuration={calculateCompanyDuration(company.roles)}
            tag={company.tag}
            tagline={company.tagline}
            logoSrc={company.logoSrc}
            logoAlt={company.logoAlt}
            roles={company.roles.map((role) => ({
              title: role.title,
              period: (
                <>
                  {role.periodLabel}
                  {role.manager && (
                    <> · <a href={role.manager.linkedIn} target="_blank" rel="noopener" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>{role.manager.name}</a> ({role.manager.title})</>
                  )}
                </>
              ),
              accent: role.accent,
              bullets: (company.name === 'Signeasy' && role.title === 'Head - Sales and Customer Success')
                ? role.bullets.slice(0, 2)
                : role.bullets,
              extra: (company.name === 'Signeasy' && role.title === 'Head - Sales and Customer Success') ? <ResultsTable /> : undefined,
            }))}
          />
        ))}
      </div>

      {/* TRACK RECORD */}
      <SectionLabel style={{ marginTop: 0 }}>Track Record</SectionLabel>
      <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 40 }}>
        {notableWins.map(({ number, label, sub }) => (
          <Card key={label}>
            <div style={{ fontSize: 26, fontWeight: 700, color: 'var(--accent)', letterSpacing: '-0.02em', marginBottom: 5 }}>{number}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 5, lineHeight: 1.3 }}>{label}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{sub}</div>
          </Card>
        ))}
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '40px 0' }} />

      {/* TOOLS */}
      <SectionLabel>Tools</SectionLabel>
      <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 40 }}>
        {tools.map(({ category, items }) => (
          <Card key={category} style={{ borderRadius: 6, padding: '14px 16px' }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}>{category}</div>
            {items.map((item, i, arr) => (
              <div key={item} style={{ fontSize: 13, color: 'var(--ink)', fontWeight: 500, padding: '4px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>{item}</div>
            ))}
          </Card>
        ))}
      </div>

      </main>
    </Container>
  )
}

const resultsRows = [
  { quarter: 'Q2 2025', logos: '15', attainment: '60%', note: 'Ramp-up quarter, only 1 AE', alt: false },
  { quarter: 'Q3 2025', logos: '30', attainment: '73%', note: '-', alt: true },
  { quarter: 'Q4 2025', logos: '40', attainment: '90%', note: '-', alt: false },
  { quarter: 'Q1 2026', logos: '64', attainment: '75%', note: '-', alt: true },
  { quarter: 'Q2 2026', logos: '40', attainment: '150%', note: '2 Ent AE, 1 SMB AE, 1 BDR', alt: false },
]

function ResultsTable() {
  return (
    <div style={{ marginTop: 16 }}>
      <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>Results</p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--accent-tint)', background: 'var(--bg-panel)' }}>
              {['Quarter', 'New Logos', 'Attainment', 'Note'].map(h => (
                <th key={h} style={{ padding: '8px 12px', textAlign: 'left', color: 'var(--accent)', fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {resultsRows.map((r) => (
              <tr key={r.quarter} style={{ borderBottom: '1px solid var(--border)', background: r.alt ? 'var(--bg-panel)' : 'var(--bg)' }}>
                <td style={{ padding: '8px 12px', color: 'var(--ink)', fontWeight: 500 }}>{r.quarter}</td>
                <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>{r.logos}</td>
                <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>{r.attainment}</td>
                <td style={{ padding: '8px 12px', color: 'var(--muted)', fontSize: 12 }}>{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: 13, color: 'var(--body)', marginTop: 12, lineHeight: 1.6 }}>
        Closed the highest-ever deal at Signeasy at $100K. Closed a Banking API customer at $50K, growing to $120K annually over the next 3 years.
      </p>
      <p style={{ fontSize: 13, color: 'var(--body)', marginTop: 8, lineHeight: 1.6, fontStyle: 'italic' }}>
        5 consecutive quarters of growth - scaling from 1 AE to a 4-person team while improving attainment from 60% to 150%.
      </p>
    </div>
  )
}

function CompanyBlock({ name, dates, companyDuration, tag, tagline, logoSrc, logoAlt, roles }: {
  name: string, dates: string,
  companyDuration?: string,
  tag?: { label: string, color: string },
  tagline?: string,
  logoSrc?: string,
  logoAlt?: string,
  roles: { title: string, period: React.ReactNode, stat?: string, bullets?: string[], accent?: boolean, extra?: React.ReactNode }[]
}) {
  const allTags = tag ? [tag] : []
  const tagStyle = (color: string) => ({
    fontSize: 9, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' as const,
    borderRadius: 3, padding: '2px 7px',
    ...(color === 'green' ? { background: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0' }
      : { background: 'var(--accent-tint)', color: 'var(--accent)', border: '1px solid var(--border)' })
  })

  return (
    <div
      className="experience-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gap: '32px',
        padding: '28px 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Left: company info */}
      <div>
        {logoSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoSrc}
            alt={logoAlt || name}
            style={{ width: 28, height: 28, objectFit: 'contain', borderRadius: 4, display: 'block', marginBottom: 8 }}
          />
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 20, fontWeight: 600, color: 'var(--ink)' }}>{name}</span>
          {allTags.map(t => <span key={t.label} style={tagStyle(t.color)}>{t.label}</span>)}
        </div>
        <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: 'var(--accent)', marginTop: 6 }}>
          {dates}
          {companyDuration && (
            <span style={{ display: 'inline-block', marginLeft: 8, fontSize: '10px', fontWeight: 600, color: 'var(--accent)', background: 'var(--accent-tint)', padding: '2px 8px', borderRadius: '4px' }}>
              {companyDuration}
            </span>
          )}
        </div>
        {tagline && <div style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', marginTop: 8, lineHeight: 1.5 }}>{tagline}</div>}
      </div>

      {/* Right: roles */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {roles.map(r => (
          <div key={r.title}>
            <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 16, fontWeight: 500, color: 'var(--body)', marginBottom: 4 }}>{r.title}</div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: 11, color: 'var(--muted)', marginBottom: 8 }}>{r.period}</div>
            {r.bullets ? (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {r.bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.6, display: 'flex', gap: 8, marginBottom: 6 }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1 }}>–</span>
                    {b}
                  </li>
                ))}
              </ul>
            ) : (
              <div style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.6 }}>{r.stat}</div>
            )}
            {r.extra}
          </div>
        ))}
      </div>
    </div>
  )
}
