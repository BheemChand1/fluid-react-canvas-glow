
import { useState } from 'react';
import { Menu, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  "Roof Repairs",
  "Guttering Services",
  "Flat Roofing",
  "Emergency Repairs",
  "Roof Inspections",
  "Chimney Repairs"
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full font-poppins">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-700 py-2 px-4 text-sm text-white">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-2">
            <MapPin size={16} />
            <span>10 Clarence St, Kingston upon Thames KT1 1NX</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2 hover:text-amber-200 transition-colors">
              <Phone size={16} />
              <span>02081541891</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-amber-200 transition-colors">
              <Phone size={16} />
              <span>07534482463</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-amber-200 transition-colors">
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
            <img src="/lovable-uploads/0bf4ceeb-3214-40ab-9c20-ea04889b89a6.png" alt="JB Roofing Logo" className="h-16" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-amber-700 transition-colors font-medium">Home</a>
            <a href="#" className="hover:text-amber-700 transition-colors font-medium">About Us</a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-amber-700 transition-colors font-medium">
                Services <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service} className="cursor-pointer hover:bg-amber-50">
                    {service}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#" className="hover:text-amber-700 transition-colors font-medium">Gallery</a>
            <a href="#" className="hover:text-amber-700 transition-colors font-medium">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 animate-fade-in">
            <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
              <a href="#" className="hover:text-amber-700 transition-colors font-medium">Home</a>
              <a href="#" className="hover:text-amber-700 transition-colors font-medium">About Us</a>
              <div className="flex flex-col gap-2">
                <span className="font-medium">Services</span>
                {services.map((service) => (
                  <a 
                    key={service}
                    href="#" 
                    className="pl-4 hover:text-amber-700 transition-colors"
                  >
                    {service}
                  </a>
                ))}
              </div>
              <a href="#" className="hover:text-amber-700 transition-colors font-medium">Gallery</a>
              <a href="#" className="hover:text-amber-700 transition-colors font-medium">Contact Us</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
