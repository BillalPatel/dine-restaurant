"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../Button";

import familyGatheringMobileImg from "../../../assets/homepage/family-gathering-mobile@2x.jpg";
import familyGatheringTabletImg from "../../../assets/homepage/family-gathering-tablet@2x.jpg";
import familyGatheringDesktopImg from "../../../assets/homepage/family-gathering-desktop@2x.jpg";

import specialEventsMobileImg from "../../../assets/homepage/special-events-mobile@2x.jpg";
import specialEventsTabletImg from "../../../assets/homepage/special-events-tablet@2x.jpg";
import specialEventsDesktopImg from "../../../assets/homepage/special-events-desktop@2x.jpg";

import socialEventsMobileImg from "../../../assets/homepage/social-events-mobile@2x.jpg";
import socialEventsTabletImg from "../../../assets/homepage/social-events-tablet@2x.jpg";
import socialEventsDesktopImg from "../../../assets/homepage/social-events-desktop@2x.jpg";

import patternCurveTopRightImg from "../../../assets/patterns/pattern-curve-top-right.svg";
import patternLinesImg from "../../../assets/patterns/pattern-lines.svg";
import divideLineImg from "../../../assets/patterns/divide-line.svg";

export function FamilyGathering() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mobileImage, setMobileImage] = useState<any>("");
  const [tabletImage, setTabletImage] = useState<any>("");
  const [desktopImage, setDesktopImage] = useState<any>("");

  const [isFamilyGatheringOptionSelected, setIsFamilyGatheringOptionSelected] =
    useState(false);
  const [isSpecialEventsOptionSelected, setIsSpecialEventsOptionSelected] =
    useState(false);
  const [isSocialEventsOptionSelected, setIsSocialEventsOptionSelected] =
    useState(false);

  function handleFamilyGatheringClick() {
    setIsFamilyGatheringOptionSelected(true);
    setIsSpecialEventsOptionSelected(false);
    setIsSocialEventsOptionSelected(false);

    setMobileImage(familyGatheringMobileImg);
    setTabletImage(familyGatheringTabletImg);
    setDesktopImage(familyGatheringDesktopImg);
    setTitle("Family Gathering");
    setContent(
      "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all."
    );
  }

  function handleSpecialEventsClick() {
    setIsSpecialEventsOptionSelected(true);
    setIsFamilyGatheringOptionSelected(false);
    setIsSocialEventsOptionSelected(false);

    setMobileImage(specialEventsMobileImg);
    setTabletImage(specialEventsTabletImg);
    setDesktopImage(specialEventsDesktopImg);
    setTitle("Special Events");
    setContent(
      "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal."
    );
  }

  function handleSocialEventsClick() {
    setIsSocialEventsOptionSelected(true);
    setIsFamilyGatheringOptionSelected(false);
    setIsSpecialEventsOptionSelected(false);

    setMobileImage(socialEventsMobileImg);
    setTabletImage(socialEventsTabletImg);
    setDesktopImage(socialEventsDesktopImg);
    setTitle("Social Events");
    setContent(
      "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone."
    );
  }

  useEffect(() => {
    setIsFamilyGatheringOptionSelected(true);

    setMobileImage(specialEventsDesktopImg);
    setTabletImage(familyGatheringDesktopImg);
    setDesktopImage(familyGatheringDesktopImg);
    setTitle("Family Gathering");
    setContent(
      "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all."
    );
  }, []);

  return (
    <div className="relative">
      <Image
        src={patternCurveTopRightImg}
        alt="Pattern curve"
        className="absolute z-0 -left-52 hidden lg:flex"
      />
      <Image
        src={patternLinesImg}
        alt="Pattern line"
        className="absolute z-10 left-32 top-32 hidden lg:flex"
      />
      <section className="family-gathering-section | flex justify-items-center justify-normal flex-col lg:flex-row mx-auto px-8 py-16 lg:mx-32">
        <Image
          src={familyGatheringMobileImg}
          alt=""
          className="w-full h-auto shadow-2xl md:hidden lg:hidden flex"
        />
        <Image
          src={familyGatheringTabletImg}
          alt=""
          className="w-full h-auto shadow-2xl hidden lg:hidden md:flex"
        />
        <Image
          src={desktopImage}
          alt=""
          className="w-3/4 h-3/4 shadow-2xl hidden md:hidden lg:flex lg:mt-28 max-w-2xl"
        />
        <div className="lg:mx-32 lg:my-52">
          <div className="text-content | text-center lg:text-left mx-3 lg:mx-0 lg:pr-32 flex flex-col lg:flex-col-reverse space-y-10 lg:space-y-0">
            <div className="options | lg:space-y-4 space-y-6 mx-auto lg:mx-0 mt-10 lg:my-0">
              <div className="flex flex-row relative">
                {isFamilyGatheringOptionSelected && (
                  <Image
                    src={divideLineImg}
                    alt="Divider"
                    className="absolute lg:-left-36 lg:w-28 -z-50 lg:top-2 top-8 left-16 opacity-70"
                  />
                )}
                <h2
                  className={`hover:opacity-100 text-lg lg:text-base cursor-pointer tracking-widest lg:mx-0 mx-auto ${
                    isFamilyGatheringOptionSelected
                      ? "opacity-100"
                      : "opacity-50"
                  }`}
                  onClick={handleFamilyGatheringClick}
                >
                  FAMILY GATHERING
                </h2>
              </div>
              <div className="flex flex-row relative">
                {isSpecialEventsOptionSelected && (
                  <Image
                    src={divideLineImg}
                    alt="Divider"
                    className="absolute lg:-left-36 lg:w-28 -z-50 lg:top-2 top-8 left-16 opacity-70"
                  />
                )}
                <h2
                  className={`hover:opacity-100 text-lg lg:text-base cursor-pointer tracking-widest lg:mx-0 mx-auto ${
                    isSpecialEventsOptionSelected ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={handleSpecialEventsClick}
                >
                  SPECIAL EVENTS
                </h2>
              </div>
              <div className="flex flex-row relative">
                {isSocialEventsOptionSelected && (
                  <Image
                    src={divideLineImg}
                    alt="Divider"
                    className="absolute lg:-left-36 lg:w-28 -z-50 lg:top-2 top-8 left-16 opacity-70"
                  />
                )}
                <h2
                  className={`hover:opacity-100 text-lg lg:text-base cursor-pointer tracking-widest lg:mx-0 mx-auto ${
                    isSocialEventsOptionSelected ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={handleSocialEventsClick}
                >
                  SOCIAL EVENTS
                </h2>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <h1 className="text-3xl lg:text-6xl">{title}</h1>
                <p className="font-light text-lg leading-7">{content}</p>
              </div>
              <div className="lg:my-16 md:my-12 my-10">
                <Link href="/reservations">
                  <Button textContent="Book a Table" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FamilyGathering;
