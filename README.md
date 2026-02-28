# 🚀 Rameshwar Bhagwat - Portfolio

Modern, high-performance portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

**Live Site**: [https://rameshwarbhagwat.me](https://rameshwarbhagwat.me)

---

## ✨ Features

- ⚡ **Next.js 16** with App Router and Turbopack
- 🎨 **Modern UI** with Tailwind CSS and Framer Motion animations
- 📱 **Fully Responsive** design for all devices
- 🎯 **SEO Optimized** with meta tags, sitemap, and structured data
- 📊 **Visitor Tracking** with Upstash Redis
- 📧 **Contact Form** with email notifications
- 🔥 **GitHub Contributions** heatmap integration
- 🌐 **Custom Domain** support
- 🔒 **Type-Safe** with TypeScript
- ⚡ **Performance Optimized** (Lighthouse 90+ scores)

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons

### Backend & APIs
- **Email**: Nodemailer (SMTP)
- **Database**: Upstash Redis (visitor tracking)
- **GitHub API**: Contributions data

### Deployment
- **Hosting**: Vercel
- **Domain**: rameshwarbhagwat.me
- **SSL**: Automatic (Let's Encrypt)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Rameshwar-bhagwat10/Ram-PortFolio.git
cd Ram-PortFolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your credentials:
```env
GITHUB_TOKEN=your_github_token
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=noreply@rameshwarbhagwat.me
ADMIN_EMAIL=your_email@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📚 Documentation

Complete documentation is available in the [`docs/`](./docs) folder:

### Quick Links
- 🚀 **[Vercel Deployment Guide](./docs/VERCEL-DEPLOYMENT-GUIDE.md)** - Deploy to production
- ✅ **[Production Checklist](./docs/PRODUCTION-CHECKLIST.md)** - Pre-deployment verification
- 🌐 **[Custom Domain Setup](./docs/CUSTOM-DOMAIN-SETUP.md)** - Configure your domain
- 📊 **[Redis Setup Guide](./docs/QUICK-REDIS-SETUP.md)** - Enable visitor tracking
- 🔍 **[SEO Implementation](./docs/SEO-IMPLEMENTATION.md)** - SEO optimization

**[View All Documentation →](./docs/README.md)**

---

## 📁 Project Structure

```
portfolio/
├── docs/                      # Documentation files
├── public/                    # Static assets
│   ├── images/               # Images and graphics
│   ├── icons/                # Icons and logos
│   ├── robots.txt            # SEO robots file
│   └── sitemap.xml           # Static sitemap
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── api/              # API routes
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   └── sitemap.ts        # Dynamic sitemap
│   ├── components/           # React components
│   │   ├── sections/         # Page sections
│   │   ├── layout/           # Layout components
│   │   ├── ui/               # UI components
│   │   └── analytics/        # Analytics components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   ├── styles/               # Global styles
│   └── types/                # TypeScript types
├── .env                      # Environment variables (local)
├── .env.example              # Environment variables template
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

---

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Add environment variables
4. Deploy!

**Detailed Guide**: [Vercel Deployment Guide](./docs/VERCEL-DEPLOYMENT-GUIDE.md)

### Environment Variables for Production

Required variables in Vercel:
```
GITHUB_TOKEN
SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASS
SMTP_FROM
ADMIN_EMAIL
NEXT_PUBLIC_SITE_URL
UPSTASH_REDIS_REST_URL (auto-added)
UPSTASH_REDIS_REST_TOKEN (auto-added)
```

---

## 📊 Features Overview

### Sections
- **Hero**: Animated introduction with typing effect
- **About**: Profile, stats, timeline, and achievements
- **Skills**: Tech stack with animated marquee
- **Work**: Project showcase with horizontal scroll
- **GitHub**: Contributions heatmap
- **Contact**: Form with email notifications

### Integrations
- **Visitor Counter**: Real-time tracking with Redis
- **Email Notifications**: Auto-reply and admin alerts
- **GitHub API**: Live contributions data
- **SEO**: Sitemap, robots.txt, structured data

---

## 🎨 Customization

### Update Personal Information

Edit `src/lib/constants.ts`:
```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  email: 'your@email.com',
  // ... other info
};
```

### Update Projects

Edit `src/components/sections/Work/work.data.ts`:
```typescript
export const projects = [
  {
    id: 1,
    title: 'Your Project',
    // ... project details
  },
];
```

### Update Skills

Edit `src/components/sections/Skills/skills.data.ts`

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Visitor Counter Not Working
See [Visitor Counter Fix](./docs/VISITOR-COUNTER-FIX.md)

### Email Not Sending
1. Verify SMTP credentials
2. Use Gmail App Password (not regular password)
3. Check Vercel function logs

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Rameshwar Bhagwat**
- Website: [rameshwarbhagwat.me](https://rameshwarbhagwat.me)
- Email: rameshwarbhagwat019@gmail.com
- GitHub: [@Rameshwar-bhagwat10](https://github.com/Rameshwar-bhagwat10)
- LinkedIn: [Rameshwar Bhagwat](https://linkedin.com/in/rameshwar-bhagwat)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - React framework
- [Vercel](https://vercel.com) - Hosting platform
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Upstash](https://upstash.com) - Redis database

---

## 📞 Support

For detailed guides and troubleshooting:
- 📚 [Documentation](./docs/README.md)
- 🐛 [Issues](https://github.com/Rameshwar-bhagwat10/Ram-PortFolio/issues)

---

**Built with ❤️ by Rameshwar Bhagwat**
