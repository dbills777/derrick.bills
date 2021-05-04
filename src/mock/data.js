import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Derrick Bills | Front End Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Derrick Bills',
  subtitle: 'Front End Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hello! I am Derrick Bills. I am seeking a postion as a Front end Web Developer where I can actively contribute to a team of designers and engineers in createing high quality front end applications and websites.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'brbaimage.png',
    title: 'MERN Front End',
    info: `I created this application to view data from a MongoDB database I seeded with data from the Breaking Bad API`,
    info2: `Key Concepts: Context Api, Functional Components, React Hooks based state management. React Router, Materail UI, Formik, yup`,
    url: 'https://bills3790p1.netlify.app/characters',
    repo: 'https://github.com/dbills777/crud-app-front-end', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hackerNews.png',
    title: 'Svelte HackerNews Clone Promise Practice API',
    info: `This application was my first experince with Svelte, I really enjoyed learning and working with svelte. The main goal and focus of cloning HackerNews was to get a better understanding of Promises and working with API's
    that may not have the best structure for accessing data. Making multiple requests to various endpoints in order to recreate HackerNews was very helpful in gaining experience with Async Await and Promises. `,
    info2: `Key Concepts: Pormises, Async Await, fetch API, `,

    url: 'https://adoring-saha-6f7c34.netlify.app/',
    repo: 'https://github.com/dbills777/hacker-news-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hackerNews.png',
    title: 'Svelte HackerNews Clone Promise Practice API',
    info: `This application was my first experince with Svelte, I really enjoyed learning and working with svelte. The main goal and focus of cloning HackerNews was to get a better understanding of Promises and working with API's
    that may not have the best structure for accessing data. Making multiple requests to various endpoints in order to recreate HackerNews was very helpful in gaining experience with Async Await and Promises. `,
    info2: '',
    url: 'https://adoring-saha-6f7c34.netlify.app/',
    repo: 'https://github.com/dbills777/hacker-news-clone', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dbills777',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/derrick-bills-00423013b/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
