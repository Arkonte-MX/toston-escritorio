import { ReactNode } from 'react'

import {
  TipoLlamadaEvento,
  TipoRetrollamadaEvento,
} from '../../compartido/tipos'

import { IconType } from 'react-icons'
import { VISTAS } from '../interfaz/constantes'

export type TipoMenu = {
  vista: VISTAS
  cambiarVista: TipoRetrollamadaEvento
  mostrarModal: TipoLlamadaEvento
}

export type TipoElementoMenu = {
  Icono: IconType
  onClick: () => void
  activo: boolean
  children: ReactNode
}

export type TipoAccionMenu = {
  Icono: IconType
  onClick: () => void
  deshabilitado: boolean
}
