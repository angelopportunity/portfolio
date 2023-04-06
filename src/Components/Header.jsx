import React, { useState, useEffect } from 'react';
import Portfolio from './Portfolio'
import About from './About'

export default function Header({onPortfolioButtonClick}) {
  const [clickedLinks, setClickedLinks] = useState({});
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = isSticky ? 'header sticky' : 'header';

  return (
    <div className={headerClasses}>
      <div className="header--logo--container">
        <div className="header--logo"></div>
        <div className="header--logotext--container">
          <span className="logo--text--black">M</span>
          <span className="logo--text--border"></span>
          <span className="padded">S</span>
        </div>
      </div>

      <div className="header--text--container">
  <div
    className={`header--link ${clickedLinks['about'] ? 'clicked' : ''}`}
  >
    <div>ABOUT</div>
  </div>

  <div
    onClick={onPortfolioButtonClick}
    className={`header--link ${clickedLinks['portfolio'] ? 'clicked' : ''}`}
  >
    <div>PORTFOLIO</div>
  </div>

  <div
    className={`header--link ${clickedLinks['contact'] ? 'clicked' : ''}`}
  >
    <div>CONTACT</div>
  </div>
</div>
    </div>
  );
}