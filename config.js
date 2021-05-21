module.exports = {
  siteTitle: "Aryan's Portfolio",
  manifestName: 'SolidState',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#5b54da',
  manifestThemeColor: '#5b54da',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/`,
  heading: 'Aryan Shah',
  subHeading: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
    quis rhoncus quam. Maecenas tincidunt finibus nibh a aliquam. 
    Donec non venenatis libero, eget dictum dui. Pellentesque habitant
    morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Ut suscipit velit et elit feugiat, non semper orci posuere. Etiam et
    risus mattis, efficitur eros eu, ultrices nibh. Aenean tempor libero
    sit amet justo rutrum maximus.`,

  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/aryanshah701',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:shah.ary@northeastern.edu',
    },
    {
      icon: 'fab fa-linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aryanshah791/',
    },
  ],
  address: 'Boston, M.A',

  // projects
  higlightProjects: [
    {
      name: 'Postify',
      description: `A web-app for individuals to form communities around 
        discussion posts and threads. Sign up, create posts, have 
        discussions, and upvote your favourite posts.`,
      techStack: `TypeScript, React.js/Next.js, URQL, Node.js, Express.js, 
      GraphQL, PostgreSQL, Docker.`,
      testUsername: '',
      testPassword: '',
      webLink: 'https://postifyy.aryanshah.tech',
      codeLink: 'https://github.com/aryanshah701/postify',
      imageSrc: 'postifypost',
    },
    {
      name: 'GoStudy',
      description: `A web-app to find and develop your curated list 
      of study places! See a community of like minded students develop 
      around your favourite study place by effortlessly adding your space 
      in just a few seconds, all made possible with the seemless 
      integration with the Google Places API.`,
      techStack: `JavaScript, React.js/Redux, Elixir, Phoenix, REST, Web Sockets, PostgreSQL.`,
      testUsername: '',
      testPassword: '',
      webLink: 'https://gostudy.aryanshah.tech',
      codeLink: 'https://github.com/aryanshah701/go-study',
      imageSrc: 'gostudylanding',
    },
    {
      name: 'Bulls and Cows',
      description: `A multiplayer game of Bulls and Cows game implemented
      using Phoenix and React. Play with your friends, create lobbies, 
      and check out your all time scores on the leaderboard.`,
      techStack: `JavaScript, React, Elixir, Phoenix, Web Sockets.`,
      testUsername: '',
      testPassword: '',
      webLink: 'https://bulls.aryanshah.tech',
      codeLink: 'https://github.com/aryanshah701/phoenix-bulls-and-cows',
      imageSrc: 'bullsgame',
    },
    {
      name: 'Events',
      description: `A web-app to find and develop your curated list 
      of study places! See a community of like minded students develop 
      around your favourite study place by effortlessly adding your space 
      in just a few seconds, all made possible with the seemless 
      integration with the Google Places API.`,
      techStack: `JavaScript, React.js/Redux, Elixir, Phoenix, REST, Web Sockets, PostgreSQL.`,
      testUsername: '',
      testPassword: '',
      webLink: 'https://events.aryanshah.tech',
      codeLink: 'https://github.com/aryanshah701/events-spa',
      imageSrc: 'gostudylanding',
    },
  ],

  otherProjects: [
    {
      name: '',
      description: 'Web app',
      imageSrc: '',
    },
  ],
};
