import React, { useState } from "react";
import "./our-projects.css";
import slide_1 from "../../images/our-projects/slide-01.png";
import slide_2 from "../../images/our-projects/slide-02.png";
import slide_3 from "../../images/our-projects/slide-03.png";
import left_arrow from "../../images/our-projects/left-arrow.png";
import right_arrow from "../../images/our-projects/right-arrow.png";

const OurProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      title: "City Mall is a shopping destination that brings people together from all walks of life.",
      description: "To help visitors find precisely what they are looking for, we doubled down on multiple arrows in the original symbol, updated and expanded them into a navigation-friendly design system.",
      imgTitle: "CITY MALL",
      img: slide_1
    },
    {
      id: 2,
      title: "Out of nothing, a new source of wealth - Neyco shines through.",
      description: "Whether it’s trading cryptocurrencies or pawning your bitcoin wallets to get fast access to cash. Inspired by the eternal Creation of Adam our photo series for Neyco website tries to reframe the struggle between old and new forces, and help the viewers reimagine brand new source of wealth.",
      imgTitle: "NEYCO",
      img: slide_2
    },
    {
      id: 3,
      title: "Out of nothing, if you get tired chewing on your daily fruits and veggies, you can now drink them.",
      description: "«Kind and Noble» or [ke-ti-li da pa-ti-o-sa-ni] in our native Georgian language isn't just a name! This noble beverage is made exclusively by mixing fresh fruit and vegetable purees to bring mother nature's kindness to humans in the most convenient form.",
      imgTitle: "KIND & NOBLE",
      img: slide_3
    }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="our-projects-container" id="our-projects">
      <div className="left-side">
        <p className="title">{data[currentSlide].title}</p>
        <div className="desc-text-container">
          <p className="desc_first">{data[currentSlide].description.substring(0, 300)}</p>
        </div>
      </div>
      <div className="right-side">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            {data.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === currentSlide ? "active" : ""}
                aria-current={index === currentSlide ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`carousel-item ${index === currentSlide ? "active" : ""}`}
              >
                <img src={item.img} className="d-block" alt={item.imgTitle} />
              </div>
            ))}
            <section className="img-desc-container">
              <div className="first-section">
                <p className="slider-count">{String(currentSlide + 1).padStart(2, "0")}</p>
                <div className="arrows-container">
                  <img
                    src={left_arrow}
                    alt="Previous"
                    className="arrow carousel-control-prev"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                    onClick={handlePrevSlide}
                  />
                  <img
                    src={right_arrow}
                    alt="Next"
                    className="arrow carousel-control-next"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                    onClick={handleNextSlide}
                  />
                  <div>
                    <p className="img-title">{data[currentSlide].imgTitle}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
