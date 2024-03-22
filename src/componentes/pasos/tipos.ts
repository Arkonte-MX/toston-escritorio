import { ReactNode } from 'react'
import { TipoLlamadaEvento } from '../../compartido/tipos'

export type TipoPasos = {
  children: ReactNode
  onCancel: TipoLlamadaEvento
}

export type TipoComponentePaso = () => [
  ReactNode,
  TipoLlamadaEvento,
  TipoLlamadaEvento,
]

export type TipoEstadoPaso = () => [number, boolean, boolean, number]

export type TipoGanchoPaso = [TipoComponentePaso, TipoEstadoPaso]
