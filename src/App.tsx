import { useState, Suspense } from 'react';
import Header from './components/Header';
import StarField from './components/StarField';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import WelcomeScreen from './components/WelcomeScreen';
import BandScene from './components/band/App';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden">
      {showWelcome ? (
        <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
      ) : (
        <>
          <StarField />
          <Header />
          <main className="relative z-10">
            <Hero />
            {/* <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Loading 3D scene...</div>}>
              <BandScene />
            </Suspense> */}
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;