import Image from "next/image";
import React from "react";

import dividerImage from "../../assets/patterns/pattern-divide.svg";

export function Line() {
  return <Image src={dividerImage} alt="Divider line" className="h-2 w-auto lg:my-16 lg:mx-0 mx-auto" />;
}

export default Line;
