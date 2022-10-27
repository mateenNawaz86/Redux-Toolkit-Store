import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center text-info">
          Welcome to the Redux-Toolkit Store
        </h1>

        <h2 className="text-success my-4">Products</h2>
        <Products />
      </div>
    </>
  );
};

export default Home;
