import React from "react";
import "./our-projects.css";
import slide_1 from "../../images/our-projects/slide-01.png"
import slide_2 from "../../images/our-projects/slide-02.png"
import slide_3 from "../../images/our-projects/slide-03.png"
import left_arrow from "../../images/our-projects/left-arrow.png"
import right_arrow from "../../images/our-projects/right-arrow.png"

const OurProjects = () => {
  return (
    <section className="our-projects-container" id="our-projects">
      <div className="left-side">
        <p className="title">
          City Mall is a shopping destination that brings people together from
          all walks of life.
        </p>
        <p className="description-first">
          To help visitors find precisely what they are looking for, we doubled
          down on multiple arrows in the original symbol, updated and expanded
          them into a navigation-friendly design system.
        </p>
        <p className="description-second">
          Typography also got a bold upgrade integrating a custom Georgian
          adaptation of Pangram typeface.
        </p>
      </div>




      <div className="right-side">


      <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"  aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"  aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    
    <div className="carousel-item active">
      <img src={slide_1} className="d-block " alt="img" />
    </div>
    <div className="carousel-item">
      <img src={slide_2} className="d-block" alt="img"/>
    </div>
    <div className="carousel-item">
      <img src={slide_3} className="d-block" alt="img" />
    </div>

    <section className="img-desc-container">
      <p className="slider-count">01</p>
      <div className="arrows-container">
        <img src={left_arrow} alt="arrow" className="arrow" />
        <img src={right_arrow} alt="arrow" className="arrow" />
      </div>
  
    </section>


  </div>


  <div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>


</div>





      </div>





    </section>
  );
};

export default OurProjects;
