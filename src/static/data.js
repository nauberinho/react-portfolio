const GO_TO_REPOSITORY = "Go to repository",
  GO_TO_WEBSITE = "Go to website",
  GO_TO_REPOSITORY_FRONT_END = "Go to repository (Front End)",
  GO_TO_REPOSITORY_BACK_END = "Go to repository (Back End)",
  GO_TO_SOURCE_CODE = "Gå till källkod";

const projects = [
  {
    title: "Livekvitto",
    techniques: ["react", "node.js", "firebase", "stripe"],
    techStack: [
      "React",
      "Node.js",
      "Firebase CLI and Realtime Database",
      "Stripe",
      "Semantic UI",
      "Mailjet",
      "Heroku CLI"
    ],
    summary: "A start up project with real time updating ticket handling",
    description:
      "A SaaS allowing service companies to create interactive tickets for their customers, allowing the two parties to communicate through e.g. comments and pictures. A project I've spent a lot of time on and grown a lot with.",
    links: [{ url: "https://livekvitto.se/home", text: GO_TO_WEBSITE }]
  },
  {
    title: "kvdbil.se",
    techniques: ["react", "node.js", "python"],
    description: `I've spent the last year working as a consultant at kvdbil.se, one of Sweden´s largest auction websites for cars, both private owned and for companies.
      Developing and maintaining a real time updated e-commerce website like this one includes techniques such as web-socket, polling, pagination, GA tracking.
       It also requires the ability to work in agile teams, emphasizing the ability to work together and being able to define and solve complex issues. `,
    links: [{ url: "https://www.kvd.se/", text: GO_TO_WEBSITE }]
  },
  {
    title: "Sato Techno Lab",
    techniques: ["backbone", "javascript"],
    description: `Worked as a consultant at Sato Techno Lab, a world leading manufacturer in the printer industry`,
    links: [
      { url: "http://www.satoeurope.com/nordic/home.aspx", text: GO_TO_WEBSITE }
    ]
  },
  {
    title: "Apollo-GraphQL collab",
    techniques: ["graphql", "apollo", "react"],
    links: [
      {
        url: "https://github.com/nauberinho/apollo-graphql-setup",
        text: GO_TO_REPOSITORY
      }
    ],
    description: ""
  },
  {
    title: "Next.js - trying out SSR",
    techniques: ["next.js"],
    links: [
      {
        url: "https://github.com/nauberinho/next.js-try-out",
        text: GO_TO_REPOSITORY
      }
    ],
    description: ""
  },
  {
    title: "Facebook Messenger API",
    techniques: ["node.js"],
    description: "Creating a node.js server which connects and listens to facebook user chatting with a Facebook page.",
    links: [
      {
        url: "https://github.com/nauberinho/facebook-messenger-api",
        text: GO_TO_REPOSITORY
      }
    ]
  },
  {
    title: "Pdgeon",
    techniques: ["react", "firebase"],
    description: "",
    links: [
      {
        url: "https://bitbucket.org/niknau/pdgeon/src/",
        text: GO_TO_REPOSITORY
      }
    ]
  },
  {
    title: "100 GitHub repositories",
    techniques: ["react"],
    description: "My take on a React developed client side pagination.",
    links: [
      {
        url: "https://github.com/nauberinho/100-GitHub-Repositories",
        text: GO_TO_REPOSITORY
      }
    ]
  },
  {
    title: 'Node.js + React "Apply for jobs" application',
    techniques: ["react", "node.js"],
    description: "",
    links: [
      {
        url: "https://bitbucket.org/niknau/apply-for-jobs-spa/src/master/",
        text: GO_TO_REPOSITORY_FRONT_END
      },
      {
        url: "https://bitbucket.org/niknau/apply-for-jobs-be/src",
        text: GO_TO_REPOSITORY_BACK_END
      }
    ]
  },
  {
    title: "Alcohol calculator, trying out React hooks",
    techniques: ["react"],
    description: "",
    links: [
      {
        url: "https://bitbucket.org/niknau/alcoholcalculation/src",
        text: GO_TO_REPOSITORY
      },
      {
        url: "https://alcohol-calculation.firebaseapp.com/",
        text: GO_TO_WEBSITE
      }
    ]
  },
  {
    title: "Weather App, a Vue.js collaboration",
    techniques: ["vue"],
    description: "",
    links: [
      {
        url:
          "https://github.com/nauberinho/nauberinho.github.io/tree/master/youWeather",
        text: GO_TO_SOURCE_CODE
      }
    ]
  },
  {
    title: "Firebase authentication",
    techniques: ["firebase"],
    description: "",
    links: [
      {
        url: "https://nauberinho.github.io/Authentication_inl_3/",
        text: GO_TO_WEBSITE
      }
    ]
  },
  {
    title: "Firebase chat SPA",
    techniques: ["firebase", "react"],
    description:
      "Created a chat application in React and Firebase Realtime Database.",
    links: [
      {
        url: "https://nauberinho.github.io/Chat,%20inl%202/index.html",
        text: GO_TO_WEBSITE
      }
    ]
  }
];

const techniques = {
  frontEnd: [
    {
      title: "React",
      summary: "A React based start up project",
      description: "A React based start up project",
      rating: 4.5,
      key: "react"
    },
    {
      title: "CSS3",
      rating: 4.5,
      key: "css"
    },
    {
      title: "Sass",
      rating: 4,
      key: "sass"
    },
    {
      title: "HTML5",
      key: "html",
      rating: 4.5
    },
    {
      title: "Vue",
      rating: 3,
      key: "vue"
    },
    {
      title: "Backbone",
      rating: 2.5,
      key: "backbone"
    },
    {
      title: "Semantic UI",
      key: "semanticui",
      rating: 4.5
    },
    {
      title: "Material UI",
      rating: 4.5,
      key: "materialui"
    },
    {
      title: "Bootstrap",
      rating: 4,
      key: "bootstrap"
    },
    {
      title: "jQuery",
      key: "jquery",
      rating: 3
    },
    {
      title: "Vue",
      rating: 3,
      key: "vue"
    },
    {
      title: "Apollo",
      rating: 4,
      key: "apollo"
    },
    {
      title: "Photoshop",
      rating: 3.5,
      key: "photoshop"
    }
  ],
  backEnd: [
    {
      title: "Node.js",
      rating: 4,
      key: "node.js"
    },
    {
      title: "MongoDB",
      key: "mongodb",
      rating: 4
    },
    {
      title: "Mongoose",
      key: "mongoose",
      rating: 4
    },
    {
      title: "Firebase",
      rating: 4.5,
      key: "firebase"
    },
    {
      title: "GraphQL",
      key: "graphq",
      rating: 3.5
    },
    {
      title: "Stripe",
      key: "stripe",
      rating: 4
    },
    {
      title: "Socket.io",
      key: "socket.io",
      rating: 3.5
    },
    {
      title: "Express",
      key: "express",
      rating: 4
    }
  ],
  libraries: [
    { title: "Lodash" },
    { title: "Ramda" },
    { title: "Moment.js" },
    { title: "Reselect" },
    { title: "react-scroller" },
    { title: "react-sticky" },
    { title: "react-select" },
    { title: "react-helmet" },
    { title: "react-router-redial" },
    { title: "react-image-gallery" },
    { title: "react-autocomplete" },
    { title: "Prettier" },
    { title: "Eslint" },
    { title: "Classnames" },
    { title: "Cypress" },
    { title: "Contentful" },
    { title: "PhraseApp" },
    { title: "rc-slider" },
    { title: "Validate.js" },
    { title: "Accounting.js " },
    { title: "Axios" },
    { title: "tinymce-react" }
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
      key: "git"
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
};

export { projects, techniques, about };
