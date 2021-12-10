import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { id, name, image, description } = props.service;
  return (
    <div className="col shadow  service-item rounded p-2 mb-3">
      <img src={image} className="rounded"></img>
      <div className="m-2 lh-sm">
        <h3 className="">{name}</h3>
        <p className="text-muted lh-sm">{description}</p>
      </div>
      <div className="text-center my-4">
        <Link className="details" to={`/ServiceDetails/${id}`}>
          Details &#62;
        </Link>
      </div>
    </div>
  );
};

export default Service;
