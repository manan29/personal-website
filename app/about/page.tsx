import Link from 'next/link'

export default function About() {
  return (
    <main style={{ maxWidth: 680, margin: '0 auto', padding: '52px 24px 100px' }}>

      <h1 style={{ fontSize: 28, fontWeight: 700, color: '#1A1A1A', letterSpacing: '-0.02em', marginBottom: 24 }}>
        Hey, Manan here. Here&apos;s a little more about me.
      </h1>

      {/* INTRO */}
      <div style={{ marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid #E2E0D8' }}>
        <p style={{ fontSize: 15.5, color: '#2D2D2D', lineHeight: 1.9, marginBottom: 20 }}>
          I am currently growing the sales team at Signeasy - a lean 5-person crew with a sharp focus on adding $1mn in net revenue from a base of $150K. In total, I have spent around 9+ years in SaaS sales, building revenue functions that perform under pressure.
        </p>
        <p style={{ fontSize: 15.5, color: '#2D2D2D', lineHeight: 1.9, marginBottom: 20 }}>
          I grew up competing at the highest level in sports at school, where losing never sat well with me. Today, I see it differently. You won&apos;t win everything, but you should never lose what was within your control to win.
        </p>
        <p style={{ fontSize: 15.5, color: '#2D2D2D', lineHeight: 1.9, marginBottom: 0 }}>
          That belief drives how I build systems, hire A-players, and stay on the field with the team to get better, every day. I no longer carry a strong emotional weight around losing - instead, I focus on finding opportunities I can win, constantly seeking new talent to work with, and coaching teams to get sharper at sales every day.
        </p>
      </div>

      {/* WHAT DRIVES ME */}
      <SectionLabel>What Drives Me</SectionLabel>
      <div style={{ marginBottom: 40 }}>
        <p style={{ fontSize: 15.5, color: '#2D2D2D', lineHeight: 1.9, marginBottom: 20 }}>
          I came to Bangalore with nothing and no clarity on what I wanted to do. In the beginning, it was mostly about making money. But my manager at Wipro, Aparna, and working directly with the VP of Sales at o9 Solutions gave me something I hadn&apos;t expected - direction. I enjoyed working with them, and it gave me a sense of what high-quality execution and the right mindset actually look like.
        </p>
        <p style={{ fontSize: 15.5, color: '#2D2D2D', lineHeight: 1.9, marginBottom: 0 }}>
          To this day, I believe my hunger to learn, my ability to seek truth in difficult situations, and my commitment to mastering the art of building sales teams - and selling itself - is what drives me more than money ever could.
        </p>
      </div>

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
      <SectionLabel>What I&apos;m doing now</SectionLabel>
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
            {
              title: 'Head of Sales and Success',
              period: '2023 - Present',
              accent: true,
              bullets: [
                'Grew logo acquisition from 15 per quarter to 64 in Q1 2025',
                'Improved Lead to Opportunity conversion from 20% to 45% by defining clear sales processes and sharper deal qualification',
                'Improved Opportunity to Close rate from 25% to 45% through better execution quality and applying Sandler for Mid-Market deals',
                'Independently closed a $70K Banking API customer in the US - the largest landing logo to date',
              ],
            },
          ]}
        />

        <CompanyBlock
          name="Hevo Data" dates="May 2021 - 2023"
          tags={[{ label: '3 Roles', color: 'amber' }, { label: '1 Promotion', color: 'gray' }]}
          tagline="Cloud ETL / Data Integration - $1M-$10M ARR journey"
          roles={[
            {
              title: 'Mid-Market Sales - EMEA & APAC',
              period: 'Aug 2023 - Present - CRO',
              accent: true,
              bullets: [
                'Generated $750K ARR across 30 logos in 3 quarters against a $1.2mn target',
                'Closed the largest-ever Israel deal at approximately $100K ARR',
                'Closed the biggest AWS Marketplace deal at $40K ARR on a 2-year term',
              ],
            },
            {
              title: 'SMB Sales Lead - Europe',
              period: 'May 2021 - Jul 2022 - CEO',
              bullets: [
                'Scaled average logos per month from 8 to 18, delivering $92K ARR',
                'Learned the ropes of hiring and doubled the team from 10 to 20',
                'Worked with other sales managers as a core part of the hiring process',
              ],
            },
            {
              title: 'Account Management and Expansion',
              period: 'Jul 2022 - Aug 2023 - CEO',
              bullets: [
                'Took on account management and expansion as the next big problem',
                'Scaled the fastest-growing quick commerce company in India from $10K to $150K ARR',
                'Learned that building relationships, working alongside solution engineers, and closing expansion deals was where I found my real edge',
              ],
            },
          ]}
        />

        <CompanyBlock
          name="o9 Solutions" dates="Sep 2018 - May 2021"
          tag={{ label: '1 Promotion', color: 'gray' }}
          tagline="KKR-backed SaaS unicorn - Supply Chain Planning"
          roles={[
            {
              title: 'Team Lead, Business Development',
              period: '2020 - 2021 - Global EVP',
              accent: true,
              bullets: [
                'SQLs 20 to 80+ per quarter',
                'Built $2mn+ enterprise pipeline per quarter',
                'Partner ecosystems: GCP, TCS, McKinsey, Deloitte, BCG',
              ],
            },
            {
              title: 'Business Development Manager',
              period: '2018 - 2020',
              bullets: [
                'Built outbound pipeline for enterprise supply chain SaaS',
                'Promoted to Team Lead within 2 years',
              ],
            },
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
      <SectionLabel>Mistakes I&apos;ve made</SectionLabel>
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
  roles: { title: string, period: string, stat?: string, bullets?: string[], accent?: boolean }[]
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
              {r.bullets ? (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {r.bullets.map((b, i) => (
                    <li key={i} style={{ fontSize: 12.5, color: '#4A4744', lineHeight: 1.6, display: 'flex', gap: 8, marginBottom: 4 }}>
                      <span style={{ color: '#C2550A', flexShrink: 0, marginTop: 1 }}>–</span>
                      {b}
                    </li>
                  ))}
                </ul>
              ) : (
                <div style={{ fontSize: 12.5, color: '#4A4744', lineHeight: 1.6 }}>{r.stat}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
