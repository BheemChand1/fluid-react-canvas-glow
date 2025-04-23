
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import Footer from '../components/Footer';
import ChooseUs from '@/components/ChooseUs';
import InquiryForm from '@/components/InquiryForm';
import LocationMap from '@/components/LocationMap';

const Index = () => {
  const emblaRef = useRef(null);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <ServiceSection />
      <ChooseUs />
      <InquiryForm />
      <LocationMap />
      <Footer />
    </div>
  );
};

export default Index;
