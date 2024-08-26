import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="z-50 backdrop-blur-lg px-7 sm:px-12 py-8 fixed top-0 w-full flex border-b border-b-moduleDark items-center justify-between bg-[#11111160]">
      <div className="flex gap-3 items-center">
      <Image
          alt="logo"
          src="/navbar/logoShort.svg"
          width={33}
          height={33}
          className="flex"
        />
        <p className="text-xl hidden md:flex text" style={{ color: '#D2CFC9' }}>OpenLiquidity</p>
        
      </div>
      <div className="flex items-center gap-3 sm:gap-4 max-h-10">
        <a
          href="https://app.uniswap.org/swap?outputCurrency=0xfa955ec865f51c55e3b6ce02528a6844c2eb9c26&use=V2"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 text-sm py-3 h-10 hidden sm:flex bg-[#35353580] hover:bg-[#353535] ease-linear duration-100 transition-all text-primary items-center justify-center rounded-2xl"
        >Buy on Uniswap</a>
        {/* <a
          href="https://linktr.ee"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 text-sm h-10 bg-[#35353580] hover:bg-[#353535] ease-linear duration-100 transition-all rounded-2xl flex items-center justify-center"
        >
          <Image
            src="/navbar/linktree.svg"
            alt="linktree"
            width={16}
            height={20}
          />
        </a> */}
        <a
          href="https://docs.openliquidity.io"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 h-10 bg-[#35353580] hover:bg-[#353535] ease-linear duration-100 transition-all text-maintextDark rounded-2xl flex items-center justify-center gap-3"
        >
          <Image
            src="/navbar/gitbook.svg"
            alt="linktree"
            width={24}
            height={17}
          />
          <p className="hidden sm:flex text-sm">Read docs</p>
        </a>
        <button
          
          className="px-2 h-10 sm:px-4 py-3 text-sm hover:bg-[#f8d99c] ease-linear duration-100 transition-all bg-primary text-backingDark rounded-2xl flex items-center justify-center w-[140px]"
        >
          <a 
            href="https://app.openliquidity.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch App
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
