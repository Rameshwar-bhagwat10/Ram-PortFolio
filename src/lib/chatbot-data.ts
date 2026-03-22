// Chatbot Knowledge Base - Comprehensive information about Rameshwar Bhagwat

export const CHATBOT_CONTEXT = {
  // Personal Information
  personal: {
    name: "Rameshwar Bhagwat",
    firstName: "Rameshwar",
    lastName: "Bhagwat",
    nickname: "Ram",
    jobTitle: "Full Stack Developer & AI Engineer",
    tagline: "Building the future with code and AI",
    email: "rameshwarbhagwat019@gmail.com",
    phone: "+91-9699245170",
    location: "Yeola, Maharashtra, India",
    timezone: "IST (UTC+5:30)",
    languages: ["English", "Hindi", "Marathi"],
    bio: "I'm a Full Stack Developer and AI Engineer with expertise in React, Next.js, TypeScript, Node.js, and Python. I specialize in building scalable web applications, SaaS platforms, and AI-powered solutions. I'm passionate about creating innovative digital experiences that drive business growth.",
    shortBio: "Full Stack Developer specializing in React, Next.js, and AI integration.",
    currentStatus: "Currently pursuing B.Tech in Information Technology and building innovative products like Devory.",
    yearsOfExperience: "3+",
    projectsBuilt: "10+",
    linesOfCode: "100,000+",
    coffeeConsumed: "500+ cups",
    availableForWork: true,
    workPreference: ["Remote", "Freelance", "Contract", "Full-time"],
    responseTime: "Usually within 24 hours",
  },

  // Detailed Skills
  skills: {
    frontend: {
      languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
      frameworks: ["React", "Next.js", "Vue.js"],
      styling: ["Tailwind CSS", "Styled Components", "SCSS", "CSS Modules"],
      animation: ["Framer Motion", "GSAP", "Lottie", "CSS Animations"],
      stateManagement: ["Redux", "Zustand", "React Context", "Jotai"],
      testing: ["Jest", "React Testing Library", "Cypress"],
      tools: ["Webpack", "Vite", "ESLint", "Prettier"],
    },
    backend: {
      languages: ["Node.js", "Python", "Java"],
      frameworks: ["Express.js", "FastAPI", "NestJS"],
      apis: ["REST APIs", "GraphQL", "WebSockets", "gRPC"],
      authentication: ["JWT", "OAuth 2.0", "Auth0", "NextAuth.js"],
      caching: ["Redis", "Memcached"],
    },
    databases: {
      sql: ["PostgreSQL", "MySQL", "SQLite"],
      nosql: ["MongoDB", "Firebase Firestore", "DynamoDB"],
      orm: ["Prisma", "Mongoose", "TypeORM", "Drizzle"],
      cloud: ["Supabase", "PlanetScale", "Neon"],
    },
    ai_ml: {
      frameworks: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
      nlp: ["NLTK", "spaCy", "Hugging Face Transformers", "LangChain"],
      tools: ["Pandas", "NumPy", "Matplotlib", "Jupyter"],
      apis: ["OpenAI API", "Claude API", "Google AI", "Replicate"],
      specializations: ["Text Classification", "Sentiment Analysis", "Chatbots", "Recommendation Systems"],
    },
    devops: {
      cloud: ["AWS", "Google Cloud", "Vercel", "Netlify", "Railway"],
      containers: ["Docker", "Docker Compose"],
      ci_cd: ["GitHub Actions", "GitLab CI", "Vercel CI"],
      monitoring: ["Sentry", "LogRocket", "Google Analytics"],
    },
    mobile: {
      native: ["Kotlin", "Android Studio"],
      cross_platform: ["React Native", "Tauri", "Electron"],
    },
    tools: {
      ide: ["VS Code", "WebStorm", "Android Studio"],
      design: ["Figma", "Adobe XD", "Canva"],
      api: ["Postman", "Insomnia", "Thunder Client"],
      version_control: ["Git", "GitHub", "GitLab"],
      productivity: ["Notion", "Linear", "Slack"],
    },
    other: ["Stripe Integration", "Payment Gateways", "SEO Optimization", "Performance Optimization", "System Design", "Microservices", "Serverless Architecture", "Web Security"],
  },

  // Detailed Projects
  projects: [
    {
      name: "Devory",
      type: "SaaS Platform",
      description: "AI-Powered Student Project Platform that helps students discover, build, and manage real-world technical projects with intelligent idea recommendations. It's designed to bridge the gap between learning and practical implementation.",
      longDescription: "Devory is my flagship project - an AI-driven platform that solves a real problem I faced as a student: finding meaningful projects to build. It uses machine learning to recommend project ideas based on skill level, interests, and industry trends. Students can track their progress, collaborate with peers, and showcase their work to potential employers.",
      techStack: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "OpenAI API", "Vercel"],
      features: [
        "AI-based project idea recommendations",
        "Structured project workflow management",
        "Progress tracking and milestones",
        "Modern SaaS authentication",
        "Team collaboration features",
        "Portfolio showcase integration",
      ],
      challenges: "Building a scalable recommendation engine that provides relevant suggestions based on user preferences and market demand.",
      learnings: "Advanced state management, AI API integration, and building production-ready SaaS applications.",
      status: "Currently building",
      link: "https://devory.io",
      github: "Private",
    },
    {
      name: "Safecoast",
      type: "Hackathon Project",
      description: "Coastal Hazard Intelligence Platform that monitors and analyzes environmental risk factors for coastal communities in real-time.",
      longDescription: "Built during a 48-hour hackathon, Safecoast addresses the critical need for early warning systems in coastal areas. It aggregates data from multiple weather APIs, satellite imagery, and historical patterns to predict and alert communities about potential hazards like cyclones, flooding, and erosion.",
      techStack: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "OpenWeather API", "Chart.js", "Mapbox"],
      features: [
        "Real-time hazard monitoring",
        "Interactive data visualization",
        "Predictive analysis algorithms",
        "SMS/Email alert system",
        "Historical data comparison",
        "Mobile-responsive design",
      ],
      challenges: "Processing and visualizing large amounts of real-time data efficiently within tight time constraints.",
      learnings: "Rapid prototyping, API integration, and working under pressure.",
      status: "Completed - Hackathon Winner",
      link: "https://safecoast.vercel.app",
      github: "https://github.com/Rameshwar-bhagwat10/safecoast",
    },
    {
      name: "ThinkVerse",
      type: "SaaS Platform",
      description: "A structured idea management platform for entrepreneurs and creators to organize, develop, and execute their ideas systematically.",
      longDescription: "ThinkVerse helps turn scattered thoughts into actionable plans. It provides frameworks for idea validation, market research organization, and execution planning. Perfect for solopreneurs and small teams who want to move from ideation to execution efficiently.",
      techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
      features: [
        "Idea capture and organization",
        "Validation frameworks",
        "Progress tracking",
        "Collaboration features",
        "Export and sharing",
      ],
      challenges: "Creating intuitive UX for complex idea workflows.",
      learnings: "User research, product design, and building habit-forming products.",
      status: "Launched",
      link: "https://thinkverse.app",
      github: "Private",
    },
    {
      name: "Spam Message Detection",
      type: "ML Project",
      description: "Machine Learning-based text classification system using Python to classify SMS messages as spam or legitimate with 98% accuracy.",
      longDescription: "This project demonstrates practical NLP and machine learning skills. I built and compared multiple models (Naive Bayes, SVM, Random Forest) to find the optimal solution for spam detection. The system includes text preprocessing, feature extraction using TF-IDF, and model deployment.",
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLTK", "Flask", "Streamlit"],
      features: [
        "Text preprocessing with NLP",
        "Multiple ML model comparison",
        "TF-IDF feature extraction",
        "Real-time prediction API",
        "Web interface for testing",
        "98% classification accuracy",
      ],
      challenges: "Handling imbalanced datasets and optimizing model performance.",
      learnings: "End-to-end ML pipeline development and model evaluation.",
      status: "Completed",
      github: "https://github.com/Rameshwar-bhagwat10/spam-detection",
    },
    {
      name: "WebCraft",
      type: "Agency Website",
      description: "Website Builder for Modern Businesses - A client-focused web development solution helping businesses establish their digital presence.",
      techStack: ["React", "Next.js", "Tailwind CSS", "Firebase", "Stripe"],
      features: [
        "Responsive website templates",
        "Custom UI/UX design",
        "SEO-ready architecture",
        "CMS integration",
        "Analytics dashboard",
      ],
      status: "Completed",
    },
    {
      name: "Moungiri Store",
      type: "E-Commerce",
      description: "Full-featured digital storefront for a local kirana business with complete e-commerce functionality including payments and inventory management.",
      techStack: ["Next.js", "MongoDB", "Node.js", "Stripe", "Tailwind CSS", "Cloudinary"],
      features: [
        "Product catalog with search",
        "Shopping cart and checkout",
        "Stripe payment integration",
        "Admin dashboard",
        "Inventory management",
        "Order tracking",
      ],
      challenges: "Building a complete e-commerce solution that's easy for non-technical users to manage.",
      status: "Completed",
    },
    {
      name: "Portfolio Website",
      type: "Personal",
      description: "This very portfolio you're viewing! Built with modern technologies and featuring interactive elements, animations, and this AI chatbot.",
      techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      features: [
        "Interactive UI with animations",
        "AI-powered chatbot",
        "Responsive design",
        "SEO optimized",
        "Performance optimized",
      ],
      status: "Live",
    },
  ],

  // Journey/Timeline with more details
  journey: [
    {
      year: "2022",
      title: "The Curiosity Phase",
      description: "Discovered the world of web development. Started with HTML, CSS, and JavaScript fundamentals. Built my first static websites and fell in love with creating things for the web.",
      achievements: ["Completed first web project", "Learned Git basics", "Built 5+ static websites"],
      skills_learned: ["HTML5", "CSS3", "JavaScript", "Git"],
    },
    {
      year: "2023",
      title: "Deep Dive",
      description: "Expanded into React ecosystem and backend development. Started understanding databases and APIs.",
      achievements: ["First React project", "Learned Node.js", "Built first full-stack app"],
      skills_learned: ["React", "Node.js", "MongoDB", "REST APIs"],
    },
    {
      year: "2024",
      title: "Engineering Foundation",
      description: "Started B.Tech in Information Technology. Diving deep into data structures, algorithms, and software engineering principles. Building full-stack applications with React, Node.js, and databases.",
      achievements: ["Started B.Tech", "Built multiple production apps", "Won first hackathon"],
      skills_learned: ["DSA", "System Design", "TypeScript", "PostgreSQL"],
    },
    {
      year: "2025",
      title: "Product Builder",
      description: "Launched ThinkVerse - a SaaS platform for structured idea management. Learned product development, user experience design, and the importance of shipping real products to real users.",
      achievements: ["Launched ThinkVerse", "First paying customers", "Learned product management"],
      skills_learned: ["Product Development", "UX Design", "SaaS Architecture", "Marketing"],
    },
    {
      year: "2026",
      title: "AI Development",
      description: "Currently building Devory, an AI-driven platform helping students showcase and manage their projects. Exploring machine learning, natural language processing, and intelligent automation.",
      achievements: ["Building Devory", "AI/ML integration expertise", "Growing developer community"],
      skills_learned: ["OpenAI API", "LangChain", "ML Systems", "AI Integration"],
      isCurrent: true,
    },
    {
      year: "2027",
      title: "Scaling Vision",
      description: "Aiming to master advanced AI/ML systems and production-grade engineering. Goal: Build technology that impacts millions and contribute to open-source communities.",
      achievements: ["Goals: Scale Devory", "Open source contributions", "Tech leadership"],
      skills_learned: ["System Architecture", "Team Leadership", "Open Source"],
    },
  ],

  // Detailed Services
  services: [
    {
      name: "Full Stack Web Development",
      description: "End-to-end web application development from concept to deployment",
      includes: ["Custom web applications", "SaaS platforms", "E-commerce solutions", "Admin dashboards"],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
    },
    {
      name: "AI/ML Integration",
      description: "Integrate AI capabilities into your existing applications",
      includes: ["Chatbots", "Recommendation systems", "Text analysis", "Image processing"],
      technologies: ["OpenAI", "LangChain", "Python", "TensorFlow"],
    },
    {
      name: "SaaS Platform Development",
      description: "Build scalable software-as-a-service products",
      includes: ["Multi-tenant architecture", "Subscription billing", "User management", "Analytics"],
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Vercel"],
    },
    {
      name: "API Design & Development",
      description: "Design and build robust, scalable APIs",
      includes: ["REST APIs", "GraphQL APIs", "API documentation", "Third-party integrations"],
      technologies: ["Node.js", "Express", "GraphQL", "Swagger"],
    },
    {
      name: "Database Design & Optimization",
      description: "Design efficient database schemas and optimize performance",
      includes: ["Schema design", "Query optimization", "Migration strategies", "Backup solutions"],
      technologies: ["PostgreSQL", "MongoDB", "Prisma", "Redis"],
    },
    {
      name: "Performance Optimization",
      description: "Make your applications faster and more efficient",
      includes: ["Load time optimization", "Code splitting", "Caching strategies", "SEO improvements"],
      technologies: ["Lighthouse", "WebPageTest", "Chrome DevTools"],
    },
    {
      name: "UI/UX Development",
      description: "Create beautiful, intuitive user interfaces",
      includes: ["Responsive design", "Animations", "Accessibility", "Design systems"],
      technologies: ["Tailwind CSS", "Framer Motion", "Figma"],
    },
    {
      name: "Consultation",
      description: "Technical consultation for your projects",
      includes: ["Architecture review", "Tech stack selection", "Code review", "Best practices"],
    },
  ],

  // Social Links
  social: {
    github: "https://github.com/Rameshwar-bhagwat10",
    linkedin: "https://linkedin.com/in/Rameshwarbhagwat",
    twitter: "https://twitter.com/Rameshwarbhagwat",
    portfolio: "https://rameshwarbhagwat.me",
    email: "rameshwarbhagwat019@gmail.com",
  },

  // Fun facts and personality
  funFacts: [
    "I started coding in 2022 and fell in love with creating things for the web.",
    "I've built 10+ production-level projects.",
    "I'm passionate about AI and its potential to transform education.",
    "I love building SaaS products that solve real problems.",
    "I'm based in India and available for remote work worldwide.",
    "I drink way too much coffee while coding.",
    "I believe in learning by building, not just tutorials.",
    "I contribute to open source when I can.",
    "My favorite stack is Next.js + TypeScript + Tailwind.",
    "I'm always excited to learn new technologies.",
  ],

  // Interests and Hobbies
  interests: [
    "Building SaaS products",
    "AI/ML and its applications",
    "Open source contribution",
    "Reading tech blogs",
    "Learning new frameworks",
    "Solving algorithmic problems",
    "UI/UX design patterns",
    "System design",
  ],

  // Testimonials/Achievements
  achievements: [
    "Built and launched multiple production applications",
    "Hackathon winner with Safecoast project",
    "3+ years of development experience",
    "Successfully delivered projects for clients",
    "Growing expertise in AI/ML integration",
  ],

  // FAQ
  faq: [
    {
      question: "What is your hourly rate?",
      answer: "My rates vary based on project complexity and scope. Contact me for a custom quote tailored to your needs.",
    },
    {
      question: "Do you work remotely?",
      answer: "Yes! I work remotely with clients worldwide. I'm flexible with timezones and communication tools.",
    },
    {
      question: "What's your availability?",
      answer: "I'm currently available for freelance projects and full-time opportunities. Reach out to discuss your timeline.",
    },
    {
      question: "Do you provide maintenance after project completion?",
      answer: "Yes, I offer ongoing maintenance and support packages for all projects I deliver.",
    },
    {
      question: "What's your preferred tech stack?",
      answer: "I love working with Next.js, TypeScript, Tailwind CSS, and PostgreSQL. But I'm flexible based on project needs.",
    },
    {
      question: "Can you work with my existing codebase?",
      answer: "Absolutely! I'm experienced in jumping into existing codebases, understanding architecture, and making improvements.",
    },
  ],

  // Pricing tiers (general)
  pricing: {
    consultation: "Free initial consultation",
    hourlyRange: "$30-80/hour based on complexity",
    projectBased: "Custom quotes for project-based work",
    retainer: "Monthly retainer packages available",
  },

  // Work process
  workProcess: [
    { step: 1, title: "Discovery", description: "Understanding your requirements, goals, and vision" },
    { step: 2, title: "Planning", description: "Creating a detailed roadmap and technical specification" },
    { step: 3, title: "Development", description: "Building with regular updates and feedback loops" },
    { step: 4, title: "Testing", description: "Thorough testing to ensure quality and performance" },
    { step: 5, title: "Launch", description: "Deploying to production with monitoring" },
    { step: 6, title: "Support", description: "Ongoing maintenance and improvements" },
  ],

  // Portfolio Section Links for navigation
  sections: {
    hero: { name: "Home", link: "#hero", description: "Welcome section with introduction" },
    about: { name: "About Me", link: "#about", description: "Learn more about Rameshwar" },
    skills: { name: "Skills", link: "#skills", description: "Technologies and expertise" },
    projects: { name: "Projects", link: "#projects", description: "Portfolio of work" },
    journey: { name: "My Journey", link: "#journey", description: "Career timeline and experience" },
    services: { name: "Services", link: "#services", description: "What Rameshwar offers" },
    contact: { name: "Contact", link: "#contact", description: "Get in touch" },
  },
};

// Pre-computed responses for common questions (faster retrieval)
export const QUICK_RESPONSES: Record<string, string> = {
  // Greetings
  'hi': "Hey there! 👋 I'm Rameshwar's AI assistant. How can I help you learn more about him today?",
  'hello': "Hello! Welcome to Rameshwar's portfolio. What would you like to know?",
  'hey': "Hi! I'm here to tell you all about Rameshwar. Ask me anything!",
  'good morning': "Good morning! ☀️ Welcome to Rameshwar's portfolio. How can I assist you today?",
  'good afternoon': "Good afternoon! Welcome! What would you like to know about Rameshwar?",
  'good evening': "Good evening! 🌙 Thanks for visiting. How can I help you?",

  // About Questions
  'who are you': `I'm an AI assistant for **Rameshwar Bhagwat**, a ${CHATBOT_CONTEXT.personal.jobTitle} based in ${CHATBOT_CONTEXT.personal.location}. I can tell you about his skills, projects, experience, and more!`,
  'who is rameshwar': `**Rameshwar Bhagwat** is a ${CHATBOT_CONTEXT.personal.jobTitle} with ${CHATBOT_CONTEXT.personal.yearsOfExperience} years of experience. ${CHATBOT_CONTEXT.personal.bio}`,
  'tell me about yourself': `**Rameshwar Bhagwat** is a ${CHATBOT_CONTEXT.personal.jobTitle} based in ${CHATBOT_CONTEXT.personal.location}.\n\n${CHATBOT_CONTEXT.personal.bio}\n\n📊 **Quick Stats:**\n• ${CHATBOT_CONTEXT.personal.yearsOfExperience} years of experience\n• ${CHATBOT_CONTEXT.personal.projectsBuilt} projects built\n• Currently: ${CHATBOT_CONTEXT.personal.currentStatus}`,
  'tell me about rameshwar': `**Rameshwar Bhagwat** is a passionate ${CHATBOT_CONTEXT.personal.jobTitle} with ${CHATBOT_CONTEXT.personal.yearsOfExperience} years of experience building scalable web applications and AI-powered solutions.\n\n${CHATBOT_CONTEXT.personal.bio}`,
  'introduce yourself': `Hi! I'm the AI assistant for **Rameshwar Bhagwat**. Rameshwar is a ${CHATBOT_CONTEXT.personal.jobTitle} who specializes in building modern web applications and AI solutions. I can help you learn about his skills, projects, and how to work with him!`,
  'what do you do': `Rameshwar is a **${CHATBOT_CONTEXT.personal.jobTitle}** who builds:\n\n• Modern web applications with React/Next.js\n• AI-powered solutions and chatbots\n• SaaS platforms like Devory\n• Full-stack applications with scalable backends\n\nHe's passionate about creating innovative digital experiences!`,

  // Contact Questions
  'email': `📧 You can reach Rameshwar at: **${CHATBOT_CONTEXT.personal.email}**`,
  'phone': `📱 Rameshwar's phone number is: **${CHATBOT_CONTEXT.personal.phone}**`,
  'phone number': `📱 Rameshwar's phone number is: **${CHATBOT_CONTEXT.personal.phone}**`,
  'contact': `**Get in Touch:**\n\n📧 Email: ${CHATBOT_CONTEXT.personal.email}\n📱 Phone: ${CHATBOT_CONTEXT.personal.phone}\n\n👉 [Go to Contact Section](#contact)`,
  'how can i contact you': `**Contact Rameshwar:**\n\n📧 Email: ${CHATBOT_CONTEXT.personal.email}\n📱 Phone: ${CHATBOT_CONTEXT.personal.phone}\n💼 LinkedIn: ${CHATBOT_CONTEXT.social.linkedin}\n\n👉 [Go to Contact Section](#contact)`,
  'how to reach you': `**Reach out to Rameshwar:**\n\n📧 Email: ${CHATBOT_CONTEXT.personal.email}\n📱 Phone: ${CHATBOT_CONTEXT.personal.phone}\n\nHe typically responds within ${CHATBOT_CONTEXT.personal.responseTime}!`,

  // Location Questions
  'location': `📍 Rameshwar is based in **${CHATBOT_CONTEXT.personal.location}**, but works remotely with clients worldwide!`,
  'where are you from': `📍 Rameshwar is from **${CHATBOT_CONTEXT.personal.location}**. He's available for remote work globally!`,
  'where do you live': `📍 Rameshwar lives in **${CHATBOT_CONTEXT.personal.location}**. He works remotely with clients from all over the world!`,
  'where are you located': `📍 Rameshwar is located in **${CHATBOT_CONTEXT.personal.location}**.\n\n🌍 Timezone: ${CHATBOT_CONTEXT.personal.timezone}\n🏠 Work Style: Remote-first`,
  'which country': `🇮🇳 Rameshwar is based in **India**, specifically in ${CHATBOT_CONTEXT.personal.location}. He works with clients worldwide!`,

  // Availability & Hiring
  'available': CHATBOT_CONTEXT.personal.availableForWork
    ? "✅ **Yes!** Rameshwar is currently available for freelance, contract, and full-time opportunities. Reach out to discuss your project!"
    : "⏳ Rameshwar is currently busy with existing commitments, but feel free to reach out for future projects.",
  'are you available': CHATBOT_CONTEXT.personal.availableForWork
    ? "✅ **Yes!** Rameshwar is currently available for new projects and opportunities!"
    : "⏳ Currently busy, but open to discussing future opportunities.",
  'can i hire you': `Yes! Rameshwar is ${CHATBOT_CONTEXT.personal.availableForWork ? '**currently available**' : 'open to opportunities'}.\n\n**To hire:**\n1. Go to the Contact Section\n2. Send a message describing your project\n3. He'll respond within ${CHATBOT_CONTEXT.personal.responseTime}\n\n👉 [Go to Contact Section](#contact)`,
  'how can i hire you': `**How to Hire Rameshwar:**\n\n1. 📝 Visit the Contact Section\n2. 💬 Describe your project requirements\n3. 📧 Or email directly: ${CHATBOT_CONTEXT.personal.email}\n\nHe responds within ${CHATBOT_CONTEXT.personal.responseTime}!\n\n👉 [Go to Contact Section](#contact)`,
  'hire': `**Hire Rameshwar:**\n\n✅ Currently available for:\n${CHATBOT_CONTEXT.personal.workPreference.map(w => `• ${w}`).join('\n')}\n\n📧 Email: ${CHATBOT_CONTEXT.personal.email}\n👉 [Go to Contact Section](#contact)`,
  'looking for developer': `**Great!** Rameshwar is a ${CHATBOT_CONTEXT.personal.jobTitle} available for hire!\n\n**Services:**\n• Full Stack Development\n• AI/ML Integration\n• SaaS Development\n• API Development\n\n👉 [Go to Contact Section](#contact)`,
  'need a developer': "**Rameshwar can help!** He's an experienced Full Stack & AI Developer.\n\n👉 [Go to Contact Section](#contact) to discuss your project!",

  // Skills Questions
  'what are your skills': `**Rameshwar's Key Skills:**\n\n🎨 **Frontend:** React, Next.js, TypeScript, Tailwind CSS\n⚙️ **Backend:** Node.js, Python, Express, FastAPI\n🗄️ **Database:** PostgreSQL, MongoDB, Prisma\n🤖 **AI/ML:** OpenAI, LangChain, TensorFlow\n☁️ **Cloud:** Vercel, AWS, Docker\n\n👉 [View All Skills](#skills)`,
  'tech stack': `**Rameshwar's Tech Stack:**\n\n🎨 **Frontend:** React, Next.js, TypeScript, Tailwind CSS, Framer Motion\n⚙️ **Backend:** Node.js, Python, Express.js, FastAPI\n🗄️ **Databases:** PostgreSQL, MongoDB, Supabase\n🤖 **AI/ML:** OpenAI API, LangChain, TensorFlow\n☁️ **DevOps:** Vercel, AWS, Docker, GitHub Actions\n\n**Favorite Stack:** Next.js + TypeScript + Tailwind + PostgreSQL`,
  'what technologies do you use': `**Technologies Rameshwar Uses:**\n\n• **Languages:** JavaScript, TypeScript, Python\n• **Frontend:** React, Next.js, Tailwind CSS\n• **Backend:** Node.js, Express, FastAPI\n• **Databases:** PostgreSQL, MongoDB\n• **AI/ML:** OpenAI, LangChain, TensorFlow\n\n👉 [View All Skills](#skills)`,
  'favorite stack': "🛠️ Rameshwar's favorite stack is **Next.js + TypeScript + Tailwind CSS + PostgreSQL**. He loves the developer experience and performance this combination provides!",
  'what is your favorite technology': "🛠️ Rameshwar's favorite technologies are **Next.js** for frontend, **Node.js/Python** for backend, and **PostgreSQL** for database. For AI projects, he loves using **OpenAI API** and **LangChain**!",
  'best at': "Rameshwar excels at **Full Stack Development** (React/Next.js) and **AI/ML Integration**. He's built production applications used by real users!",
  'what are you best at': "Rameshwar is best at:\n\n🥇 **Full Stack Development** with React/Next.js\n🥈 **AI/ML Integration** for intelligent features\n🥉 **SaaS Platform Development**\n\nHe's shipped 10+ production projects!",

  // Project Questions
  'show me your projects': `**Rameshwar's Projects:**\n\n🚀 **Devory** - AI-Powered Student Project Platform\n🌊 **Safecoast** - Coastal Hazard Intelligence (Hackathon Winner)\n💡 **ThinkVerse** - Idea Management Platform\n🛒 **Moungiri Store** - E-commerce Platform\n📱 **Spam Detection** - ML Classification System\n\n👉 [View All Projects](#projects)`,
  'what projects have you built': `**Projects Built by Rameshwar:**\n\n1. **Devory** - AI-driven platform for student projects\n2. **Safecoast** - Real-time coastal hazard monitoring\n3. **ThinkVerse** - Structured idea management\n4. **Moungiri Store** - Full e-commerce solution\n5. **This Portfolio** - With AI chatbot!\n\n👉 [View All Projects](#projects)`,
  'your work': `**Rameshwar's Work:**\n\nHe has built ${CHATBOT_CONTEXT.personal.projectsBuilt} production projects including SaaS platforms, AI applications, and web apps.\n\n**Featured:** Devory, Safecoast, ThinkVerse\n\n👉 [View Projects](#projects)`,
  'portfolio': `**Rameshwar's Portfolio:**\n\nIncludes ${CHATBOT_CONTEXT.personal.projectsBuilt} projects ranging from AI-powered SaaS platforms to e-commerce solutions.\n\n👉 [View All Projects](#projects)`,
  'what have you built': `**What Rameshwar Has Built:**\n\n🚀 SaaS Platforms (Devory, ThinkVerse)\n🌊 Real-time Monitoring Apps (Safecoast)\n🛒 E-commerce Solutions (Moungiri Store)\n🤖 AI/ML Applications (Spam Detection)\n💼 Client Websites\n\n👉 [View Projects](#projects)`,

  // Specific Projects
  'tell me about devory': `**🚀 Devory - AI-Powered Student Project Platform**\n\n${CHATBOT_CONTEXT.projects[0].longDescription}\n\n**Tech:** Next.js, TypeScript, PostgreSQL, OpenAI\n**Status:** Currently building\n\n👉 [View Projects](#projects)`,
  'what is devory': `**Devory** is Rameshwar's flagship project - an AI-driven platform that helps students discover, build, and manage real-world technical projects.\n\n**Features:**\n• AI project recommendations\n• Progress tracking\n• Portfolio integration\n\n👉 [View Projects](#projects)`,
  'tell me about safecoast': `**🌊 Safecoast - Coastal Hazard Intelligence**\n\nBuilt in a 48-hour hackathon, it monitors environmental risk factors for coastal communities.\n\n**Tech:** Next.js, Node.js, OpenWeather API\n**Achievement:** Hackathon Winner! 🏆\n\n👉 [View Projects](#projects)`,
  'tell me about thinkverse': `**💡 ThinkVerse - Idea Management Platform**\n\nA structured platform for entrepreneurs to organize, develop, and execute ideas systematically.\n\n**Tech:** Next.js, Supabase, Framer Motion\n**Status:** Launched\n\n👉 [View Projects](#projects)`,

  // Services Questions
  'what services do you offer': `**Services Rameshwar Offers:**\n\n🌐 Full Stack Web Development\n🤖 AI/ML Integration\n📦 SaaS Platform Development\n🔗 API Design & Development\n🗄️ Database Design\n⚡ Performance Optimization\n🎨 UI/UX Development\n💬 Technical Consultation\n\n👉 [View Services](#services)`,
  'services': `**Rameshwar's Services:**\n\n• Full Stack Web Development\n• AI/ML Integration\n• SaaS Development\n• API Development\n• Database Design\n• UI/UX Development\n\n👉 [View Services](#services)`,
  'what can you do for me': `**How Rameshwar Can Help:**\n\n✅ Build custom web applications\n✅ Integrate AI features into your app\n✅ Design scalable databases\n✅ Create beautiful, responsive UIs\n✅ Optimize your application performance\n\n👉 [Contact for details](#contact)`,
  'can you build a website': "**Yes!** Rameshwar builds modern, responsive websites with:\n\n• React/Next.js\n• Custom designs\n• SEO optimization\n• Fast performance\n\n👉 [Go to Contact Section](#contact) to discuss your project!",
  'can you build an app': "**Absolutely!** Rameshwar can build:\n\n• Web applications (React/Next.js)\n• Full-stack apps with databases\n• AI-powered applications\n• SaaS platforms\n\n👉 [Go to Contact Section](#contact)",
  'do you do freelance': `**Yes!** Rameshwar is available for freelance work.\n\n**Work Types:**\n${CHATBOT_CONTEXT.personal.workPreference.map(w => `• ${w}`).join('\n')}\n\n👉 [Contact to discuss](#contact)`,

  // Experience Questions
  'experience': `**Rameshwar's Experience:**\n\n📅 ${CHATBOT_CONTEXT.personal.yearsOfExperience} years in software development\n🚀 ${CHATBOT_CONTEXT.personal.projectsBuilt} projects shipped\n🏆 Hackathon winner\n🎓 B.Tech in IT (Pursuing)\n\n👉 [View Journey](#journey)`,
  'how much experience': `Rameshwar has **${CHATBOT_CONTEXT.personal.yearsOfExperience} years** of hands-on experience in full-stack development and AI/ML.\n\nHe has built ${CHATBOT_CONTEXT.personal.projectsBuilt} production projects!`,
  'years of experience': `📅 **${CHATBOT_CONTEXT.personal.yearsOfExperience} Years** of development experience.\n\nRameshwar started coding in 2022 and has been building production applications ever since!`,
  'your journey': `**Rameshwar's Journey:**\n\n2022 - Started web development\n2023 - Learned React & Backend\n2024 - Started B.Tech, built production apps\n2025 - Launched ThinkVerse SaaS\n2026 - Building Devory (AI-powered)\n\n👉 [View Full Journey](#journey)`,
  'how did you start coding': "Rameshwar started coding in **2022** with HTML, CSS, and JavaScript. His curiosity led him to React, then full-stack development, and now AI/ML integration. He believes in learning by building real projects!",

  // Education
  'education': `**Education:**\n\n🎓 B.Tech in Information Technology (Pursuing)\n📚 Self-taught developer since 2022\n🌐 Continuous learning through building projects\n\nRameshwar believes in learning by doing!`,
  'where did you study': `🎓 Rameshwar is pursuing **B.Tech in Information Technology**.\n\nHe's also self-taught through online resources, documentation, and building real projects!`,
  'your qualification': `**Qualifications:**\n\n🎓 B.Tech in Information Technology (Pursuing)\n💻 ${CHATBOT_CONTEXT.personal.yearsOfExperience}+ years practical experience\n🚀 ${CHATBOT_CONTEXT.personal.projectsBuilt} production projects\n🏆 Hackathon winner`,

  // Pricing
  'pricing': `**Pricing Information:**\n\n💬 Consultation: Free initial consultation\n⏰ Hourly: $30-80 based on complexity\n📦 Projects: Custom quotes\n🔄 Retainer: Monthly packages available\n\n👉 [Contact for quote](#contact)`,
  'how much do you charge': `**Rameshwar's Rates:**\n\n• **Hourly:** $30-80 (based on complexity)\n• **Projects:** Custom quotes\n• **Consultation:** Free initial call\n\nReach out with your requirements for a specific quote!\n\n👉 [Contact](#contact)`,
  'rates': `**Rates:**\n\nHourly: $30-80 depending on project complexity\nProjects: Custom quotes based on scope\n\n👉 [Get a Quote](#contact)`,
  'your rate': `Rameshwar's hourly rate ranges from **$30-80** depending on project complexity. For fixed-price projects, he provides custom quotes.\n\n👉 [Contact for Quote](#contact)`,

  // Social Links
  'github': `🐙 **GitHub:** ${CHATBOT_CONTEXT.social.github}\n\nCheck out Rameshwar's open source projects and code!`,
  'linkedin': `💼 **LinkedIn:** ${CHATBOT_CONTEXT.social.linkedin}\n\nConnect with Rameshwar professionally!`,
  'twitter': `🐦 **Twitter:** ${CHATBOT_CONTEXT.social.twitter}\n\nFollow for tech insights and updates!`,
  'social links': `**Connect with Rameshwar:**\n\n🐙 GitHub: ${CHATBOT_CONTEXT.social.github}\n💼 LinkedIn: ${CHATBOT_CONTEXT.social.linkedin}\n🐦 Twitter: ${CHATBOT_CONTEXT.social.twitter}\n🌐 Portfolio: ${CHATBOT_CONTEXT.social.portfolio}`,

  // Navigation
  'show all sections': `**📍 Portfolio Sections:**\n\n• [🏠 Home](#hero) - Welcome section\n• [👤 About Me](#about) - Learn about Rameshwar\n• [🛠️ Skills](#skills) - Technologies & expertise\n• [🚀 Projects](#projects) - Portfolio of work\n• [📅 My Journey](#journey) - Career timeline\n• [💼 Services](#services) - What he offers\n• [📧 Contact](#contact) - Get in touch`,
  'sections': `**Portfolio Sections:**\n\n• [Home](#hero)\n• [About](#about)\n• [Skills](#skills)\n• [Projects](#projects)\n• [Journey](#journey)\n• [Services](#services)\n• [Contact](#contact)`,
  'navigate': `**Navigate the Portfolio:**\n\n👉 [About Me](#about)\n👉 [Skills](#skills)\n👉 [Projects](#projects)\n👉 [Services](#services)\n👉 [Contact](#contact)`,
  'go to projects': `👉 Click here to view projects: [View Projects](#projects)`,
  'go to contact': `👉 Click here to contact: [Go to Contact](#contact)`,
  'go to skills': `👉 Click here to view skills: [View Skills](#skills)`,
  'go to about': `👉 Click here to learn more: [About Me](#about)`,

  // Work Process
  'how do you work': `**Rameshwar's Work Process:**\n\n1️⃣ **Discovery** - Understanding requirements\n2️⃣ **Planning** - Creating roadmap\n3️⃣ **Development** - Building with updates\n4️⃣ **Testing** - Ensuring quality\n5️⃣ **Launch** - Deploying to production\n6️⃣ **Support** - Ongoing maintenance`,
  'your process': `**How Rameshwar Works:**\n\n1. Free consultation to understand needs\n2. Detailed proposal & timeline\n3. Development with regular updates\n4. Testing & quality assurance\n5. Launch & deployment\n6. Post-launch support`,
  'work process': `**Development Process:**\n\n• Discovery: Understanding your vision\n• Planning: Technical specifications\n• Development: Iterative building\n• Testing: Quality assurance\n• Launch: Production deployment\n• Support: Ongoing maintenance`,

  // Fun Facts
  'fun fact': CHATBOT_CONTEXT.funFacts[Math.floor(Math.random() * CHATBOT_CONTEXT.funFacts.length)],
  'tell me something interesting': `**Fun Fact:** ${CHATBOT_CONTEXT.funFacts[Math.floor(Math.random() * CHATBOT_CONTEXT.funFacts.length)]}\n\nWant to know more about Rameshwar?`,
  'hobbies': `**Rameshwar's Interests:**\n\n• Building SaaS products\n• AI/ML exploration\n• Open source contribution\n• Learning new technologies\n• System design\n\nCoding is both his work and passion!`,

  // Common Questions
  'why should i hire you': `**Why Hire Rameshwar?**\n\n✅ ${CHATBOT_CONTEXT.personal.yearsOfExperience}+ years of experience\n✅ ${CHATBOT_CONTEXT.personal.projectsBuilt}+ production projects\n✅ Full-stack + AI expertise\n✅ Quick response time\n✅ Quality-focused approach\n✅ Clear communication\n\n👉 [Let's Discuss](#contact)`,
  'what makes you different': `**What Sets Rameshwar Apart:**\n\n🎯 Full-stack + AI/ML skills\n🚀 Focus on shipping real products\n💡 Modern tech stack expertise\n📈 Performance-oriented development\n🤝 Clear communication & reliability\n\nHe builds things that work and scale!`,
  'do you work remotely': `**Yes!** Rameshwar works remotely with clients worldwide.\n\n🌍 Available for global projects\n⏰ Flexible with timezones\n💬 Clear async communication\n\n👉 [Start a Project](#contact)`,
  'timezone': `🕐 Rameshwar's Timezone: **${CHATBOT_CONTEXT.personal.timezone}**\n\nHe's flexible and works with clients across different timezones!`,
  'languages you speak': `**Languages Rameshwar Speaks:**\n\n• English (Professional)\n• Hindi (Native)\n• Marathi (Native)`,
};

// Response templates for common intents
export const RESPONSE_TEMPLATES = {
  greeting: [
    "Hey there! 👋 I'm Rameshwar's AI assistant. How can I help you learn more about him today?",
    "Hello! Welcome to Rameshwar's portfolio. What would you like to know?",
    "Hi! I'm here to tell you all about Rameshwar. Ask me anything!",
    "Hey! Great to meet you. I can tell you about Rameshwar's skills, projects, experience, and more. What interests you?",
  ],

  farewell: [
    "Thanks for chatting! Feel free to reach out to Rameshwar at rameshwarbhagwat019@gmail.com. Have a great day! 👋",
    "Goodbye! Don't hesitate to contact Rameshwar if you have any opportunities or questions.",
    "Take care! Rameshwar would love to hear from you. Connect on LinkedIn or send an email!",
    "Thanks for visiting! Hope this was helpful. Reach out anytime! 🙌",
  ],

  unknown: [
    "I'm not sure about that specific question. Try asking about:\n\n• Skills & tech stack\n• Projects\n• Services\n• Contact info\n• How to hire\n\nOr reach out to Rameshwar at rameshwarbhagwat019@gmail.com!",
    "That's an interesting question! I can help with questions about Rameshwar's:\n\n• Skills & expertise\n• Projects & portfolio\n• Services & pricing\n• Contact & hiring\n\nWhat would you like to know?",
    "I don't have specific info on that, but try asking about skills, projects, or services! Or contact Rameshwar directly.",
  ],

  thanks: [
    "You're welcome! 😊 Let me know if you have any other questions about Rameshwar.",
    "Happy to help! Feel free to explore more or reach out to Rameshwar directly.",
    "Glad I could help! Is there anything else you'd like to know?",
    "Anytime! 🙌 Feel free to ask more questions or visit the Contact section.",
  ],

  capabilities: [
    "**I can tell you about:**\n\n• 👤 Rameshwar's background & bio\n• 🛠️ Skills and tech stack\n• 🚀 Projects (Devory, Safecoast, etc.)\n• 📅 Experience and journey\n• 💼 Services offered\n• 📧 How to contact or hire\n• 🔗 Social links\n\nWhat would you like to know?",
  ],
};

// Enhanced keywords for intent detection (more comprehensive)
export const INTENT_KEYWORDS: Record<string, string[]> = {
  // Greetings
  greeting: ["hi", "hello", "hey", "greetings", "good morning", "good afternoon", "good evening", "howdy", "sup", "yo", "hola", "namaste", "what's up", "wassup"],

  // Farewells
  farewell: ["bye", "goodbye", "see you", "later", "take care", "cya", "gtg", "gotta go", "leaving", "exit"],

  // Thanks
  thanks: ["thanks", "thank you", "thx", "ty", "appreciate", "grateful", "helpful", "great help", "awesome"],

  // What can you do
  capabilities: ["what can you do", "help me", "what do you know", "what can i ask", "how can you help", "capabilities", "what are you"],

  // About/Introduction
  about: ["about", "who", "tell me", "yourself", "rameshwar", "introduce", "introduction", "what do you do", "describe", "overview", "summary", "bio", "background"],

  // Skills
  skills: ["skills", "technologies", "tech stack", "stack", "programming", "languages", "know", "expertise", "proficient", "capable", "abilities", "competencies", "tools", "frameworks"],
  frontend: ["frontend", "front-end", "front end", "react", "next.js", "nextjs", "ui", "ux", "user interface", "client side", "css", "tailwind", "styling"],
  backend: ["backend", "back-end", "back end", "node", "express", "server", "api", "apis", "server side", "python"],
  database: ["database", "db", "mongodb", "postgresql", "postgres", "firebase", "supabase", "sql", "nosql", "data storage"],
  ai: ["ai", "machine learning", "ml", "artificial intelligence", "tensorflow", "nlp", "natural language", "deep learning", "neural", "openai", "chatgpt", "gpt", "langchain"],
  devops: ["devops", "deployment", "deploy", "aws", "cloud", "docker", "ci/cd", "hosting", "server management", "vercel", "infrastructure"],

  // Projects
  projects: ["projects", "work", "portfolio", "built", "created", "developed", "apps", "applications", "showcase", "examples", "case studies", "what have you built", "show me"],
  devory: ["devory", "student project platform", "ai platform", "project management"],
  safecoast: ["safecoast", "safe coast", "coastal", "hazard", "hackathon", "weather", "monitoring"],
  thinkverse: ["thinkverse", "think verse", "idea management", "idea platform", "ideas"],
  spam: ["spam", "spam detection", "message detection", "sms", "classification", "ml project"],
  ecommerce: ["ecommerce", "e-commerce", "store", "shop", "moungiri", "online store", "shopping"],

  // Experience
  experience: ["experience", "years", "background", "career", "journey", "history", "timeline", "story", "how long", "worked"],
  education: ["education", "study", "studying", "college", "degree", "university", "btech", "b.tech", "academic", "school", "learning"],
  achievements: ["achievements", "accomplishments", "awards", "recognition", "milestones", "success"],

  // Contact & Hire
  contact: ["contact", "email", "phone", "reach", "get in touch", "connect", "message", "call"],
  hire: ["hire", "hiring", "job", "opportunity", "freelance", "contract", "available", "open to", "work with", "collaborate", "project", "engagement", "work together", "employ"],
  pricing: ["pricing", "price", "cost", "rate", "rates", "charge", "fee", "budget", "how much", "hourly", "quote"],
  process: ["process", "how do you work", "workflow", "methodology", "approach", "stages", "steps"],

  // Location & Availability
  location: ["location", "where", "based", "live", "from", "city", "country", "india", "remote", "timezone"],
  availability: ["availability", "available", "free", "capacity", "timeline", "when", "schedule", "busy"],

  // Services
  services: ["services", "offer", "provide", "specialize", "specialization", "what do you do", "help with"],

  // Social
  social: ["social", "github", "linkedin", "twitter", "links", "profiles", "follow", "connect", "portfolio link"],

  // Fun/Personal
  fun: ["fun", "hobby", "hobbies", "interests", "free time", "personal", "outside work", "fun fact"],
  favorite: ["favorite", "favourite", "prefer", "like best", "love", "best", "top choice"],

  // FAQ
  faq: ["faq", "frequently asked", "common questions", "question", "doubt", "wondering"],

  // Navigation
  navigation: ["navigate", "go to", "take me", "show me", "where is", "sections", "pages", "menu", "scroll to", "jump to", "find section", "all sections", "links"],
};

// Suggestion chains for conversation flow - all suggestions have answers
export const SUGGESTION_CHAINS: Record<string, string[]> = {
  // Initial/greeting suggestions
  greeting: ["Tell me about yourself", "What are your skills?", "Show me your projects"],

  // After about response
  about: ["What are your skills?", "Show me your projects", "How can I hire you?"],

  // After skills response
  skills: ["Tell me about frontend", "What databases do you use?", "Show me your projects"],

  // After frontend response
  frontend: ["What about backend?", "Do you work with AI?", "Tell me about Devory"],

  // After backend response
  backend: ["What databases do you use?", "Show me your projects", "What services do you offer?"],

  // After database response
  database: ["What about DevOps?", "Show me your projects", "How can I hire you?"],

  // After AI/ML response
  ai: ["Tell me about Devory", "What is your tech stack?", "How can I hire you?"],

  // After DevOps response
  devops: ["Show me your projects", "What services do you offer?", "How can I contact you?"],

  // After projects response
  projects: ["Tell me about Devory", "Tell me about Safecoast", "How can I hire you?"],

  // After specific project responses
  devory: ["What tech did you use?", "Tell me about Safecoast", "How can I hire you?"],
  safecoast: ["Tell me about Devory", "Tell me about ThinkVerse", "What are your skills?"],
  thinkverse: ["Tell me about Devory", "Show me your projects", "How can I hire you?"],
  spam: ["What other projects?", "Do you work with AI?", "How can I hire you?"],
  ecommerce: ["Show me your projects", "What services do you offer?", "How can I contact you?"],

  // After experience/journey response
  experience: ["What are your skills?", "Show me your projects", "How can I hire you?"],
  education: ["What are your skills?", "Your experience?", "Show me your projects"],
  achievements: ["Tell me about your projects", "How can I hire you?", "What services do you offer?"],

  // After contact response
  contact: ["What services do you offer?", "What are your rates?", "Show me your projects"],

  // After hire response
  hire: ["What are your rates?", "What's your process?", "Go to Contact section"],

  // After services response
  services: ["What are your rates?", "Show me your projects", "How can I hire you?"],

  // After pricing response
  pricing: ["What's your process?", "How can I contact you?", "Show me your work"],

  // After process response
  process: ["How can I hire you?", "What are your rates?", "Go to Contact section"],

  // After location response
  location: ["Do you work remotely?", "How can I contact you?", "What are your skills?"],
  availability: ["How can I hire you?", "What are your rates?", "Go to Contact section"],

  // After social links response
  social: ["How can I hire you?", "Show me your projects", "What are your skills?"],

  // After fun/hobbies response
  fun: ["Tell me about yourself", "What are your skills?", "Show me your projects"],
  favorite: ["What are your skills?", "Show me your projects", "How can I hire you?"],

  // After FAQ response
  faq: ["How can I hire you?", "What are your rates?", "Go to Contact section"],

  // After navigation response
  navigation: ["Go to Projects", "Go to Contact", "Tell me about yourself"],

  // After thanks response
  thanks: ["Show me your projects", "How can I hire you?", "Go to Contact section"],

  // After capabilities response
  capabilities: ["Tell me about yourself", "What are your skills?", "Show me your projects"],

  // Default suggestions
  default: ["Tell me about yourself", "What are your skills?", "Show all sections"],

  // Unknown response suggestions
  unknown: ["Tell me about yourself", "What are your skills?", "Show me your projects"],
};
