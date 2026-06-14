import Link from 'next/link'
import { experience, notableWins, tools } from '@/lib/experienceData'
import { calculateCompanyDuration } from '@/lib/calculateDuration'
import DownloadResumeButton from '@/components/DownloadResumeButtonWrapper'

export default function About() {
  const sectionHeading: React.CSSProperties = {
    fontSize: 22, fontWeight: 700, color: '#4A4744', letterSpacing: '-0.01em',
    marginBottom: 20, marginTop: 48, paddingBottom: 10, borderBottom: '2px solid #E2E0D8',
  }
  const pStyle: React.CSSProperties = {
    fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: 18, color: '#2D2D2D',
    lineHeight: 1.8, marginBottom: 16,
  }
  return (
    <main style={{ maxWidth: 680, margin: '0 auto' }} className="about-page-main">

      <h1 style={{ fontSize: 28, fontWeight: 700, color: '#1A1A1A', letterSpacing: '-0.02em', marginBottom: 24 }}>
        Hey, Manan here.
      </h1>

      {/* INTRO */}
      <div style={{ marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid #E2E0D8' }}>
        <p style={pStyle}>Here&apos;s something more about me 🙂</p>
        <p style={pStyle}>I started my Sales career accidentally in 2016. I got placed on the first day of MBA college in an Ops role at{' '}
          <a href="https://www.wipro.com" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Wipro</a>, miserable for a year, before I wrote a cold email to{' '}
          <a href="https://www.linkedin.com/in/aparna-krishnamurthy-3182516/" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Aparna Krishnamurthy</a>, Head of Demand Generation, who was building a small Outbound team in Bangalore for proactive demand generation.</p>
        <p style={pStyle}>But there was a problem: employees were not allowed to move before completing 2 years in a role, and I was only 10 months in. I convinced the VP of Ops at a meeting that was hard to get. I explained my case and he made an exception in the end. First CXO buy-in 🙂</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>Moved to Bangalore at the end of 2016 and have been here since.</p>
      </div>

      {/* STARTUPS */}
      <h2 style={sectionHeading}>Exposure to Startups, High Velocity Execution, and High Talent Density</h2>
      <div style={{ marginBottom: 40 }}>
        <p style={pStyle}>An important pivot came when I joined{' '}
          <a href="https://www.o9solutions.com" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>o9 Solutions</a>, selling Enterprise Planning Solutions to global enterprises such as Nike, Asian Paints, T-Mobile, Philips, Pirelli, and many more. The most intense BD role I had taken on - working with Dutch and Southeast Asian talent was my first cross-cultural experience.</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>After 18 months as an individual contributor - building lists manually, cold calling, and running campaigns with partners - I was asked to lead the BD team focused on Enterprise across APAC. I gained exposure working with{' '}
          <a href="https://www.bcg.com" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>BCG India</a> and{' '}
          <a href="https://www2.deloitte.com/au" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Deloitte Australia</a>.</p>
      </div>

      {/* INDIAN SAAS STORY */}
      <h2 style={sectionHeading}>Becoming Part of the Indian SaaS Story</h2>
      <div style={{ marginBottom: 40 }}>
        <p style={pStyle}>I moved to{' '}
          <a href="https://www.hevodata.com" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Hevo Data</a> to build something closer to home, joining the 0 to 1 story at a company taking on{' '}
          <a href="https://www.fivetran.com" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Fivetran</a>. At one point I was doing 8 interviews a day, building sales ops, and spending the rest of the time in front of customers.</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>Working closely with{' '}
          <a href="https://www.linkedin.com/in/manishjethani/" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Manish Jethani</a>, CEO of Hevo, I picked up a structured way of thinking about Hiring, Onboarding, and Sales Ops. I scaled SMB with 4 AEs, built the AM team with 6 AMs, and got into strategic selling through Mid Market and Enterprise - closing 4 to 5 deals at $50K+ sharpened my ability to think about complex deals and sales cycles.</p>
      </div>

      {/* SIGNEASY */}
      <h2 style={sectionHeading}>Signeasy</h2>
      <div style={{ marginBottom: 40 }}>
        <p style={pStyle}><a href="https://www.signeasy.com" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Signeasy</a> has been different - no playbook, no big team, just a 4-member Sales team and an AM function I was heading in the interim. With us building an Enterprise product, I built and hired a team that closed multiple mid-market deals, the largest being a Banking customer at $60K ARR in the first year.</p>
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
      <div className="grid-2col" style={{ gap: 1, background: '#E2E0D8', border: '1px solid #E2E0D8', borderRadius: 8, overflow: 'hidden', marginBottom: 40 }}>
        {[
          ['Role', 'Head of Sales & Success', 'Signeasy - AI contract management'],
          ['Focus', '0 to 1 sales org', 'Pipeline, hiring, GTM systems'],
          ['Markets', 'US - India - Middle East', 'Also South Africa'],
          ['Also', 'Writing here', 'Deals, hiring, sales systems'],
        ].map(([label, val, sub]) => (
          <div key={label} style={{ background: '#FFFFFF', padding: '18px 16px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#AAAAAA', marginBottom: 5 }}>{label}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#1A1A1A', marginBottom: 3 }}>{val}</div>
            <div style={{ fontSize: 12, color: '#6B6B6B', lineHeight: 1.5 }}>{sub}</div>
          </div>
        ))}
      </div>

      {/* EXPERIENCE */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 48,
        paddingBottom: 10,
        borderBottom: '2px solid #E2E0D8',
      }}>
        <h2
          id="experience"
          style={{
            fontSize: 22, fontWeight: 700, color: '#4A4744', letterSpacing: '-0.01em',
            margin: 0, padding: 0, border: 'none', scrollMarginTop: '80px',
          }}
        >
          Experience
        </h2>
        <DownloadResumeButton />
      </div>

      <div style={{ marginBottom: 40, display: 'flex', flexDirection: 'column', gap: 10 }}>
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
                    <> · <a href={role.manager.linkedIn} target="_blank" rel="noopener" style={{ color: '#3730A3', textDecoration: 'underline' }}>{role.manager.name}</a> ({role.manager.title})</>
                  )}
                </>
              ),
              accent: role.accent,
              bullets: role.bullets,
              extra: (company.name === 'Signeasy' && role.title === 'Senior Manager - Sales') ? <LogoGrowthChart /> : undefined,
            }))}
          />
        ))}
      </div>

      {/* NOTABLE WINS */}
      <SectionLabel>Notable wins</SectionLabel>
      <div className="grid-2col" style={{ gap: 10, marginBottom: 40 }}>
        {notableWins.map(({ number, label, sub }) => (
          <div key={label} style={{ background: '#fff', border: '1px solid #E2E0D8', borderRadius: 8, padding: 18 }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: '#3730A3', letterSpacing: '-0.02em', marginBottom: 5 }}>{number}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1A1A', marginBottom: 5, lineHeight: 1.3 }}>{label}</div>
            <div style={{ fontSize: 12, color: '#6B6B6B', lineHeight: 1.6 }}>{sub}</div>
          </div>
        ))}
      </div>

      <Divider />

      {/* TOOLS */}
      <SectionLabel>Tools</SectionLabel>
      <div className="grid-2col" style={{ gap: 10, marginBottom: 40 }}>
        {tools.map(({ category, items }) => (
          <div key={category} style={{ background: '#fff', border: '1px solid #E2E0D8', borderRadius: 6, padding: '14px 16px' }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3730A3', marginBottom: 10 }}>{category}</div>
            {items.map((item, i, arr) => (
              <div key={item} style={{ fontSize: 13, color: '#1A1A1A', fontWeight: 500, padding: '4px 0', borderBottom: i < arr.length - 1 ? '1px solid #F3F4F6' : 'none' }}>{item}</div>
            ))}
          </div>
        ))}
      </div>

    </main>
  )
}

// ── Shared components ─────────────────────────────────────
function SectionLabel({ children, accent, id, scrollMarginTop }: { children: React.ReactNode, accent?: boolean, id?: string, scrollMarginTop?: string }) {
  return <h2 id={id} style={{ fontSize: 22, fontWeight: 700, color: accent ? '#3730A3' : '#4A4744', letterSpacing: '-0.01em', marginBottom: 20, marginTop: 48, paddingBottom: 10, borderBottom: `2px solid ${accent ? '#3730A3' : '#E2E0D8'}`, scrollMarginTop }}>{children}</h2>
}

function Divider() {
  return <hr style={{ border: 'none', borderTop: '1px solid #E2E0D8', margin: '40px 0' }} />
}

function LogoGrowthChart() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginTop: '16px',
      padding: '12px 16px',
      background: '#F9F8FF',
      border: '1px solid #E5E3DC',
      borderRadius: '8px',
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '20px', fontWeight: 700, color: '#9CA3AF' }}>15</div>
        <div style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '2px' }}>Q2 2025</div>
      </div>
      <div style={{ flex: 1, height: '2px', background: 'linear-gradient(to right, #C7D2FE, #3730A3)', position: 'relative' }}>
        <span style={{ position: 'absolute', right: '-4px', top: '-4px', width: '10px', height: '10px', borderRadius: '50%', background: '#3730A3', display: 'block' }} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '20px', fontWeight: 700, color: '#3730A3' }}>64</div>
        <div style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '2px' }}>Q1 2026</div>
      </div>
      <div style={{ fontSize: '11px', color: '#6B7280', marginLeft: '8px', lineHeight: 1.4 }}>
        Logo acquisition<br />per quarter
      </div>
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
      : color === 'amber' ? { background: '#EEF2FF', color: '#3730A3', border: '1px solid #C7D2FE' }
      : { background: '#F3F4F6', color: '#4B5563', border: '1px solid #E5E7EB' })
  })

  return (
    <div style={{ border: '1px solid #E2E0D8', borderRadius: 8, overflow: 'hidden', background: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '14px 18px', background: '#FFFFFF', borderBottom: '1px solid #E2E0D8' }}>
        <div>
          {logoSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoSrc}
              alt={logoAlt || name}
              style={{ width: 28, height: 28, objectFit: 'contain', borderRadius: 4, display: 'block', marginBottom: 8 }}
            />
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: '#1A1A1A' }}>{name}</span>
            {allTags.map(t => <span key={t.label} style={tagStyle(t.color)}>{t.label}</span>)}
          </div>
        </div>
        <span style={{ fontSize: 11.5, color: '#AAAAAA', flexShrink: 0, paddingTop: logoSrc ? 36 : 0, display: 'flex', alignItems: 'center', gap: 6 }}>
          {dates}
          {companyDuration && (
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#3730A3', background: '#EEF2FF', padding: '2px 8px', borderRadius: '4px' }}>
              {companyDuration}
            </span>
          )}
        </span>
      </div>
      <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {tagline && <div style={{ fontSize: 12.5, color: '#6B6B6B', fontStyle: 'italic', marginBottom: 4 }}>{tagline}</div>}
        {roles.map(r => (
          <div key={r.title} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: r.accent ? '#3730A3' : '#C4BFBA', flexShrink: 0, marginTop: 5 }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1A1A', marginBottom: 2 }}>{r.title}</div>
              <div style={{ fontSize: 11, color: '#AAAAAA', marginBottom: 5 }}>{r.period}</div>
              {r.bullets ? (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {r.bullets.map((b, i) => (
                    <li key={i} style={{ fontSize: 12.5, color: '#4A4744', lineHeight: 1.6, display: 'flex', gap: 8, marginBottom: 4 }}>
                      <span style={{ color: '#3730A3', flexShrink: 0, marginTop: 1 }}>–</span>
                      {b}
                    </li>
                  ))}
                </ul>
              ) : (
                <div style={{ fontSize: 12.5, color: '#4A4744', lineHeight: 1.6 }}>{r.stat}</div>
              )}
              {r.extra}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
