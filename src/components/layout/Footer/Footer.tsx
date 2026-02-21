import { SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t bg-background/50 backdrop-blur-sm" style={{ borderColor: 'rgba(255, 255, 255, 0.06)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors duration-200"
                aria-label={social.name}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
