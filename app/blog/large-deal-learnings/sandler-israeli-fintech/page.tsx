export default function SandlerIsraeliFintechPage() {
  return (
    <>
      <style>{`
        .prose p { font-size: 15.5px; line-height: 1.78; color: #1a1917; margin-bottom: 0.85rem; }
        .prose h2 { font-family: Georgia, serif; font-size: 1.35rem; font-weight: 400; letter-spacing: -0.01em; color: #1a1917; margin: 2.25rem 0 0.65rem; line-height: 1.3; }
        .prose h3 { font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.09em; color: #9b9890; margin: 1.75rem 0 0.5rem; }
        .divider { height: 1px; background: #e5e3dc; margin: 2.25rem 0; }
        .stag { display: inline-flex; align-items: center; gap: 5px; font-size: 10.5px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; background: #eeedfe; color: #3c3489; border: 1px solid #afa9ec; border-radius: 100px; padding: 3px 10px; margin-bottom: 0.6rem; }
        .onion { background: #f3f2ee; border-radius: 10px; padding: 1rem 1.25rem; margin: 1.25rem 0; border: 1px solid #e5e3dc; }
        .onion-label { font-size: 10.5px; font-weight: 500; letter-spacing: 0.09em; text-transform: uppercase; color: #9b9890; margin-bottom: 0.6rem; }
        .onion-row { display: flex; align-items: flex-start; gap: 12px; padding: 7px 0; border-bottom: 1px solid #e5e3dc; font-size: 14px; }
        .onion-row:last-child { border-bottom: none; padding-bottom: 0; }
        .layer { font-size: 10.5px; font-weight: 500; color: #9b9890; min-width: 52px; padding-top: 2px; text-transform: uppercase; letter-spacing: 0.04em; }
        .onion-txt { color: #1a1917; line-height: 1.55; }
        .insight { border-left: 2px solid #d0cec6; padding: 0.7rem 1.2rem; margin: 1.25rem 0; background: #f3f2ee; border-radius: 0 8px 8px 0; }
        .insight p { margin: 0; font-size: 14.5px; color: #6b6960; line-height: 1.65; }
        .pullquote { font-family: Georgia, serif; font-size: 1.1rem; font-style: italic; line-height: 1.6; color: #1a1917; margin: 2rem 0; padding: 0 1rem; border-left: 2px solid #d0cec6; }
        .prose ul { list-style: none; padding: 0; margin: 0.4rem 0 0.9rem; }
        .prose ul li { padding: 4px 0 4px 18px; position: relative; font-size: 15px; color: #1a1917; line-height: 1.6; }
        .prose ul li::before { content: "→"; position: absolute; left: 0; color: #9b9890; font-size: 12px; top: 6px; }
        .tl { margin: 1.25rem 0; }
        .tl-row { display: grid; grid-template-columns: 100px 1fr 70px; gap: 12px; padding: 9px 0; border-bottom: 1px solid #e5e3dc; align-items: center; font-size: 13.5px; }
        .tl-row:first-child { border-top: 1px solid #e5e3dc; }
        .tl-date { color: #9b9890; font-size: 12.5px; }
        .badge { font-size: 10.5px; font-weight: 500; text-align: center; padding: 3px 8px; border-radius: 100px; background: #eaf3de; color: #27500a; }
        .diagram-wrap { border: 1px solid #e5e3dc; border-radius: 10px; overflow: hidden; margin: 2rem 0; }
        .diagram-label { font-size: 10.5px; font-weight: 500; letter-spacing: 0.09em; text-transform: uppercase; color: #9b9890; padding: 0.65rem 1.25rem; border-bottom: 1px solid #e5e3dc; background: #f3f2ee; }
        .lg { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 1.25rem 0; }
        .lc { background: #f3f2ee; border-radius: 10px; padding: 1rem 1.1rem; border: 1px solid #e5e3dc; }
        .lc .ic { font-size: 16px; color: #9b9890; margin-bottom: 7px; }
        .lc p { font-size: 13.5px; margin: 0; line-height: 1.55; color: #6b6960; }
        .lc strong { display: block; font-size: 14px; font-weight: 500; color: #1a1917; margin-bottom: 3px; }
        .closing { margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid #e5e3dc; font-size: 15px; color: #6b6960; font-style: italic; font-family: Georgia, serif; line-height: 1.7; }
        .article-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #6b6960; margin-bottom: 0.75rem; }
        .article-subtitle { font-size: 1rem; color: #6b6960; margin-bottom: 1.75rem; max-width: 560px; line-height: 1.6; }
        .article-meta { display: flex; flex-wrap: wrap; gap: 1.25rem; font-size: 12.5px; color: #9b9890; padding-bottom: 1.75rem; border-bottom: 1px solid #e5e3dc; margin-bottom: 2rem; }
        .breadcrumb { font-size: 12px; color: #9b9890; margin-bottom: 2rem; display: flex; align-items: center; gap: 6px; }
        .breadcrumb a { color: #6b6960; text-decoration: none; }
        .dth { font-size: 13px; font-weight: 500; fill: #3c3489; }
        .dts { font-size: 11.5px; font-weight: 400; fill: #6b6960; }
        .dthn { font-size: 13px; font-weight: 500; fill: #085041; }
        .dtsn { font-size: 11.5px; font-weight: 400; fill: #085041; }
        .dtr { font-size: 11.5px; font-weight: 400; fill: #1a1917; }
        .dtg { font-size: 13px; font-weight: 500; fill: #1a1917; }
        .dtgm { font-size: 11px; font-weight: 400; fill: #6b6960; }
        @media (max-width: 700px) { .lg { grid-template-columns: 1fr; } .tl-row { grid-template-columns: 90px 1fr 65px; } }
      `}</style>

      <div className="breadcrumb">
        <a href="/">Home</a>
        <span>›</span>
        <a href="/blog/large-deal-learnings">Complex Deals</a>
        <span>›</span>
        <span>Israeli Fintech Unicorn</span>
      </div>

      <div className="article-eyebrow">Complex Deals · Sandler Method</div>

      <h1 style={{fontFamily: `Georgia, serif`, fontSize: `2.1rem`, fontWeight: 400, lineHeight: 1.25, letterSpacing: `-0.02em`, color: `#1a1917`, marginBottom: `0.75rem`, maxWidth: `680px`}}>
        How We Replaced a Top Data Platform at an <em>Israeli Fintech Unicorn</em>
      </h1>

      <p className="article-subtitle">The timing was right, the messaging landed, and the deal taught me more about people than about sales.</p>

      <div className="article-meta">
        <span>Nov 2023</span>
        <span>· Complex Deals</span>
        <span>· 7 min read</span>
        <span>· 5-month deal cycle</span>
      </div>

      <div className="prose">

        <h2>Setting the stage</h2>
        <p>I had never sold to an Israeli startup before. This was the quarter our new CRO joined and I was stepping into the ROW role leading Hevo&apos;s non-US team. Our 30-person sales org had just completed Sandler training.</p>
        <p>This was an older lead an AE had started working on. The timing felt right, and we had sharpened our prospecting message: we had replaced incumbents over 20 times globally, not by undercutting on price but by offering pricing transparency.</p>
        <p>The CTA was not a push. It was a genuine question about whether pricing transparency was becoming a problem as they scaled. That got us in the door.</p>

        <div className="divider"></div>

        <h2>Phase 1: Discovery</h2>
        <h3>First call: right place, right time</h3>
        <div className="stag">Sandler: identifying pain</div>
        <p>The AE&apos;s first call was with a Data Analyst. Sandler pushes you to find the real pain before anything else. The most critical insight was the &quot;why now.&quot;</p>
        <p>Peeling the onion is at the heart of the Sandler approach. You keep asking until you reach the real issue underneath. Here is what that looked like:</p>

        <div className="onion">
          <div className="onion-label">Peeling the onion</div>
          <div className="onion-row"><span className="layer">Layer 1</span><span className="onion-txt">Recent M&amp;A had grown their data volumes 2 to 3x overnight</span></div>
          <div className="onion-row"><span className="layer">Layer 2</span><span className="onion-txt">That meant 2 to 3x the cost with their current vendor</span></div>
          <div className="onion-row"><span className="layer">Layer 3</span><span className="onion-txt">But the cost spike was not the real pain. Support from the incumbent was essentially nonexistent</span></div>
          <div className="onion-row"><span className="layer">Layer 4</span><span className="onion-txt">For the fastest-growing unicorn in Israeli fintech, downtime and poor SLAs were an existential risk, not just an inconvenience</span></div>
        </div>

        <div className="insight">
          <p>Instead of rushing to a demo, the AE restated the use-case, flagged the technical complexity around PROD and QA environments, and set one clear next step: a technical alignment call before any decision. No pressure. That discipline is the up-front contract in action.</p>
        </div>

        <h3>What we knew, and what we did not</h3>
        <p>After the first call we had the contract range with the incumbent, renewal dates, and a clear &quot;why now.&quot;</p>
        <p>What we still lacked was a picture of the buying process and who would make the final call. Sandler taught us to name that gap rather than assume it would resolve itself.</p>

        <div className="divider"></div>

        <h2>Phase 2: Technical alignment and the joint action plan</h2>
        <div className="stag">Sandler: up-front contract</div>
        <p>The Sandler training pushed us toward more role-play before the next call. From that came a proactive Joint Action Plan with timelines, a way to create shared accountability before gaps became problems.</p>

        <div className="insight">
          <p>Before Sandler we would never have built a joint action plan. After it, we understood it belongs to both parties. If sections were blank, we filled them in together mid-meeting, and that co-building was often where the real discovery happened.</p>
        </div>

        <p>The second call was largely technical.</p>
        <ul>
          <li>Connecting their account and validating connectors</li>
          <li>Setting up a REST API and MySQL databases for non-native sources</li>
          <li>Audience: two people plus Data Engineering who would run the POC</li>
        </ul>
        <p>With time remaining, we pivoted: &quot;Both our teams are investing significant effort. Can we align at the executive level before we go further?&quot; Two days later, we had a call with the Head of Data.</p>

        <div className="divider"></div>

        <h2>Phase 3: The exec call that changed everything</h2>
        <div className="stag">Sandler: pain and decision</div>
        <p>We walked in with a deck built from role-play: technical use-case and business use-case side by side. Three things became clear:</p>
        <ul>
          <li>He was the project sponsor. This had to succeed on his watch.</li>
          <li>The incumbent&apos;s real problem was structural: charging for historical data imports, not just new events. Real-time pipelines added another 2 to 3x cost on top.</li>
          <li>This was a cross-border payment settlement company. Real-time replication under 10 minutes was required for reconciliation, not optional.</li>
        </ul>

        <div className="pullquote">&quot;Understanding why they needed real-time replication, to reconcile cross-border settlements, made it impossible to treat this as just a data pipeline sale.&quot;</div>

        <p>We also understood that because support was nonexistent with the incumbent, accountability on SLAs became a selling point, not just a line item.</p>

        <h3>Mapping the decision process</h3>
        <div className="stag">Sandler: decision</div>
        <p>Israelis are tough negotiators. They were running their own version of Sandler back at us.</p>
        <p>Every budget question hit a wall. But we got the buying flow confirmed:</p>
        <ul>
          <li>Trial goes well, then a pricing discussion with the Head of Data</li>
          <li>Price aligned, then CEO sign-off</li>
          <li>Hard deadline: three months before dual-vendor transition cost kicked in</li>
        </ul>
        <p>The clock was running. That urgency kept momentum without us ever having to push.</p>

        <div className="divider"></div>

        <h2>Phase 4: Pricing, support and negotiation</h2>
        <div className="stag">Sandler: fulfillment</div>
        <p>This was the first deal at Hevo where we sold Platinum Support at $25K per year.</p>
        <p>Given these were production pipelines requiring real-time performance, a sub-one-hour SLA was non-negotiable. It became the proof point that we were not just cheaper, we were more accountable.</p>
        <p>The Head of Data negotiated hard across two more rounds. In parallel, legal and compliance ran their course: data residency, encryption, liability, about a week.</p>

        <div className="divider"></div>

        <h2>Phase 5: WhatsApp, rapport and the hidden anxiety</h2>
        <div className="stag">Sandler: post-sell</div>
        <p>Here is the part most people leave out.</p>
        <p>Early in the deal, I asked the Head of Data directly: email or WhatsApp? He said WhatsApp.</p>
        <p>By the time we reached pricing and compliance, we had exchanged over 100 messages and multiple voice notes. He could reach me any time, and he did.</p>
        <p>Then the decision started stalling. He began asking questions about Hevo&apos;s revenue, runway and investors, things that had nothing to do with the product.</p>

        <div className="insight">
          <p>That was the moment it clicked. The anxiety was not about price. It was about moving from a large, established vendor to a smaller challenger. The fear of downside risk was holding up a decision that was technically and commercially sound. This is the post-sell blind spot: addressing buyer&apos;s remorse before it sets in. We had missed it early and paid for it with stalled momentum late in the deal.</p>
        </div>

        <p>We moved quickly. Our CRO wrote directly to their CEO.</p>
        <p>In November 2023, the Head of Data called me on WhatsApp. We addressed everything head-on: runway, investors, the customers we already worked with. He asked for a write-up he could take back to his CEO. The deal moved.</p>

        <div className="divider"></div>

        <h2>Joint action plan</h2>
        <div className="tl">
          <div className="tl-row"><span className="tl-date">20 Jun 2023</span><span>Discovery</span><span className="badge">Done</span></div>
          <div className="tl-row"><span className="tl-date">25 Jun 2023</span><span>Technical alignment</span><span className="badge">Done</span></div>
          <div className="tl-row"><span className="tl-date">28 Jun 2023</span><span>Exec alignment</span><span className="badge">Done</span></div>
          <div className="tl-row"><span className="tl-date">29 Jun 2023</span><span>POC start</span><span className="badge">Done</span></div>
          <div className="tl-row"><span className="tl-date">5 Jul 2023</span><span>Mid-POC check-in</span><span className="badge">Done</span></div>
          <div className="tl-row"><span className="tl-date">Sep 2023</span><span>Budget alignment</span><span className="badge">Done</span></div>
          <div className="tl-row"><span className="tl-date">Oct 2023</span><span>Legal and compliance</span><span className="badge">Done</span></div>
          <div className="tl-row"><span className="tl-date">Nov 2023</span><span>Go live</span><span className="badge">Done</span></div>
        </div>

        <div className="divider"></div>

        <h2>How Sandler mapped to every phase</h2>
        <p>Looking back, every step traces directly to the Sandler methodology, even when we did not realise it in the moment.</p>

        <div className="diagram-wrap">
          <div className="diagram-label">Sandler methodology vs this deal</div>
          <svg width="100%" viewBox="0 0 680 860" role="img" xmlns="http://www.w3.org/2000/svg">
            <title>Sandler methodology mapped to the Israeli fintech deal</title>
            <defs>
              <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="#9b9890" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </marker>
            </defs>
            <rect x="40" y="24" width="234" height="34" rx="6" fill="none" stroke="#d0cec6" strokeWidth="0.5"/>
            <text className="dtg" x="157" y="47" textAnchor="middle" dominantBaseline="central">Sandler step</text>
            <rect x="290" y="24" width="350" height="34" rx="6" fill="none" stroke="#d0cec6" strokeWidth="0.5"/>
            <text className="dtg" x="465" y="47" textAnchor="middle" dominantBaseline="central">What happened in the deal</text>
            <line x1="280" y1="24" x2="280" y2="840" stroke="#e5e3dc" strokeWidth="0.5" strokeDasharray="4 4"/>
            <rect x="40" y="80" width="234" height="56" rx="8" fill="#eeedfe" stroke="#afa9ec" strokeWidth="0.5"/>
            <text className="dth" x="157" y="101" textAnchor="middle" dominantBaseline="central">1. Pain identification</text>
            <text className="dts" x="157" y="121" textAnchor="middle" dominantBaseline="central">Surface the real problem</text>
            <rect x="290" y="80" width="350" height="56" rx="8" fill="none" stroke="#e5e3dc" strokeWidth="0.5"/>
            <text className="dtr" x="302" y="100" dominantBaseline="central">M&amp;A tripled volumes. Peeled the onion</text>
            <text className="dtr" x="302" y="118" dominantBaseline="central">to find the real pain: nonexistent support.</text>
            <line x1="157" y1="136" x2="157" y2="156" stroke="#9b9890" strokeWidth="1" markerEnd="url(#arr)"/>
            <rect x="40" y="156" width="234" height="56" rx="8" fill="#eeedfe" stroke="#afa9ec" strokeWidth="0.5"/>
            <text className="dth" x="157" y="177" textAnchor="middle" dominantBaseline="central">2. Up-front contract</text>
            <text className="dts" x="157" y="197" textAnchor="middle" dominantBaseline="central">Agree on clear next steps</text>
            <rect x="290" y="156" width="350" height="56" rx="8" fill="none" stroke="#e5e3dc" strokeWidth="0.5"/>
            <text className="dtr" x="302" y="176" dominantBaseline="central">&quot;Technical alignment before you decide.&quot;</text>
            <text className="dtr" x="302" y="196" dominantBaseline="central">Joint action plan built together.</text>
            <line x1="157" y1="212" x2="157" y2="232" stroke="#9b9890" strokeWidth="1" markerEnd="url(#arr)"/>
            <rect x="40" y="232" width="234" height="56" rx="8" fill="#eeedfe" stroke="#afa9ec" strokeWidth="0.5"/>
            <text className="dth" x="157" y="253" textAnchor="middle" dominantBaseline="central">3. Deeper pain</text>
            <text className="dts" x="157" y="273" textAnchor="middle" dominantBaseline="central">Business impact of the pain</text>
            <rect x="290" y="232" width="350" height="80" rx="8" fill="none" stroke="#e5e3dc" strokeWidth="0.5"/>
            <text className="dtr" x="302" y="252" dominantBaseline="central">Charged for historical imports and real-time</text>
            <text className="dtr" x="302" y="270" dominantBaseline="central">penalty. Cross-border settlements needed</text>
            <text className="dtr" x="302" y="288" dominantBaseline="central">sub-10-min replication. Head of Data is</text>
            <text className="dtr" x="302" y="306" dominantBaseline="central">sponsor - his reputation on the line.</text>
            <line x1="157" y1="288" x2="157" y2="336" stroke="#9b9890" strokeWidth="1" markerEnd="url(#arr)"/>
            <rect x="40" y="336" width="234" height="56" rx="8" fill="#eeedfe" stroke="#afa9ec" strokeWidth="0.5"/>
            <text className="dth" x="157" y="357" textAnchor="middle" dominantBaseline="central">4. Budget</text>
            <text className="dts" x="157" y="377" textAnchor="middle" dominantBaseline="central">Qualify investment capacity</text>
            <rect x="290" y="336" width="350" height="56" rx="8" fill="none" stroke="#e5e3dc" strokeWidth="0.5"/>
            <text className="dtr" x="302" y="356" dominantBaseline="central">Every direct ask deflected. Led with cost</text>
            <text className="dtr" x="302" y="374" dominantBaseline="central">savings and support value as the anchor.</text>
            <line x1="157" y1="392" x2="157" y2="412" stroke="#9b9890" strokeWidth="1" markerEnd="url(#arr)"/>
            <rect x="40" y="412" width="234" height="56" rx="8" fill="#eeedfe" stroke="#afa9ec" strokeWidth="0.5"/>
            <text className="dth" x="157" y="433" textAnchor="middle" dominantBaseline="central">5. Decision process</text>
            <text className="dts" x="157" y="453" textAnchor="middle" dominantBaseline="central">Map who decides and how</text>
            <rect x="290" y="412" width="350" height="68" rx="8" fill="none" stroke="#e5e3dc" strokeWidth="0.5"/>
            <text className="dtr" x="302" y="432" dominantBaseline="central">Trial, then pricing, then CEO sign-off.</text>
            <text className="dtr" x="302" y="450" dominantBaseline="central">Hard 3-month deadline before dual-vendor</text>
            <text className="dtr" x="302" y="468" dominantBaseline="central">cost kicked in. Urgency was real.</text>
            <line x1="157" y1="468" x2="157" y2="504" stroke="#9b9890" strokeWidth="1" markerEnd="url(#arr)"/>
            <rect x="40" y="504" width="234" height="56" rx="8" fill="#e1f5ee" stroke="#5dcaa5" strokeWidth="0.5"/>
            <text className="dthn" x="157" y="525" textAnchor="middle" dominantBaseline="central">6. Fulfillment</text>
            <text className="dtsn" x="157" y="545" textAnchor="middle" dominantBaseline="central">Demonstrate you solve the pain</text>
            <rect x="290" y="504" width="350" height="56" rx="8" fill="none" stroke="#e5e3dc" strokeWidth="0.5"/>
            <text className="dtr" x="302" y="524" dominantBaseline="central">POC across QA and PROD, US and EU.</text>
            <text className="dtr" x="302" y="542" dominantBaseline="central">Platinum Support as proof of accountability.</text>
            <line x1="157" y1="560" x2="157" y2="580" stroke="#9b9890" strokeWidth="1" markerEnd="url(#arr)"/>
            <rect x="40" y="580" width="234" height="56" rx="8" fill="#e1f5ee" stroke="#5dcaa5" strokeWidth="0.5"/>
            <text className="dthn" x="157" y="601" textAnchor="middle" dominantBaseline="central">7. Post-sell</text>
            <text className="dtsn" x="157" y="621" textAnchor="middle" dominantBaseline="central">Prevent buyer&apos;s remorse</text>
            <rect x="290" y="580" width="350" height="68" rx="8" fill="none" stroke="#e5e3dc" strokeWidth="0.5"/>
            <text className="dtr" x="302" y="600" dominantBaseline="central">Vendor-size anxiety surfaced in Oct 2023.</text>
            <text className="dtr" x="302" y="618" dominantBaseline="central">CRO wrote to CEO. Runway and investors</text>
            <text className="dtr" x="302" y="636" dominantBaseline="central">addressed. Closed November 2023.</text>
            <rect x="40" y="682" width="600" height="44" rx="8" fill="#e1f5ee" stroke="#5dcaa5" strokeWidth="0.5"/>
            <text className="dthn" x="340" y="699" textAnchor="middle" dominantBaseline="central">Closed November 2023 · Israeli fintech unicorn · Cross-border payments</text>
            <text className="dtsn" x="340" y="717" textAnchor="middle" dominantBaseline="central">5-month deal cycle · Platinum Support included · Jun to Nov 2023</text>
            <rect x="40" y="754" width="600" height="68" rx="8" fill="none" stroke="#d0cec6" strokeWidth="0.5"/>
            <text className="dtg" x="56" y="777" dominantBaseline="central">What Sandler did not script - but the deal needed</text>
            <text className="dtgm" x="56" y="797" dominantBaseline="central">Joint action plan built proactively · WhatsApp as the primary channel</text>
            <text className="dtgm" x="56" y="815" dominantBaseline="central">Addressing vendor-size anxiety · CRO escalation at the right moment</text>
          </svg>
        </div>

        <div className="divider"></div>

        <h2>Learnings</h2>
        <div className="lg">
          <div className="lc">
            <div className="ic">↓</div>
            <strong>Peel the onion</strong>
            <p>The stated problem is rarely the real one. Keep asking until you reach the layer that actually matters to their business.</p>
          </div>
          <div className="lc">
            <div className="ic">✓</div>
            <strong>Joint action plan is shared ownership</strong>
            <p>Building it together mid-meeting creates commitment from both sides, not a one-sided vendor checklist.</p>
          </div>
          <div className="lc">
            <div className="ic">↗</div>
            <strong>Informal channels build real trust</strong>
            <p>Over 100 WhatsApp messages meant every concern surfaced fast and was addressed fast. Formal channels would have added days.</p>
          </div>
          <div className="lc">
            <div className="ic">○</div>
            <strong>Address the anxiety, not the price</strong>
            <p>When a deal stalls late, the problem is rarely commercial. Find the emotional risk your buyer is carrying and address that.</p>
          </div>
        </div>

        <div className="closing">
          <p>If you apply yourself and treat each conversation as something that can turn the deal, practise it, believe you can win, the method follows. The deal closed in November 2023. I was on a WhatsApp voice note with the Head of Data when it did.</p>
        </div>

      </div>
    </>
  );
}
