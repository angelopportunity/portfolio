import React, { useState, useEffect } from 'react';
import Portfolio from './Portfolio'
import About from './About'

export default function Header(props) {
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

  const handleItemClick = (component, link) => {
    props.onHeaderItemClick(component, link);
    // Reset all clickedLinks state properties to false
    setClickedLinks((prevState) => ({
      ...prevState,
      about: false,
      portfolio: false,
      contact: false,
    }));
    // Set the clicked item's clickedLinks state property to true
    if (link === 'about') {
      setClickedLinks((prevState) => ({
        ...prevState,
        about: true,
      }));
    } else if (link === 'portfolio') {
      setClickedLinks((prevState) => ({
        ...prevState,
        portfolio: true,
      }));
    } else if (link === 'contact') {
      setClickedLinks((prevState) => ({
        ...prevState,
        contact: true,
      }));
    }
  };

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
    onClick={() => handleItemClick(<About />, 'about')}
    className={`header--link ${clickedLinks['about'] ? 'clicked' : ''}`}
  >
    <div>ABOUT</div>
  </div>

  <div
    onClick={() => handleItemClick(<Portfolio />, 'portfolio')}
    className={`header--link ${clickedLinks['portfolio'] ? 'clicked' : ''}`}
  >
    <div>PORTFOLIO</div>
  </div>

  <div
    onClick={() => handleItemClick(<Contact />, 'contact')}
    className={`header--link ${clickedLinks['contact'] ? 'clicked' : ''}`}
  >
    <div>CONTACT</div>
  </div>
</div>
    </div>
  );
}