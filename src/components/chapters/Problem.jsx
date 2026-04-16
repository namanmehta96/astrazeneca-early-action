import { motion } from 'framer-motion'
import PaginatedChapter from '../shared/PaginatedChapter'
import SymbolWatermark from '../shared/SymbolWatermark'
import StatCounter from '../shared/StatCounter'

/* ---------------- Slide 1.1 — THE PROBLEM ---------------- */

const headlineStats = [
  { value: 84, suffix: '%', label: 'of patients diagnosed too late', delay: 0.25, accent: 'red' },
  { value: 60, suffix: '%', label: 'survival if detected early',     delay: 0.45, accent: 'navy' },
  { value: 20, prefix: '<', suffix: '%', label: 'survival if detected late', delay: 0.65, accent: 'red' },
]

function ProblemOpenerPage() {
  return (
    <section className="diamond-watermark relative min-h-full overflow-hidden px-10 py-14 lg:px-16 lg:py-20">
      <SymbolWatermark opacity={0.04} size={560} position={{ top: '10%', right: '-8%' }} />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-az-magenta">
          Ch · 01 &nbsp;/&nbsp; The Problem
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-4xl italic leading-[1.2] pb-[0.15em] text-az-navy md:text-5xl"
        >
          Lung cancer is caught too late
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-az-muted md:text-lg"
        >
          This is not a science problem. It is a timing problem.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {headlineStats.map((s, i) => (
            <div key={i} className="border-l-4 border-az-gold/40 pl-6">
              <StatCounter
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                label={s.label}
                delay={s.delay}
                size="xl"
                accent={s.accent}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border-l-4 border-az-navy bg-white p-6 shadow-card"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-az-navy">
              #1 cancer killer worldwide
            </div>
            <div className="mt-3 font-display text-xl italic leading-snug text-az-navy md:text-2xl">
              5 out of 6 patients miss the window.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border-l-4 border-az-magenta bg-white p-6 shadow-card-magenta"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-az-magenta">
              Breakthroughs already exist
            </div>
            <div className="mt-3 font-display text-xl italic leading-snug text-az-navy md:text-2xl">
              But they come too late for most patients.
            </div>
          </motion.div>
        </div>

        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-az-muted">
          Source: Siegel et al., CA Cancer J Clin 2025. USPSTF Grade B recommendation 2021.
        </p>
      </div>
    </section>
  )
}

/* ---------------- Slide 1.2 — THE GAP ---------------- */

const gapSections = [
  {
    label: 'Screening gap',
    lines: [
      'Screening is available, proven, often free.',
      'Yet <10% of eligible people get screened.',
      'No public health reflex comparable to breast or heart disease.',
    ],
  },
  {
    label: 'System fragmentation',
    lines: [
      'Signals are missed, follow-ups delayed, patients fall through the cracks.',
      'Healthcare is reactive, not proactive.',
    ],
  },
]

const existsLines = [
  'AI tools to detect lung cancer early already exist.',
  'Imaging, diagnostics, and data already exist.',
  'Screening programmes already exist.',
]

function ProblemGapPage() {
  return (
    <section className="diamond-watermark relative min-h-full overflow-hidden px-10 py-14 lg:px-16 lg:py-20">
      <SymbolWatermark opacity={0.04} size={520} position={{ top: '-4%', right: '-8%' }} />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-az-magenta">
          Ch · 01 &nbsp;/&nbsp; The Gap
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-4xl italic leading-[1.2] pb-[0.15em] text-az-navy md:text-5xl"
        >
          The system fails before treatment begins
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-az-muted md:text-lg"
        >
          The problem is not detection. It is coordination.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {gapSections.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-az-border bg-white p-6 shadow-card"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-az-magenta">
                {s.label}
              </div>
              <ul className="mt-3 space-y-2">
                {s.lines.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed text-az-charcoal">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-az-magenta" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 rounded-2xl bg-az-navy p-8 text-white shadow-card-navy"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-az-gold">
            The paradox
          </div>

          <ol className="mt-5 space-y-3">
            {existsLines.map((line, i) => (
              <motion.li
                key={line}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.85 + i * 0.2, duration: 0.5 }}
                className="flex items-start gap-3 text-sm leading-relaxed text-white/90"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-az-gold font-mono text-[10px] font-bold text-[#1C1C1C]">
                  {i + 1}
                </span>
                <span>{line}</span>
              </motion.li>
            ))}
          </ol>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6, duration: 0.7 }}
            className="mt-6 border-t border-white/10 pt-5"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-az-magenta">
              But
            </div>
            <p className="mt-2 font-display text-2xl italic leading-snug md:text-3xl">
              There is no system to connect them.
            </p>
          </motion.div>
        </motion.div>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-az-muted">
          Source: USPSTF 2021. European Council cancer screening recommendation 2022.
        </p>
      </div>
    </section>
  )
}

/* ---------------- Slide 1.3 — BARRIERS ---------------- */

const barriers = [
  {
    label: 'Awareness',
    title: 'No pink ribbon equivalent',
    body: 'Patients do not ask for screening because they do not know it exists.',
  },
  {
    label: 'Stigma',
    title: 'Associated with smoking blame',
    body: 'Former smokers who quit years ago avoid screening because they feel it is their fault.',
  },
  {
    label: 'Access',
    title: 'Programmes are fragmented',
    body: 'UK NHS TLHC is live but only in high-incidence areas. France runs pilots, not a national programme. Germany launches national screening April 2026.',
  },
]

function ProblemBarriersPage() {
  return (
    <section className="diamond-watermark relative min-h-full overflow-hidden px-10 py-14 lg:px-16 lg:py-20">
      <SymbolWatermark opacity={0.04} size={560} position={{ top: '12%', right: '-8%' }} />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-az-magenta">
          Ch · 01 &nbsp;/&nbsp; Barriers
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-4xl italic leading-[1.2] pb-[0.15em] text-az-navy md:text-5xl"
        >
          Who falls through the cracks
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-az-muted md:text-lg"
        >
          Fewer than 1 in 10 eligible people get screened. Why?
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {barriers.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col rounded-xl border border-az-border bg-white p-6 shadow-card"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-az-magenta">
                0{i + 1} · {b.label}
              </div>
              <h3 className="mt-3 font-display text-xl italic text-az-navy md:text-2xl">
                {b.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-az-charcoal">{b.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-10 rounded-2xl border-l-4 border-az-magenta bg-white p-7 shadow-card-magenta"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-az-magenta">
            Result
          </div>
          <p className="mt-3 font-display text-2xl italic leading-snug text-az-navy md:text-3xl">
            84% caught late. Not because tools failed.
          </p>
          <p className="mt-1 font-display text-xl italic text-az-muted md:text-2xl">
            Because the system never reached the patient.
          </p>
        </motion.div>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-az-muted">
          Source: NLST, NEJM 2011. NELSON, NEJM 2020. NHS England TLHC. German national screening launch April 2026.
        </p>
      </div>
    </section>
  )
}

/* ---------------- Slide 1.4 — THE PRIZE ---------------- */

const shifts = [
  {
    label: 'Stage shift',
    headline: '16% to 30%',
    subline: 'triples the population eligible for adjuvant therapies',
    body: 'Five-year survival: 60% early vs <20% late.',
  },
  {
    label: 'Cost reduction',
    headline: '~4x',
    subline: 'late-stage care costs vs early-stage',
    body: 'Every patient caught earlier saves the health system money.',
  },
  {
    label: 'The human case',
    headline: 'Stage I vs IV',
    subline: 'treatment vs palliative care',
    body: 'That is the difference.',
  },
]

function ProblemPrizePage() {
  return (
    <section className="diamond-watermark relative min-h-full overflow-hidden px-10 py-14 lg:px-16 lg:py-20">
      <SymbolWatermark opacity={0.04} size={560} position={{ top: '-4%', right: '-10%' }} />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-az-magenta">
          Ch · 01 &nbsp;/&nbsp; The Prize
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-4xl italic leading-[1.2] pb-[0.15em] text-az-navy md:text-5xl"
        >
          What changes if we solve coordination
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-az-muted md:text-lg"
        >
          The question is not whether earlier detection saves lives. It is who builds the system.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {shifts.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col rounded-xl bg-white p-6 shadow-card"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-az-magenta">
                {s.label}
              </div>
              <div className="mt-4 font-display text-3xl font-bold text-az-navy md:text-4xl">
                {s.headline}
              </div>
              <div className="mt-2 text-sm font-semibold text-az-navy">{s.subline}</div>
              <p className="mt-3 border-t border-az-border pt-3 text-sm leading-relaxed text-az-charcoal">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-12 rounded-2xl bg-az-navy p-8 text-white shadow-card-navy"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-az-gold">
            The question
          </div>
          <p className="mt-3 font-display text-2xl italic leading-snug md:text-3xl">
            Who builds the system that makes this happen at scale?
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.22em] text-white/60">
            That is what this project answers.
          </p>
        </motion.div>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-az-muted">
          Source: Siegel et al., CA Cancer J Clin 2025. NHS Long Term Plan Ch.3. AstraZeneca FY2025.
        </p>
      </div>
    </section>
  )
}

export default function Problem() {
  return (
    <PaginatedChapter
      chapterId="problem"
      pages={[
        <ProblemOpenerPage key="open" />,
        <ProblemGapPage key="gap" />,
        <ProblemBarriersPage key="barriers" />,
        <ProblemPrizePage key="prize" />,
      ]}
    />
  )
}
