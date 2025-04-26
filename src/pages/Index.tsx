
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import Footer from '../components/Footer';
import ChooseUs from '@/components/ChooseUs';
import InquiryForm from '@/components/InquiryForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import Testimonials from '@/components/Testimonials';

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
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
