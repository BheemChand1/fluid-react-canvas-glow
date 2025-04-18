
import { GalleryHorizontal } from 'lucide-react';

const FooterGallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <GalleryHorizontal className="h-5 w-5 text-amber-400" />
        Gallery
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-md">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterGallery;
