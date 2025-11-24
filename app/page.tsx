"use client"
import React from "react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { number: "01", label: "HOME", active: true },
  { number: "02", label: "ABOUT US", active: false },
  { number: "03", label: "OUR HOMES", active: false },
  { number: "04", label: "TINY OFFICES", active: false },
  { number: "05", label: "CONTACT", active: false },
];

const menuItems = [
  { label: "HOME", active: true },
  { label: "ABOUT US", active: false },
  { label: "OUR HOMES", active: false },
  { label: "TINY OFFICES", active: false },
  { label: "DISCOUNTS", active: false },
  { label: "FINANCING", active: false },
  { label: "CONTACT", active: false },
];


const Hero = () => (
  <section className="relative w-[1920px] h-[999px]">
    <img
      className="absolute top-0 left-0 w-full h-full object-cover"
      alt="Hero background"
      src="/rectangle-1.png"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(34,34,34,0.6)_18%,rgba(196,196,196,0)_100%)]" />
    <header className="absolute top-14 left-[405px] right-[405px] flex items-center justify-between z-10">
      <img
        className="w-[147px] h-[87px] object-cover"
        alt="Tinyfl logo"
        src="/af-logo-tinyfl-2.png"
      />
      <nav className="flex items-center gap-2.5">
        <div className="[font-family:'Manrope',Helvetica] font-normal text-lg text-right tracking-[0] leading-[normal]">
          {menuItems.map((item, index) => (
            <span
              key={index}
              className={
                item.active
                  ? "font-bold text-[#f8d545]"
                  : "font-medium text-white"
              }
            >
              {item.label}
              {index < menuItems.length - 1 &&
                "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
            </span>
          ))}
        </div>
      </nav>
    </header>
    <nav className="absolute top-[310px] left-[1546px] flex flex-col items-center gap-[63px] z-10">
      {navigationItems.map((item, index) => (
        <div
          key={index}
          className="relative [font-family:'Manrope',Helvetica] text-white text-lg text-center tracking-[0] leading-[normal]"
        >
          <span className={item.active ? "font-semibold" : "font-light"}>
            {item.number}
          </span>
        </div>
      ))}
    </nav>
    <img
      className="absolute top-[242px] left-[1515px] w-px h-[514px] object-cover z-10"
      alt="Line"
      src="/line-2.svg"
    />
    <div className="absolute top-80 left-[1512px] w-[7px] h-[7px] bg-white rounded-[3.5px] z-10" />
    <div className="absolute top-[269px] left-[406px] z-10">
      <img
        className="w-44 h-[234px]"
        alt="Decorative vector"
        src="/vector-1.svg"
      />
      <img
        className="absolute top-[184px] left-[54px] w-[68px] h-3"
        alt="Line"
        src="/line-1.svg"
      />
    </div>
    <div className="absolute top-[303px] left-[477px] w-[730px] [font-family:'Manrope',Helvetica] font-normal text-transparent text-[80px] tracking-[0] leading-[normal] z-10">
      <span className="font-medium text-white">
        BUILT FOR
        <br />
      </span>
      <span className="font-semibold text-white">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      <span className="font-extrabold text-[#f8d545]">FREEDOM</span>
    </div>
    <p className="absolute top-[551px] left-[405px] w-[586px] [font-family:'Manrope',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] z-10">
      World Class Architectural and Interior Design for Home and Business
      <br />
      <br />
      Award Winning Luxury Tiny Homes
    </p>
    <Button className="absolute top-[721px] left-[405px] w-[141px] h-[45px] bg-[#f8d545] hover:bg-[#f8d545]/90 z-10">
      <span className="[font-family:'Manrope',Helvetica] font-medium text-[#2c2d31] text-base tracking-[0] leading-[normal]">
        Learn More
      </span>
    </Button>
  </section>
);

const Info = () => (
  <section className="absolute top-[1136px] left-[415px] right-[405px]">
    <div className="relative">
      <img
        className="w-[333px] h-[332px] object-cover"
        alt="Interior design"
        src="/image-1.png"
      />
      <div className="absolute top-[30px] left-[30px] w-[271px] h-[271px] border-[12px] border-solid border-[#f8d545]" />
    </div>
    <div className="absolute top-[77px] left-[431px]">
      <h2 className="[font-family:'Manrope',Helvetica] font-bold text-[#2c2d31] text-[40px] tracking-[0] leading-[normal]">
        STUNNING DESIGN.
        <br />
        PERFECT QUALITY.
      </h2>
      <p className="mt-[57px] w-[671px] [font-family:'Manrope',Helvetica] font-normal text-[#6b6b6b] text-lg tracking-[0] leading-[30px]">
        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
        lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
        sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
        amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
        tincidunt auctor a ornare odio.
      </p>
    </div>
  </section>
);

const WorldMap = () => (
  <section className="absolute top-[1584px] left-0 w-[1920px]">
    <div className="relative">
      <img
        className="absolute top-[68px] left-[945px] w-[809px] h-[525px] object-cover"
        alt="World map"
        src="/rectangle-5.png"
      />
      <img
        className="absolute top-[260px] left-[1303px] w-[94px] h-[94px] object-cover cursor-pointer"
        alt="Play button"
        src="/play-button-1.png"
      />
      <div className="absolute top-[151px] left-[430px] w-[450px]">
        <h2 className="[font-family:'Manrope',Helvetica] font-bold text-[#2c2d31] text-[40px] text-right tracking-[0] leading-[normal]">
          ALL OVER THE WORLD
        </h2>
        <p className="mt-[32px] [font-family:'Manrope',Helvetica] font-normal text-[#6b6b6b] text-lg text-right tracking-[0] leading-[30px]">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin
          auctor, nisi elit consequat ipsum, nec sagittis.
        </p>
        <Button className="mt-[39px] ml-auto w-[141px] h-[45px] bg-[#f8d545] hover:bg-[#f8d545]/90">
          <span className="[font-family:'Manrope',Helvetica] font-medium text-[#2c2d31] text-base tracking-[0] leading-[normal]">
            Learn More
          </span>
        </Button>
      </div>
    </div>
  </section>
);

const AboutUs = () => (
  <section className="absolute top-[2329px] left-0 w-[1920px] h-[970px] bg-[#f8d545]">
    <div className="absolute top-[96px] left-[1005px] w-[207px] h-[108px] bg-[#f8d545] border-[6px] border-solid border-white opacity-50" />
    <div className="absolute top-[113px] left-[1046px] w-[207px] h-[74px] bg-[#f8d545]" />
    <img
      className="absolute top-[-85px] left-[400px] w-[555px] h-[841px] object-cover"
      alt="About us image"
      src="/rectangle-13.png"
    />
    <img
      className="absolute top-[258px] left-[662px] w-[478px] h-[534px] object-cover"
      alt="About us detail"
      src="/rectangle-22.png"
    />
    <img
      className="absolute top-[436px] left-[1009px] w-[516px] h-[458px] object-cover"
      alt="About us detail"
      src="/rectangle-14.png"
    />
    <div className="absolute top-[122px] left-[1069px]">
      <h2 className="[font-family:'Manrope',Helvetica] font-extrabold text-[#2c2d31] text-[40px] tracking-[0] leading-[normal]">
        ABOUT US
      </h2>
      <p className="mt-[57px] w-[446px] [font-family:'Manrope',Helvetica] font-normal text-[#5b5b5b] text-lg tracking-[0] leading-[30px]">
        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
        lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
        sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
        amet mauris.
      </p>
    </div>
    <p className="absolute top-[792px] left-[410px] w-[496px] [font-family:'Manrope',Helvetica] font-normal text-[#5b5b5b] text-lg tracking-[0] leading-[30px]">
      Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
      ornare odio.
    </p>
  </section>
);



export default function Home() {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1920px] min-h-[8039px] relative">
      <Hero />
      <Info/>
      <WorldMap />
      <AboutUs />
      <div className="absolute top-[999px] left-[410px] w-[1100px] h-[7040px] flex gap-[274px] opacity-5 pointer-events-none">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            className="w-px h-[7040px] object-cover"
            alt="Grid line"
            src="/line-9.svg"
          />
        ))}
      </div>
    </div>
  );
}
