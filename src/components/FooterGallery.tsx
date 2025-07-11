import { useState, useEffect } from 'react';
import { GalleryHorizontal, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;

interface GalleryImage {
  id: number;
  url: string;
  created_at: string;
}

interface ApiResponse {
  success: boolean;
  data: GalleryImage[];
}

const FooterGallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}/gallery`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        
        if (data.success) {
          // Only use the first 6 images
          setImages(data.data.slice(0, 6));
        } else {
          throw new Error("Failed to fetch gallery images");
        }
      } catch (err) {
        console.error("Error fetching footer gallery:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  // Fallback images in case API fails or returns empty
  const fallbackImages = [
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
      
      {loading ? (
        <div className="flex justify-center py-4">
          <Loader2 className="h-8 w-8 animate-spin text-amber-400" />
        </div>
      ) : error || images.length === 0 ? (
        // Show fallback images if there's an error or no images
        <div className="grid grid-cols-3 gap-2">
          {fallbackImages.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-md">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {images.map((image) => (
            <Link 
              key={image.id} 
              to="/gallery" 
              className="aspect-square overflow-hidden rounded-md"
            >
              <img
                src={image.url}
                alt={`Gallery thumbnail ${image.id}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </Link>
          ))}
        </div>
      )}
      
      <div className="mt-4 text-center">
        <Link 
          to="/gallery"
          className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
        >
          View Full Gallery →
        </Link>
      </div>
    </div>
  );
};

export default FooterGallery;