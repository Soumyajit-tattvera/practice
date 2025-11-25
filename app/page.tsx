"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const navigationItems = [
  { number: "01", label: "HOME", active: true },
  { number: "02", label: "ABOUT US", active: false },
  { number: "03", label: "OUR HOMES", active: false },
  { number: "04", label: "TINY OFFICES", active: false },
  { number: "05", label: "CONTACT", active: false },
];

const homeModels = [
  {
    image: "/rectangle-9.png",
    title: "Lorem Ipsum Dolor",
    size: "Size: 24ft & 30ft, Starting at $77,000",
  },
  {
    image: "/rectangle-10.png",
    title: "Lorem Ipsum Dolor",
    size: "Size: 24ft & 30ft, Starting at $77,000",
  },
  {
    image: "/rectangle-11.png",
    title: "Lorem Ipsum Dolor",
    size: "Size: 24ft & 30ft, Starting at $77,000",
  },
];

const lifestyleFeatures = [
  {
    icon: "/healthy-lifestyle-logo--1--1-2.png",
    title: "LIVE DIFFERENTLY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum rhoncus ipsum. Maecenas fringilla libero vel lacus ornare placerat.",
  },
  {
    icon: "/healthy-lifestyle-logo--1--1-2.png",
    title: "LIVE DIFFERENTLY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum rhoncus ipsum. Maecenas fringilla libero vel lacus ornare placerat.",
  },
  {
    icon: "/healthy-lifestyle-logo--1--1-2.png",
    title: "LIVE DIFFERENTLY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum rhoncus ipsum. Maecenas fringilla libero vel lacus ornare placerat.",
  },
];

const teamMembers = [
  {
    image: "/rectangle-21.png",
    thumbnail: "/rectangle-22.png",
    name: "FLORA URQUIOLA",
    role: "Designer",
  },
  {
    image: "/rectangle-25.png",
    thumbnail: "/rectangle-22.png",
    name: "FLORA URQUIOLA",
    role: "Designer",
  },
  {
    image: "/rectangle-30.png",
    thumbnail: "/rectangle-22.png",
    name: "FLORA URQUIOLA",
    role: "Designer",
  },
  {
    image: "/rectangle-31.png",
    thumbnail: "/rectangle-22.png",
    name: "FLORA URQUIOLA",
    role: "Designer",
  },
];

const quickLinks = [
  "Home",
  "About Us",
  "Our Homes",
  "Tiny Offices",
  "Discounts",
  "Financing",
  "Contact",
];

const otherLinks = ["Resources", "FAQ", "Terms & Conditions", "Privacy Policy"];

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
  <section className="relative h-screen min-h-[600px]">
    <img
      className="absolute top-0 left-0 w-full h-full object-cover"
      alt="Hero background"
      src="/rectangle-1.png"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(34,34,34,0.6)_18%,rgba(196,196,196,0)_100%)]" />

    {/* Header */}
    <header className="absolute top-14 left-0 right-0 z-10 px-8 md:px-16 lg:px-24">
      <div className="mx-auto flex items-center justify-between">
        <img
          className="w-[147px] h-[87px] object-cover"
          alt="Tinyfl logo"
          src="/af-logo-tinyfl-2.png"
        />
        <nav className="hidden lg:flex items-center">
          <div className="font-['Manrope',Helvetica] font-normal text-lg text-right tracking-[0] leading-[normal]">
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
      </div>
    </header>

    <nav className="hidden xl:flex absolute top-[310px] right-8 lg:right-16 flex-col items-center gap-[63px] z-10">
      {navigationItems.map((item, index) => (
        <div
          key={index}
          className="relative font-['Manrope',Helvetica] text-white text-lg text-center tracking-[0] leading-[normal]"
        >
          <span className={item.active ? "font-semibold" : "font-light"}>
            {item.number}
          </span>
        </div>
      ))}
    </nav>
    <img
      className="hidden xl:block absolute top-[242px] right-[37px] w-px h-[514px] object-cover z-10"
      alt="Line"
      src="/line-2.svg"
    />
    <div className="hidden xl:block absolute top-80 right-[34px] w-[7px] h-[7px] bg-white rounded-[3.5px] z-10" />

    {/* Hero Content */}
    <div className="absolute top-[269px] left-8 md:left-16 lg:left-24 z-10">
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
    <div className="absolute top-[303px] left-8 md:left-16 lg:left-24 font-['Manrope',Helvetica] font-normal text-transparent text-5xl md:text-7xl lg:text-[80px] tracking-[0] leading-[1.2] z-10">
      <span className="font-medium text-white">
        BUILT FOR
        <br />
      </span>
      <span className="font-semibold text-white">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      <span className="font-bold text-[#f8d545]">FREEDOM</span>
    </div>
    <p className="absolute top-[551px] left-8 md:left-16 lg:left-24 max-w-[586px] font-['Manrope',Helvetica] font-normal text-white text-lg md:text-[22px] tracking-[0] leading-[normal] z-10">
      World Class Architectural and Interior Design for Home and Business
      <br />
      <br />
      Award Winning Luxury Tiny Homes
    </p>
    <Button className="absolute top-[721px] left-8 md:left-16 lg:left-24 w-[141px] h-[45px] bg-[#f8d545] hover:bg-[#f8d545]/90 z-10">
      <span className="font-['Manrope',Helvetica] font-medium text-[#2c2d31] text-base tracking-[0] leading-[normal]">
        Learn More
      </span>
    </Button>
  </section>
);

const Info = () => (
  <section className="py-24 px-8 md:px-16 lg:px-24">
    <div className="mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
      <div className="relative w-full max-w-[332px] h-[332px] shrink-0">
        <img
          className="w-full h-full object-cover"
          alt="Interior design"
          src="/image-1.png"
        />
        <div className="absolute top-[30px] left-[30px] right-[30px] bottom-[30px] border-[12px] border-solid border-[#f8d545]" />
      </div>

      <div className="flex-1">
        <h2 className="font-['Manrope',Helvetica] font-bold text-[#2c2d31] text-3xl md:text-[40px] leading-[1.1]">
          STUNNING DESIGN.
          <br />
          PERFECT QUALITY.
        </h2>
        <p className="mt-8 font-['Manrope',Helvetica] text-[#6b6b6b] text-lg leading-[30px]">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
          amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
          tincidunt. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
          amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
          tincidunt.
        </p>
      </div>
    </div>
  </section>
);

const WorldMap = () => (
  <section
    className="w-full bg-no-repeat bg-center bg-cover py-24 px-8 md:px-16 lg:px-24"
    style={{ backgroundImage: "url('/rectangle-22.png')" }}
  >
    <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="max-w-xl">
        <h2 className="font-['Manrope', Helvetica] font-bold text-[#2c2d31] text-3xl md:text-4xl mb-6">
          ALL OVER THE WORLD
        </h2>
        <p className="text-[#6b6b6b] text-lg leading-8 mb-8">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin
          auctor, nisi elit consequat ipsum, nec sagittis.
        </p>
        <button className="bg-[#f8d545] hover:bg-[#f8d545]/90 text-[#2c2d31] font-medium px-6 py-3 rounded">
          Learn More
        </button>
      </div>

      <div className="relative w-full max-w-[400px] aspect-square flex-shrink-0">
        <img
          src="/rectangle-5.png"
          alt="world map"
          className="w-full h-full object-cover"
        />
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src="/play-button-1.png"
            alt="Play button"
            className="w-24 h-24 cursor-pointer"
          />
        </button>
      </div>
    </div>
  </section>
);

const AboutUs = () => (
  <section className="relative bg-[#f8d545] py-24 px-8 md:px-16 lg:px-24 overflow-hidden">
    <div className="mx-auto">
      <div className="relative flex flex-col lg:flex-row gap-12 items-center">
        <div className="absolute top-0 right-0 w-[207px] h-[108px] bg-[#f8d545] border-[6px] border-solid border-white opacity-50 hidden lg:block" />


        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[555px] h-auto object-cover"
            alt="About us image"
            src="/rectangle-13.png"
          />
        </div>

        <div className="w-full lg:w-1/2 relative z-10">
          <h2 className="font-['Manrope',Helvetica] font-extrabold text-[#2c2d31] text-3xl md:text-[40px] tracking-[0] leading-[normal]">
            ABOUT US
          </h2>
          <p className="mt-8 max-w-[446px] font-['Manrope',Helvetica] font-normal text-[#5b5b5b] text-lg tracking-[0] leading-[30px]">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
            amet mauris.
          </p>
          <img
            className="mt-12 w-full max-w-[478px] h-auto object-cover"
            alt="About us detail"
            src="/rectangle-22.png"
          />
        </div>
      </div>

      <div className="mt-12 flex flex-col lg:flex-row gap-12 items-start">
        <p className="max-w-[496px] font-['Manrope',Helvetica] font-normal text-[#5b5b5b] text-lg tracking-[0] leading-[30px]">
          Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
          ornare odio.
        </p>
        <img
          className="w-full max-w-[516px] h-auto object-cover ml-auto"
          alt="About us detail"
          src="/rectangle-14.png"
        />
      </div>
    </div>
  </section>
);

const HomeModels = () => (
  <section className="py-24 px-8 md:px-16 lg:px-24">
    <div className=" mx-auto">
      <h2 className="font-['Manrope',Helvetica] font-bold text-[#2c2d31] text-2xl md:text-[40px] tracking-[0] leading-[1.2]">
        DESIGN YOUR HOME FOR NOW WITH THE AWARENESS OF YESTERDAY AND UNKNOWN
        TOMORROW
      </h2>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-9">
        {homeModels.map((model, index) => (
          <div key={index} className="flex flex-col">
            <img
              className="w-full h-auto aspect-[670/432] object-cover"
              alt={model.title}
              src={model.image}
            />
            <div className="mt-7">
              <h3 className="font-['Manrope',Helvetica] font-bold text-[#2c2d31] text-2xl md:text-3xl tracking-[0] leading-[normal]">
                {model.title}
              </h3>
              <p className="mt-4 font-['Manrope',Helvetica] font-medium text-[#2c2d31] text-lg md:text-xl tracking-[0] leading-9">
                {model.size}
              </p>
              <Button className="mt-4 w-[141px] h-[45px] bg-[#f8d545] hover:bg-[#f8d545]/90">
                <span className="font-['Manrope',Helvetica] font-medium text-[#2c2d31] text-base tracking-[0] leading-[normal]">
                  Learn More
                </span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TinyOffices = () => (
  <section className="py-24 px-8 md:px-16 lg:px-24">
    <div className="mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-auto object-cover"
            alt="Tiny office exterior"
            src="/rectangle-15.png"
          />
          <div className="mt-12 max-w-[516px] ml-auto">
            <p className="font-['Manrope',Helvetica] font-normal text-[#6b6b6b] text-lg text-right tracking-[0] leading-[30px]">
              Proin gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem quis bibendum auctor.
            </p>
            <Button className="mt-8 ml-auto block w-[141px] h-[45px] bg-[#f8d545] hover:bg-[#f8d545]/90">
              <span className="font-['Manrope',Helvetica] font-medium text-[#2c2d31] text-base tracking-[0] leading-[normal]">
                Learn More
              </span>
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="font-['Manrope',Helvetica] font-extrabold text-[#2c2d31] text-3xl md:text-[40px] tracking-[0] leading-[normal]">
            TINY OFFICES
          </h2>
          <p className="mt-12 max-w-[355px] font-['Manrope',Helvetica] font-normal text-[#6b6b6b] text-lg tracking-[0] leading-[30px]">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec
            sagittis sem nibh id elit.
          </p>
          <img
            className="mt-12 w-full h-auto object-cover"
            alt="Tiny office interior"
            src="/rectangle-16.png"
          />
        </div>
      </div>
    </div>
  </section>
);

const Lifestyle = () => (
  <section className="relative py-24 px-8 md:px-16 lg:px-24">
    <img
      className="absolute top-0 left-0 w-full h-full object-cover"
      alt="Lifestyle background"
      src="/rectangle-18.png"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80" />

    <div className="relative z-10 max-w-[1200px] mx-auto">
      <h2 className="font-['Manrope',Helvetica] font-extrabold text-white text-2xl md:text-[40px] text-center tracking-[0] leading-[1.2]">
        TINYFL.COM
        <br /> NOT ONLY A NAME, BUT A LIFESTYLE
      </h2>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {lifestyleFeatures.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              className="w-[72px] h-[72px] object-cover"
              alt="Feature icon"
              src={feature.icon}
            />
            <h3 className="mt-4 font-['Manrope',Helvetica] font-extrabold text-white text-lg tracking-[0] leading-[30px]">
              {feature.title}
            </h3>
            <p className="mt-3 font-['Manrope',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Team = () => (
  <section className="py-24 px-8 md:px-16 lg:px-24">
    <div className="mx-auto">
      <h2 className="font-['Manrope',Helvetica] font-extrabold text-[#2c2d31] text-2xl md:text-[40px] text-center tracking-[0] leading-[normal]">
        TINYFL ARCHITECTS
      </h2>
      <p className="mt-6 mx-auto font-['Manrope',Helvetica] font-normal text-[#6b6b6b] text-lg text-center tracking-[0] leading-[30px]">
        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin
        auctor, nisi elit consequat ipsum, nec sagittis.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative flex justify-center pt-16 pb-8 mt-11">
            <img
              className="absolute top-0 left-1/2 -translate-x-1/2 w-52 h-[278px] object-cover z-20"
              alt={`${member.name} thumbnail`}
              src={member.thumbnail}
            />
            <Card className="w-full max-w-[364px] h-[153px] bg-white border border-solid border-[#00000030] z-10 mt-auto">
              <CardContent className="p-7">
                <h3 className="font-['Manrope',Helvetica] font-bold text-black text-xl tracking-[0] leading-[30px]">
                  {member.name}
                </h3>
                <p className="mt-1 font-['Manrope',Helvetica] font-medium text-[#f8d545] text-base tracking-[0] leading-[normal]">
                  {member.role}
                </p>
              </CardContent>
            </Card>
            <img
              className="absolute top-0 right-0 w-[272px] h-[359px] object-cover z-30"
              alt={member.name}
              src={member.image}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section className="relative py-24 px-8 md:px-16 lg:px-24 mt-28">
    <img
      className="absolute top-0 left-0 w-full h-full object-cover"
      alt="Projects background"
      src="/rectangle-22.png"
    />

    <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      <img
        className="w-full lg:w-1/2 h-auto object-cover"
        alt="Project showcase"
        src="/645731452-1.png"
      />
      <div className="w-full lg:w-1/2">
        <h2 className="font-['Manrope',Helvetica] font-extrabold text-[#2c2d31] text-2xl md:text-[40px] tracking-[0] leading-[1.2]">
          120+ PROJECTS
          <br />
          ALL OVER THE WORLD
        </h2>
        <p className="mt-12 font-['Manrope',Helvetica] font-normal text-[#6b6b6b] text-lg tracking-[0] leading-[30px]">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis
          <br />
          <br />
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat psum, nec sagittis
          sem nibh id elit.
        </p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#20252e] py-16 px-8 md:px-16 lg:px-24">
    <div className="mx-auto">
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        <img
          className="w-[191px] h-[113px] object-cover"
          alt="Tinyfl logo"
          src="/af-logo-tinyfl-2.png"
        />

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <nav className="flex flex-col gap-6">
            <h3 className="font-['Manrope',Helvetica] font-semibold text-white text-lg tracking-[0] leading-7">
              Quick Links
            </h3>
            <ul className="font-['Manrope',Helvetica] font-normal text-white text-lg tracking-[0] leading-10">
              {quickLinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </nav>

          <nav className="flex flex-col gap-6">
            <h3 className="font-['Manrope',Helvetica] font-semibold text-white text-lg tracking-[0] leading-7">
              Others
            </h3>
            <ul className="font-['Manrope',Helvetica] font-normal text-white text-lg tracking-[0] leading-10">
              {otherLinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-6">
            <h3 className="font-['Manrope',Helvetica] font-semibold text-white text-lg tracking-[0] leading-7">
              Contacts
            </h3>
            <address className="font-['Manrope',Helvetica] font-normal text-white text-lg tracking-[0] leading-[26px] not-italic">
              905 SE 9th Terrace, Cape Coral,<br />
              Florida 33990<br />
              info@ovatsolutions.com<br />
              239-984-6682
            </address>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <img
          className="w-full h-px object-cover"
          alt="Footer divider"
          src="/line-12.svg"
        />
        <p className="mt-4 text-center font-['Manrope',Helvetica] font-normal text-white text-lg tracking-[0] leading-6">
          Copyright 2021 Tinyfl.com.
        </p>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="bg-white w-full">
      <Hero />
      <Info />
      <WorldMap />
      <AboutUs />
      <HomeModels />
      <TinyOffices />
      <Lifestyle />
      <Team />
      <Projects />
      <Footer />
    </div>
  );
}
