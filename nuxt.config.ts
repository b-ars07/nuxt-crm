// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: ['~/assets/css/styles.css'],
  modules: ['@pinia/nuxt'],
  typescript: {
    strict: true
  },
  devtools: { enabled: true }
})
