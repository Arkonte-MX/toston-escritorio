import { ReactNode } from 'react'
import { IconType } from 'react-icons'

import { TipoLlamadaEvento } from '../../../compartido/tipos'
import { InterfazDato } from '../../../esquema/dato'

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
  children: JSX.Element
  error?: string
  Icono?: JSX.Element
}

export type TipoCampoTextoCorto = {
  campo: string
  etiqueta: string
  dato: string
  onChange: TipoLlamadaEvento
  ejemplo: string
  caracteres: number
  error?: string
  Icono?: JSX.Element
}

export type TipoCampoNumerico = {
  campo: string
  etiqueta: string
  dato: number
  onChange: TipoLlamadaEvento
  minimo: number
  maximo: number
  incrementos: string
  ejemplo: string
  caracteres: number
  error?: string
  Icono?: JSX.Element
}

export type TipoCampoListaDesplegable<T> = {
  campo: string
  etiqueta: string
  dato: T
  onChange: TipoLlamadaEvento
  children: ReactNode
  error?: string
  Icono?: JSX.Element
}

export type TipoOpcionCampoListaDesplegable = {
  valor: InterfazDato
  children: string
}
