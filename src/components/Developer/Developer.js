import React from "react";

const Developer = (props) => {
  const { name, skills, country, salary, img } = props.data;
  return (
    <div>
      <img src={img} alt="" />
      <h1>name: {name}</h1>
      <p>country : {country}</p>
      <p>salary : {salary}</p>
      <p>skills : {skills}</p>
    </div>
  );
};

export default Developer;
