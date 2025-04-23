
import { Mail, MapPin, Phone } from 'lucide-react';
import FooterGallery from './FooterGallery';
import FooterServices from './FooterServices';
import FooterWork from './FooterWork';
import FooterInquiry from './FooterInquiry';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Truetop Roofing Ltd</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span>14 Central Avenue, Hounslow, TW32QH</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-amber-400" />
                <span>+44 7946 750364</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-amber-400" />
                <span>Truetoproofingltdltd@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <FooterGallery />

          {/* Services and Work */}
          <div className="space-y-8">
            <FooterServices />
            <FooterWork />
          </div>

          {/* Inquiry Form */}
          <FooterInquiry />
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 mt-8 border-t border-gray-800">
          <p className="text-sm">
            © {new Date().getFullYear()} Truetop Roofing Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
