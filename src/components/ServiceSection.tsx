import { GalleryHorizontal } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const defaultServices = [
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

export default function ServicesSection({ services = defaultServices, emblaRef }) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 font-[Poppins]">
      {/* Services Heading */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent mb-4 tracking-tight">
            Services We Provide
          </h2>
          <div className="flex items-center justify-center gap-2 text-amber-600">
            <GalleryHorizontal className="h-6 w-6 animate-bounce" />
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              Professional Roofing Solutions
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </AspectRatio>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
            Our Gallery
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Explore Our Recent Projects
          </p>
        </motion.div>

        <div className="w-full max-w-6xl mx-auto overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {services.map((item, index) => (
              <motion.div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="p-2">
                  <AspectRatio ratio={1}>
                    <img
                      src={item.image}
                      alt={`Gallery image ${index + 1}`}
                      className="rounded-xl object-cover w-full h-full hover:scale-105 transition-transform duration-300 shadow-md"
                    />
                  </AspectRatio>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
