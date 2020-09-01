import { nanoid } from 'nanoid';
import resume from '../images/Resume.pdf'

// HEAD DATA
export const headData = {
  title: 'Jasper Carter', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Website! Im a junior web developer' // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Jasper Carter',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: resume, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Jamming',
    info: 'This is some more info',
    info2: 'More info',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Grocery List',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Lamont Dance Studio',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
    // {
    //   id: nanoid(),
    //   name: 'instagram',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/dashboard?type=VIEW&opts_itemType=COLLECTION&opts_searchTerm=null&opts_order=RELEVANCE&opts_depth=EVERYTHING&opts_showForks=true&opts_filter=all&opts_orderBy=ID&opts_orderDirection=0&opts_tag=null&displayType=GRID&previewType=IFRAME&activeType=COLLECTION#',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jasper-carter-785238170/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/JasperC-GIT',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
