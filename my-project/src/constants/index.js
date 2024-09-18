import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have completed the CS50 Web Programming with Python and JavaScript course from Harvard University, which equipped me with a strong foundation in web development using technologies such as HTML, CSS, Bootstrap, React, JavaScript, Django, Python, and SQLite. As part of this rigorous course, I successfully completed six projects, including a comprehensive final project that challenged me to apply my skills in a real-world context.

In addition to the skills gained from CS50, I have worked with a variety of other technologies, including Angular, Next.js, Node.js, and PostgreSQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jun 2022 - October 2022",
    role: "Intern (fullstack developer)",
    company: "Jhon Snow Inc (JSI).",
    description: `Assisted in the development of new features 
    for the company's main task, HRIS(human resource information system).`,
    technologies: ["React.js", "Node.js", "Postgresql"],
  },
  {
    year: "January 2024 - August 2024",
    role: "Student",
    company: "Harvard University",
    description: `I recently completed the CS50 Web Programming with Python and JavaScript 
    course from Harvard University, which provided an in-depth understanding of web development 
    concepts. Throughout the course, I engaged in hands-on learning and completed six projects 
    that allowed me to apply my knowledge practically.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js", "Python", "Django", "SQLlite"],
    certificateUrl: "https://certificates.cs50.io/2e4a4610-94fd-4e4d-aade-9546f67cebf2.png?size=letter", // Add this line

  },
  {
    year: "September 2020 - July 2023",
    role: "Computer Science Student",
    company: "Hawassa University",
    description: `Since 2021, I have been dedicated to developing my skills through 
    personal and course-based projects that challenge me and allow me to apply my knowledge in real-world scenarios.
    I believe that hands-on experience is vital for growth, and I've been working on 
    a variety of projects that encompass different aspects of Software development.`,
    technologies: ["Programming languages", "Software development methodologies", "Computer architecture", "Computer networking"],
  },
];

export const PROJECTS = [
  {
    title: "A front-end for Google Search, Google Image Search, and Google Advanced Search",
    image: project1,
    description:
      "Developed a responsive front-end interface for Google Search, Google Image Search, and Google Advanced Search, enhancing user experience and accessibility. Implemented key features, such as search suggestions, image previews, and advanced filtering options, to mimic the functionality of the original Google platforms.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    githubLink: "https://github.com/kImo1463/project1", // Replace with your actual username and project name
  },
  {
    title: "A Wikipedia-like online encyclopedia.",
    image: project2,
    description:
      "Designed and developed a user-friendly online encyclopedia that mirrors the structure and functionality of Wikipedia, facilitating easy access to information.",
    technologies: ["HTML", "CSS", "Django"],
    githubLink: "https://github.com/KImo1463/project2", // Replace with your actual username and project name
  },
  {
    title: "eBay-like e-commerce auction site",
    image: project3,
    description:
      "Developed a dynamic e-commerce auction site that replicates the core features of eBay, enabling users to buy and sell items through auctions.",
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "Django", "sqlite"],
    githubLink: "https://github.com/KImo1463/project3", // Replace with your actual username and project name
  },
  {
    title: "Front-end for an email client that makes API calls to send and receive emails",
    image: project4,
    description:
      "Designed and developed a front-end interface for an email client that enables users to send and receive emails through API calls.",
    technologies: ["HTML", "CSS", "Javascript", "Django", "sqlite"],
    githubLink: "https://github.com/KImo1463/project4", // Replace with your actual username and project name
  },
  {
    title: "A Twitter-like social network website for making posts and following users.",
    image: project5,
    description:
      "Designed and developed a social network website that mimics the functionality of Twitter, allowing users to create posts and follow other users.",
    technologies: ["HTML", "CSS", "Javascript", "Django", "sqlite"],
    githubLink: "https://github.com/KImo1463/project5", // Replace with your actual username and project name
  },
  {
    title: "Event ticketing app",
    image: project6,
    description:
      "Designed and developed a user-friendly event ticketing app that allows users to browse, purchase, and manage event tickets seamlessly.",
    technologies: ["HTML", "CSS", "Javascript", "Django", "sqlite"],
    githubLink: "https://github.com/KImo1463/project6", // Replace with your actual username and project name
  },
];

export const CONTACT = {
  address: "Addis Ababa, Ethiopia",
  phoneNo: "+251972639007",
  email: "kimo.obsina1@gmail.com",
};