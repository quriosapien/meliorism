import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "Meliorism | A better world",
  description: "My perspective - Kumar Gaurav",
  themeConfig: {
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about-kumar-gaurav' },
      { text: 'QuidoBlog', link: 'https://blog.quido.club' }
    ],

    sidebar: {
      '/resume': [],
      '/': [
        {
          text: '',
          items: [
            { text: 'About Me', link: '/about-kumar-gaurav' },
            { text: 'Recent Contents', link: '/recent-contents' },
            { text: 'Follow me on Twitter', link: 'https://x.com/QurioSapien' },
          ]
        },
        {
          text: 'Some Latest Contents',
          collapsed: false,
          items: [
            { text: 'Life Lately', link: '/life-lately' },
            { text: 'Curiosity & Adaptability', link: '/human-behaviour/curiosity-and-adaptability' },
            { text: '10 Trillion Economy', link: '/startups-and-entrepreneurship/10-trillion-economy' },
            { text: 'Being Better Software Engineer', link: '/technology-and-engineering/being-better-software-engineers' },
            { text: 'Career and Professions', link: '/career-and-profession/' },
            { text: 'A Year of Entrepreneurship', link: '/memoirs/a-year-of-entrepreneurship' },
            { text: 'Learning Entrepreneurship', link: '/lets-learn/entrepreneurship' }
          ]
        },
  
      ],
    },

    socialLinks: [
      { icon: 'x', link: 'https://x.com/QurioSapien' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/heykumargaurav' },
      { icon: 'github', link: 'https://github.com/quriosapien' }
    ],

    footer: {
      message: 'Handcrafted with 💜 in Bangalore, India',
      copyright: 'Copyright © 1995-present <a href="https://x.com/QurioSapien" target="_blank" rel="noreferrer">Kumar Gaurav</a>'
    }
  },
  head: [
    [
      'script',
      {
        async: '',
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1963137247287119",
        crossorigin: 'anonymous'
      }
    ],
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
  },
  cleanUrls: true
})
