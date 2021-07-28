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
  paragraphOne: `Hello! I'm Derrick.`,
  paragraphTwo: `My current focus and interest is to be part of a team that is in need of a Developer that loves to contribute whenever a need arises. Implementing Front End Libraries/Frameworks to build products that look great and function as a solution for the problem they are created to solve. Having the ability to be challenged on a regular basis with new opportunities for learning is exciting to me.`,
  paragraphThree: `In addtion to improving my skills in creating products and user interfaces that people love to use, I also like working on the server side, Currently, NodeJS (Express) is my strongest server tool to use. I look forward to continuously adding tools to my skillset as I progress`,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'brbaimage.png',
    title: 'MERN APP',
    subTitle: `Key Concepts:`,
    info: `This is a basic CRUD application`,
    info2: `Key Concepts: Context Api, Functional Components, React Hooks based state management. React Router, Materail UI, Formik, yup`,
    url: 'https://bills-crud-app-frontend.netlify.app/characters',
    repo: 'https://github.com/dbills777/crud-app-front-end', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hackerNews.png',
    title: 'Svelte HackerNews Clone Promise Practice API',
    subTitle: `Key Concepts:`,
    info: `This application was my first experince with Svelte, I really enjoyed learning and working with svelte. The main goal and focus of cloning HackerNews was to get a better understanding of Promises and working with API's
    that may not have the best structure for accessing data. Making multiple requests to various endpoints in order to recreate HackerNews was very helpful in gaining experience with Async Await and Promises. `,
    info2: `Key Concepts: Pormises, Async Await, fetch API, `,

    url: 'https://adoring-saha-6f7c34.netlify.app/',
    repo: 'https://github.com/dbills777/hacker-news-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'recipes.png',
    title: 'Recipe App. Node Javascript with Ejs Templating engine',
    subTitle: `Key Concepts:`,
    info: `This was my first exposure to a full Node application utilizing a templating engine (EJS). This applicaion was fun to work on. It provided several opporunities to learn and become a better developer through solving problems as they arose. The Express server is used to connect to MongoDb entire application is hosted on Heroku`,
    info2: '',
    url: 'https://mighty-crag-66385.herokuapp.com/',
    repo: 'https://github.com/dbills777/final3760', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dbills777@gmail.com',
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
