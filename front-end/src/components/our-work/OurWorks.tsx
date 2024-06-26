import React from "react";
import "./our-works.css";
import left_arrow from "../../images/our-projects/left-arrow.png";
import right_arrow from "../../images/our-projects/right-arrow.png";
import slide_one from "../../images/our-work/slide-01.png";
import slide_two from "../../images/our-work/slide-01.png";
import slide_three from "../../images/our-work/slide-01.png";
import slide_four from "../../images/our-work/slide-01.png";

const OurWorks = () => {
  return (
    <section className="our-work-container" id="our-works">
      <div className="inner-container">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#ourWorksIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#ourWorksIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#ourWorksIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#ourWorksIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        <div className="carousel-indicators-scroll-container">
          <p className="slider-count">01</p>
          <div className="arrows-container">
            <img
              src={left_arrow}
              alt="prev"
              className="arrow carousel-control-next"
              data-bs-target="#ourWorksIndicators"
              data-bs-slide="prev"
            />
            <img
              src={right_arrow}
              alt="next"
              className="arrow carousel-control-next"
              data-bs-target="#ourWorksIndicators"
              data-bs-slide="next"
            />
          </div>
        </div>

        <img src={slide_one} alt="img" className="img-fluid" />
        <div className="bottom-container">
          <p>
            Friendliest food in the neighborhood Megobar is a new chain of food
            shops wish a mission to make delicious Georgian food accessible to
            everyone around the world. Megobar (mdmn) means "a friend" in
            Georgian, and originally only referred to people you share a meal
            with, proving that food and friendship are colossally important to
            our culture.
          </p>
          <p className="card-title">MEGOBAR - GEORGIAN FOOD SHOP</p>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
