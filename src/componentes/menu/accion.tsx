import { memo } from 'react'

import { TipoAccionMenu } from './tipos'
import { COLORES } from './constantes'
import { evitarRenderizadoAccionMenu } from './utilerias'

const AccionMenu = memo(
  ({ Icono, onClick }: TipoAccionMenu) => (
    <li className={`flex flex-col items-center ${COLORES.MENU.ACCION.ACTIVO}`}>
      <Icono className="mb-1 text-3xl" onClick={onClick} />
    </li>
  ),
  evitarRenderizadoAccionMenu
)

export default AccionMenu
