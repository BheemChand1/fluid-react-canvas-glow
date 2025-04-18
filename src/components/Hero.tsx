
import { Phone } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
];

const Hero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Image Carousel */}
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-out"
                style={{
                  backgroundImage: `url("${image}")`,
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 text-white border-white hover:bg-white/20" />
        <CarouselNext className="right-4 text-white border-white hover:bg-white/20" />
      </Carousel>

      {/* Content */}
      <div className="relative container mx-auto h-full flex items-center px-4">
        <div className="max-w-2xl text-white space-y-6 animate-fade-in">
          <h2 className="text-xl font-medium text-amber-400 animate-slide-in drop-shadow-lg hover:scale-105 transition-transform duration-300">
            Roofing And Guttering Experts
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg animate-fade-in hover:text-amber-50 transition-colors duration-300">
            Welcome To JB Roofing And Building Ltd
          </h1>
          <p className="text-lg md:text-xl opacity-90 drop-shadow-md animate-fade-in hover:opacity-100 transition-opacity duration-300">
            At JB Roofing And Building Ltd, we specialize in delivering top-quality roofing and
            guttering solutions tailored to meet your residential and commercial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <div className="flex items-center gap-2 bg-amber-700/90 hover:bg-amber-800/90 transition-all duration-300 px-6 py-3 rounded-md cursor-pointer hover:scale-105">
              <Phone size={20} />
              <span>Freephone : 07534482463</span>
            </div>
            <div className="flex items-center gap-2 bg-amber-700/90 hover:bg-amber-800/90 transition-all duration-300 px-6 py-3 rounded-md cursor-pointer hover:scale-105">
              <Phone size={20} />
              <span>Mobile : 07534482463</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
