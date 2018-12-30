const FRONTEND_SKILL = 1
const BACKEND_SKILL = 2
const SERVER_SKILL = 3

const skills = [
  {
    id: 1,
    name: 'javaScript_(es6)',
    proficiency: 7,
    type: FRONTEND_SKILL,
    comments: [
      {
        body: 'I love fat arrow syntax, especially the implicit returns',
        disposition: 1
      },
      {
        body: 'I love lamp',
        disposition: 1
      },
      {
        body: "I haven't found a clean way to create an array of n length",
        disposition: 0
      }
    ]
  },
  {
    id: 2,
    name: 'pHP_(php7)',
    proficiency: 7,
    type: BACKEND_SKILL,
    comments: [
      {
        body:
          'Version 7 really made PHP a more enjoyable scripting language, especially with the addition of the coalesce operator',
        disposition: 1
      },
      {
        body:
          'Laravel MVC makes development so much more enjoyable and is a well documented implementation of the MVC pattern',
        disposition: 1
      },
      {
        body: 'I still google the syntax for array_functions every time',
        disposition: 0
      }
    ]
  },
  {
    id: 3,
    name: 'cSS_(scss)',
    proficiency: 7,
    type: FRONTEND_SKILL,
    comments: [
      {
        body:
          'Allows for programmatic generation of css rules, in some instances, which can be down right amazing.',
        disposition: 1
      },
      {
        body:
          'Nesting syntax means that as long as I have Bracket Colorizer for VS Code, I can write concise, contained rules.',
        disposition: 1
      },
      {
        body: 'Why do I have to rebuild node-sass so often?',
        disposition: 0
      }
    ]
  },
  {
    id: 4,
    name: 'vue_JS',
    proficiency: 2,
    type: FRONTEND_SKILL,
    comments: [
      {
        body:
          "I prefer Vue's single file components to React's JSX offerings (even though Vue can be written in JSX)",
        disposition: 1
      },
      {
        body:
          "The shorthands for Vue's event listener & v-bind directives helps maintain the legibility of the markup while enabling a declarative markup",
        disposition: 1
      },
      {
        body: 'Not as many jobs in Los Angeles for Vue developers',
        disposition: 0
      }
    ]
  },
  {
    id: 5,
    name: 'Linux',
    proficiency: 5,
    type: SERVER_SKILL,
    comments: [
      {
        body:
          "I prefer Vue's single file components to React's JSX offerings (even though Vue can be written in JSX)",
        disposition: 1
      },
      {
        body:
          "The shorthands for Vue's event listener & v-bind directives helps maintain the legibility of the markup while enabling a declarative markup",
        disposition: 1
      },
      {
        body: 'Not as many jobs in Los Angeles for Vue developers',
        disposition: 0
      }
    ]
  }
]

export default skills
