import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { GiCompass } from 'react-icons/gi'

import { COLOR } from '../constantes'

import ElementoMenu from '../elemento'

const ELEMENTO_MENU_ACTIVO: boolean = true
const ELEMENTO_MENU_INACTIVO: boolean = false

const COLOR_ELEMENTO_ACTIVO: string = COLOR.MENU.ELEMENTO.ACTIVO
const COLOR_ELEMENTO_INACTIVO: string = COLOR.MENU.ELEMENTO.INACTIVO

describe('El componente', () => {
  describe('ElementoMenu', () => {
    it('deberia mostrarse como activo', () => {
      render(
        <ElementoMenu
          Icono={GiCompass}
          onClick={() => {}}
          activo={ELEMENTO_MENU_ACTIVO}>
          <strong>ACTIVO</strong>
        </ElementoMenu>
      )

      const elemento = screen.getByRole('listitem')
      expect(elemento).toHaveClass(COLOR_ELEMENTO_ACTIVO)
    })

    it('deberia mostrarse como inactivo', () => {
      render(
        <ElementoMenu
          Icono={GiCompass}
          onClick={() => {}}
          activo={ELEMENTO_MENU_INACTIVO}>
          <strong>INACTIVO</strong>
        </ElementoMenu>
      )

      const elemento = screen.getByRole('listitem')
      expect(elemento).toHaveClass(COLOR_ELEMENTO_INACTIVO)
    })
  })
})
