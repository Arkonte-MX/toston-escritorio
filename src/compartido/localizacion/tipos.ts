export type TipoLocalizacion = {
  CODIGO: string
  DIVISA: {
    ESTILO: string
    MONEDA: string
  }
}

export type TipoLocalizaciones = {
  [clave: string]: TipoLocalizacion
}

export type TipoConfiguracionFormateador = {
  divisa: Intl.NumberFormat
}
