import React from "react";
import { Star } from "lucide-react";

type RatingStarProps = {
  currentRating: number;
};

const RatingStar = ({ currentRating }: RatingStarProps) => {
  const fiveStars = Array.from({ length: 5 });
  return (
    <div className="flex">
      {fiveStars.map((_, index) => {
        if (index < currentRating) {
          return <Star key={index} fill="#f9c139" color="#f9c139" />;
        } else {
          return <Star key={index} fill="#e6e7ea" color="#e6e7ea" />;
        }
      })}
    </div>
  );
};

export default RatingStar;
