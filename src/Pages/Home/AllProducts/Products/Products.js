import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="py-5">
      <h1 className="text-center my-5">
        <i class="fab fa-2x text-primary fa-phoenix-squadron"></i> Birds we
        owned <span className="text-info">to serve</span>
        ___
      </h1>
      <div className="row g-5 card-group p-3 mx-0 products-cards">
        {products.slice(0, 6).map((item) => (
          <Product key={item?._key} item={item}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
