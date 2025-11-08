import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Partners from './components/Partners';
import AboutUs from './components/About';
import Testimonials from './components/Testinomials';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <HowItWorks />
      <AboutUs/>
      <Testimonials/>
      <Contact />

      <Partners/>
      <Footer />
      <FloatingButtons/>
    </div>
  );
}

export default App;
