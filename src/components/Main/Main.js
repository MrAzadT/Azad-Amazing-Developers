import React, { useState } from "react";

import myData from "../../myData/myData";
import Developer from "../Developer/Developer";

const Main = () => {
  const [data, setData] = useState(myData);
  const [cart, setCart] = useState([]);
  console.log(data);
  return (
    <div className="main">
      <div className="developer">
        {data.map((data) => (
          <Developer data={data} />
        ))}
      </div>
      <div className="cart"></div>
    </div>
  );
};

export default Main;
