import React from "react";
import Image from "next/image";

import Line from "../Line";

import enjoyablePlaceMobileImg from "../../../assets/homepage/enjoyable-place-mobile.jpg";
import enjoyablePlaceTabletImg from "../../../assets/homepage/enjoyable-place-tablet@2x.jpg";
import enjoyablePlaceDesktopImg from "../../../assets/homepage/enjoyable-place-desktop@2x.jpg";
import patternCurveTopRightImg from "../../../assets/patterns/pattern-curve-top-right.svg";
import patternCurveTopLefttImg from "../../../assets/patterns/pattern-curve-top-left.svg";
import locallySourcedMobileImg from "../../../assets/homepage/locally-sourced-mobile@2x.jpg";
import locallySourcedTabletImg from "../../../assets/homepage/locally-sourced-tablet@2x.jpg";
import locallySourcedDesktopImg from "../../../assets/homepage/locally-sourced-desktop@2x.jpg";

export function Info() {
  return (
    <div className="pb-20 lg:pb-0">
      <section className="info-section-one | flex justify-items-center justify-normal flex-col mx-auto px-8 lg:mx-32">
        <div className="flex flex-col lg:flex-row mb-10 lg:mb-0">
          <Image
            src={enjoyablePlaceMobileImg}
            alt="Enjoyable Place"
            className="w-full h-auto shadow-2xl relative -top-14 md:hidden lg:hidden"
          />
          <Image
            src={enjoyablePlaceTabletImg}
            alt="Enjoyable Place"
            className="h-auto shadow-2xl relative -top-14 hidden md:flex lg:hidden w-2/4"
          />

          <Image
            src={patternCurveTopRightImg}
            alt="Pattern"
            className="absolute left-0 hidden md:hidden lg:flex -z-50 w-[60rem] mt-60"
          />
          <Image
            src={enjoyablePlaceDesktopImg}
            alt="Enjoyable Place"
            className="shadow-2xl relative -top-14 hidden md:hidden lg:flex w-2/4"
          />
          <div className="text-content | text-center mx-6 lg:ml-28 lg:my-20 lg:text-left lg:px-14 lg:pr-60 space-y-4">
            <div className="mb-10 lg:mb-0">
              <Line />
            </div>
            <h1 className="px-10 text-3xl lg:text-6xl lg:px-0">
              Enjoyable place for all the family
            </h1>
            <h3 className="font-light text-xl leading-7">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </h3>
          </div>
        </div>
      </section>

      <section className="info-section-two | flex justify-items-center justify-normal flex-col mx-auto px-8 lg:mx-32">
        <div className="flex flex-col lg:flex-row-reverse">
          <Image
            src={locallySourcedMobileImg}
            alt="Enjoyable Place"
            className="w-full h-auto shadow-2xl md:hidden lg:hidden"
          />
          <Image
            src={locallySourcedTabletImg}
            alt="Enjoyable Place"
            className="w-full h-auto shadow-2xl hidden md:flex lg:hidden"
          />

          <Image
            src={patternCurveTopLefttImg}
            alt="Pattern"
            className="absolute right-0 hidden md:hidden lg:flex -z-50 w-[60rem] mt-96"
          />
          <Image
            src={locallySourcedDesktopImg}
            alt="Enjoyable Place"
            className="shadow-2xl relative hidden md:hidden lg:flex w-2/4 -bottom-14"
          />
          <div className="text-content | text-center mx-6 lg:ml-28 lg:my-20 lg:text-left lg:px-14 lg:pr-60 space-y-4">
            <div className="mt-14 mb-10 lg:mb-0">
              <Line />
            </div>
            <h1 className="px-6 text-3xl lg:text-6xl lg:px-0">
              The most locally sourced food
            </h1>
            <h3 className="font-light text-xl leading-7">
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;
