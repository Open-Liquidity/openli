import Image from "next/image";
import React from "react";

const Advantages = () => {
  return (
    <div className="w-full relative z-[12] md:-mt-10 sm:-mt-10">
      <div className="absolute z-[8] w-full -top-10 flex justify-center">
        <div className="p-20 border w-[90%] min-h-20  border-highlightDark rounded-[30px] bg-backingDark"></div>
      </div>
      <div className="absolute z-[9] w-full -top-5 flex justify-center">
        <div className="p-[15px] sm:p-20 border w-[95%] min-h-20 border-highlightDark rounded-[30px] bg-backingDark"></div>
      </div>
      <div className="p-0 sm:p-5 relative z-10 border gap-5 border-highlightDark rounded-2xl sm:rounded-[30px] bg-[#171717] grid grid-cols-1 lg:grid-cols-3">
        <div className="relative overflow-hidden border border-secondary rounded-2xl p-2 sm:p-[30px] flex flex-col gap-[30px] items-center text-center">
          <Image
            src="/gradient.svg"
            alt="gradient"
            width={100}
            height={100}
            className="absolute pointer-events-none w-full top-0"
          />
          <div className="flex flex-col gap-[30px] items-center">
            <div className="p-5 rounded-2xl border border-secondary flex items-center justify-center">
              <Image
                src="/advantages/hammer.svg"
                alt="hammer"
                width={40}
                height={40}
              />
            </div>
            <p className="text-2xl sm:text-[32px] bulky">
              {/* Pioneering{" "} */}
              <span className="text-primary">Liquidity Exchange</span> in{" "}
              DeFi
            </p>
          </div>
          <p className="text-sm sm:text-base text-landingSubtext">
            We aim to introduce a{" "}
            <span className="text-primary">decentralized platform</span> that
            allows locked liquidity to be{" "}
            <span className="text-primary">sold, auctioned</span> and used as{" "}
            <span className="text-primary">collateral for loans.</span>
            This will address a critical gap in the market, offering locked
            liquidity holders and investors{" "}
            <span className="text-primary">new opportunities</span> for
            interaction.
          </p>
        </div>
        <div className="relative overflow-hidden border border-secondary rounded-2xl p-2 sm:p-[30px] flex flex-col gap-[30px] items-center text-center">
          <Image
            src="/gradient.svg"
            alt="gradient"
            width={100}
            height={100}
            className="absolute w-full top-0"
          />
          <div className="flex flex-col gap-[30px] items-center">
            <div className="p-5 rounded-2xl border border-secondary flex items-center justify-center">
              <Image
                src="/advantages/advanced.svg"
                alt="advanced"
                width={40}
                height={40}
              />
            </div>
            <p className="text-2xl sm:text-[32px] bulky">
              {/* <span className="text-primary">Provider</span> of Advanced{" "} */}
              <span className="text-primary">Liquidity Locker</span> Solutions
            </p>
          </div>

          <p className="text-sm sm:text-base text-landingSubtext">
            We plan to integrate sophisticated liquidity locker services,
            offering <span className="text-primary">enhanced security</span> and{" "}
            <span className="text-primary">flexibility</span> for{" "}
            <span className="text-primary">project liquidity</span>. This
            development will further cement our platform&apos;s position as a
            comprehensive solution provider in the DeFi landscape.
          </p>
        </div>
        <div className="relative overflow-hidden border border-secondary rounded-2xl p-2 sm:p-[30px] flex flex-col gap-[30px] items-center text-center">
          <Image
            src="/gradient.svg"
            alt="gradient"
            width={100}
            height={100}
            className="absolute w-full top-0"
          />
          <div className="flex flex-col gap-[30px] items-center">
            <div className="p-5 rounded-2xl border border-secondary flex items-center justify-center">
              <Image
                src="/advantages/decentralized.svg"
                alt="decentralized"
                width={40}
                height={40}
              />
            </div>
            <p className="text-2xl sm:text-[32px] bulky">
              <span className="text-primary">Liquidity Provision</span>{" "}
              Service
            </p>
          </div>

          <p className="text-sm sm:text-base text-landingSubtext">
            Our service is strategically designed to bolster <span className="text-primary">developer support</span> by facilitating {" "}
            <span className="text-primary">initial liquidity</span> for new projects.
            This initiative not only aids developers in launching and sustaining their projects effectively but also serves as a pivotal component in generating additional {" "}
            {/* <span className="text-primary">additional revenue stream</span> for the{" "} */}
            <span className="text-primary">revenue streams for the OpenLiquidity DAO.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
