import {
  TipoEventoTeclado,
  TipoLlamadaEvento,
  TipoRetrollamadaEvento,
} from './tipos'

import { KEYDOWN } from './constantes'

const manejarEventoTeclado: TipoRetrollamadaEvento =
  (tecla: string, retrollamada: TipoLlamadaEvento) => (event) => {
    if (event.key === tecla) retrollamada()
  }

export const registrarEventosTeclado = (
  eventosTeclado: TipoEventoTeclado[]
) => {
  let manejadores: TipoLlamadaEvento[] = []

  for (const { tecla, evento } of eventosTeclado) {
    const manejador = manejarEventoTeclado(tecla, evento)
    window.addEventListener(KEYDOWN, manejador)
    manejadores.push(manejador)
  }

  return manejadores
}

export const retirarEventosTeclado = (manejadores: TipoLlamadaEvento[]) => {
  for (const manejador of manejadores) {
    window.removeEventListener(KEYDOWN, manejador)
  }
}
