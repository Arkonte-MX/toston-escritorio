import { TEXTO } from '../../../compartido/constantes'

import { obtenerColorAnotacionCampo } from '../utilerias'
import { TipoCampo } from './tipos'

const Campo = ({ campo, etiqueta, error, Icono, children }: TipoCampo) => (
  <div
    id={`id_campo_${campo.trim().toLocaleLowerCase().replace(/\s/, TEXTO.VACIO)}`}
    className="flex-grow">
    <div className="relative h-10 w-full min-w-xs">
      <div className="absolute top-1/2 right-7 -translate-y-1/2">{Icono}</div>
      {children}
      <label className="pointer-events-none absolute left-4 -top-2.5 px-2 text-sm bg-white border-black border-transparent text-slate-700 font-semibold">
        {etiqueta}
      </label>
    </div>
    <p className={`mt-1 mb-5 text-xs ${obtenerColorAnotacionCampo(!!error)}`}>
      {error}
    </p>
  </div>
)

export default Campo
