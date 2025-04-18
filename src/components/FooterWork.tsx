
import { Building2 } from 'lucide-react';

const FooterWork = () => {
  const works = [
    "Residential Projects",
    "Commercial Projects",
    "Emergency Repairs",
    "Maintenance"
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <Building2 className="h-5 w-5 text-amber-400" />
        Our Work
      </h3>
      <ul className="space-y-2">
        {works.map((work, index) => (
          <li key={index} className="hover:text-amber-400 transition-colors cursor-pointer">
            {work}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterWork;
