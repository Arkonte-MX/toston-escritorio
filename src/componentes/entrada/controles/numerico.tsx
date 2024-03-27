import { ESTILO } from '../constantes'
import { obtenerColorBordeCampo } from '../utilerias'
import { TipoCampoNumerico } from './tipos'

import { Campo } from './campo'

export const CampoNumerico = ({
  campo,
  etiqueta,
  valor,
  error,
  onChange,
  minimo,
  maximo,
  incrementos,
  ejemplo,
}: TipoCampoNumerico) => (
  <Campo campo={campo} etiqueta={etiqueta} error={error}>
    <input
      id={campo}
      type="number"
      min={minimo}
      max={maximo}
      step={incrementos}
      name={campo}
      placeholder={ejemplo}
      value={valor}
      onChange={onChange}
      className={`${ESTILO.CAMPO} ${obtenerColorBordeCampo(!!error)}`}
    />
  </Campo>
)
