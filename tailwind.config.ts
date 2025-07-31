import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tecnoplant primary colors
        tecnoplant: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce5bc',
          300: '#8dd18d',
          400: '#5cb85c',
          500: '#2e7d32',
          600: '#1b5e20',
          700: '#1b4e1f',
          800: '#1a3e1a',
          900: '#173317',
        },
        // Status colors
        status: {
          despachado: '#6b7280',
          'en-revision': '#f59e0b',
          pendiente: '#3b82f6',
          procesado: '#10b981',
        },
        // Dark mode status colors
        'status-dark': {
          despachado: '#9ca3af',
          'en-revision': '#fbbf24',
          pendiente: '#60a5fa',
          procesado: '#34d399',
        },
      },
      backgroundColor: {
        'status-despachado': 'var(--status-despachado)',
        'status-en-revision': 'var(--status-en-revision)',
        'status-pendiente': 'var(--status-pendiente)',
        'status-procesado': 'var(--status-procesado)',
      },
      textColor: {
        'status-despachado': 'var(--status-despachado)',
        'status-en-revision': 'var(--status-en-revision)',
        'status-pendiente': 'var(--status-pendiente)',
        'status-procesado': 'var(--status-procesado)',
      },
      borderColor: {
        'status-despachado': 'var(--status-despachado)',
        'status-en-revision': 'var(--status-en-revision)',
        'status-pendiente': 'var(--status-pendiente)',
        'status-procesado': 'var(--status-procesado)',
      },
    },
  },
  plugins: [],
}

export default config
