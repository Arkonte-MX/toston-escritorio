import Menu from '../menu'
import Interfaz from '../interfaz'

import { useVista, useModal } from './ganchos'
import { MODALES } from '../interfaz/constantes'

const Contenido = () => {
  const [vista, setVista] = useVista()
  const [useVisibilidad, useOperacion] = useModal(MODALES.CREAR, vista)

  const [operacion] = useOperacion()
  const [visibilidad, mostrarModal, ocultarModal] = useVisibilidad()

  return (
    <>
      <div className="flex-grow">
        <Interfaz
          vista={vista}
          modal={{ operacion, visibilidad }}
          ocultarModal={ocultarModal}
        />
      </div>
      <nav className="py-3">
        <Menu
          vista={vista}
          cambiarVista={setVista}
          mostrarModal={mostrarModal}
        />
      </nav>
    </>
  )
}

export default Contenido
