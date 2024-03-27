import { ESTILO } from '../constantes'
import { obtenerColorBordeCampo } from '../utilerias'
import { TipoCampoTextoCorto } from './tipos'

import { Campo } from './campo'

export const CampoTextoCorto = ({
  campo,
  etiqueta,
  valor,
  error,
  onChange,
  ejemplo,
}: TipoCampoTextoCorto) => (
  <Campo campo={campo} etiqueta={etiqueta} error={error}>
    <input
      name={campo}
      placeholder={ejemplo}
      value={valor}
      onChange={onChange}
      className={`${ESTILO.CAMPO} ${obtenerColorBordeCampo(!!error)}`}
    />
  </Campo>
)
