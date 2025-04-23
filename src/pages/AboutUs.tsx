
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
            About Truetop Roofing Ltd
          </h1>
          
          <div className="grid gap-8 md:grid-cols-2 items-center mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop"
                alt="Roofing Team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Story</h3>
                  <p className="text-gray-600 leading-relaxed">
                    With over 20 years of experience in the roofing industry, Truetop Roofing Ltd has 
                    established itself as a trusted name in professional roofing services. Our commitment 
                    to quality workmanship and customer satisfaction has made us the go-to choice for 
                    homeowners and businesses alike.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Values</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-yellow-500 rounded-full"></span>
                      Quality Craftsmanship
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-orange-500 rounded-full"></span>
                      Customer Satisfaction
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-red-500 rounded-full"></span>
                      Professional Excellence
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
