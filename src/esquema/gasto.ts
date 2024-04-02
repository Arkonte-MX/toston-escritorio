import { InterfazDato } from './dato'

export interface InterfazTipoGasto extends InterfazDato {
  nombre: string
}

export interface InterfazPeriodicidadGasto extends InterfazDato {
  nombre: string
}

export interface InterfazGasto extends InterfazDato {
  nombre: string
  monto: number
  tipo: InterfazTipoGasto
  periodicidad: {
    cantidad: number
    unidad: InterfazPeriodicidadGasto
  }
}
