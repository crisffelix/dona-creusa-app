import React, { ComponentProps, useEffect, useState } from "react";
import {
  CardContainer,
  CardButton,
  CardImage,
  CardTitle,
} from "@/components/@ui/card";
import { moneyFormatterBR } from "@/utils/formatters";
import { StaticImageData } from "next/image";

const WPP_NUMBER = "558584411147";
const PRICES = {
  P: Number(process.env.NEXT_PUBLIC_PRODUCT_PRICE_P),
  M: Number(process.env.NEXT_PUBLIC_PRODUCT_PRICE_M),
  G: Number(process.env.NEXT_PUBLIC_PRODUCT_PRICE_G),
};

type ProductCardProps = {
  image: string | StaticImageData;
  title: string;
} & ComponentProps<"div">;
export const ProductCreate: React.FC<ProductCardProps> = ({
  image,
  title,
  ...props
}) => {
  const [productSize, setProductSize] = useState("P");
  const [unitPrice, setUnitPrice] = useState(PRICES[productSize]);
  const [totalPrice, setTotalPrice] = useState(unitPrice);
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Prevent quantity from going below 1
    }
  };

  const sedMessageToWpp = () => {
    const formattedMessage = encodeURIComponent(`
      🌟 *Pedido Marmitaria Dona Creuza* 🌟
        
      Olá, tudo bem? 😊
        
      Aqui está o resumo do seu pedido com muito carinho:
        
      • Nome do produto: *${title}*
      • Quantidade: *${quantity}*
      • Tamanho: *${productSize}*
      • Valor unitário: *R$ ${moneyFormatterBR(unitPrice)}*
      • Total: *R$ ${moneyFormatterBR(totalPrice)}*
      
      Muito obrigado por confiar em nós! Qualquer dúvida, estamos à disposição.
      
      Com carinho,  
      Marmitaria Dona Creusa ❤
    `);

    window.open(`https://wa.me/${WPP_NUMBER}?text=${formattedMessage}`);
  };

  useEffect(() => {
    setTotalPrice(quantity * unitPrice);
  }, [unitPrice, quantity, productSize]);

  return (
    <CardContainer
      {...props}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <CardImage image={image} />
      <CardContainer className="p-4 flex gap-2 flex-wrap flex-col">
        <CardTitle className="mb-2" color="primary" size="md">
          {title}
        </CardTitle>

        <CardTitle size="sm">
          Valor unitário: R$ {moneyFormatterBR(unitPrice)}
        </CardTitle>

        <div className="flex items-center gap-2">
          <CardTitle size="sm" color="primary">
            Quantidade:
          </CardTitle>

          <CardButton
            onClick={increment}
            className="bg-green-700 text-white px-3 py-1 rounded-md transition duration-200"
          >
            +
          </CardButton>

          <strong>{quantity}</strong>
          <CardButton
            onClick={decrement}
            className="bg-red-600 text-white px-3 py-1 rounded-md transition duration-200"
          >
            -
          </CardButton>
        </div>

        <div className="flex items-center gap-2">
          <CardTitle size="sm" color="primary">
            Tamanho:
          </CardTitle>

          <select
            onChange={(e) => {
              setProductSize(e.target.value);
              setUnitPrice(PRICES[e.target.value]);
            }}
            className="text-sm font-semibold lg:text-md border border-slate-600 px-3 py-1 rounded-md cursor-pointer"
          >
            <option>P</option>
            <option>M</option>
            <option>G</option>
          </select>
        </div>

        <div className="my-2 text-xl font-medium">
          Total do pedido:{" "}
          <strong className="text-slate-800 font-semibold">
            R$ {moneyFormatterBR(totalPrice)}
          </strong>
        </div>

        <CardButton onClick={sedMessageToWpp}>Finalizar pedido</CardButton>
      </CardContainer>
    </CardContainer>
  );
};
