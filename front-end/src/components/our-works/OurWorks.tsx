import React, { useState } from "react";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import "./our-works.css";
import left_arrow from "../../images/our-projects/left-arrow.png";
import right_arrow from "../../images/our-projects/right-arrow.png";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const GET_WORKS = gql`
  query GetWorks {
    works {
      id
      title
      description
      img
    }
  }
`;

const OurWorks = () => {
  const { loading, error, data } = useQuery(GET_WORKS, { client });
  const [currentSlide, setCurrentSlide] = useState(0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.works.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === data.works.length - 1 ? 0 : prev + 1));
  };

  const handleIndicatorClick = (index: any) => {
    setCurrentSlide(index);
  };

  return (
    <section className="our-work-container" id="our-works">
      <div className="inner-container">
        <div className="carousel-indicators">
          {data.works.map((slide: any, index: any) => (
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

        <img src={data.works[currentSlide].img} alt="img" className="img-fluid" />
        <div className="bottom-container">
          <p>{data.works[currentSlide].description}</p>
          <p className="card-title">{data.works[currentSlide].title}</p>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
