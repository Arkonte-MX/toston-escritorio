import VistaResumen from './vistas/resumen'
import VistaGastos from './vistas/gastos'
import VistaDeudas from './vistas/deudas'
import VistaCompras from './vistas/compras'

import CrearGasto from './modales/gasto/CrearGasto'

import { VISTAS, MODALES } from './constantes'
import {
  TipoConfiguracionModal,
  TipoConfiguracionVista,
  TipoInterfaz,
} from './tipos'
import CrearCompra from './modales/compra/CrearCompra'
import ModalNoEncontrado from './modales/404'

export const obtenerConfiguracionVista = (
  vista: VISTAS
): TipoConfiguracionVista => {
  const vistas = {
    [VISTAS.RESUMEN]: { componente: VistaResumen },
    [VISTAS.GASTOS]: { componente: VistaGastos },
    [VISTAS.DEUDAS]: { componente: VistaDeudas },
    [VISTAS.COMPRAS]: { componente: VistaCompras },
  } as const

  return vistas[vista] ?? { componente: VistaResumen }
}

export const obtenerConfiguracionModal = (
  vista: VISTAS,
  modal: MODALES
): TipoConfiguracionModal => {
  const modales = {
    [VISTAS.RESUMEN]: {
      [MODALES.CREAR]: null,
      [MODALES.CONSULTAR]: null,
      [MODALES.ACTUALIZAR]: null,
      [MODALES.ELIMINAR]: null,
    },
    [VISTAS.GASTOS]: {
      [MODALES.CREAR]: {
        componente: CrearGasto,
        titulo: 'Nuevo gasto',
        descripcion: '',
      },
      [MODALES.CONSULTAR]: null,
      [MODALES.ACTUALIZAR]: null,
      [MODALES.ELIMINAR]: null,
    },
    [VISTAS.DEUDAS]: {
      [MODALES.CREAR]: null,
      [MODALES.CONSULTAR]: null,
      [MODALES.ACTUALIZAR]: null,
      [MODALES.ELIMINAR]: null,
    },
    [VISTAS.COMPRAS]: {
      [MODALES.CREAR]: {
        componente: CrearCompra,
        titulo: 'Nueva compra planificada',
        descripcion: '',
      },
      [MODALES.CONSULTAR]: null,
      [MODALES.ACTUALIZAR]: null,
      [MODALES.ELIMINAR]: null,
    },
  } as const

  return (
    modales[vista][modal] ?? {
      componente: ModalNoEncontrado,
      titulo: '404',
      descripcion: 'Modal no encontrado',
    }
  )
}

export const evitarRenderizadoInterfaz = (
  anterior: TipoInterfaz,
  siguiente: TipoInterfaz
): boolean => {
  const es_misma_vista = anterior?.vista === siguiente?.vista
  const es_misma_visibilidad =
    anterior?.modal?.visibilidad === siguiente?.modal?.visibilidad

  return es_misma_vista && es_misma_visibilidad
}
