import React from "react";
import { loading } from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <>
      <img src={loading} alt="loading-spinner" />
    </>
  );
};

export default Spinner;
