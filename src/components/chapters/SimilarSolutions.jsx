import { motion } from 'framer-motion'

const cards = [
  {
    name: 'Colibri',
    tag: 'Expert Network',
    body: 'Expert network platform connecting GPs, pulmonologists and oncologists. Specialist anticipation. No more fragmentation.',
  },
  {
    name: 'Impulsion',
    tag: 'Care Navigation',
    body: 'Physician engagement platform for COPD specialists. Reaches the right patient population.',
  },
  {
    name: 'AstraZeneca Coordination Layer',
    tag: 'Full Stack',
    body: 'The only player combining drugs, screening reach, and coordination platform.',
    highlighted: true,
  },
]

export default function SimilarSolutions() {
  return (
    <div>
      <div className="mb-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-az-magenta">
          Adjacent Plays
        </div>
        <h2 className="mt-2 font-display text-3xl italic leading-[1.25] pb-[0.15em] text-az-navy">
          Who Else is Building in This Space
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={[
              'relative overflow-hidden rounded-2xl bg-white p-7 transition-all',
              c.highlighted ? 'border-2 border-az-gold' : 'border border-az-border shadow-card',
            ].join(' ')}
            style={
              c.highlighted
                ? {
                    boxShadow:
                      '0 18px 44px rgba(245,166,35,0.35), 0 0 40px rgba(245,166,35,0.22)',
                  }
                : undefined
            }
          >
            <span
              className={[
                'inline-block rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]',
                c.highlighted ? 'bg-az-gold text-[#1C1C1C]' : 'bg-az-light text-az-muted',
              ].join(' ')}
            >
              {c.tag}
            </span>
            <h3 className="mt-4 font-display text-xl italic leading-[1.3] text-az-navy">
              {c.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-az-muted">
              {c.body}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
