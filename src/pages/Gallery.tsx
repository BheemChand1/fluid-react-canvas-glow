
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
    title: "New Roof Installation"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400",
    title: "Roof Repairs"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1400",
    title: "Guttering Work"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1400",
    title: "Commercial Projects"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1400",
    title: "Residential Projects"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
          Our Work Gallery
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Card 
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img 
              src={selectedImage} 
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
