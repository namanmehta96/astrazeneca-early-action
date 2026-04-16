import { motion } from 'framer-motion'
import PaginatedChapter from '../shared/PaginatedChapter'
import SymbolWatermark from '../shared/SymbolWatermark'

const CATEGORY_STYLES = {
  PARTNERSHIP:   { border: 'border-az-magenta',   text: 'text-az-magenta' },
  'DATA VALUE':  { border: 'border-az-navy',      text: 'text-az-navy' },
  COMPETITIVE:   { border: 'border-az-gold-deep', text: 'text-az-gold-deep' },
  URGENCY:       { border: 'border-red-500',      text: 'text-red-500' },
  NUMBERS:       { border: 'border-az-navy',      text: 'text-az-navy' },
}

function Section({ label, color, items }) {
  return (
    <div className="mt-5">
      <div className={`flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] ${color}`}>
        <span aria-hidden>▼</span>
        <span>{label}</span>
      </div>
      <ul className="mt-2 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-az-muted mt-2 shrink-0" aria-hidden />
            <span className="text-sm leading-relaxed text-az-charcoal">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function QACard({ qNumber, category, question, answer, limitation, perspective, sources, index }) {
  const styles = CATEGORY_STYLES[category]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`rounded-xl border border-az-border bg-white p-6 shadow-card border-l-4 ${styles.border}`}
    >
      <div className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] ${styles.text}`}>
        <span aria-hidden>◆</span>
        <span>{qNumber} · {category}</span>
      </div>
      <div className="mt-4 font-display text-base italic leading-snug text-az-navy md:text-lg">
        &ldquo;{question}&rdquo;
      </div>
      <Section label="ANSWER"      color="text-az-magenta"   items={answer} />
      <Section label="LIMITATION"  color="text-az-gold-deep" items={limitation} />
      <Section label="PERSPECTIVE" color="text-az-navy"      items={perspective} />
      <div className="mt-5 border-t border-az-border pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-az-muted">
        Sources: {sources}
      </div>
    </motion.div>
  )
}

function QAPage({ pageLabel, heading, cards }) {
  return (
    <section className="diamond-watermark relative min-h-full overflow-hidden px-10 py-14 lg:px-16 lg:py-20">
      <SymbolWatermark opacity={0.04} size={560} position={{ top: '10%', right: '-8%' }} />
      <div className="relative z-10 mx-auto max-w-6xl pb-16">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-az-magenta">
          Ch · 06 &nbsp;/&nbsp; {pageLabel}
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-4xl italic leading-[1.2] pb-[0.15em] text-az-navy md:text-5xl"
        >
          {heading}
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cards.map((c, i) => (
            <QACard key={c.qNumber} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

const PAGE1_CARDS = [
  {
    qNumber: 'Q01',
    category: 'PARTNERSHIP',
    question: 'Why frame this as a partnership rather than a licensing deal?',
    answer: [
      'Neither side can build alone. AZ brings capital, AI expertise, the Modella acquisition, and global reach. NHS brings data, infrastructure, and clinical expertise.',
      'NHS England Lung Cancer Screening Programme reached 63.1% stage 1 detection across 2M+ invited through March 2025 (Nature Medicine 2026).',
      'AZ captures: real-world evidence for drug development, patient outcomes, trial recruitment pipeline, global replication blueprint.',
      'NHS captures: AI tools at no incremental capital cost, federated models that stay NHS-owned, better patient outcomes.',
      'Market reference point: Tempus signed a $200M data deal with AZ in 2024. NHS gets equivalent strategic value without selling the data.',
    ],
    limitation: [
      'No signed MoU yet. £15-30M is an estimate.',
      'Governance structure (IP ownership, publication rights, model update authority) not yet drafted.',
    ],
    perspective: [
      'A vendor relationship creates a principal-agent problem. A partnership shares upside.',
      'Evinova is the existing AZ structure through which this executes, already operational and separate from therapeutic sales.',
    ],
    sources: 'Nature Medicine 2026 (NHS LCS 5-year). AZ-Tempus $200M 2024. Evinova commercial structure.',
  },
  {
    qNumber: 'Q02',
    category: 'PARTNERSHIP',
    question: 'Would a multi-country pilot not de-risk the thesis faster?',
    answer: [
      'Multi-country multiplies variables: different data standards, different regulators (MHRA vs BfArM vs HAS), different reimbursement, different physician workflows.',
      'NHS offers a single payer, centralised data standards (NHS Number + SNOMED-CT), single AI regulator (MHRA only).',
      'Existing screening programme to plug into. 36% of eligible population invited by Feb 2025 (Roy Castle Foundation).',
      'AZ Cambridge HQ: decade-long NHS joint-working history.',
      "Optellum's NHS pilot since Jan 2026 proves NHS readiness for AI coordination.",
    ],
    limitation: [
      'NHS-specific lessons may not fully generalise. US employer-based healthcare, Japanese pathways, Chinese provincial systems all differ.',
      'Replication is not copy-paste.',
    ],
    perspective: [
      'Phase 1 is a learning engine, not go-to-market. The deliverable is a replication playbook that regional AZ teams adapt.',
      'That is why £15-30M is Phase 1-appropriate, not Phase 3-appropriate.',
    ],
    sources: 'NHS LCS coverage Feb 2025 (Roy Castle Foundation). Nature Medicine 2026. AZ global subsidiaries.',
  },
  {
    qNumber: 'Q03',
    category: 'PARTNERSHIP',
    question: 'Why would NHS choose AstraZeneca over Google Health, Optellum, or a neutral consortium?',
    answer: [
      'Drugs in the trial recruitment engine. ADAURA, AEGEAN, NeoADAURA, TROPION-Lung12 are AZ trials recruiting in 2026-27. Only AZ owns the trials.',
      'ESMO-endorsed therapies. 95+ AZ abstracts at ESMO 2025 Berlin. FLAURA2 (LBA77) and ARTEMIDE-01 (1853MO) moved clinical practice.',
      'Federated learning operator experience. AZ ran a MELLODDY node across 10 pharma (Nature Machine Intelligence 2023). Google Health has not. Optellum has not.',
      'Conflict-of-interest answered by design: AI flags, human signs off. NHS owns the federated model weights. Publications co-authored.',
    ],
    limitation: [
      'Trust is earned through governance and track record, not stated in a deck.',
      'Phase 1 must establish it operationally.',
    ],
    perspective: [
      'The question is not whether NHS can trust AZ in principle. It is whether the governance structure protects NHS interests.',
      'That is a Phase 1 design problem, not a thesis problem.',
    ],
    sources: 'AZ ESMO 2025 (95+ abstracts). FLAURA2 LBA77. ARTEMIDE-01 1853MO. MELLODDY Heyndrickx et al. 2023.',
  },
  {
    qNumber: 'Q04',
    category: 'DATA VALUE',
    question: 'If AZ never owns the data, how does AZ capture value?',
    answer: [
      'Federated learning inverts the question. Data stays at the NHS trust. Only model weights travel.',
      "Insight compounds into AZ products: better trial design, faster recruitment, precise biomarker targeting.",
      'MELLODDY is the proof. AZ operated a node across 10 pharma (Amgen, Bayer, BI, GSK, Janssen, Merck KGaA, Novartis, Pfizer, Servier, AZ). No company saw any other data. AZ ran the node.',
      "Counter-example: two-thirds of Flatiron's revenue came from selling data back to AZ's competitors (Pfizer, BMS). Roche owned the data and could not stop the leakage. Reportedly considered divestiture in 2024 (Pharmaphorum).",
    ],
    limitation: [
      'Federated learning at NHS scale (15-20 trusts) has never been run. MELLODDY was 10 companies, not 10 health systems.',
      'Throughput, model quality, trust-specific drift are Phase 2 research questions.',
    ],
    perspective: [
      'Owning data was the 2018 strategy. Learning from data you do not own is the 2026 strategy.',
      'Governance, regulatory, and trust advantages compound simultaneously.',
    ],
    sources: 'MELLODDY Heyndrickx et al. Nature MI 2023. Pharmaphorum Aug 2024. Roche Flatiron $1.9B 2018.',
  },
  {
    qNumber: 'Q05',
    category: 'DATA VALUE',
    question: 'So is £15-30M Phase 1 just a cheaper Tempus deal?',
    answer: [
      'AZ-Tempus 2024 is extractive data licensing. Tempus aggregates de-identified records and sells time-bounded access. Pharma has zero influence on cohort design.',
      'AZ-NHS Phase 1 is co-designed evidence generation. AZ and NHS jointly decide trial prioritisation, biomarker panels, tracked outcomes.',
      "Data includes AZ's own trial enrolments in ADAURA, AEGEAN, NeoADAURA as they happen.",
      'Cost comparison: Tempus $200M for static cohort access. NHS Phase 1 £15-30M for co-designed evidence generation, federated models, regulatory-grade real-world evidence, and a replication blueprint.',
    ],
    limitation: [
      'No per-outcome cost comparison has been modelled yet.',
      'Specific Tempus deliverables against Phase 1 outputs not benchmarked.',
    ],
    perspective: [
      'AZ already pays market price for oncology data. The NHS partnership is not a new line-item, it is reallocation of existing data spend.',
      'Co-designed data generation is obviously better value at comparable cost.',
    ],
    sources: 'AZ-Tempus $200M 2024. Tempus Q3 2024. AZ FY2024.',
  },
]

const PAGE2_CARDS = [
  {
    qNumber: 'Q06',
    category: 'DATA VALUE',
    question: 'If £15-30M is rounding error on AZ\u2019s books, why prioritise it over a bigger bet?',
    answer: [
      'Learning-stage capital efficiency. Phase 1 answers: does federated coordination produce stage shift? Can NHS trusts onboard in under 6 months? 2-3 trusts is enough to answer.',
      'Regulatory pre-submission. Phase 1 sets up the MHRA conversation on regulatory classification. £15-30M de-risks that. £200M would not.',
      "Phase 3 is the real capital. Phase 2 is £50-80M across 15-20 trusts. Phase 3 is global replication across AZ's US, Asia, South America subsidiaries.",
      "Lilly's CEO said in March 2026 AI is \u201cnot particularly good at biology.\u201d AZ is not betting on AI-discovered drugs. AZ is betting on AI coordination of Tagrisso, Imfinzi, Enhertu (the $22B oncology franchise) reaching patients earlier.",
    ],
    limitation: [
      'Phase 3 costs not yet modelled.',
      '\u201cGlobal\u201d is currently a placeholder. Each subsidiary geography needs separate pricing.',
    ],
    perspective: [
      'The question is not whether £15-30M is material.',
      'It is whether the £22B oncology franchise is protected and amplified.',
      'Every 1 percentage point of lung cancer stage shift is worth more than the full Phase 1 budget in adjuvant revenue.',
    ],
    sources: 'AZ FY2024 ($54.1B total, $22.4B oncology). Lilly CEO Fortune March 2026.',
  },
  {
    qNumber: 'Q07',
    category: 'DATA VALUE',
    question: 'How does ESMO endorsement actually translate into platform adoption?',
    answer: [
      'Physician workflow trust. European oncologists follow ESMO Clinical Practice Guidelines. CDS that contradicts guidelines has documented override rates over 70% (PMC systematic review).',
      'Market access pathway. FLAURA2 (LBA77, ESMO 2025) combined Tagrisso + chemo in first-line EGFR+ NSCLC. The platform surfaces that protocol when a biomarker match is detected.',
      "Credibility asymmetry. A platform surfacing therapies with Level A ESMO evidence is \u201cplatform following guidelines,\u201d not \u201cpharma pushing drugs.\u201d",
      "AZ's ESMO portfolio covers the stage spectrum: Tagrisso (FLAURA, FLAURA2, ADAURA, NeoADAURA), Rilvegostomig (ARTEMIDE-01), Imfinzi (AEGEAN, ADRIATIC), Datroway (TROPION-Lung12).",
    ],
    limitation: [
      'ESMO endorsement is not reimbursement. Each NHS trust, European payer, US insurer prices separately.',
      'Platform surfaces what is clinically appropriate, not what is reimbursed.',
    ],
    perspective: [
      'Alignment between platform output and ESMO guidance answers the pharma-bias question.',
      'ESMO guidelines happen to prefer AZ drugs in EGFR+, perioperative, and next-gen immunotherapy.',
      'Those are independent clinical judgments, not platform bias.',
    ],
    sources: 'AZ ESMO 2025 press release. FLAURA2 LBA77. ARTEMIDE-01 1853MO. ESMO Guidelines. PMC CDS override review.',
  },
  {
    qNumber: 'Q08',
    category: 'COMPETITIVE',
    question: 'Is the AZ-Median-Tempus loop hypothetical or is there actually a deal?',
    answer: [
      'Partly existing, partly strategic.',
      'Median Technologies eyonis LCS received FDA 510(k) clearance 9 Feb 2026 (93.3% sensitivity, 92.4% specificity, 99.9% NPV, CE marking expected Q2 2026).',
      'Median-Tempus distribution agreement 12 Feb 2026: Tempus distributes eyonis in the US.',
      'AZ-Tempus partnership $200M 2024. The bilateral connections AZ-Tempus and Tempus-Median are in place.',
      'What does not exist yet: direct AZ-Median agreement, three-way consortium governance, commercial revenue-sharing structure.',
    ],
    limitation: [
      'Triangle close is not signed.',
      'Median and Tempus are independent commercial entities. A three-way consortium may not align commercially even if strategically.',
    ],
    perspective: [
      'No other pharma is positioned to close it. Roche has Foundation Medicine internally. MSD has no screening device. Pfizer has no detection tool.',
      'AZ is the only pharma where Median + Tempus + AZ are already commercially connected through existing bilaterals.',
    ],
    sources: 'Median press release 9 Feb 2026. Median-Tempus 12 Feb 2026. AZ-Tempus 2024.',
  },
  {
    qNumber: 'Q09',
    category: 'COMPETITIVE',
    question: 'What did the Modella acquisition give AZ, and is there lung-specific validation yet?',
    answer: [
      'Owned pathology AI. Previously partnership-only, now internal IP.',
      'What Modella does today: whole-slide image reading, PathChat natural-language query, biopsy report structuring into standardised biomarker profiles.',
      'Architecture fit: Layer 2 reads the biopsy, outputs a structured biomarker profile (EGFR+, ALK rearrangement, PD-L1), hands off to Layer 3 Trial Matcher agent, pathologist signs every report.',
    ],
    limitation: [
      'Lung-specific clinical validation is not published. This is Honest Gap #2 on the deck.',
      'Phase 1 funds the lung validation study at two academic centres, 2027 publication target.',
      'Until then, use case is strictly pathologist-assist, not pathologist-replace.',
    ],
    perspective: [
      'Modella acquisition answers: does AZ own the stack or just integrate?',
      'Layer 1 screening: partnership with Median. Layer 2 pathology: owned via Modella. Layer 3 coordination: built. Layer 4 data: existing AZ infrastructure.',
      "Two of four layers are owned IP. Stronger than any competitor's coordination play.",
    ],
    sources: 'AZ Modella AI acquisition press release January 2026. MHRA SaMD guidance.',
  },
  {
    qNumber: 'Q10',
    category: 'URGENCY',
    question: 'What dated signals tell you the Blue Ocean window is closing?',
    answer: [
      '9 February 2026: Median FDA 510(k) clearance for eyonis LCS. First end-to-end AI detection-and-diagnosis device cleared for lung cancer screening.',
      '12 February 2026: Median-Tempus distribution agreement. Data infrastructure layer consolidating around detection.',
      '20 January 2026: BMS-Microsoft AI partnership. First Big Tech plus pharma coordination deal. Microsoft Precision Imaging Network shopping for pharma partners.',
      'Any one signal alone does not close the window. Three in six weeks signals the market is moving now.',
      'If AZ Phase 1 is not live by end 2026, Lead scenario probability (30%) compresses toward Follow (50%) or Disrupted (20%).',
    ],
    limitation: [
      "Cannot predict Median's next pharma partner, Optellum's European scaling, or Microsoft's next deal.",
      'Qualitative signals, not quantitative triggers.',
    ],
    perspective: [
      'The scenario framework does not forecast. It pre-commits to a response.',
      "Each tripwire has a named response in Strategy. If any fires, AZ's plan already includes the pivot.",
    ],
    sources: 'Median 9 Feb 2026. Median-Tempus 12 Feb 2026. Reuters 20 Jan 2026 BMS-Microsoft.',
  },
]

const PAGE3_CARDS = [
  {
    qNumber: 'Q11',
    category: 'URGENCY',
    question: 'What does AZ lose if Optellum wins the coordination category first?',
    answer: [
      "Data feedback loop into R&D. If AZ is a licensee, real-world coordination data flows to the platform owner, not into AZ's trial-design engine.",
      'Pricing power on early-stage therapies. A coordination platform owner sets the terms on which therapies get surfaced at which decision point.',
      'Category-definer premium. The company that names the coordination category captures the strategic narrative. Being second is 20-30% less valuable at steady state.',
      "What AZ does not lose even in the worst case: ADAURA, AEGEAN, NeoADAURA, TROPION-Lung12 clinical evidence, ESMO 2025 Berlin 95+ abstract leadership, Tagrisso franchise ($6.6B 2024), Modella pathology AI, Evinova commercial structure, global subsidiary footprint.",
    ],
    limitation: [
      "We do not know Optellum's funding runway, pharma-alliance plans, or roadmap beyond the NHS pilot.",
      'Disrupted scenario is plausible but not certain.',
    ],
    perspective: [
      "Even in the Disrupted scenario, AZ's trial portfolio is not replicable.",
      'Optellum cannot own ADAURA. They cannot own ESMO 2025 endorsement.',
      "The worst-case AZ outcome is still the best asset position of any pharma in lung cancer.",
    ],
    sources: 'NHS England Optellum pilot Jan 2026. AZ pipeline. ESMO 2025 Berlin.',
  },
  {
    qNumber: 'Q12',
    category: 'COMPETITIVE',
    question: 'Which of the 5 honest gaps is most likely to kill the project?',
    answer: [
      'Gap 1: MILTON has no published lung cancer result. Used as one input only. Phase 1 funds the lung paper, 2027 peer review target.',
      'Gap 2: Modella has no lung tissue validation. Phase 1 funds the lung validation study. Pathologist signs every report until validation completes.',
      'Gap 3: AZ has not disclosed compute footprint. Roche has 3,500 AI chips. Phase 1 discloses the number or announces a named compute partnership.',
      'Gap 4: Supply-chain emissions 3.8% above 2019 baseline, removed from DJSI 2023. Commit to publishing net Scope 3 emissions per early-stage patient annually.',
      'Gap 5: Coordination platform does not exist yet. Median has FDA clearance. Optellum runs an NHS pilot. Phase 1 launches by end 2026.',
      'Most likely to kill: Gap 5. The others are addressable with money and time. Gap 5 is a race against Optellum, Roche, and Big Tech.',
    ],
    limitation: [
      'There are gaps not yet named on the deck.',
      'The five listed are what a disciplined reader can identify from the public record. A regulator meeting in Phase 1 will surface more.',
    ],
    perspective: [
      'Naming gaps publicly is a credibility asymmetry.',
      'Every gap has a Phase 1 line item attached. That is the measure of whether the gap disclosure is real or cosmetic.',
    ],
    sources: 'Deck 4 slide 15. Session 3 analysis. Honest-gap doctrine.',
  },
  {
    qNumber: 'Q13',
    category: 'NUMBERS',
    question: 'Walk us through the four KPIs and which one is hardest to hit.',
    answer: [
      'Clinical: % lung cancers caught early. Baseline 16% today. Target 25% by Phase 3. Anchor: NHS LCS hit 63.1% stage 1 detection in screened population (Nature Medicine 2026).',
      'Evidence: real-world data flows back to AZ. Measured as regulatory submissions, trial-design iterations, co-authored publications.',
      "Operational: median time from screening to treatment initiation. Current 3-4 months. Target under 6 weeks. Anchor: \u201cthe five-week silence\u201d between GP referral and specialist contact.",
      'Global Scale: UK model replicates to US, Asia, South America subsidiaries. Measured as geographies with live replication pilots.',
      'Hardest to hit: operational. Multiple choke points (GP referral, secondary care waitlist, biopsy scheduling, biomarker testing, manual trial matching), each with different owners.',
    ],
    limitation: [
      'None of the four KPIs validated in a Phase 1 setting yet.',
      'Baselines from published NHS and AZ sources. Targets informed by NHS LCS but not proven in the coordination-layer setting we propose.',
    ],
    perspective: [
      'KPIs over ROI. Measured on whether coordination shifts stage, compresses pathway time, generates regulatory-grade evidence, replicates globally.',
      'Not measured on whether a 4-point shift delivers $1.2B. KPIs are commitments. The $1.2B is a stack.',
    ],
    sources: 'Nature Medicine 2026 NHS LCS. AZ FY2024-FY2025. Session 4 KPIs.',
  },
  {
    qNumber: 'Q14',
    category: 'PARTNERSHIP',
    question: 'Walk us through the physician journey and how the platform changes it.',
    answer: [
      'Before the platform: GP sees patient, refers by phone or fax, then silence. Specialist receives incomplete file. Imaging on a separate system. Manual trial search. Patient returns weeks later.',
      "Result: \u201cthe five-week silence\u201d between GP referral and specialist contact.",
      'With the platform: complete dossier travels with the patient. SMS to both patient and physician within 5 days. Biomarker profile structured by Modella AI, pathologist signs off. Trial Matcher surfaces ESMO-endorsed protocols, physician reviews every match.',
      'Precedent: Colibri-Pneumo connects GPs to specialists for COPD in France. Dossiers travel with the patient. Data feeds back. For lung cancer, nothing like this exists yet.',
      'Physician adoption drivers: aligns with ESMO Level A evidence, human sign-off on every decision, reduces manual trial search from hours to seconds, reduces admin burden.',
    ],
    limitation: [
      'No primary physician interviews run in this project.',
      'Mapping draws on published ESMO data, French HAS data, Colibri-Pneumo precedent, EDHEC Workshop 2 journey mapping.',
      'Primary physician research is a Phase 1 deliverable.',
    ],
    perspective: [
      'The platform is a physician productivity tool that delivers better patient outcomes.',
      'That framing changes the adoption conversation.',
    ],
    sources: 'Colibri-Pneumo. ESMO NSCLC Guidelines. French HAS. EDHEC Workshop 2. PMC CDS override review.',
  },
  {
    qNumber: 'Q15',
    category: 'NUMBERS',
    question: 'How do we know AZ oncology growth is structural and not a windfall?',
    answer: [
      'AZ oncology grew from $11.5B (2020) to $22.4B (2024). Nearly doubled in five years.',
      'Tagrisso: $4.3B (2020), $5.4B (2021), $5.4B (2022), $5.8B (2023), $6.6B (2024). Driven by ADAURA adjuvant expansion and FLAURA2 first-line. Still growing 2025 post-NeoADAURA readout.',
      'Imfinzi: approximately $2B (2020) to $4.2B (2023). ADRIATIC small-cell approval 2024 opens the adjuvant funnel.',
      'Enhertu: $243M AZ-recorded (2023) to combined $3.75B (2024), +46% YoY. DESTINY-Breast06 HER2-low 2024 approval opens second tumour indication.',
      'Pattern across all three: adjuvant and earlier-line indication expansion. Precisely the indication class a screening + coordination platform amplifies.',
    ],
    limitation: [
      'Tagrisso loss of exclusivity late this decade compresses part of the trajectory.',
      '5-year forward view depends on next-gen ADC pipeline (Datroway, Camizestrant) continuing the pattern.',
    ],
    perspective: [
      'The 5-year trajectory is what a sustained structural growth argument needs.',
      'The coordination platform amplifies value by putting more patients on adjuvant therapies earlier, before progression.',
      'The platform is not incremental revenue. It is structural protection of the existing trajectory.',
    ],
    sources: 'AZ FY2020-FY2024 Full Year Results. ESMO 2025 Berlin press release. Statista AZ revenue by therapy area.',
  },
]

export default function QA() {
  return (
    <PaginatedChapter
      chapterId="qa"
      pages={[
        <QAPage
          key="p1"
          pageLabel="Partnership and Data"
          heading="Partnership and data value"
          cards={PAGE1_CARDS}
        />,
        <QAPage
          key="p2"
          pageLabel="Competitive and Timing"
          heading="Competitive position and market timing"
          cards={PAGE2_CARDS}
        />,
        <QAPage
          key="p3"
          pageLabel="Scale and Evidence"
          heading="Scale, evidence, and structural growth"
          cards={PAGE3_CARDS}
        />,
      ]}
    />
  )
}
