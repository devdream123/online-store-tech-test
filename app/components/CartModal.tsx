"use client";

import { showCartModal, showCheckoutModal } from "@/context/actions";
import { CartContext, CartContextType } from "@/context/CartContext";
import React, { useContext } from "react";
import CartProduct from "./CartProduct";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import classnames from "classnames";
import { CircleX } from "lucide-react";

const CartModal = () => {
  const { cart, dispatchCart } = useContext<CartContextType>(CartContext);
  const router = useRouter();
  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-10 justify-center items-center w-full h-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-harvey-overlay "
    >
      <div className="relative mx-4 my-4 w-full md:max-w-96 max-h-full  px-5 ml-auto overflow-y-scroll">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Cart
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={() => {
                dispatchCart(showCartModal(false));
              }}
            >
              <CircleX />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-4 md:p-5 space-y-4">
            {cart.products.length === 0
              ? "No item in cart"
              : cart.products.map((product: Product) => (
                  <CartProduct
                    key={product.id}
                    product={product}
                    dispatchCart={dispatchCart}
                  />
                ))}
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              disabled={cart.products.length === 0}
              data-modal-hide="default-modal"
              type="button"
              className={classnames(
                "w-full text-white bg-harvery-success focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center",
                { "cursor-not-allowed opacity-50": cart.products.length === 0 }
              )}
              onClick={() => {
                dispatchCart(showCartModal(false));
                dispatchCart(showCheckoutModal(true));
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartModal;
