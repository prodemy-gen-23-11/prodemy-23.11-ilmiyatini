import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  REMOVE_FROM_CART,
  UPDATE_CART,
} from "../type";

const initialState = {
  dataCart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        dataCart: [...state.dataCart, action.payload],
      };
    case REMOVE_FROM_CART:
      console.log(action.payload);
      return {
        ...state,
        dataCart: state.dataCart.filter(
          (product) => product.productId !== action.payload
        ),
      };
    case UPDATE_CART:
      console.log("UPDATE_CART");
      console.log(action.payload.id);
      return {
        ...state,
        dataCart: state.dataCart.map((product) =>
          parseInt(product.productId) === action.payload.id
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
      };
    case INCREMENT_QUANTITY:
      return {
        ...state,
        dataCart: state.dataCart.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case DECREMENT_QUANTITY:
      return {
        ...state,
        dataCart: state.dataCart.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        ),
      };
    case CLEAR_CART:
      return {
        ...state,
        dataCart: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
