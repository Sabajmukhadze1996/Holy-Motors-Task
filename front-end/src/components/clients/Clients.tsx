import React from "react";
import "./clients.css";
import {
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  logo_6,
  logo_7,
  logo_8,
  logo_9,
  logo_10,
  logo_11,
  logo_12,
} from "../../images/clients/clientsImages";

const Clients = () => {
  const logos1 = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6];
  const logos2 = [logo_7, logo_8, logo_9, logo_10, logo_11, logo_12];

  return (
    <section className="clients-container" id="clients">
      <div className="title-container">
        <h1 className="title">CLIENTS</h1>
      </div>
      <div className="logo-container first-logo-container">
        <div className="logo-wrapper">
          {logos1.concat(logos1).map((logo, index) => (
            <img key={index} src={logo} alt={`logo-${index + 1}`} />
          ))}
        </div>
      </div>
      <div className="logo-container second-logo-container">
        <div className="logo-wrapper">
          {logos2.concat(logos2).map((logo, index) => (
            <img key={index} src={logo} alt={`logo-${index + 7}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
