import React from "react";

interface ButtonProps {
  textContent: string;
  bgColour: "white" | "black";
  hoverBgColour: "white" | "black";
  hoverTextColour: "white" | "black";
  textColour: "white" | "black";
  borderColour?: "white" | "black";
}

export function Button(props: ButtonProps) {
  const {
    textContent,
    bgColour,
    hoverBgColour,
    borderColour,
    textColour,
    hoverTextColour,
  } = props;

  return (
    <button
      className={`py-4 text-white border border-${borderColour} px-14 text-center cursor-pointer uppercase bg-${bgColour} hover:bg-${hoverBgColour} hover:text-black`}
    >
      {textContent}
    </button>
  );
}

export default Button;
