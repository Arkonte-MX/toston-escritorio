export const ESTILO = {
  CAMPO: 'peer h-full w-full rounded-md border border-2 px-3 py-2 text-sm',
} as const

export const COLOR = {
  BOTON: {
    SENCILLO: {
      NEUTRAL: 'text-white bg-slate-700 hover:bg-slate-600',
      CONTINUAR: 'text-white bg-cyan-700 hover:bg-cyan-600',
      FINALIZAR: 'text-white bg-teal-700 hover:bg-teal-600 ',
      CANCELAR: 'text-white bg-rose-700 hover:bg-rose-600',
    },
  },
  CAMPO: {
    BORDE: {
      VALIDO: 'border-cyan-600',
      INVALIDO: 'border-rose-600',
    },
    ETIQUETA: {
      INVALIDO: 'text-rose-600',
      VALIDO: 'text-cyan-600',
    },
  },
} as const
