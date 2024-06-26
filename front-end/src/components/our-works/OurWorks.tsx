import React, { useState } from "react";
import "./our-works.css";
import left_arrow from "../../images/our-projects/left-arrow.png";
import right_arrow from "../../images/our-projects/right-arrow.png";
import slide_one from "../../images/our-work/slide-01.png";
import slide_two from "../../images/our-work/slide-02.png";
import slide_three from "../../images/our-work/slide-03.png";
import slide_four from "../../images/our-work/slide-04.png";

const OurWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      title: "MEGOBAR - GEORGIAN FOOD SHOP",
      description: `Friendliest food in the neighborhood Megobar is a new chain of food shops with a mission to make delicious Georgian food accessible to everyone around the world. Megobar (mdmn) means "a friend" in Georgian, and originally only referred to people you share a meal with, proving that food and friendship are colossally important to our culture.`,
      img: slide_one
    },
    {
      id: 2,
      title: "BLAUENSTEIN FARM",
      description: "Blauenstein is a Swiss-Georgian company creating the finest meat products in the pristine highlands of Racha, Georgia. With a culture of respect for nature and local traditions, Swiss-trained professionals and absolute control over the entire chain of production, Blauenstein shops are always full of meat connoisseurs.",
      img: slide_two
    },
    {
      id: 3,
      title: "CCLA - LAW CONSULTING AGENCY",
      description: "Out of nothing comes the brand new visual identity for CCLA, a Tbilisi-based law consulting agency which uses creativity to open the right doors for its clients.",
      img: slide_three
    },
    {
      id: 4,
      title: "WOMEN FROM THE BAZAAR",
      description: "This is not Harper’s Bazaar. The exclusive issue of Women From The Bazaar unites six trader women from Tbilisi's open-air markets. In addition to working 70 hours a week, trader women are often synonymous with waist bags, which are used as self-made cash registers. In collaboration with Cosmo, a handmade accessories brand, we decided to launch an extraordinary fashion magazine about universal, everyday fashion.",
      img: slide_four
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const handleIndicatorClick = (index: any) => {
    setCurrentSlide(index);
  };

  return (
    <section className="our-work-container" id="our-works">
      <div className="inner-container">
        <div className="carousel-indicators">
          {data.map((slide, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#ourWorksIndicators"
              data-bs-slide-to={index}
              className={index === currentSlide ? "active" : ""}
              aria-current={index === currentSlide ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleIndicatorClick(index)}
            ></button>
          ))}
        </div>

        <div className="carousel-indicators-scroll-container">
          <p className="slider-count">{`0${currentSlide + 1}`}</p>
          <div className="arrows-container">
            <img
              src={left_arrow}
              alt="Previous"
              className="arrow carousel-control-prev"
              data-bs-target="#ourWorksIndicators"
              data-bs-slide="prev"
              onClick={handlePrevSlide}
            />
            <img
              src={right_arrow}
              alt="Next"
              className="arrow carousel-control-next"
              data-bs-target="#ourWorksIndicators"
              data-bs-slide="next"
              onClick={handleNextSlide}
            />
          </div>
        </div>

        <img src={data[currentSlide].img} alt="img" className="img-fluid" />
        <div className="bottom-container">
          <p>{data[currentSlide].description}</p>
          <p className="card-title">{data[currentSlide].title}</p>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
