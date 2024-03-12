import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { GiCompass } from 'react-icons/gi'
import { COLORES } from '../constantes'

import ElementoMenu from '../elemento'

const ELEMENTO_MENU_ACTIVO = true
const ELEMENTO_MENU_INACTIVO = false

describe('El renderizado', () => {
  describe('del elemento menu', () => {
    it('deberia ser como activo', () => {
      render(
        <ElementoMenu
          Icono={GiCompass}
          onClick={() => {}}
          es_activo={ELEMENTO_MENU_ACTIVO}>
          <strong>ACTIVO</strong>
        </ElementoMenu>
      )

      const elemento = screen.getByRole('listitem')
      expect(elemento).toHaveClass(COLORES.MENU.ELEMENTO.ACTIVO)
    }),
      it('deberia ser como inactivo', () => {
        render(
          <ElementoMenu
            Icono={GiCompass}
            onClick={() => {}}
            es_activo={ELEMENTO_MENU_INACTIVO}>
            <strong>INACTIVO</strong>
          </ElementoMenu>
        )

        const elemento = screen.getByRole('listitem')
        expect(elemento).toHaveClass(COLORES.MENU.ELEMENTO.INACTIVO)
      })
  })
})
