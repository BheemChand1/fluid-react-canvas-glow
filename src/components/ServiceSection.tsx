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

const cardBg = "bg-[radial-gradient(circle_at_top_left,_#9333ea33,_#ffffff)]";


const serviceList = [
  {
    title: "New Roofs",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop ",
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
  // {
  //   title: "Roof Cleaning",
  //   image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
  //   description: "Jet washing and soft washing to restore roof appearance and function.",
  // },
  // {
  //   title: "Building Work",
  //   image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
  //   description: "All types of domestic building projects with quality craftsmanship.",
  // },
  // {
  //   title: "Rendering & Pointing",
  //   image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
  //   description: "Exterior surface restoration for weather resistance and clean finishes.",
  // },
  // {
  //   title: "Damp Work",
  //   image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
  //   description: "Diagnosis and treatment of rising and penetrating damp issues.",
  // },
  // {
  //   title: "Flat Roofs",
  //   image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
  //   description: "Complete flat roof installations and refurbishments with premium materials.",
  // },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50 font-[Poppins]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Services We Provide
          </h2>
          <div className="flex items-center justify-center gap-2 text-purple-700">
            <GalleryHorizontal className="h-5 w-5 animate-pulse" />
            <p className="text-base font-medium">
              Reliable Roofing & Property Maintenance
            </p>
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceList.map((service, idx) => (
            <motion.div
              key={service.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              className={`group rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 p-5 flex flex-col justify-between ${cardBg}`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105"
                onError={(e) => (e.currentTarget.src = "/fallback-icon.png")}
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{service.description}</p>
              </div>
              <button className="mt-auto text-sm font-medium text-purple-700 hover:text-purple-900 transition">
                Read More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
