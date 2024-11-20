"use client";

import { ProductList } from "@/components/product-list";

export default function Home() {
  return (
    <main className="w-[80%] lg:p-4 my-4 mx-auto flex lg:items-center lg:justify-center">
      <ProductList />
    </main>
  );
}
