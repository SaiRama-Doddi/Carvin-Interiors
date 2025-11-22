import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 120; // adjust based on navbar height

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop - offset;
          const sectionHeight = section.offsetHeight;

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          {/* Logo Section */}
        <div className="flex items-center space-x-0">
          <img
            src="/logo.png"
            alt="Inizio Interiors Logo"
            className="w-28 sm:w-32 md:w-32 h-auto object-contain -my-2"
          />

          <div className="flex flex-col leading-none ml-[-4px] whitespace-nowrap">
            <span
              className="text-lg sm:text-xl md:text-2xl font-semibold  text-[#362C59]"
             /*  style={{
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "1px",
              }} */
            >
              Carvin <span className='text-amber-600'>Interiors</span> 
            </span>
          </div>
        </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative font-medium cursor-pointer transition-colors duration-300
                  ${
                    activeSection === link.id
                      ? 'text-amber-600'
                      : 'text-gray-700 hover:text-amber-600'
                  }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-amber-600 rounded-full transition-all duration-300"></span>
                )}
              </button>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-amber-600 cursor-pointer text-white px-6 py-2.5 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-medium"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-3 py-2 rounded-md font-medium transition-colors
                  ${
                    activeSection === link.id
                      ? 'bg-amber-50 text-amber-600'
                      : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                  }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors font-medium mt-2"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
