import { ChangeEvent } from 'react'

import { InterfazDato } from '../../../esquema/dato'

import { ESTILO } from '../constantes'

import {
  deserializarValorOpcion,
  obtenerColorBordeCampo,
  serializarValorOpcion,
} from '../utilerias'

import { TipoCampoSeleccion, TipoOpcionSeleccion } from './tipos'

import Campo from './campo'

export const CampoSeleccion = ({
  campo,
  etiqueta,
  dato,
  onChange,
  children,
  error,
  Icono,
}: TipoCampoSeleccion<InterfazDato>) => {
  const actualizar = (evento: ChangeEvent<HTMLSelectElement>) =>
    onChange({
      target: {
        name: campo,
        value: deserializarValorOpcion(evento),
      },
    })

  return (
    <Campo campo={campo} etiqueta={etiqueta} error={error} Icono={Icono}>
      <select
        name={campo}
        value={serializarValorOpcion(dato)}
        onChange={actualizar}
        className={`bg-white ${ESTILO.CAMPO} ${obtenerColorBordeCampo(!!error)}`}>
        {children}
      </select>
    </Campo>
  )
}

export const OpcionSeleccion = ({
  valor,
  children: etiqueda,
}: TipoOpcionSeleccion) => (
  <option value={serializarValorOpcion(valor)}>{etiqueda}</option>
)
