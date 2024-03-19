import { ComponentType } from 'react'
import { MODALES, VISTAS } from './constantes'
import { TipoLlamadaEvento } from '../../compartido/tipos'

export type TipoInterfaz = {
  vista: VISTAS
  modal: {
    operacion: MODALES
    visibilidad: boolean
  }
  ocultarModal: TipoLlamadaEvento
}

export type TipoConfiguracionVista = {
  componente: ComponentType<TipoVista>
}

export type TipoConfiguracionModal = {
  titulo: string
  descripcion: string
  componente: ComponentType<TipoModal>
}

export type TipoVista = {}

export type TipoModal = {}

export type TipoContenedorModal = {
  children: JSX.Element
  visibilidad: boolean
  cerrar: TipoLlamadaEvento
  titulo?: string
  descripcion?: string
  botones?: JSX.Element
}
