import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent tracking-tight">
          Get in Touch
        </h1>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <Card className="bg-white/70 backdrop-blur-lg border-none shadow-2xl rounded-3xl">
            <CardContent className="p-10 space-y-8">
              <h2 className="text-3xl font-semibold text-gray-800">Contact Information</h2>

              <div className="space-y-6 text-gray-700 text-lg">
                <div className="flex items-start gap-5">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-full shadow-md">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>+44 7946 750364</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-full shadow-md">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>info@truetoproofing.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-full shadow-md">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p>14 Central Avenue, Hounslow, TW32QH</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-white/70 backdrop-blur-lg border-none shadow-2xl rounded-3xl">
            <CardContent className="p-10">
              <h2 className="text-3xl font-semibold mb-8 text-gray-800">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6 text-gray-700">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">Message</Label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-white/90 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full text-lg font-medium bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 rounded-xl transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
