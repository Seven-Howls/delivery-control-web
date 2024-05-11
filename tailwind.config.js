/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'error': '#FB3640',
      'warning': '#FFE66D',
      'confirmation': '#23CE6B',
      'background-dark-blue': '#043864',
      'text-dark': '#021E36',
      'light-blue': '#0871CA',
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'cinza': '#707070',
      'search-gray': '#949494',
      'cinza-tabela': '#D9D9D9',
      'border-blue': '#043864',
      'filter-blue': '#043864'
    },
    borderRadius: {
      'sidebar': '100px',
      'full': '9999px',
      'table-header':'7px',
      '7':'7px',
      'search-input': '10px 10px 0px 0px;'
    },
    opacity: {
      '16': '0.16',
      '100': '100%'
    },
    maxHeight: {
      '500': '500px'
    },

    extend: {
      inset: {
        '25': '-25px',
      },
    },
  },
  plugins: [],
}

