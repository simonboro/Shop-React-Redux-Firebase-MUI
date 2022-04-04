import React from "react";
import { StyledProductsMenu } from "./StyledProductsMenu";
import SearchInput from "../../atoms/SearchInput";
import PriceRange from "../../atoms/PriceRange";
import SelectCategories from "../../atoms/SelectCategories";

const ProductsMenu = () => {
  return (
    <StyledProductsMenu>
      <h3>FILTERS</h3>
      <br />
      <SearchInput />
      <br />
      <SelectCategories />
      <br />
      <h3>Price Range</h3>
      <br />
      <PriceRange />
    </StyledProductsMenu>
  );
};

export default ProductsMenu;
