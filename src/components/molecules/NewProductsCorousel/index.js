import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import ProductListItem from "../ProductListItem";
import {
  NewProductsHeader,
  StyledNewProductsCorousele,
} from "./StyledNewProductsCorousele";

const responsive = {
  website: {
    breakpoint: { max: 5000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 920 },
    items: 3,
  },
  tablet2: {
    breakpoint: { max: 920, min: 620 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 620, min: 0 },
    items: 1,
  },
};

const NewProductsCorousele = () => {
  const selectedProducts = useSelector(
    ({ productsReducer }) => productsReducer.products
  );

  const newSelectedProd = selectedProducts.filter(
    (prod) => prod.isNew === true
  );

  return (
    <StyledNewProductsCorousele>
      <NewProductsHeader>NEW PRODUCTS</NewProductsHeader>
      <Carousel
        swipeable={false}
        responsive={responsive}
        transitionDuration={500}
      >
        {newSelectedProd.map((product) => (
          <ProductListItem key={product.id} {...product} />
        ))}
      </Carousel>
    </StyledNewProductsCorousele>
  );
};

export default NewProductsCorousele;

// https://www.npmjs.com/package/react-multi-carousel
