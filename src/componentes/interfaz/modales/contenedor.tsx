import { GiExpander } from 'react-icons/gi'

import { TipoContenedorModal } from '../tipos'

const CERRAR_MODAL = 'Cerrar modal'

const ContenedorModal = ({
  visibilidad,
  cerrar,
  titulo,
  descripcion,
  botones,
  children,
}: TipoContenedorModal) => (
  <div className={`visibility: ${visibilidad ? 'visible' : 'hidden'}`}>
    <div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
      <div className="relative bg-white opacity-100 rounded-md w-3/5 h-5/6">
        <button
          type="button"
          className="absolute top-3.5 start-3.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xs w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={cerrar}
          data-modal-hide="progress-modal">
          <GiExpander />
          <span className="sr-only">{CERRAR_MODAL}</span>
        </button>
        <h3 className="text-sm font-bold text-gray-900 dark:text-white text-center pt-5">
          {titulo ?? titulo}
        </h3>
        <div className="pt-3 pr-4 pl-4">
          <p
            className={`text-gray-500 dark:text-gray-400 ${!!titulo ? '' : 'pt-5'}`}>
            {descripcion ?? descripcion}
          </p>
          <div className={`w-ful h-full ${!!descripcion ? 'pt-2' : ''}`}>
            {children}
          </div>
        </div>
        <div className="absolute bottom-3 end-2.5 p-4 text-sm">
          {botones ?? botones}
        </div>
      </div>
    </div>
  </div>
)

export default ContenedorModal
