/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        az: {
          white: '#FFFFFF',
          light: '#F4F6F9',
          navy: '#1C2B5E',
          'navy-deep': '#121D45',
          'navy-soft': '#2A3A70',
          // Brand primary accent — real AstraZeneca magenta. The `red`
          // alias is preserved so existing `text-az-red` / `bg-az-red`
          // classes continue to work without a mass rename.
          red: '#830051',
          magenta: '#830051',
          'magenta-deep': '#5C0039',
          purple: '#3C1053',
          'purple-deep': '#2A0B3B',
          'red-soft': '#E8CFDC',
          sky: '#00A3E0',
          gold: '#F5A623',
          'gold-deep': '#C9851D',
          amber: '#E8A93A',
          charcoal: '#2D2D2D',
          ink: '#1C1C1C',
          muted: '#6B7280',
          border: '#E5E8EE',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        mono: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Navy-tinted shadows (never pure black)
        card: '0 4px 24px rgba(28,43,94,0.10)',
        'card-hover': '0 18px 44px rgba(28,43,94,0.18)',
        'card-red': '0 18px 44px rgba(131,0,81,0.22)',
        'card-magenta': '0 18px 44px rgba(131,0,81,0.22)',
        'card-purple': '0 18px 44px rgba(60,16,83,0.22)',
        'card-sky': '0 18px 44px rgba(0,163,224,0.20)',
        'card-gold': '0 18px 44px rgba(245,166,35,0.30)',
        'card-amber': '0 18px 44px rgba(232,169,58,0.22)',
        'card-navy': '0 18px 44px rgba(28,43,94,0.22)',
        glow: '0 0 40px rgba(245,166,35,0.45)',
        'glow-gold': '0 0 60px rgba(245,166,35,0.50)',
        'glow-magenta': '0 0 40px rgba(131,0,81,0.45)',
      },
      backgroundImage: {
        'diamond-grid':
          'radial-gradient(circle at 1px 1px, rgba(28,43,94,0.08) 1px, transparent 0)',
        'sidebar-brand':
          'linear-gradient(180deg, #830051 0%, #3C1053 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-glow': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [],
}
