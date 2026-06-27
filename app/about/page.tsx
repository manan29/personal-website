import Link from 'next/link'
import { experience, notableWins, tools } from '@/lib/experienceData'
import { calculateCompanyDuration } from '@/lib/calculateDuration'
import DownloadResumeButton from '@/components/DownloadResumeButtonWrapper'

export default function About() {
  const sectionHeading: React.CSSProperties = {
    fontFamily: 'var(--font-jetbrains)',
    fontSize: '12px',
    letterSpacing: '0.16em',
    textTransform: 'uppercase' as const,
    color: '#94a3b8',
    marginBottom: 8,
    marginTop: 64,
    paddingBottom: 10,
    borderBottom: '1px solid #e8edf3',
  }
  const pStyle: React.CSSProperties = {
    fontSize: '19px',
    lineHeight: 1.7,
    color: '#334155',
    marginBottom: '22px',
    fontFamily: 'var(--font-hanken)',
  }
  return (
    <main style={{ maxWidth: 880, margin: '0 auto', padding: '88px 40px 96px' }} className="page-container">

      <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', letterSpacing: '0.16em', color: '#2563eb', marginBottom: '24px' }}>
        // ABOUT
      </div>
      <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '42px', lineHeight: 1.12, letterSpacing: '-0.02em', margin: '0 0 36px', color: '#0f172a', maxWidth: '18ch' }}>
        At the intersection of technology and selling.
      </h1>

      {/* INTRO */}
      <div style={{ marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid #e8edf3' }}>
        <p style={pStyle}>Here&apos;s something more about me 🙂</p>
        <p style={pStyle}>I started my Sales career accidentally in 2016. I got placed on the first day of MBA college in an Ops role at{' '}
          <a href="https://www.wipro.com" target="_blank" rel="noopener" style={{color:'#2563eb',textDecoration:'underline'}}>Wipro</a>, miserable for a year, before I wrote a cold email to{' '}
          <a href="https://www.linkedin.com/in/aparna-krishnamurthy-3182516/" target="_blank" rel="noopener" style={{color:'#2563eb',textDecoration:'underline'}}>Aparna Krishnamurthy</a>, Head of Demand Generation, who was building a small Outbound team in Bangalore for proactive demand generation.</p>
        <p style={pStyle}>But there was a problem: employees were not allowed to move before completing 2 years in a role, and I was only 10 months in. I convinced the VP of Ops at a meeting that was hard to get. I explained my case and he made an exception in the end. First CXO buy-in 🙂</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>Moved to Bangalore at the end of 2016 and have been here since.</p>
      </div>

      {/* STARTUPS */}
      <h2 style={sectionHeading}>Exposure to Startups, High Velocity Execution, and High Talent Density</h2>
      <div style={{ marginBottom: 40 }}>
        <p style={pStyle}>An important pivot came when I joined{' '}
          <a href="https://www.o9solutions.com" target="_blank" rel="noopener" style={{color:'#2563eb',textDecoration:'underline'}}>o9 Solutions</a>, selling Enterprise Planning Solutions to global enterprises such as Nike, Asian Paints, T-Mobile, Philips, Pirelli, and many more. The most intense BD role I had taken on - working with Dutch and Southeast Asian talent was my first cross-cultural experience.</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>After 18 months as an individual contributor - building lists manually, cold calling, and running campaigns with partners - I was asked to lead the BD team focused on Enterprise across APAC. I gained exposure working with{' '}
          <a href="https://www.bcg.com" target="_blank" rel="noopener" style={{color:'#2563eb',textDecoration:'underline'}}>BCG India</a> and{' '}
          <a href="https://www2.deloitte.com/au" target="_blank" rel="noopener" style={{color:'#2563eb',textDecoration:'underline'}}>Deloitte Australia</a>.</p>
      </div>

      {/* INDIAN SAAS STORY */}
      <h2 style={sectionHeading}>Becoming Part of the Indian SaaS Story</h2>
      <div style={{ marginBottom: 40 }}>
        <p style={pStyle}>I moved to{' '}
          <a href="https://www.hevodata.com" target="_blank" rel="noopener" style={{color:'#2563eb',textDecoration:'underline'}}>Hevo Data</a> to build something closer to home, joining the 0 to 1 story at a company taking on{' '}
          <a href="https://www.fivetran.com" target="_blank" rel="noopener" style={{color:'#2563eb',textDecoration:'underline'}}>Fivetran</a>. At one point I was doing 8 interviews a day, building sales ops, and spending the rest of the time in front of customers.</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>Working closely with{' '}
          <a href="https://www.linkedin.com/in/manishjethani/" target="_blank" rel="noopener" style={{color:'#2563eb',textDecoration:'underline'}}>Manish Jethani</a>, CEO of Hevo, I picked up a structured way of thinking about Hiring, Onboarding, and Sales Ops. I scaled SMB with 4 AEs, built the AM team with 6 AMs, and got into strategic selling through Mid Market and Enterprise - closing 4 to 5 deals at $50K+ sharpened my ability to think about complex deals and sales cycles.</p>
      </div>

      {/* SIGNEASY */}
      <h2 style={sectionHeading}>Signeasy</h2>
      <div style={{ marginBottom: 40 }}>
        <p style={pStyle}><a href="https://www.signeasy.com" target="_blank" rel="noopener" style={{color:'#2563eb',textDecoration:'underline'}}>Signeasy</a> has been different - no playbook, no big team, just a 4-member Sales team and an AM function I was heading in the interim. With us building an Enterprise product, I built and hired a team that closed multiple mid-market deals, the largest being a Banking customer at $60K ARR in the first year.</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>As of April 2026, I was promoted to Head of Sales and Account Management.</p>
      </div>

      {/* WHAT DRIVES ME */}
      <h2 style={sectionHeading}>What Drives Me</h2>
      <div style={{ marginBottom: 40 }}>
        <p style={pStyle}>Being part of a smart, driven team is what pushes me to go beyond the status quo and take on the challenging aspects of GTM.</p>
        <p style={pStyle}>I am more of a player-coach. Trained on Sandler and MEDDPICC, my real edge is coaching reps on complex situations and going deep across business and technical use-cases to get deals done.</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>Through my failures, I have learned that the right hiring solves most problems a sales org faces. Spotting the right talent and building an initial team is the most important piece of the puzzle.</p>
      </div>

      {/* NOW */}
      <SectionLabel>What I&apos;m doing now</SectionLabel>
      <div className="grid-2col" style={{ gap: 1, background: '#e8edf3', border: '1px solid #e8edf3', borderRadius: 8, overflow: 'hidden', marginBottom: 40 }}>
        {[
          ['Role', 'Head of Sales & Success', 'Signeasy - AI contract management'],
          ['Focus', '0 to 1 sales org', 'Pipeline, hiring, GTM systems'],
          ['Markets', 'India, Europe, UK, Middle East, and US', ''],
          ['Also', 'Writing here', 'Deals, hiring, sales systems'],
        ].map(([label, val, sub]) => (
          <div key={label} style={{ background: '#f8fafc', padding: '18px 16px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 5 }}>{label}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 3 }}>{val}</div>
            <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.5 }}>{sub}</div>
          </div>
        ))}
      </div>

      {/* EXPERIENCE */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 64,
        paddingBottom: 10,
        borderBottom: '1px solid #e8edf3',
      }}>
        <h2
          id="experience"
          style={{
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '12px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase' as const,
            color: '#94a3b8',
            margin: 0,
            padding: 0,
            border: 'none',
            scrollMarginTop: '80px',
          }}
        >
          Experience
        </h2>
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
                    <> · <a href={role.manager.linkedIn} target="_blank" rel="noopener" style={{ color: '#2563eb', textDecoration: 'underline' }}>{role.manager.name}</a> ({role.manager.title})</>
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
      <SectionLabel>Track Record</SectionLabel>
      <div className="grid-2col" style={{ gap: 10, marginBottom: 40 }}>
        {notableWins.map(({ number, label, sub }) => (
          <div key={label} style={{ background: '#f8fafc', border: '1px solid #e8edf3', borderRadius: 8, padding: 18 }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: '#2563eb', letterSpacing: '-0.02em', marginBottom: 5 }}>{number}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', marginBottom: 5, lineHeight: 1.3 }}>{label}</div>
            <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.6 }}>{sub}</div>
          </div>
        ))}
      </div>

      <Divider />

      {/* TOOLS */}
      <SectionLabel>Tools</SectionLabel>
      <div className="grid-2col" style={{ gap: 10, marginBottom: 40 }}>
        {tools.map(({ category, items }) => (
          <div key={category} style={{ background: '#f8fafc', border: '1px solid #e8edf3', borderRadius: 6, padding: '14px 16px' }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563eb', marginBottom: 10 }}>{category}</div>
            {items.map((item, i, arr) => (
              <div key={item} style={{ fontSize: 13, color: '#0f172a', fontWeight: 500, padding: '4px 0', borderBottom: i < arr.length - 1 ? '1px solid #f1f5f9' : 'none' }}>{item}</div>
            ))}
          </div>
        ))}
      </div>

      {/* OFF THE FIELD */}
      <div style={{ marginTop: 48, padding: 24, background: '#f8fafc', borderRadius: 12, border: '1px solid #e8edf3', fontSize: 16, color: '#475569', fontFamily: 'var(--font-hanken)' }}>
        <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: 11, letterSpacing: '0.1em', color: '#94a3b8', display: 'block', marginBottom: 8 }}>OFF THE FIELD</span>
        I follow F1 and Test Cricket — the long games where strategy compounds.
      </div>

    </main>
  )
}

// ── Shared components ─────────────────────────────────────
function SectionLabel({ children, id }: { children: React.ReactNode, accent?: boolean, id?: string, scrollMarginTop?: string }) {
  return (
    <h2
      id={id}
      style={{
        fontFamily: 'var(--font-jetbrains)',
        fontSize: '12px',
        letterSpacing: '0.16em',
        textTransform: 'uppercase' as const,
        color: '#94a3b8',
        marginBottom: 8,
        marginTop: 64,
        paddingBottom: 10,
        borderBottom: '1px solid #e8edf3',
      }}
    >
      {children}
    </h2>
  )
}

function Divider() {
  return <hr style={{ border: 'none', borderTop: '1px solid #e8edf3', margin: '40px 0' }} />
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
      <p style={{ fontSize: 13, fontWeight: 600, color: '#0f172a', marginBottom: 8 }}>Results</p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #bfdbfe', background: '#eff4ff' }}>
              {['Quarter', 'New Logos', 'Attainment', 'Note'].map(h => (
                <th key={h} style={{ padding: '8px 12px', textAlign: 'left', color: '#2563eb', fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {resultsRows.map((r) => (
              <tr key={r.quarter} style={{ borderBottom: '1px solid #e8edf3', background: r.alt ? '#f8fafc' : '#FFFFFF' }}>
                <td style={{ padding: '8px 12px', color: '#0f172a', fontWeight: 500 }}>{r.quarter}</td>
                <td style={{ padding: '8px 12px', color: '#64748b' }}>{r.logos}</td>
                <td style={{ padding: '8px 12px', color: '#64748b' }}>{r.attainment}</td>
                <td style={{ padding: '8px 12px', color: '#94a3b8', fontSize: 12 }}>{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: 13, color: '#334155', marginTop: 12, lineHeight: 1.6 }}>
        Closed the highest-ever deal at Signeasy at $100K. Closed a Banking API customer at $50K, growing to $120K annually over the next 3 years.
      </p>
      <p style={{ fontSize: 13, color: '#334155', marginTop: 8, lineHeight: 1.6, fontStyle: 'italic' }}>
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
      : color === 'amber' ? { background: '#eff4ff', color: '#2563eb', border: '1px solid #bfdbfe' }
      : { background: '#F3F4F6', color: '#4B5563', border: '1px solid #E5E7EB' })
  })

  return (
    <div
      className="experience-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gap: '32px',
        padding: '28px 0',
        borderTop: '1px solid #e8edf3',
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
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 20, fontWeight: 600, color: '#0f172a' }}>{name}</span>
          {allTags.map(t => <span key={t.label} style={tagStyle(t.color)}>{t.label}</span>)}
        </div>
        <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '11px', color: '#2563eb', marginTop: 6 }}>
          {dates}
          {companyDuration && (
            <span style={{ display: 'inline-block', marginLeft: 8, fontSize: '10px', fontWeight: 600, color: '#2563eb', background: '#eff4ff', padding: '2px 8px', borderRadius: '4px' }}>
              {companyDuration}
            </span>
          )}
        </div>
        {tagline && <div style={{ fontSize: 12, color: '#64748b', fontStyle: 'italic', marginTop: 8, lineHeight: 1.5 }}>{tagline}</div>}
      </div>

      {/* Right: roles */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {roles.map(r => (
          <div key={r.title}>
            <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 16, fontWeight: 500, color: '#334155', marginBottom: 4 }}>{r.title}</div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: 11, color: '#94a3b8', marginBottom: 8 }}>{r.period}</div>
            {r.bullets ? (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {r.bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: 15, color: '#64748b', lineHeight: 1.6, display: 'flex', gap: 8, marginBottom: 6 }}>
                    <span style={{ color: '#2563eb', flexShrink: 0, marginTop: 1 }}>–</span>
                    {b}
                  </li>
                ))}
              </ul>
            ) : (
              <div style={{ fontSize: 15, color: '#64748b', lineHeight: 1.6 }}>{r.stat}</div>
            )}
            {r.extra}
          </div>
        ))}
      </div>
    </div>
  )
}
