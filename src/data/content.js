// All copy lives here. Edit once, update everywhere.

export const project = {
  institution: 'EDHEC Global MBA',
  cohort: 'April 2026',
  client: 'AstraZeneca',
  title: 'From 84% Late to Early Action',
  subtitle: 'AI for lung cancer: an Industry Acceleration Project',
  defenseDate: '2026-04-17T09:00:00',
}

export const chapters = [
  { id: 'hero',       path: '/',            label: 'Entry',             number: '00', nav: false },
  { id: 'problem',    path: '/problem',     label: 'The Problem',       number: '01', nav: true,  icon: 'alert' },
  { id: 'market',     path: '/market',      label: 'AZ + Market',       number: '02', nav: true,  icon: 'building' },
  { id: 'strategy',   path: '/strategy',    label: 'Strategy',          number: '03', nav: true,  icon: 'grid' },
  { id: 'solution',   path: '/solution',    label: 'Solution',          number: '04', nav: true,  icon: 'layers' },
  { id: 'financials', path: '/financials',  label: 'Value & Scale', number: '05', nav: true,  icon: 'chart' },
  { id: 'references', path: '/references',  label: 'References',        number: '06', nav: true,  icon: 'shield' },
]

export const hero = {
  tag: 'EDHEC Industry Acceleration Project · 2026',
  headline: ['From 84% Late', 'to Early Action'],
  subhead:
    'AstraZeneca has the drugs, the reach, and the ecosystem. What it needs is the connecting system.',
  cta: 'Explore the Strategy',
  stats: [
    { value: 84, suffix: '%', label: 'lung cancers caught too late' },
    { value: 5, suffix: '×', label: 'survival if caught early' },
    { value: 4, suffix: '', label: 'global markets from one UK proof' },
  ],
}

export const hub = {
  heading: 'The Strategy at a Glance',
  subhead: 'Select any chapter to go deeper.',
  cards: [
    { id: 'problem',      title: 'The Problem',       icon: 'alert',    stat: '84%',       statLabel: 'caught too late',           accent: 'red' },
    { id: 'position',     title: "AZ's Position",     icon: 'building', stat: '$58.7B',    statLabel: 'revenue',                   accent: 'navy' },
    { id: 'blue-ocean',   title: 'The Blue Ocean',    icon: 'waves',    stat: '0',         statLabel: 'companies own the full journey', accent: 'sky' },
    { id: 'architecture', title: 'Architecture',      icon: 'layers',   stat: '4',         statLabel: 'AI layers',                 accent: 'navy' },
    { id: 'numbers',      title: 'The Numbers',       icon: 'chart',    stat: '4',         statLabel: 'markets from UK proof',     accent: 'gold' },
    { id: 'gaps',         title: 'Honest Gaps',       icon: 'shield',   stat: '5',         statLabel: 'gaps we name first',        accent: 'amber' },
  ],
}

export const problem = {
  heading: 'The world\u2019s number one cancer killer',
  stats: [
    { value: 84, suffix: '%', label: 'lung cancers caught at late stage' },
    { value: 20, prefix: '<', suffix: '%', label: 'five-year survival at late stage' },
    { value: 10, prefix: '<', suffix: '%', label: 'of eligible adults get screened' },
  ],
  callout: 'The tools to detect lung cancer early exist. The system to connect them does not.',
  funnel: [
    { stage: 'At Risk',   count: 100, note: '100M eligible adults' },
    { stage: 'Screened',  count: 8,   note: '<10% reached' },
    { stage: 'Diagnosed', count: 5,   note: 'biopsy confirmed' },
    { stage: 'Treatment', count: 4,   note: 'therapy initiated' },
    { stage: 'Survival',  count: 1,   note: '5-yr survival' },
  ],
}

export const position = {
  heading: 'Uniquely positioned. Uniquely responsible.',
  metrics: [
    { value: 58.7, prefix: '$', suffix: 'B',  decimals: 1, label: 'revenue 2023' },
    { value: 25.6, prefix: '$', suffix: 'B',  decimals: 1, label: 'oncology revenue' },
    { value: 197,                  label: 'pipeline projects' },
    { value: 660, suffix: 'K+',    label: 'patients screened' },
  ],
  advantages: [
    { title: 'Largest early-stage lung pipeline',   body: 'ADAURA, AEGEAN, TROPION-Lung12. No competitor matches depth.' },
    { title: 'Lung Ambition Alliance co-founder',   body: 'Founding 2019. AZ convenes the ecosystem others compete in.' },
    { title: '660,000 screened in Thailand',        body: 'CREATE + Qure.ai: largest population AI screening deployment.' },
    { title: 'MELLODDY federated learning',         body: 'Privacy-preserving training across 10 pharma. AZ operated node.' },
    { title: '12,000+ AI Academy certifications',   body: 'Workforce already capable of building what comes next.' },
  ],
  competitors: {
    columns: ['Lung AI Tool', 'Patient Navigation', 'Drug Pipeline', 'Screening Footprint'],
    rows: [
      { name: 'AstraZeneca', values: [true, false, true, true],  highlight: 'self' },
      { name: 'Roche',       values: [true, true,  true, false], highlight: 'threat', note: 'Closest threat' },
      { name: 'J&J',         values: [false, false, true, false] },
      { name: 'Pfizer',      values: [false, false, true, false] },
      { name: 'Eli Lilly',   values: [false, false, true, false] },
      { name: 'GSK',         values: [false, false, true, false] },
    ],
  },
}

export const blueOcean = {
  heading: 'Every layer is crowded, except the one that matters',
  bubbles: [
    { id: 'detection',   label: 'Detection AI',          x: 75, y: 52, r: 48, color: 'navy',   crowd: 'crowded' },
    { id: 'pathology',   label: 'Pathology AI',          x: 63, y: 65, r: 42, color: 'navy',   crowd: 'crowded' },
    { id: 'discovery',   label: 'Drug Discovery AI',     x: 82, y: 80, r: 54, color: 'navy',   crowd: 'crowded' },
    { id: 'journey',     label: 'Journey Coordination',  x: 28, y: 48, r: 62, color: 'empty',  crowd: 'empty space' },
    { id: 'az',          label: 'AstraZeneca',           x: 50, y: 55, r: 46, color: 'red',    crowd: 'moves here' },
  ],
  errc: [
    { quadrant: 'Eliminate', title: 'Overlapping AI discovery partnerships',      tone: 'muted'  },
    { quadrant: 'Reduce',    title: 'Standalone tool investments',               tone: 'muted'  },
    { quadrant: 'Raise',     title: 'Patient navigation infrastructure',         tone: 'sky'    },
    { quadrant: 'Create',    title: 'End-to-end coordination platform',          tone: 'red'    },
  ],
  scenarios: [
    { id: 'A', label: 'Lead',      probability: 30, body: 'AZ moves first in 2026, before Roche or Big Tech define the space.', tone: 'navy'  },
    { id: 'B', label: 'Follow',    probability: 50, body: 'Default path. Another player defines the standard. AZ integrates later at a premium.', tone: 'amber' },
    { id: 'C', label: 'Disrupted', probability: 20, body: 'Big Tech or a payer-led coalition owns the coordination layer. AZ becomes a supplier.', tone: 'red' },
  ],
}

export const architecture = {
  heading: 'Four AI layers. One human always signs off.',
  layers: [
    {
      id: 'screening',
      order: 1,
      title: 'Screening AI',
      sublabel: 'Locked model · regulatory approved',
      body: 'Chest X-ray and LDCT reading. Model is locked after regulatory approval. Behaviour never changes without a new submission.',
      tools: ['Qure.ai qXR', 'CREATE registry', 'GE Healthcare'],
      status: 'Deployed in Thailand (660K patients)',
      gap: null,
      tone: 'light-navy',
    },
    {
      id: 'pathology',
      order: 2,
      title: 'Pathology AI: Modella',
      sublabel: 'Assists pathologist · never diagnoses alone',
      body: 'Reads biopsy slides for tumour grade and biomarker patterns. Flags regions of interest. Pathologist signs every report.',
      tools: ['Modella', 'Tempus Labs', 'PathAI'],
      status: 'Validated in breast; lung validation funded Phase 1',
      gap: 'No published lung validation yet',
      tone: 'mid-navy',
    },
    {
      id: 'agents',
      order: 3,
      title: 'Agentic AI Coordinators',
      sublabel: 'The connecting system',
      body: 'Four specialist agents route patients, match trials, pick treatment centres, and coordinate supply. They propose. Humans approve.',
      tools: ['Patient Router', 'Trial Matcher', 'Hospital Selector', 'Supply Coordinator'],
      status: 'Pilot by end 2026',
      gap: 'Does not exist yet. This is what we build.',
      tone: 'navy',
    },
    {
      id: 'data',
      order: 4,
      title: 'Data Platform',
      sublabel: 'Foundation',
      body: 'Azure + Databricks + BIKG + Evinova. FHIR and OMOP standards. Federated where data cannot move. Audit trail for every decision.',
      tools: ['Azure', 'Databricks', 'BIKG', 'Evinova', 'FHIR', 'OMOP'],
      status: 'Operational today',
      gap: null,
      tone: 'deep-navy',
    },
  ],
  agents: [
    { id: 'router',    title: 'Patient Router',      body: 'Sends patients to the right specialist in the right hospital.' },
    { id: 'trial',     title: 'Trial Matcher',       body: 'Finds the right clinical trial for this specific cancer.' },
    { id: 'hospital',  title: 'Hospital Selector',   body: 'Picks the best treatment centre given geography and outcome data.' },
    { id: 'supply',    title: 'Supply Coordinator',  body: 'Ensures the drug arrives the day the patient is ready for it.' },
  ],
}

export const numbers = {
  heading: 'UK proves the model. Then AZ scales globally.',
  roadmap: [
    { phase: 'Phase 1', years: 'Y1-Y2', invest: '£15-30M',  milestone: 'UK pilot with NHS · federated network live' },
    { phase: 'Phase 2', years: 'Y3-Y4', invest: '£50-80M', milestone: 'Expand UK · publish evidence · refine models' },
    { phase: 'Phase 3', years: 'Y5+',   invest: 'Global',  milestone: 'Replicate with US, Asia, S. America health systems' },
  ],
  kpi: [
    { icon: 'heart',       title: 'Clinical',        body: '% lung cancers caught early. Target 25% by Phase 3 (from 16% today).' },
    { icon: 'coin',        title: 'Evidence',        body: 'Real-world data flows back to AZ. Powers drug development + market access.' },
    { icon: 'clock',       title: 'Operational',     body: 'Median time from screening to treatment initiation.' },
    { icon: 'leaf',        title: 'Global Scale',    body: 'UK model replicates to US, Asia, South America subsidiaries.' },
  ],
  disclaimer:
    'Investment figures are estimates. Value captured through evidence, not subscription fees.',
}

export const gaps = {
  heading: 'Five gaps we name before anyone asks',
  subhead: 'Credibility comes from honesty, not from hiding.',
  items: [
    {
      n: '01',
      title: 'MILTON genomics AI has no published lung cancer result',
      response:
        'Used as one input only, never a sole decision signal. Phase 1 funds the lung paper, targeted for peer-reviewed publication in 2027.',
    },
    {
      n: '02',
      title: 'Modella pathology AI has no lung tissue validation yet',
      response:
        'Phase 1 funds the lung validation study at two academic centres. Pathologist signs every report until validation completes.',
    },
    {
      n: '03',
      title: 'AZ has not disclosed compute footprint (Roche has 3,500 AI chips)',
      response:
        'Phase 1 either discloses the number or announces a named compute partnership. Transparent by default.',
    },
    {
      n: '04',
      title: 'Supply-chain emissions 3.8% above target · removed from DJSI 2023',
      response:
        'Commit to publishing net Scope 3 emissions per early-stage patient annually, starting Phase 1 report.',
    },
    {
      n: '05',
      title: 'The coordination platform does not exist yet',
      response:
        'Median has FDA clearance. Optellum runs an NHS pilot. Phase 1 launches one European pilot site by end 2026. Speed is the only answer.',
    },
  ],
}

export const defense = {
  heading: 'April 17, 2026: Final Defense',
  pitch: [
    'Lung cancer is the world\u2019s number one cancer killer.',
    '84% of patients are caught too late.',
    'The tools to detect it early exist. The system to connect them does not.',
    'AstraZeneca and NHS should build that system together.',
    'UK proves the model. Then AZ scales it globally.',
  ],
  rules: [
    'Lead with the patient, not the platform.',
    'Name the gaps before they are asked.',
    'Every number has an assumption stack.',
    'The doctor always signs off. Say it twice.',
    'Show the blue ocean, not the red one.',
    'End with the global scale story.',
  ],
  team: [
    { name: 'Team Member 1', role: 'Strategy Lead' },
    { name: 'Team Member 2', role: 'Clinical Lead' },
    { name: 'Team Member 3', role: 'Technical Lead' },
    { name: 'Team Member 4', role: 'Finance Lead' },
  ],
}
