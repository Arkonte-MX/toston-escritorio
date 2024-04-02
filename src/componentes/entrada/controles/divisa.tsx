import { ChangeEvent } from 'react'
import { MdOutlineAttachMoney } from 'react-icons/md'

import { esCaracteresMontoDentroRango } from '../utilerias'
import { TipoCampoNumerico } from './tipos'

import { NUMEROS } from '../../../compartido/constantes'

import CampoNumerico from './numerico'

const CampoDivisa = ({
  campo,
  etiqueta,
  dato,
  error,
  onChange,
  minimo,
  maximo,
  incrementos,
  ejemplo,
  caracteres,
}: TipoCampoNumerico) => {
  const evitarValorInvalido = (evento: ChangeEvent<HTMLInputElement>) => {
    if (!esCaracteresMontoDentroRango(evento?.target?.value, caracteres))
      evento.target.value = NUMEROS.CERO.toString()

    onChange(evento)
  }

  return (
    <CampoNumerico
      campo={campo}
      etiqueta={etiqueta}
      dato={dato}
      onChange={evitarValorInvalido}
      minimo={minimo}
      maximo={maximo}
      incrementos={incrementos}
      ejemplo={ejemplo}
      caracteres={caracteres}
      error={error}
      Icono={<MdOutlineAttachMoney />}
    />
  )
}

export default CampoDivisa
