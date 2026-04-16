import { motion } from 'framer-motion'

// Reveals text word-by-word with a clip-path mask effect: 21st.dev style.
// Use for hero headlines and chapter titles.
export default function TextReveal({
  text,
  as: Tag = 'span',
  delay = 0,
  stagger = 0.08,
  className = '',
  lineClassName = '',
}) {
  const lines = Array.isArray(text) ? text : [text]

  return (
    <Tag className={className}>
      {lines.map((line, li) => (
        <span
          key={li}
          className={['block leading-[1.2] pb-[0.15em]', lineClassName].join(' ')}
        >
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: delay + li * stagger * 3,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block will-change-transform"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
