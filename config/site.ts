export const siteConfig = {
  // Personal Information
  name: "Your Name",
  title: "Fullstack JavaScript Engineer",
  bio: "Passionate fullstack developer specializing in React, Node.js, and modern web technologies. Building scalable applications with clean code and best practices.",
  email: "your.email@example.com",
  
  // Social Links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "mailto:your.email@example.com",
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
      description: "Leading development of scalable web applications using React, Next.js, and Node.js.",
    },
    {
      title: "Fullstack Developer",
      company: "Startup Y",
      period: "2020 - 2022",
      description: "Built and maintained multiple client-facing applications with React and Express.",
    },
    {
      title: "Frontend Developer",
      company: "Agency Z",
      period: "2018 - 2020",
      description: "Developed responsive web interfaces and collaborated with design teams.",
    },
  ],
  
  // Education
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      period: "2014 - 2018",
    },
  ],
  
  // Skills
  skills: {
    core: [
      { name: "React", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
    ],
    frontend: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux", level: 85 },
      { name: "Framer Motion", level: 80 },
    ],
    backend: [
      { name: "Express", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 82 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
    ],
  },
  
  // Projects
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce application with shopping cart, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      tech: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, drag-and-drop, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      tech: ["React", "TypeScript", "Express", "Socket.io", "PostgreSQL"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://taskmanager-demo.vercel.app",
      category: "fullstack",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      github: "https://github.com/yourusername/social-dashboard",
      demo: "https://dashboard-demo.vercel.app",
      category: "frontend",
    },
    {
      id: 4,
      title: "REST API Service",
      description: "Scalable REST API with authentication, rate limiting, and comprehensive documentation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      github: "https://github.com/yourusername/api-service",
      demo: "https://api-docs.vercel.app",
      category: "backend",
    },
  ],
  
  // SEO
  seo: {
    title: "Your Name - Fullstack JavaScript Engineer",
    description: "Portfolio of a fullstack JavaScript developer specializing in React, Node.js, and modern web technologies.",
    url: "https://yourportfolio.vercel.app",
    image: "https://yourportfolio.vercel.app/og-image.jpg",
  },
};
