import {
  TipoLlamadaEvento,
  TipoRetrollamadaEvento,
} from '../../compartido/tipos'
import { MODALES, VISTAS } from '../interfaz/constantes'

export type TipoGanchoVista = [VISTAS, TipoRetrollamadaEvento]

export type TipoOperacionModal = () => [MODALES, TipoRetrollamadaEvento]
export type TipoVisibilidadModal = () => [
  boolean,
  TipoLlamadaEvento,
  TipoLlamadaEvento,
]
export type TipoGanchoModal = [TipoVisibilidadModal, TipoOperacionModal]
