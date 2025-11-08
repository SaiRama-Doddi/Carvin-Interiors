// AboutUs.jsx

export default function AboutUs() {
  return (
    <section id="about" className="bg-gradient-to-br from-[#FAF7F0] to-[#EFEFEF] py-24 px-6">
      {/* Heading & Hero */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Left: Hero Image */}
        <div className="md:w-1/3 relative">
          <div className="absolute inset-0 rounded-3xl bg-amber-300 opacity-30 translate-x-4 translate-y-4"></div>
          <img
            src="https://res.cloudinary.com/doqaowoks/image/upload/v1762579181/pexels-rachel-claire-4857757_h7uqr6.jpg"
            alt="Carvin Interiors - Inspiring Spaces"
            className="relative rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>
        {/* Middle: Company Identity */}
        <div className="md:w-2/3 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-amber-700 mb-6">
            Carvin Interiors
          </h2>
          <p className="text-xl text-gray-800 mb-4 leading-relaxed">
            Welcome to Carvin Interiors! Our innovative designs blend elegance and practicality, ensuring every space not only stands out visually but also uplifts your everyday living. With roots in Hyderabad, our team is passionate about crafting environments that inspire — from minimalist urban apartments to lavish traditional homes.
          </p>
          <p className="text-lg text-gray-600">
            We bring extensive expertise and creativity to each project, working closely with clients to understand their vision and translate it into reality. Every room we design is a harmonious fusion of comfort, personality, and timeless style.
          </p>
        </div>
      </div>

      {/* Philosophy, Vision, and Features */}
      <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-3 gap-10">
        {/* Philosophy */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-semibold text-amber-700 mb-2">Our Philosophy</h3>
          <p className="text-base text-gray-700 text-center">
            At Carvin Interiors, we believe in thoughtful design that transforms spaces into experiences. Our philosophy centers on personalization, attention to detail, and sustainable practices, ensuring every project is a reflection of your identity and lifestyle.
          </p>
        </div>
        {/* Vision */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-semibold text-amber-700 mb-2">Our Vision</h3>
          <p className="text-base text-gray-700 text-center">
            We aspire to be Hyderabad’s most trusted interior design studio, shaping environments that enhance lives and inspire creativity. Our vision is to build lasting relationships with our clients, becoming their go-to choice for unique transformations.
          </p>
        </div>
        {/* Signature Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-semibold text-amber-700 mb-2">Signature Services</h3>
          <ul className="text-base text-gray-700 text-center space-y-2">
            <li>Modular Kitchens & Living Spaces</li>
            <li>Custom Furniture & Decor</li>
            <li>Workspace and Office Solutions</li>
            <li>Pooja Rooms with Contemporary Touch</li>
            <li>End-to-End Project Management</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-24 rounded-3xl shadow-2xl bg-amber-700 p-12 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Step Into Your Dream Space</h3>
        <p className="text-lg mb-8 leading-relaxed text-[#FFFAF0]">
          Your space deserves a story that is as unique as you are. Reach out to Carvin Interiors today — let’s collaborate to create interiors that excite, comfort, and inspire. We’re ready to turn your dream home or office into a beautiful reality.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-amber-700 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-amber-100 hover:text-amber-800 transition-colors"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}
