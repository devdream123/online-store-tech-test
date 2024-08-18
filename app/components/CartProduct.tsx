"use client";

import React, { useState, useContext } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { Trash2 } from "lucide-react";
import { removeFromCart, updateQuantityInCart } from "@/context/actions";
import { CartContext, CartContextType } from "@/context/CartContext";

interface CartProductProps {
  product: Product;
  dispatchCart: React.Dispatch<{ type: string; payload: Product }>;
}

const CartProduct = ({ product }: CartProductProps) => {
  const { cart, dispatchCart } = useContext<CartContextType>(CartContext);
  const [quantity, setQuantity] = useState<number>(product.quantity ?? 0);

  const handleOnBlur = () => {
    console.log("quantity; ", quantity);
    const existingProductQantity = product.quantity ?? 0;
    const updatedTotalProductsInCart =
      cart.totalProductsInCart - existingProductQantity + quantity;
    dispatchCart(
      updateQuantityInCart(product, quantity, updatedTotalProductsInCart)
    );
  };

  return (
    <div className="flex items-center">
      <div className="w-24 mr-3">
        <Image
          src={product.image ?? ""}
          alt={product.title}
          width={215}
          height={285}
          objectFit="contain"
          priority={false}
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex w-full justify-between items-center">
          <p className="text-sm text-harvey-gray-0 my-5">{product.title}</p>
          <button onClick={() => dispatchCart(removeFromCart(product))}>
            <Trash2 color="#707784" />
          </button>
        </div>
        <div className="flex w-full justify-between items-center">
          <p className="text-lg text-black">{`$${product.price}`}</p>
          <input
            type="number"
            id="quantity"
            className="border border-gray-300 text-gray-900 text-sm rounded-harvey-radius-0 w-16 h-8 px-2.5 py-2.5 mt-8"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            onBlur={handleOnBlur}
          />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
