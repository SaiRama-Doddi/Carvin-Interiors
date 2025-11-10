import { steps } from '../data/steps';
import { Check } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Our proven process ensures your project is completed on time, on budget, and exceeds expectations
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-600 to-orange-600" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-amber-500 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="relative flex-shrink-0 z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-white text-2xl font-bold">
                      {step.number}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-amber-600 rounded-full animate-ping opacity-20" />
                </div>

                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-amber-50 text-lg mb-6">
                Let's discuss your project and create something amazing together
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Check size={20} className="flex-shrink-0" />
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check size={20} className="flex-shrink-0" />
                  <span>Detailed project proposal</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check size={20} className="flex-shrink-0" />
                  <span>Transparent pricing</span>
                </li>
              </ul>
            </div>
           <div className="flex justify-center md:justify-end">


              <a
          href="#contact"
          className="inline-block bg-white text-amber-700 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-amber-100 hover:text-amber-800 transition-colors"
        >
  <button
    onClick={() =>
      (window.location.href = "mailto:carvininteriors@gmail.com?subject=Consultation%20Request&body=Hi%20Carving%20Interiors,%0D%0A%0DI’d%20like%20to%20schedule%20a%20consultation.%0D%0A%0D%0AThank%20you!")
    }
    className=" px-8 py-4 rounded-l transition-colors cursor-pointer duration-300 font-medium text-lg "
  >
    Schedule Consultation
  </button>
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
