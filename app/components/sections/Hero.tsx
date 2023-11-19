import React from "react";
import Image from "next/image";

import Logo from "../Logo";

import mobileHero from "../../../assets/homepage/hero-bg-mobile@2x.jpg";
import tabletHero from "../../../assets/homepage/hero-bg-tablet@2x.jpg";
import desktopHero from "../../../assets/homepage/hero-bg-desktop@2x.jpg";
import Button from "../Button";

export function Hero() {
  return (
    <section className="hero">
      <div className="mobile-hero | -z-50 md:hidden lg:hidden">
        <Image src={mobileHero} alt="" />
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
            <Button
              textContent="book a table"
              bgColour="white"
              hoverBgColour="white"
              textColour="black"
            />
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
            <Button
              textContent="book a table"
              bgColour="white"
              hoverBgColour="black"
              textColour="white"
            />
          </div>
        </div>
      </div>

      <div className="desktop-hero | -z-50 hidden md:hidden lg:flex">
        <Image src={desktopHero} alt="" />
        <div className="absolute top-0 bottom-0 left-0 flex flex-col h-full text-left ml-32 my-10 w-2/6 space-y-40">
          {/* <div className=""> */}
          <Logo />
          {/* </div> */}
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
                <Button
                  textContent="book a table"
                  bgColour="white"
                  hoverBgColour="white"
                  textColour="white"
                  hoverTextColour="black"
                  borderColour="white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero();
