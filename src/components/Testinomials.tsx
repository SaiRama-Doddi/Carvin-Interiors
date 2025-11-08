import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Aarav S.",
    role: "Villa Owner",
    initials: "AS",
    text:
      "Carvin Interiors brought our vision to life! The living room now feels larger and welcoming. Their team is creative and responsive.",
  },
  {
    name: "Meghana R.",
    role: "Corporate Client",
    initials: "MR",
    text:
      "The new workspace design has boosted both comfort and productivity at our office. Carvin made the process effortless and inspiring.",
  },
  {
    name: "Vikram T.",
    role: "Apartment Owner",
    initials: "VT",
    text:
      "From concept to completion, every detail was managed with care. I love my new kitchen—smart storage and bright aesthetics!",
  },
  {
    name: "Priya N.",
    role: "Retail Owner",
    initials: "PN",
    text:
      "Our shop now gets more compliments than ever. The interiors are both practical and visually stunning. Highly recommended!",
  },
  {
    name: "Deepak R.",
    role: "Home Renovator",
    initials: "DR",
    text:
      "Exceptional service and modern design trends! Carvin Interiors exceeded my expectations and added true value to my house.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const cardWidth = 340;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    scrollRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-gradient-to-br from-[#FFFDF8] to-[#F2F2F2] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-700 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories and honest opinions from clients who have chosen <span className="text-amber-700 font-medium">Carvin Interiors</span>.
          </p>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-8 top-1/2 -translate-y-1/2 text-white bg-amber-500 rounded-full shadow-lg p-3 hover:bg-amber-700 z-10 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-8 top-1/2 -translate-y-1/2 text-white bg-amber-500 rounded-full shadow-lg p-3 hover:bg-amber-700 z-10 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>
            {`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="min-w-[320px] max-w-[340px] bg-white p-6 rounded-2xl shadow-lg border-l-4 border-amber-500 flex flex-col justify-between relative"
            >
              {/* Author Section */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full flex items-center justify-center bg-amber-100 text-amber-700 font-bold text-lg shadow">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              {/* Quote / Review Content */}
              <div className="mb-6 flex flex-col justify-between h-48">
  <span className="text-amber-400 text-3xl font-serif mb-2 block">“</span>
  <p className="text-gray-700 text-base leading-relaxed mb-2 flex-grow">
    {testimonial.text}
  </p>
  <div className="flex space-x-1 mt-auto">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
</div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
