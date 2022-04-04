import { actionsProductsTypes } from "./actionsTypes";

export const filterByCategories = (category) => {
  return {
    type: actionsProductsTypes.FILTER_BY_CATEGORIES,
    payload: category,
  };
};

export const searchByPhrase = (searchedPhrase) => {
  return {
    type: actionsProductsTypes.SEARCH_BY_PHRASE,
    payload: searchedPhrase,
  };
};

export const handleCategoryProductChange = (value) => ({
  type: actionsProductsTypes.HANDLE_CATEGORY_PRODUCT_CHANGE,
  payload: value,
});

export const handleSearchProductInput = (value) => ({
  type: actionsProductsTypes.HANDLE_SEARCH_PRODUCT_INPUT,
  payload: value,
});

export const handlePriceRangeProductInput = (value) => ({
  type: actionsProductsTypes.HANDLE_PRICE_RANGE_PRODUCT_INPUT,
  payload: value,
});

export const filterProducts = () => ({
  type: actionsProductsTypes.FILTER_PRODUCTS,
});
