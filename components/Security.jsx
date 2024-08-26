import Image from "next/image";
import React from "react";

const Security = () => {
  return (
    <div className="border border-secondary rounded-2xl flex flex-col sm:flex-row gap-[30px] sm:gap-10 bg-gradient-to-b sm:bg-gradient-to-r  from-secondary via-backingDark to-backingDark">
      <div className="p-5 lg:p-[100px] flex items-center justify-center rounded-2xl border border-secondary bg-backingDark">
        <Image src="/security/security.svg" alt="security" className="min-w-[300px]" width={500} height={500} />
      </div>
      <div className="flex justify-center flex-col gap-5 pt-0 sm:pt-[52px] pb-5 sm:pb-[52px] pl-5 sm:pl-0 pr-5 lg:pr-36">
        <p className="text-primary monotext w-fit bg-brandBacking rounded-xl px-2 py-1">
          Security
        </p>
        <p className="text-3xl lg:text-5xl">We Care About Security</p>
        <p className="text-sm sm:text-base text-highlightLight">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary w-fit hover:bg-[#DCB97640] ease-linear duration-100 transition-all bg-brandBacking rounded-xl px-2 py-1 flex gap-3 items-center"
        >Learn more <Image src="/security/arrowupright.svg" alt="arrow" width={22} height={22} /></a>
      </div>
    </div>
  );
};

export default Security;
