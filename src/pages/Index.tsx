
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import Footer from '../components/Footer';

const Index = () => {
  // Create emblaRef for the ServiceSection carousel
  const emblaRef = useRef(null);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <ServiceSection emblaRef={emblaRef} />
      <Footer />
    </div>
  );
};

export default Index;
