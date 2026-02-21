import HeroContent from './HeroContent';
import HeroBackground from './HeroBackground';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-6 pb-0 bg-[#0F0E0E] rounded-b-[60px] mb-0"
    >
      {/* Background Effects */}
      <HeroBackground />

      {/* Main content */}
      <HeroContent />

      {/* Gradient transition to About section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0F0E0E] pointer-events-none z-[3] rounded-b-[60px]" />
    </section>
  );
}
