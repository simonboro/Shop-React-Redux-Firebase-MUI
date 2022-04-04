import { Badge, Tooltip } from "@mui/material";
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { StyledCartWrapper } from "./StyledCart";
import CartDialog from "../CartDialog";
import InvisibleButton from "../../atoms/InvisibleButton";

const Cart = ({ amountOfProd }) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledCartWrapper>
      <InvisibleButton onClickFn={() => setOpen(!open)}>
        <Tooltip title="Cart">
          <Badge
            badgeContent={amountOfProd}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            color="secondary"
          >
            <ShoppingCartOutlinedIcon color="info" sx={{ fontSize: 30 }} />
          </Badge>
        </Tooltip>
      </InvisibleButton>
      <CartDialog open={open} setOpen={setOpen} />
    </StyledCartWrapper>
  );
};

export default Cart;
