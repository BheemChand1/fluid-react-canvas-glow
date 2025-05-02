
import { GalleryHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" },
  }),
};

// Updated card background with a more vibrant gradient
const cardBg = "bg-gradient-to-br from-purple-100 via-white to-purple-50";

const serviceList = [
  {
    title: "New Roofs",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
    description: "Installation of high-quality slate and tile roofing for new constructions.",
  },
  {
    title: "Roof Repairs",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
    description: "Fixing leaks, broken tiles, and structural damage to extend roof life.",
  },
  {
    title: "Fascias & Guttering",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
    description: "UPVC fascia and gutter installations and replacements for improved drainage.",
  },
  {
    title: "Fibreglass Roofing",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
    description: "Durable and weatherproof flat roofing solutions using GRP materials.",
  },
  {
    title: "Valley Repairs",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
    description: "Rebuilding and sealing roof valleys to prevent leaks and water damage.",
  },
  {
    title: "Gutter Cleaning",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
    description: "Professional gutter cleaning to maintain proper water flow and protection.",
  },
  {
    title: "Chimney Services",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
    description: "Repointing and rebuilding chimneys to restore structural integrity.",
  },
  {
    title: "Moss Removal",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
    description: "Safe removal of moss and debris to keep your roof clean and dry.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-purple-50 to-white font-[Poppins]">
      <div className="container mx-auto px-4">
        {/* Enhanced Header with gradient text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 bg-clip-text text-transparent">
            Services We Provide
          </h2>
          <div className="flex items-center justify-center gap-2 text-purple-700">
            <GalleryHorizontal className="h-5 w-5 animate-pulse" />
            <p className="text-base font-medium">
              Reliable Roofing & Property Maintenance
            </p>
          </div>
          {/* Decorative element for visual enhancement */}
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-full mx-auto"></div>
        </motion.div>

        {/* Service Cards with enhanced effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceList.map((service, idx) => (
            <motion.div
              key={service.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              className={`group rounded-2xl border border-purple-100 shadow-sm hover:shadow-xl transition duration-300 p-5 flex flex-col justify-between ${cardBg} relative overflow-hidden`}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute -top-24 -right-24 w-40 h-40 bg-gradient-to-br from-purple-200 to-purple-50 rounded-full opacity-50 blur-xl"></div>
              
              <div className="relative z-10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105 shadow-md"
                  onError={(e) => (e.currentTarget.src = "/fallback-icon.png")}
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                </div>
                <button className="mt-auto text-sm font-medium bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent flex items-center group-hover:translate-x-1 transition-transform">
                  Read More <span className="ml-1">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
