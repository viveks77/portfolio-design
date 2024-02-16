"use client";

import { MotionDiv, MotionImg } from "@/components/common/Motion";
import seed from "@/helpers/seed.json";
import useSticky from "@hooks/useSticky";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const {
    aboutSection: { title, description, imgSrc },
  } = seed;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const childRef = useRef<HTMLDivElement>(null);
  const [isSticky, top] = useSticky(childRef);

  return (
    <div
      style={{ position: isSticky ? "sticky" : "relative", top: -top }}
      ref={childRef}
      className="min-h-full w-full rounded-t-[5rem] bg-secondary px-16 py-10 text-foreground-secondary"
    >
      <div
        className="flex w-full flex-col items-center justify-center px-[6.6rem] pt-10 text-center"
        ref={ref}
      >
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={inView && { opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            type: "tween",
          }}
          className="text-[5rem] font-normal leading-none"
          style={{ letterSpacing: "-0.3rem" }}
        >
          {title}
        </MotionDiv>
        <div className="text-normal mt-16 w-1/2 space-y-5 font-semibold leading-none">
          {description.map((d, i) => (
            <p key={i}>{d.toUpperCase()}</p>
          ))}
        </div>
        <div className="mb-[5rem] mt-20 h-[650px] w-[440px] overflow-hidden rounded-full">
          <MotionImg
            initial={{ filter: "blur(10px)" }}
            whileInView={{ filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              type: "tween",
            }}
            className="h-full w-full object-cover"
            src={imgSrc}
            alt="profile picture"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
