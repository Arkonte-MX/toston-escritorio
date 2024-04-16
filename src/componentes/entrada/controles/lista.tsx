import { TipoCampoLista, TipoElementoLista } from './tipos'

export const Lista = ({ children }: TipoCampoLista) => (
  <div className="flow-root">
    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
      {children}
    </ul>
  </div>
)

export const ElementoLista = ({
  titulo,
  contenido,
  complemento,
}: TipoElementoLista) => (
  <li className="py-3 border-b border-gray-200">
    <div className="flex items-center space-x-4">
      <div className="flex-1 min-w-0">
        <p className="text-md font-medium">{titulo}</p>
        <p className="text-xs">{contenido}</p>
      </div>
      <div className="inline-flex items-center text-base text-sm">
        {complemento}
      </div>
    </div>
  </li>
)
