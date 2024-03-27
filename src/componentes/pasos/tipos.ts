import { ComponentType, ReactNode } from 'react'

import { TipoLlamadaEvento } from '../../compartido/tipos'
import { TipoBotonContextualizado } from '../entrada/controles/tipos'
import { IconType } from 'react-icons'

export type TipoPasos = {
  children: ReactNode
  onCancel: TipoLlamadaEvento
  onFinish: TipoLlamadaEvento
}

export type TipoComponentePaso = () => [
  ReactNode,
  TipoLlamadaEvento,
  TipoLlamadaEvento,
  TipoLlamadaEvento,
]

export type TipoEstadoPaso = () => [number, boolean, boolean, number]

export type TipoGanchoPaso = [TipoComponentePaso, TipoEstadoPaso]

export type TipoConfiguracionBotonSiguiente = {
  componente: ComponentType<TipoBotonContextualizado>
  manejador: TipoLlamadaEvento
  icono?: IconType
}
