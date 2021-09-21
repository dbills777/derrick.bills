import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Derrick Bills | Full Stack Web Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Derrick Bills',
  subtitle: 'Full Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: ` In 2018, I decided to return to school and earn a degree in Web Development. My goal in doing so was to prepare myself to become a valuable member to a team as efficiently as possible. Over the past three years preparing to enter a new and exciting career has taught me how to learn, learn quickly, and to always persist in seeking solutions to challenges as they arise.`,
  paragraphTwo: `I am excited to bring a positive attitude towards goals and desired outcomes, by focusing on solutions to challenges that arise along the way. Finding opportunities to create products to specification by seeking solutions and methods that help push the overall goals and objectives forward is my approach to development.`,
  paragraphThree: `In addition to creating products and user interfaces that people love to use, I also like working on the server side, Currently, NodeJS (Express) is the strongest server tool to use. I look forward to continuously adding tools to my skillset as I progress.`,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
  // resume: 'resume', // if no resume, the  button will not show up
  // about.jsx imports resume and uses that over this resume import File from '../../pdf/resume.pdf';
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dashboard.png',
    title: 'React Dashboard with Charts',
    subTitle: `Recharts exploration:`,
    info: `I started this project to implement a dashbord that could also diplay data in a chart form. I found a library called ReCharts and implemented one of their examples as the chart display for this website.`,
    info2: '',
    url: 'https://stoic-bassi-8d9376.netlify.app/',
    repo: 'https://github.com/dbills777/Dashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'brbaimage.png',
    title: 'MERN APP',
    subTitle: `Key Concepts:`,
    info: `Full Stack CRUD application using Breaking Bad Data`,
    info2: `Key Concepts: Context Api, Functional Components, React Hooks based state management. React Router, Materail UI, Formik, yup, Auth0`,
    info3: `Version 1 is the inital setup and display of the API Data. Version 2 is continued iteration, specifically following MVC patterns and seeding the database with the data from the API, and utilizing Docker.`,
    url: 'https://bills-crud-app-frontend.netlify.app/characters',
    repo: 'https://github.com/dbills777/crud-app-front-end', // if no repo, the button will not show up
    repo2: 'https://github.com/dbills777/CrudAppClientNodeGraphQL', // if no repo, the button will not show up
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
    img: 'lab.png',
    title: 'Utah Valley Engineering Tour',
    subTitle: `Key Concepts:`,
    info: `This project was to help  the Utah Valley University Engineering Lab secure accredidation. I Shot, and assembled The complete tour, used to showcase the lab through a VR tour. GitHub repo includes link to UVU's live deploy of the tour.`,
    info2: '',
    url: 'https://laughing-sammet-830357.netlify.app/',
    repo: 'https://github.com/dbills777/CS515_VR_Tour', // if no repo, the button will not show up
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
