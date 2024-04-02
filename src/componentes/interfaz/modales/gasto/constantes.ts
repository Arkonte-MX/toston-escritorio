import { NUMEROS, TEXTO, VALIDEZ } from '../../../../compartido/constantes'
import { formateador } from '../../../../compartido/localizacion/utilidades'

import {
  obtenerOpcionesPeriodicidadGasto,
  obtenerOpcionesTipoGasto,
} from './utilerias'

export const ERROR = {
  NOMBRE: {
    MINIMO: `Debe tener al menos ${VALIDEZ.NOMBRE.MINIMO} caracteres`,
    MAXIMO: `No puede exceder los ${VALIDEZ.NOMBRE.MAXIMO} caracteres`,
    REQUERIDO: 'Por favor ponle nombre al gasto',
  },
  MONTO: {
    MINIMO: `Debe ser mayor a ${formateador.formatear.divisa(VALIDEZ.MONTO.MINIMO)}`,
    MAXIMO: `No puede exceder ${formateador.formatear.divisa(VALIDEZ.MONTO.MAXIMO)}`,
  },
  TIPO: {
    REQUERIDO: 'Por favor elige una opción',
  },
  PERIODICIDAD: {
    CANTIDAD: {
      MINIMO: `Debe ser minimo ${VALIDEZ.PERIODICIDAD.CANTIDAD.MINIMO}`,
      MAXIMO: `Debe ser máximo ${VALIDEZ.PERIODICIDAD.CANTIDAD.MAXIMO}`,
      REQUERIDO: 'Por favor especifica cada cuanto',
    },
    UNIDAD: {
      REQUERIDO: 'Por favor elige una opción',
    },
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
    ETIQUETA: 'Monto (estimado)',
    MINIMO: VALIDEZ.MONTO.MINIMO,
    MAXIMO: VALIDEZ.MONTO.MAXIMO,
    INCREMENTOS: '0.10',
    EJEMPLO: '1000.00',
  },
  TIPO: {
    CAMPO: 'tipo',
    ETIQUETA: 'Tipo',
    OPCIONES: obtenerOpcionesTipoGasto(),
  },
  PERIODICIDAD: {
    /**
     * FORMIK DEDUCE LA PROPIEDAD A ACTUALIZAR EN BASE AL NAME DEL INPUT
     * EN ESTE CASO EL VALOR DE "CAMPO".
     *
     * SI LA INTENCIÓN ES ACTUALIZAR LA PROPIEDAD DE UN OBJETO ANIDADO EN FORMIK,
     * EL VALOR DEL NAME DEL INPUT DEBE SER UNA 'RUTA' A ESA PROPIEDAD.
     *
     */
    CANTIDAD: {
      CAMPO: 'periodicidad.cantidad',
      ETIQUETA: 'Cada cuanto',
      MINIMO: VALIDEZ.PERIODICIDAD.CANTIDAD.MINIMO,
      MAXIMO: VALIDEZ.PERIODICIDAD.CANTIDAD.MAXIMO,
      INCREMENTOS: NUMEROS.UNO.toString(),
      EJEMPLO: NUMEROS.UNO.toString(),
    },
    UNIDAD: {
      CAMPO: 'periodicidad.unidad',
      ETIQUETA: TEXTO.VACIO,
      OPCIONES: obtenerOpcionesPeriodicidadGasto(),
    },
  },
} as const
