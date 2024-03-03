import React from "react";
import "../App.css";

const book = ({image, name, person, description, action}) => {
  return (
    <div className="container">
      <div className="imageCont">
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <b>პერსონაჟები</b>
      <ul>
        <li>{person[0]}</li>
        <li>{person[1]}</li>
        <li>{person[2]}</li>
      </ul>
      <h2>აღწერა</h2>
      <span>{description}</span>
      <button onClick={() => action(name)}>ყიდვა</button>
    </div>
  );
};

export default book;
