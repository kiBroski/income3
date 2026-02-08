import { Job } from './types';

export const CAREER_GUIDE_TEXT = `
Section 2 — The Definitive Top 100 Online Jobs
Tier 1 — ELITE ($8K–$50K+/month potential)
AI/Machine Learning Engineer... [Full text context for AI]
... (Includes all sections from user input for the AI Model Context) ...
Section 7 — Decision Engine
...
Section 8 — The Top 10 Most Intelligent Paths for 2026
...
Section 9 — Example Career Blueprints
...
Section 10 — Predictions Most Experts Are Missing
`;

export const JOBS: Job[] = [
  {
    id: 'ai-ml-engineer',
    title: 'AI/Machine Learning Engineer',
    tier: 1,
    description: 'Design, train and deploy AI models and algorithms for clients or product teams. Build end-to-end ML systems.',
    incomeRange: { beginner: '$1K–$5K', top: '$30K–$50K+' },
    timeToFirstDollar: 'Weeks',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Statistics'],
    metrics: { aiRisk: 3, longevity: 9, easeOfEntry: 3, barrierToMastery: 9 },
    tags: ['Technical', 'High Income', 'Future-Proof'],
    bestFit: 'Analytical, Technical, Innovative, Systems thinker'
  },
  {
    id: 'blockchain-dev',
    title: 'Blockchain/Smart Contract Developer',
    tier: 1,
    description: 'Develop and audit blockchain-based applications. Write smart contracts for DeFi, NFTs, and enterprise solutions.',
    incomeRange: { beginner: '$1K–$5K', top: '$25K–$50K+' },
    timeToFirstDollar: 'Months',
    skills: ['Solidity', 'Cryptography', 'React', 'Node.js'],
    metrics: { aiRisk: 4, longevity: 7, easeOfEntry: 2, barrierToMastery: 8 },
    tags: ['Crypto', 'Technical', 'High Risk/Reward'],
    bestFit: 'Technical, Analytical, Innovative, Detail-oriented'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Architect',
    tier: 1,
    description: 'Design and implement secure networks. Conduct audits, pentests, and risk assessments.',
    incomeRange: { beginner: '$2K–$7K', top: '$30K–$45K+' },
    timeToFirstDollar: 'Months',
    skills: ['Network Security', 'Encryption', 'Firewalls', 'NIST'],
    metrics: { aiRisk: 2, longevity: 10, easeOfEntry: 3, barrierToMastery: 9 },
    tags: ['Security', 'Stable', 'Corporate'],
    bestFit: 'Analytical, Technical, Detail-oriented, Responsible'
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Solutions Architect / DevOps',
    tier: 1,
    description: 'Design and build scalable cloud infrastructure. Automate deployments and manage cloud services (AWS, Azure, GCP).',
    incomeRange: { beginner: '$2K–$8K', top: '$35K–$50K+' },
    timeToFirstDollar: 'Weeks–Months',
    skills: ['Linux', 'AWS/GCP', 'Docker', 'Kubernetes'],
    metrics: { aiRisk: 3, longevity: 9, easeOfEntry: 4, barrierToMastery: 8 },
    tags: ['Infrastructure', 'Technical', 'Scalable'],
    bestFit: 'Technical, Analytical, Systems thinker, Collaborative'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist / Data Engineer',
    tier: 1,
    description: 'Turn raw data into insights. Perform statistical analyses, build predictive models and visualize results.',
    incomeRange: { beginner: '$1K–$5K', top: '$25K–$40K+' },
    timeToFirstDollar: 'Months',
    skills: ['Python/R', 'SQL', 'Tableau', 'Statistics'],
    metrics: { aiRisk: 4, longevity: 8, easeOfEntry: 4, barrierToMastery: 8 },
    tags: ['Data', 'Math', 'Analytics'],
    bestFit: 'Analytical, Detail-oriented, Creative, Problem-solver'
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Software Developer',
    tier: 1,
    description: 'Build entire applications from front-end to back-end. Turn product ideas into working software.',
    incomeRange: { beginner: '$1K–$5K', top: '$25K–$50K+' },
    timeToFirstDollar: 'Weeks',
    skills: ['React', 'Node.js', 'Databases', 'API Design'],
    metrics: { aiRisk: 5, longevity: 9, easeOfEntry: 5, barrierToMastery: 7 },
    tags: ['Coding', 'Builder', 'Versatile'],
    bestFit: 'Technical, Problem-solver, Collaborative, Systems thinker'
  },
  {
    id: 'ux-ui',
    title: 'Senior UX/UI Designer',
    tier: 1,
    description: 'Design user interfaces and experiences. create wireframes, prototypes, and ensure intuitive designs.',
    incomeRange: { beginner: '$2K–$6K', top: '$20K–$35K+' },
    timeToFirstDollar: 'Weeks',
    skills: ['Figma', 'User Research', 'Prototyping', 'HTML/CSS'],
    metrics: { aiRisk: 3, longevity: 8, easeOfEntry: 5, barrierToMastery: 7 },
    tags: ['Creative', 'Design', 'Visual'],
    bestFit: 'Creative, Empathetic, Analytical, Detail-oriented'
  },
  {
    id: 'growth-marketing',
    title: 'Growth / Performance Marketing',
    tier: 1,
    description: 'Plan and execute data-driven digital marketing campaigns to acquire and retain customers.',
    incomeRange: { beginner: '$1K–$4K', top: '$20K–$40K+' },
    timeToFirstDollar: 'Weeks',
    skills: ['SEO', 'Ads (Google/FB)', 'Analytics', 'A/B Testing'],
    metrics: { aiRisk: 4, longevity: 7, easeOfEntry: 6, barrierToMastery: 7 },
    tags: ['Marketing', 'Business', 'Psychology'],
    bestFit: 'Analytical, Creative, Persuasive, Curious'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce / Amazon Consultant',
    tier: 1,
    description: 'Help brands sell online. Setup stores, optimize listings, and streamline fulfillment.',
    incomeRange: { beginner: '$1K–$5K', top: '$20K–$35K+' },
    timeToFirstDollar: 'Weeks',
    skills: ['Shopify', 'Amazon Seller Central', 'SEO', 'Logistics'],
    metrics: { aiRisk: 3, longevity: 8, easeOfEntry: 5, barrierToMastery: 6 },
    tags: ['Business', 'Sales', 'Retail'],
    bestFit: 'Analytical, Business-minded, Persuasive, Detail-oriented'
  },
  {
    id: 'fintech',
    title: 'FinTech Engineer / Quant Dev',
    tier: 1,
    description: 'Develop financial technology and trading systems. Write trading algorithms and risk models.',
    incomeRange: { beginner: '$2K–$8K', top: '$30K–$50K+' },
    timeToFirstDollar: 'Months',
    skills: ['Python/C++', 'Statistics', 'Financial Markets', 'APIs'],
    metrics: { aiRisk: 5, longevity: 7, easeOfEntry: 3, barrierToMastery: 9 },
    tags: ['Finance', 'Math', 'High Income'],
    bestFit: 'Analytical, Detail-oriented, Quantitative, Risk-aware'
  }
];

export const BLUEPRINTS = [
  {
    title: "Path A — Broke Beginner → $10K/month",
    steps: [
      { time: "0–3 Months", action: "Learn a marketable skill (Web Dev/Copy). Build portfolio." },
      { time: "4–6 Months", action: "Freelance on platforms. Reinvest in advanced courses." },
      { time: "7–12 Months", action: "Specialize niche. Raise rates. Aim for retainers." },
      { time: "Year 2", action: "Direct clients. Bundle services. Hit $10K/mo." }
    ]
  },
  {
    title: "Path B — Skilled Professional → Location Freedom",
    steps: [
      { time: "Pre-Start", action: "Upskill in remote tools and personal branding." },
      { time: "1–3 Months", action: "Freelance part-time. Shift to hybrid work." },
      { time: "4–6 Months", action: "Build online presence. Target USD/EUR clients." },
      { time: "7–12 Months", action: "Quit job. Move to digital nomad hub." }
    ]
  },
  {
    title: "Path C — Builder → One-Person Empire",
    steps: [
      { time: "Year 0", action: "Learn high-demand skill (DevOps/AI). Save capital." },
      { time: "Year 1", action: "Launch as consultant. Invest profits in SaaS/Product." },
      { time: "Year 2", action: "Automate with AI. Hire freelancers for overflow." },
      { time: "Year 3+", action: "Cultivate brand. Expand product lines. Passive income." }
    ]
  }
];
