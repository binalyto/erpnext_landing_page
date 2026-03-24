import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import USPSection from './components/USPSection';
import ServicesSection from './components/ServicesSection';
import AISection from './components/AISection';
import IndustriesSection from './components/IndustriesSection';
import ProcessSection from './components/ProcessSection';
import ResultsSection from './components/ResultsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050510] text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <USPSection />
        <ServicesSection />
        <AISection />
        <IndustriesSection />
        <ProcessSection />
        <ResultsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
