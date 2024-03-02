import React from "react";
import "../App.css";

const book = (props) => {
  return (
    <div className="container">
      <div className="imageCont">
        <img src={props.image} alt={props.name} />
      </div>
      <h1>{props.name}</h1>
      <b>პერსონაჟები</b>
      <ul>
        <li>{props.person[0]}</li>
        <li>{props.person[1]}</li>
        <li>{props.person[2]}</li>
      </ul>
      <h2>აღწერა</h2>
      <span>{props.description}</span>
      <button onClick={props.action}>ყიდვა</button>
    </div>
  );
};

export default book;
