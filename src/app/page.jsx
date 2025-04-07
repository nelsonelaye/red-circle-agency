"use client";
import Header from "@/components/Header";
import Image from "next/image";
import styles from "@/styles/home.module.css";
import clsx from "clsx";
import athlete from "@/assets/images/athlete.jpg";
import office from "@/assets/images/office.jpg";
import team from "@/assets/images/team.jpg";
import lg from "@/assets/images/lg.svg";
import ducati from "@/assets/images/ducati.svg";
import mastercard from "@/assets/images/mastercard.svg";
import crown from "@/assets/images/crown.svg";
import barclays from "@/assets/images/barclays.svg";
import SectionCopy from "@/components/SectionCopy";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import MotionWrap from "@/components/MotionWrap";
import dayjs from "dayjs";

export default function Home() {
  const cities = ["lagos", "Nairobi", "Kigali", "Lome"];
  const mainService = [
    "Web Design",
    "iOS Design",
    "User Experience",
    "Branding",
    "Digital Strategy",
    "Development",
  ];
  const secondaryService = [
    "Copywriting",
    "Animation",
    "Iconography",
    "2D/3D graphics",
    "HTML/CSS/JS",
    "Backend/API integrations",
    "WordPress",
  ];

  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="overflow-hidden px-[20px]">
      <div className="w-full md:w-[90%] mx-auto">
        <section className="w-full  mx-auto pt-24">
          <div className="sm:flex">
            <div className="w-[18%] h-full whitespace-nowrap text-[12px] font-semibold sm:text-base">
              {dayjs().format("HH:mm A")}
            </div>
            <div className="w-fit py-6">
              <motion.h1
                initial={{ y: 50, opacity: 0 }} // Start position
                whileInView={{ y: 0, opacity: 1 }} // Animate when in view
                transition={{ duration: 0.5, ease: "linear" }}
                viewport={{ once: false }} // Runs only once when it enters the viewport
                className={clsx(
                  styles["hero-header"],
                  "pl-[0.7em] md:!text-[9em]"
                )}
              >
                Red
              </motion.h1>

              <motion.h1
                initial={{ y: 50, opacity: 0 }} // Start position
                whileInView={{ y: 0, opacity: 1 }} // Animate when in view
                transition={{ duration: 0.5, ease: "linear" }}
                viewport={{ once: false }} // Runs only once when it enters the viewport
                className={clsx(styles["hero-header"], " md:!text-[9em]")}
              >
                Circle
              </motion.h1>

              <motion.h1
                initial={{ y: 50, opacity: 0 }} // Start position
                whileInView={{ y: 0, opacity: 1 }} // Animate when in view
                transition={{ duration: 0.5, ease: "linear" }}
                viewport={{ once: false }} // Runs only once when it enters the viewport
                className={clsx(
                  styles["hero-header"],
                  "pl-[0.7em]  md:!text-[9em]"
                )}
              >
                Agency
              </motion.h1>

              <motion.h1
                key={cities[currentCityIndex]} // Ensures animation runs when text changes
                initial={{ y: 100, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 1 }} // Moves up before disappearing
                transition={{ duration: 0.3, ease: "linear" }}
                style={{
                  position: "relative",
                  color: "white", // Interior color (can be transparent)
                  textShadow:
                    "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black," +
                    "-1px -1px black, 1px -1px black, -1px 1px black, 1px 1px black",
                  fontFamily: "sans-serif",
                  lineHeight: "1.2",
                  letterSpacing: "0.05em",
                }}
                className={clsx(
                  "tracking-wider overflow-hidden !leading-[70px] md:!leading-[150px] md:!text-[9em]",
                  styles["hero-header"]
                )}
              >
                {cities[currentCityIndex]}
              </motion.h1>
            </div>
          </div>
        </section>

        <section className="lg:ml-[150px] mb-[20px] lg:mb-[100px] max-sm:pt-0 py-[40px]">
          <Image
            src={athlete}
            height={990}
            alt="a brown piece of clothe"
            className="w-full object-cover object-top mb-[40px]"
            quality={100}
          />

          <MotionWrap>
            <p className="text-[1.3em] font-medium leading-6">
              iOS App and landing page for education platform
            </p>
          </MotionWrap>
        </section>

        <section className="pb-[80px] sm:pb-[150px]">
          <div className="w-full lg:w-[70%] lg:mb-[100px] py-[40px]">
            <Image
              src={team}
              height={990}
              alt="a team of people"
              className="w-full object-cover object-top mb-[40px]"
              quality={100}
            />
            <MotionWrap>
              <p className="text-[1.3em] font-medium leading-6">
                Website for IT company based on Cyprus
              </p>
            </MotionWrap>
          </div>

          <div className="ml-auto w-full lg:w-[70%] sm:mb-[100px] py-[40px]">
            <Image
              src={office}
              height={990}
              alt="an athlete running"
              className="w-full object-cover object-top mb-[40px]"
              quality={100}
            />

            <MotionWrap>
              <p className="text-[1.3em] font-medium leading-6">
                Website for multidimensional creative studio
              </p>
            </MotionWrap>
          </div>

          <div
            className={clsx(
              styles["project-circle"],
              "w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] mx-auto flex items-center justify-center rounded-full border-[1px] border-black/10 cursor-pointer relative "
            )}
          >
            <div
              className={clsx(
                styles["scale-up"],
                "absolute rounded-full w-full h-full top-0 left-0 bg-black z-[-1]"
              )}
            ></div>
            +10
          </div>
        </section>

        <SectionCopy
          title="About us"
          content="  We help businesses to re-evaluate their digital potential and achieve
        greater results. To launch, set a visual tone, refresh, and improve their brands online. "
        />

        <section className="hddenw-full mt-[80px] mb-[100px]  sm:mt-[150px]">
          <div className="flex items-center justify-around mx-auto max-sm:flex-wrap gap-3 overflow-hidden">
            <div className="carousel gap-5">
              <Image src={crown} alt="crown" />
              <Image src={ducati} alt="ducati" />
              <Image src={lg} alt="LG" />
              <Image src={mastercard} alt="LG" />
              <Image src={barclays} alt="barclays" />
              <Image src={crown} alt="crown" />
              <Image src={ducati} alt="ducati" />
              <Image src={lg} alt="LG" />
              <Image src={mastercard} alt="LG" />
              <Image src={barclays} alt="barclays" />
              <Image src={crown} alt="crown" />
              <Image src={ducati} alt="ducati" />
              <Image src={lg} alt="LG" />
              <Image src={mastercard} alt="LG" />
              <Image src={barclays} alt="barclays" />
              <Image src={crown} alt="crown" />
              <Image src={ducati} alt="ducati" />
              <Image src={lg} alt="LG" />
              <Image src={mastercard} alt="LG" />
              <Image src={barclays} alt="barclays" />
            </div>
          </div>
        </section>

        <SectionCopy
          title="Services"
          content=" We know it is quite challenging to find a good team to do great things.
        But we managed to do it."
        >
          <div className="flex pt-[80px] sm:pt-[150px]">
            <ul className="w-[50%]">
              {mainService.map((e) => (
                <li key={e} className="font-medium text-[1.3em]  mb-11">
                  {e}
                </li>
              ))}
            </ul>
            <ul>
              {secondaryService.map((e) => (
                <li key={e} className="mb-3">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </SectionCopy>
      </div>

      <section className="w-full mb-[5em]">
        <h2 className="w-full  sm:w-[90%] mx-auto mb-[20px] sm:mb-[80px]">
          Recognition
        </h2>

        <div className="text-[6em] sm:text-[8.5em] font-semibold leading-[1] overflow-visible whitespace-nowrap">
          <div className="carousel">
            <div>Awards X7 Awwwards X6 BEHANCE X17 CSS DESIGN</div>
            <div>
              Awards X7 Awwwards X6 BEHANCE X17 CSS DESIGN &nbsp; • &nbsp;
            </div>
            <div>
              Awards X7 Awwwards X6 BEHANCE X17 CSS DESIGN &nbsp; • &nbsp;
            </div>
            <div>
              Awards X7 Awwwards X6 BEHANCE X17 CSS DESIGN &nbsp; • &nbsp;
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
