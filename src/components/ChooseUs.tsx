import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    id: "01",
    title: "Tailored Solutions",
    description: "We customize our services to meet your unique roofing and guttering needs.",
  },
  {
    id: "02",
    title: "Innovative Techniques",
    description: "We use the latest technologies for long-lasting, high-performance results.",
  },
  {
    id: "03",
    title: "End-to-End Service",
    description: "From consultation to post-project care, we manage everything for you.",
  },
  {
    id: "04",
    title: "Ongoing Support",
    description: "We offer continued support and maintenance for your peace of mind.",
  },
];

const ChooseUs = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gradient-to-b from-white to-gray-100 text-black rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full h-12 w-12 flex items-center justify-center mr-4 shadow-md">
                  {feature.id}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-700 via-gray-900 to-black p-8 text-center shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop"
            alt="Roofing Background"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              Why Choose Truetop Roofing Ltd?
            </h2>
            <p className="mb-6 text-sm text-gray-300 leading-relaxed">
              At Truetop Roofing Ltd, we believe in providing more than just
              roofing and guttering services—we offer lasting peace of mind. Here’s why
              homeowners and businesses trust us:
            </p>
           <Link
      to="/contact"
      className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-md inline-block"
    >
      Contact Us
    </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
