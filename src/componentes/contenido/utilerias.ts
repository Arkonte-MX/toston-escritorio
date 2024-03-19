import { VISTAS } from '../interfaz/constantes'

export const podriaDesplegarModal = (vista: VISTAS): boolean =>
  [VISTAS.GASTOS, VISTAS.DEUDAS, VISTAS.COMPRAS].includes(vista)
