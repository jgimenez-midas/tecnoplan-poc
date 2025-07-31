'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Header() {
  return (
    <header className='bg-white border-b px-6 py-4' style={{ borderColor: 'var(--border)' }}>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-semibold text-foreground'>Pedidos</h1>
        </div>

        <div className='flex items-center gap-4'>
          <span className='text-sm text-muted-foreground'>Simular como:</span>

          <Select defaultValue='admin'>
            <SelectTrigger className='w-48'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='admin'>Admin User (Admin)</SelectItem>
              <SelectItem value='vendedor'>Vendedor User</SelectItem>
              <SelectItem value='supervisor'>Supervisor User</SelectItem>
            </SelectContent>
          </Select>

          <Button size='sm' variant='outline'>
            Descargar PDF
          </Button>

          <Button
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--tecnoplant-600)'
              e.currentTarget.style.borderColor = 'var(--tecnoplant-600)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--tecnoplant-500)'
              e.currentTarget.style.borderColor = 'var(--tecnoplant-500)'
            }}
            size='sm'
            style={{
              backgroundColor: 'var(--tecnoplant-500)',
              borderColor: 'var(--tecnoplant-500)',
              color: 'white',
            }}
          >
            Nuevo Pedido
          </Button>
        </div>
      </div>
    </header>
  )
}
