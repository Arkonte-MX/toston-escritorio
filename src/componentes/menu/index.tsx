import {
  GiCompass,
  GiDuration,
  GiReceiveMoney,
  GiTakeMyMoney,
  GiHealthNormal,
} from 'react-icons/gi'

import ElementoMenu from './elemento'
import AccionMenu from './accion'
import Resumen from './elementos/resumen'
import Gastos from './elementos/gastos'
import Compras from './elementos/compras'
import Deudas from './elementos/deudas'

import { TipoMenu } from './tipos'
import { esMismaVista } from './utilerias'
import { VISTAS } from '../interfaz/constantes'
import { podriaDesplegarModal } from '../contenido/utilerias'

const Menu = ({ vista, cambiarVista, mostrarModal }: TipoMenu) => (
  <ul className="flex justify-center items-center space-x-12">
    <ElementoMenu
      Icono={GiCompass}
      onClick={cambiarVista(VISTAS.RESUMEN)}
      activo={esMismaVista(VISTAS.RESUMEN, vista)}>
      <Resumen />
    </ElementoMenu>

    <ElementoMenu
      Icono={GiDuration}
      onClick={cambiarVista(VISTAS.GASTOS)}
      activo={esMismaVista(VISTAS.GASTOS, vista)}>
      <Gastos />
    </ElementoMenu>

    <AccionMenu
      Icono={GiHealthNormal}
      onClick={mostrarModal}
      deshabilitada={!podriaDesplegarModal(vista)}
    />

    <ElementoMenu
      Icono={GiReceiveMoney}
      onClick={cambiarVista(VISTAS.DEUDAS)}
      activo={esMismaVista(VISTAS.DEUDAS, vista)}>
      <Deudas />
    </ElementoMenu>

    <ElementoMenu
      Icono={GiTakeMyMoney}
      onClick={cambiarVista(VISTAS.COMPRAS)}
      activo={esMismaVista(VISTAS.COMPRAS, vista)}>
      <Compras />
    </ElementoMenu>
  </ul>
)

export default Menu
