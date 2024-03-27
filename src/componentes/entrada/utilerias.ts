import { COLOR } from './constantes'

export const obtenerColorAnotacionCampo = (error: boolean): string =>
  error ? COLOR.CAMPO.ETIQUETA.INVALIDO : COLOR.CAMPO.ETIQUETA.VALIDO

export const obtenerColorBordeCampo = (error: boolean): string =>
  error ? COLOR.CAMPO.BORDE.INVALIDO : COLOR.CAMPO.BORDE.VALIDO
