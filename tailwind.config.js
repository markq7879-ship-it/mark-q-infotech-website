/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        // Dark Theme Surfaces
        primary: '#090D16',       // Richer, deeper navy-black background
        secondary: '#111726',     // Elevation surface (cards/sections)
        card: '#182032',          // Card/Component surface
        cardHover: '#1F293D',     // Subtle hover state for cards
        border: 'rgba(255, 255, 255, 0.08)', // Soft glassmorphic border

        // Modern High-Contrast Typography
        textPrimary: '#F8FAFC',   // Clean crisp white
        textSecondary: '#94A3B8', // Soft slate
        textMuted: '#64748B',     // Dimmed details

        // Vibrantly Balanced Accents
        accentBlue: '#3B82F6',
        accentCyan: '#06B6D4',
        accentPurple: '#8B5CF6',
        accentPink: '#EC4899',

        // Action Statuses
        success: '#10B981',
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(59, 130, 246, 0.3)',
        glowCyan: '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right bottom, #090D16, #111726, #182032)',
      },
    },
  },
  plugins: [],
}