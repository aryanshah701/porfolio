module.exports = {
  siteTitle: "Aryan's Portfolio",
  manifestName: 'Portfolio website',
  manifestShortName: 'Portfolio', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#5b54da',
  manifestThemeColor: '#5b54da',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/`,
  heading: "Hi I'm Aryan, Welcome to my portfolio!",
  subHeading: `I'm a third year undergraduate 
  student at Northeastern University majoring in Computer Science. I am 
  passionate about learning new technologies and building impactful software. 
  Here are some of my personal projects, I hope you enjoy!`,

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
      description: `A single page application to organize and share 
      events built using react and phoenix. Signup, create events, 
      invite your friends, and see their responses.`,
      techStack: `JavaScript, React.js/Redux, Elixir, Phoenix, REST, PostgreSQL.`,
      testUsername: 'testuser@gmail.com',
      testPassword: 'password123',
      webLink: 'https://events.aryanshah.tech',
      codeLink: 'https://github.com/aryanshah701/events-spa',
      imageSrc: 'events',
    },
  ],

  otherProjects: [
    {
      name: "Dijkstra's Visualizer",
      description:
        "A create react application that visualizes Dijkstra's pathfinding algorithm.",
      imageSrc: 'pathfinding',
      webLink: 'https://visualizer.aryanshah.tech',
      codeLink: 'https://github.com/aryanshah701/pathfinding-visualizer',
    },
    {
      name: 'Amazon Best Deals',
      description: `A python web scraper that searches for the best deal and 
        cheapest price for a product you are looking for.`,
      imageSrc: 'bestdeals',
      codeLink: 'https://github.com/aryanshah701/amazon-best-deals',
    },
    {
      name: 'Animation and Algorithm Visualizer',
      description: `A java applicaition that parses and renders a set of textual instructions as an animation.`,
      imageSrc: 'visualizer',
      otherLink: '/Algo-Visualizer',
    },
  ],
};
