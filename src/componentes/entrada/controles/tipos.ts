import { ReactNode } from 'react'
import { IconType } from 'react-icons'

import { TipoLlamadaEvento } from '../../../compartido/tipos'

export enum TIPO_BOTON {
  BOTON = 'button',
  REINICIAR = 'reset',
  ENVIAR = 'submit',
}

export type TipoBoton = {
  nombre: string
  etiqueta: string
  descripcion: string
  onClick: TipoLlamadaEvento
  className?: string
  Icono?: IconType
  tipo?: TIPO_BOTON
}

export type TipoBotonContextualizado = {
  onClick: TipoLlamadaEvento
  nombre?: string
  etiqueta?: string
  descripcion?: string
  className?: string
  Icono?: IconType
}

export type TipoCampo = {
  campo: string
  etiqueta: string
  error?: string
  children: JSX.Element
}

export type TipoCampoNumerico = {
  campo: string
  etiqueta: string
  valor: number
  onChange: TipoLlamadaEvento
  error?: string
  minimo?: number
  maximo?: number
  incrementos?: string
  ejemplo?: string
}

export type TipoCampoTextoCorto = {
  campo: string
  etiqueta: string
  valor: string
  onChange: TipoLlamadaEvento
  error?: string
  ejemplo?: string
}

export type TipoCampoListaDesplegable = {
  campo: string
  etiqueta: string
  valor: string
  onChange: TipoLlamadaEvento
  error?: string
  children: ReactNode
}
