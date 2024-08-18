"use client";

import React, { createContext, useReducer, ReactNode } from "react";
import cartReducer from "../reducers/cartReducer";

const CartContext = createContext({});

export type CartContextType = any;

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, dispatchCart] = useReducer<CartContextType>(cartReducer, {
    products: [],
    isCartOpen: false,
    isCheckoutOpen: false,
    isConfirmationOpen: false,

    totalProductsInCart: 0,
    totalOrderAmount: 0,
  });

  return (
    <CartContext.Provider value={{ cart, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
