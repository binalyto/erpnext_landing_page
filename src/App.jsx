import './index.css';
import { Toaster } from 'react-hot-toast';
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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm9r5medfsBS0Q_TC0U4xYkQXPRlArRck",
  authDomain: "erpnext-landing-page.firebaseapp.com",
  projectId: "erpnext-landing-page",
  storageBucket: "erpnext-landing-page.firebasestorage.app",
  messagingSenderId: "217962432000",
  appId: "1:217962432000:web:068f662b23f7c6b5c83ae5",
  measurementId: "G-PC94TJFBBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#0f0f1f',
            color: '#e2e8f0',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '10px',
            fontSize: '14px',
          },
          success: {
            iconTheme: { primary: '#22c55e', secondary: '#0f0f1f' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#0f0f1f' },
          },
        }}
      />
    </div>
  );
}

export default App;
