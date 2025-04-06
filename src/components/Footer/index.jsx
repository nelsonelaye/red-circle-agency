"use client";
import React from "react";
import clsx from "clsx";
import styles from "@/styles/home.module.css";
import headerStyles from "@/styles/header.module.css";
import MotionWrap from "../MotionWrap";

const Footer = () => {
  const contacts = [
    {
      time: "10:00 AM",
      name: "Sade Akinyemi",
      location: "Lagos, Nigeria",
      email: "lagos@red.xyz",
    },
    {
      time: "12:00 PM",
      name: "Alex Johnson",
      location: "Cape Town, South Africa",
      email: "cape@red.xyz",
    },
    {
      time: "1:00 PM",
      name: "Mike Smith",
      location: "Kigali, Rwanda",
      email: "kigali@red.xyz",
    },
  ];

  const footnotes = [
    "Design by xyz",
    "Developed by abc",
    "Red Circle Agency © 2025",
  ];
  return (
    <footer className="bg-black  text-white py-16 sm:py-28">
      <div className="w-full px-[20px] sm:w-[80%] mx-auto">
        <div className="sm:flex ">
          <div className="w-[10%] h-full">contact</div>
          <div className="w-full">
            <div className="w-fit">
              <MotionWrap>
                <h1 className={clsx(styles["hero-header"], "pl-[0.7em]")}>
                  {" "}
                  Send
                </h1>
              </MotionWrap>

              <MotionWrap>
                <h1 className={styles["hero-header"]}> your</h1>
              </MotionWrap>
              <MotionWrap>
                <h1 className={clsx(styles["hero-header"], "pl-[0.7em]")}>
                  {" "}
                  request
                </h1>
              </MotionWrap>
            </div>

            <input
              className="w-full border-b-2 h-[100px] py-[20px] border-white bg-transparent my-20 sm:my-[120px] text-[80px] placeholder:text-[40px] sm:placeholder:text-[80px] outline-none !outline-0"
              placeholder="NAME"
            />
          </div>
        </div>

        <div className="w-full sm:flex mb-20 sm:mb-[150px] max-md:flex-wrap">
          <div className="hidden lg:block w-[250px] whitespace-nowrap"></div>
          <div className="w-full">
            <ul className="w-full flex flex-col sm:flex-row gap-10 sm:gap-20">
              {contacts.map((e) => (
                <MotionWrap key={e.name}>
                  <li className="flex flex-col gap-2 mb-4">
                    <span className="text-[14px] md:text-[18px] mb-[10px]">
                      {e.time}
                    </span>
                    <h5 className="text-[20px] md:text-[26px] font-medium mb-[10px]">
                      {e.name}
                    </h5>
                    <span className="md:text-[20px]">{e.location}</span>
                    <a
                      href={`mailto:${e.email}`}
                      className="relative md:text-[20px] hover:underline"
                    >
                      {e.email}
                    </a>
                  </li>
                </MotionWrap>
              ))}
            </ul>
          </div>
        </div>

        <ul className="w-full flex flex-col gap-1">
          {footnotes.map((e) => (
            <li key={e} className="text-[12px] md:text-[14px]">
              {e}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
