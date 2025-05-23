
import { MessageSquare, Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "447946750364"; // Remove spaces and add country code
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 md:flex-row">
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group backdrop-blur-sm"
        aria-label="Call us now"
      >
        <Phone className="w-6 h-6 group-hover:animate-pulse" />
        <span className="font-medium relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white/70 after:transition-all after:duration-300 group-hover:after:w-full">
          Talk Now
        </span>
      </a>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group backdrop-blur-sm"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 group-hover:animate-bounce" />
        <span className="font-medium relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white/70 after:transition-all after:duration-300 group-hover:after:w-full">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
