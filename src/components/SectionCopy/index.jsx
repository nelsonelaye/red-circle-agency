import React from "react";
import MotionWrap from "../MotionWrap";

const SectionCopy = ({ title, content, children }) => {
  return (
    <section className="w-full mb-[5em]">
      <div className="flex sm:mb-[150px] max-lg:flex-wrap">
        <div className="w-[200px] whitespace-nowrap">
          <h2 className="w-[200px] mb-6">{title} </h2>
        </div>
        <div className="overflow-hidden">
          <MotionWrap>
            <h3 className="indent-[1.7em] w-fit text-[2em]  md:text-[4em] leading-[1.1]">
              {content}
            </h3>
          </MotionWrap>

          <div>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default SectionCopy;
