import React from "react";
import Image from "next/image";

import logoSvg from "../../assets/logo.svg";

export function Logo() {
  return (
    // <div className="logo-img |">
      <Image className="z-50 h-10 justify-self-center" src={logoSvg} alt="Logo" />
    // </div>
  );
}

export default Logo;
