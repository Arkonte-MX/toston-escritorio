import { ESTILO } from '../constantes'
import { obtenerColorBordeCampo } from '../utilerias'
import { TipoCampoTextoCorto } from './tipos'

import Campo from './campo'

const CampoTextoCorto = ({
  campo,
  etiqueta,
  dato,
  error,
  onChange,
  ejemplo,
  Icono,
  caracteres,
}: TipoCampoTextoCorto) => (
  <Campo campo={campo} etiqueta={etiqueta} error={error} Icono={Icono}>
    <input
      name={campo}
      placeholder={ejemplo}
      value={dato}
      maxLength={caracteres}
      onChange={onChange}
      className={`${ESTILO.CAMPO} ${obtenerColorBordeCampo(!!error)}`}
    />
  </Campo>
)

export default CampoTextoCorto
