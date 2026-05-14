import React, { useState } from 'react';

import Header from './components/Header/Header';
import About  from './pages/About/About';
import Footer from './components/Footer/Footer';
import Publications from './pages/Publications/Publications';
import Research from './pages/Research/Research';
import DataProjects from './pages/DataProjects/DataProjects';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import Contact from './pages/Contact/Contact';
import Curriculum from './pages/Curriculum/Curriculum';
import Teaching from './pages/Teaching/Teaching';

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
      case 'curriculum':
        return <Curriculum />;
      case 'teaching':
        return <Teaching />;
      case 'contact':
        return <Contact />;
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