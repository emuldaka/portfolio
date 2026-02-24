import { Certificate } from "crypto";

export const siteConfig = {
  // Personal Information
  name: "Elis Muldaka",
  title: "Fullstack JavaScript Engineer",
  bio: "Passionate fullstack developer with expertise in React, TypeScript, and modern web technologies. Building scalable applications with clean code and best practices.",
  email: "emuldaka [at] gmail [dot] com",

  // Social Links
  social: {
    github: "https://github.com/emuldaka",
    linkedin: "https://linkedin.com/in/elis-muldaka-7a880633a",
    email: "mailto:emuldaka@gmail.com",
  },

  // Navigation
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],

  // Experience Timeline
  experience: [
    {
      title: "Senior Fullstack Developer",
      company: "Tech Company X",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications using React, Next.js, and Node.js.",
    },
  ],

  // Education
  education: [
    {
      degree: "Associate of Science",
      school: "Triton College",
      period: "2016 - 2020",
    },
  ],

  //Certifications
  certificates: [
    {
      title: "CI/CD with GitHub Actions, Docker and TypeScript",
      issuer: "https://www.boot.dev/",
      link: "https://www.boot.dev/certificates/1cdaf2a4-6b5c-4197-a7e7-5f9aac0354d3",
    },
    {
      title: "Learn Docker",
      issuer: "https://www.boot.dev/",
      link: "https://www.boot.dev/certificates/82139c0f-d803-4a6b-b987-8b07ac58aa98",
    },
    {
      title: "Learn SQL",
      issuer: "https://www.boot.dev/",
      link: "https://www.boot.dev/certificates/1296bda3-47f5-40b3-a88c-e756d19deddd",
    },
    {
      title: "TypeScript",
      issuer: "https://www.boot.dev/",
      link: "https://www.boot.dev/certificates/9e1a76e8-4ab1-44fb-afac-85655705e30c",
    },
    {
      title: "Learn Linux",
      issuer: "https://www.boot.dev/",
      link: "https://www.boot.dev/certificates/7c6d80f7-9e9b-46b0-81ab-58a022358bc8",
    },
    {
      title: "Learn Git",
      issuer: "https://www.boot.dev/",
      link: "https://www.boot.dev/certificates/35f8cd5b-b1fd-45ff-a796-acf7d9e4750e",
    },
    {
      title: "Learn Python",
      issuer: "https://www.boot.dev/",
      link: "https://www.boot.dev/certificates/36923fbb-720f-461e-adbb-a82b6258effe",
    },
    {
      title: "Learn HTTP Clients in TypeScript",
      issuer: "https://www.boot.dev/",
      link: "https://www.boot.dev/certificates/e9fa2301-d967-47cb-bf93-c8986042a231",
    },
    {
      title: "Learn JavaScript",
      issuer: "https://www.boot.dev/",
      link: "https://www.boot.dev/certificates/12cbd728-e345-4e34-b088-21102ca9e180",
    },
    {
      title: "Foundational C# with Microsoft",
      issuer: "https://www.freecodecamp.org/",
      link: "https://www.freecodecamp.org/certification/fccf80e1700-44dd-4ed8-bdf7-ff57101aaccf/foundational-c-sharp-with-microsoft",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "https://www.freecodecamp.org/",
      link: "https://www.freecodecamp.org/certification/fccf80e1700-44dd-4ed8-bdf7-ff57101aaccf/javascript-algorithms-and-data-structures",
    },
  ],

  // Skills
  skills: {
    frontend: [
      { name: "React", level: 95 },
      { name: "JavaScript/TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "CSS/HTML", level: 85 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 82 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "Linux", level: 75 },
    ],
    core: [
      { name: "Python", level: 92 },
      { name: "C#", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "CI/CD Actions", level: 90 },
      { name: "HTTPS Clients", level: 90 },
    ],
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "Calendar App",
      description:
        "Built full-stack app with React frontend, Express backend, MongoDB, and secure authentication for event management. Designed interactive UI with monthly grids, event counts, add/edit/delete features, and date picker.",
      image: "/CalendarCapture.PNG",
      tech: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/emuldaka/Calendar",
      demo: "https://emuldaka.site",
      category: "fullstack",
    },
    {
      id: 2,
      title: "OmniCalc",
      description:
        "Developed calculator/converter using Next.js, TypeScript, Tailwind CSS for math, science, physics, chemistry, and finance tools. Integrated duplicatable calculators, unit converters, graphing, and specialized hubs (e.g., periodic table, kinematics).",
      image: "/OmniCalcCapture.PNG",
      tech: ["React", "TypeScript", "Express", "Socket.io", "PostgreSQL"],
      github: "https://github.com/emuldaka/OmniCalc",
      demo: "https://emuldaka.github.io/OmniCalc/",
      category: "fullstack",
    },
    {
      id: 3,
      title: "React Memory Game",
      description:
        "Created a matching game with React/JavaScript for card flips, pair logic, and state management. Implemented scoring on moves/time with reset and visual feedback for engagement. Added customizable settings, emphasizing type-safety and responsive design",
      image: "/MemoryGameCapture.PNG",
      tech: ["React", "TypeScript", "Node.js", "FirebaseDB"],
      github: "https://github.com/emuldaka/ReactMemoryGame",
      demo: "https://tab-games.github.io/ReactMemoryGame/",
      category: "fullstack",
    },
    {
      id: 4,
      title: "Norwood Home Solutions",
      description:
        "Created a website for a client's business using Next.js, TypeScript, and Tailwind CSS. The website is a simple one-page website with a header, a main section, and a footer. Contains Services, Gallery and Testimonials sections. Uses FormSpree for contact form submission.",
      image: "/NorwoodHomeSolutionsCapture.PNG",
      tech: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "FormSpree",
        "Tailwind CSS",
        "Firebase Studio",
      ],
      github:
        "https://github.com/emuldaka/NorwoodHomeSolutions-BusinessWebsite",
      demo: "https://www.norwoodhomesolutions.com/",
      category: "frontend",
    },
    {
      id: 5,
      title: "RolePlayingGame",
      description:
        "Created a website for a client's business using Next.js, TypeScript, and Tailwind CSS. The website is a simple one-page website with a header, a main section, and a footer. Contains Services, Gallery and Testimonials sections. Uses FormSpree for contact form submission.",
      image: "/RpgCapture.PNG",
      tech: ["JavaScript", "CSS", "HTML"],
      github: "https://github.com/emuldaka/RolePlayingWebGame",
      demo: "https://emuldaka.github.io/RolePlayingWebGame/",
      category: "frontend",
    },
    {
      id: 6,
      title: "Calorie Calculator",
      description:
        "Created a website for a client's business using Next.js, TypeScript, and Tailwind CSS. The website is a simple one-page website with a header, a main section, and a footer. Contains Services, Gallery and Testimonials sections. Uses FormSpree for contact form submission.",
      image: "/CalorieCounterCapture.PNG",
      tech: ["JavaScript", "CSS", "HTML"],
      github: "https://github.com/emuldaka/CalorieCounter",
      demo: "https://emuldaka.github.io/CalorieCounter/",
      category: "frontend",
    },
  ],

  // SEO
  seo: {
    title: "Your Name - Fullstack JavaScript Engineer",
    description:
      "Portfolio of a fullstack JavaScript developer specializing in React, Node.js, and modern web technologies.",
    url: "https://yourportfolio.vercel.app",
    image: "https://yourportfolio.vercel.app/og-image.jpg",
  },
};
