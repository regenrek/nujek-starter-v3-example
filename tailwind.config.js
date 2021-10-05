module.exports = {
  darkMode: 'class',
  exposeConfig: true,
  purge: {
    enabled: process.env.ENABLE_PURGE || false
  },
  theme: {
  },
  variants: {

  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ]
}
