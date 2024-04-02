export const TEXTO = {
  VACIO: '',
} as const

export const NUMEROS = {
  CERO: 0,
  UNO: 1,
} as const

export const VALIDEZ = {
  MONTO: {
    MINIMO: 0.01,
    MAXIMO: 1000000,
    DECIMALES: 2,
    EXPRESIONES: {
      MONTO_VALIDO: /^(\d+|\d+\.\d+)$/,
    },
  },
  NOMBRE: {
    MINIMO: 3,
    MAXIMO: 32,
  },
  PERIODICIDAD: {
    CANTIDAD: {
      MINIMO: 1,
      MAXIMO: 12,
    },
    UNIDAD: {},
  },
} as const

export const TECLAS = {
  ESCAPE: 'Escape',
  CURSOR: {
    IZQUIERDO: 'ArrowLeft',
    DERECHO: 'ArrowRight',
  },
} as const

export const EVENTO = {
  TECLADO: {
    KEYDOWN: 'keydown',
  },
} as const
