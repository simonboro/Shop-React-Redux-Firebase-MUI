import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../atoms/CartItem";
import { StyledTotalCost } from "./StyledCartTableData";

const CartTableData = () => {
  const selectedProductsCart = useSelector(
    ({ productsReducer }) => productsReducer.productsCart
  );

  let totalCost = 0;

  for (const { price, inCartQuantity } of selectedProductsCart) {
    totalCost += price * inCartQuantity;
  }

  return (
    <TableContainer component={Paper}>
      <h2>Shopping Cart</h2>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Image
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Price
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Category
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Quantity
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedProductsCart.map((cartProd) => (
            <CartItem {...cartProd} key={cartProd.id} />
          ))}
        </TableBody>
      </Table>
      <StyledTotalCost>Total cost: {totalCost}$</StyledTotalCost>
    </TableContainer>
  );
};

export default CartTableData;
