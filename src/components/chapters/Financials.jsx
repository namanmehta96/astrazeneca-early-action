import { motion } from 'framer-motion'
import PaginatedChapter from '../shared/PaginatedChapter'
import SymbolWatermark from '../shared/SymbolWatermark'

/* =========================================================
   CH 05 · VALUE & SCALE
   Reframed from Financials. Focus on partnership value + global scale-out.
   ========================================================= */

function Card({ eyebrow, title, prompts = [], children, source }) {
  return (
    <section className="diamond-watermark relative min-h-full overflow-hidden bg-white px-10 py-14 lg:px-16 lg:py-20">
      <SymbolWatermark opacity={0.04} size={540} position={{ top: '6%', right: '-8%' }} />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-az-magenta">
          Ch · 05 &nbsp;/&nbsp; {eyebrow}
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-4xl italic leading-[1.2] pb-[0.15em] text-az-navy md:text-5xl"
        >
          {title}
        </motion.h2>

        {prompts.length > 0 && (
          <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
            {prompts.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
                className="flex items-start gap-3 text-base leading-snug text-az-charcoal md:text-lg"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-az-magenta" />
                <span>{p}</span>
              </motion.li>
            ))}
          </ul>
        )}

        <div className="relative mt-8 flex-1">{children}</div>

        {source && (
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-az-muted">
            Source: {source}
          </p>
        )}
      </div>
    </section>
  )
}

/* =========================================================
   CARD 1 - THE PARTNERSHIP
   ========================================================= */

function Card1Partnership() {
  return (
    <Card
      eyebrow="THE PARTNERSHIP"
      title="AZ and NHS build it together"
      prompts={[
        'Not a vendor relationship - a true partnership',
        'AZ invests £15-30M in Phase 1',
        'NHS contributes data, infrastructure, clinical expertise',
        'Federated network: data stays local, insights flow',
      ]}
      source="NHS data partnerships. MELLODDY federated learning consortium."
    >
      <div className="flex flex-col items-center gap-6">
        {/* Partnership visual */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex items-center gap-4"
        >
          <div className="rounded-2xl bg-az-magenta px-6 py-4 text-center text-white shadow-card-magenta">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-white/80">
              ASTRAZENECA UK
            </div>
            <div className="mt-2 font-display text-2xl font-bold italic md:text-3xl">
              £15-30M
            </div>
            <div className="mt-1 text-sm text-white/80">
              Investment
            </div>
          </div>

          <motion.div
            animate={{ scaleX: [1, 1.15, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="flex items-center"
          >
            <span className="h-[4px] w-10 bg-az-gold" />
            <span className="font-display text-2xl italic text-az-gold">↔</span>
            <span className="h-[4px] w-10 bg-az-gold" />
          </motion.div>

          <div className="rounded-2xl bg-az-navy px-6 py-4 text-center text-white shadow-card-navy">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-gold">
              NHS
            </div>
            <div className="mt-2 font-display text-2xl font-bold italic md:text-3xl">
              DATA
            </div>
            <div className="mt-1 text-sm text-white/80">
              + Infrastructure
            </div>
          </div>
        </motion.div>

        {/* Federated network */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full max-w-lg rounded-2xl border-[3px] border-az-gold bg-az-gold/10 p-6 text-center"
        >
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-gold-deep">
            FEDERATED NETWORK
          </div>
          <div className="mt-3 font-display text-xl italic text-az-navy md:text-2xl">
            Patient data never leaves NHS servers.
          </div>
          <div className="mt-2 text-sm text-az-charcoal">
            AI models train locally. Only insights flow back to AZ.
          </div>
        </motion.div>
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 2 - VALUE EXCHANGE
   ========================================================= */

function Card2Value() {
  return (
    <Card
      eyebrow="VALUE EXCHANGE"
      title="What each side gets"
      prompts={[
        'Each side gets something they cannot build alone',
        'AZ gets data access worth far more than the investment',
        'NHS gets AI tools + better patient outcomes',
        'Both share: publications, precision medicine advances',
      ]}
      source="Tempus $200M data deal with AZ. NHS outcomes data."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* AZ Gets */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="rounded-2xl border-[3px] border-az-magenta bg-az-magenta p-6 text-white shadow-card-magenta"
        >
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-white/80">
            ASTRAZENECA GETS
          </div>
          <div className="mt-4 font-display text-4xl font-bold italic md:text-5xl">
            DATA
          </div>
          <div className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-white/80">
            THE REAL VALUE
          </div>
          <ul className="mt-4 space-y-2">
            {[
              'Patient outcomes for drug development',
              'Real-world evidence for regulatory submissions',
              'Trial recruitment pipeline',
              'Global replication blueprint',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-lg bg-white/20 p-3">
            <p className="text-xs italic">
              Pharma pays hundreds of millions for data access.
            </p>
          </div>
        </motion.div>

        {/* NHS Gets */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="rounded-2xl border-[3px] border-az-navy bg-az-navy p-6 text-white shadow-card-navy"
        >
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-gold">
            NHS GETS
          </div>
          <div className="mt-4 font-display text-4xl font-bold italic md:text-5xl">
            TOOLS
          </div>
          <div className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-gold">
            + OUTCOMES
          </div>
          <ul className="mt-4 space-y-2">
            {[
              'AI screening + coordination layer',
              'Trained models (federated, privacy-safe)',
              'Better patient outcomes',
              'Publications + precision medicine leadership',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-az-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-lg bg-az-gold/20 p-3">
            <p className="text-xs italic text-az-gold">
              £40K saved per patient caught early.
            </p>
          </div>
        </motion.div>
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 3 - WHY NHS PARTICIPATES
   ========================================================= */

function Card3WhyNHS() {
  return (
    <Card
      eyebrow="WHY NHS PARTICIPATES"
      title="The patient case"
      prompts={[
        'This is about patient outcomes, not technology',
        'Earlier detection = better survival',
        'Faster referrals = less anxiety',
        'Coordinated care = fewer patients lost',
      ]}
      source="NHS England cancer data. CA Cancer J Clin 2025."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          { metric: '16% → 30%', label: 'EARLY STAGE DETECTION', desc: 'Catch cancer before it spreads' },
          { metric: '5×', label: 'SURVIVAL IMPROVEMENT', desc: 'Stage I vs Stage IV outcomes' },
          { metric: '< 7 days', label: 'REFERRAL TIME', desc: 'Down from weeks of waiting' },
          { metric: '2×', label: 'TRIAL RECRUITMENT', desc: 'More patients matched to trials' },
          { metric: '£40K', label: 'SAVED PER PATIENT', desc: 'Early treatment costs less' },
          { metric: '0', label: 'PATIENTS LOST', desc: 'No one falls through the cracks' },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.65 }}
            className="rounded-xl border border-az-border bg-white p-5 shadow-card"
          >
            <div className="font-display text-3xl font-bold italic text-az-magenta md:text-4xl">
              {item.metric}
            </div>
            <div className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-navy">
              {item.label}
            </div>
            <div className="mt-2 text-sm text-az-charcoal">
              {item.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 4 - RISKS (kept but lighter)
   ========================================================= */

const risks = [
  { q: 'Regulatory classification?', a: 'Coordination layer, not diagnostic. MHRA meeting Phase 1.', tag: 'REGULATORY' },
  { q: 'NHS data access?', a: 'Federated model - data never leaves NHS servers.', tag: 'DATA' },
  { q: 'Doctor adoption?', a: 'Built on ESMO guidelines. Human sign-off always.', tag: 'ADOPTION' },
  { q: 'Procurement timeline?', a: 'Start with 2-3 trusts. Expand on outcomes.', tag: 'TIMELINE' },
]

function Card4Risks() {
  return (
    <Card
      eyebrow="HONEST RISKS"
      title="What could slow us down"
      prompts={[
        'We name the risks before anyone asks',
        'Each has a mitigation built in',
        'Start small, prove it works, then scale',
      ]}
      source="MHRA AI guidance. NHS data strategy. EU AI Act."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {risks.map((r, i) => (
          <motion.div
            key={r.tag}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.65 }}
            className="rounded-xl border border-az-border bg-white p-5 shadow-card"
          >
            <span className="rounded-full bg-az-gold px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-[#1C1C1C]">
              {r.tag}
            </span>
            <div className="mt-3 font-display text-base italic font-bold text-az-navy md:text-lg">
              {r.q}
            </div>
            <p className="mt-2 text-sm text-az-charcoal">
              {r.a}
            </p>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 5 - GLOBAL SCALE-OUT (the "ouverture")
   ========================================================= */

function Card5GlobalScale() {
  return (
    <Card
      eyebrow="GLOBAL SCALE"
      title="UK first. Then the world."
      prompts={[
        'UK is the proof of concept',
        'NHS is the ideal partner: single-payer, centralized data, trusted',
        'Once proven, AZ replicates with health systems globally',
        'Same playbook, different markets',
      ]}
      source="AZ global footprint. Health system partnerships."
    >
      <div className="flex flex-col items-center gap-6">
        {/* UK Proof */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex items-center gap-4"
        >
          <div className="rounded-2xl bg-az-magenta px-5 py-3 text-white">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">AZ UK</div>
          </div>
          <span className="text-2xl text-az-gold">↔</span>
          <div className="rounded-2xl bg-az-navy px-5 py-3 text-white">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">NHS</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="font-display text-xl italic text-az-navy"
        >
          Federated network proven ✓
        </motion.div>

        {/* Arrow down */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-4xl text-az-gold"
        >
          ↓
        </motion.div>

        {/* Global expansion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="w-full max-w-2xl rounded-2xl bg-az-navy p-6 text-white shadow-card-navy"
        >
          <div className="text-center font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-gold">
            AZ REPLICATES GLOBALLY
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-3 md:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="rounded-xl bg-white/10 px-4 py-3 text-center"
            >
              <div className="font-display text-2xl font-bold italic md:text-3xl">US</div>
              <div className="mt-1 text-xs text-white/70">Health systems</div>
            </motion.div>

            <span className="text-xl text-az-gold">←</span>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="rounded-xl border-2 border-az-gold bg-az-gold/20 px-5 py-3 text-center"
            >
              <div className="font-display text-2xl font-bold italic text-az-gold md:text-3xl">AZ UK</div>
              <div className="mt-1 text-xs text-az-gold/80">Blueprint</div>
            </motion.div>

            <span className="text-xl text-az-gold">→</span>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="rounded-xl bg-white/10 px-4 py-3 text-center"
            >
              <div className="font-display text-2xl font-bold italic md:text-3xl">ASIA</div>
              <div className="mt-1 text-xs text-white/70">Health systems</div>
            </motion.div>

            <span className="text-xl text-az-gold hidden md:inline">→</span>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="hidden md:block rounded-xl bg-white/10 px-4 py-3 text-center"
            >
              <div className="font-display text-2xl font-bold italic md:text-3xl">S.A.</div>
              <div className="mt-1 text-xs text-white/70">Health systems</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="mt-4 rounded-2xl bg-az-magenta px-8 py-5 text-center text-white shadow-card-magenta"
        >
          <div className="font-display text-2xl font-bold italic md:text-3xl">
            UK is the proof. Global scale is the prize.
          </div>
        </motion.div>
      </div>
    </Card>
  )
}

/* =========================================================
   EXPORT
   ========================================================= */

export default function Financials() {
  return (
    <PaginatedChapter
      chapterId="financials"
      pages={[
        <Card1Partnership  key="partnership" />,
        <Card2Value        key="value"       />,
        <Card3WhyNHS       key="whynhs"      />,
        <Card4Risks        key="risks"       />,
        <Card5GlobalScale  key="scale"       />,
      ]}
    />
  )
}
