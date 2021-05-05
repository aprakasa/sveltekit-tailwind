const production = process.env.NODE_ENV === "production"

module.exports = {
  mode: 'jit',
  purge: {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    enabled: production,
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: []
}
