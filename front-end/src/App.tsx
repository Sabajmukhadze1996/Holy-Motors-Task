import React from 'react';
import Nav from './components/nav/Nav';
import OurProjects from './components/our-projects/OurProjects';


const App = () => {
  return (
    <div className="main-app-container">
       <Nav />
       <OurProjects />
    </div>
  );
}

export default App;
