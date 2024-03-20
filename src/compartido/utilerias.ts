import {
  TipoEventoTeclado,
  TipoLlamadaEvento,
  TipoRetrollamadaEvento,
} from './tipos'

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
    window.addEventListener('keydown', manejador)
    manejadores.push(manejador)
  }

  return manejadores
}

export const retirarEventosTeclado = (manejadores: TipoLlamadaEvento[]) => {
  for (const manejador of manejadores) {
    window.removeEventListener('keydown', manejador)
  }
}
