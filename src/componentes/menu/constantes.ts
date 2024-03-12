export enum ELEMENTOS_MENU {
  RESUMEN = 'Resumen',
  GASTOS = 'Gastos',
  DEUDAS = 'Deudas',
  COMPRAS = 'Compras',
}

export const COLORES = {
  MENU: {
    ACCION: {
      ACTIVO: 'text-emerald-600',
    },
    ELEMENTO: {
      ACTIVO: 'text-teal-800',
      INACTIVO: 'text-slate-300',
    },
  },
} as const
