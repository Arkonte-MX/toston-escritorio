import { useEffect } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

import {
  registrarEventosTeclado,
  retirarEventosTeclado,
} from '../../../compartido/utilerias'

import { TECLAS } from '../../../compartido/constantes'

import { TipoContenedorModal } from '../tipos'

const CERRAR_MODAL = 'Cerrar modal'

const ContenedorModal = ({
  visibilidad,
  cerrar,
  titulo,
  descripcion,
  botones,
  children,
}: TipoContenedorModal) => {
  useEffect(() => {
    const manejadores = registrarEventosTeclado([
      {
        tecla: TECLAS.ESCAPE,
        evento: cerrar,
      },
    ])

    return () => {
      retirarEventosTeclado(manejadores)
    }
  }, [])

  return (
    <div className={`visibility: ${visibilidad ? 'visible' : 'hidden'}`}>
      <div
        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
        <div className="relative bg-white opacity-100 rounded-md w-3/5 h-5/6">
          <div className="flex flex-col h-full">
            <div className="mb-1">
              <button
                type="button"
                className="absolute top-3.5 start-3.5 text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-800 rounded-lg text-xs w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-slate-600 dark:hover:text-white"
                onClick={cerrar}
                data-modal-hide="progress-modal">
                <IoIosCloseCircleOutline className="text-2xl" />
                <span className="sr-only">{CERRAR_MODAL}</span>
              </button>
              <h3 className="text-sm font-bold text-slate-800 dark:text-white text-center pt-5">
                {titulo ?? titulo}
              </h3>
            </div>

            <blockquote className={'text-slate-400 dark:text-slate-400 px-5'}>
              {descripcion ?? descripcion}
            </blockquote>

            <div className="flex-grow overflow-y-auto pl-5 pr-5 mt-4">
              {children}
            </div>

            <div className="text-sm pr-5 pb-5 mt-3 flex justify-end">
              {botones ?? botones}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContenedorModal
