import { useEffect, useCallback } from 'react';
import { GalleryHorizontal } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';
import useEmblaCarousel from 'embla-carousel-react';

const services = [
  {
    title: "Residential Roofing",
    description: "Expert roofing solutions for homes",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Commercial Projects",
    description: "Business property solutions",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Emergency Repairs",
    description: "24/7 emergency services",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
  },
  {
    title: "Roof Maintenance",
    description: "Regular maintenance services",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Gutter Services",
    description: "Complete gutter solutions",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Roof Inspection",
    description: "Detailed roof assessments",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
  }
];

const ServiceSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  // Auto-rotation logic
  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    
    const timer = setTimeout(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
      autoplay();
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    autoplay();
    
    return () => {
      // Cleanup autoplay on unmount
    };
  }, [emblaApi, autoplay]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services We Provide
          </h2>
          <div className="flex items-center justify-center gap-2 text-amber-600">
            <GalleryHorizontal className="h-6 w-6" />
            <p className="text-lg text-gray-600">
              Professional Roofing Solutions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </AspectRatio>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600">
            Explore Our Recent Projects
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {services.map((item, index) => (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 transition-all duration-500">
                <div className="p-1">
                  <AspectRatio ratio={1}>
                    <img
                      src={item.image}
                      alt={`Gallery image ${index + 1}`}
                      className="rounded-lg object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
