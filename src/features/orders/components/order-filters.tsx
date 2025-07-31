'use client'

import type { OrderFilters as OrderFiltersType } from '../types/order'

import { X, Filter } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface OrderFiltersProps {
  filters: OrderFiltersType
  onFiltersChange: (filters: OrderFiltersType) => void
}

export function OrderFilters({ filters, onFiltersChange }: OrderFiltersProps) {
  const updateFilter = (key: keyof OrderFiltersType, value: string | boolean) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const clearFilters = () => {
    onFiltersChange({
      searchTerm: '',
      cliente: 'todos',
      vendedor: 'todos',
      estado: 'todos-activos',
      fechaDesde: '',
      fechaHasta: '',
      incluirAnulados: false,
    })
  }

  return (
    <div className='bg-white p-4 rounded-lg shadow-sm border space-y-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='search-term'>
            Buscar Pedido/Tango
          </label>
          <Input
            id='search-term'
            onChange={(e) => updateFilter('searchTerm', e.target.value)}
            placeholder='N°...'
            value={filters.searchTerm}
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='cliente'>
            Cliente
          </label>
          <Select onValueChange={(value) => updateFilter('cliente', value)} value={filters.cliente}>
            <SelectTrigger id='cliente'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='todos'>Todos</SelectItem>
              <SelectItem value='Agro S.A.'>Agro S.A.</SelectItem>
              <SelectItem value='El Campo SRL'>El Campo SRL</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='vendedor'>
            Vendedor
          </label>
          <Select
            onValueChange={(value) => updateFilter('vendedor', value)}
            value={filters.vendedor}
          >
            <SelectTrigger id='vendedor'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='todos'>Todos</SelectItem>
              <SelectItem value='Juan Vendedor'>Juan Vendedor</SelectItem>
              <SelectItem value='María Vendedora'>María Vendedora</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='estado'>
            Estado
          </label>
          <Select onValueChange={(value) => updateFilter('estado', value)} value={filters.estado}>
            <SelectTrigger id='estado'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='todos-activos'>Todos (activos)</SelectItem>
              <SelectItem value='despachado'>Despachado</SelectItem>
              <SelectItem value='en-revision'>En revisión</SelectItem>
              <SelectItem value='pendiente'>Pendiente</SelectItem>
              <SelectItem value='procesado'>Procesado</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-end'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='fecha-desde'>
            Desde
          </label>
          <Input
            id='fecha-desde'
            onChange={(e) => updateFilter('fechaDesde', e.target.value)}
            placeholder='dd/mm/aaaa'
            type='date'
            value={filters.fechaDesde}
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='fecha-hasta'>
            Hasta
          </label>
          <Input
            id='fecha-hasta'
            onChange={(e) => updateFilter('fechaHasta', e.target.value)}
            placeholder='dd/mm/aaaa'
            type='date'
            value={filters.fechaHasta}
          />
        </div>

        <div className='flex items-center space-x-2'>
          <Checkbox
            checked={filters.incluirAnulados}
            id='incluir-anulados'
            onCheckedChange={(checked) => updateFilter('incluirAnulados', Boolean(checked))}
          />
          <label className='text-sm font-medium text-gray-700' htmlFor='incluir-anulados'>
            Incluir Anulados/Rechazados
          </label>
        </div>
      </div>

      <div className='flex gap-2'>
        <Button onClick={clearFilters} size='sm' variant='outline'>
          <X className='w-4 h-4 mr-1' />
          Limpiar Filtros
        </Button>
        <Button className='bg-tecnoplant-green hover:bg-tecnoplant-green-dark' size='sm'>
          <Filter className='w-4 h-4 mr-1' />
          Aplicar Filtros
        </Button>
      </div>
    </div>
  )
}
