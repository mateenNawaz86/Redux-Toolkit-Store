import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  let { title, price, img, product } = props;
  if (title.length > 25) {
    title = title.substring(0, 19);
  }

  const dispatch = useDispatch();

  // function for adding a new item to cart
  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
  };

  
  return (
    <Card sx={{ boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="300px"
        image={img}
        alt="green iguana"
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingBottom: "1em" }}>
        <Tooltip title="Add item">
          <Button
            size="small"
            variant="contained"
            color="success"
            onClick={() => {
              addToCartHandler(product);
            }}
          >
            Add to Cart
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
