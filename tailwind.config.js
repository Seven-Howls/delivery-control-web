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
      'black': '#000000',
      'cinza': '#707070',
      'search-gray': '#949494',
      'cinza-tabela': '#D9D9D9',
      'border-blue': '#043864',
      'filter-blue': '#043864',
      'gray-text': '#B3B3B3',
    },
    borderRadius: {
      'sidebar': '50px',
      'full': '9999px',
      'table-header':'7px',
      '7':'7px',
      'search-input': '10px 10px 0px 0px;'
    },
    opacity: {
      '16': '0.16',
      '40': '0.40',
      '100': '100%',
    },
    maxHeight: {
      '300': 'calc(100vh - 390px)',
      'lg-300': 'calc(100vh - 270px)',
      'screen': '100vh'
    },
    boxShadow: {
      'header': '0px 1px 14px 2px rgb(0 0 0 / 25%)',
    },
    extend: {
      inset: {
        '25': '-25px',
        '15': '3.8rem'
      },
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(90deg, rgba(61, 123, 176, 0.3) 0%, rgba(135, 172, 203, 0.3) 12%, rgba(36, 107, 167, 0.3) 53%, rgba(6, 87, 156, 0.3) 100%)',
    },
  },
  plugins: [],
}

