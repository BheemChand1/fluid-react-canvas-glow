
import { Briefcase } from 'lucide-react';

const FooterServices = () => {
  const services = [
    "Roof Repairs",
    "Guttering Installation",
    "Fascias & Soffits",
    "Chimney Repairs"
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <Briefcase className="h-5 w-5 text-amber-400" />
        Best Services
      </h3>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="hover:text-amber-400 transition-colors cursor-pointer">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterServices;
