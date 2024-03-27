import { ESTILO } from '../constantes'
import { obtenerColorBordeCampo } from '../utilerias'

import { TipoCampoListaDesplegable } from './tipos'

import { Campo } from './campo'

export const ListaDesplegable = ({
  campo,
  etiqueta,
  valor,
  error,
  onChange,
  children,
}: TipoCampoListaDesplegable) => (
  <Campo campo={campo} etiqueta={etiqueta} error={error}>
    <select
      name={campo}
      value={valor}
      onChange={onChange}
      className={`bg-white ${ESTILO.CAMPO} ${obtenerColorBordeCampo(!!error)}`}>
      {children}
    </select>
  </Campo>
)
