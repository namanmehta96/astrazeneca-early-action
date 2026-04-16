// Minimal SVG icon set. No emoji, no icon library: exact control, small bundle.
// Stroke-based, inherits currentColor, 24px default.

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Diamond = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M12 2.5 L21.5 12 L12 21.5 L2.5 12 Z" />
    <path d="M12 7 L17 12 L12 17 L7 12 Z" />
  </svg>
)

export const Grid = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
)

export const Alert = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M12 3 L22 20 L2 20 Z" />
    <path d="M12 10 V14" />
    <circle cx="12" cy="17" r="0.6" fill="currentColor" />
  </svg>
)

export const Building = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M4 21 V6 L12 3 L20 6 V21" />
    <path d="M4 21 H20" />
    <path d="M9 9 H9.01 M15 9 H15.01 M9 13 H9.01 M15 13 H15.01 M9 17 H9.01 M15 17 H15.01" strokeWidth="2" />
  </svg>
)

export const Waves = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M2 8 Q6 5 10 8 T18 8 T22 8" />
    <path d="M2 13 Q6 10 10 13 T18 13 T22 13" />
    <path d="M2 18 Q6 15 10 18 T18 18 T22 18" />
  </svg>
)

export const Layers = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M12 3 L21 8 L12 13 L3 8 Z" />
    <path d="M3 12 L12 17 L21 12" />
    <path d="M3 16 L12 21 L21 16" />
  </svg>
)

export const Chart = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M3 20 H21" />
    <path d="M6 20 V13" />
    <path d="M11 20 V9" />
    <path d="M16 20 V5" />
  </svg>
)

export const Shield = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M12 3 L20 6 V12 C20 17 16 20 12 21 C8 20 4 17 4 12 V6 Z" />
    <path d="M9 12 L11 14 L15 10" />
  </svg>
)

export const Flag = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M5 21 V4" />
    <path d="M5 4 H17 L15 8 L17 12 H5" />
  </svg>
)

export const ArrowRight = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M5 12 H19" />
    <path d="M13 6 L19 12 L13 18" />
  </svg>
)

export const ArrowDown = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M12 5 V19" />
    <path d="M6 13 L12 19 L18 13" />
  </svg>
)

export const Check = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M5 12 L10 17 L19 7" strokeWidth="2" />
  </svg>
)

export const Dash = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M6 12 H18" />
  </svg>
)

export const Plus = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M12 5 V19 M5 12 H19" />
  </svg>
)

export const Minus = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M5 12 H19" />
  </svg>
)

export const Heart = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M12 20 C7 16 3 13 3 9 A4 4 0 0 1 12 7 A4 4 0 0 1 21 9 C21 13 17 16 12 20 Z" />
  </svg>
)

export const Coin = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7 V17 M9 10 H15 M9 14 H15" />
  </svg>
)

export const Clock = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7 V12 L15 14" />
  </svg>
)

export const Leaf = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M4 20 C10 20 20 14 20 4 C10 4 4 10 4 20 Z" />
    <path d="M4 20 C8 16 12 12 18 6" />
  </svg>
)

export const Route = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <path d="M8.5 6 H14 A4 4 0 0 1 14 14 H10 A4 4 0 0 0 10 18 H15.5" />
  </svg>
)

export const Beaker = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <path d="M9 3 V9 L4 18 A2 2 0 0 0 5.8 21 H18.2 A2 2 0 0 0 20 18 L15 9 V3" />
    <path d="M8 3 H16" />
    <path d="M7 14 H17" />
  </svg>
)

export const Hospital = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <rect x="4" y="7" width="16" height="14" />
    <path d="M12 11 V17 M9 14 H15" />
    <path d="M10 7 V3 H14 V7" />
  </svg>
)

export const Truck = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    <rect x="2" y="7" width="12" height="10" />
    <path d="M14 10 H19 L22 14 V17 H14" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
)

export const iconFor = (name) => {
  const map = {
    diamond: Diamond, grid: Grid, alert: Alert, building: Building,
    waves: Waves, layers: Layers, chart: Chart, shield: Shield, flag: Flag,
    heart: Heart, coin: Coin, clock: Clock, leaf: Leaf,
    route: Route, beaker: Beaker, hospital: Hospital, truck: Truck,
  }
  return map[name] || Diamond
}
