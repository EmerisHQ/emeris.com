export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  ssr: true,
  generate: {
    fallback: false,
    routes: ['/', '404'],
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    titleTemplate: (titleChunk) => {
      // If head.title is undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} - Emeris` : 'Emeris | Cross-chain DeFi'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Access a new world of crypto assets across multiple blockchains. Swap, pool and more, all in one, unified dashboard.',
      },
      // Open Graph
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Emeris – your one-stop portal to cross-chain DeFi',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Emeris – your one-stop portal to cross-chain DeFi',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Access a new world of crypto assets across multiple blockchains. Swap, pool and more, all in one, unified dashboard.',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://emeris.com',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://emeris.com/og-image.jpg',
      },
      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@cosmos' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Emeris – your one-stop portal to cross-chain DeFi',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Access a new world of crypto assets across multiple blockchains. Swap, pool and more, all in one, unified dashboard.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://emeris.com/og-image.jpg',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Emeris – your one-stop portal to cross-chain DeFi',
      },
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
    ],
    script: [
      {
        innerHTML: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WF4QV5K');",
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/styles/main.styl', lang: 'stylus' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-scrollto.client.js',
    '~/plugins/v-tooltip.client.js',
    '~/plugins/vue-observe-visibility.client.js',
    '~/plugins/vue-youtube.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/juliomrqz/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
  ],
  optimizedImages: {
    optimizeImages: true,
  },
  styleResources: {
    stylus: [
      '~/assets/styles/abstracts/_*.styl',
      '~/node_modules/rfs/stylus.styl',
    ],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content'],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://nuxtjs.org/faq/postcss-plugins/#recommended-method
    postcss: {
      plugins: {
        'postcss-font-variant': {},
      },
      preset: {
        // To change the postcss-preset-env settings
        autoprefixer: {},
      },
    },
  },
}
