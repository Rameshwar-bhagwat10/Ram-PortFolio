import Container from '@/components/layout/Container';
import AboutHeader from './AboutHeader';
import ProfileCard from './ProfileCard';
import AboutStory from './AboutStory';
import StatsGrid from './StatsGrid';
import TimelineStrip from './TimelineStrip';

export default function About() {
  return (
    <section 
      id="about" 
      className="relative pt-16 pb-32 px-6 bg-[#0F0E0E] overflow-hidden"
    >
      {/* Subtle background glow */}
      <div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />

      <Container>
        {/* Header */}
        <AboutHeader />

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Top Row - Profile/Stats on Left, Story on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Profile + Stats */}
            <div className="flex flex-col items-center space-y-8">
              {/* Profile */}
              <ProfileCard />
              
              {/* Stats */}
              <div className="w-full max-w-md">
                <StatsGrid />
              </div>
            </div>

            {/* Right Side - Story with more content */}
            <div className="flex items-stretch">
              <AboutStory />
            </div>
          </div>

          {/* Timeline Strip */}
          <div className="mb-16">
            <TimelineStrip />
          </div>

          {/* Vision Statement */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl text-white/80 leading-relaxed">
              Focused on building the next generation of AI-driven products that 
              empower teams and transform how we work.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
