"use client";
import { useParams, useRouter } from "next/navigation";

import { LeftArrow } from "@/assets/icons";
import { useAppState } from "@/contexts/app";
import { ProductCreate } from "./product-create";

function Product() {
  const { id } = useParams();
  const { products } = useAppState();
  const router = useRouter();

  const product = products.find((item) => String(item.id) == id);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="p-4 flex flex-col gap-6 justify-center">
      <button
        className="flex items-center w-fit mt-1 text-sm lg:text-md transition-all font-bold"
        onClick={() => router.push("/")}
      >
        <LeftArrow width={30} height={30} />
      </button>
      <h1 className="text-2xl font-semibold">Pedido</h1>
      <ProductCreate image={product.image} title={product.title} />
    </div>
  );
}

export default Product;
