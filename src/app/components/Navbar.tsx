import Image from "next/image";
import React from "react";
import Navigation from "./Navigation";
import Marquee from "react-fast-marquee";
import MarqueeLink from "./Marquee";
import Hero from "./Hero";
import Pricetag from "./Pricetag";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto pt-5 ">
        <section className="flex justify-between pb-5 ">
          <div className="flex gap-3 items-center">
            <div className="bg-green-500 p-4 items-center rounded-2xl">
              <Image src="/logo-icon.png" alt="logo" width={15} height={15} />
            </div>
            <div>
              <p className="font-bold"> বাজার দর</p>
              <p>মঙ্গলবার, ৬ অক্টোবর, ২০২৬</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div>
              <button className="btn btn-soft btn-success">সাইন ইন</button>
            </div>
            <div>
              <button className="btn btn-soft btn-success">সাইন আপ</button>
            </div>
          </div>
        </section>
      </div>
      <div className="container mx-auto">
        <Navigation></Navigation>
      </div>
      <div>
        <MarqueeLink></MarqueeLink>
      </div>
      <div>
        <Hero></Hero>
      </div>
      <div>
        <Pricetag></Pricetag>
      </div>
     
    </div>
  );
};

export default Navbar;
