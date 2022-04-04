import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartTableData from "../CartTableData";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import MenuLink from "../../atoms/MenuLink";
import { routes } from "../../../utils/routes";

const CartDialog = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  const selectedProductsCart = useSelector(
    ({ productsReducer }) => productsReducer.productsCart
  );

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="max-width">
        <DialogContent>
          <DialogContentText>
            {selectedProductsCart.length === 0 ? (
              <p>
                There are no products in the shopping cart. Let's get something
                :)
              </p>
            ) : (
              <CartTableData />
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MenuLink path={routes.products}>
            <Button onClick={handleClose} variant="outlined">
              Continue Shopping
            </Button>
          </MenuLink>

          {selectedProductsCart.length === 0 ? null : (
            <MenuLink path={routes.checkout}>
              <Button
                onClick={handleClose}
                autoFocus
                variant="contained"
                color="success"
                endIcon={<CreditScoreIcon />}
              >
                Checkout
              </Button>
            </MenuLink>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CartDialog;
