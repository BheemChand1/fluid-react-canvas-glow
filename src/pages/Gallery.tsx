import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
    title: "New Roof Installation",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400",
    title: "Roof Repairs",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1400",
    title: "Guttering Work",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1400",
    title: "Commercial Projects",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1400",
    title: "Residential Projects",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
          Our Work Gallery
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
  {galleryImages.map((image) => (
    <Card
      key={image.id}
      className="group cursor-pointer p-2 rounded-lg border hover:shadow-lg transition-all"
      onClick={() => setSelectedImage(image.src)}
    >
      <div className="w-full h-40 flex items-center justify-center bg-white rounded-md overflow-hidden">
        <img
          src={image.src}
          alt={image.title}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="text-center mt-2 text-sm font-semibold">{image.title}</div>
    </Card>
  ))}
</div>



        {/* Modal with animation */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              key="modal"
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                key="image"
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
