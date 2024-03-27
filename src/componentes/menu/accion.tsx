import { TipoAccionMenu } from './tipos'
import { obtenerColorAccionMenu, obtenerCursorAccionMenu } from './utilerias'

const AccionMenu = ({ Icono, deshabilitada, onClick }: TipoAccionMenu) => (
  <li
    onClick={deshabilitada ? () => {} : onClick}
    className={`flex flex-col items-center ${obtenerColorAccionMenu(deshabilitada)}`}>
    <Icono
      className={`mb-1 text-3xl ${obtenerCursorAccionMenu(deshabilitada)}`}
    />
  </li>
)

export default AccionMenu
