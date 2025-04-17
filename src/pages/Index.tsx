
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Request Quote Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button className="bg-amber-700 hover:bg-amber-800">
          Request a Free Quote
        </Button>
      </div>

      {/* Main Content */}
      <Navbar />
      <Hero />
    </div>
  );
};

export default Index;
