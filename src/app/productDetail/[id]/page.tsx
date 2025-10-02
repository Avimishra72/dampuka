"use client";

import { useParams } from "next/navigation";
import productsData from "@/data/productsData.json";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id.toString() === id);

  if (!product) return <div className="p-6">Product not found</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{product?.title}</h1>
      <p className="mt-2 text-gray-700">Price: ₹{product?.price}</p>
      {/* <p className="mt-4">{product?.description}</p> */}
    </div>
  );
}
