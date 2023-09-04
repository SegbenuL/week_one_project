import React from "react";

const cards = (props) => {
  return (
    <div>
      <img src="props.imgicon" alt="icons" />
      <h3> {props.name} </h3>
      <p> {props.body} </p>
    </div>
  );
};

export default cards;
