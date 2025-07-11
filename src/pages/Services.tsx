import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import DOMPurify from 'dompurify';
import InquiryForm from "@/components/InquiryForm";
const apiUrl = import.meta.env.VITE_API_URL;

// Interface for service details
interface ServiceDetail {
  id: number;
  service_name: string;
  description: string;
  images: string[];
}

interface ApiResponse {
  success: boolean;
  data: ServiceDetail;
  message: string;
}

const Services = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<ServiceDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    // Only fetch if we have an ID
    if (id) {
      const fetchServiceDetails = async () => {
        try {
          setLoading(true);
          const response = await fetch(`${apiUrl}/services/${id}`);

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          const data: ApiResponse = await response.json();
          
          if (data.success) {
            setService(data.data);
          } else {
            throw new Error(data.message || "Failed to fetch service details");
          }
        } catch (err) {
          console.error("Error fetching service details:", err);
          setError(err instanceof Error ? err.message : "Unknown error occurred");
        } finally {
          setLoading(false);
        }
      };
      
      fetchServiceDetails();
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <Navbar />

      {/* Hero Section with Animation */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12 md:py-20 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.1),transparent)] pointer-events-none" />
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Service</h2>
            <p className="text-gray-700 mb-4">{error}</p>
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-orange-500 hover:bg-orange-600"
            >
              Return to Home
            </Button>
          </div>
        ) : service ? (
          <>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-center mb-6 md:mb-10">
              <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                {service.service_name}
              </span>
            </h1>
            <p 
              className="text-base md:text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(service.description) }}
            ></p>
          </>
        ) : (
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-center mb-6 md:mb-10">
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Expert Roofing Solutions
            </span>
          </h1>
        )}
      </motion.section>

      {/* Service Image Gallery - Only shown when a service is loaded */}
      {service && service.images && service.images.length > 0 && (
        <section className="container mx-auto px-4 py-10 md:py-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-800"
          >
            Project Gallery
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {service.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-xl overflow-hidden shadow-lg bg-white"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={img}
                    alt={`${service.service_name} image ${i+1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {service.service_name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Fallback Gallery - Only shown when no specific service is loaded */}
      {!service && !loading && !error && (
        <section className="container mx-auto px-4 py-10 md:py-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-800"
          >
            Our Roofing Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/*
              Hardcoded fallback projects for gallery
              Ideally, this should come from a CMS or static data file
            */}
            {[
              {
                img: "/assets/roofing/grey-tiles.jpg",
                title: "Modern Grey Tiled Roof"
              },
              {
                img: "/assets/roofing/terracotta-tiles.jpg",
                title: "Classic Terracotta Tiles"
              },
              {
                img: "/assets/roofing/slate-roof.jpg",
                title: "Premium Slate Roofing"
              },
              {
                img: "/assets/roofing/modern-slate.jpg",
                title: "Contemporary Slate Design"
              },
              {
                img: "/assets/roofing/clay-tiles.jpg",
                title: "Traditional Clay Tiles"
              },
              {
                img: "/assets/roofing/black-slate.jpg",
                title: "Black Slate Installation"
              },
              {
                img: "/assets/roofing/grey-slate.jpg",
                title: "Grey Slate Finish"
              },
              {
                img: "/assets/roofing/modern-tiles.jpg",
                title: "Modern Tiling Solution"
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-xl overflow-hidden shadow-lg bg-white"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    Click to view details
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Replace the form section with InquiryForm component */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        {/* <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800"
        >
          Get Your Free Estimate
        </motion.h2> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Add the InquiryForm component with the service ID if available */}
          <InquiryForm 
            // Optional: Pre-select the current service if viewing a service page
            defaultServiceId={id}
          />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
