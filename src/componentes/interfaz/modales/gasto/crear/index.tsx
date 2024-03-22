import Pasos from '../../../../pasos'
import { TipoModal } from '../../../tipos'

const CrearGasto = ({ cerrar }: TipoModal) => {
  return (
    <Pasos onCancel={cerrar}>
      <div>Paso Uno</div>
      <div>Paso Dos</div>
      <div>Paso Tres</div>
      <div>Paso Cuatro</div>
    </Pasos>
  )
}

export default CrearGasto
