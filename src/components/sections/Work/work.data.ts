export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI SaaS Platform",
    tagline: "Next-gen AI automation for enterprises",
    description: "Built a comprehensive AI-powered SaaS platform that automates complex business workflows using machine learning and natural language processing. Scaled to handle 10K+ concurrent users with 99.9% uptime.",
    features: [
      "Real-time AI processing with sub-100ms latency",
      "Multi-tenant architecture with role-based access",
      "Advanced analytics dashboard with predictive insights"
    ],
    techStack: ["Next.js", "TypeScript", "Python", "TensorFlow", "PostgreSQL", "Redis"],
    image: "/images/projects/project1.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "255, 140, 0"
  },
  {
    id: 2,
    title: "E-Commerce Marketplace",
    tagline: "Modern shopping experience reimagined",
    description: "Developed a high-performance e-commerce platform with real-time inventory management, AI-powered recommendations, and seamless payment integration. Achieved 40% increase in conversion rates.",
    features: [
      "Smart product recommendations using ML algorithms",
      "Real-time inventory sync across multiple warehouses",
      "One-click checkout with multiple payment gateways"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker"],
    image: "/images/projects/project2.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "59, 130, 246"
  },
  {
    id: 3,
    title: "Healthcare Portal",
    tagline: "Connecting patients with care providers",
    description: "Created a HIPAA-compliant healthcare platform enabling secure telemedicine consultations, appointment scheduling, and electronic health records management. Serving 50K+ patients nationwide.",
    features: [
      "End-to-end encrypted video consultations",
      "Automated appointment scheduling with smart reminders",
      "Secure EHR storage with blockchain verification"
    ],
    techStack: ["Next.js", "GraphQL", "PostgreSQL", "WebRTC", "Blockchain"],
    image: "/images/projects/project3.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "34, 197, 94"
  },
  {
    id: 4,
    title: "FinTech Dashboard",
    tagline: "Real-time financial analytics platform",
    description: "Built a sophisticated financial analytics dashboard providing real-time market data, portfolio tracking, and automated trading strategies. Processing millions of transactions daily with zero downtime.",
    features: [
      "Real-time market data with WebSocket streaming",
      "Advanced charting with custom technical indicators",
      "Automated trading bots with risk management"
    ],
    techStack: ["React", "TypeScript", "Python", "FastAPI", "TimescaleDB", "Kafka"],
    image: "/images/projects/project4.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "168, 85, 247"
  }
];
