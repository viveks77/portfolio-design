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
      className="-mt-[5rem] min-h-full w-full rounded-t-[5rem] bg-default px-16 py-10 text-foreground-secondary"
    >
      <div
        ref={ref}
        className="mb-20 flex items-start justify-between px-20 pt-[4rem]"
      >
        <MotionDiv
          initial={{ opacity: 0, x: -100 }}
          animate={inView && { opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.6 }}
          className="w-1/4 font-semibold tracking-tighter"
        >
          {title}
        </MotionDiv>
        <div className="w-[25%]"></div>
        <div
          className="m-auto w-[50%] text-7xl font-semibold"
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
