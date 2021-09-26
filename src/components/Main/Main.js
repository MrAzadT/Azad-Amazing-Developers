import React, { useState } from "react";
import "./Main.css";
import myData from "../../myData/myData";
import Developer from "../Developer/Developer";
import Favourite from "./../favourite/Favourite";

const Main = () => {
  const [data, setData] = useState(myData);
  const [cart, setCart] = useState([]);

  const handleBtn = () => {};
  return (
    <div className="main">
      <div className="developer">
        {data.map((data) => (
          <Developer data={data} handleBtn={handleBtn} />
        ))}
      </div>
      <div className="favourite">
        <Favourite></Favourite>
      </div>
    </div>
  );
};

export default Main;
