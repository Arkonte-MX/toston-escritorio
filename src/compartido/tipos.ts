/**
 * TIPOS PENSADOS PARA FUNCIONES QUE MANEJAN EVENTOS
 * onClick, onChange, ETC.
 *
 * PARA DAR PREFERENCIA A CÓDIGO COMO: <... onClick={accion}>
 * EN LUGAR DE: <... onClick={(...) => accion(...)}>
 *
 */

export type TipoRetrollamadaEvento = (...args: any[]) => () => void
export type TipoLlamadaEvento = (...args: any[]) => void
