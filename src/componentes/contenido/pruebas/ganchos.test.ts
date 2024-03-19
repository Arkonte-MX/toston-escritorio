import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { useModal, useVista } from '../ganchos'
import { VISTAS, MODALES } from '../../interfaz/constantes'

const VISTA_RESUMEN: VISTAS = VISTAS.RESUMEN
const VISTA_GASTOS: VISTAS = VISTAS.GASTOS

const MODAL_CREAR: MODALES = MODALES.CREAR
const MODAL_ACTUALIZAR: MODALES = MODALES.ACTUALIZAR

const MODAL_VISIBLE: boolean = true
const MODAL_INVISIBLE: boolean = false

describe('El gancho personalizado', () => {
  describe('useVista', () => {
    it(`debería contener la vista ${VISTA_RESUMEN} forma predeterminada`, () => {
      const { result: gancho } = renderHook(useVista)
      expect(gancho.current[0]).toBe(VISTA_RESUMEN)
    })
    it('debería permitir cambiar la vista', () => {
      const { result: gancho } = renderHook(useVista)

      act(() => {
        gancho.current[1](VISTA_GASTOS)()
      })

      expect(gancho.current[0]).toBe(VISTA_GASTOS)
    })
  })

  describe('useModal', () => {
    it(`debería contener un modal tipo ${MODAL_CREAR} e invisible de forma predeterminada para la vista ${VISTA_GASTOS}`, () => {
      const { result: gancho } = renderHook(() =>
        useModal(MODAL_CREAR, VISTA_GASTOS)
      )

      expect(gancho.current[1]()[0]).toBe(MODAL_CREAR)
      expect(gancho.current[0]()[0]).toBe(MODAL_INVISIBLE)
    })
    it(`debería permitir a la vista ${VISTA_GASTOS} mostrar el modal tipo ${MODAL_CREAR}`, () => {
      const { result: gancho } = renderHook(() =>
        useModal(MODAL_CREAR, VISTA_GASTOS)
      )

      act(() => {
        gancho.current[0]()[1]()
      })

      expect(gancho.current[0]()[0]).toBe(MODAL_VISIBLE)
    })
    it(`debería evitar a la vista ${VISTA_RESUMEN} mostrar el modal tipo ${MODAL_CREAR} (no debería tener un modal funcional)`, () => {
      const { result: gancho } = renderHook(() =>
        useModal(MODAL_CREAR, VISTA_RESUMEN)
      )

      act(() => {
        gancho.current[0]()[1]()
      })

      expect(gancho.current[0]()[0]).toBe(MODAL_INVISIBLE)
    })
    it(`debería permitir a la vista ${VISTA_GASTOS} cambiar el tipo de modal de ${MODAL_CREAR} a ${MODAL_ACTUALIZAR}`, () => {
      const { result: gancho } = renderHook(() =>
        useModal(MODAL_CREAR, VISTA_GASTOS)
      )

      act(() => {
        gancho.current[1]()[1](MODAL_ACTUALIZAR)()
      })

      expect(gancho.current[1]()[0]).toBe(MODAL_ACTUALIZAR)
    })
  })
})
