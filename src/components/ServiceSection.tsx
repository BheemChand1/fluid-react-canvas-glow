
import { GalleryHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.11, duration: 0.5, ease: "easeOut" },
  }),
};

// Use a set of visually attractive gradients for the cards
const gradients = [
  "bg-gradient-to-br from-[#f97316]/90 via-[#fbbf24]/90 to-[#fde68a]/90",
  "bg-gradient-to-br from-[#8B5CF6]/80 via-[#9b87f5]/80 to-[#D6BCFA]/80",
  "bg-gradient-to-br from-[#34d399]/90 via-[#6ee7b7]/90 to-[#d1fae5]/90",
  "bg-gradient-to-tl from-[#0ea5e9]/80 via-[#4f46e5]/80 to-[#fbcfe8]/80",
  "bg-gradient-to-tr from-[#ec4899]/80 via-[#f472b6]/80 to-[#f9a8d4]/80",
  "bg-gradient-to-r from-[#9f7aea]/80 via-[#f6e05e]/80 to-[#48bb78]/80",
  "bg-gradient-to-bl from-[#f472b6]/80 via-[#c084fc]/80 to-[#9333ea]/80",
  "bg-gradient-to-r from-[#d97706]/80 via-[#fbbf24]/80 to-[#fde68a]/80",
  "bg-gradient-to-r from-[#f59e42]/80 via-[#f08fc0]/80 to-[#a1c4fd]/80",
  "bg-gradient-to-tr from-[#fca5a5]/80 via-[#fdba74]/80 to-[#fef3c7]/80",
  "bg-gradient-to-br from-[#7E69AB]/90 via-[#D6BCFA]/90 to-[#FDE1D3]/90",
  "bg-gradient-to-tl from-[#38bdf8]/90 via-[#818cf8]/90 to-[#a7f3d0]/90",
];

const serviceList = [
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

export default function ServicesSection({ emblaRef }: { emblaRef?: React.Ref<HTMLDivElement> }) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 font-[Poppins]">
      {/* Services Heading */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
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
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {serviceList.map((service, idx) => (
            <motion.div
              key={service}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-400 p-6 text-center min-h-[100px] flex items-center justify-center font-semibold text-base md:text-lg text-gray-900  ${gradients[idx % gradients.length]} border-2 border-white/30 hover:scale-105`}
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
