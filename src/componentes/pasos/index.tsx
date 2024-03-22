import { useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { TECLAS } from '../../compartido/constantes'
import {
  registrarEventosTeclado,
  retirarEventosTeclado,
} from '../../compartido/utilerias'

import {
  obtenerColorBotonPaso,
  obtenerGrosorNumeroPasoAvanzar,
  obtenerGrosorNumeroPasoRetroceder,
} from './utilerias'
import { TipoPasos } from './tipos'
import { usePaso } from './ganchos'

const Pasos = ({ children, onCancel }: TipoPasos) => {
  const [usePasoComponente, usePasoEstado] = usePaso(children)
  const [Paso, avanzar, retroceder] = usePasoComponente()
  const [actual, puede_avanzar, puede_retroceder, total] = usePasoEstado()

  useEffect(() => {
    const manejadores = registrarEventosTeclado([
      {
        tecla: TECLAS.CURSOR.IZQUIERDO,
        evento: retroceder,
      },
      {
        tecla: TECLAS.CURSOR.DERECHO,
        evento: avanzar,
      },
    ])

    return () => {
      retirarEventosTeclado(manejadores)
    }
  }, [actual])

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-auto">{Paso}</div>
      <div className="h-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <IoIosArrowBack
              size="1.8em"
              onClick={retroceder}
              className={obtenerColorBotonPaso(puede_retroceder)}
            />
            <div className="text-sm pt-1">
              <span
                className={obtenerGrosorNumeroPasoRetroceder(puede_retroceder)}>
                {actual}
              </span>
              <span className="m-1">/</span>
              <span className={obtenerGrosorNumeroPasoAvanzar(puede_avanzar)}>
                {total}
              </span>
            </div>
            <IoIosArrowForward
              size="1.8em"
              onClick={avanzar}
              className={obtenerColorBotonPaso(puede_avanzar)}
            />
          </div>
          <div className="flex space-x-6">
            <button onClick={onCancel}>Cancelar</button>
            <button onClick={avanzar}>Continuar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pasos
