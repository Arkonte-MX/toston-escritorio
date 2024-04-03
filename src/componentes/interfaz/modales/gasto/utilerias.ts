import {
  InterfazPeriodicidadUnidadGasto,
  InterfazTipoGasto,
} from '../../../../esquema/gasto'

/**
 * TODO
 *
 * OBTENER ESTOS DATOS DESDE INDEXEDDB O UNA API
 *
 */

export const obtenerOpcionesTipoGasto = (): InterfazTipoGasto[] => [
  {
    id: 1,
    nombre: 'Gasto Fijo',
  },
  {
    id: 2,
    nombre: 'Gasto Variable',
  },
]

export const obtenerOpcionesPeriodicidadGasto =
  (): InterfazPeriodicidadUnidadGasto[] => [
    {
      id: 1,
      nombre: 'Día',
    },
    {
      id: 2,
      nombre: 'Semana',
    },
    {
      id: 3,
      nombre: 'Mes',
    },
    {
      id: 4,
      nombre: 'Año',
    },
  ]
