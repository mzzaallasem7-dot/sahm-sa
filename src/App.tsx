import { Header } from './components/header';
import { PhotorealisticEditorialHero } from './components/PhotorealisticEditorialHero';
import { TextRevealSection } from './components/textRevealSection';
import { CompanyPartnersicker } from './components/CompanyPartnersticker';
import { SelectedWork } from './components/SelectedWork';
import { AboutLanyardPass } from './components/AboutLanyardPass';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/footer';

export default function App() {
  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-[#FAFF7F]/40 selection:text-zinc-950 font-sans">
      {/* Top Bar Header with Navigation */}
      <Header onStartProject={scrollToContact} />

      <main>
        {/* Photorealistic Editorial Hero (Curved Arc Carousel) */}
        <PhotorealisticEditorialHero
          onExploreWork={scrollToWork}
          onStartProject={scrollToContact}
        />

        {/* Text Reveal on Scroll (Spatial Design Practice & Services Philosophy) */}
        <TextRevealSection />

        {/* Selected Work (Editorial Grid without modals or details) */}
        <SelectedWork />

        {/* Company Partners Marquee (Famous brands KFC, Apple, etc.) */}
        <CompanyPartnersicker />

        {/* About the Designer Interactive Lanyard Pass (400vh Sticky Scroll with 3D RealFolder) */}
        <AboutLanyardPass />

        {/* Client Testimonials & Reviews Section */}
        <TestimonialsSection />

        {/* Contact & Consultation Booking Form */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
