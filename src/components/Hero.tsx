
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto h-full flex items-center px-4">
        <div className="max-w-2xl text-white space-y-6 animate-fade-in">
          <h2 className="text-xl font-medium text-amber-400">
            Roofing And Guttering Experts
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome To JB Roofing And Building Ltd
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            At JB Roofing And Building Ltd, we specialize in delivering top-quality roofing and
            guttering solutions tailored to meet your residential and commercial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2 bg-amber-700/90 hover:bg-amber-800/90 transition-colors px-6 py-3 rounded-md cursor-pointer">
              <Phone size={20} />
              <span>Freephone : 07534482463</span>
            </div>
            <div className="flex items-center gap-2 bg-amber-700/90 hover:bg-amber-800/90 transition-colors px-6 py-3 rounded-md cursor-pointer">
              <Phone size={20} />
              <span>Mobile : 07534482463</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
