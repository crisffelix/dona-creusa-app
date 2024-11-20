import Image, { StaticImageData } from "next/image";
import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

type CardContainerProps = ComponentProps<"div">;
export const CardContainer = forwardRef<HTMLDivElement, CardContainerProps>(
  ({ children, ...props }, ref) => {
    return (
      <div {...props} className={twMerge(props.className)} ref={ref}>
        {children}
      </div>
    );
  }
);
CardContainer.displayName = "CardContainer";

type CardImageProps = {
  image: string | StaticImageData;
} & ComponentProps<"img">;
export const CardImage = forwardRef<HTMLImageElement, CardImageProps>(
  ({ image, ...props }, ref) => {
    return (
      <Image
        src={image}
        className="h-[220px] object-cover lg:object-contain"
        alt={props.alt}
        ref={ref}
      />
    );
  }
);
CardImage.displayName = "CardImage";

type CardButtonProps = ComponentProps<"button">;
export const CardButton = forwardRef<HTMLButtonElement, CardButtonProps>(
  ({ ...props }, ref) => {
    return (
      <button
        {...props}
        className={twMerge(
          "mt-1 text-sm lg:text-md transition-all bg-red-800 hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-md",
          props.className
        )}
        ref={ref}
      />
    );
  }
);
CardButton.displayName = "CardButton";

const titleTV = tv({
  base: "font-semibold",
  variants: {
    size: {
      sm: "text-sm lg:text-md",
      md: "text-lg lg:text-xl",
    },
    color: {
      primary: "text-gray-900",
      secondary: "text-gray-700",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
type CardTitleProps = VariantProps<typeof titleTV> & ComponentProps<"h1">;
export const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(
  ({ size, color, children, ...props }, ref) => {
    return (
      <h1 {...props} className={titleTV({ size, color })} ref={ref}>
        {children}
      </h1>
    );
  }
);
CardTitle.displayName = "CardTitle";
