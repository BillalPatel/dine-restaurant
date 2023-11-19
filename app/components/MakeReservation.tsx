"use client";

import React, { useState } from "react";

import Input from "./Input";
import Button from "./Button";

import decreaseIcon from "../../assets/icons/icon-minus.svg";
import increaseIcon from "../../assets/icons/icon-plus.svg";
import Image from "next/image";

export function MakeReservation() {
  const [qty, setQty] = useState<number>(5);

  function handleDecreaseClick() {
    if (qty < 2) {
      return;
    } else if (qty <= 9) {
      setQty(qty - 1);
    }
  }

  function handleIncreaseClick() {
    if (qty > 8) {
      return;
    } else {
      setQty(qty + 1);
    }
  }

  function handleError() {
    
  }

  return (
    <div
      className="px-12 bg-white flex flex-col space-y-10 w-10/12 lg:w-full mx-auto max-w-xl py-12"
      style={{ boxShadow: "0px 75px 100px -50px rgba(56, 66, 85, 0.50)" }}
    >
      <Input placeholder="Name" width="full" />
      <Input placeholder="Email" width="full" inputType="email" />
      <div className="pick-date | flex flex-col lg:flex-row">
        <p className="lg:font-light lg:min-w-fit lg:pr-10 text-xl mr-14 lg:mr-0 mb-2 lg:mb-0">
          Pick a date
        </p>
        <div className="flex flex-row justify-evenly space-x-4 w-fit">
          <Input placeholder="MM" width={"1/3"} inputType="number" />
          <Input placeholder="DD" width={"1/3"} inputType="number" />
          <Input placeholder="YYYY" width={"1/3"} inputType="number" />
        </div>
      </div>
      <div className="pick-time | flex flex-col lg:flex-row">
        <p className="lg:font-light lg:min-w-fit lg:pr-10 text-xl mr-14 lg:mr-0 mb-2 lg:mb-0">
          Pick a time
        </p>
        <div className="flex flex-row space-x-4">
          <input
            className={`input-field | focus:outline-none block border-b-2 text-xl font-light pl-4 pb-2 w-1/3`}
            placeholder="09"
            type="number"
            maxLength={2}
          ></input>
          <input
            className="input-field | focus:outline-none block border-b-2 text-xl font-light pl-4 pb-2 w-1/3"
            placeholder="00"
            maxLength={2}
            type="number"
          ></input>
          <select id="time" name="time" className="text-xl font-light pb-2">
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row relative">
        <button
          className="border-b-2 cursor-pointer px-6 pb-3 z-50"
          onClick={handleDecreaseClick}
        >
          <Image src={decreaseIcon} alt="Decrease" />
        </button>
        <input
          // value={qty}
          className="qty | focus:outline-none block border-b-2 text-xl text-center pb-2 pr-12 w-full font-bold "
        ></input>
        <label className="absolute mx-auto w-full text-center left-3 bottom-3 text-xl ">
          {qty > 1 ? 'people' : 'person'}
        </label>
        <button
          className="border-b-2 cursor-pointer px-6 pb-3 z-50"
          onClick={handleIncreaseClick}
        >
          <Image src={increaseIcon} alt="Increase" />
        </button>
      </div>
      <Button
        textContent={"make reservation"}
        bgColour={"black"}
        hoverBgColour={"white"}
        hoverTextColour={"black"}
        textColour={"black"}
      />
    </div>
  );
}

export default MakeReservation;
