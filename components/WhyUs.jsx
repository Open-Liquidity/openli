import Image from "next/image";
import React from "react";

const cardArr = [
  {
    title: "Decentralization",
    icon: "/whyus/safety.svg",
    description:
      "OpenLiquidity is powered by smart contracts, transactions are executed automatically and transparently on the blockchain, allowing anyone to participate and have direct control over their assets without intermediaries controlling or administering financial services.",
    firstText: true,
  },
  {
    title: "Security and Transparency",
    icon: "/whyus/immediate.svg",
    description:
      "To establish a solid foundation of trust and security, OpenLiquidity has undergone a rigorous audit and KYC process conducted by Cyberscope. This ensures that all operations are up to the highest standards of safety and compliance.",
    secondText: true,
  },
  {
    title: "Accessibility",
    icon: "/whyus/global.svg",
    description:
      "No traditional bank account or credit history is required to participate in DeFi. Anyone with a digital wallet and an internet connection can access OpenLiquidity services.",
  },
];

const WhyUs = () => {
  return (
    <div className="p-[15px] sm:p-[30px] lg:p-[60px] flex flex-col gap-[15px] sm:gap-[30px] items-center border border-secondary rounded-[30px]">
      <h3 className="text-[32px] sm:text-[46px] text-center">
        Key Principles of OpenLiquidity
      </h3>
      <div className="grid grid-cols-3 gap-[30px] bg-opacity-0">
        {cardArr.map((el, index) => (
          <div
            key={el.title}
            className={`border border-highlightDark bg-moduleDark rounded-2xl p-[15px] sm:p-[30px] flex flex-col gap-[15px] ${
              index === 2
                ? "col-span-3 lg:col-span-1"
                : "col-span-3 lg:col-span-1 justify-between"
            }`}
          >
            <div className="flex gap-3 items-center">
              <Image src={el.icon} alt={el.title} width={30} height={30} />{" "}
              <p className="bg-brandBacking neutral text-brand px-[10px] py-[6px] rounded-[15px]">
                {el.title}
              </p>
            </div>
            <p className="text-sm sm:text-base text-landingSubtext">
              {el.description}
            </p>
            {el.firstText ? (
              <div className="text-sm sm:text-base text-maintextDark rounded-2xl flex items-center gap-3 px-0 sm:px-5 py-1 ">
                <p className="text-sm sm:text-2xl md:text-2xl lg:text-lg text-primary">Powered by</p>
                <a
                  className="hover:scale-105 ease-linear duration-100 transition-all"
                  href="https://cryptodo.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/whyus/cryptodo2.png"
                    alt="kleros"
                    width={50}
                    height={20}
                    className="my-3"
                  />
                </a>
                <a href="https://cryptodo.app"><p className="block xl:block sm:text-2xl md:text-2xl lg:text-lg">CryptoDo</p></a>
              </div>
            ) : el.secondText ? (
              <div className="text-sm min-h-[80px] sm:text-sm rounded-2xl flex  items-center gap-3 lg:gap-3 2xl:gap-6 px-0 sm:px-5 py-1">
                <a
                  className="block neutral lg:hidden xl:block my-3 min-w-[50px] text-center px-3 py-2 rounded-xl hover:bg-[#DCB97640] ease-linear duration-100 transition-all text-primary bg-brandBacking"
                  href="https://github.com/cyberscope-io/audits/blob/main/0xlp/audit.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Audit
                </a>
                <Image
                  src="/whyus/cyber.png"
                  alt="kleros"
                  width={40}
                  height={10}
                  className="my-3"
                />
                <a href="https://github.com/cyberscope-io/audits/blob/main/0xlp/audit.pdf"><p className="block xl:block sm:text-2xl md:text-2xl lg:text-lg">Cyberscope</p></a>
                <a
                  className="block neutral lg:hidden xl:block my-3 min-w-[45px] text-center px-3 py-2 rounded-xl hover:bg-[#DCB97640] ease-linear duration-100 transition-all text-primary bg-brandBacking"
                  href="https://github.com/coinscope-co/kyc/blob/main/0xlp/kyc.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KYC
                </a>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
