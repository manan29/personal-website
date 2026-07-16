import { Container } from '@/components/Container'
import { SectionLabel } from '@/components/SectionLabel'
import { Card } from '@/components/Card'

export default function About() {
  const pStyle: React.CSSProperties = {
    fontSize: '19px',
    lineHeight: 1.7,
    color: 'var(--body)',
    marginBottom: '22px',
    fontFamily: 'var(--font-hanken)',
  }
  return (
    <Container width="narrow" style={{ padding: '88px 40px 96px' }} className="page-container">
      <main>

      <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', letterSpacing: '0.16em', color: 'var(--accent)', marginBottom: '24px' }}>
        // ABOUT
      </div>
      <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '42px', lineHeight: 1.12, letterSpacing: '-0.02em', margin: '0 0 36px', color: 'var(--ink)', maxWidth: '18ch' }}>
        At the intersection of technology and selling.
      </h1>

      {/* INTRO */}
      <div style={{ marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid var(--border)' }}>
        <p style={pStyle}>Here&apos;s something more about me 🙂</p>
        <p style={pStyle}>I started my Sales career accidentally in 2016. I got placed on the first day of MBA college in an Ops role at{' '}
          <a href="https://www.wipro.com" target="_blank" rel="noopener" style={{color:'var(--accent)',textDecoration:'underline'}}>Wipro</a>, miserable for a year, before I wrote a cold email to{' '}
          <a href="https://www.linkedin.com/in/aparna-krishnamurthy-3182516/" target="_blank" rel="noopener" style={{color:'var(--accent)',textDecoration:'underline'}}>Aparna Krishnamurthy</a>, Head of Demand Generation, who was building a small Outbound team in Bangalore for proactive demand generation.</p>
        <p style={pStyle}>But there was a problem: employees were not allowed to move before completing 2 years in a role, and I was only 10 months in. I convinced the VP of Ops at a meeting that was hard to get. I explained my case and he made an exception in the end. First CXO buy-in 🙂</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>Moved to Bangalore at the end of 2016 and have been here since.</p>
      </div>

      {/* STARTUPS */}
      <SectionLabel>Exposure to Startups, High Velocity Execution, and High Talent Density</SectionLabel>
      <div style={{ marginBottom: 40 }}>
        <p style={pStyle}>An important pivot came when I joined{' '}
          <a href="https://www.o9solutions.com" target="_blank" rel="noopener" style={{color:'var(--accent)',textDecoration:'underline'}}>o9 Solutions</a>, selling Enterprise Planning Solutions to global enterprises such as Nike, Asian Paints, T-Mobile, Philips, Pirelli, and many more. The most intense BD role I had taken on - working with Dutch and Southeast Asian talent was my first cross-cultural experience.</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>After 18 months as an individual contributor - building lists manually, cold calling, and running campaigns with partners - I was asked to lead the BD team focused on Enterprise across APAC. I gained exposure working with{' '}
          <a href="https://www.bcg.com" target="_blank" rel="noopener" style={{color:'var(--accent)',textDecoration:'underline'}}>BCG India</a> and{' '}
          <a href="https://www2.deloitte.com/au" target="_blank" rel="noopener" style={{color:'var(--accent)',textDecoration:'underline'}}>Deloitte Australia</a>.</p>
      </div>

      {/* INDIAN SAAS STORY */}
      <SectionLabel>Becoming Part of the Indian SaaS Story</SectionLabel>
      <div style={{ marginBottom: 40 }}>
        <p style={pStyle}>I moved to{' '}
          <a href="https://www.hevodata.com" target="_blank" rel="noopener" style={{color:'var(--accent)',textDecoration:'underline'}}>Hevo Data</a> to build something closer to home, joining the 0 to 1 story at a company taking on{' '}
          <a href="https://www.fivetran.com" target="_blank" rel="noopener" style={{color:'var(--accent)',textDecoration:'underline'}}>Fivetran</a>. At one point I was doing 8 interviews a day, building sales ops, and spending the rest of the time in front of customers.</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>Working closely with{' '}
          <a href="https://www.linkedin.com/in/manishjethani/" target="_blank" rel="noopener" style={{color:'var(--accent)',textDecoration:'underline'}}>Manish Jethani</a>, CEO of Hevo, I picked up a structured way of thinking about Hiring, Onboarding, and Sales Ops. I scaled SMB with 4 AEs, built the AM team with 6 AMs, and got into strategic selling through Mid Market and Enterprise - closing 4 to 5 deals at $50K+ sharpened my ability to think about complex deals and sales cycles.</p>
      </div>

      {/* SIGNEASY */}
      <SectionLabel>Signeasy</SectionLabel>
      <div style={{ marginBottom: 40 }}>
        <p style={pStyle}><a href="https://www.signeasy.com" target="_blank" rel="noopener" style={{color:'var(--accent)',textDecoration:'underline'}}>Signeasy</a> has been different - no playbook, no big team, just a 4-member Sales team and an AM function I was heading in the interim. With us building an Enterprise product, I built and hired a team that closed multiple mid-market deals, the largest being a Banking customer at $60K ARR in the first year.</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>As of April 2026, I was promoted to Head of Sales and Account Management.</p>
      </div>

      {/* WHAT DRIVES ME */}
      <SectionLabel>What Drives Me</SectionLabel>
      <div style={{ marginBottom: 40 }}>
        <p style={pStyle}>Being part of a smart, driven team is what pushes me to go beyond the status quo and take on the challenging aspects of GTM.</p>
        <p style={pStyle}>I am more of a player-coach. Trained on Sandler and MEDDPICC, my real edge is coaching reps on complex situations and going deep across business and technical use-cases to get deals done.</p>
        <p style={{ ...pStyle, marginBottom: 0 }}>Through my failures, I have learned that the right hiring solves most problems a sales org faces. Spotting the right talent and building an initial team is the most important piece of the puzzle.</p>
      </div>

      {/* NOW */}
      <SectionLabel>What I&apos;m doing now</SectionLabel>
      <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 40 }}>
        {[
          ['Role', 'Head of Sales & Success', 'Signeasy - AI contract management'],
          ['Focus', '0 to 1 sales org', 'Pipeline, hiring, GTM systems'],
          ['Markets', 'India, Europe, UK, Middle East, and US', ''],
          ['Also', 'Writing here', 'Deals, hiring, sales systems'],
        ].map(([label, val, sub]) => (
          <Card key={label} style={{ padding: '18px 16px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 5 }}>{label}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 3 }}>{val}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>{sub}</div>
          </Card>
        ))}
      </div>

      {/* OFF THE FIELD */}
      <Card style={{ marginTop: 48, padding: 24, borderRadius: 12, fontSize: 16, color: 'var(--body)', fontFamily: 'var(--font-hanken)' }}>
        <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--muted)', display: 'block', marginBottom: 8 }}>OFF THE FIELD</span>
        I follow F1 and Test Cricket — the long games where strategy compounds.
      </Card>

      </main>
    </Container>
  )
}

