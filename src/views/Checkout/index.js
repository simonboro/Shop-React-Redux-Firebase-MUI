import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import MenuLink from "../../components/atoms/MenuLink";
import CartTableData from "../../components/molecules/CartTableData";
import DeliveryMethod from "../../components/molecules/DeliveryMethod";
import PaymentMethod from "../../components/molecules/PaymentMethod";
import UserData from "../../components/molecules/UserData";
import { routes } from "../../utils/routes";
import {
  WrapperCartWithItems,
  WrapperCheckoutForm,
  WrapperNoItemsInCart,
  WrapperPaymentAndDelivery,
} from "./StyledCheckout";
import PaidIcon from "@mui/icons-material/Paid";

const Checkout = () => {
  const selectedProductsCart = useSelector(
    ({ productsReducer }) => productsReducer.productsCart
  );

  return (
    <WrapperCheckoutForm>
      <UserData header={"Client Info"} showButtons={false} isEdit={true} />
      <WrapperPaymentAndDelivery>
        <PaymentMethod />
        <DeliveryMethod />
      </WrapperPaymentAndDelivery>

      {selectedProductsCart.length === 0 ? (
        <WrapperNoItemsInCart>
          There are no products in the shopping cart. Let's get something :)
          <MenuLink path={routes.products}>
            <Button variant="contained">Go Shopping</Button>
          </MenuLink>
        </WrapperNoItemsInCart>
      ) : (
        <WrapperCartWithItems>
          <CartTableData />
          <Button color="success" variant="contained" endIcon={<PaidIcon />}>
            PROCEED TO PAYMENT
          </Button>
        </WrapperCartWithItems>
      )}
    </WrapperCheckoutForm>
  );
};

export default Checkout;

//payment method
//delivery method
//cart content
//cart summary
//finalize transaction - button
