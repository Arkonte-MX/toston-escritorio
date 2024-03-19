import { TipoElementoMenu } from './tipos'
import { VISTAS } from '../interfaz/constantes'
import { COLORES } from './constantes'

export const esMismaVista = (vista: VISTAS, actual: VISTAS): boolean =>
  vista === actual

export const obtenerColorElementoMenu = (activo: boolean): string =>
  activo ? COLORES.MENU.ELEMENTO.ACTIVO : COLORES.MENU.ELEMENTO.INACTIVO

export const obtenerColorAccionMenu = (deshabilitado: boolean): string =>
  deshabilitado ?
    COLORES.MENU.ACCION.DESHABILITADA
  : COLORES.MENU.ACCION.HABILITADA

export const evitarRenderizadoElementoMenu = (
  { activo: anterior }: TipoElementoMenu,
  { activo: siguiente }: TipoElementoMenu
): boolean => anterior === siguiente
