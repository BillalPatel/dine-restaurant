import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../Logo";

import mobileHero from "../../../assets/homepage/hero-bg-mobile@2x.jpg";
import tabletHero from "../../../assets/homepage/hero-bg-tablet@2x.jpg";
import desktopHero from "../../../assets/homepage/hero-bg-desktop@2x.jpg";
import Button from "../Button";

export function Hero() {
  return (
    <section className="hero">
      <div className="mobile-hero | -z-50 md:hidden lg:hidden font-light">
        <Image src={mobileHero} alt="" />
        <div className="absolute top-40 bottom-0 left-0 right-0 grid items-center content-center space-y-6 h-3/4 place-items-center">
          <Logo />
          <div className="mx-6 px-6 lg:px-0 text-center text-white space-y-6">
            <h1 className="px-14 text-3xl leading-10">
              Exquisite dining since 1989
            </h1>
            <h3 className="leading-7 text-lg px-1">
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </h3>
          </div>
          <div className="flex mx-auto justify-self-center pt-6">
            <Link href="/reservations">
              <Button textContent="Book a Table" />
            </Link>
          </div>
        </div>
      </div>

      <div className="tablet-hero | -z-50 hidden md:flex lg:hidden">
        <Image src={tabletHero} alt="" />
        <div className="absolute top-0 bottom-0 left-0 right-0 grid items-center content-center space-y-6 h-3/4 place-items-center">
          <Logo />
          <div className="mx-6 text-center text-white ">
            <h1 className="px-10 text-3xl">Exquisite dining since 1989</h1>
            <h3 className="">
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </h3>
          </div>
          <div className="flex mx-auto justify-self-center">
            <Link href="/reservations">
              <Button textContent="Book a Table" />
            </Link>
          </div>
        </div>
      </div>

      <div className="desktop-hero | -z-50 hidden md:hidden lg:flex">
        <Image src={desktopHero} alt="" />
        <div className="absolute top-0 bottom-0 left-0 flex flex-col h-full text-left ml-32 my-10 w-2/6 space-y-40 mt-12">
          <Logo />
          <div>
            <div className="text-white space-y-5 min-w-max">
              <h1 className=" text-7xl font-light">
                Exquisite dining <br /> since 1989
              </h1>
              <h3 className="font-light text-2xl  min-w-max">
                Experience our seasonal menu in beautiful country <br />{" "}
                surroundings. Eat the freshest produce from the <br /> comfort
                of our farmhouse.
              </h3>
              <div className="pt-5">
                <Link href="/reservations">
                  <Button textContent="Book a Table" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero();
