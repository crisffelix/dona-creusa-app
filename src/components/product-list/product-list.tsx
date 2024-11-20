import { useAppState } from "@/contexts/app";
import React from "react";
import { ProductCard } from "./produt-card";
import { useRouter } from "next/navigation";

export const ProductList: React.FC = () => {
  const { products } = useAppState();
  const router = useRouter();

  return (
    <div className="w-full mx-auto items-center flex flex-wrap flex-col lg:flex-row gap-6 lg:gap-3">
      {products.map((item) => (
        <ProductCard
          onClick={() => {
            router.push(`/products/${item.id}`);
          }}
          key={item.title}
          title={item.title}
          value={item.value}
          image={item.image}
        />
      ))}
    </div>
  );
};
