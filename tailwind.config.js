module.exports = {
  purge: ['./src/components/**/*.{js,jsx}', './public/index.html'],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 0.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
