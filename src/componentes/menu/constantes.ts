import { TEXTO_VACIO } from '../../compartido/constantes'

export const COLOR = {
  MENU: {
    ACCION: {
      HABILITADA: 'text-teal-600',
      DESHABILITADA: 'text-yellow-600',
    },
    ELEMENTO: {
      ACTIVO: 'text-cyan-700',
      INACTIVO: 'text-slate-400',
    },
  },
} as const

export const CURSOR = {
  MENU: {
    ACCION: {
      HABILITADA: 'cursor-pointer',
      DESHABILITADA: 'cursor-context-menu',
    },
    ELEMENTO: {
      ACTIVO: TEXTO_VACIO,
      INACTIVO: 'cursor-pointer',
    },
  },
} as const

export const GROSOR_TEXTO = {
  MENU: {
    ELEMENTO: {
      ACTIVO: 'font-extrabold',
      INACTIVO: 'font-medium',
    },
  },
} as const
