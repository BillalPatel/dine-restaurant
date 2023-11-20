import React from "react";
import Image from "next/image";

import logoSvg from "../../assets/logo.svg";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="logo-img" href="/">
      <Image
        className="z-50 h-10 justify-self-center"
        src={logoSvg}
        alt="Logo"
      />
    </Link>
  );
}

export default Logo;
