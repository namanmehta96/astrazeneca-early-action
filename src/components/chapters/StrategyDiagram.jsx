import { motion } from 'framer-motion'

const leftSteps = [
  'Patient flagged by screening AI',
  'Confirm scan + biopsy referral',
  'Trial match + treatment plan',
]

const rightCards = [
  {
    title: 'Network of Experts',
    body: 'GPs, pulmonologists, oncologists connected. Specialist anticipates via Colibri. No more fragmentation.',
    tint: 'bg-az-magenta/5',
    iconTone: 'text-az-magenta',
    iconBg: 'bg-az-magenta/10',
  },
  {
    title: 'Observatories in Real Life',
    body: 'Clinical cases, exposome + nutrition. CREATE 660K+ patients. Model to anticipate risk. Incentive for data.',
    tint: 'bg-az-sky/5',
    iconTone: 'text-az-sky',
    iconBg: 'bg-az-sky/15',
  },
  {
    title: 'Artificial Intelligence',
    body: 'Preventive approach. Routes patients, matches trials.',
    highlight: 'Never diagnoses.',
    tint: 'bg-az-gold/10',
    iconTone: 'text-az-gold-deep',
    iconBg: 'bg-az-gold/20',
  },
]

const loopTokens = [
  { t: 'Global model', kind: 'word' },
  { t: '|',             kind: 'sep'  },
  { t: 'screening',     kind: 'word' },
  { t: '→',             kind: 'arrow' },
  { t: 'data',          kind: 'word' },
  { t: '→',             kind: 'arrow' },
  { t: 'better model',  kind: 'word' },
  { t: '→',             kind: 'arrow' },
  { t: 'better screening', kind: 'word' },
  { t: '→',             kind: 'arrow' },
  { t: 'loop',          kind: 'word' },
]

export default function StrategyDiagram() {
  return (
    <section className="relative mt-20 rounded-2xl bg-white p-8 shadow-card lg:p-12">
      <header className="mb-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-az-magenta">
          How it Works
        </div>
        <h2 className="mt-2 font-display text-3xl italic leading-[1.25] pb-[0.15em] text-az-navy">
          How the System Works in Practice
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-6">
        {/* LEFT — For the Physician */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-az-magenta/10 text-az-magenta">
              <DoctorIcon />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-az-muted">
                For the Physician
              </div>
              <div className="mt-0.5 font-display text-lg italic text-az-navy">
                Individual support
              </div>
            </div>
          </div>
          <p className="mb-6 text-sm italic text-az-muted">
            "Agentic: help me screen, refer, and treat this patient."
          </p>

          <ol className="space-y-3">
            {leftSteps.map((step, i) => (
              <motion.li
                key={i}
                initial={{ x: -36, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{
                  delay: 0.15 + i * 0.18,
                  type: 'spring',
                  stiffness: 220,
                  damping: 24,
                }}
                className="flex items-center gap-4 rounded-xl border border-az-border bg-white p-4 shadow-card"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-az-magenta font-mono text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <span className="text-sm leading-snug text-az-navy">
                  {step}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* CENTER — flowing arrows */}
        <CenterArrows />

        {/* RIGHT — Behind the Screen */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-az-sky/10 text-az-sky">
              <NetworkIcon />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-az-muted">
                Behind the Screen
              </div>
              <div className="mt-0.5 font-display text-lg italic text-az-navy">
                Connected community
              </div>
            </div>
          </div>
          <p className="mb-6 text-sm italic text-az-muted">
            "Communal: connect me to experts, data, and intelligence."
          </p>

          <div className="space-y-4">
            {rightCards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ x: 36, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{
                  delay: 0.15 + i * 0.18,
                  type: 'spring',
                  stiffness: 220,
                  damping: 24,
                }}
                className={`rounded-xl border border-az-border p-5 ${c.tint}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${c.iconBg} ${c.iconTone}`}>
                    {i === 0 ? <PeopleIcon /> : i === 1 ? <DocIcon /> : <AIIcon />}
                  </div>
                  <div className="font-display text-base font-semibold text-az-navy">
                    {c.title}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-az-charcoal">
                  {c.body}
                  {c.highlight && (
                    <> <span className="font-semibold text-az-magenta">{c.highlight}</span></>
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM — dark navy loop ticker */}
      <div className="mt-10 overflow-hidden rounded-xl bg-az-navy px-6 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-sm uppercase tracking-[0.18em] text-az-gold">
          {loopTokens.map((tok, i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                delay: i * 0.22,
                ease: 'easeInOut',
              }}
              className={tok.kind === 'arrow' ? 'text-az-gold' : tok.kind === 'sep' ? 'text-az-gold/50' : ''}
            >
              {tok.t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

function CenterArrows() {
  return (
    <div className="flex items-center justify-center py-6">
      <svg viewBox="0 0 300 260" className="h-auto w-full max-w-[340px]">
        <defs>
          <marker id="sd-gold" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 Z" fill="#F5A623" />
          </marker>
          <marker id="sd-mag-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 Z" fill="#830051" />
          </marker>
          <marker id="sd-mag-l" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 Z" fill="#830051" />
          </marker>
        </defs>

        {/* Top arc — Expert opinions */}
        <motion.path
          d="M 28 130 Q 150 18 272 130"
          stroke="#F5A623"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 6"
          strokeLinecap="round"
          markerEnd="url(#sd-gold)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <text x="150" y="52" textAnchor="middle" fontFamily="Montserrat" fontSize="11" fontWeight="600" fill="#C9851D" letterSpacing="2">
          EXPERT OPINIONS
        </text>

        {/* Middle — Data sharing */}
        <motion.line
          x1="32"
          y1="130"
          x2="268"
          y2="130"
          stroke="#830051"
          strokeWidth="2.5"
          strokeLinecap="round"
          markerStart="url(#sd-mag-l)"
          markerEnd="url(#sd-mag-r)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
        <text x="150" y="148" textAnchor="middle" fontFamily="Montserrat" fontSize="11" fontWeight="700" fill="#830051" letterSpacing="2">
          DATA SHARING
        </text>

        {/* Bottom arc — Decision support */}
        <motion.path
          d="M 28 130 Q 150 242 272 130"
          stroke="#F5A623"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 6"
          strokeLinecap="round"
          markerEnd="url(#sd-gold)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        />
        <text x="150" y="220" textAnchor="middle" fontFamily="Montserrat" fontSize="11" fontWeight="600" fill="#C9851D" letterSpacing="2">
          DECISION SUPPORT
        </text>
      </svg>
    </div>
  )
}

/* --- inline icons --- */

function DoctorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 14h-4a4 4 0 0 0-4 4v4" />
      <path d="M12 22v-4a4 4 0 0 0-4-4H4" />
      <circle cx="12" cy="7" r="4" />
      <path d="M16 16h4v4" />
    </svg>
  )
}

function NetworkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M6.5 6.5 L10 10 M17.5 6.5 L14 10 M6.5 17.5 L10 14 M17.5 17.5 L14 14" />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function DocIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <circle cx="11" cy="14" r="2" />
      <path d="M12.5 15.5 L15 18" />
    </svg>
  )
}

function AIIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9v6M15 9v6M9 12h6" />
      <path d="M4 9h-2M4 15h-2M22 9h-2M22 15h-2M9 4v-2M15 4v-2M9 22v-2M15 22v-2" />
    </svg>
  )
}
