import React from "react";
import Image from "next/image";

import readyBgMobileImg from "../../../assets/homepage/ready-bg-mobile@2x.jpg";
import readyBgTabletImg from "../../../assets/homepage/ready-bg-tablet@2x.jpg";
import readyBgDesktopImg from "../../../assets/homepage/ready-bg-desktop@2x.jpg";
import Button from "../Button";
import Link from "next/link";

export function Ready() {
  return (
    <section className="ready-section | relative flex justify-items-center flex-col w-screen">
      <div className="">
        <Image
          src={readyBgMobileImg}
          alt="Background"
          className="md:hidden lg:hidden"
        />
        <Image
          src={readyBgTabletImg}
          alt="Background"
          className="hidden md:flex lg:hidden"
        />
        <Image
          src={readyBgDesktopImg}
          alt="Background"
          className="hidden lg:block"
        />
        <div className="text-content | text-center absolute left-0 top-0 bottom-0 right-0 z-50 flex flex-col lg:flex-row lg:pt-28 items-start justify-center space-y-6 lg:mx-32">
          <h1 className="px-12 lg:px-0 mx-auto text-3xl lg:text-6xl font-bold text-center text-white">
            Ready to make a reservation?
          </h1>
          <div className="mx-auto pt-10 lg:pt-0" style={{ marginTop: 0 }}>
            <Link href="/reservations">
              <Button textContent="Book a Table" variant={"transparent"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ready;
