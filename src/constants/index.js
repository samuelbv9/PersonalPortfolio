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
    carrent,
    jobit,
    tripguide,
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
      date: "June 2020 - November 2020",
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
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };