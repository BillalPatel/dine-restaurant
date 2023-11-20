import React from "react";
import Image from "next/image";

import Line from "../Line";

import salmonFilletMobileImg from "../../../assets/homepage/salmon-mobile@2x.jpg";
import salmonFilletDesktopTabletImg from "../../../assets/homepage/salmon-desktop-tablet@2x.jpg";
import filletMignonMobileImg from "../../../assets/homepage/beef-mobile@2x.jpg";
import filletMignonDesktopTabletImg from "../../../assets/homepage/beef-mobile.jpg";
import chocolateMousseMobileImg from "../../../assets/homepage/chocolate-mobile@2x.jpg";
import chocolateMousseDesktopTabletImg from "../../../assets/homepage/chocolate-desktop-tablet@2x.jpg";

export function Highlights() {
  return (
    <section className="flex flex-col lg:flex-row px-8 pt-20 mx-auto text-center lg:text-left text-white bg-black highlights-section justify-items-center justify-normal lg:px-32">
      <div className="space-y-6 lg:text-left flex flex-col justify-center">
        <div className="lg:mb-12 mb-8">
          <Line />
        </div>
        <h1 className="text-3xl lg:text-6xl px-6 lg:px-0 lg:w-4/6">
          A few highlights from our menu
        </h1>
        <h3 className="font-light text-xl leading-7 lg:w-3/4">
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </h3>
      </div>
      <div className="highlight-images | mt-14 mb-20 lg:my-20">
        <div className="space-y-10 lg:text-left mb-16 lg:mb-7 flex flex-col lg:flex-row">
          <Image
            src={salmonFilletMobileImg}
            alt="Salmon fillet"
            className="w-full h-auto md:hidden lg:hidden"
          />
          <Image
            src={salmonFilletDesktopTabletImg}
            alt="Salmon fillet"
            className="w-80 h-auto hidden md:flex lg:flex"
          />
          <div className="space-y-2 lg:pl-10">
            <h3 className="text-2xl">Seared Salmon Fillet</h3>
            <p className="font-light text-xl leading-7 lg:w-4/5">
              Our locally sourced salmon served with a refreshing buckwheat
              summer salad.
            </p>
          </div>
        </div>
        <div className="space-y-10 mb-10 flex flex-col lg:flex-row">
          <Image
            src={filletMignonMobileImg}
            alt="Fillet mignon"
            className="w-full h-auto md:hidden lg:hidden"
          />
          <Image
            src={filletMignonDesktopTabletImg}
            alt="Fillet mignon"
            className="w-80 h-auto hidden md:flex lg:flex"
          />
          <div className="space-y-2 lg:pl-10">
            <h3 className="text-2xl">Rosemary Filet Mignon</h3>
            <p className="font-light text-xl leading-7 lg:w-4/5">
              Our prime beef served to your taste with a delicious choice of
              seasonal sides.
            </p>
          </div>
        </div>
        <div className="space-y-10 flex flex-col lg:flex-row">
          <Image
            src={chocolateMousseMobileImg}
            alt="Chocolate mousse"
            className="w-full h-auto md:hidden lg:hidden"
          />
          <Image
            src={chocolateMousseDesktopTabletImg}
            alt="Chocolate mousse"
            className="w-80 h-auto hidden md:flex lg:flex"
          />
          <div className="space-y-2 lg:pl-10">
            <h3 className="text-2xl px-16 lg:px-0">Summer Fruit Chocolate Mousse</h3>
            <p className="font-light text-xl leading-7 lg:w-4/5">
              Creamy mousse combined with summer fruits and dark chocolate
              shavings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
