new Docute({
  target: '#docute',
  title: 'Yura Bot Documentation',
  sourcePath: './docs/',
  detectSystemDarkTheme: true,
  darkThemeToggler: true,
  imageZoom: true,
  nav: [
    {
      title: 'Accueil',
      link: '/'
    },
    {
      title: 'Site Principal',
      link: 'https://yurabot.xyz'
    },
    {
      title: 'Discord',
      link: 'https://yurabot.xyz/discord'
    },
  ],
  sidebar: [
    {
      title: 'Accueil',
      link: '/'
    },
    {
      title: 'Bot discord :',
      links: [
        {
          title: 'Backups',
          link: '/backup'
        },
        {
          title: 'Giveaway',
          link: '/giveaway'
        },
        {
          title: 'Ticket',
          link: '/ticket'
        },
      ]
    },
    {
      title: 'Dashboard :',
      links: [
        {
          title: 'Les points',
          link: '/points'
        }
      ]
    },
    {
      title: 'Autres :',
      links: [
        {
          title: 'Multilanguage',
          link: '/multi-lang'
        }
      ]
    }
  ]

})
