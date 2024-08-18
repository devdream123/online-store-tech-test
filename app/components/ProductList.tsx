"use client";

import React, { useState, useContext, useCallback } from "react";
import { Product } from "@/types/product";
import { ProductCard, Button } from "@/components";
import { CartContext, CartContextType } from "@/context/CartContext";
import { addToCart } from "@/context/actions";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const { dispatchCart } = useContext<CartContextType>(CartContext);
  return (
    <div className="grid md:grid-cols-4 gap-10">
      {products?.map((product: Product) => (
        <div key={product.id} className="flex flex-col justify-between">
          <ProductCard
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating}
          />
          <Button
            className="mt-5 text-white"
            label="Add to Cart"
            onClick={() => {
              dispatchCart(addToCart(product));
            }}
            buttonType="primary"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
