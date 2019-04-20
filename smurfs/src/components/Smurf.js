import React from "react";

const Smurf = props => {
  return (
    <div>
    <li><b>Name:</b> {props.smurf.name} <b>Age:</b> {props.smurf.age}</li>
    </div>
  );
};

export default Smurf;
