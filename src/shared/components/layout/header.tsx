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
    <header className='bg-white border-b border-gray-200 px-6 py-4'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-semibold text-gray-900'>Pedidos</h1>
        </div>

        <div className='flex items-center gap-4'>
          <span className='text-sm text-gray-600'>Simular como:</span>

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

          <Button className='bg-tecnoplant-green hover:bg-tecnoplant-green-dark' size='sm'>
            Nuevo Pedido
          </Button>
        </div>
      </div>
    </header>
  )
}
