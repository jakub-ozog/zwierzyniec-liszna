// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'shadcn-nuxt',
  ],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      Epilogue: [300, 400, 500, 600, 700]
    }
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})