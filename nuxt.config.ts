import type { NuxtConfig } from '@nuxt/types'

const defaultTitle =
  'Anacã Tribe - A place to learn, teach, and together create'
const defaultDescription =
  'We are a Brazilian born, international community that shares the same passion for electronic music.'
const baseURL = process.env.BASE_URL ?? 'http://anacatribe.com'

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
    title: defaultTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: defaultDescription
      },
      // OG / Social Graph
      {
        hid: 'og:title',
        name: 'og:title',
        content: defaultTitle
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: defaultDescription
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        name: 'og:url',
        content: baseURL
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: baseURL + '/apple-touch-icon.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'image_src', href: '/apple-touch-icon.png' }
    ]
  },

  loading: { color: '#0c64c1' },
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    ['nuxt-lazy-load', { directiveOnly: true }]
  ],
  plugins: [
    '~/plugins/truncate',
    '~/plugins/aos'
  ],
  content: {},
  googleFonts: {
    families: {
      Dosis: [100, 200, 300, 400, 500]
    }
  }
}

export default config
