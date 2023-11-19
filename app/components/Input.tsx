import React from "react";

interface InputProps {
  placeholder: string;
  width?: string;
  inputType?: string;
}

export function Input(props: InputProps) {
  const { placeholder, width, inputType } = props;

  return (
    <input
      className={`input-field | focus:outline-none block border-b-2 text-xl font-light pl-4 pb-2 w-${width}`}
      placeholder={placeholder}
      type={inputType}
    ></input>
  );
}

export default Input;
