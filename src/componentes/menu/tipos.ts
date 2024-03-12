import { IconType } from 'react-icons'
import { ELEMENTOS_MENU } from './constantes'

export type TipoElementoMenu = {
  Icono: IconType
  onClick: (parametros?: object) => void
  es_activo: boolean
  children: JSX.Element
}

export type TipoAccionMenu = {
  Icono: IconType
  onClick: (parametros?: object) => void
  activo: ELEMENTOS_MENU
}
