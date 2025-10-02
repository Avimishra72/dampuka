import React from "react";
import Link from "next/link";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const ProductCard = ({ id, title, price, image }: ProductCardProps) => {
  return (
    <div className="w-[calc(25%-12px)] group">
      <div className="w-full h-[300px] mb-3 relative">
        <img src={image} className="w-full h-full object-cover" alt="" />
        <div className="absolute bottom-0 left-0 w-full flex gap-4 p-4 opacity-0 group-hover:opacity-100 transition duration-300 ">
          <button className="bg-[#024E82] border border-[#024E82] mx-auto flex text-white px-4 py-2 cursor-pointer hover:bg-white hover:text-[#024E82] transition duration-300 flex-1 justify-center">
            Buy Now
          </button>
          <Link
            href={`/productDetail/${id}`}
            className="bg-[#024E82] border border-[#024E82] mx-auto flex text-white px-4 py-2 cursor-pointer hover:bg-white hover:text-[#024E82] transition duration-300 flex-1 justify-center"
          >
            View Details
          </Link>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">₹{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
