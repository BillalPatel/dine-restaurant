import React from "react";
import Image from "next/image";

import ReservationsHero from "../components/sections/ReservationsHero";
import MakeReservation from "../components/MakeReservation";

import patternBottomRight from "../../assets/patterns/pattern-curve-bottom-right.svg";
import patternLines from "../../assets/patterns/pattern-lines.svg";

export function Reservations() {
  return (
    <div>
      <ReservationsHero />
      <div className="lg:absolute relative lg:right-32 lg:top-36 -top-32">
        <MakeReservation />
      </div>
      <section className="pattern hidden lg:flex">
        <div className="relative">
          <Image src={patternBottomRight} alt="Pattern" className="-z-50" />
          <Image
            src={patternLines}
            alt="Pattern lines"
            className="mx-72 absolute top-40 left-96"
          />
        </div>
      </section>
    </div>
  );
}

export default Reservations;
