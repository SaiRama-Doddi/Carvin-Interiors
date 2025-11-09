import { useState } from 'react';
import { portfolioItems } from '../data/portfolio';
import { Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600">
            Explore our latest projects and get inspired by our transformative designs
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-amber-600 p-4 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye size={24} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-medium text-lg shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
