
import { useState } from 'react';
import { Menu, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Info Bar */}
      <div className="bg-amber-100 py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-2">
            <MapPin size={16} />
            <span>10 Clarence St, Kingston upon Thames KT1 1NX</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>02081541891</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>07534482463</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>Email Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white py-4 px-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button variant="default" className="bg-amber-700 hover:bg-amber-800">
              Call Today
            </Button>
            <img src="/lovable-uploads/0bf4ceeb-3214-40ab-9c20-ea04889b89a6.png" alt="JB Roofing Logo" className="h-16" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-amber-700 transition-colors">Home</a>
            <a href="#" className="hover:text-amber-700 transition-colors">About Us</a>
            <a href="#" className="hover:text-amber-700 transition-colors">Services</a>
            <a href="#" className="hover:text-amber-700 transition-colors">Gallery</a>
            <a href="#" className="hover:text-amber-700 transition-colors">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 animate-fade-in">
            <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
              <a href="#" className="hover:text-amber-700 transition-colors">Home</a>
              <a href="#" className="hover:text-amber-700 transition-colors">About Us</a>
              <a href="#" className="hover:text-amber-700 transition-colors">Services</a>
              <a href="#" className="hover:text-amber-700 transition-colors">Gallery</a>
              <a href="#" className="hover:text-amber-700 transition-colors">Contact Us</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
