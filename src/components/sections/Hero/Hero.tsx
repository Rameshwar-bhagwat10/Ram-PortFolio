import HeroContent from './HeroContent';
import HeroBackground from './HeroBackground';
import StructuredData from '@/components/seo/StructuredData';
import { PERSONAL_INFO, SITE_URL, SOCIAL_LINKS } from '@/lib/constants';

export default function Hero() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <StructuredData />
      
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4 sm:px-6 pb-0 bg-[#0F0E0E] rounded-b-[40px] sm:rounded-b-[60px] mb-0"
        aria-label={`Hero section - ${PERSONAL_INFO.name} ${PERSONAL_INFO.jobTitle}`}
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* Microdata for search engines */}
        <meta itemProp="name" content={PERSONAL_INFO.name} />
        <meta itemProp="jobTitle" content={PERSONAL_INFO.jobTitle} />
        <meta itemProp="description" content={PERSONAL_INFO.bio} />
        <meta itemProp="url" content={SITE_URL} />
        <meta itemProp="email" content={PERSONAL_INFO.email} />
        <meta itemProp="telephone" content={PERSONAL_INFO.phone} />
        <meta itemProp="image" content={`${SITE_URL}${PERSONAL_INFO.image}`} />
        {SOCIAL_LINKS.map((link) => (
          <link key={link.name} itemProp="sameAs" href={link.url} />
        ))}
        
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
          <meta itemProp="addressLocality" content={PERSONAL_INFO.location.city} />
          <meta itemProp="addressRegion" content={PERSONAL_INFO.location.state} />
          <meta itemProp="addressCountry" content={PERSONAL_INFO.location.countryCode} />
        </div>

        {/* Background Effects */}
        <HeroBackground />

        {/* Main content */}
        <HeroContent />

        {/* Gradient transition to About section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-[#0F0E0E] pointer-events-none z-[3] rounded-b-[40px] sm:rounded-b-[60px]" aria-hidden="true" />
      </section>
    </>
  );
}
