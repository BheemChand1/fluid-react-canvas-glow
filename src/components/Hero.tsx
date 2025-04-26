import { useEffect, useState, useCallback } from 'react';
import { Phone } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
];

const Hero = () => {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay logic
  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Carousel */}
      <div className="w-full h-full relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[2000ms] ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent md:from-black/70 z-10" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 container mx-auto h-full flex items-center px-4">
      <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl text-white space-y-3 md:space-y-6 bg-black/40 p-4 rounded-xl shadow-xl transition-all duration-500">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg hover:text-amber-50 transition-colors duration-300 font-playfair">
            Welcome To Truetop Roofing Ltd
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 drop-shadow-md hover:opacity-100 transition-opacity duration-300">
            At Truetop Roofing Ltd, we specialize in delivering top-quality roofing and
            Free Estimates & Advices All works Insured & Guaranteed.
          </p>
          <div className="flex flex-col xs:flex-row gap-2 md:gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-700/90 to-purple-800 hover:from-amber-800/90 hover:to-purple-900 transition-all duration-300 px-4 py-2 md:px-6 md:py-3 rounded-md cursor-pointer hover:shadow-lg text-sm md:text-base group"
            >
              <Phone size={isMobile ? 16 : 20} className="group-hover:animate-bounce" />
              <span>Freephone : 07534482463</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-700/90 to-purple-800 hover:from-amber-800/90 hover:to-purple-900 transition-all duration-300 px-4 py-2 md:px-6 md:py-3 rounded-md cursor-pointer hover:shadow-lg text-sm md:text-base group"
            >
              <Phone size={isMobile ? 16 : 20} className="group-hover:animate-bounce" />
              <span>Mobile : 07534482463</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
