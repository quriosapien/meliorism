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
    ],
    // [
    //   'script',
    //   {},
    //   `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    //   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    //   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    //   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    //   })(window,document,'script','dataLayer','GTM-WMJ2GGPF');`
    // ],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-2SLHXPNT1W'
      }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-2SLHXPNT1W');`
    ]
  ],
  lastUpdated: true,
  sitemap: {
    hostname: 'https://meliorism.ink'
  }
})
