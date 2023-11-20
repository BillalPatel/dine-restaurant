import React from "react";

import Image from "next/image";
import Logo from "../Logo";

import mobileHero from "../../../assets/booking/hero-bg-mobile@2x.jpg";
import tabletHero from "../../../assets/booking/hero-bg-tablet@2x.jpg";
import desktopHero from "../../../assets/booking/hero-bg-desktop@2x.jpg";

import Button from "../Button";

export function ReservationsHero() {
  return (
    <section className="hero">
      <div className="mobile-hero | -z-50 flex md:hidden lg:hidden relative">
        <Image src={mobileHero} alt="Hero" />
        <div className="absolute mx-auto top-10 text-center">
          <div className="space-y-10">
            <div className="mx-auto flex justify-center">
              <Logo />
            </div>
            <div className="heading | text-white lg:text-left lg:mt-60 space-y-5">
              <h1 className="text-3xl font-light">Reservations</h1>
              <h3 className="text-xl lg:leading-8 lg:pr-96 mx-8 font-light">
                We can’t wait to host you. If you have any special requirements
                please feel free to call on the phone number below. We’ll be
                happy to accommodate you.
              </h3>
              <Button textContent="Reserve Place" variant={"transparent"} />
            </div>
          </div>
          <div className="lg:w-2/4"></div>
        </div>
      </div>

      <div className="tablet-hero | -z-50 hidden md:flex lg:hidden">
        <Image src={tabletHero} alt="Hero" />
        <div className="absolute lg:mx-40 flex flex-row lg:mt-16">
          <div>
            <Logo />
            <div className="heading | text-white lg:text-left lg:mt-60 lg:space-y-6 lg:pr-32">
              <h1 className="lg:text-7xl">Reservations</h1>
              <h3 className="lg:text-2xl lg:font-light lg:leading-8 lg:pr-96">
                We can’t wait to host you. If you have any special requirements
                please feel free to call on the phone number below. We’ll be
                happy to accommodate you.
              </h3>
            </div>
          </div>
          <div className="lg:w-2/4"></div>
        </div>
      </div>

      <div className="desktop-hero | -z-50 hidden md:hidden lg:flex">
        <Image src={desktopHero} alt="Hero" />
        <div className="absolute lg:mx-32 flex flex-row lg:mt-12">
          <div>
            <Logo />
            <div className="heading | text-white lg:text-left lg:mt-60 lg:space-y-6 lg:pr-32">
              <h1 className="lg:text-7xl">Reservations</h1>
              <h3 className="lg:text-2xl lg:font-light lg:leading-8 lg:pr-96">
                We can’t wait to host you. If you have any special requirements
                please feel free to call on the phone number below. We’ll be
                happy to accommodate you.
              </h3>
            </div>
          </div>
          <div className="lg:w-2/4"></div>
        </div>
      </div>
    </section>
  );
}

export default ReservationsHero;
