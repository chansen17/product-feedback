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
          commentCount: 5,
          voteCount: 175,
        },
        {
          id: uid(),
          name: 'dark mode option',
          text: 'provide an option for users who prefer dark mode.',
          category: 'ux',
          commentCount: 5,
          voteCount: 99,
        },
        {
          id: uid(),
          name: 'improve mobile responsiveness',
          text: 'ensure the app works seamlessly on various mobile devices.',
          category: 'bug',
          commentCount: 1,
          voteCount: 22,
        },
        {
          id: uid(),
          name: 'integration with third-party tools',
          text: 'allow users to connect their favorite tools for more productivity.',
          category: 'feature',
          commentCount: 7,
          voteCount: 112,
        },
        {
          id: uid(),
          name: 'add voting system',
          text: 'let users upvote/downvote suggestions to prioritize feedback.',
          category: 'enhancement',
          commentCount: 3,
          voteCount: 65,
        },
        {
          id: uid(),
          name: 'bug report feature',
          text: 'create a dedicated section for users to report and track bugs.',
          category: 'ui',
          commentCount: 1,
          voteCount: 24,
        },
        // Add more objects as needed
      ]
  });