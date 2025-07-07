// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  app: {
    head: {
      title: 'Jay Jackson - Software Engineer & Accessibility Advocate',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal website of Jay Jackson - Software Engineer, Accessibility Advocate, and Tech Enthusiast. Explore my projects, blog posts, and insights on web development and inclusive technology.' },
        { name: 'keywords', content: 'Jay Jackson, software engineer, web developer, accessibility, ASL, deaf advocate, Vue.js, TypeScript, Nuxt, React, Node.js, Python, CNCF' },
        { name: 'author', content: 'Jay Jackson' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Jay Jackson - Software Engineer & Accessibility Advocate' },
        { property: 'og:description', content: 'Personal website of Jay Jackson - Software Engineer, Accessibility Advocate, and Tech Enthusiast. Explore my projects, blog posts, and insights on web development and inclusive technology.' },
        { property: 'og:url', content: 'https://jayjackson.dev' },
        { property: 'og:site_name', content: 'Jay Jackson' },
        { property: 'og:image', content: 'https://jayjackson.dev/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Jay Jackson - Software Engineer & Accessibility Advocate' },
        { name: 'twitter:description', content: 'Personal website of Jay Jackson - Software Engineer, Accessibility Advocate, and Tech Enthusiast. Explore my projects, blog posts, and insights on web development and inclusive technology.' },
        { name: 'twitter:image', content: 'https://jayjackson.dev/og-image.jpg' },
        { name: 'theme-color', content: '#2563eb' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://jayjackson.dev' }
      ]
    }
  }
})
