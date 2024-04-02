import { NUMEROS, TEXTO } from '../../../compartido/constantes'

import { ESTILO } from '../constantes'
import { obtenerColorBordeCampo } from '../utilerias'
import { TipoCampoNumerico } from './tipos'

import Campo from './campo'

const CampoNumerico = ({
  campo,
  etiqueta,
  dato,
  error,
  onChange,
  minimo,
  maximo,
  incrementos,
  ejemplo,
  Icono,
  caracteres,
}: TipoCampoNumerico) => (
  <Campo campo={campo} etiqueta={etiqueta} error={error} Icono={Icono}>
    <input
      id={campo}
      type="number"
      min={minimo}
      max={maximo}
      step={incrementos}
      name={campo}
      placeholder={ejemplo}
      value={dato <= NUMEROS.CERO ? TEXTO.VACIO : dato}
      onChange={onChange}
      className={`${ESTILO.CAMPO} ${obtenerColorBordeCampo(!!error)}`}
      maxLength={caracteres}
    />
  </Campo>
)

export default CampoNumerico
