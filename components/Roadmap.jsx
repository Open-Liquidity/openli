"use client";
import Image from "next/image";
import React from "react";

const cardArr = [
  {
    title: "Phase 01",
    description: "Foundation (Q3 2023)",
    data: [
      {
        id: 0,
        title: "Conceptualization:",
        name: " Initiation of concept development, comprehensive market analysis, and theoretical planning.",
        success: true,
      },
      {
        id: 1,
        title: "Business Framework:",
        name: " Establishment of a robust business model and initial documentation formulation.",
        success: true,
      },
    ],
  },
  {
    title: "Phase 02",
    description: "Development & Partnerships (Q4 2023)",
    data: [
      {
        id: 0,
        title: "Infrastructure Development:",
        name: " Launch of EVM Messages Bot and a Telegram Bot for liquidity unlock applications, alongside the first version of our website and social media presence.",
        success: true,
      },
      {
        id: 1,
        title: "Strategic Alliances:",
        name: " Forging a partnership with Kleros, validating our concept through real transactions, and gathering user feedback for iterative improvements.",
        success: true,
      },
    ],
  },
  {
    title: "Phase 03",
    description: "Expansion (Q1-Q2 2024)",
    data: [
      {
        id: 0,
        title: "Growth Initiatives:",
        name: " Introduction of website v2, token launch, comprehensive audit and KYC procedures, listings on CG/CMC, and heightened marketing efforts.",
        success: true,
      },
      {
        id: 1,
        title: "Community Engagement:",
        name: " Launch of referral programs (bounty hunter rewards) and development of a user-friendly UX infrastructure for our Dapp, including a listing and auction platform.",
        success: true,
      },
    ],
  },
  {
    title: "Phase 04",
    description: "Launching the Future (Q2 2024)",
    data: [
      {
        id: 0,
        title: "dApp Version 1.0:",
        name: "  Unveiling our primary upgraded and streamlined application.",
        success: true,
      },
      {
        id: 1,
        title: "CryptoDo Collaboration:",
        name: " Formalizing partnership with CryptoDo.",
        success: true,
      },
    ],
  },
  {
    title: "Phase 05",
    description: "Expanding Horizons (Q3 2024)",
    data: [
      {
        id: 0,
        title: "Migration to OpenLiquidity:",
        name: " Implement new tokenomics and introduce advanced features:",
        success: true,
      },
      {
        id: 1,
        title: "Staking Initiatives:",
        name: " Introduce staking mechanisms to enhance token utility.",
        success: true,
      },
      {
        id: 2,
        title: "Profit Sharing Models:",
        name: " Distribute earnings among stakeholders.",
        success: true,
      },
      {
        id: 3,
        title: "DAO Establishment:",
        name: " Formalize DAO governance for decentralized decision making.",
        success: true,
      },
      {
        id: 4,
        title: "Marketing Drive:",
        name: " Intensify product marketing to expand the user base.",
        success: true,
      },
      {
        id: 5,
        title: "Blockchain Integration:",
        name: " Extend operations to new blockchains and secure strategic partnerships.",
        success: true,
      },
    ],
  },
  {
    title: "Phase 06",
    description: "Ecosystem Maturation (Q2-Q3 2024)",
    data: [
      {
        id: 0,
        title: "dApp Version 2.0:",
        name: " Launch an upgraded version of our dApp with additional features unlocked:",
        success: true,
      },
      {
        id: 1,
        title: "Documentation 3.0:",
        name: " Further enhance our guides and user resources.",
        success: true,
      },
      {
        id: 2,
        title: "Liquidity Locker Solutions: ",
        name: " Introduce innovative solutions for liquidity management.",
        success: true,
      },
      {
        id: 3,
        title: "Liquidity Provision Service:",
        name: " Launch a service to facilitate liquidity in the ecosystem.",
        success: true,
      },
      {
        id: 4,
        title: "CEX Listing:",
        name: " Aim to list on centralized exchanges to increase token accessibility.",
        success: true,
      },
    ],
  },
];

const Roadmap = () => {
  const [is1Open, setIs1Open] = React.useState(true);
  const [is2Open, setIs2Open] = React.useState(false);
  const [is3Open, setIs3Open] = React.useState(false);
  const [is4Open, setIs4Open] = React.useState(false);
  const [is5Open, setIs5Open] = React.useState(false);
  const [is6Open, setIs6Open] = React.useState(false);

  const onOpenClick = (i) => {
    if (i === 0) {
      setIs1Open(!is1Open);
      setIs2Open(false);
      setIs3Open(false);
      setIs4Open(false);
      setIs5Open(false);
      setIs6Open(false);
    } else if (i === 1) {
      setIs1Open(false);
      setIs2Open(!is2Open);
      setIs3Open(false);
      setIs4Open(false);
      setIs5Open(false);
      setIs6Open(false);
    } else if (i === 2) {
      setIs1Open(false);
      setIs2Open(false);
      setIs3Open(!is3Open);
      setIs4Open(false);
      setIs5Open(false);
      setIs6Open(false);
    } else if (i === 3) {
      setIs1Open(false);
      setIs2Open(false);
      setIs3Open(false);
      setIs4Open(!is4Open);
      setIs5Open(false);
      setIs6Open(false);
    } else if (i === 4) {
      setIs1Open(false);
      setIs2Open(false);
      setIs3Open(false);
      setIs4Open(false);
      setIs5Open(!is5Open);
      setIs6Open(false);
    } else if (i === 5) {
      setIs1Open(false);
      setIs2Open(false);
      setIs3Open(false);
      setIs4Open(false);
      setIs5Open(false);
      setIs6Open(!is6Open);
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center -mt-12">
      <h2 className="text-[32px] sm:text-[46px] leading-[1]">Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
          {cardArr.map((el, i) => (
            <div
              onClick={() => onOpenClick(i)}
              key={el.title}
              className={`h-[340px] border p-7 flex ${
                !is1Open && !is2Open && !is3Open && !is4Open
                  ? "w-full"
                  : (i === 0 && is1Open) ||
                    (i === 1 && is2Open) ||
                    (i === 2 && is3Open) ||
                    (i === 3 && is4Open) ||
                    (i === 4 && is5Open) ||
                    (i === 5 && is6Open)
                  ? "w-full"
                  : "w-full"
              } flex-col gap-3 rounded-[30px] ${
                i === 0
                  ? "bg-gradient-to-t from-secondary to-moduleDark via-moduleDark border-secondary"
                  : "bg-moduleDark border-highlightDark"
              }`}
            >
            <div className="flex justify-between gap-3 items-center">
              <h3 className="text-2xl">{el.title}</h3>
              <button
                onClick={() =>
                  onOpenClick(i)
                }
                className="rounded-xl p-2 w-10 h-10 hover:bg-[#DCB97640] ease-linear duration-100 transition-all bg-highlightDark flex items-center justify-center"
              >
                <Image
                  src={
                    (i === 0 && is1Open) ||
                    (i === 1 && is2Open) ||
                    (i === 2 && is3Open) ||
                    (i === 3 && is4Open) ||
                    (i === 4 && is5Open) ||
                    (i === 5 && is6Open)
                      ? "/roadmap/open.svg"
                      : "/roadmap/close.svg"
                  }
                  alt="close"
                  width={22}
                  height={22}
                  className=""
                />
              </button>
            </div>
            <div className="rounded-xl neutral p-2 w-fit bg-brandBacking text-primary text-sm sm:text-base">
              {el.description}
            </div>
            {((i === 0 && is1Open) ||
              (i === 1 && is2Open) ||
              (i === 2 && is3Open) ||
              (i === 3 && is4Open) ||
              (i === 4 && is5Open) ||
              (i === 5 && is6Open)
            ) && (
              <div className="flex flex-col gap-3 overflow-y-auto">
                {el.data.map((el) => (
                  <div key={el.id} className="flex gap-3 items-center">
                    {/* <Image
                      src={
                        el.success
                          ? "/roadmap/success.svg"
                          : "/roadmap/n-success.svg"
                      }
                      alt="success"
                      width={22}
                      height={22}
                      className=""
                    />{" "} */}
                    <p className="text-sm sm:text-base text-landingSubtext">
                      <span className="">{el.title && el.title}</span>
                      {el.name}
                    </p>
                  </div>
                ))}{" "}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;