import React from "react";
import "./Developer.css";

const Developer = (props) => {
  const { name, skills, country, salary, img } = props.data;
  return (
    <div className="card">
      <div className="text-center">
        <img className="mt-3" src={img} alt="" />
        <h4 className="mt-3">Name: {name}</h4>
        <p>Country : {country}</p>
        <p>Salary : {salary}</p>
        <p>Skills : {skills}</p>
        <button type="button" className="btn btn-primary mb-2">
          <box-icon name="heart" type="solid"></box-icon>
          add favourite
        </button>
      </div>
    </div>
  );
};

export default Developer;
