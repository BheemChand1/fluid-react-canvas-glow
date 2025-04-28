import { useState } from 'react';
import { Menu, Phone, Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const services = [
  "New roofs (slate / tile)",
  "Roof repairs",
  "UPVC fascias & guttering",
  "GRP fibreglass flat roofing",
  "Valleys repaired & renewed",
  "Gutters cleaned & repaired",
  "Chimneys rebuilt & repointed",
  "Moss removed",
  "Roof cleaning (jet washing)",
  "All building work",
  "Exterior pointing & rendering",
  "All damp work undertaken",
  "All flat roofs covered"
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleServicesToggle = () => {
    setServicesOpen((prev) => !prev);
  };

  return (
    <div className="w-full font-poppins">
      {/* Top Info Bar - Now fully visible on mobile */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-3 px-4 text-sm text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2 w-full justify-center md:justify-start">
            <MapPin size={16} />
            <span className="text-xs sm:text-sm">14 Central Avenue, Hounslow, TW32QH</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-end w-full">
            {/* <div className="flex items-center space-x-2 hover:text-purple-300 transition-colors">
              <Phone size={16} />
              <span className="text-xs sm:text-sm">Landline: +44 7946 750364</span>
            </div> */}
            <div className="flex items-center space-x-2 hover:text-purple-300 transition-colors">
              <Phone size={16} />
              <span className="text-xs sm:text-sm">Mobile: +44 7946 750364</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-purple-300 transition-colors">
              <Mail size={16} />
              <span className="text-xs sm:text-sm">Email Us : Truetoproofingltdltd@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white py-2 px-2 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">

  <img 
    src="/lovable-uploads/0bf4ceeb-3214-40ab-9c20-ea04889b89a6.png" 
    alt="JB Roofing Logo" 
    className="h-24 w-auto object-contain" 
  />


          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-purple-700 transition-colors font-medium" >Home</Link>
            <Link to="/about" className="hover:text-purple-700 transition-colors font-medium">About Us</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-purple-700 transition-colors font-medium">
                Services <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service} className="cursor-pointer hover:bg-purple-50">
                    {service}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/gallery" className="hover:text-purple-700 transition-colors font-medium">Gallery</Link>
            <Link to="/contact" className="hover:text-purple-700 transition-colors font-medium">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden text-purple-700">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-gradient-to-b from-purple-50 to-white">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold text-purple-800">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-6">
                <Link to="/" className="text-lg font-medium text-gray-800 hover:text-purple-700 transition-colors">Home</Link>
                <Link to="/about" className="text-lg font-medium text-gray-800 hover:text-purple-700 transition-colors">About Us</Link>
                {/* Expandable Services submenu for mobile */}
                <div>
                  <button
                    aria-expanded={servicesOpen}
                    aria-controls="services-submenu"
                    className="w-full flex items-center justify-between text-lg font-medium text-gray-800 hover:text-purple-700 transition-colors focus:outline-none"
                    onClick={handleServicesToggle}
                  >
                    <span>Services</span>
                    {servicesOpen ? (
                      <ChevronUp size={18} className="transition-transform duration-200" />
                    ) : (
                      <ChevronDown size={18} className="transition-transform duration-200" />
                    )}
                  </button>
                  <div
                    id="services-submenu"
                    className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="ml-4 mt-2 flex flex-col gap-3">
                      {services.map((service) => (
                        <a
                          key={service}
                          href="#"
                          className="text-gray-600 hover:text-purple-700 transition-colors py-1"
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <Link to="/gallery" className="text-lg font-medium text-gray-800 hover:text-purple-700 transition-colors">Gallery</Link>
                <Link to="/contact" className="text-lg font-medium text-gray-800 hover:text-purple-700 transition-colors">Contact Us</Link>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="space-y-4">
                    {/* <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={18} />
                      <span>+44 7946 750364</span>
                    </div> */}
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={18} />
                      <span>+44 7946 750364</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail size={18} />
                      <span>Email Us : Truetoproofingltdltd@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={18} />
                      <span className="text-sm">14 Central Avenue, Hounslow, TW32QH</span>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
