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
          { text: 'Recent Contents', link: '/recent-contents' },
          { text: 'Follow me on Twitter', link: 'https://x.com/7qruzer' },
        ]
      },
      {
        text: 'Some Latest Contents',
        collapsed: false,
        items: [
          { text: 'Being Better Software Engineer', link: '/technology-and-engineering/being-better-software-engineers' }
        ]
      },

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
  head: [
    [
      'script',
      {},
      `(function(c,l,a,r,i,t,y) {
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "lw0beg385o");`
    ]
  ],
  lastUpdated: true,
  sitemap: {
    hostname: 'https://meliorism.ink'
  }
})
