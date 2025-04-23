
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import Footer from '../components/Footer';
import ChooseUs from '@/components/ChooseUs';
import InquiryForm from '@/components/InquiryForm';

const Index = () => {
  // Create emblaRef for the ServiceSection carousel
  const emblaRef = useRef(null);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <ServiceSection />
      <ChooseUs />
      <InquiryForm />
      <Footer />
    </div>
  );
};

export default Index;
