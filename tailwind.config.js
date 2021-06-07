module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#046C4C',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
      fontFamily: {
        body: ['Red Hat Text', 'san-serif'],
      },
      height: (theme) => ({
        'screen/1': '100vh',
        'screen/2': '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
