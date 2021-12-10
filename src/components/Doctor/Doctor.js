import React from "react";


const Doctor = (props) => {
  const {  name, image, description } = props.doctor;
  
  return (
    <div className="col cart shadow rounded p-2 mb-3" style={{width:'350px'}}>
      <img src={image} className="rounded"></img>
      <div className="m-2 lh-sm">
        <h3 className="">{name}</h3>
        <p className="text-muted lh-sm">{description}</p>
      </div>
    </div>
  );
};

export default Doctor;
