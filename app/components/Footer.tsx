import React from "react";
import Logo from "./Logo";

export function Footer() {
  return (
    <div className="flex flex-col lg:flex-row py-20 mx-auto items-center lg:px-32 space-y-10 lg:space-y-0 lg:space-x-44 text-center lg:text-left text-white bg-black">
      <Logo />
      <p className="text-sm font-light leading-6">
        Marthwaite, Sedbergh <br />
        Cumbria <br />
        +00 44 123 4567
      </p>
      <div className="text-sm font-light leading-6">
        <p>
          OPEN TIMES <br /> MON - FRI: 09:00 AM - 10:00 PM <br />
          SAT - SUN: 09:00 AM - 11:30 PM
        </p>
      </div>
    </div>
  );
}

export default Footer;
