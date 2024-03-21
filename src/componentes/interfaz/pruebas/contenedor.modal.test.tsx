import { fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import ContenedorModal from '../modales/contenedor'
import { TECLAS } from '../../../compartido/constantes'

const TECLA_ESCAPE = TECLAS.ESCAPE

describe('El componente', () => {
  describe('ContenedorModal', () => {
    it(`debería ejecutar el manejador de evento 'cerrar' al presionar la tecla ${TECLA_ESCAPE}`, () => {
      const cerrar = jest.fn()

      render(
        <ContenedorModal visibilidad={true} cerrar={cerrar}>
          <></>
        </ContenedorModal>
      )

      act(() => {
        fireEvent.keyDown(window, { key: TECLA_ESCAPE })
      })

      expect(cerrar).toHaveBeenCalled()
    })
  })
})
