export default defineNuxtConfig({
  extends: [
    './ui',
    './apps/landing',
    './apps/store',
    './apps/blog',
    './apps/admin',
    './apps/docs',
    './apps/auth',
  ],
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    //'@nuxtjs/fontaine',
  ],
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    vueI18n: {
      legacy: false,
      locale: 'id',
      messages: {
        en: {
          app_name: 'Storia ID',
          app_description:
            'Quick Boilerplate built on top of Nuxt 3 and Tailwind CSS',
          menu_home: 'Home',
          menu_store: 'Store',
          menu_blog: 'Blog',
          menu_dashboard: 'Dashboard',
        },
        id: {
          app_name: 'Storia ID',
          app_description:
            'Boilerplate cepat yang dibangun dari Nuxt 3 and Tailwind CSS',
          menu_home: 'Beranda',
          menu_store: 'Toko',
          menu_blog: 'Blog',
          menu_dashboard: 'Dasbor',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      gaId: '',
    },
  },
  googleFonts: {
    prefetch: true,
    preconnect: true,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  content: {
    highlight: {
      theme: {
        default: 'github-dark',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini']
    },
    
  }
})
