
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "447946750364"; // Remove spaces and add country code
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 group-hover:animate-bounce" />
      <span className="font-medium">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
