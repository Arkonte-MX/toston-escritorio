import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { GiHealthNormal } from 'react-icons/gi'

import { VISTAS } from '../../interfaz/constantes'
import { COLORES } from '../constantes'

import { podriaDesplegarModal } from '../../contenido/utilerias'

import AccionMenu from '../accion'

const VISTA_RESUMEN: VISTAS = VISTAS.RESUMEN
const VISTA_DEUDA: VISTAS = VISTAS.DEUDAS

const COLOR_ACCION_HABILITADA: string = COLORES.MENU.ACCION.HABILITADA
const COLOR_ACCION_DESHABILITADA: string = COLORES.MENU.ACCION.DESHABILITADA

describe('El componente', () => {
  describe('AccionMenu', () => {
    it(`deberia mostrarse habilitado para el despligue de un modal en la vista ${VISTA_DEUDA}`, () => {
      render(
        <AccionMenu
          Icono={GiHealthNormal}
          onClick={() => {}}
          deshabilitado={!podriaDesplegarModal(VISTA_DEUDA)}
        />
      )

      const elemento = screen.getByRole('listitem')
      expect(elemento).toHaveClass(COLOR_ACCION_HABILITADA)
    })
    it(`deberia mostrarse deshabilitado para el despligue de un modal en la vista ${VISTA_RESUMEN}`, () => {
      render(
        <AccionMenu
          Icono={GiHealthNormal}
          onClick={() => {}}
          deshabilitado={!podriaDesplegarModal(VISTA_RESUMEN)}
        />
      )

      const elemento = screen.getByRole('listitem')
      expect(elemento).toHaveClass(COLOR_ACCION_DESHABILITADA)
    })
  })
})
