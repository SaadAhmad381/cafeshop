import React, { useState, useEffect } from "react";
import banana from "../../assets/banana.jpg";

import { arr } from "../../utiles/fruitsdata";
import "./fruit.css";

const Fruit = () => {
  // const [items, setItem] = useState([]);

  // useEffect(() => {
  //   const item = JSON.parse(localStorage.getItem("items"));
  //   if (items) {
  //     setItem(items);
  //   }
  // }, []);
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    localStorage.setItem("fruits", JSON.stringify(fruits));
  }, [fruits]);
  return (
    <div className="fruits">
      {arr.map((data) => (
        <div className="card">
          <img src={data.image} alt="no image" height="70px" width="70px"></img>
          <h4>{data.name}</h4>
          <p>{data.price}</p>
          <button type="button" onClick={() => setFruits([...fruits, data])}>
            <b>Add to Cart</b>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Fruit;
