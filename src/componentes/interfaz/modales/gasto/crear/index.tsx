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
import ListaDesplegable from '../../../../entrada/controles/lista'

import { obtenerCantidadCaracteres } from '../../../../../compartido/utilerias/divisa'

import { TipoModal } from '../../../tipos'
import { InterfazGasto } from '../../../../../esquema/gasto'
import { NUMEROS, TEXTO, VALIDEZ } from '../../../../../compartido/constantes'

import { ERROR, FORMULARIO } from '../constantes'
import { PiArrowsCounterClockwiseLight } from 'react-icons/pi'

const MAXIMO_CARACTERES_NOMBRE = VALIDEZ.NOMBRE.MAXIMO
const MONTO_MAXIMO = VALIDEZ.MONTO.MAXIMO
const MAXIMO_CARACTERES_MONTO = obtenerCantidadCaracteres(MONTO_MAXIMO)

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
  tipo: {
    nombre: TEXTO.VACIO,
  },
  periodicidad: {
    cantidad: NUMEROS.CERO,
    unidad: {
      nombre: TEXTO.VACIO,
    },
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
      console.log('onSubmit', valores)
    },
  })

  const cancelar = () => {
    onReset()
    cerrar()
  }

  const finalizar = () =>
    esquema_formulario.isValid(valores).then((isValid) => {
      if (isValid) {
        onSubmit()
        cerrar()
      }
    })

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
          <ListaDesplegable
            campo={FORMULARIO.PERIODICIDAD.UNIDAD.CAMPO}
            etiqueta={FORMULARIO.PERIODICIDAD.UNIDAD.ETIQUETA}
            dato={valores.periodicidad.unidad.nombre}
            onChange={onChange}
            error={errores.periodicidad?.unidad?.nombre}
            Icono={<GoStopwatch />}>
            {FORMULARIO.PERIODICIDAD.UNIDAD.OPCIONES.map((opcion) => (
              <option key={`periodicidad_gasto_${opcion.id}`} value={opcion.id}>
                {opcion.nombre}
              </option>
            ))}
          </ListaDesplegable>
        </GrupoCampo>
        <ListaDesplegable
          campo={FORMULARIO.TIPO.CAMPO}
          etiqueta={FORMULARIO.TIPO.ETIQUETA}
          dato={valores.tipo.nombre}
          onChange={onChange}
          error={errores.tipo?.nombre}
          Icono={<SlGraph />}>
          {FORMULARIO.TIPO.OPCIONES.map((opcion) => (
            <option key={`tipo_gasto_${opcion.id}`} value={opcion.id}>
              {opcion.nombre}
            </option>
          ))}
        </ListaDesplegable>
      </>
    </Pasos>
  )
}

export default CrearGasto
