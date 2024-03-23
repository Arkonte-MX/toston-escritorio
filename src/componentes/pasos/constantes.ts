import { TEXTO_VACIO } from '../../compartido/constantes'

export const COLORES = {
  BOTON_PASO: {
    HABILITADO: 'text-cyan-600',
    DESHABILITADO: 'text-slate-400',
  },
} as const

export const PUNTERO = {
  BOTON_PASO: {
    HABILITADO: 'cursor-pointer',
    DESHABILITADO: TEXTO_VACIO,
  },
} as const

export const GROSOR_TEXTO = {
  NUMERO_PASO: {
    HABILITADO: 'font-bold',
    DESHABILITADO: 'font-light',
  },
}

export const PRIMER_PASO = 0

export enum BOTONES {
  CONTINUAR = 'Continuar',
  FINALIZAR = 'Finalizar',
}
