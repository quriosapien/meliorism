import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Meliorism",
  description: "My perspective - Kumar Gaurav",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about-kumar-gaurav' }
    ],

    sidebar: {
      '/resume': [],
      '/': [
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
    },

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
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/meliorism.ink/Meliorism/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2Fa2ba4809-e63e-427d-9378-d2719ec36603.png%3Ftoken%3DY5E6ri9Zn6zouOBrIy48aQIUi0YFW5f1bl9C6ODZrOs%26height%3D1200%26width%3D1200%26expires%3D33249157833/og.png'
      }
    ],

    // OG:TWITTER
    [
      'meta',
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    [
      'meta',
      {
        property: 'twitter:domain',
        content: 'meliorism.ink'
      }
    ],
    [
      'meta',
      {
        property: 'twitter:url',
        content: 'https://meliorism.ink'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:title',
        content: 'Meliorism'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:description',
        content: 'My perspective of the future - Kumar Gaurav'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/meliorism.ink/Meliorism/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2Fa2ba4809-e63e-427d-9378-d2719ec36603.png%3Ftoken%3DY5E6ri9Zn6zouOBrIy48aQIUi0YFW5f1bl9C6ODZrOs%26height%3D1200%26width%3D1200%26expires%3D33249157833/og.png'
      }
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
