import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";
const apiUrl = import.meta.env.VITE_API_URL;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.full_name || !formData.email || !formData.phone_number || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    
    try {
      setLoading(true);
      
      const response = await fetch(`${apiUrl}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      
      // Clear form on success
      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        message: ""
      });
      
      toast.success("Message sent successfully! We'll be in touch soon.");
    } catch (error) {
      console.error("Error sending contact form:", error);
      toast.error(error instanceof Error ? error.message : "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
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
                  <Label htmlFor="full_name" className="text-base">Name</Label>
                  <Input
                    id="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone_number" className="text-base">Phone Number</Label>
                  <Input
                    id="phone_number"
                    type="tel"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="+44 1234 567890"
                    className="bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">Message</Label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/90 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full text-lg font-medium bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 rounded-xl transition-all duration-300"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : "Send Message"}
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