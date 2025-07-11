import { GalleryHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
const apiUrl = import.meta.env.VITE_API_URL;

// Type definitions for the API response
interface ServiceImage {
  url: string;
}

interface Service {
  id?: number; // Add id property
  service_name: string;
  description: string;
  title: string;
  images: string[];
}

interface ApiResponse {
  success: boolean;
  data: Service[];
  message: string;
}

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

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}/services`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();

        if (data.success) {
          setServices(data.data);
        } else {
          throw new Error(data.message || "Failed to fetch services");
        }
      } catch (err) {
        console.error("Error fetching services:", err);
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Add this updated handleServiceClick function to debug the issue
  const handleServiceClick = (serviceId: number | undefined) => {
    console.log("Service clicked:", serviceId);

    if (!serviceId) {
      console.error("Service ID is missing or undefined");
      // Fallback to a default service or navigate to general services page
      navigate("/services");
      return;
    }

    try {
      // Convert to number explicitly if needed (since ID comes from params)
      const id = Number(serviceId);
      console.log("Navigating to:", `/services/${id}`);
      navigate(`/services/${id}`);
    } catch (err) {
      console.error("Navigation error:", err);
    }
  };

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

        {/* Loading state */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
            <p>Failed to load services: {error}</p>
            <button
              className="mt-2 px-4 py-2 bg-red-100 hover:bg-red-200 rounded-md text-sm transition-colors"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        )}

        {/* Service Cards with enhanced effects */}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.service_name}
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
                    src={
                      service.images && service.images.length > 0
                        ? service.images[0]
                        : "/fallback-icon.png"
                    }
                    alt={service.service_name}
                    className="w-full h-40 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105 shadow-md"
                    onError={(e) => (e.currentTarget.src = "/fallback-icon.png")}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">
                      {service.service_name}
                    </h3>
                    <div
                      className="text-sm text-gray-600 mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(service.title),
                      }}
                    ></div>
                  </div>
                  <button
                    onClick={() => {
                      console.log("Button clicked for service:", service);
                      if (service.id) {
                        handleServiceClick(service.id);
                      } else {
                        console.error("This service has no ID:", service);
                      }
                    }}
                    className="mt-auto text-sm font-medium bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent flex items-center group-hover:translate-x-1 transition-transform"
                  >
                    Read More <span className="ml-1">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !error && services.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>No services available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}


