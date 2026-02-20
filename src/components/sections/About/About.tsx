import AboutStats from './AboutStats';
import AboutTimeline from './AboutTimeline';
import AboutCard from './AboutCard';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <AboutCard />
        <AboutStats />
        <AboutTimeline />
      </div>
    </section>
  );
}
