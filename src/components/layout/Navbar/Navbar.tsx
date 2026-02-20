import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Portfolio</div>
        <NavLinks />
        <MobileMenu />
      </div>
    </nav>
  );
}
