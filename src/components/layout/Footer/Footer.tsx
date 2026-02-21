import { Github, Linkedin, Twitter } from 'lucide-react';

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
};

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: 'GitHub' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'LinkedIn' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
  ];

  return (
    <footer className="relative z-10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.icon as keyof typeof socialIcons];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
