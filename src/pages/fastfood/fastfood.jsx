import React, { useEffect, useState } from "react";
import { arr1 } from "../../utiles/fastfood/fastfooddata";
import "./fastfood.css";

const Fastfood = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="fastfood">
      {arr1.map((data) => (
        <div className="card">
          <img src={data.image} alt="no image" height="90px" width="90px"></img>
          <h4>{data.name}</h4>
          <p>{data.price}</p>
          <button type="button" onClick={() => setItem([...items, data])}>
            <b>Add to Cart</b>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Fastfood;
