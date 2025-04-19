
import { GalleryHorizontal } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';

const services = [
  {
    title: "Residential Roofing",
    description: "Expert roofing solutions for homes of all sizes",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Commercial Projects",
    description: "Comprehensive roofing for business properties",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Emergency Repairs",
    description: "24/7 emergency roofing repair services",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
  }
];

const ServiceSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
