import React from "react";
import { MyDB } from "../../DB/DB";
import Service from "../Service/Service";
import "../Home/Home.css";

const Services = () => {
  const services = MyDB.services;
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5" style={{ color: "#1ac167" }}>
        Services
      </h1>
      <div className="row row-cols-4 gy-4 justify-content-between">
        {services.map((item) => (
          <Service key={item.id} service={item}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
