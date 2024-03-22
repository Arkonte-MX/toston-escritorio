import { Children, ReactNode, useState } from 'react'

import { TipoLlamadaEvento } from '../../compartido/tipos'

import { TipoComponentePaso, TipoEstadoPaso, TipoGanchoPaso } from './tipos'
import { PRIMER_PASO } from './constantes'

export const usePaso = (children: ReactNode): TipoGanchoPaso => {
  const [paso, setPaso] = useState<number>(PRIMER_PASO)

  const elementos: ReactNode[] = Children.toArray(children)
  const total: number = elementos.length

  const Paso: ReactNode = elementos[paso]

  const puede_avanzar: boolean = total > paso + 1
  const puede_retroceder: boolean = paso > PRIMER_PASO

  const avanzar: TipoLlamadaEvento = () => puede_avanzar && setPaso(paso + 1)

  const retroceder: TipoLlamadaEvento = () =>
    puede_retroceder && setPaso(paso - 1)

  const usePasoComponente: TipoComponentePaso = () => [
    Paso,
    avanzar,
    retroceder,
  ]

  const usePasoEstado: TipoEstadoPaso = () => [
    paso + 1,
    puede_avanzar,
    puede_retroceder,
    total,
  ]

  return [usePasoComponente, usePasoEstado]
}
