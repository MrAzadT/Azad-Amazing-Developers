import React from "react";

const Favourite = (props) => {
  const cart = props.cart;
  return (
    <div>
      <h1> Favourite</h1>
      total : {cart.length}
    </div>
  );
};

export default Favourite;
