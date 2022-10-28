import React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Card from "@mui/material/Card";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // function for deleting a product
  const itemDeleteHandler = (prod) => {
    dispatch(removeFromCart(prod));
  };

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center text-info main__container">Products List</h1>
        {products.length > 0 ? (
          products.map((item) => {
            return (
              <Card
                className="cart__container"
                sx={{ boxShadow: 3, padding: "1rem" }}
                key={item.id}
              >
                <div className="cart__inner-container">
                  <img id="cart__img" src={item.image} alt="product_img" />
                  <div className="cart__info">
                    <h4 id="cart__title">{item.title}</h4>
                    <span id="item__price">${item.price}</span>
                  </div>
                  <Tooltip title="Delete item">
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => {
                        itemDeleteHandler(item.id);
                      }}
                    >
                      Delete
                    </Button>
                  </Tooltip>
                </div>
              </Card>
            );
          })
        ) : (
          <p className="text-center text-primary fw-lighter fst-italic">
            No Products Found!
          </p>
        )}
      </div>
    </>
  );
};

export default Cart;
