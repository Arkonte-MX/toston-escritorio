import { ReactNode } from 'react'

type TipoGrupoCampo = {
  children: ReactNode
}

const GrupoCampo = ({ children }: TipoGrupoCampo) => (
  <div className="flex space-x-4">{children}</div>
)

export default GrupoCampo
