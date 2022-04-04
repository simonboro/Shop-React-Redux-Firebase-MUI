import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import BuyButton from "../../components/atoms/BuyButton";
import { addToCart } from "../../redux/actions/cartActions";
import {
  StyledSingleProduct,
  WrapperSingleProduct,
  StyledDescription,
} from "./StyledSingleProduct";

const SingleProduct = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const { id, name, image, price, desc } = location.state;

  return (
    <StyledSingleProduct>
      <WrapperSingleProduct>
        {/* <h1>Single Product</h1> */}
        <img src={image} alt={name} style={{ width: "500px" }} />
        <StyledDescription>
          <h2>{name}</h2>
          <h3>Price: {price}$</h3>
          <p>{desc}</p>
          <BuyButton onClickFn={() => dispatch(addToCart(id))} />
        </StyledDescription>
      </WrapperSingleProduct>
    </StyledSingleProduct>
  );
};

export default SingleProduct;
