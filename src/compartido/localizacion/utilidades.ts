import { LOCALIZACION } from './constantes'
import { TipoConfiguracionFormateador, TipoLocalizacion } from './tipos'

class Formateador {
  private configuracion: TipoConfiguracionFormateador = {
    divisa: {} as Intl.NumberFormat,
  }

  constructor() {
    const localizacion = LOCALIZACION['es-MX']
    this.reconfigurar.divisa(localizacion)
  }

  reconfigurar = {
    divisa: (localizacion: TipoLocalizacion) => {
      this.configuracion.divisa = new Intl.NumberFormat(localizacion.CODIGO, {
        style: localizacion.DIVISA.ESTILO,
        currency: localizacion.DIVISA.MONEDA,
      })
    },
  }

  formatear = {
    divisa: (numero: number) => this.configuracion.divisa?.format(numero),
  }
}

export const formateador = new Formateador()
