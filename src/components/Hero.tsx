
import { Phone } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const images = [
  "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
];

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Image Carousel */}
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="w-full h-full">
                <img 
                  src={image}
                  alt={`Hero image ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent md:from-black/70" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute z-10 inset-0 flex items-center justify-between px-2 md:px-4">
          <CarouselPrevious className="h-8 w-8 md:h-10 md:w-10 relative left-0 text-white border-white hover:bg-white/20" />
          <CarouselNext className="h-8 w-8 md:h-10 md:w-10 relative right-0 text-white border-white hover:bg-white/20" />
        </div>
      </Carousel>

      {/* Content */}
      <div className="absolute inset-0 z-20 container mx-auto h-full flex items-center px-4">
        <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl text-white space-y-3 md:space-y-6">
          <h2 className="text-base md:text-xl font-medium text-amber-400 drop-shadow-lg hover:scale-105 transition-transform duration-300">
            Roofing And Guttering Experts
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg hover:text-amber-50 transition-colors duration-300 font-playfair">
            Welcome To JB Roofing And Building Ltd
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 drop-shadow-md hover:opacity-100 transition-opacity duration-300">
            At JB Roofing And Building Ltd, we specialize in delivering top-quality roofing and
            guttering solutions tailored to meet your residential and commercial needs.
          </p>
          <div className="flex flex-col xs:flex-row gap-2 md:gap-4">
            <div className="flex items-center gap-1 md:gap-2 bg-amber-700/90 hover:bg-amber-800/90 transition-all duration-300 px-3 py-2 md:px-6 md:py-3 rounded-md cursor-pointer hover:scale-105 text-sm md:text-base">
              <Phone size={isMobile ? 16 : 20} />
              <span>Freephone : 07534482463</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 bg-amber-700/90 hover:bg-amber-800/90 transition-all duration-300 px-3 py-2 md:px-6 md:py-3 rounded-md cursor-pointer hover:scale-105 text-sm md:text-base">
              <Phone size={isMobile ? 16 : 20} />
              <span>Mobile : 07534482463</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
