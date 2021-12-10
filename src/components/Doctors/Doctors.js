import React from "react";
import { MyDB } from "../../DB/DB";
import "../Home/Home.css";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const doctors = MyDB.doctors;
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5" style={{ color: "#1ac167" }}>
        Doctors
      </h1>
      <div className="row row-cols-3 gy-4 justify-content-between">
        {doctors.map((item) => (
          <Doctor key={item.id} doctor={item}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
