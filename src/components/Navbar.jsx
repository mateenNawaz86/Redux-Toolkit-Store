import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Toolkit Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/cart" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/cart"
                >
                  Cart
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-primary " type="button">
                Cart Item: {cart.length}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
