'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function About() {
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <main style={{ maxWidth: 680, margin: '0 auto', padding: '52px 24px 100px' }}>

      <h1 style={{ fontSize: 28, fontWeight: 700, color: '#1A1A1A', letterSpacing: '-0.02em', marginBottom: 24 }}>
        Hey, I'm Manan.
      </h1>

      {/* INTRO */}
      <p style={{ fontSize: 15.5, color: '#2D2D2D', lineHeight: 1.9, marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid #E2E0D8' }}>
        Sales leader with 9+ years building revenue functions across SaaS. I grew up in Delhi, hated losing, and never stopped.
        I don't just run sales - I build the systems, hire the teams, and stay on the field with them.
      </p>

      {/* CONTACT */}
      <SectionLabel>Contact</SectionLabel>
      <div style={{ marginBottom: 40 }}>
        {[
          ['Email', 'manan.sachdeva89@gmail.com', 'mailto:manan.sachdeva89@gmail.com'],
          ['LinkedIn', 'linkedin.com/in/manansachdeva ↗', 'https://www.linkedin.com/in/manansachdeva/'],
          ['Based in', 'Bengaluru, India', null],
        ].map(([label, value, href]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: '1px solid #E2E0D8' }}>
            <span style={{ fontSize: 11.5, color: '#AAAAAA', minWidth: 80 }}>{label}</span>
            {href
              ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} style={{ fontSize: 14, color: '#C2550A', fontWeight: 500, textDecoration: 'none' }}>{value}</a>
              : <span style={{ fontSize: 14, color: '#1A1A1A', fontWeight: 500 }}>{value}</span>
            }
          </div>
        ))}
      </div>

      {/* NOW */}
      <SectionLabel>What I'm doing now</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#E2E0D8', border: '1px solid #E2E0D8', borderRadius: 8, overflow: 'hidden', marginBottom: 40 }}>
        {[
          ['Role', 'Head of Sales & Success', 'Signeasy - AI contract management'],
          ['Focus', '0 to 1 sales org', 'Pipeline, hiring, GTM systems'],
          ['Markets', 'US - India - Middle East', 'Also South Africa'],
          ['Also', 'Writing here', 'Deals, hiring, sales systems'],
        ].map(([label, val, sub]) => (
          <div key={label} style={{ background: '#F5F4EF', padding: '18px 16px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#AAAAAA', marginBottom: 5 }}>{label}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#1A1A1A', marginBottom: 3 }}>{val}</div>
            <div style={{ fontSize: 12, color: '#6B6B6B', lineHeight: 1.5 }}>{sub}</div>
          </div>
        ))}
      </div>

      <Divider />

      {/* BY THE NUMBERS */}
      <SectionLabel>By the numbers</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: '#E2E0D8', border: '1px solid #E2E0D8', borderRadius: 8, overflow: 'hidden', marginBottom: 40 }}>
        {[
          ['9+', 'Years in SaaS Sales'],
          ['$100K+', 'Closed multiple $100K+ deals in global markets at Hevo'],
          ['60+', 'Logos scaled in 2 quarters at Signeasy'],
          ['10 to 25', 'Team scaled at Hevo through in-house hiring'],
        ].map(([num, label]) => (
          <div key={label} style={{ background: '#F5F4EF', padding: '18px 14px' }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#C2550A', letterSpacing: '-0.02em', marginBottom: 5 }}>{num}</div>
            <div style={{ fontSize: 11, color: '#6B6B6B', lineHeight: 1.4 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* EXPERIENCE */}
      <SectionLabel>Experience</SectionLabel>
      <div style={{ marginBottom: 40, display: 'flex', flexDirection: 'column', gap: 10 }}>

        <CompanyBlock
          name="Signeasy" dates="2023 - Present"
          tag={{ label: 'Current', color: 'green' }}
          tagline="AI-powered contract management platform"
          roles={[
            { title: 'Head of Sales and Success', period: '2023 - Present', stat: 'Building sales org from scratch - 5-person team of AEs and BDRs focused on outbound. Scaling the Success team as the next chapter.', accent: true },
          ]}
        />

        <CompanyBlock
          name="Hevo Data" dates="May 2021 - 2023"
          tags={[{ label: '3 Roles', color: 'amber' }, { label: '1 Promotion', color: 'gray' }]}
          tagline="Cloud ETL / Data Integration - $1M-$10M ARR journey"
          roles={[
            { title: 'Mid-Market Sales - EMEA & APAC', period: 'Aug 2023 - Present - CRO', stat: '$750K ARR in 3 quarters (30 logos). Target USD 1.2mn. Closed largest-ever Israel deal (~$100K) and biggest AWS Marketplace deal ($40K ARR, 2-yr).', accent: true },
            { title: 'SMB Sales Lead - Europe', period: 'May 2021 - Jul 2022 - CEO', stat: 'Scaled from 8 to 18 avg logos per month, delivering $92K ARR. Started learning the ropes of hiring and doubled the team from 10 to 20, working with other sales managers as a core part of the hiring process.' },
            { title: 'Account Management and Expansion', period: 'Jul 2022 - Aug 2023 - CEO', stat: 'Took on the next big problem - account management and expansion. Scaled the fastest-growing quick commerce company in India from $10K to $150K ARR. Learned that building relationships, solving problems alongside solution engineers, and closing expansion deals gave me the real kick.' },
          ]}
        />

        <CompanyBlock
          name="o9 Solutions" dates="Sep 2018 - May 2021"
          tag={{ label: '1 Promotion', color: 'gray' }}
          tagline="KKR-backed SaaS unicorn - Supply Chain Planning"
          roles={[
            { title: 'Team Lead, Business Development', period: '2020 - 2021 - Global EVP', stat: 'SQLs 20 to 80+ per quarter. Built $2mn+ enterprise pipeline per quarter. Partner ecosystems: GCP, TCS, McKinsey, Deloitte, BCG.', accent: true },
            { title: 'Business Development Representative', period: '2018 - 2020', stat: 'Built outbound pipeline for enterprise supply chain SaaS. Promoted to Team Lead within 2 years.' },
          ]}
        />

        <CompanyBlock
          name="Wipro" dates="Jun 2015 - Sep 2018"
          tagline="Senior Executive, Demand Generation"
          roles={[
            { title: 'Demand Generation', period: 'Retail & Consumer vertical', stat: 'First demand gen hire. Generated $20mn enterprise pipeline via campaigns, B2B summits, and partner activity.' },
          ]}
        />
      </div>

      {/* NOTABLE WINS */}
      <SectionLabel>Notable wins</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 40 }}>
        {[
          ['60+', 'Logos scaled at Signeasy', 'Grew customer base from scratch to 60+ logos in 2 quarters through outbound and inbound motions.'],
          ['$10K to $150K', 'Account expansion at Hevo', "Scaled India's fastest-growing quick commerce company from $10K to $150K ARR working alongside solution engineers."],
          ['$100K+', 'Multiple $100K+ deals', 'Closed multiple six-figure deals across US, Israel, and Middle East markets at Hevo.'],
          ['10 to 25', 'Team scaled at Hevo', 'Doubled the sales team from 10 to 20 through in-house hiring, working alongside other sales managers in the hiring process.'],
        ].map(([num, title, desc]) => (
          <div key={title} style={{ background: '#fff', border: '1px solid #E2E0D8', borderRadius: 8, padding: 18 }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: '#C2550A', letterSpacing: '-0.02em', marginBottom: 5 }}>{num}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1A1A', marginBottom: 5, lineHeight: 1.3 }}>{title}</div>
            <div style={{ fontSize: 12, color: '#6B6B6B', lineHeight: 1.6 }}>{desc}</div>
          </div>
        ))}
      </div>

      <Divider />

      {/* TOOLS */}
      <SectionLabel>Tools</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 40 }}>
        {[
          ['CRM & Pipeline', ['HubSpot', 'Salesforce']],
          ['Prospecting', ['Clay', 'Apollo', 'LinkedIn Sales Nav']],
          ['Analytics', ['Mixpanel', 'HubSpot Reports']],
          ['AI Tools', ['Claude', 'Notion']],
        ].map(([label, items]) => (
          <div key={String(label)} style={{ background: '#fff', border: '1px solid #E2E0D8', borderRadius: 6, padding: '14px 16px' }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C2550A', marginBottom: 10 }}>{label}</div>
            {(items as string[]).map((item, i, arr) => (
              <div key={item} style={{ fontSize: 13, color: '#1A1A1A', fontWeight: 500, padding: '4px 0', borderBottom: i < arr.length - 1 ? '1px solid #F3F4F6' : 'none' }}>{item}</div>
            ))}
          </div>
        ))}
      </div>

      {/* METHODOLOGIES */}
      <SectionLabel>Sales methodologies</SectionLabel>
      <div style={{ marginBottom: 40 }}>
        {[
          ['Sandler', 'Qualification first. I run every deal through pain, power, fit, and timeline before investing real time.'],
          ['MEDDIC', 'Essential for enterprise - metrics, economic buyer, decision criteria, process, pain, champion.'],
        ].map(([name, desc], i, arr) => (
          <div key={name} style={{ display: 'flex', gap: 14, padding: '13px 0', borderBottom: i < arr.length - 1 ? '1px solid #E2E0D8' : 'none' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1A1A', minWidth: 110, flexShrink: 0 }}>{name}</div>
            <div style={{ fontSize: 13, color: '#4A4744', lineHeight: 1.6 }}>{desc}</div>
          </div>
        ))}
      </div>

      <Divider />

      {/* MISTAKES */}
      <SectionLabel>Mistakes I've made</SectionLabel>
      <div style={{ marginBottom: 40 }}>
        {[
          ['Hiring before the playbook was ready', 'Hired fast at Hevo before the process was solid. Reps had different definitions of qualified, different approaches, different discovery questions. Never again - process before headcount.'],
          ['Proposing before understanding the blocker', 'Sent a proposal in 24hrs because a CFO called our CEO. Felt like momentum. Was laziness. Total silence after. Should have done one more discovery call first.'],
        ].map(([title, body], i, arr) => (
          <div key={title} style={{ padding: '16px 0', borderBottom: i < arr.length - 1 ? '1px solid #E2E0D8' : 'none' }}>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: '#1A1A1A', marginBottom: 5, display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C2550A', flexShrink: 0, display: 'inline-block' }} />
              {title}
            </div>
            <div style={{ fontSize: 13, color: '#4A4744', lineHeight: 1.75, paddingLeft: 14 }}>{body}</div>
          </div>
        ))}
      </div>

      {/* RESUME */}
      <SectionLabel>Resume</SectionLabel>
      <button
        onClick={() => setResumeOpen(!resumeOpen)}
        style={{ width: '100%', background: 'none', border: '1px solid #E2E0D8', borderRadius: 6, padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontFamily: 'inherit', transition: 'border-color 0.15s' }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = '#C2550A')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = '#E2E0D8')}
      >
        <span style={{ fontSize: 14, fontWeight: 600, color: '#1A1A1A' }}>View full resume</span>
        <span style={{ fontSize: 12, color: '#AAAAAA' }}>{resumeOpen ? 'Collapse ↑' : 'Expand ↓'}</span>
      </button>

      {resumeOpen && (
        <div style={{ marginTop: 16, padding: 22, background: '#fff', border: '1px solid #E2E0D8', borderRadius: 8 }}>
          {[
            { sec: 'Current', role: 'Head of Sales and Success - Signeasy', co: '2023-Present - Bengaluru', points: ['Building sales org from scratch - 5-person team of AEs and BDRs focused on outbound', 'Scaling the Success team as the next chapter'] },
            { sec: 'Hevo Data - May 2021 - 2023 - 1 Promotion', role: 'Mid-Market Sales, EMEA & APAC', co: 'Aug 2023-Present - CRO', points: ['$750K ARR in 3 quarters (30 logos). USD 1.2mn target', 'Largest Israel deal ~$100K. Largest AWS Marketplace deal $40K ARR'] },
            { role: 'SMB Sales Lead - Europe', co: 'May 2021-Jul 2022 - CEO', points: ['Scaled from 8 to 18 avg logos per month, delivering $92K ARR', 'Doubled the team from 10 to 20, working with other sales managers in the hiring process'] },
            { role: 'Account Management and Expansion', co: 'Jul 2022-Aug 2023 - CEO', points: ['Scaled the fastest-growing quick commerce company in India from $10K to $150K ARR', 'Built relationships, solved problems alongside solution engineers, closed expansion deals'] },
            { sec: 'o9 Solutions - Sep 2018 - May 2021 - 1 Promotion', role: 'Team Lead, Business Development', co: 'Reporting to Global EVP', points: ['SQLs 20 to 80+ per quarter. $2mn+ pipeline per quarter', 'Partner ecosystems: GCP, TCS, McKinsey, Deloitte, BCG'] },
            { sec: 'Wipro - Jun 2015 - Sep 2018', role: 'Senior Executive, Demand Generation', co: 'Retail & Consumer vertical', points: ['First demand gen hire. Generated $20mn enterprise pipeline'] },
            { sec: 'Education', points: ['MBA, Marketing - School of Inspired Leadership (SOIL), 2014-2015', 'B.Tech, Mechanical - Chitkara University, 2007-2011'] },
          ].map((item, i) => (
            <div key={i}>
              {item.sec && <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#AAAAAA', margin: i === 0 ? '0 0 8px' : '18px 0 8px' }}>{item.sec}</div>}
              {item.role && <div style={{ fontSize: 13.5, fontWeight: 700, color: '#1A1A1A' }}>{item.role}</div>}
              {item.co && <div style={{ fontSize: 12.5, color: '#C2550A', fontWeight: 600, marginBottom: 6 }}>{item.co}</div>}
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: 10 }}>
                {item.points.map(p => (
                  <li key={p} style={{ fontSize: 12.5, color: '#4A4744', lineHeight: 1.7, paddingLeft: 14, position: 'relative', marginBottom: 2 }}>
                    <span style={{ position: 'absolute', left: 4, color: '#C2550A', fontWeight: 700 }}>·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

    </main>
  )
}

// ── Shared components ─────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 22, fontWeight: 700, color: '#4A4744', letterSpacing: '-0.01em', marginBottom: 20, marginTop: 48, paddingBottom: 10, borderBottom: '2px solid #E2E0D8' }}>{children}</h2>
}

function Divider() {
  return <hr style={{ border: 'none', borderTop: '1px solid #E2E0D8', margin: '40px 0' }} />
}

function CompanyBlock({ name, dates, tag, tags, tagline, roles }: {
  name: string, dates: string,
  tag?: { label: string, color: string },
  tags?: { label: string, color: string }[],
  tagline?: string,
  roles: { title: string, period: string, stat: string, accent?: boolean }[]
}) {
  const allTags = tags || (tag ? [tag] : [])
  const tagStyle = (color: string) => ({
    fontSize: 9, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' as const,
    borderRadius: 3, padding: '2px 7px',
    ...(color === 'green' ? { background: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0' }
      : color === 'amber' ? { background: '#FEF3E7', color: '#C2550A', border: '1px solid #F5DDD0' }
      : { background: '#F3F4F6', color: '#4B5563', border: '1px solid #E5E7EB' })
  })

  return (
    <div style={{ border: '1px solid #E2E0D8', borderRadius: 8, overflow: 'hidden', background: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', background: '#F5F4EF', borderBottom: '1px solid #E2E0D8' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: '#1A1A1A' }}>{name}</span>
          {allTags.map(t => <span key={t.label} style={tagStyle(t.color)}>{t.label}</span>)}
        </div>
        <span style={{ fontSize: 11.5, color: '#AAAAAA', flexShrink: 0 }}>{dates}</span>
      </div>
      <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {tagline && <div style={{ fontSize: 12.5, color: '#6B6B6B', fontStyle: 'italic', marginBottom: 4 }}>{tagline}</div>}
        {roles.map(r => (
          <div key={r.title} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: r.accent ? '#C2550A' : '#C4BFBA', flexShrink: 0, marginTop: 5 }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1A1A', marginBottom: 2 }}>{r.title}</div>
              <div style={{ fontSize: 11, color: '#AAAAAA', marginBottom: 5 }}>{r.period}</div>
              <div style={{ fontSize: 12.5, color: '#4A4744', lineHeight: 1.6 }}>{r.stat}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
