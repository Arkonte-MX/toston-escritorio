import { memo } from 'react'
import { TipoElementoMenu } from './tipos'
import {
  evitarRenderizadoElementoMenu,
  obtenerColorElementoMenu,
  obtenerCursorIconoElementoMenu,
  obtenerGrosorNombreElementoMenu,
} from './utilerias'

const ElementoMenu = memo(
  ({ Icono, activo, onClick, children }: TipoElementoMenu) => (
    <li
      onClick={onClick}
      className={`flex flex-col items-center ${obtenerColorElementoMenu(activo)}`}>
      <Icono
        className={`mb-1 text-4xl ${obtenerCursorIconoElementoMenu(activo)}`}
      />
      <label className={`text-xs ${obtenerGrosorNombreElementoMenu(activo)}`}>
        {children}
      </label>
    </li>
  ),
  evitarRenderizadoElementoMenu
)

export default ElementoMenu
