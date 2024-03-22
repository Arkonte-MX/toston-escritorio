import { COLORES, GROSOR_TEXTO } from './constantes'

export const obtenerGrosorNumeroPasoRetroceder = (
  puede_retroceder: boolean = false
): string =>
  puede_retroceder ?
    GROSOR_TEXTO.NUMERO_PASO.HABILITADO
  : GROSOR_TEXTO.NUMERO_PASO.DESHABILITADO

export const obtenerGrosorNumeroPasoAvanzar = (
  puede_avanzar: boolean = false
): string =>
  puede_avanzar ?
    GROSOR_TEXTO.NUMERO_PASO.HABILITADO
  : GROSOR_TEXTO.NUMERO_PASO.DESHABILITADO

export const obtenerColorBotonPaso = (activo: boolean = false): string =>
  activo ? COLORES.BOTON_PASO.HABILITADO : COLORES.BOTON_PASO.DESHABILITADO
