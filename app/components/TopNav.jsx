"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { BagIcon, CartModal } from "@/components";
import { CartContext } from "@/context/CartContext";
import { showCartModal } from "@/context/actions";
import CheckoutModal from "./CheckoutModal";
import ConfirmationModal from "./ConfirmationModal";

const TopNav = () => {
  const { cart, dispatchCart } = useContext(CartContext);

  const handleCartIconClick = () => {
    dispatchCart(showCartModal(!cart.isCartOpen));
  };

  return (
    <nav className="fixed z-10 bg-white w-full top-0 border-gray-200 dark:bg-gray-900 shadow-navbar">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="logo.svg" width={20} height={25} alt="Logo" />
        </a>
        <div className="flex items-center">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="flex items-center p-2 w-10 h-10 justify-center text-sm text-harvey-gray-0"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={handleCartIconClick}
          >
            <span className="sr-only">Cart</span>
            <BagIcon />
          </button>
          <span className="text-sm text-harvey-gray-0">
            x {cart.totalProductsInCart}
          </span>
        </div>
      </div>

      <div>{cart.isCartOpen && <CartModal />}</div>
      <div>{cart.isCheckoutOpen && <CheckoutModal />}</div>
      <div>{cart.isConfirmationOpen && <ConfirmationModal />}</div>
    </nav>
  );
};

export default TopNav;
