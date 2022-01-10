module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  variants: {
    extend: {
      display: ['dark'],
    },
  },
  plugins: [],
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
}
