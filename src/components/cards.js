import React from "react";

const Cards = (props) => {
  return (
    <div className={`container ${props.color}`}>
      <img src={props.imgicons} alt="icons" />
      <h3>{props.name}</h3>
      <p>{props.body} </p>
      <button className="but">{props.link}</button>
    </div>
  );
};

export default Cards;
