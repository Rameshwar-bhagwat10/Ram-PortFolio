export default function NavLinks() {
  const links = ['About', 'Skills', 'Work', 'Contact'];
  
  return (
    <div className="hidden md:flex gap-6">
      {links.map((link) => (
        <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-primary">
          {link}
        </a>
      ))}
    </div>
  );
}
