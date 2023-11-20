import React from "react";
import Image from "next/image";

import "../app/globals.css";

import ReservationsHero from "../app/components/sections/ReservationsHero";
import Footer from "@/app/components/Footer";
import MakeReservation from "../app/components/MakeReservation";

import patternBottomRight from "../assets/patterns/pattern-curve-bottom-right.svg";
import patternLines from "../assets/patterns/pattern-lines.svg";

export function Reservations() {
  return (
    <div>
      <ReservationsHero />
      <div className="lg:absolute relative lg:right-56 -top-36 lg:top-72 z-50">
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
      <Footer />
    </div>
  );
}

export default Reservations;
