import React from 'react';
import Nav from './components/nav/Nav';
import OurProjects from './components/our-projects/OurProjects';
import OurWorks from './components/our-works/OurWorks';
import Clients from './components/clients/Clients';


const App = () => {
  return (
    <div className="main-app-container">
       <Nav />
       <OurProjects />
       <OurWorks />
       <Clients />
    </div>
  );
}

export default App;
