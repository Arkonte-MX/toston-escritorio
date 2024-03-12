import {
  GiCompass,
  GiDuration,
  GiReceiveMoney,
  GiTakeMyMoney,
  GiHealthNormal,
} from 'react-icons/gi'

import AccionMenu from './accion.tsx'
import ElementoMenu from './elemento.tsx'
import Resumen from './elementos/resumen'
import Gastos from './elementos/gastos'
import Compras from './elementos/compras.tsx'
import Deudas from './elementos/deudas.tsx'

import { ELEMENTOS_MENU } from './constantes.ts'
import { esElementoMenuActivo } from './utilerias.ts'

import { useState } from 'react'

const Menu = () => {
  const [actual, setActual] = useState<ELEMENTOS_MENU>(ELEMENTOS_MENU.RESUMEN)

  const seleccionar = (seleccion: ELEMENTOS_MENU) => () => setActual(seleccion)

  const esActivo = (comparacion: ELEMENTOS_MENU) =>
    esElementoMenuActivo(actual, comparacion)

  /**
   * TODO : IMPLEMENTAR FUNCIONALIDAD DEL COMPONENTE AccionMenu
   * PROBABLEMENTE LO MEJOR SEA QUE EL EVENTO ONCLICK DEL ELEMENTO Y EL ACCION
   * SE MANEJE A TRAVÉS DE UN CONTEXT PARA QUE TANTO LA VISTA SELECCIONADA
   * COMO EL LA FUNCIONALIDAD CORRESPONDIENTE A ESA VISTA ESTÉN EN SINTONÍA
   *
   */
  return (
    <ul className="flex justify-center items-center space-x-12">
      <ElementoMenu
        Icono={GiCompass}
        onClick={seleccionar(ELEMENTOS_MENU.RESUMEN)}
        es_activo={esActivo(ELEMENTOS_MENU.RESUMEN)}>
        <Resumen />
      </ElementoMenu>

      <ElementoMenu
        Icono={GiDuration}
        onClick={seleccionar(ELEMENTOS_MENU.GASTOS)}
        es_activo={esActivo(ELEMENTOS_MENU.GASTOS)}>
        <Gastos />
      </ElementoMenu>

      <AccionMenu Icono={GiHealthNormal} onClick={() => {}} activo={actual} />

      <ElementoMenu
        Icono={GiReceiveMoney}
        onClick={seleccionar(ELEMENTOS_MENU.DEUDAS)}
        es_activo={esActivo(ELEMENTOS_MENU.DEUDAS)}>
        <Deudas />
      </ElementoMenu>

      <ElementoMenu
        Icono={GiTakeMyMoney}
        onClick={seleccionar(ELEMENTOS_MENU.COMPRAS)}
        es_activo={esActivo(ELEMENTOS_MENU.COMPRAS)}>
        <Compras />
      </ElementoMenu>
    </ul>
  )
}

export default Menu
