import { TEXTO_VACIO } from '../../../compartido/constantes'

import { obtenerColorAnotacionCampo } from '../utilerias'
import { TipoCampo } from './tipos'

export const Campo = ({ campo, etiqueta, error, children }: TipoCampo) => (
  <div
    id={`id_boton_${campo.trim().toLocaleLowerCase().replace(/\s/, TEXTO_VACIO)}`}
    className="mx-2 mt-1">
    <div className="relative h-10 w-full min-w-xs">
      <div className="absolute top-1/2 right-3 -translate-y-1/2 grid h-5 w-5 place-items-center">
        <i className="fas fa-heart text-slate-400" aria-hidden="true"></i>
      </div>
      {children}
      <label className="pointer-events-none absolute left-4 -top-2.5 flex px-2 text-sm bg-white border-black border-transparent text-slate-700 font-semibold">
        {etiqueta}
      </label>
    </div>
    <p className={`mt-1 mb-5 text-xs ${obtenerColorAnotacionCampo(!!error)}`}>
      {error}
    </p>
  </div>
)
