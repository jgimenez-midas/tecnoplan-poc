export const tecnoplantTheme = {
  colors: {
    // Main Tecnoplant green from the image
    primary: {
      50: '#f0f9f0',
      100: '#dcf2dc',
      200: '#bce5bc',
      300: '#8dd18d',
      400: '#5cb85c',
      500: '#2e7d32', // Main green
      600: '#1b5e20',
      700: '#1b4e1f',
      800: '#1a3e1a',
      900: '#173317',
    },
    // Status colors matching the badges in the image
    status: {
      despachado: '#6b7280', // Gray
      'en-revision': '#f59e0b', // Yellow/Orange
      pendiente: '#3b82f6', // Blue
      procesado: '#10b981', // Green
    },
  },
} as const

export type TecnoplantTheme = typeof tecnoplantTheme
