import { useFormik } from 'formik'
import * as Yup from 'yup'

import { CgRename } from 'react-icons/cg'
import { SlGraph } from 'react-icons/sl'
import { GoStopwatch } from 'react-icons/go'

import Pasos from '../../../../pasos'
import GrupoCampo from '../../../../entrada/controles/grupo'
import CampoTextoCorto from '../../../../entrada/controles/texto'
import CampoDivisa from '../../../../entrada/controles/divisa'
import CampoNumerico from '../../../../entrada/controles/numerico'
import {
  CampoSeleccion,
  OpcionSeleccion,
} from '../../../../entrada/controles/seleccion'

import { Lista, ElementoLista } from '../../../../entrada/controles/lista'

import { obtenerCantidadCaracteres } from '../../../../../compartido/utilerias/divisa'

import { TipoModal } from '../../../tipos'
import { InterfazGasto } from '../../../../../esquema/gasto'
import { NUMEROS, TEXTO, VALIDEZ } from '../../../../../compartido/constantes'

import { ERROR, FORMULARIO } from '../constantes'
import { PiArrowsCounterClockwiseLight } from 'react-icons/pi'

const MAXIMO_CARACTERES_NOMBRE = VALIDEZ.NOMBRE.MAXIMO
const MONTO_MAXIMO = VALIDEZ.MONTO.MAXIMO
const MAXIMO_CARACTERES_MONTO = obtenerCantidadCaracteres(MONTO_MAXIMO)

const UNIDADES_PERIODICIDAD = FORMULARIO.PERIODICIDAD.UNIDAD.obtenerOpciones()
const TIPOS_GASTO = FORMULARIO.TIPO.obtenerOpciones()

const esquema_formulario = Yup.object().shape({
  nombre: Yup.string()
    .min(VALIDEZ.NOMBRE.MINIMO, ERROR.NOMBRE.MINIMO)
    .max(MAXIMO_CARACTERES_NOMBRE, ERROR.NOMBRE.MAXIMO)
    .required(ERROR.NOMBRE.REQUERIDO),
  monto: Yup.number()
    .min(VALIDEZ.MONTO.MINIMO, ERROR.MONTO.MINIMO)
    .max(MONTO_MAXIMO, ERROR.MONTO.MAXIMO)
    .notRequired(),
  tipo: Yup.object().shape({
    nombre: Yup.string().required(ERROR.TIPO.REQUERIDO),
  }),
  periodicidad: Yup.object().shape({
    cantidad: Yup.number()
      .min(
        VALIDEZ.PERIODICIDAD.CANTIDAD.MINIMO,
        ERROR.PERIODICIDAD.CANTIDAD.MINIMO
      )
      .max(
        VALIDEZ.PERIODICIDAD.CANTIDAD.MAXIMO,
        ERROR.PERIODICIDAD.CANTIDAD.MAXIMO
      )
      .required(ERROR.PERIODICIDAD.CANTIDAD.REQUERIDO),
    unidad: Yup.object().shape({
      nombre: Yup.string().required(ERROR.PERIODICIDAD.UNIDAD.REQUERIDO),
    }),
  }),
})

const valores_iniciales: InterfazGasto = {
  nombre: TEXTO.VACIO,
  monto: NUMEROS.CERO,
  tipo: TIPOS_GASTO[NUMEROS.CERO],
  periodicidad: {
    cantidad: NUMEROS.CERO,
    unidad: UNIDADES_PERIODICIDAD[NUMEROS.CERO],
  },
}

const CrearGasto = ({ cerrar }: TipoModal) => {
  const {
    errors: errores,
    values: valores,
    handleChange: onChange,
    handleSubmit: onSubmit,
    resetForm: onReset,
  } = useFormik({
    validateOnMount: true,
    initialValues: valores_iniciales,
    validationSchema: esquema_formulario,
    onSubmit: (valores) => {
      console.log('SUBMIT', valores)
    },
  })

  const cancelar = () => {
    console.log('CANCELAR')
    onReset()
    cerrar()
  }

  const finalizar = () =>
    esquema_formulario.isValid(valores).then((isValid) => {
      console.log('FINALIZAR', { valores, errores, isValid })
      if (isValid) {
        onSubmit()
        cerrar()
      }
    })

  const personas = [
    {
      titulo: <span>Juan Pérez</span>,
      contenido: <span>13.27%</span>,
      complemento: <strong>$1,500.00</strong>,
    },
    {
      titulo: <span>María González</span>,
      contenido: <span>28.32%</span>,
      complemento: <strong>$3,200.00</strong>,
    },
    {
      titulo: <span>Carlos Herrera</span>,
      contenido: <span>18.58%</span>,
      complemento: <strong>$2,100.00</strong>,
    },
    {
      titulo: <span>Ana Mendoza</span>,
      contenido: <span>15.93%</span>,
      complemento: <strong>$1,800.00</strong>,
    },
    {
      titulo: <span>Luis Guzmán</span>,
      contenido: <span>23.89%</span>,
      complemento: <strong>$2,700.00</strong>,
    },
  ]

  return (
    <Pasos onCancel={cancelar} onFinish={finalizar}>
      <>
        <CampoTextoCorto
          campo={FORMULARIO.NOMBRE.CAMPO}
          etiqueta={FORMULARIO.NOMBRE.ETIQUETA}
          dato={valores.nombre}
          onChange={onChange}
          ejemplo={FORMULARIO.NOMBRE.EJEMPLO}
          caracteres={MAXIMO_CARACTERES_NOMBRE}
          error={errores.nombre}
          Icono={<CgRename />}
        />
        <CampoDivisa
          campo={FORMULARIO.MONTO.CAMPO}
          etiqueta={FORMULARIO.MONTO.ETIQUETA}
          dato={valores.monto}
          onChange={onChange}
          minimo={FORMULARIO.MONTO.MINIMO}
          maximo={FORMULARIO.MONTO.MAXIMO}
          incrementos={FORMULARIO.MONTO.INCREMENTOS}
          ejemplo={FORMULARIO.MONTO.EJEMPLO}
          caracteres={MAXIMO_CARACTERES_MONTO}
          error={errores.monto}
        />
        <GrupoCampo>
          <CampoNumerico
            campo={FORMULARIO.PERIODICIDAD.CANTIDAD.CAMPO}
            etiqueta={FORMULARIO.PERIODICIDAD.CANTIDAD.ETIQUETA}
            dato={valores.periodicidad.cantidad}
            onChange={onChange}
            minimo={FORMULARIO.PERIODICIDAD.CANTIDAD.MINIMO}
            maximo={FORMULARIO.PERIODICIDAD.CANTIDAD.MAXIMO}
            incrementos={FORMULARIO.PERIODICIDAD.CANTIDAD.INCREMENTOS}
            ejemplo={FORMULARIO.PERIODICIDAD.CANTIDAD.EJEMPLO}
            caracteres={VALIDEZ.PERIODICIDAD.CANTIDAD.MAXIMO}
            error={errores.periodicidad?.cantidad}
            Icono={<PiArrowsCounterClockwiseLight />}
          />
          <CampoSeleccion
            campo={FORMULARIO.PERIODICIDAD.UNIDAD.CAMPO}
            etiqueta={FORMULARIO.PERIODICIDAD.UNIDAD.ETIQUETA}
            dato={valores.periodicidad.unidad}
            onChange={onChange}
            error={errores.periodicidad?.unidad?.nombre}
            Icono={<GoStopwatch />}>
            {UNIDADES_PERIODICIDAD.map((opcion) => (
              <OpcionSeleccion
                key={`periodicidad_gasto_${opcion.id}`}
                valor={opcion}>
                {opcion.nombre}
              </OpcionSeleccion>
            ))}
          </CampoSeleccion>
        </GrupoCampo>
        <CampoSeleccion
          campo={FORMULARIO.TIPO.CAMPO}
          etiqueta={FORMULARIO.TIPO.ETIQUETA}
          dato={valores.tipo}
          onChange={onChange}
          error={errores.tipo?.nombre}
          Icono={<SlGraph />}>
          {TIPOS_GASTO.map((opcion) => (
            <OpcionSeleccion key={`tipo_gasto_${opcion.id}`} valor={opcion}>
              {opcion.nombre}
            </OpcionSeleccion>
          ))}
        </CampoSeleccion>
      </>
      <>
        <div className="p-2">
          <Lista>
            {personas.map((elemento) => (
              <ElementoLista
                titulo={elemento.titulo}
                contenido={elemento.contenido}
                complemento={elemento.complemento}
              />
            ))}
          </Lista>
        </div>
      </>
    </Pasos>
  )
}

export default CrearGasto
