export interface RoleManager {
  name: string;
  linkedIn: string;
  title: string;
}

export interface Role {
  title: string;
  startDate: string; // "YYYY-MM"
  endDate: string;   // "YYYY-MM" or "present"
  periodLabel: string;
  manager?: RoleManager;
  accent?: boolean;
  bullets: string[];
}

export interface Company {
  name: string;
  dates: string;
  tag?: { label: string; color: string };
  tagline?: string;
  logoSrc?: string;
  logoAlt?: string;
  roles: Role[];
}

export const experience: Company[] = [
  {
    name: 'Signeasy',
    dates: 'May 2025 - Present',
    tag: { label: 'CURRENT', color: 'green' },
    tagline: 'AI-powered contract management platform',
    logoSrc: 'https://www.google.com/s2/favicons?domain=signeasy.com&sz=32',
    logoAlt: 'Signeasy',
    roles: [
      {
        title: 'Head - Sales and Customer Success',
        startDate: '2026-04',
        endDate: 'present',
        periodLabel: 'April 2026 - Present',
        accent: true,
        bullets: [
          'Promoted to Head of Sales and Customer Success in April 2026, now leading both Sales and CS functions',
          'Focusing on expansion, improving retention, and building Outbound alongside Sales',
        ],
      },
      {
        title: 'Senior Manager - Sales',
        startDate: '2025-05',
        endDate: '2026-04',
        periodLabel: 'May 2025 - April 2026',
        bullets: [
          'Grew logo acquisition from 15 per quarter in Q2 2025 to 64 per quarter in Q1 2026',
          'Improved Lead to Opportunity conversion from 20% to 45% by defining clear sales processes and sharper deal qualification',
          'Improved Opportunity to Close rate from 25% to 45% through better execution quality and applying Sandler for Mid-Market deals',
          'Independently closed a $70K Banking customer in the US through a 6-month sales cycle',
          'Built sales processes around SMB Sales Assist and Mid Market deals through Sandler implementation',
          'Hired Founding BDR and set up initial Outbound process. Impact: created $50K outbound pipeline in Q1 2026 and closed $10K of that pipeline',
        ],
      },
    ],
  },
  {
    name: 'Hevo Data',
    dates: 'May 2021 - Dec 2024',
    tag: { label: '1 Promotion', color: 'gray' },
    tagline: 'Cloud ETL / Data Integration - $1M-$10M ARR journey',
    logoSrc: 'https://www.google.com/s2/favicons?domain=hevodata.com&sz=32',
    logoAlt: 'Hevo Data',
    roles: [
      {
        title: 'Mid-Market Sales - EMEA and APAC',
        startDate: '2023-08',
        endDate: '2024-12',
        periodLabel: 'Aug 2023 - Dec 2024',
        manager: {
          name: 'Daniel Niemann',
          linkedIn: 'https://www.linkedin.com/in/daniel-niemann-6b20621/',
          title: 'CRO',
        },
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
        startDate: '2022-07',
        endDate: '2023-08',
        periodLabel: 'Jul 2022 - Aug 2023',
        manager: {
          name: 'Manish Jethani',
          linkedIn: 'https://www.linkedin.com/in/manishjethani/',
          title: 'CEO',
        },
        bullets: [
          'Took on account management and expansion as the next big problem after scaling SMB Sales Motion',
          'Biggest ARR expansion: scaled the fastest-growing quick commerce company in India from $10K to $150K ARR through account planning, executive relationships, and identifying whitespaces',
          'Started with 1 AM, hired 6 AMs to handle a total account book of $5mn+',
          'Built playbook from scratch including account segmentation, geo alignment, QBRs, and adoption',
        ],
      },
      {
        title: 'SMB Sales Lead - Europe',
        startDate: '2021-05',
        endDate: '2022-07',
        periodLabel: 'May 2021 - Jul 2022',
        manager: {
          name: 'Manish Jethani',
          linkedIn: 'https://www.linkedin.com/in/manishjethani/',
          title: 'CEO',
        },
        bullets: [
          'Scaled average logos per month from 8 to 18, delivering $92K ARR in EMEA',
          'Learned the ropes of hiring and doubled the team from 10 to 20 across all regions',
          'Scaled Sales Ops on Inbound. Defined segmentation based on trial and product signals',
          'Built high velocity sales system to measure Trial -> Pipeline Activation -> Conversation Established -> Deal -> Close',
          'Measured each step of the funnel',
        ],
      },
    ],
  },
  {
    name: 'o9 Solutions',
    dates: 'Sep 2018 - May 2021',
    tag: { label: '1 Promotion', color: 'gray' },
    tagline: 'KKR-backed SaaS unicorn - Supply Chain Planning',
    logoSrc: 'https://www.google.com/s2/favicons?domain=o9solutions.com&sz=32',
    logoAlt: 'o9 Solutions',
    roles: [
      {
        title: 'Team Lead, Business Development',
        startDate: '2020-01',
        endDate: '2021-05',
        periodLabel: '2020 - 2021',
        manager: {
          name: 'Stephan De Barse',
          linkedIn: 'https://www.linkedin.com/in/stephandebarse-driving-digital-transformation/',
          title: 'Global EVP',
        },
        accent: true,
        bullets: [
          'Increased team SQLs from 20 to 80+ per quarter for enterprise companies with revenue above $1bn',
          'Built $2mn+ enterprise pipeline per quarter through those SQLs (avg ACV $100K-$300K)',
          'Activated partner ecosystems in APAC: GCP, TCS, McKinsey, Deloitte, BCG',
        ],
      },
      {
        title: 'Business Development Manager',
        startDate: '2018-09',
        endDate: '2020-01',
        periodLabel: '2018 - 2020',
        bullets: [
          'Started as an individual contributor. Built outbound pipeline for enterprise supply chain SaaS in EMEA and India',
          '8 SQLs per quarter as starting target for first year - achieved 100%+',
        ],
      },
    ],
  },
  {
    name: 'Wipro',
    dates: 'Jun 2015 - Sep 2018',
    tagline: 'Retail and Consumer vertical',
    logoSrc: 'https://www.google.com/s2/favicons?domain=wipro.com&sz=32',
    logoAlt: 'Wipro',
    roles: [
      {
        title: 'Senior Executive, Demand Generation',
        startDate: '2015-06',
        endDate: '2018-09',
        periodLabel: 'Jun 2015 - Sep 2018',
        manager: {
          name: 'Aparna Krishnamurthy',
          linkedIn: 'https://www.linkedin.com/in/aparna-krishnamurthy-3182516/',
          title: 'Head of Demand Generation',
        },
        bullets: [
          'First demand gen hire. Generated $20mn enterprise pipeline via campaigns, B2B summits, and partner activity',
          'Identified and recruited cold calling agencies including Revvpro and Beyond Codes',
        ],
      },
    ],
  },
];

export const notableWins = [
  {
    number: '60+',
    label: 'Logos scaled at Signeasy',
    sub: 'Grew customer base from scratch to 60+ logos in 2 quarters through outbound and inbound motions.',
  },
  {
    number: '$10K to $150K',
    label: 'Account expansion at Hevo',
    sub: "Scaled India's fastest-growing quick commerce company from $10K to $150K ARR working alongside solution engineers.",
  },
  {
    number: '$100K+',
    label: 'Multiple $100K+ deals',
    sub: 'Closed multiple six-figure deals across US, Israel, and Middle East markets at Hevo.',
  },
  {
    number: '10 to 25',
    label: 'Team scaled at Hevo',
    sub: 'Doubled the sales team from 10 to 20 through in-house hiring, working alongside other sales managers in the hiring process.',
  },
];

export const tools: { category: string; items: string[] }[] = [
  { category: 'CRM & Pipeline', items: ['HubSpot', 'Salesforce'] },
  { category: 'Prospecting', items: ['Clay', 'Apollo', 'LinkedIn Sales Nav'] },
  { category: 'Analytics', items: ['Mixpanel', 'HubSpot Reports'] },
  { category: 'AI Tools', items: ['Claude for Sales Projects', 'Whisprflow'] },
];
