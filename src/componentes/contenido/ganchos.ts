import { useState } from 'react'

import {
  TipoLlamadaEvento,
  TipoRetrollamadaEvento,
} from '../../compartido/tipos'

import { MODALES, VISTAS } from '../interfaz/constantes'
import { podriaDesplegarModal } from './utilerias'
import {
  TipoGanchoVista,
  TipoGanchoModal,
  TipoOperacionModal,
  TipoVisibilidadModal,
} from './tipos'

export const useVista = (inicial?: VISTAS): TipoGanchoVista => {
  const [actual, setVista] = useState<VISTAS>(inicial ?? VISTAS.RESUMEN)

  const cambiar: TipoRetrollamadaEvento = (seleccion: VISTAS) => () =>
    setVista(seleccion)

  return [actual, cambiar]
}

export const useModal = (inicial: MODALES, vista: VISTAS): TipoGanchoModal => {
  const vista_deberia_tener_modal = podriaDesplegarModal(vista)

  const [operacion, setOperacion] = useState<MODALES>(inicial)
  const [visible, setVisible] = useState<boolean>(false)

  const cambiar: TipoRetrollamadaEvento = (seleccion: MODALES) => () =>
    setOperacion(seleccion)

  const mostrar: TipoLlamadaEvento = () =>
    vista_deberia_tener_modal && setVisible(true)

  const ocultar: TipoLlamadaEvento = () => setVisible(false)

  const useVisibilidadModal: TipoVisibilidadModal = () => [
    visible,
    mostrar,
    ocultar,
  ]

  const useOperacionModal: TipoOperacionModal = () => [operacion, cambiar]

  return [useVisibilidadModal, useOperacionModal]
}
