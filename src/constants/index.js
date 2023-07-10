import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    swift,
    firebase,
    cPlusPlus,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    git,
    figma,
    stir,
    luxPicnics,
    avitracker,
    arize,
    threejs,
    avicenna,
    ally,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Mobile Developer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Tinkerer",
      icon: backend,
    },
    {
      title: "Student",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Swift",
      icon: swift,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "C++",
      icon: cPlusPlus,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Web Development Intern",
      company_name: "Avicenna Medical Systems",
      icon: avicenna,
      iconBg: "#fff",
      date: "June 2021 - November 2021",
      points: [
        "In charge of revamping new company website according to design specifications.",
        "Collaborated with Head of Marketing and Co-Founder to deliver on the companies vision",
        "Implemented discussed changes and new features into website using HTML, CSS, and Javascript.",
      ],
    },
    {
      title: "iOS App Developer Intern",
      company_name: "Avicenna Medical Systems",
      icon: avicenna,
      iconBg: "#fff",
      date: "May 2022 - January 2022",
      points: [
        "Worked on remote patient monitoring app using health data collected through patient’s smart phone/watch.",
        "Worked alongside company CEO, Head of Marketing, and backend developer to develop and pitch the product.",
        "Used Apple’s Healthkit and Avicenna API to collect and store patient data",
        "Used two-factor authentication and patient permission to ensure patient privacy and data security",
      ],
    },
    {
      title: "Mobile Software Dev Engineer Intern",
      company_name: "Ally Financial",
      icon: ally,
      iconBg: "#fff",
      date: "May 2023 - August 2023",
      points: [
        "Created UI components for Metronome design system using SwiftUI on iOS and React Native",
        "Committed code to git repos using feature branches and Merge Requests using Gitlab",
        "Ran a research project outlining recommendations for ways to improve Ally Mobile’s developer onboarding process",
        "Gave a final presentation on findings and recommendations from research project to executive leadership",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Stir",
      description:
        "Founder of Stir. E-commerce brand/store selling a supplement for coffee consisting of adaptogens and other natural ingredients designed to fuel focus, increase energy, and decrease stress.",
      tags: [
        {
          name: "ecommerce",
          color: "blue-text-gradient",
        },
        {
          name: "health",
          color: "green-text-gradient",
        },
        {
          name: "business",
          color: "pink-text-gradient",
        },
      ],
      image: stir,
      source_code_link: "https://samuelbechar.notion.site/Stir-Portfolio-98309cbf927f43189c0e4e8a4bd2d176?pvs=4",
    },
    {
      name: "Lux Picnics Ann Arbor",
      description:
        "Co-Founded Lux Picnics Ann Arbor alongside younger brother. Luxury Pop Up Picnic setup company catering to Ann Arbor area. Various different setups and featured on Local 4 news.",
      tags: [
        {
          name: "events",
          color: "blue-text-gradient",
        },
        {
          name: "picnics",
          color: "green-text-gradient",
        },
        {
          name: "business",
          color: "pink-text-gradient",
        },
      ],
      image: luxPicnics,
      source_code_link: "https://samuelbechar.notion.site/Lux-Picnics-Ann-Arbor-Portfolio-c6a19506fac44c54b7a98c0feae4fbaf?pvs=4",
    },
    {
      name: "AviTracks",
      description:
        "iPhone application for remote patient monitoring. Connects to users Apple Health which aggregates health measurements and sends the data to Avicenna via API to be viewed by the doctor",
      tags: [
        {
          name: "swift",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "healthcare",
          color: "pink-text-gradient",
        },
      ],
      image: avitracker,
      source_code_link: "https://samuelbechar.notion.site/AviTracks-Portfolio-a8f5561daf694d04830a37effcca882b?pvs=4",
    },
    {
      name: "Arize",
      description:
        "iOS application that displays in-depth Instagram statistics and allows for content editing and scheduling. Integrates nodejs backend, firebase cloud functions, facebook api, swift frontend, and more.",
      tags: [
        {
          name: "swift",
          color: "blue-text-gradient",
        },
        {
          name: "instagram",
          color: "green-text-gradient",
        },
        {
          name: "cloud functions",
          color: "pink-text-gradient",
        },
      ],
      image: arize,
      source_code_link: "https://samuelbechar.notion.site/Arize-Portfolio-5a988f77e66d4e66935bde76766b8892?pvs=4",
    },
  ];
  
  export { services, technologies, experiences, projects };