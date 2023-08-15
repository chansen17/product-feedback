import { uid } from "uid";
import { proxy } from 'valtio';


export const state = proxy({
    // Add your state properties here
    categories: [
        {
            id: null,
            name: 'All',
        },
        {
            id: 'ui',
            name: 'ui',
        },
        {
            id: 'ux',
            name: 'ux',
        },
        {
            id: 'enhancement',
            name: 'enhancement',
        },
        {
            id: 'bug',
            name: 'bug',
        },
        {
            id: 'feature',
            name: 'feature',
        },
    ],

    filter: null,

    entries: [
        {
          id: uid(),
          name: 'add tags for solutions',
          text: 'easier to search for solutions on a specific stack.',
          category: 'enhancement',
          commentCount: '',
          voteCount: 175,
          comments: [
            {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                    name: 'John Drake',
                    handle: '@randomDude04'
                }
            },
            {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                    name: 'Judie M',
                    handle: '@randomjud'
                }
            },
          ]
        },
        {
          id: uid(),
          name: 'dark mode option',
          text: 'provide an option for users who prefer dark mode.',
          category: 'ux',
          commentCount: '',
          voteCount: 99,
          comments: [
            {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                    name: 'Dave Matheston',
                    handle: '@awesomesaucesave'
                }
            },
            {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                    name: 'Pete Homes',
                    handle: '@itspete19235'
                }
            },
            {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                    name: 'javier Vazquez',
                    handle: '@javiesaidwhat'
                }
            },
          ]
        },
        {
          id: uid(),
          name: 'improve mobile responsiveness',
          text: 'ensure the app works seamlessly on various mobile devices.',
          category: 'bug',
          commentCount: '',
          voteCount: 22,
          comments: [
            {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident  rem perferendis quia dolorem adipisci laudantium. adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                    name: 'judy roosehaldt',
                    handle: '@itsjudyr'
                }
            },
            {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                    name: 'Jennier Kendrick',
                    handle: '@Jennie.k'
                }
            },
          ]
        },
        {
          id: uid(),
          name: 'integration with third-party tools',
          text: 'allow users to connect their favorite tools for more productivity.',
          category: 'feature',
          commentCount: '',
          voteCount: 112,
          comments: [
            {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident  rem perferendis quia dolorem adipisci laudantium. quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                    name: 'joseph henderson',
                    handle: '@josephthehenderson'
                }
            },
            {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident  rem perferendis quia dolorem adipisci laudantium. dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                    name: 'Maddison Hunt',
                    handle: '@madh07'
                }
            },
            {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                    name: 'Jonathen Rapport',
                    handle: '@rapp.j'
                }
            },
          ]
        },
        {
          id: uid(),
          name: 'add voting system',
          text: 'let users upvote/downvote suggestions to prioritize feedback.',
          category: 'enhancement',
          commentCount: '',
          voteCount: 65,
          comments: [
            {
                id: uid(),
                comment: 'Eum totam veritatis aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident  rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                    name: 'cristine flint',
                    handle: '@flintnspark'
                }
            },
            {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                    name: 'Jazmine Gardner',
                    handle: '@jazgarner'
                }
            },
          ]
        },
        {
          id: uid(),
          name: 'bug report feature',
          text: 'create a dedicated section for users to report and track bugs.',
          category: 'ui',
          commentCount: '',
          voteCount: 24,
          comments: [
            {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                    name: 'Kevin Park',
                    handle: '@parksarecool'
                }
            },
            {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                    name: 'Bi Lin',
                    handle: '@bilinguy24'
                }
            },
            {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident  rem perferendis quia dolorem adipisci laudantium. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                    name: 'David Choi',
                    handle: '@d.choi'
                }
            },
          ]
        },
        {
            id: uid(),
            name: 'improve user onboarding process',
            text: 'create a more intuitive onboarding flow for new users to easily understand the app.',
            category: 'ui',
            commentCount: '',
            voteCount: 42,
            comments: [
              {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                  name: 'Alice Thompson',
                  handle: '@alice_in_tech'
                }
              },
              {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                  name: 'Bob Johnson',
                  handle: '@coding_bob'
                }
              }
            ]
          },
          {
            id: uid(),
            name: 'real-time collaboration feature',
            text: 'allow multiple users to work together on the same document in real-time.',
            category: 'feature',
            commentCount: '',
            voteCount: 78,
            comments: [
              {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                  name: 'Eleanor Smith',
                  handle: '@elli_code'
                }
              },
              {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                  name: 'Samuel Williams',
                  handle: '@sam_dev'
                }
              },
              {
                id: uid(),
                comment: 'Eum totam veritatis rem perferendis quia dolorem adipisci laudantium. Veritatis delectus repudiandae nulla quo repellendus unde ex vero maxime. Libero nesciunt laborum rerum. Aliquid fugiat quasi ab est iure. Beatae rem explicabo dolore voluptatem quaerat. Provident impedit nihil.',
                user: {
                  name: 'Grace Turner',
                  handle: '@gracefulcoder'
                }
              }
            ]
          }
      ]
  });

  state.entries.forEach(entry => {
    entry.commentCount = entry.comments.length;
  });