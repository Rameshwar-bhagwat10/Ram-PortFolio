import HeroContent from './HeroContent';
import HeroButtons from './HeroButtons';
import HeroAnimation from './HeroAnimation';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <HeroContent />
        <HeroButtons />
        <HeroAnimation />
      </div>
    </section>
  );
}
