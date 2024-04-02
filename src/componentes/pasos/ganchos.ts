import { Children, ReactNode, useState } from 'react'

import { TipoLlamadaEvento } from '../../compartido/tipos'
import { NUMEROS } from '../../compartido/constantes'

import { TipoComponentePaso, TipoEstadoPaso, TipoGanchoPaso } from './tipos'
import { PRIMER_PASO } from './constantes'

export const usePaso = (children: ReactNode): TipoGanchoPaso => {
  const [paso, setPaso] = useState<number>(PRIMER_PASO)

  const elementos: ReactNode[] = Children.toArray(children)
  const actual = paso + NUMEROS.UNO
  const total: number = elementos.length

  const Paso: ReactNode = elementos[paso]

  const puede_avanzar: boolean = total > actual
  const puede_retroceder: boolean = paso > PRIMER_PASO

  const avanzar: TipoLlamadaEvento = () => puede_avanzar && setPaso(actual)

  const retroceder: TipoLlamadaEvento = () =>
    puede_retroceder && setPaso(paso - NUMEROS.UNO)

  const reiniciar: TipoLlamadaEvento = () => setPaso(PRIMER_PASO)

  const usePasoComponente: TipoComponentePaso = () => [
    Paso,
    avanzar,
    retroceder,
    reiniciar,
  ]

  const usePasoEstado: TipoEstadoPaso = () => [
    actual,
    puede_avanzar,
    puede_retroceder,
    total,
  ]

  return [usePasoComponente, usePasoEstado]
}
