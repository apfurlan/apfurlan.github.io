import React, { useState } from 'react';

import Header from './components/Header/Header';
import About  from './pages/About/About';
import Footer from './components/Footer/Footer';
import Publications from './pages/Publications/Publications';

import Research from './pages/Research/Research';
import DataProjects from './pages/DataProjects/DataProjects'; 

console.log('[App.js] Projects component:', DataProjects);

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'research':
        return <Research />;
      case 'publications':
        return <Publications />;
      case 'data':
        return <DataProjects />;
      // case 'contact':
      //   return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;