import React from "react";
import { useSelector } from "react-redux";
import ProductListItem from "../ProductListItem";
import { StyledProductsList } from "./StyledProductsList";

const ProductsList = () => {
  const selectedProducts = useSelector(
    ({ productsReducer }) => productsReducer.products
  );

  return (
    <ul>
      <StyledProductsList>
        {selectedProducts.length !== 0
          ? selectedProducts.map((product) => (
              <li key={product.id}>
                <ProductListItem {...product} />
              </li>
            ))
          : "There are no products that meet these criteria."}
      </StyledProductsList>
    </ul>
  );
};

export default ProductsList;
