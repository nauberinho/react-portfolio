const projects = [
  {
    title: "Livekvitto",
    techniques: ['react', 'node.js', 'heroku', 'firebase'],
    summary: "A start up project with real time updating ticket handling",
    description: "A React based start up project",
    website: 'www.livekvitto.se'
  },
  {
    title: "kvdbil.se",
    techniques: ['react', 'node.js', 'javascript'],
    description:
      "Been working as a frontend developer at one of Sweden's largest auction sites."
  },
  {
    title: "GraphQL collab",
    techniques: ['react', 'node.js', 'graphql'],
    description:
      "Been working as a frontend developer at one of Sweden's largest auction sites."
  },
  {
    title: "Pdgeon",
    techniques: ['react', 'firebase'],
    summary:
      "Been working as a frontend developer at one of Sweden's largest auction sites.",
    description:
      "Been working as a frontend developer at one of Sweden's largest auction sites."
  },
  {
    title: "100 GitHub repositories",
    techniques: ['react'],
    summary:
      "My take on a React developed client side pagination.",
    description:
      "Been working as a frontend developer at one of Sweden's largest auction sites."
  },
  {
    title: 'Node.js + React "Apply for jobs" application',
    techniques: ['react', 'node.js'],
    summary:
      "Been working as a frontend developer at one of Sweden's largest auction sites.",
    description:
      "Been working as a frontend developer at one of Sweden's largest auction sites.",
    link: 'Hej'
  },
  {
    title: "Alcohol calculator, trying out React hooks",
    techniques: ['react'],
    summary:
      "Been working as a frontend developer at one of Sweden's largest auction sites.",
    description:
      "Been working as a frontend developer at one of Sweden's largest auction sites."
  },
  {
    title: "Weather App, a Vue.js collaboration",
    techniques: ['vue'],
    summary:
      "Been working as a frontend developer at one of Sweden's largest auction sites.",
    description:
      "Been working as a frontend developer at one of Sweden's largest auction sites."
  },
  {
    title: "Firebase authentication",
    techniques: ['firebase'],
    summary:
      "Been working as a frontend developer at one of Sweden's largest auction sites.",
    description:
      "Been working as a frontend developer at one of Sweden's largest auction sites."
  }
];

const techniques = {
  frontEnd: [
    {
      title: "React",
      summary: "A React based start up project",
      description: "A React based start up project",
      rating: 5,
      key: 'react'
    },
    {
      title: "CSS3",
      rating: 5,
      key: 'css'
    },
    {
      title: 'Sass',
      rating: 5,
      key: 'sass'
    },
    {
      title: "HTML5",
      key: 'html',
      rating: 5
    },
    {
      title: "Vue",
      rating: 3,
      key: 'vue'
    },
    {
      title: "Backbone",
      summary: "A React based start up project",
      description: "A React based start up project",
      rating: 2.5
    }
  ],
  backEnd: [
    {
      title: "Node.js",
      summary: "A React based start up project",
      description: "A React based start up project",
      rating: 4,
      key: 'node.js'
    },
    {
      title: "GraphQL",
      key: 'graphq',
      rating: 3.5
    }
  ],
  tools: [
    {
      title: "Visual Studio Code",
      summary: "A React based start up project",
      description: "A React based start up project",
      rating: 4
    },
    {
      title: "Version Control, Git",
      summary:
        "Been working as a frontend developer at one of Sweden's largest auction sites.",
      description:
        "Been working as a frontend developer at one of Sweden's largest auction sites.",
      rating: 4,
      key: 'git'
    }
  ]
};

export { projects, techniques };
