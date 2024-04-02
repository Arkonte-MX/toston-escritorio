const plugin = require('tailwindcss')

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
      pattern: /bg-(slate|yellow|cyan|teal|rose)-(200|400|600|700|800)/,
    },
    {
      pattern: /text-(slate|yellow|cyan|teal|rose)-(200|400|600|700|800)/,
    },
    {
      pattern: /border-(slate|yellow|cyan|teal|rose)-(200|400|600|700|800)/,
    },
    {
      pattern: /text-white/,
    },
    {
      pattern: /cursor-(pointer|not-allowed|progress|context-menu|none)/,
    },
    {
      pattern: /font-(medium|extrabold)/,
    },
    {
      pattern: /border-(2|3)/,
    },
    {
      pattern: /p(x|y)-(2|3)/,
    },
    {
      pattern: /appearance-none/,
    },
  ],
  theme: {},
  variants: {},
  plugins: [],
}
