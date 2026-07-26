import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Companies from './components/Companies';
import Experience from './components/Experience';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FreelancePlatforms from './components/FreelancePlatforms';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream-100 dark:bg-ink-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Companies />
        <Experience />
        <Services />
        <Testimonials />
        <FreelancePlatforms />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
