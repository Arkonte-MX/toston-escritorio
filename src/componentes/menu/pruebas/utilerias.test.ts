import { createElement } from 'react'
import { GiAbacus } from 'react-icons/gi'

import { VISTAS } from '../../interfaz/constantes'
import { COLORES } from '../constantes'
import { TipoElementoMenu } from '../tipos'
import {
  esMismaVista,
  evitarRenderizadoElementoMenu,
  obtenerColorAccionMenu,
  obtenerColorElementoMenu,
} from '../utilerias'

const VISTA_COMPRA: VISTAS = VISTAS.COMPRAS
const VISTA_RESUMEN: VISTAS = VISTAS.RESUMEN

const ELEMENTO_ACTIVO: boolean = true
const ELEMENTO_INACTIVO: boolean = false

const COLOR_ELEMENTO_ACTIVO: string = COLORES.MENU.ELEMENTO.ACTIVO
const COLOR_ELEMENTO_INACTIVO: string = COLORES.MENU.ELEMENTO.INACTIVO

const VISTA_ACCION_HABILITADA: boolean = false
const VISTA_ACCION_DESHABILITADA: boolean = true

const COLOR_ACCION_HABILITADA: string = COLORES.MENU.ACCION.HABILITADA
const COLOR_ACCION_DESHABILITADA: string = COLORES.MENU.ACCION.DESHABILITADA

const PERMITIR_RENDERIZADO_ELEMENTO_MENU: boolean = false
const EVITAR_RENDERIZADO_ELEMENTO_MENU: boolean = true

const PROPS_ELEMENTO_MENU_ACTIVO: TipoElementoMenu = {
  Icono: GiAbacus,
  activo: true,
  onClick: () => {},
  children: createElement('div', null, 'elemento activo'),
}

const PROPS_ELEMENTO_MENU_INACTIVO: TipoElementoMenu = {
  Icono: GiAbacus,
  activo: false,
  onClick: () => {},
  children: createElement('div', null, 'elemento inactivo'),
}

describe('La utilería', () => {
  describe('esMismaVista', () => {
    it('deberia retornar verdadero', () => {
      expect(esMismaVista(VISTA_RESUMEN, VISTA_RESUMEN)).toBe(true)
    })
    it('deberia retornar falso', () => {
      expect(esMismaVista(VISTA_RESUMEN, VISTA_COMPRA)).toBe(false)
    })
  })

  describe('obtenerColorElementoMenu', () => {
    it('deberia retornar el color de elemento activo', () => {
      expect(obtenerColorElementoMenu(ELEMENTO_ACTIVO)).toBe(
        COLOR_ELEMENTO_ACTIVO
      )
    })
    it('deberia retornar el color de elemento inactivo', () => {
      expect(obtenerColorElementoMenu(ELEMENTO_INACTIVO)).toBe(
        COLOR_ELEMENTO_INACTIVO
      )
    })
  })

  describe('obtenerColorAccionMenu', () => {
    it('deberia retornar el color de acción habilitada', () => {
      expect(obtenerColorAccionMenu(VISTA_ACCION_HABILITADA)).toBe(
        COLOR_ACCION_HABILITADA
      )
    })
    it('deberia retornar el color de acción deshabilitada', () => {
      expect(obtenerColorAccionMenu(VISTA_ACCION_DESHABILITADA)).toBe(
        COLOR_ACCION_DESHABILITADA
      )
    })
  })

  describe('evitarRenderizadoElementoMenu', () => {
    it('deberia permitir renderizado', () => {
      expect(
        evitarRenderizadoElementoMenu(
          PROPS_ELEMENTO_MENU_ACTIVO,
          PROPS_ELEMENTO_MENU_INACTIVO
        )
      ).toBe(PERMITIR_RENDERIZADO_ELEMENTO_MENU)
    })
    it('deberia evitar renderizado', () => {
      expect(
        evitarRenderizadoElementoMenu(
          PROPS_ELEMENTO_MENU_ACTIVO,
          PROPS_ELEMENTO_MENU_ACTIVO
        )
      ).toBe(EVITAR_RENDERIZADO_ELEMENTO_MENU)
    })
  })
})
