import { obtenerOpcionesTipoGasto } from './utilerias'

export const ERROR = {
  NOMBRE: {
    MINIMO: 'El nombre debe tener al menos 3 caracteres',
    MAXIMO: 'El nombre no puede exceder los 32 caracteres',
    REQUERIDO: 'El campo nombre es requerido',
  },
  MONTO: {
    MINIMO: 'El monto no puede ser menor a 0',
    MAXIMO: 'El monto no puede exceder 1,000,000',
  },
  TIPO: {
    REQUERIDO: 'El campo tipo es requerido',
  },
} as const

export const FORMULARIO = {
  NOMBRE: {
    CAMPO: 'nombre',
    ETIQUETA: 'Nombre',
    EJEMPLO: 'Servicio de Streaming',
  },
  MONTO: {
    CAMPO: 'monto',
    ETIQUETA: 'Monto',
    MINIMO: 1,
    MAXIMO: 1000000,
    INCREMENTOS: '1.10',
    EJEMPLO: '1000.00',
  },
  TIPO: {
    CAMPO: 'tipo',
    ETIQUETA: 'Tipo',
    OPCIONES: obtenerOpcionesTipoGasto(),
  },
} as const
