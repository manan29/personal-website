import { Container } from '@/components/Container';

export default function BankingDealPage() {
  return (
    <>
      <style>{`
        .prose p { font-size: 15.5px; line-height: 1.78; color: var(--body); margin-bottom: 0.85rem; }
        .prose h2 { font-family: Georgia, serif; font-size: 1.35rem; font-weight: 400; letter-spacing: -0.01em; color: var(--ink); margin: 2.25rem 0 0.65rem; line-height: 1.3; }
        .prose h3 { font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.09em; color: var(--muted); margin: 1.75rem 0 0.5rem; }
        .divider { height: 1px; background: var(--border); margin: 2.25rem 0; }
        .insight { border-left: 2px solid var(--border); padding: 0.7rem 1.2rem; margin: 1.25rem 0; background: var(--bg-panel); border-radius: 0 8px 8px 0; }
        .insight p { margin: 0; font-size: 14.5px; color: var(--muted); line-height: 1.65; }
        .prose ul { list-style: none; padding: 0; margin: 0.4rem 0 0.9rem; }
        .prose ul li { padding: 4px 0 4px 18px; position: relative; font-size: 15px; color: var(--body); line-height: 1.6; }
        .prose ul li::before { content: "→"; position: absolute; left: 0; color: var(--muted); font-size: 12px; top: 6px; }
        .closing { margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid var(--border); font-size: 15px; color: var(--muted); font-style: italic; font-family: Georgia, serif; line-height: 1.7; }
        .article-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.75rem; }
        .article-subtitle { font-size: 1rem; color: var(--muted); margin-bottom: 1.75rem; max-width: 560px; line-height: 1.6; }
        .article-meta { display: flex; flex-wrap: wrap; gap: 1.25rem; font-size: 12.5px; color: var(--muted); padding-bottom: 1.75rem; border-bottom: 1px solid var(--border); margin-bottom: 2rem; }
        .breadcrumb { font-size: 12px; color: var(--muted); margin-bottom: 2rem; display: flex; align-items: center; gap: 6px; }
        .breadcrumb a { color: var(--muted); text-decoration: none; }
      `}</style>

      <Container width="narrow" style={{ padding: '72px 40px 96px' }}>

      <div className="breadcrumb">
        <a href="/">Home</a>
        <span>›</span>
        <a href="/blog/large-deal-learnings">Complex Deals</a>
        <span>›</span>
        <span>$70K Banking Deal</span>
      </div>

      <div className="article-eyebrow">Complex Deals · Enterprise Sales</div>

      <h1 style={{fontFamily:`Georgia, serif`,fontSize:`2.1rem`,fontWeight:400,lineHeight:1.25,letterSpacing:`-0.02em`,color:`var(--ink)`,marginBottom:`0.75rem`,maxWidth:`680px`}}>
        How We Closed a $70K Banking Deal <em>(And What It Taught Us About Enterprise Sales)</em>
      </h1>

      <p className="article-subtitle">A 6-month journey through compliance mazes, legal negotiations, incumbent lock-in traps, and a midnight signature from a Bangkok hotel room.</p>

      <div className="article-meta">
        <span>Dec 2025</span>
        <span>· Complex Deals</span>
        <span>· 12 min read</span>
        <span>· 6-month deal cycle</span>
      </div>

      <svg width="100%" viewBox="0 0 680 380" role="img" xmlns="http://www.w3.org/2000/svg" style={{marginBottom:'2rem'}}>
        <rect x="40" y="30" width="120" height="22" rx="11" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="0.5"/>
        <text fontSize="11" fontFamily="system-ui" x="100" y="41" textAnchor="middle" dominantBaseline="central" fill="#4338CA">Complex Deals</text>
        <text fontSize="28" fontWeight="500" fontFamily="system-ui" x="40" y="100" fill="#1A1A1A">How We Closed a</text>
        <text fontSize="28" fontWeight="500" fontFamily="system-ui" x="40" y="134" fill="#3730A3">$70K Banking Deal</text>
        <text fontSize="28" fontWeight="500" fontFamily="system-ui" x="40" y="168" fill="#1A1A1A">And What It Taught Us.</text>
        <text fontSize="11" fontFamily="system-ui" x="40" y="196" fill="#6B7280">6-month cycle</text>
        <circle cx="112" cy="196" r="2" fill="#C7D2FE"/>
        <text fontSize="11" fontFamily="system-ui" x="120" y="196" fill="#6B7280">FDIC-regulated bank</text>
        <circle cx="210" cy="196" r="2" fill="#C7D2FE"/>
        <text fontSize="11" fontFamily="system-ui" x="218" y="196" fill="#6B7280">Dec 31 2025</text>
        <text fontSize="13" fontFamily="system-ui" x="40" y="224" fill="#5F5E5A">A midnight signature from a Bangkok hotel room.</text>
        <line x1="40" y1="350" x2="220" y2="350" stroke="#C7D2FE" strokeWidth="0.5"/>
        <text fontSize="11" fontFamily="system-ui" x="40" y="368" fill="#9CA3AF">Manan Sachdeva</text>
        <line x1="355" y1="20" x2="355" y2="340" stroke="#E5E3DC" strokeWidth="1"/>
        <rect x="368" y="28" width="296" height="88" rx="8" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="0.5"/>
        <text fontSize="9" fontFamily="system-ui" fontWeight="600" x="516" y="46" textAnchor="middle" dominantBaseline="central" fill="#6366F1" letterSpacing="0.08em">PHASE 1 · JUL - AUG 2025</text>
        <text fontSize="13" fontFamily="system-ui" fontWeight="600" x="516" y="68" textAnchor="middle" dominantBaseline="central" fill="#3730A3">The Easy Part</text>
        <text fontSize="10" fontFamily="system-ui" x="516" y="86" textAnchor="middle" dominantBaseline="central" fill="#6B7280">Discovery · POC · Technical win</text>
        <text fontSize="10" fontFamily="system-ui" x="516" y="104" textAnchor="middle" dominantBaseline="central" fill="#6B7280">Champion identified · Business case proven</text>
        <polygon points="512,118 520,118 516,126" fill="#A5B4FC"/>
        <rect x="368" y="128" width="296" height="88" rx="8" fill="#C7D2FE" stroke="#A5B4FC" strokeWidth="0.5"/>
        <text fontSize="9" fontFamily="system-ui" fontWeight="600" x="516" y="146" textAnchor="middle" dominantBaseline="central" fill="#4338CA" letterSpacing="0.08em">PHASE 2 · AUG - NOV 2025</text>
        <text fontSize="13" fontFamily="system-ui" fontWeight="600" x="516" y="168" textAnchor="middle" dominantBaseline="central" fill="#3730A3">The Complications</text>
        <text fontSize="10" fontFamily="system-ui" x="516" y="186" textAnchor="middle" dominantBaseline="central" fill="#4338CA">Board approval · Legal · Compliance</text>
        <text fontSize="10" fontFamily="system-ui" x="516" y="204" textAnchor="middle" dominantBaseline="central" fill="#4338CA">Incumbent lock-in · 15+ legal rounds</text>
        <polygon points="512,218 520,218 516,226" fill="#818CF8"/>
        <rect x="368" y="228" width="296" height="88" rx="8" fill="#3730A3" stroke="#3730A3" strokeWidth="0.5"/>
        <text fontSize="9" fontFamily="system-ui" fontWeight="600" x="516" y="246" textAnchor="middle" dominantBaseline="central" fill="#A5B4FC" letterSpacing="0.08em">PHASE 3 · NOV - DEC 2025</text>
        <text fontSize="13" fontFamily="system-ui" fontWeight="600" x="516" y="268" textAnchor="middle" dominantBaseline="central" fill="#FFFFFF">The Hardest Part</text>
        <text fontSize="10" fontFamily="system-ui" x="516" y="286" textAnchor="middle" dominantBaseline="central" fill="#C7D2FE">Re-scoping · Final negotiations</text>
        <text fontSize="10" fontFamily="system-ui" x="516" y="304" textAnchor="middle" dominantBaseline="central" fill="#C7D2FE">Dec 31 · 10 PM · Bangkok · Signed</text>
      </svg>

      <div className="prose">

        <h2>The Deal That Changed How We Sell</h2>
        <p>It started as an inbound inquiry.</p>
        <p>But it became something entirely different. A 6-month journey through compliance mazes, legal negotiations, incumbent lock-in traps, and ultimately, a midnight signature on December 31st, 2025, from a Bangkok hotel room.</p>
        <p>This is the story of how we closed a $70K deal with a major FDIC-regulated financial institution. More importantly, it is what this deal taught us about selling to enterprise customers.</p>

        <div className="divider"></div>

        <h2>Why This Deal Mattered</h2>
        <p>Before diving in, you need to understand our sales structure.</p>
        <p>At Signeasy, we are a lean team. That means one salesperson might handle a $4K SaaS deal while simultaneously managing a $50K API integration. The complexity, stakeholders, and timelines are completely different.</p>
        <p>We needed two distinct sales processes:</p>
        <ul>
          <li><strong>Sales Assist:</strong> High-velocity deals. Quick qualification, trial mode, no wasting time on unnecessary pricing discussions or proof cycles. Straight to close.</li>
          <li><strong>Complex Deal:</strong> API-heavy, volume-based, high user count, multi-stakeholder, regulatory requirements. Needs a fundamentally different approach.</li>
        </ul>

        <h3>How We Define a Complex Deal (P1 Deal)</h3>
        <p>We classify a deal as P1 if it meets any of the following:</p>
        <ol style={{paddingLeft:'20px',marginBottom:'0.9rem'}}>
          <li style={{fontSize:'15px',color:'var(--body)',lineHeight:'1.6',marginBottom:'8px'}}>API-heavy, volume-based deals (regardless of company size)</li>
          <li style={{fontSize:'15px',color:'var(--body)',lineHeight:'1.6',marginBottom:'8px'}}>SaaS platform deals over $10K on volume or number of users</li>
          <li style={{fontSize:'15px',color:'var(--body)',lineHeight:'1.6',marginBottom:'8px'}}>Business-critical integrations that are central to customer operations</li>
        </ol>
        <p><strong>Why the special treatment?</strong></p>
        <ul>
          <li><strong>Operational criticality:</strong> These are not nice-to-have tools. For a bank using our API to issue loan documents, this is how they operate. Failure is not an option.</li>
          <li><strong>IT-driven process:</strong> These deals require access to technical teams, security reviews, and legal sign-offs.</li>
          <li><strong>Multi-stakeholder buying:</strong> Typically, IT stakeholders, CFO, and CEO are all involved, especially for greenfield projects or vendor replacements.</li>
        </ul>
        <p>This banking deal was a textbook P1 deal.</p>

        <div className="divider"></div>

        <h2>Part 1: The Easy Part</h2>
        <h3>July - August 2025: Discovery, POC, and Technical Win</h3>
        <p>Our banking customer came to us with a clear problem.</p>
        <p><strong>The Business Case at a Glance:</strong></p>
        <ul>
          <li>FDIC-regulated financial institution, 100+ years in business</li>
          <li>Processing 20,000 loan documents per month</li>
          <li>Actually signing 12,000 to 13,000 per month</li>
          <li>Paying the incumbent vendor for all 20,000 documents</li>
          <li>Growing at 10% annually</li>
        </ul>
        <p>Let that sink in: they were paying for 8,000 documents per month that never converted to actual loan signings.</p>
        <p><strong>The Cost Problem:</strong></p>
        <p>The incumbent&apos;s pay-per-send model charged for every document generated, signed or not. Documents abandoned mid-application? Still charged. At 100K+ documents annually, the waste multiplied.</p>
        <p><strong>Our Value Proposition Was Immediately Clear:</strong></p>
        <p>Pay only for documents that are actually signed, not documents sent.</p>
        <p>$70K+ in savings over 3 years. A 35 to 40% cost reduction.</p>

        <div className="divider"></div>

        <h3>The Technical Win: Why They Had to Move Now</h3>
        <p><strong>Current Setup:</strong></p>
        <ul>
          <li>Embedded signing through their loan management system</li>
          <li>Supporting only 3 templates</li>
          <li>Limited ability to handle session restarts or API callbacks</li>
        </ul>
        <p><strong>What They Needed:</strong></p>
        <ul>
          <li>APIs triggered when customers drop off mid-session</li>
          <li>Session restart support</li>
          <li>Flexibility for future product expansion</li>
        </ul>
        <p>Their existing vendor contract renewal was coming in October, meaning they needed a 60+ day cutover window. They had to decide now, or stay locked in for another year.</p>

        <div className="divider"></div>

        <h3>The Champion: VP Digital</h3>
        <p>We started working with VP Digital, the person who owned the budget, felt the pain daily, and had everything to gain from solving this problem.</p>
        <p><strong>Who She Was:</strong></p>
        <ul>
          <li>VP of Digital Division (reports directly to the President)</li>
          <li>Owned the e-signature platform budget</li>
          <li>Frustrated with the incumbent vendor&apos;s slow responses, misaligned pricing model, and minimal support during renewal negotiations</li>
        </ul>
        <p><strong>What Built Trust:</strong></p>
        <p>During the initial discovery and POC phase, we did something simple: we were responsive, and we built the business case together with her.</p>
        <p>She specifically called out: &quot;You guys were more understanding during the testing phase, and more responsive from the first email.&quot;</p>
        <div className="insight"><p>In enterprise sales, responsiveness is underrated. It matters more than you think.</p></div>

        <div className="divider"></div>

        <h3>The POC: Early Technical Validation</h3>
        <p>We did not launch into a 90-day POC process. Instead, we moved fast.</p>
        <p><strong>What Happened:</strong></p>
        <ul>
          <li>Initial technical exploration in July</li>
          <li>Engineers tested our API documentation</li>
          <li>Quick feedback loop: within hours, not days</li>
          <li>Clear go/no-go on feasibility</li>
        </ul>
        <p><strong>The Result:</strong></p>
        <ul>
          <li>Engineering team confirmed: &quot;Documentation is great, easy to test, no blockers&quot;</li>
          <li>Technical risk was eliminated before commercial negotiations even started</li>
        </ul>
        <div className="insight"><p>Early technical validation removes the biggest objection in complex deals. Engineers either validate or kill the deal. If they validate, everything else is negotiable.</p></div>

        <div className="divider"></div>

        <h3>End of Phase 1: Where We Stood</h3>
        <p><strong>Momentum:</strong></p>
        <ul>
          <li>Champion identified (VP Digital)</li>
          <li>Technical validation complete</li>
          <li>Business case proven ($70K savings over 3 years)</li>
          <li>Trust built through responsiveness</li>
        </ul>
        <p><strong>Open Questions:</strong></p>
        <ul>
          <li>Who are all the stakeholders?</li>
          <li>What is the full buying process?</li>
          <li>How long will legal and compliance take?</li>
          <li>When can we actually sign?</li>
        </ul>
        <p>We were confident. We were ready. We had no idea what was about to hit us.</p>

        <div className="divider"></div>

        <h2>Part 2: The Complications</h2>
        <h3>August - November 2025: Executive Engagement, Legal, Compliance, and the Incumbent Curveball</h3>

        <h3>The Executive Outreach That Changed Everything</h3>
        <p>We had a champion in VP Digital, but we knew we needed to connect at the executive level to move forward.</p>
        <p>Our CEO reached out cold to the President of the Digital Division. No warm introduction. No mutual connection. Just a direct email.</p>
        <p>She responded. And then our CEO flew to their office to meet in person.</p>
        <p>This was bold. This was risky. But it worked.</p>
        <p><strong>Why This Mattered:</strong></p>
        <p>In enterprise sales, executive engagement signals commitment. When a vendor&apos;s CEO shows up, it says: &quot;We are serious about this partnership.&quot; The President saw that commitment and it changed the trajectory of the deal.</p>
        <p>Beyond building trust, the in-person meeting uncovered the full buying process. The decision did not end at the President level. It required board approval. And the board&apos;s first question was predictable: &quot;We have never heard of this company.&quot;</p>
        <p>We now knew exactly what we needed to prepare for.</p>

        <div className="divider"></div>

        <h3>Mapping the Organisation: Finding the Real Economic Buyers</h3>
        <div style={{overflowX:'auto',margin:'1.5rem 0'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'14px',fontFamily:'system-ui'}}>
            <thead>
              <tr style={{borderBottom:'2px solid var(--accent-tint)',background:'var(--bg-panel)'}}>
                <th style={{padding:'10px 14px',textAlign:'left',color:'var(--accent)',fontWeight:600}}>Stakeholder</th>
                <th style={{padding:'10px 14px',textAlign:'left',color:'var(--accent)',fontWeight:600}}>Role</th>
                <th style={{padding:'10px 14px',textAlign:'left',color:'var(--accent)',fontWeight:600}}>Authority</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom:'1px solid var(--border)'}}>
                <td style={{padding:'10px 14px',color:'var(--ink)',fontWeight:500}}>VP Digital</td>
                <td style={{padding:'10px 14px',color:'var(--muted)'}}>Champion, day-to-day owner</td>
                <td style={{padding:'10px 14px',color:'var(--muted)'}}>Platform selection, budget approval</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)',background:'var(--bg-panel)'}}>
                <td style={{padding:'10px 14px',color:'var(--ink)',fontWeight:500}}>President, Digital Division</td>
                <td style={{padding:'10px 14px',color:'var(--muted)'}}>Executive sponsor</td>
                <td style={{padding:'10px 14px',color:'var(--muted)'}}>Final business approval</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)'}}>
                <td style={{padding:'10px 14px',color:'var(--ink)',fontWeight:500}}>FDIC Compliance Committee</td>
                <td style={{padding:'10px 14px',color:'var(--muted)'}}>Gatekeeper (6 members)</td>
                <td style={{padding:'10px 14px',color:'var(--muted)'}}>Formal vendor approval</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)',background:'var(--bg-panel)'}}>
                <td style={{padding:'10px 14px',color:'var(--ink)',fontWeight:500}}>Compliance Officer</td>
                <td style={{padding:'10px 14px',color:'var(--muted)'}}>Due diligence lead</td>
                <td style={{padding:'10px 14px',color:'var(--muted)'}}>Security and compliance clearance</td>
              </tr>
              <tr>
                <td style={{padding:'10px 14px',color:'var(--ink)',fontWeight:500}}>Board of Directors</td>
                <td style={{padding:'10px 14px',color:'var(--muted)'}}>Final governance</td>
                <td style={{padding:'10px 14px',color:'var(--muted)'}}>Strategic approval</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>This was not a simple approval chain. This was a multi-stakeholder sales cycle that went all the way to the board.</p>
        <p>But understanding it upfront was our advantage. We were not blindsided in month four when the board suddenly needed sign-off.</p>

        <div className="divider"></div>

        <h3>Legal and Compliance: The Steepest Learning Curve</h3>
        <p>When you sell to a bank, legal and compliance are not add-ons. They are gatekeepers with veto power.</p>
        <p>Without a dedicated internal legal team, the salesperson had to understand every concern, translate it to our product and legal teams, bring back answers, and repeat. More than 15 times.</p>
        <p><strong>The Key Concerns:</strong></p>
        <ul>
          <li>Data security: How is customer PII stored? Who has access? What happens in a breach?</li>
          <li>Regulatory compliance: Does our platform meet applicable standards?</li>
          <li>Insurance: What is our coverage and liability?</li>
          <li>Service levels: What is our uptime SLA? What happens if we go down?</li>
          <li>Customer data ownership: Who owns the contracts processed through our system?</li>
          <li>AI features: Can they opt out of AI processing?</li>
          <li>Breach notification: How quickly do we notify them of an incident?</li>
          <li>Assignment rights: Can we sell the company without their approval?</li>
        </ul>
        <p><strong>What We Conceded:</strong></p>
        <ul>
          <li>AI feature opt-out (no AI processing on loan documents)</li>
          <li>Customer data ownership (they own all contracts; we only process them)</li>
          <li>Notification timelines (changed from &quot;immediately&quot; to &quot;reasonable time&quot;)</li>
          <li>Insurance requirements (negotiated coverage amounts)</li>
        </ul>
        <p><strong>What We Held Firm On:</strong></p>
        <ul>
          <li>Assignment rights (we can assign on change of control, merger, or to affiliates)</li>
          <li>Service level commitments (provided historical uptime data, not hard SLAs)</li>
          <li>Data use language (we can use data to maintain and support services, with opt-outs available)</li>
        </ul>
        <div className="insight"><p>Legal negotiations are not about winning. They are about building a contract both sides can live with.</p></div>

        <div className="divider"></div>

        <h3>The Silence: When Everything Paused</h3>
        <p>With legal and compliance negotiations underway, things went quiet. There were still occasional check-ins, but momentum felt off.</p>
        <p><strong>What Was Happening Behind the Scenes:</strong></p>
        <ul>
          <li>Legal and compliance teams were in full negotiation mode</li>
          <li>The board briefing process was moving more slowly than expected</li>
          <li>Internal stakeholders across different departments had different concerns</li>
        </ul>
        <p><strong>Our Response:</strong></p>
        <p>We had two choices: push harder and demand timelines, or trust the relationship and give them space. We chose the latter.</p>
        <p>Our CEO put it simply: &quot;Let us look at this long-term instead of just meeting our quarterly goals.&quot;</p>
        <div className="insight"><p>That mindset shift changed everything. Instead of treating this as a Q3 close, we treated it as building a long-term partnership with a bank that would use us for years.</p></div>

        <div className="divider"></div>

        <h3>Breaking the Silence: The Board Presentation</h3>
        <p>Our CEO followed up directly with the President. The response revealed what was actually happening: the President needed to present Signeasy to the board before any contract could move forward.</p>
        <p>With help from our marketing team, we built a comprehensive deck to address every board-level concern:</p>
        <ul>
          <li>Vendor stability: 15 years in market, 10M+ users, 150+ countries</li>
          <li>Cost savings: Quantified $70K+ savings over 3 years</li>
          <li>Technical fit: Engineering validation results</li>
          <li>Risk mitigation: Phased implementation approach</li>
          <li>Regulatory compliance: SOC 2 certification, uptime data, insurance coverage</li>
        </ul>
        <p>VP Digital and the President presented this to the board. We then got on a call together to walk through questions.</p>
        <p>And that is when the real curveball arrived.</p>

        <div className="divider"></div>

        <h3>The Incumbent Lock-In: What the Board Call Revealed</h3>
        <p>On that same call, a critical detail surfaced that changed the entire deal structure.</p>
        <p>We cannot exit the incumbent early. We needed to give 74 days notice, and we missed that deadline.</p>
        <p><strong>What This Meant:</strong></p>
        <ul>
          <li>The incumbent contract extended into 2026</li>
          <li>They could not immediately switch off the old system</li>
          <li>Options: pay an early-termination penalty, or negotiate envelope credits</li>
        </ul>
        <p>They went back to the incumbent and secured 9 months of envelope credits. Instead of paying a termination fee, they received 9 months of continued usage on the old system. This meant they could begin integrating Signeasy without paying for two platforms simultaneously during the transition.</p>
        <p><strong>Impact on the Deal:</strong></p>
        <ul>
          <li>Go-live had to be delayed until incumbent credits were consumed</li>
          <li>Implementation timeline shifted significantly</li>
          <li>Payment structure needed a complete rethink</li>
          <li>Q4 2025 deployment was no longer possible</li>
        </ul>
        <p>But the board had seen the deck. They understood the value. Walking away was not on the table.</p>

        <div className="divider"></div>

        <h2>Part 3: The Hardest Part</h2>
        <h3>November - December 2025: Re-Scoping, Final Negotiations, and the Midnight Signature</h3>

        <h3>Re-Scoping the Deal: Making It Work</h3>
        <p>With the incumbent lock-in confirmed, we had to completely restructure how the deal was priced and phased.</p>
        <p><strong>Original Plan:</strong> Sign in Q3, implement in Q3/Q4, go live October 2025</p>
        <p><strong>New Reality:</strong></p>
        <ul>
          <li>Transition could not begin until Q2 2026</li>
          <li>Signeasy implementation could not start until Q2 2026</li>
          <li>First live loan documents would not flow through Signeasy until Q3 2026</li>
        </ul>
        <p><strong>The Problem:</strong> How do you charge for a platform no one is using for 6 months?</p>
        <p><strong>The Solution:</strong></p>
        <ul>
          <li>Lock in pricing now (December 2025)</li>
          <li>Customer pays an implementation fee upfront</li>
          <li>Usage-based billing starts when they actually go live (Q3 2026)</li>
          <li>Billing tied to envelope credits transferred from the incumbent (50% of credits by end of Q2 2026)</li>
        </ul>
        <div className="insight"><p>This structure worked for everyone: Signeasy got a signed contract and a locked-in commitment; the customer did not pay for an unused platform; and finance could justify the spend because it was tied to actual usage milestones.</p></div>

        <div className="divider"></div>

        <h3>The Revised Timeline</h3>
        <div style={{overflowX:'auto',margin:'1.5rem 0'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'14px',fontFamily:'system-ui'}}>
            <thead>
              <tr style={{borderBottom:'2px solid var(--accent-tint)',background:'var(--bg-panel)'}}>
                <th style={{padding:'10px 14px',textAlign:'left',color:'var(--accent)',fontWeight:600}}>Date</th>
                <th style={{padding:'10px 14px',textAlign:'left',color:'var(--accent)',fontWeight:600}}>Milestone</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom:'1px solid var(--border)'}}>
                <td style={{padding:'10px 14px',color:'var(--accent)',fontWeight:500}}>December 2025</td>
                <td style={{padding:'10px 14px',color:'var(--muted)'}}>Sign contract and pay implementation fee</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)',background:'var(--bg-panel)'}}>
                <td style={{padding:'10px 14px',color:'var(--accent)',fontWeight:500}}>Q1 2026</td>
                <td style={{padding:'10px 14px',color:'var(--muted)'}}>Engineering integration begins</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)'}}>
                <td style={{padding:'10px 14px',color:'var(--accent)',fontWeight:500}}>Q2 2026</td>
                <td style={{padding:'10px 14px',color:'var(--muted)'}}>Usage-based billing starts (50% of envelope volume)</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)',background:'var(--bg-panel)'}}>
                <td style={{padding:'10px 14px',color:'var(--accent)',fontWeight:500}}>Q3 2026</td>
                <td style={{padding:'10px 14px',color:'var(--muted)'}}>Full volume goes live</td>
              </tr>
              <tr>
                <td style={{padding:'10px 14px',color:'var(--accent)',fontWeight:500}}>Jan 2027</td>
                <td style={{padding:'10px 14px',color:'var(--muted)'}}>Year 2 full pricing begins</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="divider"></div>

        <h3>The Moment: December 31st, 2025, 10 PM, Bangkok</h3>
        <p>Throughout this entire 6-month process, VP Digital had never once picked up the phone. Every update, every decision, every question came through Slack and email.</p>
        <p>On December 31st, we sent over a revised order form. It was 10 PM in Bangkok.</p>
        <p>And then the phone rang.</p>
        <p>It was VP Digital.</p>
        <p>She had questions. We talked through the final details. And by the end of that call, the order form was signed.</p>
        <p>No fanfare. No video conference. Just a late-night phone call that broke six months of email-only communication, and closed the deal.</p>
        <p>$70K in value locked in. Deal done.</p>

        <div className="divider"></div>

        <h2>Learnings That Stuck</h2>

        <h3>Learning 1: The Real Pain Is Not What They Tell You</h3>
        <p>Here is what customers say when you ask why they want to switch vendors:</p>
        <ul>
          <li>&quot;We need to reduce costs&quot;</li>
          <li>&quot;The platform is missing features&quot;</li>
          <li>&quot;Looking for better support&quot;</li>
        </ul>
        <p>None of these are the real pain.</p>
        <p>The real pain: every month, our banking customer paid for 8,000 documents that did not turn into revenue. That was real, quantifiable, and visible in the P&amp;L.</p>
        <div className="insight"><p>Do not accept surface-level answers. Dig deeper. Ask: how does this affect your business? What happens if you do not solve this? Who feels this pain every day? What does success look like, measured in dollars?</p></div>

        <div className="divider"></div>

        <h3>Learning 2: Speed Is a Competitive Advantage</h3>
        <p>When asked what the deciding factor was in choosing to work with us on the POC, VP Digital&apos;s answer was simple: &quot;Your response time.&quot;</p>
        <p>Not our features. Not our pricing. Not even our product.</p>
        <p>We responded to emails within hours. We showed up ready to problem-solve. We did not make her wait.</p>
        <div className="insight"><p>In complex deals, speed creates trust, and trust moves deals forward.</p></div>

        <div className="divider"></div>

        <h3>Learning 3: Courage Is Underrated</h3>
        <p>Cold outreach to the President of the Digital Division was bold. No warm introduction. Just: here is the problem you have, here is how we solve it, let us talk.</p>
        <p>And then showing up in person.</p>
        <p>Most vendors send an email. Some send a follow-up. Our CEO showed up at their office.</p>
        <div className="insight"><p>In enterprise sales, you have to be willing to take risks. Cold outreach to executives works when you understand their pain, have a real solution, demonstrate commitment, and deliver value in the conversation.</p></div>

        <div className="divider"></div>

        <h3>Learning 4: It Takes a Village</h3>
        <p>This deal involved the entire organisation:</p>
        <ul>
          <li><strong>Sales:</strong> Discovery, champion identification, deal management</li>
          <li><strong>Product and Engineering:</strong> Technical validation, POC, API support</li>
          <li><strong>Marketing:</strong> Built the board presentation deck</li>
          <li><strong>Legal:</strong> Negotiated contract terms, managed compliance</li>
          <li><strong>CEO:</strong> Executive relationship-building and credibility</li>
          <li><strong>CS and Implementation:</strong> Committed to the delivery timeline</li>
        </ul>
        <div className="insight"><p>A single salesperson could not have closed this alone. In complex deals, mobilise your entire organisation.</p></div>

        <div className="divider"></div>

        <h3>Learning 5: You Have to Speak Legal Language</h3>
        <p>Legal concepts like limitations of liability, indemnification, breach notification, and opt-out clauses directly affect deal terms. If you do not understand what you are agreeing to, you might lock yourself into impossible commitments.</p>
        <div className="insight"><p>Salespeople do not need to become lawyers. But they need to understand: what are we liable for? What are our obligations? Where should we push back vs. concede?</p></div>

        <div className="divider"></div>

        <h3>Learning 6: Long-Term Mindset Changes Everything</h3>
        <p>When we shifted from &quot;close by Q3&quot; to &quot;build a long-term partnership,&quot; everything changed. We could accommodate timeline delays. We could focus on their success, not our quota. We could negotiate in good faith.</p>
        <div className="insight"><p>Most enterprise deals are won by thinking in years, not quarters. Paradoxically, thinking long-term often makes deals close faster, because both sides know you are serious.</p></div>

        <div className="divider"></div>

        <h2>What This Means for Your Sales Process</h2>

        <h3>The Framework: Two Distinct Processes</h3>
        <p><strong>Process 1: Sales Assist (Simple Deals)</strong></p>
        <ul>
          <li>Quick evaluation (1 to 2 weeks)</li>
          <li>Single stakeholder</li>
          <li>Standard terms</li>
          <li>Fast to implement</li>
        </ul>
        <p><strong>Process 2: Complex Deal (P1 Deals)</strong></p>
        <ul>
          <li>Extended discovery (4+ weeks)</li>
          <li>Multiple stakeholders</li>
          <li>Custom terms, longer implementation</li>
          <li>Requires executive engagement, legal review, and compliance sign-off</li>
        </ul>

        <h3>The Checklist: Is This a P1 Deal?</h3>
        <p>Answer YES to 3 or more of the following, and treat it like a P1 deal:</p>
        <ul>
          <li>Is this API-heavy and volume-based?</li>
          <li>Is it mission-critical to how the customer operates?</li>
          <li>Does it require IT and technical team involvement?</li>
          <li>Does it need legal and compliance review?</li>
          <li>Is the deal size above $10K for SaaS or above $50K for API?</li>
          <li>Will multiple stakeholders need to approve?</li>
          <li>Is there regulatory complexity (FDIC, HIPAA, SOC 2)?</li>
        </ul>
        <p>P1 deals require more sales time upfront, product and technical team involvement early, a 4 to 6 month sales cycle minimum, executive engagement for credibility, preparation for legal negotiation, and custom deal structures.</p>

        <div className="divider"></div>

        <div className="closing">
          <p>December 31st, 2025. 10 PM. Bangkok. A deal that started as an inbound inquiry in July, closed on a late-night phone call from a hotel room.</p>
          <p>It was not the most efficient sales cycle. It was not the shortest. But it was the most right deal we could have closed.</p>
          <p>The customer got what they needed: a cost-effective, modern platform that aligns vendor costs with actual business outcomes. We got what we needed: a long-term partnership with a high-profile customer that will generate substantial revenue for years.</p>
          <p>Not every deal needs to close in 30 days. Some deals need time. They need trust. They need the entire organisation aligned behind them. Those are the deals that stick.</p>
        </div>

      </div>
      </Container>
    </>
  );
}
