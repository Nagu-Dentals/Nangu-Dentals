import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Loader } from './components/Loader';
import { PromoBanner } from './components/PromoBanner';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TrustBadges } from './components/TrustBadges';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Team } from './components/Team';
import { WhyUs } from './components/WhyUs';
import { Gallery } from './components/Gallery';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { Booking } from './components/Booking';
import { FAQ } from './components/FAQ';
import { Articles } from './components/Articles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MapModal } from './components/MapModal';
import { FloatingCTA } from './components/FloatingCTA';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mapModalOpen, setMapModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-[#fcfdff] font-['Plus_Jakarta_Sans'] overflow-x-hidden">
      <Loader isVisible={loading} />
      <PromoBanner />
      <Navigation onMapClick={() => setMapModalOpen(true)} />
      <Hero />
      <TrustBadges />
      <About />
      <Services />
      <Stats />
      <Team />
      <WhyUs />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
      <Booking />
      <FAQ />
      <Articles />
      <Contact />
      <Footer />
      <MapModal isOpen={mapModalOpen} onClose={() => setMapModalOpen(false)} />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
}