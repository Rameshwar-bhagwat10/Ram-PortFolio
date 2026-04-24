export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  hoverImage: string;
  liveUrl?: string;
  githubUrl?: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "WebCraft",
    tagline: "Website Builder for Modern Businesses",
    description: "WebCraft is a client-focused web development solution that helps businesses establish a strong digital presence with fast, responsive, and SEO-ready websites.",
    features: [
      "Responsive and performance-optimized websites",
      "Custom UI/UX design implementation",
      "SEO-ready architecture and fast loading speed"
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    image: "/images/projects/project4.png",
    hoverImage: "/images/projects/project4-hover.png",
    liveUrl: "https://webcraft-demo.com",
    githubUrl: "https://github.com/yourusername/webcraft",
    color: "99, 102, 241"
  },
  {
    id: 2,
    title: "Library Management System",
    tagline: "Full-Stack System for Managing Books, Members, and Transactions",
    description: "A complete full-stack Library Management System built with a robust backend and modern frontend. The system manages books, members, issue/return workflows, and fine calculations using database triggers and optimized APIs, with a clean and responsive user interface.",
    features: [
      "Complete book, member, issue, and fine management system",
      "Automated fine calculation using database triggers",
      "Secure and structured backend with Node.js, Express, and MySQL",
      "Advanced frontend with search, filters, pagination, and dashboard",
      "Transaction-safe operations ensuring data consistency",
      "Real-time UI updates with clean and responsive design"
    ],
    techStack: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "Axios"],
    image: "/images/projects/project6.png",
    hoverImage: "/images/projects/project6-hover.png",
    liveUrl: "https://library-management-demo.com",
    githubUrl: "https://github.com/Rameshwar-bhagwat10/DBMS-Project",
    color: "37, 99, 235"
  },
  {
    id: 3,
    title: "Safecoast",
    tagline: "Coastal Hazard Intelligence Platform",
    description: "Safecoast is a coastal hazard intelligence system designed to monitor environmental risk factors and support faster preparedness with real-time alerting insights.",
    features: [
      "Real-time hazard monitoring and alert system",
      "Interactive data visualization dashboard",
      "Predictive analysis for coastal risk assessment"
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "OpenWeather API"],
    image: "/images/projects/project2.png",
    hoverImage: "/images/projects/project2-hover.png",
    liveUrl: "https://safecoast-demo.com",
    githubUrl: "https://github.com/yourusername/safecoast",
    color: "0, 119, 182"
  },
  {
    id: 4,
    title: "Spam Message Detection",
    tagline: "Machine Learning-Based Text Classification System",
    description: "Developed a machine learning-based spam message detection system using Python to classify SMS and text messages as spam or legitimate.",
    features: [
      "Text preprocessing using NLP techniques",
      "Trained and evaluated ML models for spam classification",
      "Real-time message prediction with probability scoring"
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLTK", "Matplotlib"],
    image: "/images/projects/project3.png",
    hoverImage: "/images/projects/project3-hover.png",
    liveUrl: "https://your-demo-link.com",
    githubUrl: "https://github.com/yourusername/spam-message-detection",
    color: "220, 53, 69"
  },
  {
    id: 5,
    title: "Moungiri Store E-Commerce",
    tagline: "Digital Storefront for Local Kirana Business",
    description: "Developed a complete e-commerce platform for a local kirana store with product management, cart functionality, and order processing.",
    features: [
      "Product catalog and cart management",
      "Order tracking and checkout system",
      "Admin dashboard for inventory management"
    ],
    techStack: ["Next.js", "MongoDB", "Node.js", "Stripe", "Tailwind CSS"],
    image: "/images/projects/project5.png",
    hoverImage: "/images/projects/project5-hover.png",
    liveUrl: "https://localmart-demo.com",
    githubUrl: "https://github.com/yourusername/localmart",
    color: "16, 185, 129"
  },
  {
    id: 6,
    title: "Devory",
    tagline: "AI-Powered Student Project Platform",
    description: "Devory is an AI-driven platform designed to help students discover, build, and manage real-world technical projects with intelligent recommendations and structured workflows.",
    features: [
      "AI-based project idea recommendations",
      "Structured project workflow management",
      "Progress tracking and portfolio-ready output"
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "OpenAI API"],
    image: "/images/projects/project1.png",
    hoverImage: "/images/projects/project1-hover.png",
    liveUrl: "https://devory-app.com",
    githubUrl: "https://github.com/yourusername/devory",
    color: "138, 43, 226"
  },
];
