import React, { useEffect, useState } from "react";
import "./style.css";

import { isEmpty } from "lodash";

const Cart = () => {
  var totalArray = [];
  var farray = [];
  farray = JSON.parse(localStorage.getItem("fruits")) ?? [];
  // var totalArray = [];
  var fast = [];
  fast = JSON.parse(localStorage.getItem("items")) ?? [];
  totalArray = farray.concat(fast);
  const [count, setCount] = useState(1);

  // useEffect(() => {
  //   setfarray();
  // }, []);

  console.log("totalArray", totalArray);
  console.log("farray", farray);

  var totalPrice = totalArray.map((y) => {
    return y != null && y.price;
  });
  function sumFunction(total, value) {
    return total + value;
  }

  // console.log(totalArray.map((data) => {console.log(data);}));
  return (
    <div className="complete">
      {totalArray.length ? (
        totalArray.map((order) => (
          <div className="demo">
            <img src={order.image} alt="no image" height="60px" width="60px" />
            <h3>{order.name}</h3>
            <h3>RS:{order.price}</h3>
            <span>
              <h4>{count}</h4>
            </span>
          </div>
        ))
      ) : (
        <h3>No Items</h3>
      )}
      <br />
      <hr />
      <br />
      <h3>
        TotalPrice : RS {totalPrice.reduce(sumFunction, 0)} &nbsp;&nbsp;
        <button onClick={() => localStorage.clear()}>PlaceOrder</button>
      </h3>
    </div>
  );
};

export default Cart;
