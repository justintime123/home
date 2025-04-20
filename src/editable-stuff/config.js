// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Justin",
  middleName: "",
  lastName: "Chassin",
  message: " Data visualizer, software engineer, and writer.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/justintime123",
    },
    {
      image: "fa-linkedin",
      url: "http://www.linkedin.com/in/justin-chassin",
    },
    {
      image: "fa-wordpress",
      url: "https://muckrack.com/justin-chassin-1/portfolio"
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/portfolio_img.png"),
  imageSize: 375,
  message:
    "I'm a Data Engineer with a passion for exploring data in legal and creative fields. I went to Stony Brook for Computer Science/Applied Math. During my Quant Finance Masters at RPI, I discovered that I enjoyed data science. My projects since then have centered on creating my own datasets (using APIs and webscraping), and I hope to combine my interest in data and writing thru data journalism and visualization.",
  //resume: "https://docs.google.com/document/d/1VWWnbz0JRMjPpUuUm1z5aHuhrWTBTmT_/edit?usp=sharing&ouid=105250719750630530815&rtpof=true&sd=true",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "justintime123", //i.e."johnDoe12Gh"
  reposLength: 3,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/portfolio_img.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/portfolio_img.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "PL/SQL", value: 75 },
    { name: "Java", value: 85 },
    { name: "Tableau", value: 70 },
    { name: "Git/Bitbucket", value: 90 }],
  softSkills: [
    { name: "Creativity", value: 95 },
    { name: "Googling", value: 95},
    { name: "Writing", value: 85 },
    { name: "Organization", value: 85 },
    { name: "Collaboration", value: 90 },
    { name: "Problem Solving", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Feel free to email me at",
  email: "justin.chassin1@gmail.com"
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Data Engineer',// Here Add Company Name
      companylogo: require('../assets/img/pnc.png'),
      date: 'January 2023 – Present',
    },
    {
      role: 'Market Risk Management Intern',// Here Add Company Name
      companylogo: require('../assets/img/pnc.png'),
      date: 'Summer 2022',
    },
    {
      role: 'Software Engineering Intern',// Here Add Company Name
      companylogo: require('../assets/img/xos.png'),
      date: 'Summer 2020 - December 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };

