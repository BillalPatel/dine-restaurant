import React, { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  ["button", "uppercase", "text-white", "border", "outline", "outline-1", "font-bold"],
  {
    variants: {
      variant: {
        onDark: [
          "bg-black",
          "text-white",

          "border-transparent",

          "hover:bg-white",
          "hover:text-black",
          "hover:border-black",
        ],
        transparent: [
          "bg-none",
          "text-white",

          "border-white",
          "hover:bg-white",
          "hover:text-black",
        ],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["py-4", "px-10"],
      },
    },
    compoundVariants: [
      { variant: "onDark", size: "medium", class: "uppercase" },
    ],
    defaultVariants: {
      variant: "onDark",
      size: "medium",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  textContent?: string;
  onClick?: any;
}

export function Button(props: ButtonProps) {
  const { variant, textContent } = props;

  return <button className={button({ variant })}>{textContent}</button>;
}

export default Button;
