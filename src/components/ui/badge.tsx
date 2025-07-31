import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { getStatusColorClass, type OrderStatus } from '@/lib/theme'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
        // Tecnoplant status variants
        despachado: 'border-transparent text-white',
        'en-revision': 'border-transparent text-white',
        pendiente: 'border-transparent text-white',
        procesado: 'border-transparent text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  status?: OrderStatus
}

function Badge({ className, variant, status, ...props }: BadgeProps) {
  // If status is provided, use the status color class
  const statusClass = status ? getStatusColorClass(status, 'bg') : ''

  return <div className={cn(badgeVariants({ variant }), statusClass, className)} {...props} />
}

export { Badge, badgeVariants }
