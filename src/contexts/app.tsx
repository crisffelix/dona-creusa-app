"use client";

import React, { ReactNode, useState } from "react";
import Img1 from "@/assets/images/1.jpg";
import Img2 from "@/assets/images/2.jpg";
import Img3 from "@/assets/images/3.jpg";
import Img4 from "@/assets/images/4.jpg";

const initialState = {
  setProduct: (value: unknown) => value,
  setProducts: (value: unknown) => value,
  product: null,
  products: [
    {
      id: 1,
      title: "Frango cremoso, arroz com brócolis e feijão carioca",
      value: 10,
      image: Img1,
    },
    {
      id: 2,
      title: "Filé mignon suíno acebolado, arroz e feijão",
      value: 10,
      image: Img2,
    },
    {
      id: 3,
      title: "Filé mignon suíno acebolado, arroz e feijão",
      value: 10,
      image: Img3,
    },
    {
      id: 4,
      title: "Filé mignon suíno acebolado, arroz e feijão",
      value: 10,
      image: Img4,
    },
    {
      id: 5,
      title: "Filé mignon suíno acebolado, arroz e feijão",
      value: 10,
      image: Img4,
    },
    {
      id: 6,
      title: "Filé mignon suíno acebolado, arroz e feijão",
      value: 10,
      image: Img4,
    },
    {
      id: 7,
      title: "Filé mignon suíno acebolado, arroz e feijão",
      value: 10,
      image: Img4,
    },
    {
      id: 8,
      title: "Filé mignon suíno acebolado, arroz e feijão",
      value: 10,
      image: Img4,
    },
  ],
};

export const AppContext = React.createContext<typeof initialState>({
  products: initialState.products,
  product: initialState.product,
  setProducts: initialState.setProducts,
  setProduct: initialState.setProduct,
});

type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [products, setProducts] = useState(initialState.products);
  const [product, setProduct] = useState(initialState.product);

  return (
    <AppContext.Provider
      value={{
        products,
        product,
        setProducts,
        setProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => React.useContext(AppContext);
