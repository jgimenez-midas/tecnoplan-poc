export interface Order {
  comentarios: string
  estado: 'despachado' | 'en-revision' | 'pendiente' | 'procesado'
  fecha: string
  id: string
  monto: number
  nroPedido: string
  nroTango: string
  plazo: string
  razonSocial: string
  tipoCliente: string
  vendedor: string
}

export interface OrderFilters {
  cliente: string
  estado: string
  fechaDesde: string
  fechaHasta: string
  incluirAnulados: boolean
  searchTerm: string
  vendedor: string
}
