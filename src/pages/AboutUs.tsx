import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Smile, Hammer } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent tracking-tight">
            About Truetop Roofing Ltd
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop"
                alt="Roofing Team"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="space-y-10">
              <Card className="bg-white/70 backdrop-blur-md border-none shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Story</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    With over 20 years in the industry, Truetop Roofing Ltd stands tall in the field of
                    roofing solutions. Our journey has been built on trust, craftsmanship, and an unwavering
                    commitment to excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-md border-none shadow-lg rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Core Values</h3>
                  <ul className="space-y-4 text-gray-700 text-lg">
                    <li className="flex items-center gap-4">
                      <Hammer className="text-yellow-500 w-6 h-6" />
                      Quality Craftsmanship
                    </li>
                    <li className="flex items-center gap-4">
                      <Smile className="text-orange-500 w-6 h-6" />
                      Customer Satisfaction
                    </li>
                    <li className="flex items-center gap-4">
                      <ShieldCheck className="text-red-500 w-6 h-6" />
                      Professional Excellence
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mb-20">
  <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Location</h2>
  <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
    <iframe
      title="Truetop Roofing Ltd Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9938.364362154728!2d-0.37429508786656613!3d51.46955091830059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760c7089c683c9%3A0x3e1c497e0e23b8a2!2s14%20Central%20Ave%2C%20Hounslow%20TW3%202QH%2C%20UK!5e0!3m2!1sen!2suk!4v1713872261851!5m2!1sen!2suk"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

      <Footer />
    </div>
  );
};

export default AboutUs;
