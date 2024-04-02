import { NUMEROS } from '../../compartido/constantes'
import {
  esCifraValida,
  obtenerCantidadCaracteres,
} from '../../compartido/utilerias/divisa'

import { COLOR } from './constantes'

export const obtenerColorAnotacionCampo = (error: boolean): string =>
  error ? COLOR.CAMPO.ETIQUETA.INVALIDO : COLOR.CAMPO.ETIQUETA.VALIDO

export const obtenerColorBordeCampo = (error: boolean): string =>
  error ? COLOR.CAMPO.BORDE.INVALIDO : COLOR.CAMPO.BORDE.VALIDO

export const esCaracteresMontoDentroRango = (
  numero: string | number,
  maximo: number,
  minimo: number = NUMEROS.CERO
) => {
  if (!esCifraValida(numero)) return false

  return (
    obtenerCantidadCaracteres(numero) <= maximo &&
    obtenerCantidadCaracteres(numero) >= minimo
  )
}
