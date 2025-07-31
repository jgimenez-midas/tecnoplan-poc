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

// Status type for type safety
export type OrderStatus = keyof typeof tecnoplantTheme.colors.status

// Utility function to get status color
export const getStatusColor = (status: OrderStatus): string => {
  return tecnoplantTheme.colors.status[status]
}

// Utility function to get status color class
export const getStatusColorClass = (
  status: OrderStatus,
  type: 'bg' | 'text' | 'border' = 'bg',
): string => {
  return `${type}-status-${status.replace('-', '-')}`
}

// Utility function to get primary color
export const getPrimaryColor = (
  shade: keyof typeof tecnoplantTheme.colors.primary = 500,
): string => {
  return tecnoplantTheme.colors.primary[shade]
}

// Utility function to get primary color class
export const getPrimaryColorClass = (
  shade: keyof typeof tecnoplantTheme.colors.primary = 500,
  type: 'bg' | 'text' | 'border' = 'bg',
): string => {
  return `${type}-tecnoplant-${String(shade)}`
}
