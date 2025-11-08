import { useState } from 'react';
import { services } from '../data/services';
import {
  Home,
  Briefcase,
  Star,
  Grid3x3,
  Paintbrush,
  Layers,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// ✅ Explicit icon mapping — all icons exist in lucide-react
const iconMap: Record<string, React.ElementType> = {
  Home,
  Briefcase,
  Star,
  Grid3x3,
  Paintbrush,
  Layers
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLearnMore = (serviceId: number) => {
    setSelectedService(serviceId);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedService(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const service = services.find((s) => s.id === selectedService);
    if (service) {
      setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
    }
  };

  const prevImage = () => {
    const service = services.find((s) => s.id === selectedService);
    if (service) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + service.images.length) % service.images.length
      );
    }
  };

  const selectedServiceData = services.find((s) => s.id === selectedService);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            What We <span className="text-amber-600">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive interior design solutions crafted to bring your vision to life
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Layers; // fallback

            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl">
                    <IconComponent className="text-amber-600" size={32} />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-200 mb-4">{service.description}</p>
                  </div>
                </div>

                {/* Features + Button */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-700 font-medium text-center hover:bg-amber-50 hover:text-amber-700 transition-colors duration-300"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleLearnMore(service.id)}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    View Gallery & Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedService && selectedServiceData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-sm p-3 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              <X size={24} className="text-gray-900" />
            </button>

            {/* Image Carousel */}
            <div className="relative h-96 md:h-[500px] bg-gray-900">
              <img
                src={selectedServiceData.images[currentImageIndex]}
                alt={`${selectedServiceData.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Prev / Next buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
              >
                <ChevronLeft size={24} className="text-gray-900" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
              >
                <ChevronRight size={24} className="text-gray-900" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedServiceData.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Service Details */}
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                {(() => {
                  const Icon = iconMap[selectedServiceData.icon] || Layers;
                  return (
                    <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-4 rounded-2xl flex-shrink-0">
                      <Icon className="text-amber-600" size={40} />
                    </div>
                  );
                })()}

                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-3">
                    {selectedServiceData.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {selectedServiceData.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  What's Included
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedServiceData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl"
                    >
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
