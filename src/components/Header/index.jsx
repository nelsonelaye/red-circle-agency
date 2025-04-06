import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/circle-button.png";
import clsx from "clsx";
import styles from "@/styles/header.module.css";

const Header = () => {
  const links = ["Projects", "Services", "Contacts"];
  return (
    <header className="flex items-center pt-[20px] sm:pt-[30px]  px-[20px] sm:px-[125px] text-xl">
      <Image
        src={Logo}
        alt={""}
        width={40}
        height={40}
        className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] mr-[180px]"
      />
      <nav className=" items-center  hidden sm:flex">
        {links.map((e) => (
          <a
            key={e}
            href="#"
            className={clsx(styles.nav, "font-medium px-[35px] relative")}
          >
            {e}
          </a>
        ))}
      </nav>
      <a
        href="#"
        className={clsx(
          styles["project-btn"],
          "ml-auto sm:px-6 relative flex items-center justify-center whitespace-nowrap text-sm sm:text-base"
        )}
      >
        <div className={styles.circle}></div>
        Start a project
      </a>
    </header>
  );
};

export default Header;
