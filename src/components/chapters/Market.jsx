import { motion } from 'framer-motion'
import PaginatedChapter from '../shared/PaginatedChapter'
import SymbolWatermark from '../shared/SymbolWatermark'
import { useCountUp } from '../../hooks/useCountUp'

/* =========================================================
   CH 02 · AZ + MARKET  ·  Yann
   10 cards. White / brand design. Big numbers.
   ========================================================= */

function Card({ eyebrow, title, subtitle, children, source }) {
  return (
    <section className="diamond-watermark relative min-h-full overflow-hidden bg-white px-10 py-14 lg:px-16 lg:py-20">
      <SymbolWatermark opacity={0.04} size={540} position={{ top: '6%', right: '-8%' }} />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-az-magenta">
          Ch · 02 &nbsp;/&nbsp; {eyebrow}
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-4xl italic leading-[1.2] pb-[0.15em] text-az-navy md:text-5xl"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-3 max-w-3xl text-base leading-relaxed text-az-muted md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}

        <div className="relative mt-8 flex-1">{children}</div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-az-muted">
          Source: {source}
        </p>
      </div>
    </section>
  )
}

/* =========================================================
   CARD 2.1: AT A GLANCE
   ========================================================= */

const glanceStats = [
  { value: 46.4, prefix: '£', suffix: 'B',  decimals: 1, label: 'GLOBAL REVENUE',    sub: '+8.6% YoY',                accent: 'navy'    },
  { value: 20.2, prefix: '£', suffix: 'B',  decimals: 1, label: 'ONCOLOGY REVENUE',  sub: '+14% YoY · 40%+ of group', accent: 'magenta' },
  { value: 4.39, prefix: '£', suffix: 'B',  decimals: 2, label: 'UK ONCOLOGY MARKET', sub: '7.64% CAGR to 2029',      accent: 'navy'    },
  { value: 25.1,               suffix: '%', decimals: 1, label: 'R&D INTENSITY',      sub: 'of total revenue (2024)',  accent: 'gold'    },
]

const drugTickers = [
  { name: 'TAGRISSO', rev: '$7.25B',        color: 'text-az-magenta' },
  { name: 'IMFINZI',  rev: '$6.06B',        color: 'text-az-navy' },
  { name: 'ENHERTU',  rev: '$2.78B (+40%)', color: 'text-az-gold-deep' },
  { name: 'CALQUENCE', rev: '-',             color: 'text-az-muted' },
  { name: 'TRUQAP',    rev: 'NICE pending',  color: 'text-az-muted' },
]

function Card1Glance() {
  return (
    <Card
      eyebrow="FINANCIAL OVERVIEW"
      title="AstraZeneca at a glance: 2025"
      source="AZ FY2025 results. Fortune Global 500. Statista UK oncology market 2020–2029."
    >
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {glanceStats.map((s, i) => (
          <StatBlock key={i} {...s} delay={0.15 + i * 0.12} />
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-az-border bg-white p-6 shadow-card">
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-az-muted">
          KEY ONCOLOGY BRANDS
        </div>
        <div className="mt-4 flex flex-wrap items-baseline gap-x-8 gap-y-3">
          {drugTickers.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              className="flex items-baseline gap-2"
            >
              <span className={`font-display text-xl font-bold italic ${d.color} md:text-2xl`}>
                {d.name}
              </span>
              <span className="font-mono text-sm text-az-muted">{d.rev}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  )
}

function StatBlock({ value, prefix = '', suffix = '', decimals = 0, label, sub, accent = 'navy', delay = 0 }) {
  const display = useCountUp(value, { decimals, duration: 1200 })
  const tone =
    accent === 'magenta'
      ? 'text-az-magenta'
      : accent === 'gold'
      ? 'text-az-gold-deep'
      : 'text-az-navy'
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`font-display font-bold italic leading-none tabular-nums ${tone}`}
        style={{ fontSize: 'clamp(40px, 5vw, 68px)', letterSpacing: '-0.02em' }}
      >
        {prefix}{display}{suffix}
      </div>
      <div className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-navy">
        {label}
      </div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-az-muted">
        {sub}
      </div>
    </motion.div>
  )
}

/* =========================================================
   CARD 2.2: TOP 5 PHARMA REVENUE 2020-2025 (line chart)
   ========================================================= */

const pharmaSeries = [
  { name: 'AstraZeneca', color: '#830051', width: 3, data: [27, 38, 44, 46, 54, 59] },
  { name: 'Merck & Co',  color: '#1C2B5E', width: 2, data: [48, 52, 59, 60, 64, 65] },
  { name: 'Pfizer',      color: '#C9851D', width: 2, data: [42, 81, 100, 58, 58, 60] },
  { name: 'Novartis',    color: '#9B8AAE', width: 2, data: [48, 52, 51, 46, 48, 50] },
  { name: 'Roche',       color: '#6B7280', width: 2, data: [58, 63, 61, 55, 55, 55] },
]
const years = [2020, 2021, 2022, 2023, 2024, 2025]

function Card2PharmaRevenue() {
  const W = 900, H = 400, padL = 60, padR = 30, padT = 30, padB = 50
  const max = 110, min = 20
  const stepX = (W - padL - padR) / (years.length - 1)
  const xOf = (i) => padL + i * stepX
  const yOf = (v) => padT + ((max - v) / (max - min)) * (H - padT - padB)
  const toPath = (data) => data.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xOf(i)},${yOf(v)}`).join(' ')

  return (
    <Card
      eyebrow="REVENUE TRENDS"
      title="AZ is closing the gap"
      subtitle="Five-year trajectory vs top 5 pharma peers. AZ is growing fastest."
      source="Macrotrends. DrugDiscoveryTrends Pharma 50. Citeline Top 12. ChemAnalyst Top 100 Pharma 2024."
    >
      <div className="rounded-2xl border border-az-border bg-white p-6 shadow-card md:p-8">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full">
          {[20, 40, 60, 80, 100].map((v) => (
            <g key={v}>
              <line x1={padL} y1={yOf(v)} x2={W - padR} y2={yOf(v)} stroke="#E5E8EE" strokeWidth="1" strokeDasharray="2 6" />
              <text x={padL - 10} y={yOf(v) + 4} textAnchor="end" fontFamily="Montserrat" fontSize="11" fontWeight="700" fill="#6B7280">
                ${v}B
              </text>
            </g>
          ))}
          {years.map((y, i) => (
            <text key={y} x={xOf(i)} y={H - padB + 22} textAnchor="middle" fontFamily="Montserrat" fontSize="11" fontWeight="700" fill="#1C2B5E">
              {y}
            </text>
          ))}
          {pharmaSeries.map((s, si) => (
            <g key={s.name}>
              <motion.path
                d={toPath(s.data)}
                stroke={s.color}
                strokeWidth={s.width}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: s.name === 'AstraZeneca' ? 1 : 0.65 }}
                transition={{ delay: 0.2 + si * 0.15, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              />
              {s.name === 'AstraZeneca' &&
                s.data.map((v, i) => (
                  <motion.circle
                    key={i}
                    cx={xOf(i)} cy={yOf(v)} r="5"
                    fill="#830051"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                  />
                ))}
            </g>
          ))}
        </svg>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-5 font-mono text-xs uppercase tracking-[0.18em]">
          {pharmaSeries.map((s) => (
            <div key={s.name} className="flex items-center gap-2">
              <span className="inline-block h-[3px] w-8 rounded-full" style={{ background: s.color }} />
              <span className={s.name === 'AstraZeneca' ? 'font-bold text-az-magenta' : 'text-az-muted'}>
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="mt-6 text-center font-display text-xl italic text-az-navy md:text-2xl"
      >
        AZ +120% since 2020 · <span className="text-az-magenta">fastest among top 5</span>
      </motion.div>
    </Card>
  )
}

/* =========================================================
   CARD 2.3: UK ONCOLOGY MARKET 2020-2029 (bar chart)
   ========================================================= */

const ukMarket = [
  { y: 2020, v: 4.0,  proj: false },
  { y: 2021, v: 4.3,  proj: false },
  { y: 2022, v: 5.1,  proj: false },
  { y: 2023, v: 5.3,  proj: false },
  { y: 2024, v: 5.55, proj: false },
  { y: 2025, v: 5.97, proj: true },
  { y: 2026, v: 6.42, proj: true },
  { y: 2027, v: 6.89, proj: true },
  { y: 2028, v: 7.44, proj: true },
  { y: 2029, v: 8.0,  proj: true },
]

function Card3UKMarket() {
  const W = 900, H = 380, padL = 60, padR = 30, padT = 30, padB = 60
  const max = 9
  const bw = (W - padL - padR) / ukMarket.length
  const yOf = (v) => padT + ((max - v) / max) * (H - padT - padB)

  return (
    <Card
      eyebrow="MARKET TREND"
      title="UK oncology drugs market · 2020–2029"
      subtitle="From $4.0B to a projected $8.0B. 7.64% CAGR. AZ targets £8.37B by 2030."
      source="Statista Market Forecast (oncology-drugs/united-kingdom). Insights10 UK Oncology Market Report."
    >
      <div className="rounded-2xl border border-az-border bg-white p-6 shadow-card md:p-8">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full">
          {[3, 5, 7, 9].map((v) => (
            <g key={v}>
              <line x1={padL} y1={yOf(v)} x2={W - padR} y2={yOf(v)} stroke="#E5E8EE" strokeWidth="1" strokeDasharray="2 6" />
              <text x={padL - 10} y={yOf(v) + 4} textAnchor="end" fontFamily="Montserrat" fontSize="11" fontWeight="700" fill="#6B7280">
                ${v}B
              </text>
            </g>
          ))}
          {ukMarket.map((d, i) => {
            const x = padL + i * bw + bw * 0.15
            const w = bw * 0.7
            const y = yOf(d.v)
            const h = H - padB - y
            return (
              <g key={d.y}>
                <motion.rect
                  x={x} width={w}
                  fill={d.proj ? '#830051' : '#1C2B5E'}
                  opacity={d.proj ? 0.7 : 1}
                  rx={2}
                  initial={{ y: H - padB, height: 0 }}
                  animate={{ y, height: h }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
                <text x={x + w / 2} y={H - padB + 22} textAnchor="middle" fontFamily="Montserrat" fontSize="11" fontWeight="700" fill="#1C2B5E">
                  {d.y}
                </text>
              </g>
            )
          })}

          <motion.text
            x={W - padR - 20} y={yOf(6.2)} textAnchor="end"
            fontFamily="Montserrat" fontSize="16" fontWeight="700" fontStyle="italic" fill="#830051"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            7.64% CAGR
          </motion.text>
        </svg>

        <div className="mt-6 flex items-center justify-center gap-8 font-mono text-xs uppercase tracking-[0.18em]">
          <div className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-sm bg-az-navy" />ACTUAL</div>
          <div className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-sm bg-az-magenta/70" />PROJECTED</div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="mt-6 text-center font-display text-xl italic text-az-navy md:text-2xl"
      >
        AZ 2030 ambition: <span className="text-az-magenta">£8.37B UK revenue</span> · ~9.6% CAGR
      </motion.div>
    </Card>
  )
}

/* =========================================================
   CARD 2.4: SIX STRATEGIC PILLARS
   ========================================================= */

const pillars = [
  { n: '01', title: 'Science Leadership',    body: 'Targeted therapies & ADCs. Pivot from chemo to precision.' },
  { n: '02', title: 'NHS Integration',       body: 'Hundreds of joint-working initiatives. CDF and NICE early access.' },
  { n: '03', title: 'AI and Data',           body: 'AI across 240+ trials. Turbine, BenevolentAI, Queen Mary.' },
  { n: '04', title: 'Personalised Medicine', body: 'Genomic and biomarker-driven therapies. Bispecifics in late pipeline.' },
  { n: '05', title: 'Access and Equity',     body: 'Managed access agreements with NHS England. ABPI-compliant.' },
  { n: '06', title: 'R&D Investment',        body: '£5B+ UK R&D spend. Cambridge as global science hub.' },
]

function Card4Pillars() {
  return (
    <Card
      eyebrow="STRATEGIC FRAMEWORK"
      title="Six strategic pillars in the UK"
      source="AZ annual report 2025. AZ UK strategy documents."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-xl border border-az-border bg-white p-6 shadow-card"
          >
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-magenta">
              PILLAR {p.n}
            </div>
            <h3 className="mt-3 font-display text-2xl italic text-az-navy">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-az-charcoal">{p.body}</p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.7 }}
              style={{ transformOrigin: 'left' }}
              className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-az-magenta via-az-gold to-az-magenta"
            />
          </motion.div>
        ))}
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 2.5: MARKET DYNAMICS (six forces)
   ========================================================= */

const forces = [
  { label: 'AGEING POPULATION',      impact: 'Rising cancer incidence.' },
  { label: 'PERSONALISED MEDICINE',  impact: 'Biomarker-driven displacing chemo.' },
  { label: 'IMMUNOTHERAPY SURGE',    impact: 'Checkpoint inhibitors becoming first-line.' },
  { label: 'CANCER DRUGS FUND',      impact: 'Accelerates uptake while NICE gathers evidence.' },
  { label: 'PIPELINE COMPETITION',   impact: '161 new cancer drugs approved 2017–2022.' },
  { label: 'NICE COST-EFFECTIVENESS', impact: 'High-price drugs face access hurdles.' },
]

function Card5Forces() {
  return (
    <Card
      eyebrow="MARKET DYNAMICS"
      title="Six forces shaping the UK oncology market"
      source="NICE. NHS England. ABPI data. Cancer Research UK."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {forces.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col rounded-xl border-[2px] border-az-navy bg-white p-5 shadow-card"
          >
            <div className="font-display text-lg font-bold italic text-az-magenta md:text-xl">
              {f.label}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-az-charcoal">{f.impact}</p>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 2.6: AI STRATEGY (4 capability cards)
   ========================================================= */

const aiCapabilities = [
  { n: '01', label: 'CLINICAL TRIALS',     body: 'AI across 240+ trials. 3D CT scan detection. Generative AI for medical writing.' },
  { n: '02', label: 'DRUG DISCOVERY',      body: 'Turbine partnership. Simulated cancer cells. Millions of resistance simulations.' },
  { n: '03', label: 'UK ACADEMIA',         body: 'Queen Mary University, 30-month multimodal omic programme. UKRI co-funded.' },
  { n: '04', label: 'COLLABORATIVE MODEL', body: 'Partnerships over internal build. BenevolentAI, Stanford, Algen ($555M).' },
]

function Card6AIStrategy() {
  return (
    <Card
      eyebrow="AI STRATEGY"
      title="How AI reshapes AstraZeneca's competitive edge"
      subtitle="Partnership-based. Different from Pfizer/Roche internal-build."
      source="AZ press releases 2019–2026. Queen Mary announcement Jan 2025. Algen deal Nov 2025."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {aiCapabilities.map((c, i) => (
          <motion.div
            key={c.n}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-5 rounded-xl border border-az-border bg-white p-6 shadow-card"
          >
            <div className="font-display text-4xl font-bold italic leading-none text-az-magenta md:text-5xl">
              {c.n}
            </div>
            <div className="flex-1 border-l border-az-border pl-5">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-navy">
                {c.label}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-az-charcoal">{c.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="mt-8 rounded-xl bg-az-navy p-5 text-center font-display text-lg italic text-white shadow-card-navy md:text-xl"
      >
        Partnerships, not internal build. <span className="text-az-gold">Lower capex · frontier access.</span>
      </motion.div>
    </Card>
  )
}

/* =========================================================
   CARD 2.7: PARTNERSHIP ECOSYSTEM (hub & spokes)
   ========================================================= */

const ecosystem = [
  { label: 'NHS / UK GOV',   sub: 'CDF · NICE · joint-working',       angle: 270 },
  { label: 'AI / DIGITAL',   sub: 'BenevolentAI · Turbine · Qure.ai', angle: 330 },
  { label: 'PHARMA CO-DEV',  sub: 'Daiichi · Merck · Ionis',          angle: 30  },
  { label: 'ACADEMIA',       sub: 'Oxford · Stanford · Karolinska',   angle: 90  },
  { label: 'GLOBAL / CHINA', sub: '$2.5B Beijing · CSPC $1.62B',      angle: 150 },
  { label: 'ALGEN',          sub: 'CRISPR + AI · $555M',              angle: 210 },
]

function Card7Ecosystem() {
  const cx = 500, cy = 260, r = 210
  return (
    <Card
      eyebrow="PARTNERSHIP ECOSYSTEM"
      title="A broad, deliberate collaboration network"
      subtitle="Risk-sharing model spanning NHS, academia, pharma co-development, and international markets."
      source="AZ partnership announcements 2019–2026."
    >
      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 1000 520" className="h-auto w-full max-h-[560px]">
          {ecosystem.map((e, i) => {
            const a = (e.angle * Math.PI) / 180
            const x = cx + Math.cos(a) * r
            const y = cy + Math.sin(a) * r
            return (
              <motion.line
                key={`l${i}`}
                x1={cx} y1={cy} x2={x} y2={y}
                stroke="#830051" strokeWidth="1.5" opacity="0.35"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.7 }}
              />
            )
          })}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <circle cx={cx} cy={cy} r="80" fill="#830051" />
            <text x={cx} y={cy - 6} textAnchor="middle" fontFamily="Montserrat" fontSize="16" fontWeight="700" fontStyle="italic" fill="#FFFFFF">
              ASTRAZENECA
            </text>
            <text x={cx} y={cy + 14} textAnchor="middle" fontFamily="Montserrat" fontSize="11" fontWeight="700" letterSpacing="4" fill="#F5A623">
              PARTNERSHIPS
            </text>
          </motion.g>
          {ecosystem.map((e, i) => {
            const a = (e.angle * Math.PI) / 180
            const x = cx + Math.cos(a) * r
            const y = cy + Math.sin(a) * r
            return (
              <motion.g
                key={e.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.55 }}
              >
                <circle cx={x} cy={y} r="72" fill="#FFFFFF" stroke="#1C2B5E" strokeWidth="2" />
                <text x={x} y={y - 6} textAnchor="middle" fontFamily="Montserrat" fontSize="11" fontWeight="700" letterSpacing="2" fill="#1C2B5E">
                  {e.label}
                </text>
                <text x={x} y={y + 12} textAnchor="middle" fontFamily="Montserrat" fontSize="9" fill="#6B7280">
                  {e.sub}
                </text>
              </motion.g>
            )
          })}
        </svg>
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 2.8: PORTER'S FIVE FORCES
   ========================================================= */

const porter = {
  center: { label: 'RIVALRY',        rating: 'VERY HIGH', color: 'magenta', body: 'Merck, Roche, Pfizer, Novartis, BMS. AZ differentiated by ADC (Enhertu) and EGFR (Tagrisso).' },
  top:    { label: 'SUPPLIER POWER', rating: 'MED-LOW',   color: 'navy',    body: 'Global manufacturing reduces dependency. Gene therapy supply still nascent.' },
  bottom: { label: 'BUYER POWER',    rating: 'HIGH',      color: 'magenta', body: 'NHS monopsony · NICE cost-effectiveness gatekeeping.' },
  left:   { label: 'NEW ENTRANTS',   rating: 'MEDIUM',    color: 'gold',    body: 'Biotech disruption via ADCs, CAR-T, cell therapy. Patent portfolio provides moat.' },
  right:  { label: 'SUBSTITUTES',    rating: 'MEDIUM',    color: 'gold',    body: 'Biosimilars on older biologics. Novel ADCs have no near-term substitute.' },
}

const ratingTone = {
  magenta: { border: 'border-az-magenta', bg: 'bg-az-magenta/5', text: 'text-az-magenta'   },
  navy:    { border: 'border-az-navy',    bg: 'bg-az-navy/5',    text: 'text-az-navy'      },
  gold:    { border: 'border-az-gold',    bg: 'bg-az-gold/5',    text: 'text-az-gold-deep' },
}

function Card8Porter() {
  return (
    <Card
      eyebrow="COMPETITIVE LANDSCAPE"
      title="Porter's Five Forces · AstraZeneca UK oncology"
      subtitle="Competitive intensity: HIGH."
      source="Porter's Five Forces framework. Industry analysis. AZ annual report."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="md:col-span-3">
          <ForceBox force={porter.top} delay={0.1} />
        </div>
        <ForceBox force={porter.left}   delay={0.25} />
        <ForceBox force={porter.center} hero delay={0.4} />
        <ForceBox force={porter.right}  delay={0.25} />
        <div className="md:col-span-3">
          <ForceBox force={porter.bottom} delay={0.55} />
        </div>
      </div>
    </Card>
  )
}

function ForceBox({ force, hero = false, delay = 0 }) {
  const t = ratingTone[force.color]
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-xl border-[2px] ${t.border} ${t.bg} p-5 ${hero ? 'shadow-card-magenta' : 'shadow-card'}`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <div className={`font-display font-bold italic ${t.text} ${hero ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
          {force.label}
        </div>
        <div className={`font-mono text-[10px] font-bold uppercase tracking-[0.22em] ${t.text}`}>
          {force.rating}
        </div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-az-charcoal">{force.body}</p>
    </motion.div>
  )
}

/* =========================================================
   CARD 2.9: COMPETITIVE POSITIONING TABLE
   ========================================================= */

const positioning = [
  { dim: 'Oncology portfolio', az: 'STRONG',   roche: 'LEADER',   msd: 'STRONG',   nov: 'STRONG' },
  { dim: 'Immunotherapy',      az: 'GROWING',  roche: 'MODERATE', msd: 'LEADER',   nov: 'MODERATE' },
  { dim: 'Precision medicine', az: 'STRONG',   roche: 'LEADER',   msd: 'MODERATE', nov: 'STRONG' },
  { dim: 'AI integration',     az: 'LEADER',   roche: 'STRONG',   msd: 'MODERATE', nov: 'STRONG' },
  { dim: 'Data ecosystem',     az: 'STRONG',   roche: 'LEADER',   msd: 'MODERATE', nov: 'STRONG' },
]

const posTone = (v) => {
  if (v === 'LEADER')   return 'bg-az-magenta text-white'
  if (v === 'STRONG')   return 'bg-az-navy text-white'
  if (v === 'GROWING')  return 'bg-az-gold text-[#1C1C1C]'
  if (v === 'MODERATE') return 'bg-az-light text-az-muted'
  return 'bg-white text-az-muted'
}

function Card9Positioning() {
  return (
    <Card
      eyebrow="COMPETITIVE POSITIONING"
      title="AZ vs Roche, MSD, Novartis"
      subtitle="AZ leads on AI integration. Roche leads on portfolio breadth and data ecosystem."
      source="Company filings. Analyst reports. IMD Future Readiness 2025."
    >
      <div className="az-scroll overflow-x-auto rounded-2xl border border-az-border bg-white shadow-card">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead className="bg-az-light">
            <tr>
              <th className="px-5 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-az-muted">DIMENSION</th>
              <th className="px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-az-magenta">AZ</th>
              <th className="px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-az-navy">ROCHE</th>
              <th className="px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-az-navy">MSD</th>
              <th className="px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-az-navy">NOVARTIS</th>
            </tr>
          </thead>
          <tbody>
            {positioning.map((row, i) => (
              <motion.tr
                key={row.dim}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="border-t border-az-border"
              >
                <td className="px-5 py-4 font-display text-base italic text-az-navy md:text-lg">{row.dim}</td>
                {['az', 'roche', 'msd', 'nov'].map((k) => (
                  <td key={k} className="px-5 py-4">
                    <span className={`inline-block rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] ${posTone(row[k])}`}>
                      {row[k]}
                    </span>
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em]">
        <span className="inline-block rounded-full bg-az-magenta px-3 py-1 font-bold text-white">LEADER</span>
        <span className="inline-block rounded-full bg-az-navy px-3 py-1 font-bold text-white">STRONG</span>
        <span className="inline-block rounded-full bg-az-gold px-3 py-1 font-bold text-[#1C1C1C]">GROWING</span>
        <span className="inline-block rounded-full bg-az-light px-3 py-1 font-bold text-az-muted">MODERATE</span>
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 2.10: STRATEGIC IMPERATIVES
   ========================================================= */

const imperatives = [
  { n: '01', title: 'Win through AI-powered precision oncology', body: 'AI + oncology + NHS data in an end-to-end ecosystem.' },
  { n: '02', title: 'Accelerate NICE pathways',                  body: 'Leverage CDF and managed access to outpace rivals on UK market entry.' },
  { n: '03', title: 'Deepen ADC leadership',                     body: 'Enhertu and next-gen ADCs are AZ\u2019s clearest differentiator vs MSD immunotherapy dominance.' },
  { n: '04', title: 'Monitor key risks',                         body: 'Roche\u2019s diagnostics-data integration and MSD\u2019s Keytruda platform are the primary competitive threats.' },
]

function Card10Imperatives() {
  return (
    <Card
      eyebrow="STRATEGIC OUTLOOK"
      title="Four strategic imperatives"
      subtitle="Handoff to Ch 03: Strategy."
      source="AZ investor day 2024. Competitive analysis."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {imperatives.map((im, i) => (
          <motion.div
            key={im.n}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-xl border-[2px] border-az-magenta bg-white p-6 shadow-card-magenta"
          >
            <div className="font-display text-5xl font-bold italic leading-none text-az-magenta md:text-6xl">
              {im.n}
            </div>
            <h3 className="mt-3 font-display text-xl italic text-az-navy md:text-2xl">
              {im.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-az-charcoal">{im.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="mt-8 text-center font-display text-xl italic text-az-navy md:text-2xl"
      >
        The conditions are set. <span className="text-az-magenta">Anna picks up the strategy.</span>
      </motion.div>
    </Card>
  )
}

/* =========================================================
   EXPORT
   ========================================================= */

export default function Market() {
  return (
    <PaginatedChapter
      chapterId="market"
      pages={[
        <Card1Glance        key="glance"      />,
        <Card2PharmaRevenue key="pharma"      />,
        <Card3UKMarket      key="ukmarket"    />,
        <Card4Pillars       key="pillars"     />,
        <Card5Forces        key="forces"      />,
        <Card6AIStrategy    key="ai"          />,
        <Card7Ecosystem     key="ecosystem"   />,
        <Card8Porter        key="porter"      />,
        <Card9Positioning   key="positioning" />,
        <Card10Imperatives  key="imperatives" />,
      ]}
    />
  )
}
