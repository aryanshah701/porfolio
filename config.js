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
        discussions, and upvote your favourite posts`,
      techStack: `TypeScript, React.js/Next.js, URQL, Node.js, Express.js, 
      GraphQL, PostgreSQL, Docker`,
      imageSrc: 'gostudylanding',
    },
    {
      name: 'GoStudy',
      description: `A web-app to find and develop your curated list 
      of study places! See a community of like minded students develop 
      around your favourite study place by effortlessly adding your space 
      in just a few seconds, all made possible with the seemless 
      integration with the Google Places API.`,
      techStack: `JavaScript, React.js/Redux, Elixir, Phoenix, REST, Web Sockets, PostgreSQL`,
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
