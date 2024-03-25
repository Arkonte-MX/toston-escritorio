import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { GiHealthNormal } from 'react-icons/gi'

import { VISTAS } from '../../interfaz/constantes'
import { COLOR } from '../constantes'

import { podriaDesplegarModal } from '../../contenido/utilerias'

import AccionMenu from '../accion'

const VISTA_RESUMEN: VISTAS = VISTAS.RESUMEN
const VISTA_DEUDA: VISTAS = VISTAS.DEUDAS

const COLOR_ACCION_HABILITADA: string = COLOR.MENU.ACCION.HABILITADA
const COLOR_ACCION_DESHABILITADA: string = COLOR.MENU.ACCION.DESHABILITADA

describe('El componente', () => {
  describe('AccionMenu', () => {
    it(`deberia mostrarse como acción habilitada para el despligue de un modal en la vista ${VISTA_DEUDA}`, () => {
      render(
        <AccionMenu
          Icono={GiHealthNormal}
          onClick={() => {}}
          deshabilitada={!podriaDesplegarModal(VISTA_DEUDA)}
        />
      )

      const elemento = screen.getByRole('listitem')
      expect(elemento).toHaveClass(COLOR_ACCION_HABILITADA)
    })
    it(`deberia mostrarse como acción deshabilitada para el despligue de un modal en la vista ${VISTA_RESUMEN}`, () => {
      render(
        <AccionMenu
          Icono={GiHealthNormal}
          onClick={() => {}}
          deshabilitada={!podriaDesplegarModal(VISTA_RESUMEN)}
        />
      )

      const elemento = screen.getByRole('listitem')
      expect(elemento).toHaveClass(COLOR_ACCION_DESHABILITADA)
    })
  })
})
