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
   
  return (
    <section className="clients-container" id="clients">
      <div className="title-container">
        <h1 className="title">CLIENTS</h1>
      </div>
      <div className="logos-container">
        <img src={logo_1} alt="logo" />
        <img src={logo_2} alt="logo" />
        <img src={logo_3} alt="logo" />
        <img src={logo_4} alt="logo" />
        <img src={logo_5} alt="logo" />
        <img src={logo_6} alt="logo" />
        <img src={logo_7} alt="logo" />
        <img src={logo_8} alt="logo" />
        <img src={logo_9} alt="logo" />
        <img src={logo_10} alt="logo" />
        <img src={logo_11} alt="logo" />
        <img src={logo_12} alt="logo" />
      </div>
    </section>
  );
};

export default Clients;
