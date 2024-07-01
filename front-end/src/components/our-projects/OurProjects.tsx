import React, { useState } from "react";
import { ApolloClient, InMemoryCache, gql, useQuery, QueryResult } from "@apollo/client";
import "./our-projects.css";
import left_arrow from "../../images/our-projects/left-arrow.png";
import right_arrow from "../../images/our-projects/right-arrow.png";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      title
      description
      imgTitle
      img
    }
  }
`;

interface Project {
  id: string;
  title: string;
  description: string;
  imgTitle: string;
  img: string;
}

interface GetProjectsData {
  projects: Project[];
}

const OurProjects: React.FC = () => {
  const { loading, error, data }: QueryResult<GetProjectsData> = useQuery(GET_PROJECTS, { client });
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? data!.projects.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === data!.projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="our-projects-container" id="our-projects">
      <div className="left-side">
        <p className="title">{data!.projects[currentSlide].title}</p>
        <div className="desc-text-container">
          <p className="desc_first">
            {data!.projects[currentSlide].description.substring(0, 300)}
          </p>
        </div>
      </div>
      <div className="right-side">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            {data!.projects.map((_, index) => (
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
            {data!.projects.map((item, index) => (
              <div
                key={item.id}
                className={`carousel-item ${index === currentSlide ? "active" : ""}`}
              >
                <img src={item.img} className="d-block" alt={item.imgTitle} />
              </div>
            ))}
            <section className="img-desc-container">
              <div className="first-section">
                <p className="slider-count">
                  {String(currentSlide + 1).padStart(2, "0")}
                </p>
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
                    <p className="img-title">
                      {data!.projects[currentSlide].imgTitle}
                    </p>
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
