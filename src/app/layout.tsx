import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/theme.css";
import "../styles/animations.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rameshwarbhagwat.me';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rameshwar Bhagwat | Full Stack & AI Developer",
    template: "%s | Rameshwar Bhagwat"
  },
  description: "Rameshwar Bhagwat is a Full Stack and AI Developer building scalable SaaS platforms like Devory and ThinkVerse. Specializing in React, Next.js, TypeScript, and machine learning systems. Explore Rameshwar Bhagwat's portfolio of innovative AI-powered applications and modern web development projects.",
  keywords: [
    "Rameshwar Bhagwat",
    "Rameshwar Bhagwat portfolio",
    "Rameshwar Bhagwat developer",
    "Full Stack Developer Rameshwar Bhagwat",
    "AI Developer Rameshwar Bhagwat",
    "Rameshwar Bhagwat projects",
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
    "AI-Powered Applications"
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
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rameshwar Bhagwat Portfolio",
    title: "Rameshwar Bhagwat | Full Stack & AI Developer",
    description: "Rameshwar Bhagwat is a Full Stack and AI Developer building scalable SaaS platforms like Devory and ThinkVerse. Explore innovative AI-powered applications and modern web development projects.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Rameshwar Bhagwat - Full Stack & AI Developer Portfolio"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rameshwar Bhagwat | Full Stack & AI Developer",
    description: "Rameshwar Bhagwat is a Full Stack and AI Developer building AI-powered SaaS platforms like Devory and modern web applications.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@yourtwitterhandle",
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
  verification: {
    google: 'ibL2p6r9xrTKR3U9o5zRTmVlFC4lAP_GheMlBWgOuGo',
    other: {
      'msvalidate.01': 'YOUR_BING_VERIFICATION_CODE', // Replace with actual Bing verification code
    },
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
    "description": "Rameshwar Bhagwat is a Full Stack and AI Developer building AI-powered SaaS platforms like Devory and ThinkVerse, specializing in modern web applications and machine learning systems.",
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
      "https://linkedin.com/in/rameshwar-bhagwat"
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
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbItems = [
    { name: "Home", url: siteUrl },
  ];

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
        
        {/* Breadcrumb Schema */}
        <BreadcrumbSchema items={breadcrumbItems} />
        
        {/* Favicon - Multiple formats for better compatibility */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#FF5028" />
        
        {/* Bing/Microsoft specific meta tags */}
        <meta name="msapplication-TileColor" content="#0F0E0E" />
        <meta name="msapplication-TileImage" content="/favicon.svg" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
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
