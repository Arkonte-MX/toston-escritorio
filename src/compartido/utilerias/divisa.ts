import { NUMEROS, VALIDEZ } from '../constantes'

export const tieneDecimales = (numero: string | number): boolean =>
  parseFloat(numero.toString()) % NUMEROS.UNO !== NUMEROS.CERO

export const esCifraValida = (numero: string | number) =>
  VALIDEZ.MONTO.EXPRESIONES.MONTO_VALIDO.test(numero.toString())

export const obtenerCantidadCaracteres = (numero: string | number) =>
  (tieneDecimales(numero) ?
    NUMEROS.CERO
  : VALIDEZ.MONTO.DECIMALES + NUMEROS.UNO) + numero.toString().length
