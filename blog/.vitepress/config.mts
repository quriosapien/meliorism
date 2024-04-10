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
      { icon: 'x', link: 'https://x.com/7qruzer' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/heykumargaurav' },
      { icon: 'github', link: 'https://github.com/ikmrgrv' }
    ],

    footer: {
      message: 'Handcrafted with 💜 in Bangalore, India',
      copyright: 'Copyright © 1995-present <a href="https://x.com/7qruzer" target="_blank" rel="noreferrer">Kumar Gaurav</a>'
    }
  },
  sitemap: {
    hostname: 'https://meliorism.ink'
  },
  lastUpdated: true
})
