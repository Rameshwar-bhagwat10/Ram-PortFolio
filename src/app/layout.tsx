import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/theme.css";
import "../styles/animations.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rameshwarbhagwat.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rameshwar Bhagwat | Full Stack & AI Developer",
    template: "%s | Rameshwar Bhagwat"
  },
  description: "Full Stack Developer and AI enthusiast building scalable SaaS platforms like Devory and ThinkVerse. Specializing in Next.js, React, TypeScript, and AI/ML systems. Explore innovative projects and modern web applications.",
  keywords: [
    "Rameshwar Bhagwat",
    "Full Stack Developer",
    "AI Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "SaaS Developer",
    "Devory",
    "ThinkVerse",
    "Machine Learning Projects",
    "Web Development Portfolio",
    "AI-Powered Applications",
    "Safecoast",
    "WebCraft",
    "AgroManage",
    "Spam Detection ML"
  ],
  authors: [{ name: "Rameshwar Bhagwat", url: siteUrl }],
  creator: "Rameshwar Bhagwat",
  publisher: "Rameshwar Bhagwat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rameshwar Bhagwat Portfolio",
    title: "Rameshwar Bhagwat | Full Stack & AI Developer",
    description: "Portfolio of a Full Stack & AI Developer building modern SaaS platforms, AI-powered applications, and scalable web solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rameshwar Bhagwat - Full Stack & AI Developer Portfolio"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rameshwar Bhagwat | Full Stack & AI Developer",
    description: "Full Stack Developer building AI-powered SaaS platforms and modern web applications.",
    images: ["/og-image.png"],
    creator: "@yourtwitterhandle", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rameshwar Bhagwat",
    "url": siteUrl,
    "image": `${siteUrl}/images/profile/profile.jpeg`,
    "jobTitle": "Full Stack & AI Developer",
    "description": "Full Stack Developer specializing in AI-powered SaaS platforms, modern web applications, and scalable solutions.",
    "email": "rameshwarbhagwat019@gmail.com",
    "telephone": "+91-9699245170",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Yeola",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://github.com/Rameshwar-bhagwat10",
      "https://linkedin.com/in/rameshwar-bhagwat",
    ],
    "knowsAbout": [
      "Full Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "SaaS Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "B.Tech IT"
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rameshwar Bhagwat Portfolio",
    "url": siteUrl,
    "description": "Portfolio showcasing full stack development and AI projects",
    "author": {
      "@type": "Person",
      "name": "Rameshwar Bhagwat"
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Structured Data - Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for faster resource loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Theme Color for mobile browsers */}
        <meta name="theme-color" content="#0F0E0E" />
        <meta name="msapplication-TileColor" content="#0F0E0E" />
        
        {/* Viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ overflow: 'visible' }}
      >
        <Navbar />
        <main className="relative z-10" style={{ overflow: 'visible' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
