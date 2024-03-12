import { memo } from 'react'
import { TipoElementoMenu } from './tipos'
import {
  evitarRenderizadoElementoMenu,
  obtenerColorElementoMenu,
} from './utilerias'

const ElementoMenu = memo(
  ({ Icono, onClick, es_activo, children }: TipoElementoMenu) => (
    <li
      className={`flex flex-col items-center ${obtenerColorElementoMenu(es_activo)}`}>
      <Icono className="mb-1 text-4xl" onClick={onClick} />
      <strong className="text-xs">{children}</strong>
    </li>
  ),
  evitarRenderizadoElementoMenu
)

export default ElementoMenu
