import React from "react";

const Favourite = (props) => {
  const cart = props.cart;
  if (cart.length === 0)
    return (
      <>
        <h1> Favourite List:</h1>
        <h3> Empty </h3>
      </>
    );
  const totalSalary = cart.reduce((sum, data) => sum + data.salary, 0);
  const names = cart.map((item) => item.name);

  return (
    <div>
      <h1> Favourite List: </h1>
      <h3> Total : {cart.length}</h3>
      <h3> Total Salary : $ {totalSalary}</h3>
      <h2>
        Names :
        {names.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </h2>
    </div>
  );
};

export default Favourite;
