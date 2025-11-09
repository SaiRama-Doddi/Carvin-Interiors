import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Carvin <span className="text-amber-600">Interiors</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming spaces into beautiful, functional environments that inspire and delight.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-amber-600 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-amber-600 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-amber-600 transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-amber-600 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-amber-600 transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-amber-600 transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="hover:text-amber-600 transition-colors duration-300"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="hover:text-amber-600 transition-colors duration-300"
                >
                  How It Works
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li className="hover:text-amber-600 transition-colors duration-300">Living Space Design</li>
              <li className="hover:text-amber-600 transition-colors duration-300">Functional Areas</li>
              <li className="hover:text-amber-600 transition-colors duration-300">Private Spaces</li>
              <li className="hover:text-amber-600 transition-colors duration-300">Epoxy Flooring</li>
              <li className="hover:text-amber-600 transition-colors duration-300">Painting Services</li>
              <li className="hover:text-amber-600 transition-colors duration-300">False Ceiling</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-amber-600 flex-shrink-0 mt-1" />
                <span>Flat-202, Vijaya Durga Towers, Mahatma Gandhi Inner Ring Rd, Reddypalem Guntur, Andhra Pradesh 522509</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-amber-600 flex-shrink-0" />
                <span>+91 9398360804</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-amber-600 flex-shrink-0" />
                <span>carvininteriors@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {currentYear} Cravin Interiors. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-amber-600 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-600 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-amber-600 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
