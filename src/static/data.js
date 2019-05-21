const projects = [
  {
    title: "Livekvitto",
    techniques: ['react', 'node.js', 'firebase', 'stripe'],
    techStack: ['React', 'Node.js', 'Firebase CLI and Realtime Database', 'Stripe', 'Semantic UI', 'Mailjet', 'Heroku CLI'],
    summary: "A start up project with real time updating ticket handling",
    description: "An SaaS allowing service companies to create interactive tickets for their customers, allowing the two parties to communicate through e.g. comments and pictures. A project I've spent a lot of time on and grown a lot with.",
    website: 'https://livekvitto.se/home'
  },
  {
    title: "kvdbil.se",
    techniques: ['react', 'node.js', 'python'],
    description:
      `I've spent the last year working as a consultant at kvdbil.se, one of Sweden´s largest auction websites for cars, both private owned and for companies.
      Developing and maintaining a real time updated e-commerce website like this one includes techniques such as web-socket, polling, pagination, GA tracking.
       It also recquires the ability to work in agile teams, emphasizing the ability to work together and being able to define and solve complex issues. `,
    website: 'https://www.kvd.se/'
  },
  {
    title: "Sato Techno Lab",
    techniques: ['backbone', 'marionette'],
    description:
      `Worked as a consultant at Sato Techno Lab, a world leading manufacturer in the printer indsutry`,
    website: 'http://www.satoeurope.com/nordic/home.aspx'
  },
  {
    title: "GraphQL collab",
    techniques: ['react', 'node.js', 'graphql'],
    description:
      ""
  },
  {
    title: "Pdgeon",
    techniques: ['react', 'firebase'],
    description: ""
  },
  {
    title: "100 GitHub repositories",
    techniques: ['react'],
    description:
      "My take on a React developed client side pagination."
  },
  {
    title: 'Node.js + React "Apply for jobs" application',
    techniques: ['react', 'node.js'],
    description:
      "",
    link: 'Hej'
  },
  {
    title: "Alcohol calculator, trying out React hooks",
    techniques: ['react'],
    description:
      ""
  },
  {
    title: "Weather App, a Vue.js collaboration",
    techniques: ['vue'],
    description:
      ""
  },
  {
    title: "Firebase authentication",
    techniques: ['firebase'],
    description:
      ""
  }
];

const techniques = {
  frontEnd: [
    {
      title: "React",
      summary: "A React based start up project",
      description: "A React based start up project",
      rating: 4.5,
      key: 'react'
    },
    {
      title: "CSS3",
      rating: 4.5,
      key: 'css'
    },
    {
      title: 'Sass',
      rating: 4,
      key: 'sass'
    },
    {
      title: "HTML5",
      key: 'html',
      rating: 4.5
    },
    {
      title: "Vue",
      rating: 3,
      key: 'vue'
    },
    {
      title: "Backbone",
      rating: 2.5,
      key: 'backbone'
    },
    {
      title: "Semantic UI",
      key: 'semanticui',
      rating: 4.5
    },
    {
      title: "Material UI",
      rating: 4.5,
      key: 'materialui'
    },
    {
      title: "Bootstrap",
      rating: 4,
      key: 'bootstrap'
    },
    {
      title: "jQuery",
      key: 'jquery',
      rating: 3
    },
    {
      title: "Vue",
      rating: 3,
      key: 'vue'
    },
    {
      title: "Apollo",
      rating: 4,
      key: 'apollo'
    },
    {
      title: "Photoshop",
      rating: 3.5,
      key: 'photoshop'
    },
    {
      title: "Apollo",
      rating: 4,
      key: 'apollo'
    },

  ],
  backEnd: [
    {
      title: "Node.js",
      rating: 4,
      key: 'node.js'
    },
    {
      title: "MongoDB",
      key: 'mongodb',
      rating: 4
    },
    {
      title: "Mongoose",
      key: 'mongoose',
      rating: 4
    },
    {
      title: "Firebase",
      rating: 4.5,
      key: 'firebase'
    },
    {
      title: "GraphQL",
      key: 'graphq',
      rating: 3.5
    },
    {
      title: 'Stripe',
      key: 'stripe',
      rating: 4
    }
  ],
  libraries: [
    { title: "lodash" },
    { title: "ramda" },
    { title: "moment.js" },
    { title: "reselect" },
    { title: "react-scroller" },
    { title: "react-autocomplete" },
    { title: "prettier" },
    { title: "eslint" },
    { title: "lodash" },
    { title: "lodash" },
    { title: "lodash" },
    { title: "lodash" },
  ],
  tools: [
    {
      title: "Visual Studio Code",
      rating: 4,
      key: "visualstudio"
    },
    {
      title: "Version Control, Git",
      rating: 4,
      key: 'git'
    },
    { title: "Browserstack" }
  ]
};

const about = {
  introduction: `
  I develop front- and back end services with mainly JavaScript, HTML5 and CSS3 together with it's belonging frameworks and libraries.
  I enjoy every aspect of delivering a runtime efficient application in combination with beautiful, smooth UI/UX.`,
  text: `
  I develop front- and back end services with mainly JavaScript, HTML5 and CSS3 together with it's belonging frameworks and libraries.
  I enjoy every aspect of delivering a runtime efficient application in combination with beautiful, smooth UI/UX.`
}

export { projects, techniques, about };
