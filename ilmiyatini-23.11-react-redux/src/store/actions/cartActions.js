import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  REMOVE_FROM_CART,
  UPDATE_CART,
} from "../type";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const updateCart = (productId, quantity) => ({
  type: UPDATE_CART,
  payload: { id: productId, quantity },
});

export const incrementQuantity = (productId) => ({
  type: INCREMENT_QUANTITY,
  payload: {
    productId,
  },
});

export const decrementQuantity = (productId) => ({
  type: DECREMENT_QUANTITY,
  payload: {
    productId,
  },
});

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
