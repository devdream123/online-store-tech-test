"use client";

import { showConfirmationModal } from "@/context/actions";
import { CartContext, CartContextType } from "@/context/CartContext";
import React, { useContext } from "react";
import { CircleX } from "lucide-react";

const ConfirmationModal = () => {
  const { cart, dispatchCart } = useContext<CartContextType>(CartContext);
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
              Order Confirmation
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={() => {
                dispatchCart(showConfirmationModal(false));
              }}
            >
              <CircleX />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-4 md:p-5">
            <p className="text-3xl text-center">Thank you for your order!</p>
          </div>
          {/* <!-- Modal footer --> */}

          <div className="p-4 md:p-5 border-t border-gray-200 rounded-b">
            <div className="flex items-center flex-col w-full">
              <p className="text-lg mb-5">
                Order Summary: ${cart.totalOrderAmount}
              </p>
              <button
                data-modal-hide="default-modal"
                type="submit"
                className="w-full text-white bg-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={() => {
                  dispatchCart(showConfirmationModal(false));
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfirmationModal;
