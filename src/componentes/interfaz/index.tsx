import { memo } from 'react'

import { TipoInterfaz } from './tipos'
import {
  obtenerConfiguracionVista,
  obtenerConfiguracionModal,
  evitarRenderizadoInterfaz,
} from './utilerias'

import ContenedorModal from './modales/contenedor'

const Interfaz = memo(({ vista, modal, ocultarModal }: TipoInterfaz) => {
  const { operacion, visibilidad } = modal

  const configuracion_vista = obtenerConfiguracionVista(vista)
  const configuracion_modal = obtenerConfiguracionModal(vista, operacion)

  const { componente: Vista } = configuracion_vista
  const { titulo, descripcion, componente: Modal } = configuracion_modal

  return (
    <>
      <Vista />
      {Modal && visibilidad && (
        <ContenedorModal
          visibilidad={visibilidad}
          cerrar={ocultarModal}
          titulo={titulo}
          descripcion={descripcion}>
          <Modal cerrar={ocultarModal} />
        </ContenedorModal>
      )}
    </>
  )
}, evitarRenderizadoInterfaz)

export default Interfaz
