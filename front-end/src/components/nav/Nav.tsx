import React from "react";
import "./nav.css";

const Nav: React.FC = () => {
  return (
    <nav>
      <a href="#our-projects">
        <span>OUR</span>PROJECTS
      </a>
      <a href="#our-works">
        <span>OUR</span>WORKS
      </a>
      <a href="#clients">
        <span>OUR</span>CLIENTS
      </a>
      <a href="#our-story">
        <span>OUR</span>STORY
      </a>
    </nav>
  );
};

export default Nav;
