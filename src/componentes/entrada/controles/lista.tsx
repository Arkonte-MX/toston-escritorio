import { ChangeEvent } from 'react'

import { InterfazDato } from '../../../esquema/dato'

import { ESTILO } from '../constantes'

import {
  deserializarValorOpcion,
  obtenerColorBordeCampo,
  serializarValorOpcion,
} from '../utilerias'

import {
  TipoCampoListaDesplegable,
  TipoOpcionCampoListaDesplegable,
} from './tipos'

import Campo from './campo'

export const ListaDesplegable = ({
  campo,
  etiqueta,
  dato,
  onChange,
  children,
  error,
  Icono,
}: TipoCampoListaDesplegable<InterfazDato>) => {
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

export const OpcionLista = ({
  valor,
  children: etiqueda,
}: TipoOpcionCampoListaDesplegable) => (
  <option value={serializarValorOpcion(valor)}>{etiqueda}</option>
)
