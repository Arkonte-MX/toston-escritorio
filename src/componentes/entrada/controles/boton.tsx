import { TEXTO_VACIO } from '../../../compartido/constantes'

import { TIPO_BOTON, TipoBoton, TipoBotonContextualizado } from './tipos'
import { COLOR } from '../constantes'

const Boton = ({
  nombre,
  etiqueta,
  descripcion,
  onClick,
  className = TEXTO_VACIO,
  Icono,
  tipo = TIPO_BOTON.BOTON,
}: TipoBoton) => (
  <button
    id={`id_boton_${nombre.trim().toLocaleLowerCase().replace(/\s/, TEXTO_VACIO)}`}
    name={nombre}
    aria-label={etiqueta}
    onClick={onClick}
    className={`flex space-x-1 items-center border border-slate-300 font-semibold rounded shadow py-1 px-4 ${className}`}
    type={tipo}>
    {!!Icono && <Icono />}
    <span>{nombre}</span>
    <span className="sr-only">{descripcion}</span>
  </button>
)

export const BotonNeutral = ({
  onClick,
  nombre = TEXTO_VACIO,
  etiqueta = TEXTO_VACIO,
  descripcion = TEXTO_VACIO,
  className,
  Icono,
}: TipoBotonContextualizado) => (
  <Boton
    nombre={nombre}
    etiqueta={etiqueta}
    onClick={onClick}
    descripcion={descripcion}
    className={`${COLOR.BOTON.SENCILLO.NEUTRAL} ${className}`}
    Icono={Icono}
  />
)

export const BotonContinuar = ({
  onClick,
  nombre = 'Continuar',
  etiqueta = 'Continuar al siguiente paso',
  descripcion = 'Haz clic para memorizar tu avance y continuar con el siguiente paso',
  className = TEXTO_VACIO,
  Icono,
}: TipoBotonContextualizado) => (
  <Boton
    nombre={nombre}
    etiqueta={etiqueta}
    onClick={onClick}
    descripcion={descripcion}
    className={`${COLOR.BOTON.SENCILLO.CONTINUAR} ${className}`}
    Icono={Icono}
  />
)

export const BotonFinalizar = ({
  onClick,
  nombre = 'Finalizar',
  etiqueta = 'Concluir el proceso',
  descripcion = 'Haz clic para completar el proceso y guardar los cambios realizados',
  className = TEXTO_VACIO,
  Icono,
}: TipoBotonContextualizado) => (
  <Boton
    nombre={nombre}
    etiqueta={etiqueta}
    onClick={onClick}
    descripcion={descripcion}
    className={`${COLOR.BOTON.SENCILLO.FINALIZAR} ${className}`}
    Icono={Icono}
    tipo={TIPO_BOTON.ENVIAR}
  />
)

export const BotonCancelar = ({
  onClick,
  nombre = 'Cancelar',
  etiqueta = 'Cancelar el proceso',
  descripcion = 'Haz clic para anular el proceso y limpiar los cambios que no has guardado',
  className = TEXTO_VACIO,
  Icono,
}: TipoBotonContextualizado) => (
  <Boton
    nombre={nombre}
    etiqueta={etiqueta}
    onClick={onClick}
    descripcion={descripcion}
    className={`${COLOR.BOTON.SENCILLO.CANCELAR} ${className}`}
    Icono={Icono}
    tipo={TIPO_BOTON.REINICIAR}
  />
)
