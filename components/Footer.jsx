import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="relative mt-[60px] sm:mt-[100px] mb-4 sm:mb-10 p-7 overflow-hidden rounded-[30px] border border-secondary bg-moduleDark flex justify-between gap-32 flex-col">
      <Image
        src="/gradient.svg"
        alt="footer"
        width={1920}
        height={500}
        className="w-full pointer-events-none absolute bottom-0 rotate-180 object-contain left-0"
      />
      <div className="flex justify-between gap-10">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-32 items-start w-full">
          <div className="flex justify-between w-full lg:w-fit">
            <div className="flex gap-3 items-center">
              <Image
                alt="logo"
                src="/navbar/logoShort.svg"
                width={33}
                height={33}
                className="flex"
              />
              <p className="text-xl hidden sm:flex text" style={{ color: '#D2CFC9' }}>OpenLiquidity</p>
            </div>
            <div className="flex lg:hidden gap-3 sm:gap-5 items-start">
              <a
                href="https://t.me/Open_Liquidity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/footer/telegram.svg"
                  alt="telegram"
                  width={28}
                  height={24}
                  className="h-7"
                />
              </a>
              <a
                href="https://x.com/Open_Liquidity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/footer/x.svg"
                  alt="x"
                  width={26}
                  height={24}
                  className="h-7"
                />
              </a>
              <a
                href="https://docs.openliquidity.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/footer/gitbook.svg"
                  alt="gitbook"
                  width={33}
                  height={24}
                  className="h-7"
                />
              </a>
              <a
                href="https://medium.com/@0xLiquidity/stage-one-pioneering-liquidity-exchange-in-decentralized-finance-f6c4e70945ea"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/footer/medium.svg"
                  alt="medium"
                  width={42}
                  height={24}
                  className="h-7"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-[60px] sm:gap-[70px]">
            <div className="flex flex-col gap-4">
              <p className="text-primary ">About</p>
              <a
                href="https://docs.openliquidity.io"
                className="text-subtextDark hover:text-maintextDark "
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
              {/* <a
                className="text-subtextDark hover:text-maintextDark "
                href="https://www.coingecko.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                CoinGecko
              </a>
              <p className="text-subtextDark hover:text-maintextDark ">
                CoinMarketCap
              </p> */}
              <a
                className="text-subtextDark hover:text-maintextDark "
                href="https://docs.openliquidity.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Disclaimer
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-primary ">Support</p>
              <a 
                href="https://app.openliquidity.io"
                className="text-subtextDark hover:text-maintextDark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Getting Started
              </a>
              {/* <p className="text-subtextDark hover:text-maintextDark ">FAQ</p> */}
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-primary ">Community</p>
              <a
                href="https://t.me/Open_Liquidity"
                className="text-subtextDark hover:text-maintextDark "
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
              <a
                href="https://x.com/Open_Liquidity"
                className="text-subtextDark hover:text-maintextDark "
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
              <a
                href="https://medium.com/@0xLiquidity/stage-one-pioneering-liquidity-exchange-in-decentralized-finance-f6c4e70945ea"
                className="text-subtextDark hover:text-maintextDark "
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </a>
            </div>
            {/* <div className="flex flex-col gap-4">
              <p className="text-primary ">Liquidity Marketplace Contracts</p>
              <a
                href=""
                className="text-subtextDark hover:text-maintextDark "
                target="_blank"
                rel="noopener noreferrer"
              >
                for UNCX Locks on BSC
              </a>
              <a
                href=""
                className="text-subtextDark hover:text-maintextDark "
                target="_blank"
                rel="noopener noreferrer"
              >
                for PinkSale Locks on BSC
              </a>
            </div> */}
          </div>
        </div>
        <div className="gap-5 items-start hidden lg:flex min-w-[200px]">
          <a
            href="https://t.me/Open_Liquidity"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 ease-linear duration-150 transition-all"
          >
            <Image
              src="/footer/telegram.svg"
              alt="telegram"
              width={28}
              height={24}
              className="h-7"
            />
          </a>
          <a
            href="https://x.com/Open_Liquidity"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 ease-linear duration-150 transition-all"
          >
            <Image
              src="/footer/x.svg"
              alt="x"
              width={26}
              height={24}
              className="h-7"
            />
          </a>
          <a
            href="https://docs.openliquidity.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 ease-linear duration-150 transition-all"
          >
            <Image
              src="/footer/gitbook.svg"
              alt="gitbook"
              width={33}
              height={24}
              className="h-7"
            />
          </a>
          <a
            href="https://medium.com/@0xLiquidity/stage-one-pioneering-liquidity-exchange-in-decentralized-finance-f6c4e70945ea"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 ease-linear duration-150 transition-all"
          >
            <Image
              src="/footer/medium.svg"
              alt="medium"
              width={42}
              height={24}
              className="h-7"
            />
          </a>
        </div>
      </div>
      <div>
        <hr className="h-[1px] border-none bg-secondary mb-5" />
        <div className="flex flex-wrap justify-between text-sm">
          <p className="text-subtextDark">©2024 OpenLiquidity</p>
          <a
            className="text-subtextDark hover:text-maintextDark"
            href="mailto:team@openliquidity.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            team@openliquidity.io
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
