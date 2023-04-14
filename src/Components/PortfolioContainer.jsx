import React, { useState, useEffect, forwardRef } from 'react';

const PortfolioContainer = forwardRef((props, ref) => {
  const isMobileWidth = () => window.matchMedia('(max-width: 767px)').matches;
  const [isMobile, setIsMobile] = useState(isMobileWidth());
  const [PortfolioComponent, setPortfolioComponent] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileWidth());
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      import('./MobilePortfolio').then(({ default: MobilePortfolio }) => {
        setPortfolioComponent(() => MobilePortfolio);
      });
    } else {
      import('./Portfolio').then(({ default: Portfolio }) => {
        setPortfolioComponent(() => Portfolio);
      });
    }
  }, [isMobile]);

  if (!PortfolioComponent) {
    return <div>Loading...</div>;
  }

  const RenderedComponent = PortfolioComponent;

  return <RenderedComponent ref={ref} />;
});

export default PortfolioContainer;