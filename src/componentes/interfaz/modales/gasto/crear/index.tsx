import { useFormik } from 'formik'
import * as Yup from 'yup'

import { ListaDesplegable } from '../../../../entrada/controles/lista'
import { CampoTextoCorto } from '../../../../entrada/controles/texto'
import { CampoNumerico } from '../../../../entrada/controles/numerico'

import Pasos from '../../../../pasos'
import { TipoModal } from '../../../tipos'

import { Gasto } from '../tipos'
import { ERROR, FORMULARIO } from '../constantes'

const esquema_formulario = Yup.object().shape({
  nombre: Yup.string()
    .min(3, ERROR.NOMBRE.MINIMO)
    .max(32, ERROR.NOMBRE.MAXIMO)
    .required(ERROR.NOMBRE.REQUERIDO),
  monto: Yup.number()
    .min(0, ERROR.MONTO.MINIMO)
    .max(1000000, ERROR.MONTO.MAXIMO)
    .notRequired(),
  tipo: Yup.string().required(ERROR.TIPO.REQUERIDO),
})

const valores_iniciales: Gasto = {
  nombre: '',
  monto: 0,
  tipo: '',
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
          valor={valores.nombre}
          onChange={onChange}
          error={errores.nombre}
          ejemplo={FORMULARIO.NOMBRE.EJEMPLO}
        />
        <CampoNumerico
          campo={FORMULARIO.MONTO.CAMPO}
          etiqueta={FORMULARIO.MONTO.ETIQUETA}
          valor={valores.monto}
          onChange={onChange}
          error={errores.monto}
          minimo={FORMULARIO.MONTO.MINIMO}
          maximo={FORMULARIO.MONTO.MAXIMO}
          incrementos={FORMULARIO.MONTO.INCREMENTOS}
          ejemplo={FORMULARIO.MONTO.EJEMPLO}
        />
        <ListaDesplegable
          campo={FORMULARIO.TIPO.CAMPO}
          etiqueta={FORMULARIO.TIPO.ETIQUETA}
          valor={valores.tipo}
          onChange={onChange}
          error={errores.tipo}>
          {FORMULARIO.TIPO.OPCIONES.map((opcion) => (
            <option value={opcion.VALOR}>{opcion.ETIQUETA}</option>
          ))}
        </ListaDesplegable>
      </>
    </Pasos>
  )
}

export default CrearGasto
