import Link from 'next/link'

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
        <p style={pStyle}>Thanks for coming here! Here&apos;s something more about me 🙂</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>Started my Sales career in 2016. I got placed on the first day of MBA college, but in an Ops role. I was miserable for a year at{' '}
          <a href="https://www.wipro.com" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Wipro</a> doing this. So I wrote a cold email to{' '}
          <a href="https://www.linkedin.com/in/aparna-krishnamurthy-3182516/" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Aparna Krishnamurthy</a>, Head of Demand Generation, who was building a small team out of Bangalore. That was it.</p>
      </div>

      <p style={pStyle}>Moved to Bangalore in 2016. Been here since. It has been an amazing city, and I have met some of the most driven people of my life here.</p>

      {/* BUILDING SALES */}
      <h2 style={sectionHeading}>Building Sales, Hiring, and What it Takes to Scale Revenue Functions</h2>
      <div style={{ marginBottom: 40 }}>
        <p style={pStyle}>An important pivot in my life came when I joined{' '}
          <a href="https://www.o9solutions.com" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>o9 Solutions</a>, a SaaS platform company selling an Enterprise Planning Solution to global companies.</p>
        <p style={pStyle}>This was the most intense Business Development role I had taken on. I had the opportunity to work with Dutch and Southeast Asian talent. The talent density at o9 was - and still is - amazing.</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>This was also where I led my first team. After 18 months as an individual contributor, I led the Business Development team focused on Enterprise across APAC. I also gained exposure working with consulting partners like{' '}
          <a href="https://www.bcg.com" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>BCG India</a>,{' '}
          <a href="https://www2.deloitte.com/au" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Deloitte Australia</a>, and a few others.</p>
      </div>

      {/* INDIAN SAAS STORY */}
      <h2 style={sectionHeading}>Becoming Part of the Indian SaaS Story</h2>
      <div style={{ marginBottom: 40 }}>
        <p style={pStyle}>The motivation to move to{' '}
          <a href="https://www.hevodata.com" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Hevo Data</a> was to build something closer to home. SaaS was growing, and I got the opportunity to be part of the 0 to 1 story there.</p>
        <p style={pStyle}>One of the most challenging roles of my career - and the one where I did the most. We were building as a company with big ambitions, taking on{' '}
          <a href="https://www.fivetran.com" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Fivetran</a>. At one point I was doing 8 interviews a day to find a good AE, building sales ops simultaneously, and spending time in front of customers.</p>
        <p style={pStyle}>I worked closely with{' '}
          <a href="https://www.linkedin.com/in/manishjethani/" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Manish Jethani</a>, CEO at Hevo, and picked up a structured way to think about Hiring, Onboarding, and Sales Ops. The most memorable stint. The sales floor at Hevo buzzed when I was there.</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>I scaled the SMB function with 4 AEs, then built the Account Management team for expanding the existing book of business with 6 AMs. The Mid Market and Enterprise role is where I got into strategic selling - it tied back to my time at o9 and my ambition to close big deals. Closing 4 to 5 deals at $50K at Hevo made me sharper at enterprise selling and managing a complex cycle.</p>
      </div>

      <p style={pStyle}>I also learned the ropes of hiring - through a few good decisions and more bad ones.</p>

      {/* SIGNEASY */}
      <h2 style={sectionHeading}>Signeasy</h2>
      <div style={{ marginBottom: 40 }}>
        <p style={{ ...pStyle, marginBottom: 0 }}><a href="https://www.signeasy.com" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Signeasy</a> has been different. No playbook. No big team. I joined a 4-member Sales and 3-member Account Management team. Signeasy had not sold to Mid Market before - and with us building an Enterprise product, I built and hired a team with the initial success of closing a Banking customer at $60K ARR.</p>
      </div>

      {/* WHAT DRIVES ME */}
      <h2 style={sectionHeading}>What Drives Me Professionally</h2>
      <div style={{ marginBottom: 40 }}>
        <p style={pStyle}>Being part of a smart and driven team. More than the idea, I like to be part of a team where I can learn.</p>
        <p style={pStyle}>I picked up Sandler and MEDDPICC and find that I can lead and coach other AEs in Mid Market and Enterprise deals. I love going deep into the technical aspects to get a deal done, while bringing the strategic expertise to move it in the right direction.</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>I also believe I can spot the right talent and build an initial team - one I can work with, grow with, and scale with.</p>
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
          <div key={label} style={{ background: '#F5F4EF', padding: '18px 16px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#AAAAAA', marginBottom: 5 }}>{label}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#1A1A1A', marginBottom: 3 }}>{val}</div>
            <div style={{ fontSize: 12, color: '#6B6B6B', lineHeight: 1.5 }}>{sub}</div>
          </div>
        ))}
      </div>

      {/* EXPERIENCE */}
      <SectionLabel>Experience</SectionLabel>
      <div style={{ marginBottom: 40, display: 'flex', flexDirection: 'column', gap: 10 }}>

        <CompanyBlock
          name="Signeasy" dates="May 2025 - Present"
          tag={{ label: 'Current', color: 'green' }}
          tagline="AI-powered contract management platform"
          roles={[
            {
              title: 'Head of Sales and Success',
              period: 'May 2025 - Present',
              accent: true,
              bullets: [
                'Grew logo acquisition from 15 per quarter to 64 in Q1 2026',
                'Improved Lead to Opportunity conversion from 20% to 45% by defining clear sales processes and sharper deal qualification',
                'Improved Opportunity to Close rate from 25% to 45% through better execution quality and applying Sandler for Mid-Market deals',
                'Independently closed a $70K Banking customer in the US through a 6-month sales cycle',
                'Built sales processes around SMB Sales Assist and Mid Market deals through Sandler implementation',
                'Hired Founding BDR and set up initial process around Outbound. Impact: created $50K outbound pipeline in Q1 2026 and closed $10K of that pipeline',
              ],
            },
          ]}
        />

        <CompanyBlock
          name="Hevo Data" dates="May 2021 - Dec 2024"
          tag={{ label: '1 Promotion', color: 'gray' }}
          tagline="Cloud ETL / Data Integration - $1M-$10M ARR journey"
          roles={[
            {
              title: 'Mid-Market Sales - EMEA and APAC',
              period: <>Aug 2023 - Dec 2024 · <a href="https://www.linkedin.com/in/daniel-niemann-6b20621/" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Daniel Niemann</a> (CRO)</>,
              accent: true,
              bullets: [
                'Led a team of 4 AEs closing $750K ARR across 30 logos in 3 quarters against a $1.2mn target',
                'Closed the largest-ever deal in the non-US region at approximately $80K ARR',
                'Closed the first AWS Marketplace deal at $40K ARR on a 2-year term',
                'Constantly improved deal execution through tighter qualification, role-plays, and building a Sandler playbook',
              ],
            },
            {
              title: 'Account Management and Expansion',
              period: <>Jul 2022 - Aug 2023 · <a href="https://www.linkedin.com/in/manishjethani/" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Manish Jethani</a> (CEO)</>,
              bullets: [
                'Took on account management and expansion as the next big problem after scaling SMB Sales Motion',
                'Biggest ARR expansion: scaled the fastest-growing quick commerce company in India from $10K to $150K ARR through account planning, executive relationships, and identifying whitespaces',
                'Started with 1 AM, hired 6 AMs to handle a total account book of $5mn+',
                'Built playbook from scratch including account segmentation, geo alignment, QBRs, and adoption',
              ],
            },
            {
              title: 'SMB Sales Lead - Europe',
              period: <>May 2021 - Jul 2022 · <a href="https://www.linkedin.com/in/manishjethani/" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Manish Jethani</a> (CEO)</>,
              bullets: [
                'Scaled average logos per month from 8 to 18, delivering $92K ARR in EMEA',
                'Learned the ropes of hiring and doubled the team from 10 to 20 across all regions',
                'Scaled Sales Ops on Inbound. Defined segmentation based on trial and product signals',
                'Built high velocity sales system to measure Trial → Pipeline Activation → Conversation Established → Deal → Close',
                'Measured each step of the funnel',
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
              period: <>2020 - 2021 · <a href="https://www.linkedin.com/in/stephandebarse-driving-digital-transformation/" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Stephan De Barse</a> (Global EVP)</>,
              accent: true,
              bullets: [
                'Increased team SQLs from 20 to 80+ per quarter for enterprise companies with revenue above $1bn',
                'Built $2mn+ enterprise pipeline per quarter through those SQLs (avg ACV $100K-$300K)',
                'Activated partner ecosystems in APAC: GCP, TCS, McKinsey, Deloitte, BCG',
              ],
            },
            {
              title: 'Business Development Manager',
              period: '2018 - 2020',
              bullets: [
                'Started as an individual contributor. Built outbound pipeline for enterprise supply chain SaaS in EMEA and India',
                '8 SQLs per quarter as starting target for first year - achieved 100%+',
              ],
            },
          ]}
        />

        <CompanyBlock
          name="Wipro" dates="Jun 2015 - Sep 2018"
          tagline="Retail and Consumer vertical"
          roles={[
            {
              title: 'Senior Executive, Demand Generation',
              period: <>Jun 2015 - Sep 2018 · <a href="https://www.linkedin.com/in/aparna-krishnamurthy-3182516/" target="_blank" rel="noopener" style={{color:'#3730A3',textDecoration:'underline'}}>Aparna Krishnamurthy</a> (Head of Demand Generation)</>,
              bullets: [
                'First demand gen hire. Generated $20mn enterprise pipeline via campaigns, B2B summits, and partner activity',
                'Identified and recruited cold calling agencies including Revvpro and Beyond Codes',
              ],
            },
          ]}
        />
      </div>

      {/* NOTABLE WINS */}
      <SectionLabel>Notable wins</SectionLabel>
      <div className="grid-2col" style={{ gap: 10, marginBottom: 40 }}>
        {[
          ['60+', 'Logos scaled at Signeasy', 'Grew customer base from scratch to 60+ logos in 2 quarters through outbound and inbound motions.'],
          ['$10K to $150K', 'Account expansion at Hevo', "Scaled India's fastest-growing quick commerce company from $10K to $150K ARR working alongside solution engineers."],
          ['$100K+', 'Multiple $100K+ deals', 'Closed multiple six-figure deals across US, Israel, and Middle East markets at Hevo.'],
          ['10 to 25', 'Team scaled at Hevo', 'Doubled the sales team from 10 to 20 through in-house hiring, working alongside other sales managers in the hiring process.'],
        ].map(([num, title, desc]) => (
          <div key={title} style={{ background: '#fff', border: '1px solid #E2E0D8', borderRadius: 8, padding: 18 }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: '#3730A3', letterSpacing: '-0.02em', marginBottom: 5 }}>{num}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1A1A', marginBottom: 5, lineHeight: 1.3 }}>{title}</div>
            <div style={{ fontSize: 12, color: '#6B6B6B', lineHeight: 1.6 }}>{desc}</div>
          </div>
        ))}
      </div>

      <Divider />

      {/* TOOLS */}
      <SectionLabel>Tools</SectionLabel>
      <div className="grid-2col" style={{ gap: 10, marginBottom: 40 }}>
        {[
          ['CRM & Pipeline', ['HubSpot', 'Salesforce']],
          ['Prospecting', ['Clay', 'Apollo', 'LinkedIn Sales Nav']],
          ['Analytics', ['Mixpanel', 'HubSpot Reports']],
          ['AI Tools', ['Claude', 'Notion']],
        ].map(([label, items]) => (
          <div key={String(label)} style={{ background: '#fff', border: '1px solid #E2E0D8', borderRadius: 6, padding: '14px 16px' }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3730A3', marginBottom: 10 }}>{label}</div>
            {(items as string[]).map((item, i, arr) => (
              <div key={item} style={{ fontSize: 13, color: '#1A1A1A', fontWeight: 500, padding: '4px 0', borderBottom: i < arr.length - 1 ? '1px solid #F3F4F6' : 'none' }}>{item}</div>
            ))}
          </div>
        ))}
      </div>



    </main>
  )
}

// ── Shared components ─────────────────────────────────────
function SectionLabel({ children, accent }: { children: React.ReactNode, accent?: boolean }) {
  return <h2 style={{ fontSize: 22, fontWeight: 700, color: accent ? '#3730A3' : '#4A4744', letterSpacing: '-0.01em', marginBottom: 20, marginTop: 48, paddingBottom: 10, borderBottom: `2px solid ${accent ? '#3730A3' : '#E2E0D8'}` }}>{children}</h2>
}

function Divider() {
  return <hr style={{ border: 'none', borderTop: '1px solid #E2E0D8', margin: '40px 0' }} />
}

function CompanyBlock({ name, dates, tag, tags, tagline, roles }: {
  name: string, dates: string,
  tag?: { label: string, color: string },
  tags?: { label: string, color: string }[],
  tagline?: string,
  roles: { title: string, period: React.ReactNode, stat?: string, bullets?: string[], accent?: boolean }[]
}) {
  const allTags = tags || (tag ? [tag] : [])
  const tagStyle = (color: string) => ({
    fontSize: 9, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' as const,
    borderRadius: 3, padding: '2px 7px',
    ...(color === 'green' ? { background: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0' }
      : color === 'amber' ? { background: '#EEF2FF', color: '#3730A3', border: '1px solid #C7D2FE' }
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
