"use client";
import Image from "next/image";
import React from "react";

const Contacts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[50px] mb-5">
      <div className="rounded-[30px] text-center overflow-hidden bg-moduleDark px-4 sm:px-10 2xl:px-[120px]  py-7 sm:py-[60px] relative border border-highlightDark">
        <Image
          src="/gradient.svg"
          alt="gradient"
          width={100}
          height={100}
          className="absolute pointer-events-none w-full h-full object-cover left-0 top-0"
        />
        <div className="flex flex-col items-center justify-center gap-5 ">
          <h3 className=" text-2xl sm:text-[32px] bulky">Community-Driven Development</h3>
          <Image
            src="/contacts/community.svg"
            alt="community"
            width={300}
            height={218}
            className=""
          />
          <p className="text-sm sm:text-base text-landingSubtext">
            This principle emphasizes the strength of decentralized
            decision-making and leverages the collective intelligence and
            expertise of a diverse group of participants to drive innovation,
            sustainability, and success in a project.
          </p>
          <a
            // href="https://snapshot.org/#/%C3%B8xliquidity.eth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary w-fit neutral hover:bg-[#DCB97640] ease-linear duration-100 transition-all bg-brandBacking rounded-xl px-5 py-2 flex gap-3 items-center"
          >
            DAO <Image src="/security/arrowupright.svg" alt="arrow" width={22} height={22} />
          </a>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center rounded-[30px] text-center overflow-hidden bg-moduleDark  px-4 sm:px-10 2xl:px-[120px] py-7 sm:py-[60px] relative border border-highlightDark">
        <Image
          src="/gradient.svg"
          alt="gradient"
          width={100}
          height={100}
          className="absolute pointer-events-none w-full h-full object-cover left-0 top-0"
        />
        <div className="flex flex-col items-center justify-center gap-5 ">
          <h3 className=" text-2xl sm:text-[32px] bulky">LP Hunter Bounty Program</h3>
          <h3 className=" text-[32px] sm:text-[46px]">
            <span className="text-primary">Refer</span> new client{" "}
            <span className="text-primary">Earn $100</span>
          </h3>
          <a
            // href="https://docs.0xliquidityswap.io/oxliquidity-or-swap/lp-bounty-hunter-program"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary w-fit hover:bg-[#DCB97640] ease-linear neutral duration-100 transition-all bg-brandBacking rounded-xl px-5 py-2 flex gap-3 items-center"
          >
            Learn more <Image src="/security/arrowupright.svg" alt="arrow" width={22} height={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
