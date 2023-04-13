import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  function myFunctin() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  }
  console.log("data", data);
  useEffect(() => {
    myFunctin();
  }, []);

  return (
    <div>
      {data.map((m) => {
        <div className="api">
          <img src={m.image} alt="no image" height="150px" width="150px" />
          <h5> {m.id}</h5>
          <p>{m.price}</p>
        </div>;
      })}
    </div>
  );
};

export default Products;
