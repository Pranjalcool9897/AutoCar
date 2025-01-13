import  { useState, useEffect } from 'react';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust timing as needed
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-8 border-t-primary border-r-primary animate-spin"></div>
        </div>
        <div className="mt-4 text-xl font-semibold text-primary animate-pulse">
          Loading...
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <WhyUs />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;