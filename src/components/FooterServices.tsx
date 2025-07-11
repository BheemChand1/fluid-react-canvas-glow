import { useState, useEffect } from 'react';
import { Briefcase, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;

interface Service {
  id: number;
  service_name: string;
}

interface ApiResponse {
  success: boolean;
  data: Service[];
}

const FooterServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}/services`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        
        if (data.success) {
          setServices(data.data);
        } else {
          throw new Error("Failed to fetch services");
        }
      } catch (err) {
        console.error("Error fetching services:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Fallback services in case API fails
  const fallbackServices = [
    { id: 1, service_name: "Roof Repairs" },
    { id: 2, service_name: "Guttering Installation" },
    { id: 3, service_name: "Fascias & Soffits" },
    { id: 4, service_name: "Chimney Repairs" }
  ];

  const displayServices = error || services.length === 0 ? fallbackServices : services;

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <Briefcase className="h-5 w-5 text-amber-400" />
        Best Services
      </h3>
      
      {loading ? (
        <div className="flex justify-center py-2">
          <Loader2 className="h-6 w-6 animate-spin text-amber-400" />
        </div>
      ) : (
        <ul className="space-y-2">
          {displayServices.map((service) => (
            <li key={service.id} className="hover:text-amber-400 transition-colors">
              <Link to={`/services/${service.id}`} className="block">
                {service.service_name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FooterServices;