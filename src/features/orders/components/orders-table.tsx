'use client'

import type { Order } from '../types/order'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface OrdersTableProps {
  orders: Order[]
}

export function OrdersTable({ orders }: OrdersTableProps) {
  const getStatusBadge = (estado: Order['estado']) => {
    const variants = {
      despachado: 'bg-gray-600 text-white',
      'en-revision': 'bg-yellow-500 text-white',
      pendiente: 'bg-blue-500 text-white',
      procesado: 'bg-green-500 text-white',
    }

    const labels = {
      despachado: 'Despachado',
      'en-revision': 'En revisión',
      pendiente: 'Pendiente',
      procesado: 'Procesado',
    }

    return <Badge className={variants[estado]}>{labels[estado]}</Badge>
  }

  const getActionButtons = (order: Order) => {
    const baseButtons = [
      <Button
        className='bg-yellow-500 hover:bg-yellow-600 text-white'
        key='ver'
        size='sm'
        variant='default'
      >
        Ver/Editar
      </Button>,
    ]

    if (order.estado === 'en-revision') {
      return [
        ...baseButtons,
        <Button className='bg-green-600 hover:bg-green-700 text-white' key='aprobar' size='sm'>
          Aprobar
        </Button>,
        <Button key='rechazar' size='sm' variant='destructive'>
          Rechazar
        </Button>,
      ]
    }

    if (order.estado === 'pendiente') {
      return [
        ...baseButtons,
        <Button className='bg-blue-600 hover:bg-blue-700 text-white' key='procesar' size='sm'>
          Procesar
        </Button>,
        <Button key='anular' size='sm' variant='destructive'>
          Anular
        </Button>,
      ]
    }

    if (order.estado === 'procesado') {
      return [
        ...baseButtons,
        <Button className='bg-green-600 hover:bg-green-700 text-white' key='preparar' size='sm'>
          Preparar
        </Button>,
        <Button key='anular' size='sm' variant='destructive'>
          Anular
        </Button>,
      ]
    }

    return baseButtons
  }

  return (
    <div className='bg-white rounded-lg shadow-sm border overflow-hidden'>
      <div className='overflow-x-auto min-w-0'>
        <table className='w-full min-w-full'>
          <thead className='bg-gray-50 border-b'>
            <tr>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]'>
                Nro Pedido
              </th>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px]'>
                Razón Social
              </th>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]'>
                Tipo Cliente
              </th>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]'>
                Vendedor
              </th>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]'>
                Nro en Tango
              </th>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]'>
                Fecha
              </th>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]'>
                Monto
              </th>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px]'>
                Plazo
              </th>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px]'>
                Comentarios
              </th>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]'>
                Estado
              </th>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px]'>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {orders.map((order) => (
              <tr className='hover:bg-gray-50' key={order.id}>
                <td className='px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900'>
                  {order.nroPedido}
                </td>
                <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-900'>
                  {order.razonSocial}
                </td>
                <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-900'>
                  {order.tipoCliente}
                </td>
                <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-900'>
                  {order.vendedor}
                </td>
                <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-900'>
                  {order.nroTango || '-'}
                </td>
                <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-900'>{order.fecha}</td>
                <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-900'>
                  ${order.monto.toFixed(2)}
                </td>
                <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-900'>{order.plazo}</td>
                <td className='px-4 py-3 text-sm text-gray-900 max-w-xs truncate'>
                  {order.comentarios}
                </td>
                <td className='px-4 py-3 whitespace-nowrap'>{getStatusBadge(order.estado)}</td>
                <td className='px-4 py-3 whitespace-nowrap text-sm'>
                  <div className='flex gap-2 flex-nowrap'>{getActionButtons(order)}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
