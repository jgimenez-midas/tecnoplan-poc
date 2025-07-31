'use client'

import type { OrderFilters as OrderFiltersType } from '../types/order'

import { useState } from 'react'

import { Header } from '../../../shared/components/layout/header'
import { Sidebar } from '../../../shared/components/layout/sidebar'
import { mockOrders } from '../data/mock-orders'

import { OrderFilters } from './order-filters'
import { OrdersTable } from './orders-table'

export function OrdersFeature() {
  const [filters, setFilters] = useState<OrderFiltersType>({
    searchTerm: '',
    cliente: 'todos',
    vendedor: 'todos',
    estado: 'todos-activos',
    fechaDesde: '',
    fechaHasta: '',
    incluirAnulados: false,
  })

  const filteredOrders = mockOrders.filter((order) => {
    if (
      filters.searchTerm &&
      !order.nroPedido.toLowerCase().includes(filters.searchTerm.toLowerCase())
    ) {
      return false
    }

    if (filters.cliente !== 'todos' && order.razonSocial !== filters.cliente) {
      return false
    }

    if (filters.vendedor !== 'todos' && order.vendedor !== filters.vendedor) {
      return false
    }

    if (filters.estado !== 'todos-activos' && order.estado !== filters.estado) {
      return false
    }

    return true
  })

  return (
    <div className='flex h-screen bg-gray-50'>
      <Sidebar />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <Header />
        <main className='flex-1 overflow-auto p-6'>
          <div className='space-y-6'>
            <OrderFilters filters={filters} onFiltersChange={setFilters} />
            <OrdersTable orders={filteredOrders} />
          </div>
        </main>
      </div>
    </div>
  )
}
