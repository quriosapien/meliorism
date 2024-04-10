import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Meliorism",
  description: "My perspective of the future - Kumar Gaurav",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about-kumar-gaurav' }
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: 'About Me', link: '/about-kumar-gaurav' },
          { text: 'Recent Contents', link: '/recent-contents' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ikmrgrv' }
    ]
  },
  sitemap: {
    hostname: 'https://meliorism.ink'
  }
})
