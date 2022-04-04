import { Button } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const BuyButton = ({ onClickFn }) => {
  return (
    <Button
      onClick={onClickFn}
      variant="contained"
      color="info"
      startIcon={<AddShoppingCartIcon />}
    >
      ADD TO CART
    </Button>
  );
};

export default BuyButton;
