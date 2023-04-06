import React, { useState, useEffect, useRef } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import { useInView } from 'react-intersection-observer';

const TriggerComponent = ({ onInView }) => {
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      onInView();
    }
  }, [inView, onInView]);

  return (
    <div ref={ref}></div>
  );
};

const App = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const portfolioRef = useRef(null);

  const scrollToPortfolio = () => { 
    if (!showPortfolio) {
      setShowPortfolio(true);
    }

    if (portfolioRef.current) {
      const headerHeight = 150; 
      const yOffset = -headerHeight;
      const y = portfolioRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleTriggerInView = () => {
    setShowPortfolio(true);
  };

  return (
    <div>
      <Header onPortfolioButtonClick={scrollToPortfolio} />
      <About />
      {showPortfolio && <Portfolio ref={portfolioRef} />}
      <TriggerComponent onInView={handleTriggerInView} />
    </div>
  );
};

export default App;