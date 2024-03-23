import {
  BotonNeutral,
  BotonContinuar,
  BotonFinalizar,
} from '../../compartido/componentes/boton'
import { TipoLlamadaEvento } from '../../compartido/tipos'
import { BOTONES, COLORES, GROSOR_TEXTO, PUNTERO } from './constantes'
import { TipoConfiguracionBotonSiguiente } from './tipos'

export const obtenerGrosorNumeroPaso = (habilitado: boolean = false): string =>
  habilitado ?
    GROSOR_TEXTO.NUMERO_PASO.HABILITADO
  : GROSOR_TEXTO.NUMERO_PASO.DESHABILITADO

export const obtenerColorBotonPaso = (activo: boolean = false): string =>
  activo ? COLORES.BOTON_PASO.HABILITADO : COLORES.BOTON_PASO.DESHABILITADO

export const obtenerPunteroBotonPaso = (activo: boolean = false): string =>
  activo ? PUNTERO.BOTON_PASO.HABILITADO : PUNTERO.BOTON_PASO.DESHABILITADO

export const obtenerEstiloBotonPaso = (activo: boolean): string =>
  `${obtenerColorBotonPaso(activo)} ${obtenerPunteroBotonPaso(activo)}`

export const obtenerConfiguracionBotonSiguiente = (
  puede_avanzar: boolean = false,
  avanzar: TipoLlamadaEvento,
  reiniciar: TipoLlamadaEvento,
  onFinish: TipoLlamadaEvento
): TipoConfiguracionBotonSiguiente => {
  const botones = {
    [BOTONES.CONTINUAR]: {
      componente: BotonContinuar,
      manejador: avanzar,
    },
    [BOTONES.FINALIZAR]: {
      componente: BotonFinalizar,
      manejador: () => {
        onFinish()
        reiniciar()
      },
    },
  } as const

  const accion = puede_avanzar ? BOTONES.CONTINUAR : BOTONES.FINALIZAR

  return (
    botones[accion] ?? {
      componente: BotonNeutral,
      manejador: (llamada: TipoLlamadaEvento) => llamada(),
    }
  )
}
