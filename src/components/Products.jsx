import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const jsonProd = await fetch("https://fakestoreapi.com/products");
      const prodData = await jsonProd.json();
      console.log(prodData);

      setProducts(prodData);
    };

    fetchProduct();
  }, []);
  return (
    <>
      <div className="product__item-container">
        {products.map((item, index) => {
          return (
            <ProductItem
              key={index}
              title={item.title}
              price={item.price}
              img={item.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
