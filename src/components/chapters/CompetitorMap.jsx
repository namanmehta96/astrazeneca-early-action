import { motion } from 'framer-motion'

const competitors = [
  { id: 'az',       name: 'AstraZeneca', note: 'deepest pipeline', x: 86, y: 55, r: 40, fill: '#830051', glow: 'rgba(131,0,81,0.45)', labelColor: '#830051' },
  { id: 'roche',    name: 'Roche',       note: 'closest peer',     x: 70, y: 72, r: 30, fill: '#1C2B5E', glow: 'rgba(28,43,94,0.4)',  labelColor: '#1C2B5E' },
  { id: 'median',   name: 'Median',      note: 'tools, no drugs',  x: 22, y: 82, r: 26, fill: '#00A3E0', glow: 'rgba(0,163,224,0.4)', labelColor: '#1C2B5E' },
  { id: 'optellum', name: 'Optellum',    note: 'runs NHS pilot',   x: 34, y: 88, r: 22, fill: '#00A3E0', glow: 'rgba(0,163,224,0.4)', labelColor: '#1C2B5E' },
  { id: 'lilly',    name: 'Eli Lilly',   note: '',                 x: 50, y: 26, r: 24, fill: '#8A93A3', glow: 'rgba(107,114,128,0.35)', labelColor: '#1C2B5E' },
]

export default function CompetitorMap() {
  const W = 820
  const H = 460
  const padL = 80
  const padR = 50
  const padT = 40
  const padB = 70

  const xOf = (p) => padL + (p / 100) * (W - padL - padR)
  const yOf = (p) => padT + (1 - p / 100) * (H - padT - padB)

  // Empty quadrant — top-right
  const eLeft = xOf(56)
  const eRight = xOf(98)
  const eTop = yOf(95)
  const eBottom = yOf(62)
  const ew = eRight - eLeft
  const eh = eBottom - eTop
  const ecx = eLeft + ew / 2
  const ecy = eTop + eh / 2

  const az = competitors[0]
  const azCX = xOf(az.x)
  const azCY = yOf(az.y)

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-card">
      <div className="mb-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-az-magenta">
          Competitor Map
        </div>
        <h3 className="mt-1 font-display text-xl italic text-az-navy">
          Where Everyone Sits Today
        </h3>
        <p className="mt-1 text-sm text-az-muted">
          Lung clinical depth across, AI integration up. Empty zone is what we want.
        </p>
      </div>

      <div className="relative" style={{ aspectRatio: `${W} / ${H}` }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full">
          <defs>
            <marker id="cm-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 Z" fill="#830051" />
            </marker>
            <filter id="cm-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#F5A623" floodOpacity="0.55" />
            </filter>
          </defs>

          {/* axes */}
          <line x1={padL} y1={padT} x2={padL} y2={H - padB} stroke="#E5E8EE" strokeWidth="1" />
          <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="#E5E8EE" strokeWidth="1" />
          {[25, 50, 75].map((t) => (
            <line key={`g-h-${t}`} x1={padL} y1={yOf(t)} x2={W - padR} y2={yOf(t)} stroke="#E5E8EE" strokeDasharray="2 6" strokeWidth="0.8" opacity="0.6" />
          ))}
          {[25, 50, 75].map((t) => (
            <line key={`g-v-${t}`} x1={xOf(t)} y1={padT} x2={xOf(t)} y2={H - padB} stroke="#E5E8EE" strokeDasharray="2 6" strokeWidth="0.8" opacity="0.6" />
          ))}

          {/* axis labels */}
          <text x={padL - 10} y={padT + 6} textAnchor="end" fontFamily="Montserrat" fontSize="10" fontWeight="700" fill="#6B7280" letterSpacing="2">
            ↑ AI MATURITY
          </text>
          <text x={W - padR} y={H - padB + 28} textAnchor="end" fontFamily="Montserrat" fontSize="10" fontWeight="700" fill="#6B7280" letterSpacing="2">
            LUNG CLINICAL DEPTH →
          </text>

          {/* Empty quadrant — glowing dashed border */}
          <motion.rect
            x={eLeft}
            y={eTop}
            width={ew}
            height={eh}
            rx="10"
            fill="rgba(245,166,35,0.08)"
            stroke="#F5A623"
            strokeWidth="2"
            strokeDasharray="8 6"
            filter="url(#cm-glow)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, strokeDashoffset: [0, -28] }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{
              opacity: { delay: 0.4, duration: 0.6 },
              strokeDashoffset: { duration: 2, repeat: Infinity, ease: 'linear' },
            }}
          />
          <text x={ecx} y={ecy - 6} textAnchor="middle" fontFamily="Montserrat" fontSize="14" fontWeight="800" fill="#C9851D" letterSpacing="2.5">
            EMPTY
          </text>
          <text x={ecx} y={ecy + 14} textAnchor="middle" fontFamily="Montserrat" fontSize="10" fontWeight="600" fill="#C9851D" letterSpacing="1.8">
            Coordination space
          </text>

          {/* Arrow from AZ → empty quadrant */}
          <motion.path
            d={`M ${azCX},${azCY - az.r - 4} Q ${(azCX + ecx) / 2},${Math.min(azCY, ecy) - 50} ${eLeft + 12},${ecy + 6}`}
            stroke="#830051"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 4"
            strokeLinecap="round"
            markerEnd="url(#cm-arrow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ delay: 1.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Competitor bubbles */}
          {competitors.map((c, i) => {
            const cx = xOf(c.x)
            const cy = yOf(c.y)
            return (
              <g key={c.id}>
                <motion.circle
                  cx={cx}
                  cy={cy}
                  fill={c.fill}
                  initial={{ r: 0, opacity: 0 }}
                  whileInView={{ r: c.r, opacity: 0.92 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{
                    delay: 0.2 + i * 0.15,
                    type: 'spring',
                    stiffness: 220,
                    damping: 20,
                  }}
                  style={{ filter: `drop-shadow(0 10px 20px ${c.glow})` }}
                />
                <motion.g
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ delay: 0.45 + i * 0.15, duration: 0.5 }}
                >
                  <text
                    x={cx}
                    y={cy + c.r + 18}
                    textAnchor="middle"
                    fontFamily="Montserrat"
                    fontSize="12"
                    fontWeight="700"
                    fill={c.labelColor}
                  >
                    {c.name}
                  </text>
                  {c.note && (
                    <text
                      x={cx}
                      y={cy + c.r + 33}
                      textAnchor="middle"
                      fontFamily="Montserrat"
                      fontSize="9"
                      fill="#6B7280"
                      letterSpacing="1"
                    >
                      {c.note}
                    </text>
                  )}
                </motion.g>
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
