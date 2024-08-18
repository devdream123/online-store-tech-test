import { Product } from "@/types/product";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SHOW_CART_MODAL = "SHOW_CART_MODAL";
export const SHOW_CHECKOUT_MODAL = "SHOW_CHECKOUT_MODAL";
export const UPDATE_QUANTITY_IN_CART = "UPDATE_QUANTITY_IN_CART";
export const SHOW_CONFIRMATION_MODAL = "SHOW_CONFIRMATION_MODAL";

export const addToCart = (product: Product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product: Product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const showCartModal = (isActive: boolean) => {
  return {
    type: SHOW_CART_MODAL,
    payload: isActive,
  };
};
export const showCheckoutModal = (isActive: boolean) => {
  return {
    type: SHOW_CHECKOUT_MODAL,
    payload: isActive,
  };
};

export const showConfirmationModal = (isActive: boolean) => {
  return {
    type: SHOW_CONFIRMATION_MODAL,
    payload: isActive,
  };
};

export const updateQuantityInCart = (
  product: Product,
  quantity: number,
  totalProductsInCart: number
) => {
  const productWithNewQuantity = { ...product, quantity };

  return {
    type: UPDATE_QUANTITY_IN_CART,
    payload: { ...productWithNewQuantity, totalProductsInCart },
  };
};
