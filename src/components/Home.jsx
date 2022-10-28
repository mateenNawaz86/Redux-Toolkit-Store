import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="container main__container">
        <h1 className="text-center text-info ">
          Welcome to the Redux-Toolkit Store
        </h1>

        <h2 className="text-success mb-3">Products</h2>
        <Products />
      </div>
    </>
  );
};

export default Home;
