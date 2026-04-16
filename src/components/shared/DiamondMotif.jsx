import { motion } from 'framer-motion'

// The AZ-inspired diamond: appears as watermark, section divider, loading.
export default function DiamondMotif({
  size = 24,
  stroke = 'currentColor',
  fill = 'none',
  rotate = false,
  className = '',
  strokeWidth = 1.2,
}) {
  const M = rotate ? motion.g : 'g'
  const rotateProps = rotate
    ? {
        animate: { rotate: 360 },
        transition: { duration: 18, ease: 'linear', repeat: Infinity },
        style: { transformOrigin: '12px 12px' },
      }
    : {}

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
    >
      <M {...rotateProps}>
        <path
          d="M12 2.5 L21.5 12 L12 21.5 L2.5 12 Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          fill={fill}
          strokeLinejoin="round"
        />
        <path
          d="M12 6.5 L17.5 12 L12 17.5 L6.5 12 Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinejoin="round"
          opacity="0.55"
        />
        <path
          d="M12 10 L14 12 L12 14 L10 12 Z"
          fill={stroke}
          opacity="0.9"
        />
      </M>
    </svg>
  )
}
