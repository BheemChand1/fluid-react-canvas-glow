
import { Phone } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { useEffect, useState } from 'react';

const images = [
  "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=2000&auto=format&fit=crop"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] overflow-hidden">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
                style={{
                  backgroundImage: `url("${image}")`,
                  opacity: currentImageIndex === index ? 1 : 0,
                }}
              >
                {/* Gradient Overlay with more depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content with enhanced typography and shadows */}
      <div className="relative container mx-auto h-full flex items-center px-4">
        <div className="max-w-2xl text-white space-y-6 animate-fade-in">
          <h2 className="text-xl font-medium text-amber-400 font-playfair drop-shadow-lg">
            Roofing And Guttering Experts
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-playfair drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
            Welcome To JB Roofing And Building Ltd
          </h1>
          <p className="text-lg md:text-xl opacity-90 font-poppins drop-shadow-md">
            At JB Roofing And Building Ltd, we specialize in delivering top-quality roofing and
            guttering solutions tailored to meet your residential and commercial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2 bg-amber-700/90 hover:bg-amber-800/90 transition-colors px-6 py-3 rounded-md cursor-pointer shadow-lg backdrop-blur-sm">
              <Phone size={20} />
              <span className="font-poppins">Freephone : 07534482463</span>
            </div>
            <div className="flex items-center gap-2 bg-amber-700/90 hover:bg-amber-800/90 transition-colors px-6 py-3 rounded-md cursor-pointer shadow-lg backdrop-blur-sm">
              <Phone size={20} />
              <span className="font-poppins">Mobile : 07534482463</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
