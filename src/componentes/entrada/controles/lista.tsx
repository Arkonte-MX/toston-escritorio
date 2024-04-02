import { ESTILO } from '../constantes'
import { obtenerColorBordeCampo } from '../utilerias'

import { TipoCampoListaDesplegable } from './tipos'

import Campo from './campo'

const ListaDesplegable = ({
  campo,
  etiqueta,
  dato,
  onChange,
  children,
  error,
  Icono,
}: TipoCampoListaDesplegable) => (
  <Campo campo={campo} etiqueta={etiqueta} error={error} Icono={Icono}>
    <select
      name={campo}
      value={dato}
      onChange={onChange}
      className={`bg-white ${ESTILO.CAMPO} ${obtenerColorBordeCampo(!!error)}`}>
      {children}
    </select>
  </Campo>
)

export default ListaDesplegable
