import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SHOW_CART_MODAL,
  UPDATE_QUANTITY_IN_CART,
  SHOW_CHECKOUT_MODAL,
  SHOW_CONFIRMATION_MODAL,
} from "../actions";
import { Product } from "@/types/product";

export type CartState = {
  products: Product[];
  isCartOpen: boolean;
  totalProductsInCart: number;
  totalOrderAmount: number;
};

const cartReducer = (
  state: CartState,
  action: { type: string; payload: Product & { totalProductsInCart: number } }
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productInCart = state.products.find(
        (cartProduct) => cartProduct.id === action.payload.id
      );
      const totalProductsInCart =
        state.totalProductsInCart > 0 ? state.totalProductsInCart + 1 : 1;
      if (!productInCart) {
        return {
          ...state,
          products: [...state.products, { ...action.payload, quantity: 1 }],
          totalProductsInCart,
        };
      } else {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product?.quantity && product?.quantity + 1,
                }
              : product
          ),
          totalProductsInCart,
          totalOrderAmount: state.totalOrderAmount + action.payload.price,
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
        totalProductsInCart:
          state.totalProductsInCart - action.payload.quantity,
        totalOrderAmount: state.totalOrderAmount - action.payload.price,
      };

    case UPDATE_QUANTITY_IN_CART:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                quantity: action.payload.quantity,
              }
            : product
        ),
        totalProductsInCart: action.payload.totalProductsInCart,
        totalOrderAmount: state.totalOrderAmount + action.payload.price,
      };

    case SHOW_CART_MODAL:
      return {
        ...state,
        isCartOpen: action.payload,
      };

    case SHOW_CHECKOUT_MODAL:
      return {
        ...state,
        isCheckoutOpen: action.payload,
      };

    case SHOW_CONFIRMATION_MODAL:
      return {
        ...state,
        isConfirmationOpen: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
