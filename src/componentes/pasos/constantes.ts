import { NUMEROS } from '../../compartido/constantes'

export const COLORES = {
  BOTON_PASO: {
    HABILITADO: 'text-cyan-600',
    DESHABILITADO: 'text-slate-400',
  },
} as const

export const PUNTERO = {
  BOTON_PASO: {
    HABILITADO: 'cursor-pointer',
    DESHABILITADO: 'cursor-not-allowed',
  },
} as const

export const GROSOR_TEXTO = {
  NUMERO_PASO: {
    HABILITADO: 'font-bold',
    DESHABILITADO: 'font-light',
  },
} as const

export const PRIMER_PASO = NUMEROS.CERO

export enum BOTONES {
  CONTINUAR = 'Continuar',
  FINALIZAR = 'Finalizar',
}
