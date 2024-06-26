import React from "react";
import "./story.css";
import story_bg_img from "../../images/story/Screenshot 2023-10-08 at 19.23 1.png";
import story_image_1 from "../../images/story/image 188.png";
import story_image_2 from "../../images/story/image 192.png";
import story_image_3 from "../../images/story/image 193.png";

const Story = () => {
  return (
    <section className="story-container" id="our-story">
      <img src={story_bg_img} alt="Background" className="main-image" />
      <div className="content-container">
        <div className="left-content">
          <h1 className="title">STORY</h1>
          <p className="sub-desc">
            On the first day of April, 3 years ago holistic design agency Holy
            Motors opened for business.
          </p>
          <p className="highlight">
            HOLY MOTORS IS A HOLISTIC DESIGN AGENCY HELPING BRANDS LEAVE THEIR
            MARK ON CULTURE.
          </p>
        </div>
        <div className="right-content">
          <p>
            With multidisciplinary teams of designers, developers, strategists,
            writers, creators, and artists, we work closely with founders and
            brand owners through all stages of bringing their vision to life.
          </p>
          <p>
            As most glorious human endeavours often are, Holy Motors was created
            out of nothing when Georgia’s renowned creative duo Giorgi Avaliani
            and Nick Kumbari joined their forces to be reborn. Bringing together
            years of creative and design excellence.
          </p>
        </div>
      </div>
      <div className="logos">
        <img src={story_image_1} alt="TPN" />
        <img src={story_image_2} alt="Warner Media" />
        <img src={story_image_3} alt="Disney" />
      </div>
    </section>
  );
};

export default Story;
