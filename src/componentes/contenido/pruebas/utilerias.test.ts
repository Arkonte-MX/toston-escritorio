import { VISTAS } from '../../interfaz/constantes'
import { podriaDesplegarModal } from '../utilerias'

const VISTA_RESUMEN = VISTAS.RESUMEN
const VISTA_GASTOS = VISTAS.GASTOS
const VISTA_DEUDAS = VISTAS.DEUDAS
const VISTA_COMPRAS = VISTAS.COMPRAS

const PODRIA_DESPLEGAR_MODAL = true
const NO_DEBERIA_DSPLEGAR_MODAL = false

describe('La utilería', () => {
  describe('podriaDesplegarModal', () => {
    it(`debería retornar ${PODRIA_DESPLEGAR_MODAL} para la vista ${VISTA_GASTOS}`, () => {
      expect(podriaDesplegarModal(VISTA_GASTOS)).toBe(PODRIA_DESPLEGAR_MODAL)
    })
    it(`debería retornar ${PODRIA_DESPLEGAR_MODAL} para la vista ${VISTA_DEUDAS}`, () => {
      expect(podriaDesplegarModal(VISTA_DEUDAS)).toBe(PODRIA_DESPLEGAR_MODAL)
    })
    it(`debería retornar ${PODRIA_DESPLEGAR_MODAL} para la vista ${VISTA_COMPRAS}`, () => {
      expect(podriaDesplegarModal(VISTA_COMPRAS)).toBe(PODRIA_DESPLEGAR_MODAL)
    })
    it(`debería retornar ${NO_DEBERIA_DSPLEGAR_MODAL} para la vista ${VISTA_RESUMEN}`, () => {
      expect(podriaDesplegarModal(VISTA_RESUMEN)).toBe(
        NO_DEBERIA_DSPLEGAR_MODAL
      )
    })
  })
})
