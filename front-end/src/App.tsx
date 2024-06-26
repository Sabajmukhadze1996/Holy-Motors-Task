import React from 'react';
import Nav from './components/nav/Nav';
import OurProjects from './components/our-projects/OurProjects';
import OurWorks from './components/our-works/OurWorks';


const App = () => {
  return (
    <div className="main-app-container">
       <Nav />
       <OurProjects />
       <OurWorks />
    </div>
  );
}

export default App;
