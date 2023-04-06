import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'




function App() {

  const [selectedComponent, setSelectedComponent] = React.useState(<About />);

  const handleHeaderItemClick = (component) => {
    setSelectedComponent(component);
    console.log("Clicked on component:", component);
  };
  
  return (
    <div className="App">
      <div className="header">
        <Header onHeaderItemClick={handleHeaderItemClick} />
        </div>
    <div className="selected--component">{selectedComponent}</div>
    </div>
  )
}

export default App