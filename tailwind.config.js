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
      'full': '9999px'
    },
    opacity: {
      '16': '0.16'
    },
    maxHeight: {
      '500': '500px'
    },

    extend: {},
  },
  plugins: [],
}

