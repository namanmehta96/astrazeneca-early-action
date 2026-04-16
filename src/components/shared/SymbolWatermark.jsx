/**
 * Decorative AZ golden symbol watermark.
 * Lives behind chapter content. Very low opacity by default (0.04).
 */
export default function SymbolWatermark({
  className = '',
  opacity = 0.04,
  size = 520,
  position = { top: '8%', right: '-6%' },
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute z-0 ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        backgroundImage: `url('${import.meta.env.BASE_URL}Astrazeneca-Symbol.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        ...position,
      }}
    />
  )
}
