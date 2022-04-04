import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cartActions";
import BuyButton from "../../atoms/BuyButton";
import LinkItem from "../../atoms/LinkItem";
import { StyledProductListItem, WrapperProduct } from "./StyledProductListItem";

const ProductListItem = ({ id, name, price, image, desc }) => {
  const dispatch = useDispatch();

  return (
    <StyledProductListItem>
      <WrapperProduct>
        <LinkItem
          pathConfig={{
            pathname: `/products/${name.replace(/\s/g, "-")}`,
            state: {
              id,
              name,
              price,
              image,
              desc,
            },
          }}
        >
          <WrapperProduct>
            <img src={image} alt={name} style={{ width: "200px" }} />
            <br />
            <h3>{name}</h3>
            <br />
            <h4>{price}$</h4>
            <br />
          </WrapperProduct>
        </LinkItem>
        <BuyButton onClickFn={() => dispatch(addToCart(id))} />
      </WrapperProduct>
    </StyledProductListItem>
  );
};

export default ProductListItem;
