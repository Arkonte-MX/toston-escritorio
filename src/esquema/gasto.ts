import { InterfazDato } from './dato'

export interface InterfazTipoGasto extends InterfazDato {
  nombre: string
}

export interface InterfazPeriodicidadUnidadGasto extends InterfazDato {
  nombre: string
}

export interface InterfazPeriodicidadGasto {
  cantidad: number
  unidad: InterfazPeriodicidadUnidadGasto
}

export interface InterfazGasto extends InterfazDato {
  nombre: string
  monto: number
  tipo: InterfazTipoGasto
  periodicidad: InterfazPeriodicidadGasto
}
