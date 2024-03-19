import { MODALES, VISTAS } from '../../interfaz/constantes'

import {
  evitarRenderizadoInterfaz,
  obtenerConfiguracionModal,
  obtenerConfiguracionVista,
} from '../utilerias'

import { TipoInterfaz } from '../tipos'

import VistaResumen from '../vistas/resumen'
import VistaGastos from '../vistas/gastos'
import VistaDeudas from '../vistas/deudas'
import VistaCompras from '../vistas/compras'

import CrearGasto from '../modales/gasto/CrearGasto'
import CrearCompra from '../modales/compra/CrearCompra'
import ModalNoEncontrado from '../modales/404'

const PROPS_VISTA_GASTOS_MODAL_CREAR_OCULTO: TipoInterfaz = {
  vista: VISTAS.GASTOS,
  modal: {
    operacion: MODALES.CREAR,
    visibilidad: false,
  },
  ocultarModal: () => {},
}

const PROPS_VISTA_GASTOS_MODAL_CREAR_VISIBLE: TipoInterfaz = {
  vista: VISTAS.GASTOS,
  modal: {
    operacion: MODALES.CREAR,
    visibilidad: true,
  },
  ocultarModal: () => {},
}

const PERMITIR_RENDERIZADO_INTERFAZ: boolean = false
const EVITAR_RENDERIZADO_INTERFAZ: boolean = true

describe('La utilería', () => {
  describe('obtenerConfiguracionVista', () => {
    it('deberia retornar el componente resumen', () => {
      const { componente } = obtenerConfiguracionVista(VISTAS.RESUMEN)
      expect(componente).toBe(VistaResumen)
    })
    it('deberia retornar el componente gastos', () => {
      const { componente } = obtenerConfiguracionVista(VISTAS.GASTOS)
      expect(componente).toBe(VistaGastos)
    })
    it('deberia retornar el componente deudas', () => {
      const { componente } = obtenerConfiguracionVista(VISTAS.DEUDAS)
      expect(componente).toBe(VistaDeudas)
    })
    it('deberia retornar el componente compras', () => {
      const { componente } = obtenerConfiguracionVista(VISTAS.COMPRAS)
      expect(componente).toBe(VistaCompras)
    })
  })

  describe('obtenerConfiguracionModal', () => {
    it('deberia retornar el componente crear gastos', () => {
      const { componente } = obtenerConfiguracionModal(
        VISTAS.GASTOS,
        MODALES.CREAR
      )
      expect(componente).toBe(CrearGasto)
    })
    it('deberia retornar el componente crear compra', () => {
      const { componente } = obtenerConfiguracionModal(
        VISTAS.COMPRAS,
        MODALES.CREAR
      )
      expect(componente).toBe(CrearCompra)
    })
    it('deberia retornar el componente crear resumen (no existe)', () => {
      const { componente } = obtenerConfiguracionModal(
        VISTAS.RESUMEN,
        MODALES.CREAR
      )
      expect(componente).toBe(ModalNoEncontrado)
    })
  })

  describe('evitarRenderizadoInterfaz', () => {
    it('deberia permitir renderizado', () => {
      expect(
        evitarRenderizadoInterfaz(
          PROPS_VISTA_GASTOS_MODAL_CREAR_OCULTO,
          PROPS_VISTA_GASTOS_MODAL_CREAR_VISIBLE
        )
      ).toBe(PERMITIR_RENDERIZADO_INTERFAZ)
    })
    it('deberia evitar renderizado', () => {
      expect(
        evitarRenderizadoInterfaz(
          PROPS_VISTA_GASTOS_MODAL_CREAR_VISIBLE,
          PROPS_VISTA_GASTOS_MODAL_CREAR_VISIBLE
        )
      ).toBe(EVITAR_RENDERIZADO_INTERFAZ)
    })
  })
})
