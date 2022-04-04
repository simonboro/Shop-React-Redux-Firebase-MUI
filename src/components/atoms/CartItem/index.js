import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import InvisibleButton from "../InvisibleButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  addToCart,
  deleteItemFromCart,
  deleteWholeFromCart,
} from "../../../redux/actions/cartActions";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { StyledWrapperQuantityButton } from "./StyledCartItem";

const CartItem = ({ id, name, price, image, category, inCartQuantity }) => {
  const dispatch = useDispatch();

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="center">
        <img src={image} alt={name} style={{ width: "60px" }} />
      </TableCell>
      <TableCell align="center">{price}$</TableCell>
      <TableCell align="center">{category}</TableCell>
      <TableCell align="center">
        <StyledWrapperQuantityButton>
          <InvisibleButton onClickFn={() => dispatch(deleteItemFromCart(id))}>
            <RemoveIcon />
          </InvisibleButton>
          {inCartQuantity}
          <InvisibleButton onClickFn={() => dispatch(addToCart(id))}>
            <AddIcon />
          </InvisibleButton>
        </StyledWrapperQuantityButton>
      </TableCell>
      <TableCell align="center">
        <InvisibleButton onClickFn={() => dispatch(deleteWholeFromCart(id))}>
          <DeleteIcon />
        </InvisibleButton>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
