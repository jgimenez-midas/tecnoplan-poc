/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { useState } from 'react'

import { ChevronDown, ChevronRight } from 'lucide-react'

import { cn } from '../../../lib/utils'

interface MenuItem {
  active?: boolean
  children?: MenuItem[]
  icon?: string
  id: string
  label: string
}

const menuItems: MenuItem[] = [
  {
    id: 'comercial',
    label: 'COMERCIAL',
    children: [
      { id: 'novedades', label: 'Novedades', icon: '📋' },
      { id: 'historial', label: 'Historial de Visitas', icon: '📊' },
    ],
  },
  {
    id: 'gestion',
    label: 'GESTIÓN',
    children: [
      { id: 'usuarios', label: 'Usuarios', icon: '👥' },
      { id: 'clientes', label: 'Clientes', icon: '🏢' },
      { id: 'productos', label: 'Productos', icon: '📦' },
      { id: 'pedidos', label: 'Pedidos', icon: '📋', active: true },
    ],
  },
  {
    id: 'finanzas',
    label: 'FINANZAS',
    children: [
      { id: 'cobros', label: 'Gestión de Cobros', icon: '💰' },
      { id: 'cuenta-corriente', label: 'Cuenta Corriente', icon: '📊' },
    ],
  },
  {
    id: 'deposito',
    label: 'DEPÓSITO',
    children: [
      { id: 'stock', label: 'Gestión de Stock', icon: '📦' },
      { id: 'abm-depositos', label: 'ABM Depósitos', icon: '🏪' },
    ],
  },
  {
    id: 'parametros',
    label: 'PARÁMETROS',
    children: [
      { id: 'tipo-cliente', label: 'Tipo de Cliente', icon: '⚙️' },
      { id: 'segmento', label: 'Segmento', icon: '📊' },
      { id: 'tecnologia', label: 'Tecnología', icon: '💻' },
      { id: 'presentacion', label: 'Presentación', icon: '📋' },
      { id: 'marca', label: 'Marca', icon: '🏷️' },
    ],
  },
]

export function Sidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['gestion'])

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  return (
    <div
      className='w-64 text-white flex flex-col'
      style={{ backgroundColor: 'var(--tecnoplant-500)' }}
    >
      <div className='p-4 border-b' style={{ borderColor: 'var(--tecnoplant-400)' }}>
        <div className='flex items-center gap-2'>
          <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'>
            <span className='text-sm font-bold' style={{ color: 'var(--tecnoplant-500)' }}>
              T
            </span>
          </div>
          <span className='font-semibold'>Tecnoplant</span>
        </div>
      </div>

      <nav className='flex-1 overflow-y-auto'>
        {menuItems.map((section) => (
          <div
            className='border-b'
            key={section.id}
            style={{ borderColor: 'var(--tecnoplant-400)' }}
          >
            <button
              className='w-full px-4 py-3 text-left text-xs font-semibold text-gray-300 flex items-center justify-between'
              onClick={() => toggleSection(section.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--tecnoplant-400)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
              style={{
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
            >
              {section.label}
              {expandedSections.includes(section.id) ? (
                <ChevronDown className='w-4 h-4' />
              ) : (
                <ChevronRight className='w-4 h-4' />
              )}
            </button>
            {expandedSections.includes(section.id) && section.children ? (
              <div style={{ backgroundColor: 'var(--tecnoplant-600)' }}>
                {section.children.map((item) => (
                  <a
                    className={cn(
                      'block px-6 py-2 text-sm flex items-center gap-2',
                      item.active && 'text-white font-medium',
                    )}
                    href='#'
                    key={item.id}
                    onMouseEnter={(e) => {
                      if (!item.active) {
                        e.currentTarget.style.backgroundColor = 'var(--tecnoplant-400)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!item.active) {
                        e.currentTarget.style.backgroundColor = 'transparent'
                      }
                    }}
                    style={{
                      backgroundColor: item.active ? 'var(--tecnoplant-400)' : 'transparent',
                      color: item.active ? 'white' : '#d1d5db', // text-gray-300
                    }}
                  >
                    <span className='text-base'>{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </nav>

      <div className='p-4 border-t' style={{ borderColor: 'var(--tecnoplant-400)' }}>
        <button
          className='text-sm text-gray-300 flex items-center gap-2'
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'white'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#d1d5db' // text-gray-300
          }}
        >
          <ChevronDown className='w-4 h-4' />
          Colapsar
        </button>
      </div>
    </div>
  )
}
