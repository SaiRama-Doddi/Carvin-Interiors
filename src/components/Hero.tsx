import { ArrowRight, Play, Award, Star, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-orange-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-10 order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full shadow-lg">
                <Award size={16} className="md:size-[18px]" />
                <span className="font-semibold text-xs md:text-sm">Award-Winning Design Studio</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight md:leading-none tracking-tight">
                Spaces That
                <span className="block mt-2 md:mt-3 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  Inspire Life
                </span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl">
                Elevate your environment with bespoke interior design. We craft spaces that blend aesthetics with functionality.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:gap-5">
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-base md:text-lg overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={() => scrollToSection('portfolio')}
                className="group w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm text-slate-900 px-8 md:px-10 py-4 md:py-5 rounded-xl border-2 border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300 font-bold text-base md:text-lg"
              >
                <Play size={20} className="fill-slate-900" />
                <span>Watch Process</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-10">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-300" />
                <div className="relative">
                  <div className="flex items-center space-x-1 md:space-x-2 mb-1 md:mb-2">
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-600 rounded-full animate-pulse" />
                    <h3 className="text-2xl md:text-4xl font-black text-slate-900">500+</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 font-medium">Projects</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-300" />
                <div className="relative">
                  <div className="flex items-center space-x-1 md:space-x-2 mb-1 md:mb-2">
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-orange-500 rounded-full animate-pulse" />
                    <h3 className="text-2xl md:text-4xl font-black text-slate-900">15+</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 font-medium">Years</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-300" />
                <div className="relative">
                  <div className="flex items-center space-x-1 md:space-x-2 mb-1 md:mb-2">
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-600 rounded-full animate-pulse" />
                    <h3 className="text-2xl md:text-4xl font-black text-slate-900">98%</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 font-medium">Happy</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              <div className="space-y-3 md:space-y-6">
                <div className="relative group rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl hover:shadow-2xl md:hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <img
                    src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Modern Living Room"
                    className="w-full h-40 md:h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="relative group rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl hover:shadow-2xl md:hover:shadow-3xl transition-all duration-300 hover:scale-105 md:mt-12">
                  <img
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Elegant Bedroom"
                    className="w-full h-40 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="space-y-3 md:space-y-6 md:mt-12">
                <div className="relative group rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl hover:shadow-2xl md:hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <img
                    src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Contemporary Kitchen"
                    className="w-full h-40 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="relative group rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl hover:shadow-2xl md:hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <img
                    src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Stylish Workspace"
                    className="w-full h-40 md:h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white p-8 rounded-2xl shadow-2xl max-w-sm border border-slate-100">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-600 to-orange-500 p-3 rounded-lg shadow-lg flex-shrink-0">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <div className="flex items-center space-x-1 mb-1">
                    <Star size={14} className="text-orange-500 fill-orange-500" />
                    <p className="text-xs font-semibold text-blue-600">Client Testimonial</p>
                  </div>
                  <p className="font-bold text-slate-900 text-base leading-tight">
                    "Transformed our vision perfectly"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden mt-8 bg-white p-5 rounded-xl shadow-lg border border-slate-100">
          <div className="flex items-start space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-orange-500 p-2.5 rounded-lg shadow-lg flex-shrink-0">
              <Zap className="text-white" size={20} />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-1 mb-1">
                <Star size={12} className="text-orange-500 fill-orange-500" />
                <p className="text-xs font-semibold text-blue-600">Client Testimonial</p>
              </div>
              <p className="font-bold text-slate-900 text-sm leading-tight">
                "Transformed our vision perfectly"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
