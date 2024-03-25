import { TipoElementoMenu } from './tipos'
import { VISTAS } from '../interfaz/constantes'
import { COLOR, CURSOR, GROSOR_TEXTO } from './constantes'

export const esMismaVista = (vista: VISTAS, actual: VISTAS): boolean =>
  vista === actual

export const obtenerColorElementoMenu = (activo: boolean): string =>
  activo ? COLOR.MENU.ELEMENTO.ACTIVO : COLOR.MENU.ELEMENTO.INACTIVO

export const obtenerCursorIconoElementoMenu = (activo: boolean): string =>
  activo ? CURSOR.MENU.ELEMENTO.ACTIVO : CURSOR.MENU.ELEMENTO.INACTIVO

export const obtenerGrosorNombreElementoMenu = (
  activo: boolean = false
): string =>
  activo ?
    GROSOR_TEXTO.MENU.ELEMENTO.ACTIVO
  : GROSOR_TEXTO.MENU.ELEMENTO.INACTIVO

export const obtenerColorAccionMenu = (deshabilitada: boolean): string =>
  deshabilitada ? COLOR.MENU.ACCION.DESHABILITADA : COLOR.MENU.ACCION.HABILITADA

export const obtenerCursorAccionMenu = (deshabilitada: boolean): string =>
  deshabilitada ?
    CURSOR.MENU.ACCION.DESHABILITADA
  : CURSOR.MENU.ACCION.HABILITADA

export const evitarRenderizadoElementoMenu = (
  { activo: anterior }: TipoElementoMenu,
  { activo: siguiente }: TipoElementoMenu
): boolean => anterior === siguiente
