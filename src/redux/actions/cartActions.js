import { actionsCartTypes } from "./actionsTypes";

export const addToCart = (productId) => ({
  type: actionsCartTypes.ADD_TO_CART,
  payload: productId,
});

export const deleteItemFromCart = (productId) => ({
  type: actionsCartTypes.DELETE_ITEM_FROM_CART,
  payload: productId,
});

export const deleteWholeFromCart = (productId) => ({
  type: actionsCartTypes.DELETE_WHOLE_FROM_CART,
  payload: productId,
});
