import { TipoAccionMenu } from './tipos'
import { obtenerColorAccionMenu, obtenerCursorAccionMenu } from './utilerias'

const AccionMenu = ({ Icono, onClick, deshabilitada }: TipoAccionMenu) => (
  <li
    className={`flex flex-col items-center ${obtenerColorAccionMenu(deshabilitada)}`}>
    <Icono
      className={`mb-1 text-3xl ${obtenerCursorAccionMenu(deshabilitada)}`}
      onClick={deshabilitada ? () => {} : onClick}
    />
  </li>
)

export default AccionMenu
