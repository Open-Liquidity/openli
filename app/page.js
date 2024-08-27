'use client'
import Advantages from "@/components/Advantages";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Security from "@/components/Security";
import Image from "next/image";
import WhyUs from "@/components/WhyUs";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <main className="flex z-10 mx-4 sm:mx-[30px] lg:mx-12 mt-[120px] rounded-xl bg-gradient-to-b from-primary via-backingDark to-backingDark p-[1px]">
      <div className="bg-backingDark rounded-xl w-full">
      <Hero />
      <Advantages />
      <Divider gradient />
      <div className="hidden sm:block">
        <div className="p-[60x] z-[12] relative border border-secondary rounded-[30px] overflow-hidden">
          <Image src="/ecosystem.svg" alt="ecosystem" width={1700} height={806} className="w-full"/>
        </div>
      </div>
      <Divider />
      <WhyUs />
      <Divider />
      <Contacts />
      <Divider />
      <Roadmap />
      {/* <Divider />
      <Security /> */}
      <Footer />
      </div>
    </main>
  );
}
