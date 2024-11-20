import React, { ComponentProps } from "react";
import {
  CardContainer,
  CardButton,
  CardImage,
  CardTitle,
} from "@/components/@ui/card";
import { moneyFormatterBR } from "@/utils/formatters";
import { StaticImageData } from "next/image";

type ProductCardProps = {
  image: string | StaticImageData;
  title: string;
  value: number;
} & ComponentProps<"div">;
export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  value,
  ...props
}) => {
  return (
    <CardContainer
      {...props}
      className="bg-white w-auto lg:w-[350px] rounded-xl shadow-md overflow-hidden"
    >
      <div className="flex lg:flex-col items-center justify-center">
        <CardImage image={image} />
      </div>
      <CardContainer className="p-4 flex flex-col gap-3">
        <CardTitle size="md">{title}</CardTitle>
        <CardTitle size="sm">
          Valor unitário a partir de : R$ {moneyFormatterBR(value)}
        </CardTitle>
        <CardButton>Criar pedido</CardButton>
      </CardContainer>
    </CardContainer>
  );
};
