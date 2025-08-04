/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      // Extend default line-height values
      lineHeight: {
        'base': '1.6',        // Custom base line-height
        'relaxed': '1.75',    // More relaxed
        'loose': '2',         // Very loose
      },
      // You can also extend typography for specific elements
      typography: {
        DEFAULT: {
          css: {
            lineHeight: '1.6',
            p: {
              lineHeight: '1.6',
            },
            li: {
              lineHeight: '1.6',
            },
          },
        },
      },
    },
  },
  plugins: [],
}
