import { TipoAccionMenu } from './tipos'
import { obtenerColorAccionMenu } from './utilerias'

const AccionMenu = ({ Icono, onClick, deshabilitado }: TipoAccionMenu) => (
  <li
    className={`flex flex-col items-center ${obtenerColorAccionMenu(deshabilitado)}`}>
    <Icono
      className="mb-1 text-3xl"
      onClick={deshabilitado ? () => {} : onClick}
    />
  </li>
)

export default AccionMenu
