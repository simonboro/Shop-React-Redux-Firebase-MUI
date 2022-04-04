import React from "react";
import ProductsList from "../../components/molecules/ProductsList";
import ProductsMenu from "../../components/molecules/ProductsMenu";
import { StyledProducts } from "./StyledProducts";

const Products = () => {
  return (
    <StyledProducts>
      <ProductsMenu />
      <ProductsList />
    </StyledProducts>
  );
};

export default Products;
