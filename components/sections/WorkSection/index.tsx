"use client";

import { MotionDiv } from "@/components/common/Motion";
import seed from "@/helpers/seed.json";
import useSticky from "@hooks/useSticky";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WorkSection = () => {
  const {
    workSection: { title, skills },
  } = seed;

  const childRef = useRef<HTMLDivElement>(null);
  const [isSticky, top] = useSticky(childRef);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      style={{ position: isSticky ? "sticky" : "relative", top: -top }}
      ref={childRef}
      className="-mt-[5rem] min-h-full w-full rounded-t-[5rem] bg-default px-6 sm:px-12 md:px-16 py-10 text-foreground-secondary"
    >
      <div
        ref={ref}
        className="mb-10 sm:mb-20 flex flex-col sm:flex-row items-start justify-between px-6 sm:px-1 md:px-20 pt-10"
      >
        <MotionDiv
          initial={{ opacity: 0, x: -100 }}
          animate={inView && { opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.6 }}
          className="w-full mb-10 sm:w-1/3 md:w-1/4 font-semibold tracking-tighter text-sm sm:text-xl md:text-2xl"
        >
          {title}
        </MotionDiv>
        <div className="hidden sm:block sm:w-1/4"></div>
        <div
          className="m-auto w-full sm:w-[75%] md:w-[50%] text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold"
          style={{ lineHeight: "1.2" }}
        >
          {skills.map((s, i) => (
            <p key={i}>{s}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
