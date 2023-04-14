import React, { useState, useEffect, useRef } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import PortfolioContainer from './Components/PortfolioContainer';
import { useInView } from 'react-intersection-observer';

const TriggerComponent = ({ onInView }) => {
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      onInView();
    }
  }, [inView, onInView]);

  return (
    <div></div>
  );
};

const App = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const portfolioRef = useRef(null);

  const [showContact, setShowContact] = useState(false);
  const contactRef = useRef(null);

  const aboutRef = useRef(null);

  const scrollTo = (ref, setShowState) => {
    if (!ref.current) {
      setShowState(true);
    }

    if (ref.current) {
      const headerHeight = 150;
      const yOffset = -headerHeight;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    setTimeout(() => {
      scrollTo(portfolioRef, setShowPortfolio);
    }, 500);
  };
  const scrollToContact = () => scrollTo(contactRef, setShowContact);
  const scrollToAbout = () => scrollTo(aboutRef)

  const handleTriggerInView = (setShowState) => {
    setShowState(true);
  };

  return (
    <div>
      <Header onPortfolioButtonClick={scrollToPortfolio} onContactButtonClick={scrollToContact} onAboutButtonClick={scrollToAbout} />
      <About ref={aboutRef} />
      {showPortfolio && <PortfolioContainer ref={portfolioRef} />}
      <TriggerComponent onInView={() => handleTriggerInView(setShowPortfolio)} />
      {showContact && <Contact ref={contactRef} />}
      <TriggerComponent onInView={() => handleTriggerInView(setShowContact)} />
      <Footer />
    </div>
  );
};

export default App;