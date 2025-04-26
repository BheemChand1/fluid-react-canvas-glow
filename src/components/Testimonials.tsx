import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  date: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mark Stimpson",
    text: "They replaced our roof, fascia, and guttering. The team was professional from start to finish, keeping us informed with updates and photos. The Director visited regularly, answering all our questions. They even provided the building regulations certificate on the same day.",
    date: "April 12, 2024",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 2,
    name: "Jane Doe",
    text: "Amazing service and attention to detail. The work was completed on time and exceeded our expectations.",
    date: "March 18, 2024",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 3,
    name: "Michael Green",
    text: "Top-class professionalism and support from the team. Highly recommend for roofing services!",
    date: "February 22, 2024",
    avatar: "https://i.pravatar.cc/150?img=5",
  }
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gray-200 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-200 via-gray-100 to-white">
      <div className="container mx-auto px-4">
      <div className="text-center mb-12">
  <div className="flex justify-center items-center gap-2 mb-3">
    <img src="/google-icon.png" alt="Google" className="w-6 h-6" />
    <span className="text-base font-medium text-gray-700">Google</span>
    <span className="text-base font-medium text-gray-400">|</span>
    <span className="text-base font-medium text-gray-700">Google Reviews</span>
  </div>
  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
    What People Are Saying
  </h2>
  <p className="text-lg text-gray-500 max-w-2xl mx-auto">
    Honest feedback from our happy clients, straight from <span className="text-blue-600 font-medium">Google</span>.
  </p>
</div>


        <div className="max-w-2xl mx-auto">
          <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-4 object-cover shadow-md"
                />
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <div className="flex items-center text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-4">"{testimonial.text}"</p>
              <div className="flex items-center gap-2 mt-4">
                <img src="/google-verified.png" alt="Verified" className="w-4 h-4" />
                <span className="text-sm text-gray-500">Verified Google Review</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
