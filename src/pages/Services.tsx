import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Services = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <Navbar />

      {/* Hero Section with Animation */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12 md:py-20 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.1),transparent)] pointer-events-none" />
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-center mb-6 md:mb-10">
          <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Expert Roofing Solutions
          </span>
        </h1>
        <p className="text-base md:text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          We deliver premium roofing installations, repairs, and maintenance with precision and care. 
          Our expert team ensures your roof is built to withstand the elements and stand the test of time.
        </p>
      </motion.section>

      {/* Enhanced Photo Gallery Section */}
      <section className="container mx-auto px-4 py-10 md:py-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-800"
        >
          Our Roofing Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              img: "/assets/roofing/grey-tiles.jpg",
              title: "Modern Grey Tiled Roof"
            },
            {
              img: "/assets/roofing/terracotta-tiles.jpg",
              title: "Classic Terracotta Tiles"
            },
            {
              img: "/assets/roofing/slate-roof.jpg",
              title: "Premium Slate Roofing"
            },
            {
              img: "/assets/roofing/modern-slate.jpg",
              title: "Contemporary Slate Design"
            },
            {
              img: "/assets/roofing/clay-tiles.jpg",
              title: "Traditional Clay Tiles"
            },
            {
              img: "/assets/roofing/black-slate.jpg",
              title: "Black Slate Installation"
            },
            {
              img: "/assets/roofing/grey-slate.jpg",
              title: "Grey Slate Finish"
            },
            {
              img: "/assets/roofing/modern-tiles.jpg",
              title: "Modern Tiling Solution"
            }
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  Click to view details
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modern Inquiry Form Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800"
        >
          Get Your Free Estimate
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-3xl mx-auto bg-white/80 backdrop-blur-xl border-none shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-6 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="h-12 bg-white/90 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="h-12 bg-white/90 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">Project Details</Label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-white/90 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your roofing needs..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:scale-[0.98]"
                >
                  Request Free Estimate
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
