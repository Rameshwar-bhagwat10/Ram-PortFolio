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
    techStack: ["React", "Tailwind CSS", "Firebase", "Node.js"],
    image: "/images/projects/project4.png",
    hoverImage: "/images/projects/project4-hover.png",
    liveUrl: "https://webcraftx.vercel.app/",
    githubUrl: "https://github.com/Rameshwar-bhagwat10/WebCraft.git",
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
    liveUrl: "",
    githubUrl: "https://github.com/Rameshwar-bhagwat10/DBMS-Project.git",
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
    liveUrl: "https://safecoast.vercel.app/home",
    githubUrl: "https://github.com/Rameshwar-bhagwat10/Costal-Hazards.git",
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
    liveUrl: "",
    githubUrl: "",
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
    liveUrl: "https://moungiri-store.vercel.app/",
    githubUrl: "https://github.com/Rameshwar-bhagwat10/DiM-Project.git",
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
    liveUrl: "",
    githubUrl: "https://github.com/Rameshwar-bhagwat10/Devory.git",
    color: "138, 43, 226"
  },
  {
    id: 7,
    title: "AI ML Progress Tracker",
    tagline: "Private Multi-User AI/ML Learning Progress Platform",
    description: "A full-stack SaaS-style platform that enables users to follow a structured AI/ML roadmap, track daily learning tasks, and monitor progress in real time. The system includes role-based access (admin/member), collaborative progress tracking, and a secure backend powered by Supabase.",
    features: [
      "Structured AI/ML roadmap (Month → Week → Day → Tasks)",
      "Task-level progress tracking with real-time updates",
      "Role-based authentication (Admin & Member)",
      "Admin panel for user management (create/delete users)",
      "Multi-user progress visibility (view others’ progress)",
      "Read-only access control for other users’ data",
      "Progress analytics with percentage and visual indicators",
      "Secure API system with session-based authentication"
    ],
    techStack: [
      "Next.js (App Router)",
      "TypeScript",
      "Supabase (PostgreSQL + Auth)",
      "Tailwind CSS",
      "Node.js",
      "REST API"
    ],
    image: "/images/projects/aiml-tracker.png",
    hoverImage: "/images/projects/aiml-tracker-hover.png",
    liveUrl: "https://mlroadmap.vercel.app/",
    githubUrl: "https://github.com/Rameshwar-bhagwat10/Ml-Roadmap.git",
    color: "34, 197, 94"
  },
];
