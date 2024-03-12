/**
 * ALGUNOS COMPONENTES APLICAN CLASSES DE FORMA DINÁMICA
 * ESTO PROVOCA QUE TAILWIND NO ENCUENTRE DICHAS CLASES, Y
 * POR LO TANTO NO GENERE EL CÓDIGO CSS REQUERIDO.
 *
 * PARA FORZAR QUE DICHAS CLASSES ESTÉN PRESENTES
 * EN TIEMPO DE EJECUCIÓN, DEBEN AGREGARSE AL SAFELIST
 *
 * https://tailwindcss.com/docs/content-configuration#dynamic-class-names
 *
 */
module.exports = {
  content: ['./src/**/*.tsx'],
  safelist: [
    {
      pattern: /text-(emerald|teal|slate)-(300|600|800)/,
    },
  ],
  theme: {},
  variants: {},
  plugins: [],
}
