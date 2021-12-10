import React from "react";
import { MyDB } from "../../DB/DB";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
  const services = MyDB.services.slice(0, 4);
  return (
    <>
      <div className="bg-container">
        <div className="w-50">
          <h1>
            <span style={{ color: "#1ac167" }}>The Greatest</span> Health Is
            Welth
          </h1>
        </div>
        <img
          className="w-50"
          src="https://html.softtechitltd.com/physicmed/physicmed/assets/images/slider-img.png"
        />
      </div>
     
      <div className="container my-5">
        <h1 className="text-center mb-3" style={{ color: "#1ac167" }}>
          Services
        </h1>
        <div className="row row-cols-4 gy-4 justify-content-between">
          {services.map((item) => (
            <Service key={item.id} service={item}></Service>
          ))}
        </div>
      </div>
      <div className="container my-5">
      <h1 className="text-center mb-3" style={{ color: "#1ac167" }}>
          Our Photo Gallary
        </h1>
          <div className="row g-4" >
            <img style={{height:'200px'}} className="col-4" src="https://html.softtechitltd.com/physicmed/physicmed/assets/images/gallery1.png"/>
            <img style={{height:'200px'}} className="col-8" src="https://html.softtechitltd.com/physicmed/physicmed/assets/images/gallery2.png"/>
            
            <img style={{height:'200px'}} className="col-4" src="https://html.softtechitltd.com/physicmed/physicmed/assets/images/gallery3.png"/>
            <img style={{height:'200px'}} className="col-4" src="https://html.softtechitltd.com/physicmed/physicmed/assets/images/gallery4.png"/>
            <img style={{height:'200px'}} className="col-4" src="https://html.softtechitltd.com/physicmed/physicmed/assets/images/gallery5.png"/>

          </div>

      </div>
      <div className="container my-5 d-flex subscribe">
        <h1 className="w-50 text-white" style={{fontSize:'48px'}}>Subscribe To Our Newsletter</h1>
        <div className="w-50">
          <input type="text" placeholder="Enter your email" className="subscribe-input"></input>
          <span><button>Subscribe</button></span>
        </div>
      </div>
    </>
  );
};

export default Home;
