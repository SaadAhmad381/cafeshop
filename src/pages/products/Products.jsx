import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./product.css";

const Products = () => {
  const [data, setData] = useState([]);
  function myFunctin() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  }
  const [products, setProducts] = useState([]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  console.log("products", products);

  // console.log("data", data);
  useEffect(() => {
    myFunctin();
  }, []);

  return (
    <div className="products">
      {data.map((m) => (
        <div className="card">
          <img src={m.image} alt="no image" height="100px" width="100px" />
          <h4>{m.id}</h4>
          <p>{m.price}</p>
          <button type="button" onClick={() => setProducts([...products, m])}>
            <b>Add to Cart</b>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
