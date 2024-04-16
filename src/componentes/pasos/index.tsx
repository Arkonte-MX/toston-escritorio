import { useEffect } from 'react'

import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from 'react-icons/io'

import { TECLAS } from '../../compartido/constantes'
import {
  registrarEventosTeclado,
  retirarEventosTeclado,
} from '../../compartido/utilerias/comunes'

import {
  obtenerEstiloBotonPaso,
  obtenerConfiguracionBotonSiguiente,
  obtenerGrosorNumeroPaso,
} from './utilerias'

import { TipoPasos } from './tipos'
import { usePaso } from './ganchos'
import { BotonCancelar } from '../entrada/controles/boton'

const Pasos = ({ children, onCancel, onFinish }: TipoPasos) => {
  const [usePasoComponente, usePasoEstado] = usePaso(children)

  const [Paso, avanzar, retroceder, reiniciar] = usePasoComponente()
  const [actual, puede_avanzar, puede_retroceder, total] = usePasoEstado()

  const {
    componente: BotonSiguiente,
    manejador: seguir,
    icono: Icono,
  } = obtenerConfiguracionBotonSiguiente(
    puede_avanzar,
    avanzar,
    reiniciar,
    onFinish
  )

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
      <div className="flex-grow overflow-auto pt-2 py-4">{Paso}</div>
      <div className="h-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <IoIosArrowBack
              size="1.8em"
              onClick={retroceder}
              className={obtenerEstiloBotonPaso(puede_retroceder)}
            />
            <div className="text-sm pt-1">
              <span className={obtenerGrosorNumeroPaso(puede_retroceder)}>
                {actual}
              </span>
              <span className="m-1">/</span>
              <span className={obtenerGrosorNumeroPaso(puede_avanzar)}>
                {total}
              </span>
            </div>
            <IoIosArrowForward
              size="1.8em"
              onClick={avanzar}
              className={obtenerEstiloBotonPaso(puede_avanzar)}
            />
          </div>
          <div className="flex space-x-3">
            <BotonCancelar onClick={onCancel} Icono={IoIosClose} />
            <BotonSiguiente onClick={seguir} Icono={Icono} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pasos
