import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

const ProductItem = (props) => {
  let { title, price, img } = props;
  if (title.length > 25) {
    title = title.substring(0, 19);
  }
  return (
    <Card>
      <CardMedia
        component="img"
        height="300px"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Add item">
          <Button size="small">Add to Cart</Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
