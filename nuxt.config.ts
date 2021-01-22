import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  target: 'static',
  components: true,
  build: {},
  buildModules: [
    '@nuxtjs/composition-api',
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],
  css: [],
  env: {},
  head: {
    title: 'Anacã Tribe - A place to learn, teach, and together create',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A boilerplate to start a Nuxt+TS project quickly' }
    ],
    link: []
  },
  loading: { color: '#0c64c1' },
  modules: [
    '@nuxtjs/google-fonts',
    ['nuxt-lazy-load', { directiveOnly: true }]
  ],
  plugins: [
    '~/plugins/truncate',
    '~/plugins/aos'
  ],
  googleFonts: {
    families: {
      Dosis: [100, 200, 300, 400, 500]
    }
  }
}

export default config
