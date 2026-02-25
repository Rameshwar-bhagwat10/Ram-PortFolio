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
    title: "Devory",
    tagline: "AI-Powered Student Project Platform",
    description: "Devory is an AI-driven platform designed to help students discover, build, and manage real-world technical projects. The system integrates intelligent idea recommendations and structured project workflows for scalable learning.",
    features: [
      "AI-based project idea recommendations",
      "Structured project workflow management",
      "Modern SaaS authentication and user dashboard"
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    image: "/images/projects/project2.png",
    hoverImage: "/images/projects/project2-hover.png",
    liveUrl: "https://devory-app.com",
    githubUrl: "https://github.com/yourusername/devory",
    color: "138, 43, 226" // Blue-Violet - Innovation, creativity, intelligence (AI/Education)
  },
  {
    id: 2,
    title: "Safecoast",
    tagline: "Coastal Hazard Intelligence Platform",
    description: "Built during a hackathon, Safecoast is a coastal hazard intelligence system designed to monitor and analyze environmental risk factors. The platform provides real-time alerts and data visualization to help coastal communities prepare for potential hazards.",
    features: [
      "Real-time hazard monitoring and alert system",
      "Interactive data visualization dashboard",
      "Predictive analysis for coastal risk assessment"
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "OpenWeather API"],
    image: "/images/projects/project1.png",
    hoverImage: "/images/projects/project1-hover.png",
    liveUrl: "https://safecoast-demo.com",
    githubUrl: "https://github.com/yourusername/safecoast",
    color: "0, 119, 182" // Ocean Blue - Trust, safety, water/coastal theme
  },
  {
    id: 3,
    title: "Spam Message Detection",
    tagline: "Machine Learning-Based Text Classification System",
    description: "Developed a machine learning-based spam message detection system using Python to classify SMS and text messages as spam or legitimate. Implemented natural language processing techniques and trained classification models to achieve high accuracy in real-time text prediction.",
    features: [
      "Text preprocessing using NLP techniques (tokenization, stopword removal, vectorization)",
      "Trained and evaluated ML models for spam classification",
      "Real-time message prediction with probability scoring"
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLTK", "Matplotlib"],
    image: "/images/projects/project3.svg",
    hoverImage: "/images/projects/project3-hover.svg",
    liveUrl: "https://your-demo-link.com",
    githubUrl: "https://github.com/yourusername/spam-message-detection",
    color: "220, 53, 69" // Red - Alert, warning, security (spam detection)
  },
  {
    id: 4,
    title: "WebCraft",
    tagline: "Website Builder for Modern Businesses",
    description: "WebCraft is a client-focused web development solution that enables businesses to establish a strong digital presence. Designed for performance and scalability, it provides customized website solutions tailored to client needs.",
    features: [
      "Responsive and performance-optimized websites",
      "Custom UI/UX design implementation",
      "SEO-ready architecture and fast loading speed"
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    image: "/images/projects/project4.svg",
    hoverImage: "/images/projects/project4-hover.svg",
    liveUrl: "https://webcraft-demo.com",
    githubUrl: "https://github.com/yourusername/webcraft",
    color: "99, 102, 241" // Indigo - Professional, corporate, business
  },
  {
    id: 5,
    title: "Moungiri Store E-Commerce",
    tagline: "Digital Storefront for Local Kirana Business",
    description: "Developed a complete e-commerce platform for a local kirana store to digitize their operations. The system includes product management, cart functionality, and order processing to streamline local business sales.",
    features: [
      "Product catalog and cart management",
      "Order tracking and checkout system",
      "Admin dashboard for inventory management"
    ],
    techStack: ["Next.js", "MongoDB", "Node.js", "Stripe", "Tailwind CSS"],
    image: "/images/projects/project1.svg",
    hoverImage: "/images/projects/project1-hover.svg",
    liveUrl: "https://localmart-demo.com",
    githubUrl: "https://github.com/yourusername/localmart",
    color: "16, 185, 129" // Green - Growth, money, commerce, success
  },
  {
    id: 6,
    title: "AgroManage",
    tagline: "Smart Agriculture Management System",
    description: "Developed a mobile-based agriculture management system for a client to digitize farm operations and crop tracking. The platform enables farmers to manage inventory, monitor crop cycles, and maintain real-time data records through a scalable cloud backend.",
    features: [
      "Farm inventory and crop lifecycle management",
      "Real-time data sync using Firebase backend",
      "User authentication and role-based access for farmers and admins"
    ],
    techStack: ["Kotlin", "Firebase", "Firestore", "Firebase Auth", "Android SDK"],
    image: "/images/projects/project2.svg",
    hoverImage: "/images/projects/project2-hover.svg",
    liveUrl: "https://play.google.com/store/apps/details?id=demo",
    githubUrl: "https://github.com/yourusername/agromanage",
    color: "34, 197, 94" // Vibrant Green - Nature, agriculture, growth, farming
  }
];
