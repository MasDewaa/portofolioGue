import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoadingScreen } from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Testimonials } from './components/Testimonials';
import Contact from './components/Contact';
import StarField from './components/StarField';
import WelcomeScreen from './components/WelcomeScreen';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowWelcome(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        
        {showWelcome && <WelcomeScreen onLoadingComplete={handleWelcomeComplete} />}
        
        {!isLoading && !showWelcome && (
          <>
            <StarField />
            <Header />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
