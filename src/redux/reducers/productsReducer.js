import { localData } from "../../localData";
import {
  actionsCartTypes,
  actionsProductsTypes,
} from "../actions/actionsTypes";

const initialState = {
  products: [...localData],
  initialProducts: [...localData],
  productsCart: [],
  // filters:
  selectedProductCategory: "All",
  searchedPhrase: "",
  maxPrice: 0,
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let productsCartUpdate = [];

  switch (type) {
    case actionsCartTypes.ADD_TO_CART:
      let isProductAlreadyInCart = false;

      state.productsCart.forEach((el) => {
        if (el.id === payload) {
          isProductAlreadyInCart = true;
        }
      });

      if (!isProductAlreadyInCart) {
        productsCartUpdate = [
          ...state.productsCart,
          state.products.find((product) => payload === product.id),
        ];
      }

      if (isProductAlreadyInCart) {
        productsCartUpdate = state.productsCart.map((prod) => {
          if (prod.id === payload) {
            let newQuantity = prod.inCartQuantity; // to avoid reference to prod
            newQuantity += 1;

            return {
              ...prod,
              inCartQuantity: newQuantity,
            };
          }
          return {
            ...prod,
          };
        });
      }

      return {
        ...state,
        productsCart: [...productsCartUpdate],
      };

    case actionsCartTypes.DELETE_ITEM_FROM_CART:
      let isProductQuantityMoreThanOne = false;

      state.productsCart.forEach((el) => {
        if (el.id === payload) {
          if (el.inCartQuantity > 1) {
            isProductQuantityMoreThanOne = true;
          }
        }
      });

      if (isProductQuantityMoreThanOne) {
        productsCartUpdate = state.productsCart.map((prod) => {
          if (prod.id === payload) {
            let newQuantity = prod.inCartQuantity;
            newQuantity -= 1;

            return {
              ...prod,
              inCartQuantity: newQuantity,
            };
          }
          return {
            ...prod,
          };
        });
      }

      if (!isProductQuantityMoreThanOne) {
        productsCartUpdate = [
          ...state.productsCart.filter((product) => payload !== product.id),
        ];
      }

      return {
        ...state,
        productsCart: [...productsCartUpdate],
      };

    case actionsCartTypes.DELETE_WHOLE_FROM_CART:
      return {
        ...state,
        productsCart: state.productsCart.filter(
          (product) => payload !== product.id
        ),
      };

    case actionsProductsTypes.HANDLE_CATEGORY_PRODUCT_CHANGE:
      return {
        ...state,
        selectedProductCategory: payload,
      };

    case actionsProductsTypes.HANDLE_SEARCH_PRODUCT_INPUT:
      return {
        ...state,
        searchedPhrase: payload,
      };

    case actionsProductsTypes.HANDLE_PRICE_RANGE_PRODUCT_INPUT:
      return {
        ...state,
        maxPrice: payload,
      };

    case actionsProductsTypes.FILTER_PRODUCTS:
      let tempProducts = [...state.initialProducts];

      if (state.selectedProductCategory !== "All") {
        tempProducts = tempProducts.filter(
          (product) => product.category === state.selectedProductCategory
        );
      }

      if (state.searchedPhrase.length !== 0) {
        tempProducts = tempProducts.filter((prod) =>
          prod.name.toLowerCase().includes(state.searchedPhrase.toLowerCase())
        );
      }

      // if (state.maxPrice !== "") {
      tempProducts = tempProducts.filter(
        (prod) => prod.price <= state.maxPrice
      );
      // }

      return {
        ...state,
        products: [...tempProducts],
      };

    // case actionsProductsTypes.FILTER_BY_CATEGORIES:
    //   if (payload === "All") {
    //     filteredProd = state.initialProducts.map((prod) => prod);
    //   } else {
    //     filteredProd = state.initialProducts.filter(
    //       (prod) => prod.category === payload
    //     );
    //   }

    //   return {
    //     ...state,
    //     products: filteredProd,
    //     selectedProductCategory: payload,
    //   };

    // case actionsProductsTypes.SEARCH_BY_PHRASE:
    //   if (payload === "") {
    //     filteredProd = state.initialProducts.map((prod) => prod);
    //   } else {
    //     filteredProd = state.initialProducts.filter((prod) =>
    //       prod.name.toLowerCase().includes(payload.toLowerCase())
    //     );
    //   }

    //   return {
    //     ...state,
    //     products: filteredProd,
    //     searchedPhrase: payload,
    //   };

    default:
      return state;
  }
};

export default productsReducer;
