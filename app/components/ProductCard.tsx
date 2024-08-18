import React from "react";
import Image from "next/image";
import RatingStar from "./RatingStar";

interface ProductCardProps {
  id: number;
  title: string;
  image?: string;
  price?: number;
  rating?: {
    rate: number;
    count: number;
  };
}

const ProductCard = ({ image, title, price, rating }: ProductCardProps) => {
  return (
    <div>
      <div className="border border-harvey-gray-1 rounded-harvey-radius-0 flex items-center justify-center px-2.5 py-16 h-96">
        <Image
          src={image ?? ""}
          alt={title}
          width={215}
          height={285}
          objectFit="contain"
          priority={false}
        />
      </div>
      <p className="text-sm text-harvey-gray-0 my-5">{title}</p>
      <div className="flex items-center justify-between">
        <p className="text-lg text-black">{`$${price}`}</p>
        <RatingStar currentRating={Math.floor(Number(rating?.rate))} />
      </div>
    </div>
  );
};

export default ProductCard;
