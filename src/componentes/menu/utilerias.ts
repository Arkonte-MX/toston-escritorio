import { ELEMENTOS_MENU, COLORES } from './constantes'
import { TipoAccionMenu, TipoElementoMenu } from './tipos'

export const esElementoMenuActivo = (
  actual: ELEMENTOS_MENU,
  comparacion: ELEMENTOS_MENU
) => <boolean>(actual === comparacion)

export const obtenerColorElementoMenu = (es_activo: boolean = false) =>
  <string>(
    (es_activo ? COLORES.MENU.ELEMENTO.ACTIVO : COLORES.MENU.ELEMENTO.INACTIVO)
  )

export const evitarRenderizadoElementoMenu = (
  { es_activo: anterior }: TipoElementoMenu,
  { es_activo: siguiente }: TipoElementoMenu
) => <boolean>(anterior === siguiente)

export const evitarRenderizadoAccionMenu = (
  { activo: anterior }: TipoAccionMenu,
  { activo: siguiente }: TipoAccionMenu
) => <boolean>(anterior === siguiente)
